import classes from './closebutton.module.css';

const CloseButton = ({ click }: { click: () => void }) => {
	return (
		<>
			<button onClick={click} className={classes['close-button']}>
				<i className='material-icons'>close</i>
			</button>
		</>
	);
};

export default CloseButton;
