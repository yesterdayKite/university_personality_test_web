import common_style from '../../styles/common_css.css';
import styled, {css} from "styled-components";
import pattern from "../../assets/penguin.jpeg";
import {Link, useParams} from 'react-router-dom';
import Mbtis from '../../api/mbtiApi.json'; // mbti 결과 api

// 아이콘, 버튼 관련
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Container} from "postcss";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${pattern});
  background-repeat: none; 
  background-size: cover; 
  background-position: center; 
`;

const Header = styled.div`
  display: flex;
  height: 5vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 20vh;
  background-color: #F5F5F5;
`;

const MainTitle = styled.div`
  margin-top: 0.1rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-color: #000000;
  font-family: 'GmarketSansBold';
`;

const SubTitle = styled.div`
  margin-top: 0.1rem;
  font-size: 1rem;
  font-weight: bold;
  font-color: #3e57a6;
  font-family: 'GmarketSansBold';
`;

const MainImg = styled.div`
  width: 30rem;
  height: 30rem;  
`;

const empty = styled.div`
  display: flex;
  height: 2vh;
`;


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
        <BackgroundContainer>
            <Header />
            <TitleContainer>
                <MainTitle>
                    <h1>{mbti.subject}</h1>
                </MainTitle>
                <SubTitle>
                    <h3>{mbti.hashtag}</h3>
                </SubTitle>
            </TitleContainer>
            <empty />
        </BackgroundContainer>
    );
};

export default Result;