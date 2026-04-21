import React, { useState } from "react";
import S from "./style";
import MemberInput from "../../components/memberInput/MemberInput";
import BaseButton from "../../components/button/BaseButton";
import Icon from "../../components/icon/Icon";
import { Link } from "react-router-dom";

const MemberLogin = () => {
  const [memberEmail, setMemberEmail] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:10000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ memberEmail, memberPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data?.message || "로그인에 실패했습니다.");
        return;
      }

      // 로그인 성공 후 이동
      window.location.href = "/";
    } catch (err) {
      setErrorMessage("서버와 연결할 수 없습니다.");
    }
  };

  return (
    <S.MemberContainer>
      <S.MemberContainerBox>
        <S.MemberBoxTitle>로그인</S.MemberBoxTitle>
        <S.MemberTitleDesc>계정에 로그인하여 시작하세요.</S.MemberTitleDesc>
        <S.MemberForm onSubmit={handleSubmit}>
          <MemberInput
            placeholderText="이메일 입력"
            type="email"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />
          <MemberInput
            placeholderText="비밀번호 입력"
            type="password"
            value={memberPassword}
            onChange={(e) => setMemberPassword(e.target.value)}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <BaseButton
            type="submit"
            size="bttxt"
            font="bold"
            shape="square"
            backgroundColor="primary"
            border="primary"
            color="white"
            padding="large"
          >
            로그인
          </BaseButton>
          <S.MemberOrLine>
            <span>또는</span>
          </S.MemberOrLine>
          <BaseButton
            size="medium"
            shape="square"
            backgroundColor="#FEE500"
            padding="large"
            onClick={() =>
              (window.location.href = "http://localhost:10000/auth/kakao")
            }
          >
            <Icon name="kakao" size="small" />
            카카오톡 로그인
          </BaseButton>
          <BaseButton
            size="medium"
            shape="square"
            backgroundColor="white"
            padding="large"
            border="gray03"
            onClick={() =>
              (window.location.href = "http://localhost:10000/auth/naver")
            }
          >
            <Icon name="naver" size="small" />
            네이버 로그인
          </BaseButton>
          <S.MemberGuestLink>
            아직 회원이 아니신가요?
            <Link to="/join">회원가입</Link>
          </S.MemberGuestLink>
        </S.MemberForm>
      </S.MemberContainerBox>
    </S.MemberContainer>
  );
};

export default MemberLogin;
