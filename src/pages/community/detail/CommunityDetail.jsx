import React from 'react';
import PostDetailHeader from './PostDetailHeader';
import PostContentCard from './PostContentCard';
import CommentComposer from './CommentComposer';
import CommentThread from './CommentThread';
import BackToListButton from './BackToListButton';
import S from './style';
import { mockCommunity } from '../../../mock/mockCommunity';
import { useParams } from 'react-router-dom';

const CommunityDetail = () => {
  const {id} = useParams()

  const postId = Number(id)

  const post = mockCommunity.find((post) => post.id === postId)
  if(!post){
    return <div>게시글을 찾을 수 없습니다.</div>
  }

  return (
    <S.CommunityDetailContainer>
      <PostDetailHeader post={post} />
      <PostContentCard post={post} />
      <CommentComposer postId={post.id} />
      <CommentThread comments={post.comments} />
      <BackToListButton />
    </S.CommunityDetailContainer>
  );
};

export default CommunityDetail;