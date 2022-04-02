import ResponsiveSpacerEdit from './ResponsiveSpacerEdit'; //Notre bloc sur l'interface d'administration
import ResponsiveSpacerSave from './ResponsiveSpacerSave'; //Notre bloc sur l'interface public
import { resizeCornerNE as icon } from '@wordpress/icons'; // L'icone de notre bloc
export const name = "responsive-spacer"; //Le nom de notre bloc
export const settings = { // Les paramètres de notre bloc
	title: "Espacement",  //Le titre de notre bloc 
	description: "Un espacement responsive !", // La description de notre bloc
	category: "design", //La category de notre bloc
	icon:icon, //L'icon de notre bloc
	edit:ResponsiveSpacerEdit, // La fonction à appeler pour afficher notre bloc sur l'interface d'administration
	save:ResponsiveSpacerSave, // La fonction à appeler pour afficher notre bloc sur l'interface public
	attributes:{ //Déclaration des attributs de notre bloc
        mobileHeight: { // Déclaration du nom de notre attribut
            type: "string", // Le type de notre attribut
            default: "50px" // La valeur par défaut de notre attribut
        },
        desktopHeight: {
            type: "string",
            default: "100px"
        },
    },
}
