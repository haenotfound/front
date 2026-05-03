import styled, { keyframes } from "styled-components";

const S = {};

// CommunityDetail
S.CommunityDetailContainer = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 30px;
`;

// PostDetailHeader
S.PostHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 140px 0 16px;
  margin-bottom: 18px;
`;

S.PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

S.Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extraBold};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
`;

S.DateAndAuthor = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #b5b5b5;
`;

S.CountItemWrap = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-top: 4px;
`;

S.CountItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

S.IconButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  transition: transform 120ms ease;

  &:active {
    transform: scale(0.9);
  }
`;

const pop = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.25); }
  100% { transform: scale(1); }
`;

S.Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: block;

  &.pop {
    animation: ${pop} 220ms ease;
  }
`;

S.Count = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #b5b5b5;
`;

// PostContentCard
S.ContentCardContainer = styled.section`
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  padding: 24px 24px;
  background: #ffffff;
  margin-bottom: 36px;
`;

S.Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

S.ProfileBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
`;

S.ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

S.AuthorName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #0b1215;
`;

S.ThumbBox = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f3f3;
  margin-bottom: 18px;
`;

S.ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

S.ContentText = styled.p`
  font-size: 16px;
  line-height: 1.48;
  color: #0b1215;
  white-space: pre-line;
`;

// CommentComposer
S.CommentComposerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 18px;
  background: #f6f7f9;
  border-radius: 14px;
  margin-bottom: 36px;
`;

S.CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.CommentAuthorName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0b1215;
`;

S.CommentInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 58px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
  padding: 0 24px;
`;

S.CommentText = styled.textarea`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 18px 16px 0 0;
  resize: none;
  background: transparent;
  line-height: 1.48;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-word;
`;

// CommentThread
S.CommentThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

// CommentItem
S.CommentWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

S.CommentBubble = styled.div`
  width: fit-content;
  max-width: calc(100% - 52px - 12px);
  background: #f6f7f9;
  border-radius: 14px;
  padding: 16px 24px;
  overflow-wrap: anywhere;
  word-break: break-word;
`;

S.CommentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 6px;
`;

S.WritedCommentAuthor = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0b1215;
`;

S.CommentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  margin-left: 36px;
`;

S.CommentTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #b5b5b5;
  gap: 6px;
`;

S.CommentSirenIcon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
`

S.CommentIconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.CommentCountItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

S.CommentLikeIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: block;

  &.pop {
    animation: ${pop} 220ms ease;
  }
`;

S.CommentCountIcon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
`;

S.CommentCountText = styled.span`
  font-size: 12px;
  color: #b5b5b5;
`;

S.CommentIconButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

S.ReplyOpenIcon = styled.img`
  width: 14px;
  height: 8px;
  display: block;
`

S.WritedCommentText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.48;
  color: #0b1215;
  white-space: pre-line;
`;

S.ReplySection = styled.div`
  margin-left: 52px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// ReplyComposer
S.ReplyComposerContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

S.ReplyInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 44px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 16px;
`;

S.ReplyText = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  font-size: 13px;
  resize: none;
  background: transparent;
`;

// ReplyThread
S.ReplyThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// ReplyItem
S.ReplyItem = styled.div`
  display: flex;
  gap: 10px;
`;

// BackToListButton
S.GoToList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-bottom: 100px;
`;

// ReportModal
S.ReportOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.ReportModal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 360px;
`;

S.ReportTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

S.ReportTarget = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

S.ReportSubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

S.ReportOptionList = styled.div`
  margin-bottom: 16px;
`;

S.HiddenRadio = styled.input`
  display: none;
`;

S.CustomCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: ${({ $checked }) => ($checked ? "#5b6cff" : "#d9d9d9")};
  flex-shrink: 0;
`;

S.ReportOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
`;

S.ReportNotice = styled.div`
  font-size: 12px;
  color: #b5b5b5;
  line-height: 1.5;
  margin-top: 12px;
`;

S.ReportFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

S.ReportCancelButton = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: none;
  background: #e5e5e5;
  color: #666;
  cursor: pointer;
`;

S.ReportSubmitButton = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: none;
  background: #5b6cff;
  color: white;
  cursor: pointer;
`;

S.ReportSuccessText = styled.div`
  font-size: 15px;
  text-align: center;
  margin: 40px 0;
`;

export default S;
