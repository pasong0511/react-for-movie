/*Movie.js*/
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    if (coverImg == "") {                   //커버 이미지가 없는 경우 종료
        return null
    }
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p className={styles.movie__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

//propTypes 정의
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired        //배열로 변환
}

export default Movie