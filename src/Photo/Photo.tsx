import CloseButton from '../UI/CloseButton/CloseButton';
import classes from './photo.module.css';

interface IProps {
	image: string;
	deletePhoto: (url: string) => void;
}

const Photo = ({ image, deletePhoto }: IProps) => {
	return (
		<>
			<div className={classes['photo']}>
				<div className={classes['photo__button']}>
					<CloseButton click={() => deletePhoto(image)}></CloseButton>
				</div>
				<img className={classes['photo__image']} src={image} />
			</div>
		</>
	);
};

export default Photo;

Photo.defaultProps = { image: '' };
