import { memeBlockIcon } from './helpers/icons.js';

const { registerBlockType } = wp.blocks;
const {
	PanelBody,
	Icon,
	SelectControl,
	RangeControl
} = wp.components;
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls
} = wp.editor;
const { __ } = wp.i18n;

const icon = <Icon icon={ memeBlockIcon } />;

registerBlockType( 'meme-block/meme-block', {
	title: 'Meme Block',
	icon: icon,
	category: 'media',
	attributes: {
		memeType: {
			type: 'string',
			default: '61579'
		},
		topText: {
			type: 'array',
			source: 'children',
			selector: 'h3.meme-block-top-text',
		},
		bottomText: {
			type: 'array',
			source: 'children',
			selector: 'h3.meme-block-bottom-text',
		},
		topTextAlignment: {
			type: 'string',
			default: 'center',
		},
		bottomTextAlignment: {
			type: 'string',
			default: 'center',
		},
		padding: {
			type: 'int',
			default: '20',
		}
	},
	example: {
		attributes: {
			topText: __( 'ONE DOES NOT SIMPLY IGNORE', 'meme-block' ),
			bottomText: __( 'THIS COOL BLOCK', 'meme-block' ),
			topTextAlignment: 'center',
			bottomTextAlignment: 'center',
			memeType: '61579',
			padding: 20
		},
	},
	edit: ( props ) => {
		const {
			attributes: { padding, topText, bottomText, topTextAlignment, bottomTextAlignment, memeType },
		} = props;

		const onChangeMeme = ( newMeme ) => {
			props.setAttributes( { memeType: newMeme } );
		};

		const onChangeTopText = ( newContent ) => {
			props.setAttributes( { topText: newContent } );
		};

		const onChangeBottomText = ( newContent ) => {
			props.setAttributes( { bottomText: newContent } );
		};

		const onChangeBottomAlignment = ( newAlignment ) => {
			props.setAttributes( {
				bottomTextAlignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		};

		const onChangeTopAlignment = ( newAlignment ) => {
			props.setAttributes( {
				topTextAlignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		};

		const onChangePadding = ( newPadding ) => {
			props.setAttributes( { padding: newPadding } );
		}

		const memeSrc = memeData.filter(obj => {
			return obj.value === props.attributes.memeType
		})[0].url;

		const modalStyle = {
			padding: padding,
		};
		return (
			<div className='meme-block-wrapper'>
				<img
					className='meme-block-image'
					src={memeSrc}
				/>
				<div className="meme-block-text-wrapper"
					style={modalStyle}
				>
					<RichText
						className='meme-block-top-text'
						style={ { textAlign: topTextAlignment } }
						tagName='h3'
						onChange={ onChangeTopText }
						value={ topText }
					/>
					<RichText
						className='meme-block-bottom-text'
						style={ { textAlign: bottomTextAlignment } }
						tagName='h3'
						onChange={ onChangeBottomText }
						value={ bottomText }
					/>
				</div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ topTextAlignment }
							onChange={ onChangeTopAlignment }
						/>
						<AlignmentToolbar
							value={ bottomTextAlignment }
							onChange={ onChangeBottomAlignment }
						/>
					</BlockControls>
				}
				{
					<InspectorControls>
						<PanelBody
							title={__('General settings', 'neve')}
							intialOpen={ true }
						>
						<SelectControl
							label={ __( 'Meme type:' ) }
							value={ memeType } // e.g: value = [ 'a', 'c' ]
							onChange={ onChangeMeme }
							options={ memeData }
						/>
						<RangeControl
							label={ __( 'Padding:', 'neve' ) }
							value={ padding }
							onChange={ onChangePadding }
							min={ 0 }
							max={ 300 }
						/>
						</PanelBody>
					</InspectorControls>
				}

			</div>
		);
	},
	save: ( props ) => {
		const memeSrc = memeData.filter(obj => {
			return obj.value === props.attributes.memeType
		})[0].url;

		const modalStyle = {
			padding: props.attributes.padding,
		};
		return (
			<div className='meme-block-wrapper'>
				<img
					className='meme-block-image'
					src={memeSrc}
				/>
				<div className="meme-block-text-wrapper"
				     style={modalStyle}
				>
					<RichText.Content
						className={ `meme-block-top-text meme-block-top-align-${ props.attributes.topTextAlignment }` }
						tagName="h3"
						value={ props.attributes.topText }
					/>
					<RichText.Content
						className={ `meme-block-bottom-text meme-block-bottom-align-${ props.attributes.bottomTextAlignment }` }
						tagName="h3"
						value={ props.attributes.bottomText }
					/>
				</div>
			</div>
		);
	},
} );
