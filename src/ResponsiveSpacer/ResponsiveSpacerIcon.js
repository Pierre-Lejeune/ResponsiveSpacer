import { SVG, Polygon } from '@wordpress/primitives'; //Import de nos balises SVG utilisées

const ResponsiveSpacerIcon=()=>{ //Déclaration de notre variable contenant l'icone
	return (
		<SVG
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Polygon points="1,1 20,1 20,20 1,20"/>
		</SVG>
	); // Déclaration de notre icone
};
export default ResponsiveSpacerIcon; //Nous exportons notre icône, comme il n'y a que cette ressources sur ce fichier, nous l'exportons par défaut.