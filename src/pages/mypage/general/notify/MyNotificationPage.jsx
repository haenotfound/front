import React from 'react';
import styled from 'styled-components';
import MyPageTitle from '../component/MyPageTitle.jsx';
import MyPageTabMenu from '../component/MyPageTabMenu.jsx';

// 마이페이지_알림 목록 페이지
const MyNotificationPage = () => {
  // 알림 탭 설정
  const tabs = [{ id: 'notify', label: '알림' }];

  return (
    <Page>
      {/* 헤더_페이지 제목 및 설명 */}
      <MyPageTitle title="알림" description="알림 내역을 확인하세요" />
      
      {/* 탭 메뉴 (알림 단일 탭) */}
      <MyPageTabMenu tabs={tabs} activeId="notify" />
      
      {/* 알림 내역이 없을 때 표시되는 화면 */}
      <EmptyState>
        <EmptyIcon src="/assets/images/icons/mypage-notify.png" alt="알림 없음" />
        <EmptyText>아직 알림이 없습니다.</EmptyText>
      </EmptyState>
    </Page>
  );
};

const Page = styled.div`
  padding: 28px 32px 40px;
`;

const EmptyState = styled.section`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const EmptyIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 2px;
`;

const EmptyText = styled.p`
  margin: 0;
  margin-bottom: 300px;
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
`;

export default MyNotificationPage;
