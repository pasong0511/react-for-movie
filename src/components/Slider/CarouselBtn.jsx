import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
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
                <BsFillCaretLeftFill />
            </i>
            <i
                className={`${styles.button} ${
                    isNextActive ? "" : styles.disabled
                }`}
                onClick={onNext}
            >
                <BsFillCaretRightFill />
            </i>
        </div>
    );
}
