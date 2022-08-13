import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { IoIosHeart } from "react-icons/io";

function MovieItem({
    isShort,
    id,
    coverImg,
    title,
    rating,
    runtime,
    year,
    summary,
}) {
    const [saved, setSaved] = useState(!!localStorage.getItem(id));

    if (coverImg === "") {
        //커버 이미지가 없는 경우 종료
        return null;
    }
    const onClick = (e) => {
        console.log("클릭");
        if (e.target.localName === "path") {
            if (!saved) {
                localStorage.setItem(id, true); //로컬 스토리지에 id와 true 상태 저장
            } else {
                localStorage.removeItem(id); //로컬 스토리지에서 제거
            }
            setSaved((current) => !current);
        }
    };

    return (
        <>
            {isShort ? (
                <div className={styles.movieItemShort} onClick={onClick}>
                    <div className={styles.bookMark}>
                        <IoIosHeart
                            className={`${styles.bookMarkIcon} ${
                                saved ? styles.isSave : ""
                            }`}
                        />
                    </div>
                    <div className={styles.movieContent}>
                        <div className={styles.movieInfo}>
                            <div className={styles.infoImg}>
                                <img src={coverImg} alt={title} />
                            </div>
                            <div className={styles.infoGroup}>
                                <div className={styles.infotitle}>
                                    <h3>
                                        <Link to={`/movie/${id}`}>
                                            {title.length > 35
                                                ? `${title.slice(0, 35)}...`
                                                : title}
                                        </Link>
                                    </h3>
                                </div>
                                <div className={styles.infoDesc}>
                                    {year ? (
                                        <span className={`${styles.infoYear}`}>
                                            {`${year}`}
                                        </span>
                                    ) : null}

                                    {rating ? (
                                        <span
                                            className={`${styles.infoRating}`}
                                        >
                                            {`${rating}/10`}
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.movieItemBig} onClick={onClick}>
                    <div className={`${styles.bookMark}`}>
                        <IoIosHeart
                            className={`${styles.bookMarkIcon} ${
                                saved ? styles.isSave : ""
                            }`}
                        />
                    </div>
                    <div className={styles.movieContentBig}>
                        <div className={styles.movieInfoBig}>
                            <div className={styles.infoImg}>
                                <img src={coverImg} alt={title} />
                            </div>
                            <div className={styles.infoGroupBig}>
                                <div
                                    className={`${styles.infotitle} ${styles.big}`}
                                >
                                    <h3>
                                        <Link to={`/movie/${id}`}>
                                            {title.length > 35
                                                ? `${title.slice(0, 35)}...`
                                                : title}
                                        </Link>
                                    </h3>
                                </div>
                                <div className={styles.infoDesc}>
                                    {year ? (
                                        <span className={`${styles.infoYear}`}>
                                            {`${year}`}
                                        </span>
                                    ) : null}

                                    {rating ? (
                                        <span
                                            className={`${styles.infoRating}`}
                                        >
                                            {`${rating}/10`}
                                        </span>
                                    ) : null}

                                    {runtime ? (
                                        <span className={`${styles.runtime}`}>
                                            {`${runtime}(min)`}
                                        </span>
                                    ) : null}
                                </div>
                                {summary ? (
                                    <span className={`${styles.summary}`}>
                                        {summary.length > 180
                                            ? `${summary.slice(0, 180)}...`
                                            : summary}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

MovieItem.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    download_count: PropTypes.number,
    summary: PropTypes.string,
};

export default MovieItem;
