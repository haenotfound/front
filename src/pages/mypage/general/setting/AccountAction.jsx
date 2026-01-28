import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BaseButton from '../../../../components/button/BaseButton';

const AccountAction = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('로그아웃 하시겠습니까?');
    if (!confirmed) return;
    navigate('/');
  };

  const handleSave = () => {
    console.log('저장 처리 완료');
    window.alert('저장되었습니다.');
  };

  return (
    <ActionRow>
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
