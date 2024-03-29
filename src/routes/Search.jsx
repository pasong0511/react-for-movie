import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../components/Movie/MovieItem";
import Loading from "../components/Loading/Loading";
import styles from "./Search.module.css";

function Search() {
    const { search } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovies = () => {
        for (let i = 1; i <= 100; i++) {
            setLoading(true);
            fetch(
                `https://yts.mx/api/v2/list_movies.json?page=${i}&sort_by=rating`
            )
                .then((res) => res.json())
                .then((json) => setMovies(json.data.movies));
        }
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getMovies();
        return;
    }, [search]);

    console.log(movies);

    return (
        <div className={styles.container}>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            coverImg={movie.medium_cover_image}
                            rating={movie.rating}
                            runtime={movie.runtime}
                            summary={movie.summary}
                            year={movie.year}
                            santa={search}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
