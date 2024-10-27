import { useState } from "react";
import { FlatList, View, TextInput, Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/TA3Styles";

function TA3Screen() {
    const [tasks, setTasks] = useState([]);
    let [taskID, setTaskID] = useState(0);

    function handleAddTask(title, description) {
        setTaskID(taskID + 1);
        setTasks([...tasks, { title, description, id: taskID }]);
    }

    function handleDeleteTask(taskID) {
        setTasks(tasks.filter((task) => task.id != taskID));
    }

    return (
        <SafeAreaView>
            <View style={styles.ta3Container}>
                <TaskForm handleAddTask={handleAddTask} />
                <TaskList tasksToRender={tasks} handleDeleteTask={handleDeleteTask} />
            </View>
        </SafeAreaView>
    );
}

function TaskList({ tasksToRender, handleDeleteTask }) {
    return (
        <FlatList style={styles.taskList}
            data={tasksToRender}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Button
                        title="BORRAR"
                        onPress={() => handleDeleteTask(item.id)}
                    />
                </View>
            )}
            keyExtractor={item => item.id}
        />
    );
}

function TaskForm({ handleAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <View style={styles.taskForm}>
            <TextInput
                placeholder="TÍTULO"
                onChangeText={(newTitle) => setTitle(newTitle)}
                value={title}
            />
            <TextInput
                placeholder="DESCRIPCIÓN"
                onChangeText={(newDescription) => setDescription(newDescription)}
                value={description}
            />
            <Button
                title="AÑADIR"
                onPress={() => handleAddTask(title, description)}
            />
        </View>
    );
}

export default TA3Screen;