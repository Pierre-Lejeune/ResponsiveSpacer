import { registerBlockType } from '@wordpress/blocks';

import * as ResponsiveSpacer from './ResponsiveSpacer/ResponsiveSpacer';
export const listeDeBlocsCustomises = () => [
	ResponsiveSpacer,
]

const registerBlock = (block) => {
    if ( ! block ) {
		return;
	}
	const { name, settings } = block;
	registerBlockType( `pierrelejeune/${name}`, settings );
}
const registerPierrelejeuneBlocks = (blocks = listeDeBlocsCustomises()) => {
	blocks.forEach( registerBlock );
};
registerPierrelejeuneBlocks();