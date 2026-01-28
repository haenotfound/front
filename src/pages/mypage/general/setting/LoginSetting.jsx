import React from 'react';
import styled from 'styled-components';
import BaseButton from '../../../../components/button/BaseButton';
import kakaoLogo from './img/kakao_login.png';
import naverLogo from './img/naver_login.png';
import appleLogo from './img/apple_login.png';

const LoginSetting = () => {
  const handleAppleLogin = () => {
    window.location.href =
      'https://account.apple.com/sign-in';
  };

  const handleKakaoLogin = () => {
    window.location.href =
      'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3Da48c346f49496ed25298423c4c9da5f0%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.saramin.co.kr%252Fkakao_oauth.php%26state%3D4-42725deac266b43b56874454967d0213%26display%3Dpopup%26through_account%3Dtrue%26auth_tran_id%3DJYOeByn1aH_PtQqMEq-TrKiLVGmSTx1tR2nQP90YChc1VwAAAZv1ZFlM#login';
  };

  const handleNaverLogin = () => {
    window.location.href = 'https://nid.naver.com/nidlogin.login';
  };

  return (
    <Section>
      <SectionTitle>소셜 로그인 설정</SectionTitle>
      <ButtonRow>
        <ButtonBox>
          <BaseButton
            shape="rounded"
            onClick={handleAppleLogin}
            style={{
              width: '210px',
              height: '40px',
              fontSize: '14px',
              backgroundColor: '#000000',
              fontWeight: 600,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <img src={appleLogo} alt="" />
            애플 로그인
          </BaseButton>
        </ButtonBox>
        <ButtonBox>
          <BaseButton
            shape="rounded"
            onClick={handleKakaoLogin}
            style={{
              width: '210px',
              height: '40px',
              backgroundColor: '#FEE500',
              color: '#191919',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <img src={kakaoLogo} alt="" />
            카카오톡 로그인
          </BaseButton>
        </ButtonBox>
        <ButtonBox>
          <BaseButton
              shape="rounded"
              onClick={handleNaverLogin}
              style={{
                width: '210px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #D1D5DB',
                color: '#000000',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
          >
            <img src={naverLogo} alt="" />
            네이버 로그인
          </BaseButton>
        </ButtonBox>
      </ButtonRow>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #0b1215;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ButtonBox = styled.div`
  width: 210px;
`;

export default LoginSetting;
