import { useBlockProps, InspectorControls} from '@wordpress/block-editor'; // Récupération de la méthode permettant à Wordpress de nous transmettre les attributs propres à notre bloc
import { PanelBody, TextControl,ResizableBox 	 } from '@wordpress/components'; // Récupération des composants utilisé pour notre bloc

import "./ResponsiveSpacer.scss";

const ResponsiveSpacerEdit = ({setAttributes, attributes, toggleSelection}) => { //La fonction affichant notre premier bloc sur l'interface d'administration
	const {
		mobileHeight,
		desktopHeight,
	} = attributes; // Récupération des attributs customisés définit.
	const blockProps = useBlockProps() // Récupération des attributs propres à notre bloc
	return ( 
		<>
			<InspectorControls> 
				<PanelBody>
					<TextControl
						label={"Hauteur de l'espacement sur rdinateur"} //Ce bloc (TextControl) sera affiché dans la colonne de droite sur Gutenberg
						value={desktopHeight} //Il contient la valeur de attribut d'espacement sur ordinateur
						onChange={(newDesktopHeight)=>setAttributes({desktopHeight: newDesktopHeight})} //Il peut être modifié
					/>
					<TextControl
						label={"Hauteur de l'espacement sur mobile"} //Ce bloc (TextControl) sera affiché dans la colonne de droite sur Gutenberg
						value={mobileHeight} //Il contient la valeur de attribut d'espacement sur mobile
						onChange={(newMobileHeight)=>setAttributes({mobileHeight: newMobileHeight})}//Il peut être modifié
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className={"bloc-customises-responsive-spacer-container"}>
					<div 
						className={"bloc-customises-responsive-spacer-mobile"} 
						aria-hidden="true" 
						style={{
							height: mobileHeight,
						}}
					>
						{mobileHeight.includes('px') && //Si l'utilisateur renseigne une hauteur en pixel, alors on affiche une "boite redimenssionable"
							<ResizableBox
								size={ { //Elle permet à l'utilisateur de sélectionner la hauteur du bloc en faisant "glisser" une barre sur l'éditeur
									height: mobileHeight,
								} }
								minHeight="20"
								maxHeight="500"
								enable={ {
									top: false,
									right: false,
									bottom: true,
									left: false,
									topRight: false,
									bottomRight: false,
									bottomLeft: false,
									topLeft: false,
								} }
								onResizeStop={ ( event, direction, elt, delta ) => {
									let newHeight = parseInt( parseInt(mobileHeight.replace('px', '')) + delta.height, 10 );
									setAttributes( {
										mobileHeight: newHeight+'px',
									} );
								} }
							/>
						}
					</div>
					<div 
						className={"bloc-customises-responsive-spacer-desktop"} 
						aria-hidden="true" 
						style={{
							height: desktopHeight,
						}}
					>
						{desktopHeight.includes("px") && //Si l'utilisateur renseigne une hauteur en pixel, alors on affiche une "boite redimenssionable"
							<ResizableBox
								size={ { //Elle permet à l'utilisateur de sélectionner la hauteur du bloc en faisant "glisser" une barre sur l'éditeur
									height: desktopHeight,
								} }
								minHeight="20"
								maxHeight="500"
								enable={ {
									top: false,
									right: false,
									bottom: true,
									left: false,
									topRight: false,
									bottomRight: false,
									bottomLeft: false,
									topLeft: false,
								} }
								onResizeStop={ ( event, direction, elt, delta ) => {
									let newHeight = parseInt( parseInt(desktopHeight.replace('px', '')) + delta.height, 10 );
									setAttributes( {
										desktopHeight: newHeight+'px',
									} );
								} }
							/>
						}
					</div>
				</div>
			</div>
		</>
        
	); //Affichage de notre bloc
}
export default ResponsiveSpacerEdit;
