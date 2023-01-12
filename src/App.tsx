import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {IPostItem} from "app-interfaces";
import PostFilter from "./components/PostFilter";

function App() {
  const [value, setValue] = useState('default text!!!')
  const [postsFilterAndSort, setPostsFilterAndSort] = useState({filterQuery: '', sortType: ''})

  const [posts, setPosts] = useState([
    { id: 1, title: "a 111", content: 'b content from object' },
    { id: 2, title: "b 222", content: 'a content from object' },
  ])

  const createPost = (post: IPostItem) => {
    console.log("createPost cb: ", post);
    setPosts([...posts, {...post, id: Date.now()}])
  }

  const removePost = (post: IPostItem) => {
    console.log("createPost cb: ", post);
    setPosts(posts.filter((p: IPostItem) => p.id !== post.id) )
  }

  const sortedPost = useMemo(() => {
    console.log("sortedPost(): ", postsFilterAndSort.sortType);
    return !!postsFilterAndSort.sortType
      ? [...posts].sort((a, b) => a[postsFilterAndSort.sortType].localeCompare(b[postsFilterAndSort.sortType]))
      : posts
  }, [postsFilterAndSort.sortType, posts])

  const filteredPost = useMemo(() => {
    console.log("filteredPost(): ", postsFilterAndSort.filterQuery);

    return !!postsFilterAndSort.filterQuery
      ? [...sortedPost].filter((post) => post.title.toLowerCase().includes(postsFilterAndSort.filterQuery.toLowerCase()))
      : sortedPost

  }, [postsFilterAndSort.filterQuery, sortedPost])


  return <div className="App">
    <PostForm cbCreate={createPost} />

    <PostFilter filter={postsFilterAndSort}
                onChange={setPostsFilterAndSort}/>

    <hr style={{margin: '10px'}} />

    <PostList remove={removePost} posts={filteredPost} title={'Post list'} />

    <h2>from input: {value}</h2>
    <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    <hr/>
    <Counter/>
    <hr/>



    {/*<PostItem post={{
      id: 222,
      title: "suka title",
      content: 'suka lu mutu content from object',
    }}
    />*/}

  </div>;
}

export default App;
