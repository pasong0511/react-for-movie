import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

import { kategoryObj, kategoryKeyArr } from "../Atom/NavigaionList";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

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
                        <ul>
                            <li>
                                <Link to={`/page/${kategoryObj[key]}/1`}>
                                    {key}
                                </Link>
                            </li>
                        </ul>
                    );
                })}
            </div>
            <div>
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder="영화 검색"
                            value={search}
                            onChange={onChange}
                            onClick={onReset}
                        ></input>
                        <Link to={`/search/${search}`}>
                            <button>
                                <BiSearchAlt2></BiSearchAlt2>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Navigation;
