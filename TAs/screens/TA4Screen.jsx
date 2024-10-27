import { useState } from "react";
import { Button, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TA4Screen() {
    const image1 = require("../assets/icon.png");
    const image2 = require("../assets/favicon.png");

    const [image, setImageSrc] = useState(image1);

    function handleChangeImage() {
        setImageSrc(image === image1 ? image2 : image1);
    }

    return (
        <SafeAreaView>
            <View>
                <Image style={{ width: 200, height: 200 }} source={image} />
                <Button title="CAMBIAR" onPress={() => handleChangeImage()} />
            </View>
        </SafeAreaView>
    )
}

export default TA4Screen;