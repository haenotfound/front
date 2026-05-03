import React, { useState } from "react";
import S from "./style";
import { reportTarget } from "../../../api/community";

const REPORT_OPTIONS = [
  { label: "욕설/비방", value: "ABUSE" },
  { label: "도배", value: "SPAM" },
  { label: "홍보/상업성", value: "ADVERTISEMENT" },
  { label: "성적 콘텐츠", value: "SEXUAL" },
  { label: "폭력적/혐오적 콘텐츠", value: "HATE" },
  { label: "허위 정보/혼동을 야기하는 콘텐츠", value: "MISINFORMATION" },
  { label: "불법촬영물", value: "ILLEGAL_CONTENT" },
];

const ReportModal = ({ onClose, targetType, targetId, author }) => {
  const [selected, setSelected] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleSubmit = async () => {
    if (!selected) {
      alert("신고 사유를 선택해주세요.");
      return;
    }

    try {
      await reportTarget(targetType, targetId, selected);

      setIsSubmitted(true);
    } catch (e) {
      alert("신고 실패");
    }
  };

  return (
    <S.ReportOverlay onClick={onClose}>
      <S.ReportModal onClick={(e) => e.stopPropagation()}>
        {!isSubmitted ? (
          <>
            <S.ReportTitle>신고</S.ReportTitle>

            <S.ReportTarget>
              신고 대상: <strong>{author}</strong>
            </S.ReportTarget>

            <S.ReportSubTitle>신고 내용 (1개 선택)</S.ReportSubTitle>

            <S.ReportOptionList>
              {REPORT_OPTIONS.map((option) => (
                <S.ReportOption
                  key={option}
                  onClick={() => handleSelect(option.value)}
                >
                  <S.HiddenRadio
                    type="radio"
                    checked={selected === option.value}
                    readOnly
                  />
                  <S.CustomCheckbox $checked={selected === option.value} />
                  <span>{option.label}</span>
                </S.ReportOption>
              ))}
            </S.ReportOptionList>

            <S.ReportNotice>
              신고된 게시글/댓글은 관리자 검토 후 삭제되며, 해당 신고 대상은
              커뮤니티 활동이 일시 또는 영구적으로 제한되는 조치를 받을 수
              있습니다.
              <br />
              단, 허위신고일 경우, 신고자의 커뮤니티 활동이 제한되는 조치를 받을
              수 있으니 유의해 주시기 바랍니다.
            </S.ReportNotice>

            <S.ReportFooter>
              <S.ReportCancelButton onClick={onClose}>
                취소
              </S.ReportCancelButton>
              <S.ReportSubmitButton onClick={handleSubmit}>
                확인
              </S.ReportSubmitButton>
            </S.ReportFooter>
          </>
        ) : (
          <>
            {/* 🔥 여기만 추가된 부분 */}
            <S.ReportTitle>신고 접수</S.ReportTitle>

            <S.ReportSuccessText>
              신고 내용이 접수되었습니다.
            </S.ReportSuccessText>

            <S.ReportFooter>
              <S.ReportSubmitButton onClick={onClose}>
                닫기
              </S.ReportSubmitButton>
            </S.ReportFooter>
          </>
        )}
      </S.ReportModal>
    </S.ReportOverlay>
  );
};

export default ReportModal;
