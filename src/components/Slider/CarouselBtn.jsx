import styles from "./CarouselBtn.module.css";

export default function CarouselBtn({
    onPrev,
    onNext,
    isPrevActive,
    isNextActive,
}) {
    return (
        <div className={styles.buttonGroup}>
            <i
                className={`${styles.button} ${
                    isPrevActive ? "" : styles.disabled
                }`}
                onClick={onPrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
            </i>
            <i
                className={`${styles.button} ${
                    isNextActive ? "" : styles.disabled
                }`}
                onClick={onNext}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
            </i>
        </div>
    );
}
