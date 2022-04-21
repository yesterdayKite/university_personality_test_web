import React, { createRef, useEffect, useState } from 'react';
import styles from './survey.module.css';
import { useNavigate } from 'react-router-dom'; // 페이지 정보 객체 사용 : 이동 등에 사용
import Questions from '../../api/questionsApi.json'; // 질문 api

const Survey = () => {
    const [loading, setLoading] = useState(false); // loading 정보
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = createRef(null);
    const TOTAL_SLIDES = 12; // 총 질문 갯수
    const navigate = useNavigate(); // 페이지 정보 객체
    const [mbti, setMbti] = useState([]);

    const nextSlideFir = () => {
        setMbti(mbti + Questions[num].answers[0].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };

    const nextSlideSec = () => {
        setMbti(mbti + Questions[num].answers[1].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };

    const mbtiChecker = () => {
        setLoading(true);
        let map = {};
        let result = [];
        // mbti 대답 수집
        for (let i = 0; i < mbti.length; i++) {
            if (mbti[i] in map) {
                map[mbti[i]] += 1;
            } else {
                map[mbti[i]] = 1;
            }
        }
        // 2개 이상 긍정 대답한 요소가 mbti 요소 중 한개가 됨
        for (let count in map) {
            if (map[count] >= 2) {
                if (count === 'E' || count === 'I')
                    result[0] = count;
                else if (count === 'N' || count === 'S')
                    result[1] = count;
                else if (count === 'T' || count === 'F')
                    result[2] = count;
                else
                    result[3] = count;

            }
        }
        setTimeout(() => {
            const examResult = result.join('');
            navigate(`/result/${examResult}`); // 결과페이지로 이동
        }, 3000);
    };

    useEffect(() => {
        currentSlide > TOTAL_SLIDES && mbtiChecker();
    }, [currentSlide]);

    return (
        <>
            <section className={styles.container}>
                {!loading && (
                    <>
                        <div className={styles.slider} ref={slideRef}>
                            {Questions.map((item) => {
                                return (
                                    <div
                                        className={styles.content}
                                        key={item.id}
                                    >
                                        <div className={styles.top}>
                                            <div
                                                className={styles.mbti__counter}
                                            >
                                                <span
                                                    className={
                                                        styles.mbti__progress__color
                                                    }
                                                >
                                                    {currentSlide}
                                                </span>
                                                <span
                                                    className={
                                                        styles.mbti__end__color
                                                    }
                                                >
                                                    /{TOTAL_SLIDES}
                                                </span>
                                            </div>
                                            <h1
                                                className={
                                                    styles.mbti__question
                                                }
                                            >
                                                {item.question}
                                            </h1>
                                        </div>
                                        <article
                                            className={styles.mbti__btn__box}
                                        >
                                            <button
                                                className={styles.mbti__button}
                                                onClick={nextSlideFir}
                                            >
                                                {item.answers[0].content}
                                            </button>
                                            <button
                                                className={styles.mbti__button}
                                                onClick={nextSlideSec}
                                            >
                                                {item.answers[1].content}
                                            </button>
                                        </article>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                {loading && (
                    <div className={styles.loading__container}>
                        <img
                            className={styles.ticket}
                            src="../public/img/Spinner.svg"
                        />
                        <div className={styles.loading}></div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Survey;
