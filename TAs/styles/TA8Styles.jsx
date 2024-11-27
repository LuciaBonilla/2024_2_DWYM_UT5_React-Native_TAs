import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");

const fontSize = windowDimensions.width > 400 ? 32 : 16;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f",
    },
    title: {
        fontSize: fontSize,
        textAlign: "center",
    },
    image: {
        width: windowDimensions.width * 0.80,
        height: windowDimensions.width * 0.80,
        alignSelf: "center"
    },
});


export default styles;