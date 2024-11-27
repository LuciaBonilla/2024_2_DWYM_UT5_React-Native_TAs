import { useEffect, useState } from "react";
import { Button, Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

function TA11Screen() {
    const [image, setImage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [permissionStatus, setPermissonStatus] = useState();

    async function pickImage() {
        if (permissionStatus === "granted") {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    useEffect(() => {
        async function requestPermission() {
            let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("El permiso para acceder a la galería fue denegado.");
            }
            setPermissonStatus(status);
        }

        requestPermission();
    }, []);

    return (
        <View style={styles.container}>
            {
                errorMsg ? (
                    <Text>{errorMsg}</Text>
                ) : (
                    <>
                        <Button title="Elige una imagen de tu galería" onPress={pickImage} />
                        {image && <Image source={{ uri: image }} style={styles.image} />}
                        <Text>{permissionStatus === "granted" ? "PERMITIDO" : "NO PERMITIDO"}</Text>
                    </>
                )
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default TA11Screen;