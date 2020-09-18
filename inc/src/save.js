const { RichText } = wp.editor;
const { useSelect } = wp.data;

const Save = ( props ) => {

	const { attributes } = props;
	const {
		padding,

		topTextTop,
		topTextLeft,
		topTextWidth,
		topTextFsDesktop,
		topTextFsTablet,
		topTextFsMobile,
		topTextColor,
		topText,

		bottomTextTop,
		bottomTextLeft,
		bottomTextWidth,
		bottomTextFsDesktop,
		bottomTextFsTablet,
		bottomTextFsMobile,
		bottomTextColor,
		bottomText,

		topTextAlignment,
		bottomTextAlignment,
		memeType,
		alignType
	} = attributes;

	const memeSrc = memeData.filter(obj => {
		return obj.value === memeType
	})[0].url;

	const style = '' +
		'@media ( max-width: 600px ) {' +
		'.meme-block-wrapper .meme-block-text-wrapper.top-text h3{' +
		'font-size:' + topTextFsMobile + 'px' +
		'}' +
		'.meme-block-wrapper .meme-block-text-wrapper.bottom-text h3{' +
		'font-size:' + bottomTextFsMobile + 'px' +
		'}' +
		'}' +
		'@media ( min-width: 600px ) and ( max-width: 960px ) {' +
		'.meme-block-wrapper .meme-block-text-wrapper.top-text h3{' +
		'font-size:' + topTextFsTablet + 'px' +
		'}' +
		'.meme-block-wrapper .meme-block-text-wrapper.bottom-text h3{' +
		'font-size:' + topTextFsTablet + 'px' +
		'}' +
		'}';

	const topTextStyle = {
		paddingTop: alignType === 'default' ? padding : 'unset',
		top: alignType === 'custom' ? topTextTop + '%' : 'unset',
		left: alignType === 'custom' ? topTextLeft + '%' : 'unset',
		width: alignType === 'custom' ? topTextWidth + '%' : 'auto',
		fontSize: topTextFsDesktop,
		color: topTextColor,
	};

	const bottomTextStyle = {
		paddingBottom: alignType === 'default' ? padding : 'unset',
		top: alignType === 'custom' ? bottomTextTop + '%' : 'unset',
		left: alignType === 'custom' ? bottomTextLeft + '%' : 'unset',
		width: alignType === 'custom' ?  bottomTextWidth + '%' : 'auto',
		fontSize: bottomTextFsDesktop,
		color: bottomTextColor,
	};

	return (
		<div>
			<style>
				{style}
			</style>
			<div className={`meme-block-wrapper align-${ props.attributes.alignType }`}>
				<img
					className='meme-block-image'
					src={memeSrc}
				/>
				<div className="meme-block-content-wrapper">
					<div className="meme-block-text-wrapper top-text"
					     style={topTextStyle}
					>
					<RichText.Content
						className={ `meme-block-top-text meme-block-top-align-${ topTextAlignment }` }
						tagName="h3"
						value={ topText }
					/>
					</div>
					<div className="meme-block-text-wrapper bottom-text"
					     style={bottomTextStyle}
					>
					<RichText.Content
						className={ `meme-block-bottom-text meme-block-bottom-align-${ bottomTextAlignment }` }
						tagName="h3"
						value={ bottomText }
					/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Save;
