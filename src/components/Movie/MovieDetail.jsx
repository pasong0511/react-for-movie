import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({
    background_image_original,
    coverImg,
    rating,
    runtime,
    description_full,
    title,
    genres,
}) {
    return (
        <div className={styles.movie}>
            <div className={styles.background}>
                <img
                    className={styles.Detail_bg}
                    src={background_image_original}
                    alt=""
                />
            </div>
            <div className={styles.show}>
                <div className={styles.shortView}>
                    <div className={styles.infoImg}>
                        <img src={coverImg} alt={title} />
                    </div>
                    <div className={styles.shortView_letters}>
                        <h3 className={styles.infotitle}>{title}</h3>
                        <b>{"rating"}</b>
                        <span className={styles.infoRating}>
                            {rating ? `${rating} / 10` : null}
                        </span>
                        <b>{"runtime"}</b>
                        <span className={styles.runtime}>
                            {runtime ? `${runtime} (min)` : null}
                        </span>
                        {genres ? (
                            <div className={styles.infoGenreArea}>
                                <b>{"genres"}</b>
                                <ul className={styles.infoGenresList}>
                                    {genres.map((g) => (
                                        <li
                                            key={g}
                                            className={styles.infoGenres}
                                        >
                                            {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
                {description_full ? (
                    <div className={styles.descript}>
                        <span>{description_full}</span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

MovieDetail.prototypes = {
    background_image_original: PropTypes.string.isRequired,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description_full: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
