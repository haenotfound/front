import React, { useMemo } from 'react';
import styled from 'styled-components';
import InputGroup from '../profile/InputGroup.jsx';

// 마이페이지_비밀번호 변경
const PasswordSetting = ({
  currentPassword = "",
  newPassword = "",
  confirmPassword = "",
  onCurrentPasswordChange,
  onNewPasswordChange,
  onConfirmPasswordChange,
}) => {

  // 로직_새 비밀번호 입력란 중 값 여부 확인
  const hasMatchInput = useMemo(
    () => (newPassword?.length ?? 0) > 0 || (confirmPassword?.length ?? 0) > 0,
    [newPassword, confirmPassword]
  );

  // 로직_새 비밀번호와 확인용 비밀번호가 일치하는지 비교
  const isMatch = (newPassword ?? '') === (confirmPassword ?? '');
  return (
    <Section>
      <SectionTitle>기본 정보</SectionTitle>

      {/* 현재 비밀번호 입력 */}
      <InputGroup
        label="현재 비밀번호"
        name="currentPassword"
        type="password"
        value={currentPassword}
        onChange={onCurrentPasswordChange}
        placeholder="현재 비밀번호를 입력해주세요."
      />

      {/* 새 비밀번호 입력 */}
      <InputGroup
        label="새 비밀번호"
        name="newPassword"
        type="password"
        value={newPassword}
        onChange={onNewPasswordChange}
        placeholder="새 비밀번호를 입력해주세요."
      />

      {/* 새 비밀번호 확인 입력 */}
      <InputGroup
        label="새 비밀번호 확인"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        placeholder="새 비밀번호를 다시 입력해주세요."
      />

      {/* 비밀번호 일치 여부 안내 메시지 (입력값이 있을 때만 노출) */}
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
