import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CarouselBtn from "./CarouselBtn";

import MovieItem from "../Movie/MovieItem";

import styles from "./SlideLists.module.css";

const ITEM_WIDTH = 400; // 아이템 너비-전역으로 값 지정

export default function SlideLists({ kategorie }) {
    const [items, setItems] = useState([]);
    const [maxCnt, setMaxCnt] = useState(0); // 화면에 최대로 보여질 개수
    const [startIdx, setStartIdx] = useState(0); // 슿라이드 시작 id

    const getMovies = async () => {
        // console.log(`getMovie`)
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?limit=100&${kategorie}&sort_by=rating`
            )
        ).json();
        setItems(json.data.movies);
        // console.log(movies[0])
    };

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        const updateCnt = () => {
            setMaxCnt(Math.floor((window.innerWidth - 64) / ITEM_WIDTH)); //보여줄개수 = (브라우저 너비 - 공백 - 여백 / 아이템 너비)
        };
        updateCnt();
        window.addEventListener("resize", updateCnt); //브라우저 리사이즈가 발생하는 경우
        return () => {
            window.removeEventListener("resize", updateCnt);
        };
    }, [items, startIdx]);

    const currentItems = items.slice(startIdx, startIdx + maxCnt); //화면에 보여줄 아이템 개수 자르기
    const isPrevActive = startIdx !== 0; // startIdx가 0일 경우 비활성화
    const isNextActive = startIdx + maxCnt < items.length; // startIdx + cnt가 전체 개수보다 크면 비활성화

    return (
        <div className={styles.carouseContent}>
            {items.length !== 0 && (
                <CarouselBtn
                    onNext={() => {
                        //next 버튼 클릭
                        if (isNextActive) {
                            //next 버튼의 활성화 여부 체크
                            setStartIdx(startIdx + maxCnt);
                        }
                    }}
                    onPrev={() => {
                        //prev 버튼 클릭
                        if (isPrevActive) {
                            //prev 버튼의 활성화 여부 체크
                            const prevIdx = startIdx - maxCnt;
                            setStartIdx(prevIdx < 0 ? 0 : prevIdx); // 다음 id값이 0보다 작을 경우 0으로 변경
                        }
                    }}
                    isPrevActive={isPrevActive}
                    isNextActive={isNextActive}
                />
            )}
            <ul className={styles.carouselLists}>
                {currentItems.map((movie) => (
                    <MovieItem
                        isShort={true}
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        coverImg={movie.medium_cover_image}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        summary={movie.summary}
                        year={movie.year}
                    />
                ))}
            </ul>
        </div>
    );
}
