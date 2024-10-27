import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/TA1Styles.jsx";
import { SafeAreaView } from "react-native-safe-area-context";

function TA1Screen() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <SafeAreaView>
            <View style={styles.ta1Container}>
                <Text>TA1</Text>
                <Text style={styles.countText}>Contador: {count}</Text>
                <Pressable style={styles.incrementButton} onPress={increment}>
                    <Text style={styles.incrementButtonText}>
                        INCREMENTAR
                    </Text>
                </Pressable>
                <Pressable style={styles.decreaseButton} onPress={decrease}>
                    <Text style={styles.decreaseButtonText}>
                        DECREMENTAR
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default TA1Screen;