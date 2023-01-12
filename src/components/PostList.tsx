import React, {useState} from 'react';
import PostItem from "./PostItem";
import {IPostItem} from "app-interfaces";

const PostList = (props: {posts: Array<any>, remove: (p: IPostItem) => void, title: string}) => {
  // console.log("props: ", props);
  if (!props.posts.length) {
    return (
      <h3 style={{textAlign: 'center'}} title="Empty posts list">(empty)</h3>
    )
  }

  return (
    <div className="postList">
      <h3 style={{textAlign: 'center'}}>
        {props.title}
      </h3>
      {props.posts.map(
        (post, idx: number) =>
          <PostItem
            remove={props.remove}
            idx={idx + 1}
            post={post}
            key={post.id}
        />
      )}
    </div>
  );
}

export default PostList;
