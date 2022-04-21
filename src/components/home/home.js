import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Home = () => {
    const url = window.location.href; // url 복사
    const copyAlert = () => {
        alert('링크 생성!');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src={require('../../api/api_img/ISFP.png')}
                            alt="로고"
                        />
                    </div>현재 총 2,606명이 참여했습니다.
                    <div className={styles.middle}>
                        <h2 className={styles.header}>짤로 보는 내 대학생활 테스트</h2>
                        <p>최신 유행 짤로 내 대학생활을 나타낸다면?</p>
                        <p></p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/survey" className={styles.start__button}>
                            테스트 시작하기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <CopyToClipboard text={url}>
                            <button
                                className={styles.start__button}
                                onClick={copyAlert}
                            >
                                링크복사
                                <FontAwesomeIcon
                                    icon={faCopy}
                                    className={styles.icon}
                                />
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
