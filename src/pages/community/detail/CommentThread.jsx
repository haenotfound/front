import React, { useEffect, useState } from "react";
import S from "./style";
import CommentItem from "./CommentItem";
import CommentComposer from "./CommentComposer";
import { getComments } from "../../../api/community";

const CommentThread = ({ postId, onAddComment }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCommentId, setNewCommentId] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (!postId) return;

      setLoading(true);

      try {
        const res = await getComments({ postId });
        setComments(Array.isArray(res) ? res : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  useEffect(() => {
    if (!newCommentId) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(`comment-${newCommentId}`);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

        setNewCommentId(null);
      }
    });
  }, [comments, newCommentId]);

  const handleAddComment = (newComment) => {
    setNewCommentId(newComment.id);
    setComments((prev) => [...prev, newComment]);
    onAddComment?.();
  };

  return (
    <S.CommentThreadContainer>
      <CommentComposer postId={postId} onCreate={handleAddComment} />
      {loading && comments.length === 0 && (
        <div style={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
          댓글 불러오는 중...
        </div>
      )}

      {(comments || []).map((comment) => (
        <div id={`comment-${comment.id}`} key={comment.id}>
          <CommentItem comment={comment} />
        </div>
      ))}
    </S.CommentThreadContainer>
  );
};

export default CommentThread;
