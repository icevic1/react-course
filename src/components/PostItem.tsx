import React from 'react';
import {IPostItemProps} from "app-interfaces";

/*interface IPostItemProps {
  idx: number;
  post: { id?: number, title: string, content: any };
  // [x: string]: any;
}*/

// const PostItem = (props: {idx: number, post: { id?: number, title: string, content: any } }) => {
const PostItem = (props: IPostItemProps) => {
  console.log("props PostItem: ", props);

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.idx}# {props.post.title}</strong>
        <div>{props.post.content} </div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;
