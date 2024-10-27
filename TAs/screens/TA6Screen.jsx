import { useState } from "react";
import { FlatList, View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/TA3Styles";
import { Swipeable } from 'react-native-gesture-handler';

function TA6Screen() {
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
    function renderRightActionsTask(taskID) {
        return (
            <TouchableOpacity style={styles.deleteAction} onPress={() => handleDeleteTask(taskID)}>
                <Text style={styles.deleteButtonText}>ELIMINAR TAREA</Text>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList
            style={styles.taskList}
            data={tasksToRender}
            renderItem={({ item }) => (
                <Swipeable renderRightActions={() => renderRightActionsTask(item.id)}>
                    <View style={styles.taskItem}>
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <Text style={styles.taskDescription}>{item.description}</Text>
                    </View>
                </Swipeable>
            )}
            keyExtractor={(item) => item.id.toString()}
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

export default TA6Screen;