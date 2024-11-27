import React from "react";
import { Platform, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TA9Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>SISTEMA OPERATIVO</Text>
                <Text style={styles.value}>{Platform.OS}</Text>

                <Text>SISTEMA OPERATIVO Version</Text>
                <Text style={styles.value}>{Platform.Version}</Text>

                <Text>es TV?</Text>
                <Text style={styles.value}>{Platform.isTV.toString()}</Text>

                {Platform.OS === "ios" && (
                    <Text style={styles.text}>iOS</Text>
                )}

                {Platform.OS === "android" && (
                    <Text style={styles.text}>SOY ANDROID</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    value: {
        fontWeight: "600",
        padding: 4,
        marginBottom: 8,
    },
    text: {
        backgroundColor: "#a67",
        textAlign: "center"
    }
});

export default TA9Screen;