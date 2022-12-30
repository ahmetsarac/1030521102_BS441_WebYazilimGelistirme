import './root.css';
import Rock from '../images/rock.png';
import Paper from '../images/paper.png';
import Scissors from '../images/scissors.png';
import { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

function Classic() {
	const [playerChoice, setPlayerChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [result, setResult] = useState('');
	const [score, setScore] = useState(0);

	const handleClick = (choice) => {
		setPlayerChoice(choice);
		const compChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(compChoice);
		defineWinner(choice, compChoice);
	}
	
	const defineWinner = (choice, compChoice) => {
		if(choice === compChoice){
			setResult('Tie');
		}else if(
			(choice === choices[0] && compChoice === choices[2]) ||
			(choice === choices[1] && compChoice === choices[0]) ||
			(choice === choices[2] && compChoice === choices[1])
		){
			setResult('You won.');	
			setScore(score + 1);
		}else{
			setResult('Computer won.');
		}
	}

	const reset = () => {
		setScore(0);
	}

	if(score < 10){
		return (
			<div className="App">
				<header className="main-classic make-flex">
					<p>
						Classic Mode
					</p>
					<div className="images" style={{ flexDirection: 'row'}}>
						<img className='flex-item' src={Rock} width={200} height={200} alt={"Rock"} onClick={() => handleClick(choices[0])}/>   
						<img className='flex-item' src={Paper} width={200} height={200} alt={"Paper"} onClick={() => handleClick(choices[1])}/>   
						<img className='flex-item' src={Scissors} width={200} height={200} alt={"Scissors"} onClick={() => handleClick(choices[2])}/>  
					</div>
					{playerChoice !== '' ? <p>You chose {playerChoice}, computer chose {computerChoice}.</p> : ''}
					<p>{result}</p>
					<p>Score: {score}</p>
				</header>
			</div>
		);
	}else{
		return (
			<div className="App">
				<header className="main-classic make-flex">
					<p>
						<a className="App-link" href="# " onClick={() => reset()}>Play Again</a>
					</p>
				</header>
			</div>
		);

	}
}

export default Classic;
