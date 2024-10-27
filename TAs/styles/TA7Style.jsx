import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ta7Container: {
        rowGap: 10
    },
    findMovieForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    findMovieInput: {
        backgroundColor: "#ff2211",
        color: "#fff",
        padding: 10,
        width: 200,
    },
    movieCard: {
        margin: 5,
        borderColor: "#ccc",
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center", // Centrar contenido en movieCard
        rowGap: 5,
    },
    moviePoster: {
        width: 200,
        aspectRatio: 2 / 3,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    movieSynopsis: {
        fontSize: 16,
    }
});

export default styles;