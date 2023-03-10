import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {IPostItem} from "app-interfaces";
import SimpleModal from "./components/UI/modals/SimpleModal";
import CustomButton from "./components/UI/buttons/CustomButton";

function App() {
  const [value, setValue] = useState('default text!!!')


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

  return <div className="App">

    <PostList remove={removePost} create={createPost} posts={posts} title={'Post list'} />



    <h2>from input: {value}</h2>
    <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    <hr/>
    <Counter/>

  </div>;
}

export default App;
