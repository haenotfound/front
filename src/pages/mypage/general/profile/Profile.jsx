import React, { useEffect, useRef, useState } from "react";
import MyPageTitle from "../component/MyPageTitle.jsx";
import MyPageTabMenu from "../component/MyPageTabMenu.jsx";
import InputGroup from "./InputGroup.jsx";
import BaseButton from "../../../../components/button/BaseButton";

// 임시 사용자 데이터
const userProfile = {
  nickname: "프로자취러",
  email: "Homeguard@gmail.com",
  bio: "서울시 강남구 역삼동에 사는 자취생입니다!",
};

// 프로필 데이터 호출
const fetchUserProfile = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(userProfile), 300);
  });

const MyProfilePage = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef(null);

  const tabs = [{ id: "info", label: "정보" }];

  // 기능_저장 버튼 클릭 시 호출
  const handleSave = () => {
    const payload = { nickname, email, bio, profileImageUrl: previewUrl };
    console.log(payload);
    // API 호출부
    window.alert("저장되었습니다");
  };

  // 기능_취소 버튼 클릭 시 데이터 초기화 및 메모리 해제
  const handleCancel = () => {
    const shouldReset = window.confirm("입력한 내용을 초기화할까요?");
    if (!shouldReset) return;
    setNickname("");
    setEmail("");
    setBio("");
    setPreviewUrl((prevUrl) => {
      if (prevUrl) {
        URL.revokeObjectURL(prevUrl);
      }
      return "";
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // 초기 로드 시 사용자 정보 불러오기
  useEffect(() => {
    let isMounted = true;
    fetchUserProfile().then((data) => {
      if (!isMounted) return;
      setNickname(data.nickname);
      setEmail(data.email);
      setBio(data.bio);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // 이미지_업로드 버튼/아이콘 클릭
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // 이미지_파일 선택 시 미리보기 URL 생성
  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const nextUrl = URL.createObjectURL(file);
    setPreviewUrl((prevUrl) => {
      if (prevUrl) {
        URL.revokeObjectURL(prevUrl);
      }
      return nextUrl;
    });
  };
  return (
    <div style={styles.page}>
      <MyPageTitle title="프로필" description="계정정보를 관리하세요" />
      <MyPageTabMenu tabs={tabs} activeId="info" />

      {/* 섹션01_프로필 사진 수정 */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>프로필 사진</h3>
        <div style={styles.profileRow}>
          <div style={styles.profileImageWrapper}>
            <div style={styles.profileImage}>
              {previewUrl ? (
                <img src={previewUrl} alt="프로필 미리보기" style={styles.profileImagePreview} />
              ) : null}
            </div>
            <div style={styles.cameraBadge} onClick={handleUploadClick} role="button" tabIndex={0}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>
          <button type="button" style={styles.uploadButton} onClick={handleUploadClick}>
            사진 업로드
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.hiddenFileInput}
          />
        </div>
      </section>

      {/* 섹션01_상세 정보 수정 */}
      <section style={styles.section}>
        <InputGroup
          label="닉네임"
          name="nickname"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="닉네임을 입력하세요"
        />
        <InputGroup
          label="이메일"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="이메일을 입력하세요"
          type="email"
        />
        <InputGroup
          label="한 줄 소개"
          name="bio"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          placeholder="띄어쓰기 포함 20자 이내로 입력해주세요."
          marginBottom="30px"
        />

        {/* 하단 버튼 */}
        <div style={styles.actionArea}>
          <button
            type="button"
            onClick={handleCancel}
            style={styles.cancelButton}
          >
            취소하기
          </button>
          <div style={styles.saveButton}>
            <BaseButton
              onClick={handleSave}
              backgroundColor="primary"
              shape="rounded"
              style={{
                width: "85px",
                height: "40px",
                padding: '0',
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: 'nowrap'
              }}
            >
              저장하기
            </BaseButton>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    padding: "28px 32px 40px",
  },

  section: {
    marginBottom: "28px",
  },

  sectionTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#0B1215",
    margin: "0 0 12px",
  },

  profileRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  profileImageWrapper: {
    position: "relative",
    width: "72px",
    height: "72px",
  },

  profileImage: {
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImagePreview: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },

  cameraBadge: {
    position: "absolute",
    right: "-2px",
    bottom: "-2px",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    border: "1px solid #D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  uploadButton: {
    height: "30px",
    padding: "0 12px",
    borderRadius: "999px",
    border: "1px solid #2F5FFF",
    backgroundColor: "#FFFFFF",
    color: "#2F5FFF",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  
  hiddenFileInput: {
    display: "none",
  },

  actionArea: {
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  cancelButton: {
    height: "40px",
    padding: 0,
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#FFFFFF",
    color: "#8D8D8D",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  
  saveButton: {
    width: "130px",
  },
};

export default MyProfilePage;
