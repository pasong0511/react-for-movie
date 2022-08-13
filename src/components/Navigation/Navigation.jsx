import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

import { kategoryObj, kategoryKeyArr } from "../Atom/NavigaionList";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import LogoImg from "./Img/movie-icon.png";

function Navigation() {
    const [search, setSearch] = useState(null);

    //입력창에 값 넣기
    const onChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img
                        src={LogoImg}
                        alt="뭐볼래 로고"
                        className={styles.logoImg}
                    ></img>
                </Link>
            </div>

            <ul className={styles.navLists}>
                {kategoryKeyArr.map((key) => {
                    return (
                        <li key={key} className={styles.navItem}>
                            <Link
                                className={styles.navText}
                                to={`/page/${kategoryObj[key]}/1`}
                            >
                                {key}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.searchArea}>
                <div className={styles.searchBox}>
                    <form>
                        <input
                            type="text"
                            placeholder="영화 검색"
                            value={search}
                            onChange={onChange}
                            onMouseOut={() => {
                                setSearch("");
                            }}
                            className={styles.searchInput}
                        ></input>
                        <Link to={`/search/${search}`}>
                            <button className={styles.Button}>
                                <IoSearchOutline
                                    className={styles.searchButton}
                                />
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Navigation;
