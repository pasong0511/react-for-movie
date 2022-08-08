/*Movie.js*/
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import React, { useState } from "react";

function Movie({ id, coverImg, title, year, summary, genres }) {
    const [saved, setSaved] = useState(!!localStorage.getItem(id));

    if (coverImg === "") {
        //커버 이미지가 없는 경우 종료
        return null;
    }
    const onClick = (e) => {
        if (e.target.localName === "path") {
            //북마크 아이콘 표시
            if (!saved) {
                localStorage.setItem(id, true); //로컬 스토리지에 id와 true 상태 저장
            } else {
                localStorage.removeItem(id); //로컬 스토리지에서 제거
            }
            setSaved((current) => !current);
        }
    };
    return (
        <li className={styles.movieItem} onClick={onClick}>
            <div className={styles.movie}>
                <div className={styles.bookMark}>
                    <svg
                        className={`${styles.bookMarkIcon} ${
                            saved ? styles.isSave : ""
                        }`}
                        width="24"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.64 30.86"
                    >
                        <path d="M22.93,0a8.18,8.18,0,0,1,3.44.74,8.71,8.71,0,0,1,2.77,2,9.78,9.78,0,0,1,1.84,3,10.27,10.27,0,0,1,.66,3.71,11.17,11.17,0,0,1-1,4.61A20.25,20.25,0,0,1,28,18.46a54.28,54.28,0,0,1-4.28,4.65c-1.67,1.62-3.51,3.44-5.54,5.44l-2.31,2.31-2.3-2.27q-3.06-3-5.55-5.48a54.28,54.28,0,0,1-4.28-4.65A19.86,19.86,0,0,1,1,14.1,11.17,11.17,0,0,1,0,9.49,10.27,10.27,0,0,1,.66,5.78a9.78,9.78,0,0,1,1.84-3,8.71,8.71,0,0,1,2.77-2A8.18,8.18,0,0,1,8.71,0a8.53,8.53,0,0,1,3.93,1,9.37,9.37,0,0,1,3.18,2.65A9.37,9.37,0,0,1,19,1,8.53,8.53,0,0,1,22.93,0Z" />
                    </svg>
                </div>
                <img src={coverImg} alt={title} className={styles.movie__img} />
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p className={styles.movie__summary}>
                    {summary.length > 235
                        ? `${summary.slice(0, 235)}...`
                        : summary}
                </p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
}

//propTypes 정의
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열로 변환
};

export default Movie;
