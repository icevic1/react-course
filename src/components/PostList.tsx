import React, {useMemo, useState} from 'react';
import PostItem from "./PostItem";
import {IPostItem} from "app-interfaces";
import PostFilter from "./PostFilter";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {usePosts} from "../hooks/usePosts";
import CustomButton from "./UI/buttons/CustomButton";
import SimpleModal from "./UI/modals/SimpleModal";
import PostForm from "./PostForm";

const PostList = ({posts, remove, create, ...props}: {posts: Array<IPostItem>, remove: (p: IPostItem) => void, create: (e: any) => void, title: string}) => {

  const [postsFilterAndSort, setPostsFilterAndSort] = useState({filterQuery: '', sortType: ''})
  const [visibleStateModal, setVisibleStateModal] = useState(false)

  const filteredPost = usePosts(posts, postsFilterAndSort.sortType, postsFilterAndSort.filterQuery)

  const createPost = (post: IPostItem) => {
    console.log("submit modal: ", post);
    create(post)
    setVisibleStateModal(false)
  }

  // console.log("props: ", props);

  return (
    <div className="postList">
      <h3 style={{textAlign: 'center', paddingBottom: '10px', borderBottom: '1px dotted teal'}}>
        <PostFilter style={{float: 'right'}}
          filter={postsFilterAndSort}
          onChange={setPostsFilterAndSort}/>
        <CustomButton onClick={() => setVisibleStateModal(true)} style={{float: 'right', margin: '2px 5px'}}>ADD New</CustomButton>
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
                remove={remove}
                idx={idx + 1}
                post={post}
              />
            </CSSTransition>

        )}
      </TransitionGroup>

      <SimpleModal visible={visibleStateModal} toggleState={setVisibleStateModal}>
        <PostForm cbCreate={createPost} />
      </SimpleModal>
    </div>
  );
}

export default PostList;
