import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import * as Location from "expo-location";

function TA10Screen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        async function requestLocationPermission() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("El permiso para accedear a la locación fue denegado.");
                return;
            }
        }

        async function getLocation() {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        };

        requestLocationPermission();
        getLocation();
    }, []);

    let text = "ESPERANDO...";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location, null, "\t");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
});

export default TA10Screen;