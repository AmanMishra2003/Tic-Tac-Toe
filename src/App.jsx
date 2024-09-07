import { useState } from 'react'
import './App.css'

import Board from './Component/Board'
import Square from './Component/Square'

import calculateWinner from './assets/calculateWinner'

function App() {
  const [square, setSquare] = useState(Array(9).fill(null))
  const [currentValue, setCurrentValue] = useState('X');
  
  let status ;

  function handleClick(id){
    if(calculateWinner(square) || square[id]) return;

    const nextSquare = square.slice(); //this slice() method will return a new array with same number of element in square
    nextSquare[id] = currentValue;
    setSquare(nextSquare)

    // setSquare(currValue=>(
    //    currValue.map((ele,i)=>{
    //       if(i===id){
    //         return ele = currentValue
    //       }else{
    //         return ele
    //       }
    //     })
    //   ))
    
    setCurrentValue(prev=>{
      if(prev==='O'){
        setCurrentValue('X')
      }else if(prev==='X'){
        setCurrentValue('O')
      }
    })
  }

  const winner = calculateWinner(square);
  if(winner){
    status = `Winner ${winner}`
  }else{
    status = `Current Turn ${currentValue}`
  }

  return (
    <>

      <h3 style={{textAlign:'center'}}> {status} <button onClick={()=>setSquare(Array(9).fill(null))} >Restart Game!</button> </h3> 
      <Board >
        {
          square.map((ele,i)=>(
            <Square value={square[i]} key={i} handleClick={handleClick} id={i}/>
          ))
        }
      </Board>
      
      
    </>
  )
}

export default App
