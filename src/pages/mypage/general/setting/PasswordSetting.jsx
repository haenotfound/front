import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import InputGroup from '../profile/InputGroup.jsx';

const PasswordSetting = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const hasMatchInput = useMemo(
    () => newPassword.length > 0 || confirmPassword.length > 0,
    [newPassword, confirmPassword]
  );
  const isMatch = newPassword === confirmPassword;
  const isReadyToSave =
    currentPassword.length > 0 &&
    newPassword.length > 0 &&
    confirmPassword.length > 0 &&
    isMatch;

  return (
    <Section>
      <SectionTitle>기본 정보</SectionTitle>
      <InputGroup
        label="현재 비밀번호"
        name="currentPassword"
        type="password"
        value={currentPassword}
        onChange={(event) => setCurrentPassword(event.target.value)}
        placeholder="현재 비밀번호를 입력해주세요."
      />
      <InputGroup
        label="새 비밀번호"
        name="newPassword"
        type="password"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
        placeholder="새 비밀번호를 입력해주세요."
      />
      <InputGroup
        label="새 비밀번호 확인"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="새 비밀번호를 다시 입력해주세요."
      />
      {hasMatchInput ? (
        <HelperText $isMatch={isMatch}>
          {isMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
        </HelperText>
      ) : null}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 60px;
  margin-bottom: 18px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  margin-bottom: 11px;
  font-size: 18px;
  font-weight: 600;
  color: #0b1215;
`;

const HelperText = styled.p`
  margin: -4px 0 0;
  padding-left: 2px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ $isMatch }) => ($isMatch ? '#2563EB' : '#EF4444')};
`;

export default PasswordSetting;
