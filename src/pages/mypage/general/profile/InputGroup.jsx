import React from 'react';
import styled from 'styled-components';

// 마이페이지_입력 폼 그룹 (라벨, 인풋)
const InputGroup = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  marginBottom,
}) => {
  const inputId = id || name;

  return (
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${props => props.$marginBottom || '14px'};
`;

const Label = styled.label`
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