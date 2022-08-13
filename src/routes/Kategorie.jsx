import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../components/Movie/MovieItem";
import { Link } from "react-router-dom";
import styles from "./Kategorie.module.css";
import Loading from "../components/Loading/Loading";

const pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Kategorie() {
    const { group, page } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getMovies();
        return;
    }, [group, page]);

    return (
        // 카테고리별 영화 리스트 렌더링
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
                        />
                    ))}
                </div>
            )}
            {/* 페이지네이션 */}
            {loading ? null : (
                <div className={styles.pagenation}>
                    <div className={`${styles.pageList}`}>
                        {pageList.map((index) => {
                            return (
                                <Link
                                    key={index}
                                    to={`/page/${group}/${index}`}
                                    className={`${
                                        Number(index) === Number(page)
                                            ? styles.isActive
                                            : ""
                                    }`}
                                >
                                    {index}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Kategorie;
