import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/TA2Styles.jsx";

function TA2Screen() {
    const [text, setText] = useState("");

    return (
        <SafeAreaView>
            <View style={styles.ta2Container}>
                <TextInput style={styles.textInput} onChangeText={(newText) => setText(newText)} value={text} />
                <Text style={styles.text}>
                    TEXTO: {text}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default TA2Screen;