import React, {useMemo, useState} from 'react';
import PostItem from "./PostItem";
import {IPostItem} from "app-interfaces";
import PostFilter from "./PostFilter";

const PostList = ({posts, ...props}: {posts: Array<IPostItem>, remove: (p: IPostItem) => void, title: string}) => {

  const [postsFilterAndSort, setPostsFilterAndSort] = useState({filterQuery: '', sortType: ''})

  const sortedPost = useMemo(() => {
    return !!postsFilterAndSort.sortType
      ? [...posts].sort((a, b) => a[postsFilterAndSort.sortType].localeCompare(b[postsFilterAndSort.sortType]))
      : posts
  }, [postsFilterAndSort.sortType, posts])

  const filteredPost = useMemo(() => {

    return !!postsFilterAndSort.filterQuery
      ? [...sortedPost].filter((post) => post.title.toLowerCase().includes(postsFilterAndSort.filterQuery.toLowerCase()))
      : sortedPost

  }, [postsFilterAndSort.filterQuery, sortedPost])

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

      {!!filteredPost?.length && filteredPost.map(
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
