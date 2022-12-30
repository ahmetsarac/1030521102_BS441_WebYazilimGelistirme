import './root.css';
import Rock from '../images/rock.png';
import Paper from '../images/paper.png';
import Scissors from '../images/scissors.png';
import { useState } from 'react';
import ProgressBar from '../components/progress-bar';
import ProgressBarDelimeter from '../components/progress-bar-delimeter';

const choices = ['rock', 'paper', 'scissors'];

function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

function Classic() {
	const [playerChoice, setPlayerChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [result, setResult] = useState('');
	const [playerScore, setPlayerScore] = useState(100);
	const [computerScore, setComputerScore] = useState(100);
	const [playerCombo, setPlayerCombo] = useState(0);
	const [computerCombo, setComputerCombo] = useState(0);

	const handleClick = (choice) => {
		setPlayerChoice(choice);
		const compChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(compChoice);
		defineWinner(choice, compChoice);
	}
	
	const defineWinner = async (choice, compChoice) => {
		if(choice === compChoice){
			setResult('Tie');
		}else if(
			(choice === choices[0] && compChoice === choices[2]) ||
			(choice === choices[1] && compChoice === choices[0]) ||
			(choice === choices[2] && compChoice === choices[1])
		){
			setResult('You won.');	
			const nextPlayerCombo = playerCombo + 1;
			setPlayerCombo(nextPlayerCombo);
			setComputerCombo(0);
			if(nextPlayerCombo === 3){
				await timeout(1000);
				setPlayerCombo(0);
				setComputerScore(computerScore - 30);
			}else{
				setComputerScore(computerScore - 10);
			}
		}else{
			setResult('Computer won.');
			const nextComputerCombo = computerCombo + 1;
			setComputerCombo(nextComputerCombo );
			setPlayerCombo(0);
			if(nextComputerCombo === 3){
				await timeout(1000);
				setComputerCombo(0);
				setPlayerScore(playerScore - 30);
			}else{
				setPlayerScore(playerScore - 10);
			}
		}
	}

	const reset = () => {
		setPlayerChoice('');
		setComputerChoice('');
		setResult('');
		setPlayerCombo(0);
		setComputerCombo(0);
		setPlayerScore(100);
		setComputerScore(100);
	}

	const printWinner = () => {
		if(playerScore > computerScore){
			return "You won";
		}else{
			return "You lost";
		}
	}

	if(playerScore > 0 && computerScore > 0){
		return (
			<div className="App">
				<div className="bars">
					<div className="bar">
						<ProgressBar bgcolor={'#6a1b8a'} completed={playerScore}/>	
						<ProgressBarDelimeter bgcolor={'#FFEA00'} combo={playerCombo}/>	
						<p className="label">You</p>
					</div>
					<div className="bar push-end">
						<ProgressBar bgcolor={'#6a1b8a'} completed={computerScore} reversed={true}/>	
						<ProgressBarDelimeter bgcolor={'#FFEA00'} reversed={true} combo={computerCombo}/>	
						<p className="label">Computer</p>
					</div>
				</div>
				<header className='main make-flex'>
					<p>
						Fight Mode
					</p>
					<div className="images" style={{ flexDirection: 'row'}}>
						<img className='flex-item' src={Rock} width={200} height={200} alt={"Rock"} onClick={() => handleClick(choices[0])}/>   
						<img className='flex-item' src={Paper} width={200} height={200} alt={"Paper"} onClick={() => handleClick(choices[1])}/>   
						<img className='flex-item' src={Scissors} width={200} height={200} alt={"Scissors"} onClick={() => handleClick(choices[2])}/>  
					</div>
					{playerChoice !== '' ? <p>You chose {playerChoice}, computer chose {computerChoice}.</p> : ''}
					<p>{result}</p>
				</header>
			</div>
		);
	}else{
		return (
			<div className="App">
				<header className="main-classic make-flex">
					<p>{printWinner()}</p>
					<p>
						<a className="App-link" href='{#}' onClick={() => reset()}>Play Again</a>
					</p>
				</header>
			</div>
		);
	}
}

export default Classic;
