import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

function TA13Screen() {
    const [facing, setFacing] = useState("back");

    /**
     * Cambia el lado de la cámara.
     */
    function toggleCameraFacing() {
        setFacing(current => (current === "back" ? "front" : "back"));
    }

    const [permission, requestPermission] = useCameraPermissions(); // Checkea o pide permisos a la cámara.
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);

    /**
     * Toma un foto.
     */
    async function takePicture() {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            console.log(data.uri);
            setImage(data.uri);
        }
    };

    if (!permission) {
        // Los permisos de la cámara están cargando.
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Se necesita permiso para acceder a la cámara</Text>
                <Button onPress={requestPermission} title="DAR PERMISO" />
            </View>
        );
    }

    return (
        <ScrollView style={{flex: 1}}>
            <CameraView style={styles.camera} facing={facing} ref={(ref) => setCamera(ref)}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Rotar Cámara</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text style={styles.text}>Tomar Foto</Text>
                    </TouchableOpacity>
                </View>

            </CameraView>

            <Text>FOTO</Text>
            {image ? (<Image source={{ uri: image }} style={styles.image} />) : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    message: {
        textAlign: "center",
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default TA13Screen;