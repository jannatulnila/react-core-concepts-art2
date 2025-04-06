
import './App.css'
import Counter from './counter';
import Batsman from './Batsman';
function App() {
  function handleClick(){
    alert('I am Clicked')
  }

  const handleClick3 = ()=> {
    alert('click 3')
  }

  const handleAdd5 = (num) =>{
    const newNum  = num + 5;
    alert(newNum)
  }


  return (
    <>
     
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>

      <button  onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click 2</button>
      <button  onClick={handleClick3}>Click 3</button>
      <button  onClick={()=> alert('click 4')}>Click 4</button>
      <button  onClick={()=> handleAdd5(7)}>Click 5</button>
      
    </>
  )
}

export default App
