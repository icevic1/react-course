import React, {useMemo, useState} from 'react';
import PostItem from "./PostItem";
import {IPostItem} from "app-interfaces";
import PostFilter from "./PostFilter";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {usePosts} from "../hooks/usePosts";

const PostList = ({posts, ...props}: {posts: Array<IPostItem>, remove: (p: IPostItem) => void, title: string}) => {

  const [postsFilterAndSort, setPostsFilterAndSort] = useState({filterQuery: '', sortType: ''})

  const filteredPost = usePosts(posts, postsFilterAndSort.sortType, postsFilterAndSort.filterQuery)

  // console.log("props: ", props);

  return (
    <div className="postList">
      <h3 style={{textAlign: 'center', paddingBottom: '10px', borderBottom: '1px dotted teal'}}>
        <PostFilter style={{float: 'right'}}
          filter={postsFilterAndSort}
          onChange={setPostsFilterAndSort}/>
        {props.title}
      </h3>

      {
        !filteredPost?.length &&
        <h3 style={{textAlign: 'center', padding: '20px'}} title="Empty posts list">(empty)</h3>
      }

      <TransitionGroup>
        {!!filteredPost?.length && filteredPost.map(
          (post, idx: number) =>
            <CSSTransition
              key={post.id}
              timeout={200}
              classNames="post"
            >
              <PostItem
                remove={props.remove}
                idx={idx + 1}
                post={post}
              />
            </CSSTransition>

        )}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
