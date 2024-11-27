import { useEffect, useState } from "react";
import { Button, Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

function TA12Screen() {
    const [image, setImage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    async function pickImage() {
        const result = await ImagePicker.getCameraPermissionsAsync();

        console.log(result);

        if (result.granted) {
            let result = await ImagePicker.launchCameraAsync();

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } else {
            setErrorMsg("El permiso para acceder a la cámara fue denegado.")
        }
    };

    return (
        <View style={styles.container}>
            {
                errorMsg ? (
                    <Text>{errorMsg}</Text>
                ) : (
                    <>
                        <Button title="Toma una foto" onPress={pickImage} />
                        {image && <Image source={{ uri: image }} style={styles.image} />}
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

export default TA12Screen;