import styles from "./Slide.module.css";
import React from "react";
import SlideLists from "./SlideLists";

import { kategoryObj, kategoryKeyArr } from "../Atom/NavigaionList";

export default function Slide() {
    return (
        <div>
            {kategoryKeyArr.map((group) => {
                return (
                    <div className={styles.content}>
                        <div>{group}</div>
                        <div className={styles.carouselArea}>
                            <SlideLists kategory={kategoryObj[group]} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
