import "./styles.css";
import {useState} from "react";
export default function App(props) {
  const [pos,setPos] = useState([["","",""],["","",""],["","",""]])
  const [turn,setTurn] = useState(0);
  const [end,setEnd] = useState(false);
  const [result,SetResult] = useState("")
  const even = (r,c) => 
  {
    //check if game is over
    if(gameOver()){
      setEnd(!end);
      return;}
    //check if current pos is already active
    if(pos[r][c] === "x" || pos[r][c] === "o")return;
    //else style x or 0
    if(turn  % 2 === 0)
    {
      let temp = [ ...pos];
      temp[r][c] = "x";
      setPos(temp);
      if(gameOver()){
        cleanup("Player 1");
        return;
      }
        if(checkDraw())return;
    }
    else
    {
      let temp = [ ...pos];
      temp[r][c] = "o";
      setPos(temp);
      if(gameOver()){
        cleanup("Player 1");
        return;}
     if(checkDraw())return;
    }

      setTurn(turn+1)
  }
  const checkDraw = () => 
    {
       if(turn === 8)
        {
          setEnd(!end);
          SetResult("Draw");
          return true
        }
      return false;
    }

  const cleanup = (res) => 
    {
      SetResult(res)
        setEnd(!end);
    }
  const gameOver = (r,c) => 
  {
    if(pos[0][0] === "x" && pos[0][1] === "x" && pos[0][2] === "x")return true;
    if(pos[0][0] === "o" && pos[0][1] === "o" && pos[0][2] === "o")return true;  
    if(pos[1][0] === "x" && pos[1][1] === "x" && pos[1][2] === "x")return true;
    if(pos[1][0] === "o" && pos[1][1] === "o" && pos[1][2] === "o")return true;
    if(pos[2][0] === "x" && pos[2][1] === "x" && pos[2][2] === "x")return true;
    if(pos[2][0] === "o" && pos[2][1] === "o" && pos[2][2] === "o")return true;
    if(pos[0][0] === "x" && pos[1][0] === "x" && pos[2][0] === "x")return true;
    if(pos[0][0] === "o" && pos[1][0] === "o" && pos[2][0] === "o")return true;
    if(pos[0][1] === "x" && pos[1][1] === "x" && pos[2][1] === "x")return true;
    if(pos[0][1] === "o" && pos[1][1] === "o" && pos[2][1] === "o")return true;
    if(pos[0][2] === "x" && pos[1][2] === "x" && pos[2][2] === "x")return true;
    if(pos[0][2] === "o" && pos[1][2] === "o" && pos[2][2] === "o")return true;
    if(pos[0][0] === "x" && pos[1][1] === "x" && pos[2][2] === "x")return true;
    if(pos[0][0] === "o" && pos[1][1] === "o" && pos[2][2] === "o")return true;
    if(pos[2][0] === "x" && pos[1][1] === "x" && pos[0][2] === "x")return true;
    if(pos[2][0] === "o" && pos[1][1] === "o" && pos[0][2] === "o")return true;
    return false;
  }
  const reset = () => 
  {
    setEnd(false)
    SetResult("")
    setTurn(0)
    setPos([["","",""],["","",""],["","",""]])
  }
  return (
    <div className="App"> 
      <h2 className="po">Player 1 - x</h2>
      <h2 className="po">Player 2 - o</h2>
     <h1 className="po">{turn % 2 === 0 ? "Player 1" : "Player 2"}</h1>
    <div className="container">
    <button onClick={() => even(0,0)}>{pos[0][0]}
      </button>
     <button onClick={() => even(0,1)}>{pos[0][1]}</button>
     <button onClick={() => even(0,2)}>{pos[0][2]}</button>
     <button onClick={() => even(1,0)}>{pos[1][0]}</button>
     <button onClick={() => even(1,1)}>{pos[1][1]}</button>
     <button onClick={() => even(1,2)}>{pos[1][2]}</button>
     <button onClick={() => even(2,0)}>{pos[2][0]}</button>
     <button onClick={() => even(2,1)}>{pos[2][1]}</button>
     <button onClick={() => even(2,2)}>{pos[2][2]}</button>
    </div>
     
{
  end ?(  <div className="GameOver">
      <h1>Game Over  {result === "Draw" ? " ,Ended in a Draw" :` ${result} has won`}</h1>
      <button className="reset" onClick={reset}>Start Again</button>
    </div>): ""
    }
    </div>
  );
}
