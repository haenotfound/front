import React from 'react';
import styled from 'styled-components';
import PageHeader from '../component/PageHeader.jsx';
import TabMenu from '../component/TabMenu.jsx';

const MyNotificationPage = () => {
  const tabs = [{ id: 'notify', label: '알림' }];

  return (
    <Page>
      <PageHeader title="알림" description="알림 내역을 확인하세요" />
      <TabMenu tabs={tabs} activeId="notify" />
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
