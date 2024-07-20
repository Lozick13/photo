import classes from './selection.module.css';

const Selection = ({ setUrls }: { setUrls: (urls: string[]) => void }) => {
	const fileToDataUrl = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();

			fileReader.addEventListener('load', evt => {
				resolve(evt.target?.result as string);
			});

			fileReader.addEventListener('error', (evt: ProgressEvent<FileReader>) => {
				reject(new Error(evt.target?.error?.message));
			});

			fileReader.readAsDataURL(file);
		});
	};

	const handleSelect = async (
		evt: React.ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		const files: FileList | null = evt.target.files;
		if (!files) {
			return;
		}

		const filesArray: File[] = [...files];
		const urls: string[] = await Promise.all(
			filesArray.map(o => fileToDataUrl(o))
		);

		console.log(urls);
		setUrls(urls);
	};

	return (
		<>
			<div className={classes['selection']}>
				<input
					onChange={handleSelect}
					className={classes['selection__input']}
					type='file'
					multiple
				/>
				<div className={classes['selection__click-to-select']}>
					<span className={classes['selection__text']}>Click to select</span>
				</div>
			</div>
		</>
	);
};

export default Selection;
