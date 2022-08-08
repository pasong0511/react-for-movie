import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../components/Movie/MovieItem";
import styles from "./Search.module.css";
import Loading from "../components/Loading/Loading";

function Search() {
    const { search } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movArr, setMovArr] = useState([]);

    const getMovies = () => {
        // console.log(`getmovie`)
        for (let i = 1; i <= 100; i++) {
            setLoading(true);
            setMovies([]);
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
        setMovArr([]);
        getMovies();
    }, [search]);

    //이 부분이 애매함
    useEffect(() => {
        if (movies.length === 0) {
            return;
        } else {
            setMovArr(
                [
                    movArr,
                    ...[
                        movies.filter(
                            (movie) =>
                                movie.summary
                                    .toLowerCase()
                                    .indexOf(search.toLowerCase()) !== -1 ||
                                movie.description_full
                                    .toLowerCase()
                                    .indexOf(search.toLowerCase()) !== -1 ||
                                movie.title
                                    .toLowerCase()
                                    .indexOf(search.toLowerCase()) !== -1
                        ),
                    ],
                ]
                    .flat()
                    .map((movie, i, arr) => {
                        for (let j = i + 1; j < arr.length; j++) {
                            if (
                                movie.id === arr[j].id &&
                                arr[j] !== undefined &&
                                movie !== undefined
                            ) {
                                console.log(i, j);
                                console.log(movie.id, arr[j].id);
                                arr.splice(j, 1);
                                j -= 1;
                            }
                        }
                        return movie;
                    })
                    .sort((a, b) => b["rating"] - a["rating"])
            );
        }
    }, [movies]);

    console.log(movies);

    return (
        <div className={styles.container}>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.movies}>
                    {movArr.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            coverImg={movie.medium_cover_image}
                            rating={movie.rating}
                            runtime={movie.runtime}
                            summary={movie.summary}
                            year={movie.year}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
