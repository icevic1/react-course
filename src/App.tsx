import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {IPostItem} from "app-interfaces";

function App() {
  const [value, setValue] = useState('default text!!!')

  const [posts, setPosts] = useState([
    { id: 1, title: "title 111", content: 'suka lu mutu content from object' },
    { id: 2, title: "title 222", content: 'suka lu mutu content from object' },
  ])

  // const inputPostBodyValue = useRef<any>(null)

  const createPost = (post: IPostItem) => {
    console.log("createPost cb: ", post);
    setPosts([...posts, {...post, id: Date.now()}])
  }

  const removePost = (post: IPostItem) => {
    console.log("createPost cb: ", post);
    setPosts(posts.filter((p: IPostItem) => p.id !== post.id) )
  }

  return <div className="App">

    <PostForm cbCreate={createPost} />

    <hr style={{margin: '10px'}} />
    <PostList remove={removePost} posts={posts} title={'My first post list'} />

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
