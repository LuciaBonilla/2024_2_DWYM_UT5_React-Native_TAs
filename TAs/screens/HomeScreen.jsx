import * as React from "react";
import { Button, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text>Home Screen</Text>
                <Button
                    title="TA1"
                    onPress={() => navigation.navigate("TA1")}
                />
                <Button
                    title="TA2"
                    onPress={() => navigation.navigate("TA2")}
                />
                <Button
                    title="TA3"
                    onPress={() => navigation.navigate("TA3")}
                />
                <Button
                    title="TA4"
                    onPress={() => navigation.navigate("TA4")}
                />
                <Button
                    title="TA5"
                    onPress={() => navigation.navigate("TA5")}
                />
                <Button
                    title="TA6"
                    onPress={() => navigation.navigate("TA6")}
                />
                <Button
                    title="TA7"
                    onPress={() => navigation.navigate("TA7")}
                />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;