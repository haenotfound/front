import React from 'react';
import PostDetailHeader from './PostDetailHeader';
import PostContentCard from './PostContentCard';
import BaseButton from '../../../components/button/BaseButton';
import Icon from '../../../components/icon/Icon.jsx';
import IconButton from '../../../components/button/IconButton';

const ProvideDetail = () => {
  return (
    <div>
      정보제공 글 보기
      <PostDetailHeader />
      <PostContentCard />
      <BaseButton border="primary" borderWidth="medium" size="medium" shape="rounded" color="white" padding="large" >
        목록보기
      </BaseButton>
      <Icon name="bookmark-active" size="xsmall" color="primary" />
      <IconButton iconName="bookmark-active" iconSize="xsmall" iconColor="primary" color="white">
        목록보기
      </IconButton>
    </div>
  );
};

export default ProvideDetail;