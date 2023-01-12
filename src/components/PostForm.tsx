import React, {useState} from 'react';
import FormInputText from "./UI/inputs/FormInputText";
import CustomButton from "./UI/buttons/CustomButton";
import {IPostItem} from "app-interfaces";

const PostForm = ({cbCreate}: {cbCreate: (p: IPostItem) => void;}) => {
  // console.log("props PostForm: ", props);
  const [post, setPost] = useState({ title: '', content: '' })

  function addNewPost(e: any) {
    e.preventDefault();
    // console.log("log: ", {...post, id: Date.now()});
    cbCreate({...post, id: Date.now()}) // setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', content: ''})
  }

  return (
    <form className={'postForm'}>
      <FormInputText type="text" placeholder="Post Title"
                     value={post.title}
                     onChange={(event: any) => setPost({...post, title: event.target.value})}/>
      <FormInputText type="text" placeholder="Post Body"
                     value={post.content}
                     onChange={(event: any) => setPost({...post, content: event.target.value})}/>
      {/*<FormInputText ref={inputPostBodyValue} type="text" placeholder="Post Body" />*/}
      {/*<input ref={inputPostBodyValue} type="text" placeholder="Post Body"/>*/}
      <CustomButton onClick={addNewPost} >Save</CustomButton>

    </form>
  );
}

export default PostForm;
