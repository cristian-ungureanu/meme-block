const { AlignmentToolbar } = wp.editor;
const { RichText, BlockControls, InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, ColorPicker } = wp.components;
const { __ } = wp.i18n;
const { useSelect } = wp.data;

import ResponsiveControl from './components/responsive-control/index.js';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
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

	const getView = useSelect( select => {
		const { getView } = select( 'themeisle-gutenberg/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	let getTopFontSize = () => {
		let value;

		if ( 'Desktop' === getView ) {
			value = topTextFsDesktop;
		}

		if ( 'Tablet' === getView ) {
			value = topTextFsTablet;
		}

		if ( 'Mobile' === getView ) {
			value = topTextFsMobile;
		}

		return value;
	};
	getTopFontSize = getTopFontSize();

	let getBottomFontSize = () => {
		let value;

		if ( 'Desktop' === getView ) {
			value = bottomTextFsDesktop;
		}

		if ( 'Tablet' === getView ) {
			value = bottomTextFsTablet;
		}

		if ( 'Mobile' === getView ) {
			value = bottomTextFsMobile;
		}

		return value;
	}
	getBottomFontSize = getBottomFontSize();

	const changeFontSize = ( desktop, tablet, mobile, value ) => {
		if ( 'Desktop' === getView ) {
			setAttributes({ [desktop]: value });
		}

		if ( 'Tablet' === getView ) {
			setAttributes({ [tablet]: value });
		}

		if ( 'Mobile' === getView ) {
			setAttributes({ [mobile]: value });
		}
	}

	const changeAttribute = ( slug, val ) => {
		setAttributes( { [ slug ]: val } );
	};

	const memeSrc = memeData.filter(obj => {
		return obj.value === props.attributes.memeType
	})[0].url;

	const topTextStyle = {
		paddingTop: alignType === 'default' ? padding : 'unset',
		top: alignType === 'custom' ? topTextTop + '%' : 'unset',
		left: alignType === 'custom' ? topTextLeft + '%' : 'unset',
		width: alignType === 'custom' ? topTextWidth + '%' : 'auto',
		fontSize: getTopFontSize,
		color: topTextColor,
	};

	const bottomTextStyle = {
		paddingBottom:  alignType === 'default' ? padding : 'unset',
		top: alignType === 'custom' ? bottomTextTop + '%' : 'unset',
		left: alignType === 'custom' ? bottomTextLeft + '%' : 'unset',
		width: alignType === 'custom' ?  bottomTextWidth + '%' : 'auto',
		fontSize: getBottomFontSize,
		color: bottomTextColor,
	};

	const alignData = [
		{ label: __( 'Default', 'meme-block' ), value: 'default' },
		{ label: __( 'Custom', 'meme-block' ), value: 'custom' }
	]

	return (
		<div>
			<div className={`meme-block-wrapper align-${ alignType }`}>
				<img
					className='meme-block-image'
					src={memeSrc}
				/>
				<div className="meme-block-content-wrapper">
					<div className="meme-block-text-wrapper top-text"
					     style={topTextStyle}
					>
						<RichText
							className='meme-block-top-text'
							style={ { textAlign: topTextAlignment } }
							tagName='h3'
							onChange={ ( value ) =>
								changeAttribute( 'topText', value )
							}
							value={ topText }
							placeholder={ __( 'One does not simply', 'meme-block' ) }
						/>
					</div>
					<div className="meme-block-text-wrapper bottom-text"
					     style={bottomTextStyle}
					>
						<RichText
							className='meme-block-bottom-text'
							style={ { textAlign: bottomTextAlignment } }
							tagName='h3'
							onChange={ ( value ) =>
								changeAttribute( 'bottomText', value )
							}
							value={ bottomText }
							placeholder={ __( 'Walk into Mordor', 'meme-block' ) }
						/>
					</div>
				</div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ topTextAlignment }
							onChange={ ( value ) => {
								const val = ( value === undefined )? 'none' : value;
								changeAttribute( 'topTextAlignment', val );  }
							}
						/>
						<AlignmentToolbar
							value={ bottomTextAlignment }
							onChange={ ( value ) => {
								const val = ( value === undefined )? 'none' : value;
								changeAttribute( 'bottomTextAlignment', val );  }
							}
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
								value={ memeType }
								onChange={ ( value ) =>
									changeAttribute( 'memeType', value )
								}
								options={ memeData }
							/>
							<SelectControl
								label={ __( 'Alignment type:' ) }
								value={ alignType } // e.g: value = [ 'a', 'c' ]
								onChange={ ( value ) =>
									changeAttribute( 'alignType', value )  }
								options={ alignData }
							/>
							{
								alignType === 'default' ?
									<RangeControl
										label={ __( 'Padding:', 'neve' ) }
										value={ padding }
										onChange={ ( value ) =>
											changeAttribute( 'padding', value )  }
										min={ 0 }
										max={ 300 }
									/> :
									''
							}
							{
								alignType === 'custom' ?
									<div>
									<RangeControl
										label={ __( 'Top Text - Top (%)', 'neve' ) }
										value={ topTextTop }
										onChange={ ( value ) =>
											changeAttribute( 'topTextTop', value )  }
										min={ 1 }
										max={ 100 }
									/>
									<RangeControl
										label={ __( 'Top Text - Left (%)', 'neve' ) }
										value={ topTextLeft }
										onChange={ ( value ) =>
											changeAttribute( 'topTextLeft', value )  }
										min={ 1 }
										max={ 100 }
									/>
									<RangeControl
										label={ __( 'Top Text - Width (%)', 'neve' ) }
										value={ topTextWidth }
										onChange={ ( value ) =>
											changeAttribute( 'topTextWidth', value )  }
										min={ 1 }
										max={ 100 }
									/>
									<RangeControl
										label={ __( 'Bottom Text - Top (%)', 'neve' ) }
										value={ bottomTextTop }
										onChange={ ( value ) =>
											changeAttribute( 'bottomTextTop', value )  }
										min={ 1 }
										max={ 100 }
									/>
									<RangeControl
										label={ __( 'Bottom Text - Left (%)', 'neve' ) }
										value={ bottomTextLeft }
										onChange={ ( value ) =>
											changeAttribute( 'bottomTextLeft', value )  }
										min={ 1 }
										max={ 100 }
									/>
									<RangeControl
										label={ __( 'Bottom Text - Width (%)', 'neve' ) }
										value={ bottomTextWidth }
										onChange={ ( value ) =>
											changeAttribute( 'bottomTextWidth', value )  }
										min={ 1 }
										max={ 100 }
									/>
									</div>
									:
									''
							}
						</PanelBody>
						<PanelBody
							title={__('Font settings', 'neve')}
							intialOpen={ true }
						>
							<ResponsiveControl
								label={ __( 'Top Text - Font size (px)', 'neve' ) }
							>
								<RangeControl
									value={ getTopFontSize || '' }
									onChange={ (value) =>
										changeFontSize( 'topTextFsDesktop', 'topTextFsTablet', 'topTextFsMobile', value )
									}
									min={ 1 }
									max={ 100 }
								/>
							</ResponsiveControl>
							<ColorPicker
								label={ __( 'Top Text - Color', 'neve' ) }
								color={ topTextColor }
								onChangeComplete={ ( value ) =>
									changeAttribute( 'topTextColor', value.hex )   }
								disableAlpha
							/>
							<ResponsiveControl
								label={ __( 'Bottom Text - Font size (px)', 'neve' ) }
							>
							<RangeControl

								value={ getBottomFontSize || '' }
								onChange={
									( value ) =>
										changeFontSize( 'bottomTextFsDesktop', 'bottomTextFsTablet', 'bottomTextFsMobile', value ) }
								min={ 1 }
								max={ 100 }
							/>
							</ResponsiveControl>
							<ColorPicker
								label={ __( 'Bottom Text - Color', 'neve' ) }
								color={ bottomTextColor }
								onChangeComplete={ ( value ) =>
									changeAttribute( 'bottomTextColor', value.hex ) }
								disableAlpha
							/>
						</PanelBody>
					</InspectorControls>
				}

			</div>
		</div>
	);
}

export default Edit;
