import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/TA5Styles.jsx";

function TA5Screen() {
    const images = [
        { id: "1", src: require("../assets/image1.jpeg"), description: "Ardilla" },
        { id: "2", src: require("../assets/image2.jpg"), description: "Zorro" },
        { id: "3", src: require("../assets/image2.jpg"), description: "Zorro 2" },
        { id: "4", src: require("../assets/image1.jpeg"), description: "Ardilla 2" }
    ];

    return (
        <SafeAreaView style={styles.ta5Container}>
            <FlatList
                data={images}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={item.src} />
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

export default TA5Screen;