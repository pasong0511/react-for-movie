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
                    <div
                        key={kategoryObj[group]}
                        className={styles.slideContent}
                    >
                        <div className={styles.slideTitleArea}>
                            <Link
                                className={styles.slideTitle}
                                to={`/page/${group}/1`}
                            >
                                {group}
                            </Link>
                        </div>
                        <div className={styles.slideListsArea}>
                            <SlideLists kategorie={kategoryObj[group]} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
