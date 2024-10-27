import { useState } from "react";
import { Button, TextInput, View, Image, Text, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/TA7Style.jsx";

function TA7Screen() {
    const API_URI = "http://www.omdbapi.com/?apikey=36b0eb73&";
    const [movieIsFound, setMovieIsFound] = useState(false);

    // Datos de la película.
    const [posterImgSrc, setPosterImgSrc] = useState(null);
    const [movieTitle, setMovieTitle] = useState("");
    const [movieSynopsis, setMovieSynopsis] = useState("");

    async function findMovieByTitle(title) {
        try {
            const response = await fetch(API_URI + `t=${title}`, { method: "GET" });
            const data = await response.json();

            if (data.Response === "False") {
                setPosterImgSrc(null);
                setMovieTitle("");
                setMovieSynopsis("");
                setMovieIsFound(false);
            } else {
                setPosterImgSrc(data.Poster);
                setMovieTitle(data.Title);
                setMovieSynopsis(data.Plot);
                setMovieIsFound(true);
            }
        } catch (error) {
            Alert.alert("Error", "No se pudo obtener los datos de la película.");
            console.error("Error fetching movie:", error);
        }
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.ta7Container} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                <FindMovieForm findMovieByTitle={findMovieByTitle} />
                {movieIsFound && posterImgSrc ? (
                    <MovieCard
                        imgSrc={posterImgSrc}
                        title={movieTitle}
                        synopsis={movieSynopsis}
                    />
                ) : (
                    <Text>Película no encontrada</Text>
                )}
            </ScrollView>
        </SafeAreaView >
    );
}

function FindMovieForm({ findMovieByTitle }) {
    const [title, setTitle] = useState("");

    return (
        <View style={styles.findMovieForm}>
            <TextInput
                style={styles.findMovieInput}
                placeholder="TÍTULO"
                onChangeText={(newTitle) => setTitle(newTitle)}
                value={title}
            />
            <Button
                title="BUSCAR PELÍCULA"
                onPress={() => {
                    if (title) {
                        findMovieByTitle(title);
                    } else {
                        Alert.alert("Error", "Ingresa un título de película.");
                    }
                }}
            />
        </View>
    );
}

function MovieCard({ imgSrc, title, synopsis }) {
    return (
        <View style={styles.movieCard}>
            {imgSrc ? (
                <Image style={styles.moviePoster} source={{ uri: imgSrc }} />
            ) : (
                <Text>No se pudo cargar la imagen</Text>
            )}
            <Text style={styles.movieTitle}>{title}</Text>
            <Text style={styles.movieSynopsis}>{synopsis}</Text>
        </View>
    );
}

export default TA7Screen;