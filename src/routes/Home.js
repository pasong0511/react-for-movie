/*Home.js*/
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState(true)
    const API_KEY = `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`

    const getMovies = async () => {
        const json = await (await fetch(`${API_KEY}`)).json()
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;