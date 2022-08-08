import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

import { kategoryObj, kategoryKeyArr } from "../Atom/NavigaionList";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Navigation() {
    const [search, setSearch] = useState("");

    //입력창에 값 넣기
    const onChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    //상태 초기화
    const onReset = () => {
        setSearch("");
    };

    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <Link to={"/"}>오늘뭐볼까</Link>
            </div>

            <div>
                {kategoryKeyArr.map((key) => {
                    return (
                        <ul className={styles.navLists}>
                            <li>
                                <span className={styles.navText}>
                                    <Link to={`/page/${kategoryObj[key]}/1`}>
                                        {key}
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    );
                })}
            </div>
            <div>
                <div>
                    <form>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                placeholder="영화 검색"
                                value={search}
                                onChange={onChange}
                                onClick={onReset}
                                className={styles.searchInput}
                            ></input>
                            <Link to={`/search/${search}`}>
                                <IoSearchOutline
                                    className={styles.searchButton}
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Navigation;
