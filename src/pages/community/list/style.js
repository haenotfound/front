import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

// CommunityList

S.CommunityListContainer = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 30px 60px 30px;
`;

// RegionNoticeBanner

S.BannerContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.PALLETE.background.white};
  padding: 140px 0 10px 0;
`;

S.BannerTitle = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 20px;
`;

S.TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

S.RegionNoticeContainer = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 20px 0;
  padding: 0 20px;
`;

S.RegionNoticeBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: fit-content;
  max-width: 100%;
  padding: 12px 16px;
  background: #f3f4f6;
  border-radius: 10px;
`;

S.RegionNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

S.RegionText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 600;
`;

S.ChangeRegion = styled(Link)`
  flex-shrink: 0;
  font-size: 14px;
  color: #8d8d8d;
`;

S.SubText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
  margin: 10px 0;
`;

// FilterPanel
S.FilterPanelSection = styled.section`
  width: 100%;
  border: 1px solid #d9d9d9;
  background: #ffffff;
  border-radius: 14px;
  padding: 14px 24px;
`;

S.FilterRow = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 18px;
  align-items: start;
  padding: 14px 0;

  & + & {
    border-top: 1px solid #f1f1f1;
  }
`;

S.FilterLabel = styled.div`
  font-size: 14px;
  padding: 6px 18px 0 0;
  border-right: 1px solid #f1f1f1;
`;

S.FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

S.SearchInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

S.SearchBox = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 0 14px;
  font-size: 12px;
  outline: none;

  &::placeholder {
    color: #b5b5b5;
  }

  &:focus {
    border-color: ${({ theme }) => theme.PALLETE?.primary?.main || "#4F6EF7"};
    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.12);
  }
`;

S.SearchActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

// ListItem
S.ListItemWrap = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid #d9d9d9;
  text-decoration: none;
`;

S.Left = styled.div`
  flex: 1;
  min-width: 0;
`;

S.ListTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #0b1215;
  line-height: 1.3;
  margin: 0 0 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

S.ListContent = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  color: #0b1215;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

S.Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

S.MetaText = styled.span`
  font-size: 12px;
  color: #8d8d8d;
`;

S.CountItemWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

S.CountItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

S.Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  display: block;
`;

S.Count = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #b5b5b5;
`;

S.Right = styled.div`
  flex: 0 0 auto;
`;

S.Thumb = styled.img`
  width: 92px;
  height: 92px;
  object-fit: cover;
  border-radius: 10px;
  border: none;
`;

// LoadMoreButton
S.Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

export default S;