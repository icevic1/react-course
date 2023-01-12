import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {IPostItem} from "app-interfaces";
import SelectCustom from "./components/UI/select/SelectCustom";
import FormInputText from "./components/UI/inputs/FormInputText";

function App() {
  const [value, setValue] = useState('default text!!!')
  const [searchInputValue, setSearchInputValue] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  const [posts, setPosts] = useState([
    { id: 1, title: "a 111", content: 'b content from object' },
    { id: 2, title: "b 222", content: 'a content from object' },
  ])
  const [sortOptions, setSortOption] = useState([
    { label: "By Title", value: 'title' },
    { label: "By Content", value: 'content' },
  ])

  const createPost = (post: IPostItem) => {
    console.log("createPost cb: ", post);
    setPosts([...posts, {...post, id: Date.now()}])
  }

  const removePost = (post: IPostItem) => {
    console.log("createPost cb: ", post);
    setPosts(posts.filter((p: IPostItem) => p.id !== post.id) )
  }
/*  const sortPosts = (sortType) => {
    setSelectedSort(sortType)
    console.log("sortPosts cb: ", sortType);
    // setPosts(posts.filter((p: IPostItem) => p.id !== post.id) )
    setPosts([...posts].sort((a, b) => a[sortType].localeCompare(b[sortType])))
  }*/

  const sortedPost = useMemo(() => {
    console.log("sortedPost(): ", selectedSort);
    return !!selectedSort
      ? [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      : posts
  }, [selectedSort, posts])

/*  const searchPosts = (keyword) => {
    console.log("searchPosts cb: ", keyword);
    setSearchInputValue(keyword)
    !!keyword &&
    setPosts([...posts].filter((post) => post.title.toLowerCase().includes(keyword.toLowerCase())) )
  }*/

  const filteredPost = useMemo(() => {
    console.log("filteredPost(): ", searchInputValue);

    return !!searchInputValue
      ? [...sortedPost].filter((post) => post.title.toLowerCase().includes(searchInputValue.toLowerCase()))
      : sortedPost

  }, [searchInputValue, sortedPost])




  return <div className="App">
    <PostForm cbCreate={createPost} />

    <div style={{margin: '10px'}}>
      <SelectCustom
        value={selectedSort}
        onChange={event => setSelectedSort(event)}
        options={sortOptions}
        defaultValue={ '--Sort By--' } />

      <FormInputText type="text" placeholder="keywords..."
                     value={searchInputValue}
                     onChange={(event: any) => setSearchInputValue(event.target.value)}/>
    </div>

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
