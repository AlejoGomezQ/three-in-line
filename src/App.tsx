import { useState } from "react";
import "./App.css";

interface Turn {
  X: string;
  O: string;
}

const TURNS: Turn = {
  X: "X",
  O: "O",
};

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));

  const [turn, setTurn] = useState<Turn>(TURNS);

  return (
    <main className="board">
      <h1>TRIKI</h1>
      <section className="game">
        {board.map((_, index: number) => {
          return (
            <Square
              key={index}
              index={index}
              children={undefined}
              updateBoard={undefined}
            />
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={}>{TURNS.X}</Square>
        <Square>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
