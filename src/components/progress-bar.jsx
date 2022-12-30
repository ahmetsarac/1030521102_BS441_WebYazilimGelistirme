const ProgressBar = (props) => {
	const { bgcolor, completed, reversed } = props;

	const containerStyles = {
		display: 'flex',
		height: '5vh',
		width: '90%',
		backgroundColor: "#e0e0de",
		justifyContent: reversed ? 'end' : 'start',
	}

	const fillerStyles = {
		height: '5vh',
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: 'inherit',
		textAlign: 'right',
		transition: 'width 0.5s',
	}

	return (
		<div style={containerStyles}>
		<div style={fillerStyles}>
		</div>
		</div>
	);
};

export default ProgressBar;
