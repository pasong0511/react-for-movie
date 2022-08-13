import styles from "./Loading.module.css";
import { BiRun } from "react-icons/bi";

function Loading() {
    return (
        <div className={styles.Loading}>
            <div className={styles.LoadingGroup}>
                <BiRun className={styles.runningIcon}></BiRun>
                <h1>Loading...</h1>
            </div>
        </div>
    );
}

export default Loading;
