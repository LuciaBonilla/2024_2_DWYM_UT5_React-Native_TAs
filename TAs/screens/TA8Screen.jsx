import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/TA8Styles.jsx";
import { Text, Image, ScrollView, View } from "react-native";

import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");

function TA8Screen() {
    const [dimensions, setDimensions] = useState({
        window: windowDimensions
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            "change",
            ({ window, screen }) => {
                setDimensions({ window, screen });
            },
        );
        return () => subscription?.remove();
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>TA8 - Dimensionando según el tamaño de pantallaaaaaaaaaaaaaaaaaaaaaaa</Text>

                <Image
                    style={styles.image}
                    source={require("../assets/image1.jpeg")}
                    resizeMode="contain"
                />

                <Text>Window Dimensions (lo que ocupa la app)</Text>
                {Object.entries(dimensions.window).map(([key, value]) => (
                    <Text>
                        {key} - {value}
                    </Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default TA8Screen;