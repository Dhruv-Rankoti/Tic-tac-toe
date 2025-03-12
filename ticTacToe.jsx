import { useState } from "react";


function ticTacToe() {
    
    const [playerTurn, setPlayerTurn] = useState("X");
    const [win, setWin] = useState(0);
    const [totalMarked, setTotalMarked] = useState(0);
    
    const playerDiv = `Player {(playerTurn === "X") ? 1 : 2} turn`;

    function playPos(event) {
        if (event.target.textContent !== "" || win) return;
        setTotalMarked((t) => t+1);
        setPlayerTurn((p) => (p === "X") ? "O" : "X");
        event.target.textContent = playerTurn;
        const id = event.target.id - 0;
        if (checkWin(id)) {
            setWin(1);
            setPlayerTurn((p) => (p === "X") ? "O" : "X");
            alert("Player " + ((playerTurn === "X") ? 1 : 2) + " WON!");
        }
    }
    
    function checkWin(id) {
        if (checkHorizontal(id)) return true;
        if (checkVertical(id)) return true;
        if (checkLeftDiagonal(id-0)) return true;
        if (checkRightDiagonal(id-0)) return true;
        return false;
    }
    
    function checkHorizontal(id) {
        const playBox = document.querySelectorAll(".play-box");
        id = Math.floor(id / 3) * 3;
        for (let i = 0; i < 3; i++) {
            if (playBox[id+i].textContent !== playerTurn)
                return false;
        }
        // console.log("You WON!");
        return true;
    }
    
    function checkVertical(id) {
        const playBox = document.querySelectorAll(".play-box");
        id = id % 3;
        for (let i = 0; i <= 6; i += 3) {
            if (playBox[id+i].textContent !== playerTurn)
                return false;
        }
        // console.log("You WON!");
        return true;
    }

    function checkLeftDiagonal(id) {
        const playBox = document.querySelectorAll(".play-box");
        if (id !== 0 && id !== 4 && id !== 8) return false;
        for (let i = 0; i < 9; i += 4) {
            if (playBox[i].textContent !== playerTurn)
                return false;
        }
        // console.log("You WON!");
        return true;
    }

    function checkRightDiagonal(id) {
        const playBox = document.querySelectorAll(".play-box");
        if (id !== 2 && id !== 4 && id !== 6) return false;
        for (let i = 2; i <= 6; i += 2) {
            if (playBox[i].textContent !== playerTurn)
                return false;
        }
        // console.log("You WON!");
        return true;
    }

    function restartGame() {
        if (!win && totalMarked !== 9) return;
        const playBox = document.querySelectorAll(".play-box");
        for (let i = 0; i < 9; i++) {
            playBox[i].textContent = "";
        }
        setTotalMarked(0);
        setWin(0);
        setPlayerTurn((p) => (p === "X") ? "O" : "X");
    }

    return (
        <>
            <div className="main-box">
                <div className="row-box">
                    <div className="play-box" id="0" onClick={playPos}></div>
                    <div className="play-box" id="1" onClick={playPos}></div>
                    <div className="play-box" id="2" onClick={playPos}></div>
                </div>
                <div className="row-box">
                    <div className="play-box" id="3" onClick={playPos}></div>
                    <div className="play-box" id="4" onClick={playPos}></div>
                    <div className="play-box" id="5" onClick={playPos}></div>
                </div>
                <div className="row-box">
                    <div className="play-box" id="6" onClick={playPos}></div>
                    <div className="play-box" id="7" onClick={playPos}></div>
                    <div className="play-box" id="8" onClick={playPos}></div>
                </div>
                <div>Player {(playerTurn === "X") ? 1 : 2} {(!win) ? "turn" : "WON!"}</div>
                <button onClick={restartGame}>Restart Game</button>
            </div>
        </>
    );
}

export default ticTacToe;