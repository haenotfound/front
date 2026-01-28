import React from 'react';
import styled from 'styled-components';
import PageHeader from '../component/PageHeader.jsx';
import TabMenu from '../component/TabMenu.jsx';
import LoginSetting from './LoginSetting';
import PasswordSetting from './PasswordSetting';
import AccountAction from './AccountAction';

const MySettingPage = () => {
  const tabs = [{ id: 'account', label: '계정 설정' }];

  return (
    <Page>
      <PageHeader title="설정" description="계정 정보를 확인하고 관리하세요" />
      <TabMenu tabs={tabs} activeId="account" />
      <SectionBlock>
        <LoginSetting />
      </SectionBlock>
      <SectionBlockTight>
        <PasswordSetting />
      </SectionBlockTight>
      <AccountAction />
    </Page>
  );
};

const Page = styled.div`
  padding: 28px 32px 40px;
`;

const SectionBlock = styled.section`
  margin-bottom: 40px;
`;

const SectionBlockTight = styled.section`
  margin-bottom: 1px;
`;

export default MySettingPage;
