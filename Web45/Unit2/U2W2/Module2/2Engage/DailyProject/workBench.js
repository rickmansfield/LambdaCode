
import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

const App = () => {

  const [posts, setPosts] = useState(dummyData);
  const [search, setSearch] = useState('');
  const likePost = postId => {

    setPosts(posts.map(postObj =>{
      if(postObj.id === postId){
        return{...postObj, likes: postObj.likes +1};
      } 
      else {
        return postObj;
      }
    }));
  
  };

  return (
    <div className='App'>
      <SearchBar />
      <Posts post={posts} likePost={likePost}/>
    </div>
  );
};
export default App;
