import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import "./styles/App.css"
import PostList from "./components/PostList";
import SaveButton from "./components/UI/buttons/SaveButton";
import FormInputText from "./components/UI/inputs/FormInputText";

function App() {
  const [value, setValue] = useState('default text!!!')
  const [post, setPost] = useState({ title: '', content: '' })
  const [posts, setPosts] = useState([
    { id: 1, title: "title 111", content: 'suka lu mutu content from object' },
    { id: 2, title: "title 222", content: 'suka lu mutu content from object' },
  ])

  // const [inputPostTitleValue, setValueTitlePostInput] = useState('')
  // const [inputPostBodyValue,  setValueBodyPostInput] = useState('')
  // const inputPostBodyValue = useRef<any>(null)

  function addNewPost(e: any) {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', content: ''})
  }

  return <div className="App">

    <form style={{margin: '10px'}}>
      <FormInputText type="text" placeholder="Post Title"
                     value={post.title}
                     onChange={(event: any) => setPost({...post, title: event.target.value})}/>
      <FormInputText type="text" placeholder="Post Body"
                     value={post.content}
                     onChange={(event: any) => setPost({...post, content: event.target.value})}/>
      {/*<FormInputText ref={inputPostBodyValue} type="text" placeholder="Post Body" />*/}
      {/*<input ref={inputPostBodyValue} type="text" placeholder="Post Body"/>*/}
      <SaveButton onClick={addNewPost} >ADD New</SaveButton>

    </form>
    <hr style={{margin: '10px'}} />

    <h2>from input: {value}</h2>
    <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    <hr/>
    <Counter/>
    <hr/>

    <PostList posts={posts} title={'My first post list'} />

    {/*<PostItem post={{
      id: 222,
      title: "suka title",
      content: 'suka lu mutu content from object',
    }}
    />*/}

  </div>;
}

export default App;
