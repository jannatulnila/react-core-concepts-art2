
import './App.css'
import Counter from './counter';
import Batsman from './Batsman';
import Users from '../users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import Players from './players';

const fetchPosts = async()=>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async()=>{
//    const res = await fetch('https://jsonplaceholder.typicode.com/users');
//    return res.json();
// }  

function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick() {
    alert('I am Clicked')
  }

  const handleClick3 = () => {
    alert('click 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }


  return (
    <>
      
      <h3>Vite + React</h3>
      <Players></Players>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise ={friendsPromise}></Friends> 
      </Suspense> */}

      {/* <Suspense fallback={<h4>posts are coming..</h4>}>
          <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click 2</button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => alert('click 4')}>Click 4</button>
      <button onClick={() => handleAdd5(7)}>Click 5</button>

    </>
  )
}

export default App
