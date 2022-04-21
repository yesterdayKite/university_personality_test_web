import styles from './results.module.css';
import common_style from '../../styles/common_css.css';
import styled, {css} from "styled-components";
import {Link, useParams} from 'react-router-dom';
import Mbtis from '../../api/mbtiApi.json'; // mbti 결과 api

// 아이콘, 버튼 관련
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Result = ({ match }) => {
    const url = window.location.href;
    const {mbtiName} = useParams();
    const mbti = Mbtis[mbtiName];

    if (!mbti) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    const copyAlert = () => {
        alert('링크 복사완료!');
    };

    return (
        <>
            <div className={styles.wrapper} key={mbti.id}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <>
                        </>
                    </div>
                    <div className={styles.result__title}>
                        <h1>
                            {mbti.subject}
                        </h1>
                    </div>
                    <div className={styles.result__hashtag}>
                        <h2>{mbti.hashtag}</h2>
                    </div>
                    <img
                        src={require(`../../api/api_img/${mbti.id}.png`)}
                        alt="img"
                        className={styles.main__img}
                    />
                    <p className={styles.result__desc_title}>대학생활에서의 나는?</p>
                    <br/>
                    <ul className={styles.result__style__wrapper}>
                        {mbti.description.map((item) => {
                            return (
                                <li
                                    className={styles.result__style__detail}
                                    key={item.des}
                                >
                                    {item.des}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles.result__advice__box}>
                        <div className={styles.result__advice}>
                            <div>
                                <h4>그런 당신에게 추천해요!</h4>
                                <p>👉 {mbti.recommand[0].des}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button__box}>
                        <Link to="/" className={styles.button}>
                            다시하기
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className={styles.icon}
                            />
                        </Link>
                        <CopyToClipboard text={url}>
                            <button
                                className={styles.copy__button}
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
};

export default Result;
