import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BaseButton from '../../../../components/button/BaseButton';

// 마이페이지_하단 계정 액션 (로그아웃, 저장하기)
const AccountAction = ({ onSave, onLogout }) => {
  const navigate = useNavigate();

  // 기능_로그아웃 처리
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    navigate('/login');
  };

  // 기능_저장 버튼 클릭
  const handleSave = () => {
    if (onSave) {
      onSave();
      return;
    }
    window.alert('저장되었습니다.');
  };

  return (
    <ActionRow>
      {/* 로그아웃 버튼 */}
      <WithdrawText onClick={handleLogout}>로그아웃</WithdrawText>
      <ButtonBox>
        <BaseButton
          onClick={handleSave}
          shape="rounded"
          backgroundColor="primary"
          style={{
            width: "85px",
            height: '40px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 600,
            padding: '0',
          }}
        >
          저장하기
        </BaseButton>
      </ButtonBox>
    </ActionRow>
  );
};

const ActionRow = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const WithdrawText = styled.span`
  font-size: 14px;
  color: #8D8D8D;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  width: 130px;
`;

export default AccountAction;
