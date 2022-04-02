import { useBlockProps } from '@wordpress/block-editor';// Récupération de la méthode permettant à Wordpress de nous transmettre les attributs propres à notre bloc

import "./ResponsiveSpacer.scss";

const ResponsiveSpacerSave = ({attributes}) => {//La fonction affichant notre premier bloc sur l'interface public
	const {
		mobileHeight,
		desktopHeight,
	} = attributes;
	const blockProps = useBlockProps.save();// Récupération des attributs propres à notre bloc
    return (
		<div {...blockProps}>
			<div className={"bloc-customises-responsive-spacer-container"}>
				<div 
					className={"bloc-customises-responsive-spacer-mobile"} 
					aria-hidden="true" 
					style={{
						height: mobileHeight,
					}}
				/>
				<div 
					className={"bloc-customises-responsive-spacer-desktop"} 
					aria-hidden="true" 
					style={{
						height: desktopHeight,
					}}
				/>
			</div>
		</div>
	);//Affichage de notre bloc
}

export default ResponsiveSpacerSave;
