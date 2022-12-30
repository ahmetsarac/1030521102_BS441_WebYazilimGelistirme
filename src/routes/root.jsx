import './root.css';

function Root() {
  return (
    <div className="App">
      <header className="main-classic make-flex">
        <p>
			Rock Paper Scissors
        </p>
        <a
          className="App-link"
          href="/classic"
          rel="noopener noreferrer"
        >
		Classic Mode
        </a>
	  <p style={{fontSize: '15px'}}>The game ends when your score becomes 10.</p>
		<a
          className="App-link"
          href="/fight"
          rel="noopener noreferrer"
        >
		Fight Mode
        </a>
	  <p style={{fontSize: '15px'}}>It is like Street Fighter. You and computer have health bars and combos. Each time the winner hits 10. Whoever wins 3 round in a row will hit combo attack and it hits 30.</p>
      </header>
    </div>
  );
}

export default Root;
