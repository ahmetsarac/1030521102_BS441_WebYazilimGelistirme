const ProgressBarDelimeter = (props) => {
	const { bgcolor, combo, reversed } = props;

	const outerContainerStyles = {
		display: 'flex',
		height: '1vh',
		width: '90%',
		backgroundColor: "#000000",
		flexDirection: reversed ? 'row-reverse' : 'row',
	}

	const innerContainerStyles = {
		display: 'flex',
		height: '1vh',
		width: '33.3%',
		borderRight: reversed ? 'none' : '5px solid blue',
		borderLeft: reversed ? '5px solid blue' : 'none',
		flexDirection: reversed ? 'row-reverse' : 'row',
	}


	const fillerStyles = {
		height: '1vh',
		width: `0%`,
		backgroundColor: bgcolor,
		borderRadius: 'inherit',
		textAlign: 'right',
		transition: 'width 0.5s',
	}

	return (
		<div style={outerContainerStyles}>
		<div style={innerContainerStyles} > 
			<div style={{...fillerStyles, width: combo >= 1 ? '100%': '0%'}}></div>
		</div>
		<div style={innerContainerStyles} > 
			<div style={{...fillerStyles, width: combo >= 2 ? '100%': '0%'}}></div>
		</div>
		<div style={{...innerContainerStyles, border: 'none'}} > 
			<div style={{...fillerStyles, width: combo === 3 ? '100%': '0%'}}></div>
		</div>
	
		</div>
	);
};

export default ProgressBarDelimeter;
