
import './App.css';
import Box from './components/box';
import NewPost from './components/addNew';
import { useState } from 'react';


const initialData = [{
  id: 0,
  title: 'First Post',
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ut magni libero. Eum praesentium voluptatum inventore. Asperiores illo, rem iste obcaecati est nemo eius ratione, quisquam doloremque sed eligendi!"
}];



function App() {

  const [data, setData] = useState(initialData);

  function handleAddPost(nextPost) {
    setData([
      ...data,
      nextPost
    ]);
  }
  
  function handleDeletePost(post){
    console.log(post);
    setData(data.filter(d=> d.id !== post.id));
  }

  function handleClick() {
    const formContainer = document.querySelector('.formContainer');
    // const mainContainer = document.querySelector('.mainContainer');
    formContainer.classList.toggle('active');
  }



  return (

    <div className="mainContainer">
      <div className="plusContainer">
        <button onClick={handleClick} id="plusPost">+</button>
      </div>
      <div className="formContainer">
        <NewPost onAddPost={handleAddPost} onClose={handleClick} ></NewPost>
      </div>
      <div className="postContainer">
        {data.map(d => <Box post={d} handleDeleteClick={handleDeletePost}></Box>)}
      </div>
    </div>
  );
}

export default App;
