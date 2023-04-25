export type ProductCategory =
	| "mask"
	| "eyecare"
	| "moisturizers"
	| "treatments"
	| "nightcare"
	| "suncare"
	| "onsale"
	| "featured";

export interface ProductInterface {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	category: ProductCategory;
	discount?: number;
	rating?: number;
	sku?: string;
}
