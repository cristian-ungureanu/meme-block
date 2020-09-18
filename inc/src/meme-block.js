import { memeBlockIcon } from './helpers/icons.js';
import { attributes } from '../../block.json';
import Edit from './edit';
import Save from './save';

const { registerBlockType } = wp.blocks;
const { Icon } = wp.components;
const { __ } = wp.i18n;

const icon = <Icon icon={ memeBlockIcon } />;

registerBlockType( 'meme-block/meme-block', {
	title: 'Meme Block',
	description: __( 'One does not simply not know what is a meme block.', 'meme-block' ),
	icon: icon,
	category: 'media',
	attributes,
	example: {
		attributes: {
			topText: __( 'ONE DOES NOT SIMPLY IGNORE', 'meme-block' ),
			bottomText: __( 'THIS COOL BLOCK', 'meme-block' ),
			topTextAlignment: 'center',
			bottomTextAlignment: 'center',
			memeType: '61579',
			alignType: 'default',
			padding: 20
		},
	},
	edit: Edit,
	save: Save,
} );
