import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ta1Container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10
    },
    countText: {
        color: "#a8324a",
        backgroundColor: "#56e87d",
        padding: 10,
        borderRadius: 10,
        fontWeight: "bold"
    },
    incrementButton: {
        backgroundColor: "#a85e32",
        padding: 10,
        borderRadius: 10
    },
    decreaseButton: {
        backgroundColor: "#3248a8",
        padding: 10,
        borderRadius: 10
    },
    incrementButtonText: {
        color: "#fff",
        fontWeight: "bold"
    },
    decreaseButtonText: {
        color: "#fff",
        fontWeight: "bold"
    }
});

export default styles;