import React from 'react';
import styled from 'styled-components';

const InputGroup = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  marginBottom, // 👈 외부에서 간격을 조절할 수 있는 props 추가
}) => {
  const inputId = id || name;

  return (
    // $marginBottom처럼 $를 붙이는 이유는 styled-components 전용 prop임을 명시하기 위함입니다.
    <Container id={inputId} $marginBottom={marginBottom}>
      <Label htmlFor={inputId}>{label}</Label>
      <StyledInput
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div` // label 태그 안에 input이 있으면 htmlFor와 충돌할 수 있어 div로 변경 권장
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* props가 있으면 그 값을 쓰고, 없으면 기본값 14px 적용 */
  margin-bottom: ${props => props.$marginBottom || '14px'};
`;

const Label = styled.label` // Label은 span보다 실제 label 태그가 웹 접근성에 좋습니다.
  font-size: 16px;
  font-weight: 500;
  color: #666666;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 661px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #D9D9D9;
  padding: 0 12px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  color: #111827;

  &::placeholder {
    color: #B5B5B5;
  }

  &:focus {
    border-color: #2F5FFF;
  }
`;

export default InputGroup;