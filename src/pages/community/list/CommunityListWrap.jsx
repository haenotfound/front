import React from "react";
import ListItem from "./ListItem";

const CommunityListWrap = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div style={{ padding: "24px 0" }}>게시글이 없어요.</div>;
  }

  return (
    <div style={{ padding: "24px 0"}}>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CommunityListWrap;