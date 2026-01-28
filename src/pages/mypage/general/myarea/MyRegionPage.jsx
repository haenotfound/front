import React, { useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../component/PageHeader.jsx';
import MyAreaTabs from './MyAreaTabs';
import FavoriteAreas from './FavoriteAreas';
import RecentAreas from './RecentAreas';

const MyRegionPage = () => {
  const [activeTab, setActiveTab] = useState('favorite');

  return (
    <Page>
      <PageHeader title="지역" description="지역 정보를 확인하세요" />
      <MyAreaTabs activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === 'favorite' ? <FavoriteAreas /> : <RecentAreas />}
    </Page>
  );
};

const Page = styled.div`
  padding: 28px 32px 40px;
`;

export default MyRegionPage;
