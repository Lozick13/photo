import { useState } from 'react';
import Photos from '../Photos/Photos';
import Selection from '../Selection/Selection';
import classes from './photomanager.module.css';

const PhotoManager = () => {
	const [photoUrls, setPhotoUrls] = useState<string[]>([]);

	const setUrls = (urls: string[]) =>
		setPhotoUrls(prevUrls => [...prevUrls, ...urls]);
	const deleteUrl = (url: string) => {
		setPhotoUrls(prevUrls => prevUrls.filter(u => u !== url));
	};

	return (
		<>
			<div className={classes['photo-manager']}>
				<Selection setUrls={setUrls}></Selection>
				<Photos photoUrls={photoUrls} deleteUrl={deleteUrl}></Photos>
			</div>
		</>
	);
};

export default PhotoManager;
