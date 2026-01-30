import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageTitle from '../component/MyPageTitle.jsx';
import MyPageTabMenu from '../component/MyPageTabMenu.jsx';
import LoginSetting from './LoginSetting';
import PasswordSetting from './PasswordSetting';
import AccountAction from './AccountAction';

// 폰트 설정
const PRETENDARD_CDN =
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css';
const PRETENDARD_ID = 'pretendard-cdn-mypage-setting';
const PRETENDARD_STYLE_ID = 'pretendard-scope-mypage-setting';
const PRETENDARD_SCOPE_CLASS = 'mypage-setting-scope';

const MySettingPage = () => {
  const navigate = useNavigate();
  const tabs = [{ id: 'account', label: '계정 설정' }];
  
  // 비밀번호 변경 관련 상태 관리
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const existingLink = document.getElementById(PRETENDARD_ID);
    let createdLink = false;
    let link = existingLink;

    if (!link) {
      link = document.createElement('link');
      link.id = PRETENDARD_ID;
      link.rel = 'stylesheet';
      link.href = PRETENDARD_CDN;
      document.head.appendChild(link);
      createdLink = true;
    }

    const existingStyle = document.getElementById(PRETENDARD_STYLE_ID);
    let createdStyle = false;
    let styleTag = existingStyle;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = PRETENDARD_STYLE_ID;
      styleTag.textContent = `
        .${PRETENDARD_SCOPE_CLASS}, .${PRETENDARD_SCOPE_CLASS} * {
          font-family: 'Pretendard', sans-serif !important;
        }
      `;
      document.head.appendChild(styleTag);
      createdStyle = true;
    }

    return () => {
      if (createdLink && link?.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (createdStyle && styleTag?.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, []);

  // API 비밀번호 업데이트 호출
  const mockUpdatePassword = (payload) =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ ok: true, payload }), 600);
    });

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      window.alert('비밀번호가 일치하지 않습니다');
      return;
    }

    await mockUpdatePassword({
      currentPassword,
      newPassword,
    });
    window.alert('비밀번호가 변경되었습니다');
  };

  const handleLogout = () => {
    const confirmed = window.confirm('로그아웃 하시겠습니까?');
    if (!confirmed) return;
    navigate('/login');
  };

  // 기능_로그아웃 확인 및 이동
  return (
    <Page className={PRETENDARD_SCOPE_CLASS}>
      <MyPageTitle title="설정" description="계정 정보를 확인하고 관리하세요" />
      <MyPageTabMenu tabs={tabs} activeId="account" />

      {/* 소셜 로그인 설정 */}
      <SectionBlock>
        <LoginSetting />
      </SectionBlock>

       {/* 비밀번호 변경 */}
      <SectionBlockTight>
        <PasswordSetting
          currentPassword={currentPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          onCurrentPasswordChange={(event) => setCurrentPassword(event.target.value)}
          onNewPasswordChange={(event) => setNewPassword(event.target.value)}
          onConfirmPasswordChange={(event) => setConfirmPassword(event.target.value)}
        />
      {/* 3. 로그아웃 및 저장 버튼 */}
      </SectionBlockTight>
      <AccountAction onSave={handleSubmit} onLogout={handleLogout} />
    </Page>
  );
};

const Page = styled.div`
  padding: 28px 32px 40px;
`;

const SectionBlock = styled.section`
  margin-bottom: 40px;
`;

const SectionBlockTight = styled.section`
  margin-bottom: 1px;
`;

export default MySettingPage;
