import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = (props: {posts: Array<any>, title: string}) => {
  console.log("props: ", props);

  return (
    <div className="postList">
      <h3 style={{textAlign: 'center'}}>{props.title}</h3>
      {props.posts.map(
        (post, idx: number) => <PostItem idx={idx + 1} post={post} key={post.id}
        />
      )}
    </div>
  );
}

export default PostList;
