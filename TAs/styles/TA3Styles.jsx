import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ta3Container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10
    },
    taskForm: {
        backgroundColor: "#7d94fa",
        width: 200,
        height: 150,
        padding: 20
    },
    taskList: {
        backgroundColor: "#fa9e7d",
        width: 150,
        rowGap: 10
    },
    taskItem: {
        margin: 5
    },
    deleteAction: {
        backgroundColor: "#dd1111"
    },
    deleteButtonText: {
        fontWeight: "bold",
        backgroundColor: "#dd1111",
        padding: 3
    },
    taskTitle: {
        fontSize: 20
    },
    taskDescription: {
        fontSize: 16
    }
});

export default styles;