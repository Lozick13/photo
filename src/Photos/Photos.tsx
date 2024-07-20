import Photo from '../Photo/Photo';
import classes from './photos.module.css';

interface IProps {
	photoUrls: string[];
	deleteUrl: (url: string) => void;
}

const Photos = ({ photoUrls, deleteUrl }: IProps) => {
	return (
		<>
			<div className={classes['photos']}>
				{photoUrls.map((photo: string) => {
					return <Photo key={photo} image={photo} deletePhoto={deleteUrl} />;
				})}
			</div>
		</>
	);
};

export default Photos;
