import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from "./screens/HomeScreen";
import TA1Screen from "./screens/TA1Screen.jsx";
import TA2Screen from "./screens/TA2Screen.jsx";
import TA3Screen from "./screens/TA3Screen.jsx";
import TA4Screen from "./screens/TA4Screen.jsx";
import TA5Screen from "./screens/TA5Screen.jsx";
import TA6Screen from "./screens/TA6Screen.jsx";
import TA7Screen from "./screens/TA7Screen.jsx";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TA1" component={TA1Screen} />
          <Stack.Screen name="TA2" component={TA2Screen} />
          <Stack.Screen name="TA3" component={TA3Screen} />
          <Stack.Screen name="TA4" component={TA4Screen} />
          <Stack.Screen name="TA5" component={TA5Screen} />
          <Stack.Screen name="TA6" component={TA6Screen} />
          <Stack.Screen name="TA7" component={TA7Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;