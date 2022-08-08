import React from "react";
import { Link } from "react-router-dom";
import styles from "./Slide.module.css";
import SlideLists from "./SlideLists";

import { kategoryObj, kategoryKeyArr } from "../Atom/NavigaionList";

export default function Slide() {
    return (
        <div>
            {kategoryKeyArr.map((group) => {
                return (
                    <div className={styles.content}>
                        <div className={styles.slideTitle}>
                            <Link to={`/page/${group}`}>{group}</Link>
                        </div>
                        <div className={styles.carouselArea}>
                            <SlideLists kategory={kategoryObj[group]} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
