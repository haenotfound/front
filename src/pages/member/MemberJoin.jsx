import React, { useState } from "react";
import S from "./style";
import MemberInput from "../../components/memberInput/MemberInput";
import { BaseButton } from "../../components/button/style";
import Icon from "../../components/icon/Icon";
import { Link, useNavigate } from "react-router-dom";

const MemberJoin = () => {
  const navigate = useNavigate();
  const [memberEmail, setMemberEmail] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [memberProfile, setMemberProfile] = useState("");
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage("");

    if (!memberEmail.trim() || !memberName.trim() || !memberPassword) {
      setErrorMessage("이메일, 닉네임, 비밀번호를 입력해 주세요.");
      return;
    }
    if (memberPassword !== passwordConfirm) {
      setErrorMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    if (!isPolicyChecked) {
      setErrorMessage("개인정보 처리방침 동의가 필요합니다.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("http://localhost:10000/members/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          memberEmail,
          memberName,
          memberPassword,
          memberProfile: memberProfile.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data?.message || "회원가입에 실패했습니다.");
        return;
      }

      alert("회원가입이 완료되었습니다. 로그인해 주세요.");
      navigate("/login");
    } catch (err) {
      setErrorMessage("서버와 연결할 수 없습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.MemberContainer>
      <S.MemberContainerBox>
        <S.MemberBoxTitle>회원가입</S.MemberBoxTitle>
        <S.MemberTitleDesc>새로운 계정을 만들어 보세요.</S.MemberTitleDesc>
        <S.MemberForm onSubmit={handleSubmit}>
          <S.MemberInputBox>
            <S.MemberInputLabel>이메일</S.MemberInputLabel>
            <MemberInput
              placeholderText="example@gmail.com"
              type="email"
              value={memberEmail}
              onChange={(e) => setMemberEmail(e.target.value)}
            />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>닉네임</S.MemberInputLabel>
            <MemberInput
              placeholderText="닉네임을 입력하세요"
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>비밀번호</S.MemberInputLabel>
            <MemberInput
              placeholderText="비밀번호를 입력하세요"
              type="password"
              value={memberPassword}
              onChange={(e) => setMemberPassword(e.target.value)}
            />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>비밀번호 확인</S.MemberInputLabel>
            <MemberInput
              placeholderText="비밀번호를 다시 입력하세요"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>프로필 이미지 URL (선택)</S.MemberInputLabel>
            <MemberInput
              placeholderText="https://example.com/profile.jpg"
              type="url"
              value={memberProfile}
              onChange={(e) => setMemberProfile(e.target.value)}
            />
          </S.MemberInputBox>
          <S.MemberCheckbox>
            <S.MemberInputCheckbox
              type="checkbox"
              name="checkboxLabel"
              checked={isPolicyChecked}
              onChange={(e) => setIsPolicyChecked(e.target.checked)}
            />
            <S.MemberInputLabel name="checkboxLabel">
              개인정보 처리방침에 동의합니다
            </S.MemberInputLabel>
          </S.MemberCheckbox>
          {errorMessage && <p style={{ color: "red", margin: 0 }}>{errorMessage}</p>}
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
            {isSubmitting ? "가입 중..." : "회원가입"}
          </BaseButton>
          <S.MemberOrLine>
            <span>또는</span>
          </S.MemberOrLine>
          <BaseButton
            size="medium"
            shape="square"
            backgroundColor="#FEE500"
            padding="large"
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
          >
            <Icon name="naver" size="small" />
            네이버 로그인
          </BaseButton>
          <S.MemberGuestLink>
            이미 계정이 있으신가요?
            <Link to="/login">로그인</Link>
          </S.MemberGuestLink>
        </S.MemberForm>
      </S.MemberContainerBox>
    </S.MemberContainer>
  );
};

export default MemberJoin;
