import './root.css';

function Root() {
  return (
    <div className="root">
      <header className="App-header">
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
		<a
          className="App-link"
          href="/fight"
          rel="noopener noreferrer"
        >
		Fight Mode
        </a>

		
      </header>
    </div>
  );
}

export default Root;
