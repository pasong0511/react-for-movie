import styles from "./Loading.module.css";
import { BiRun } from "react-icons/bi";

function Loading() {
    return (
        <div className={styles.Loading}>
            <BiRun></BiRun>
            <h1>Loading...</h1>
        </div>
    );
}

export default Loading;
