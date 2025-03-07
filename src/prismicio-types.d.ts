// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpostDocumentDataSlicesSlice = ImageBlockSlice | RichTextSlice;

/**
 * Content for BlogPost documents
 */
interface BlogpostDocumentData {
	/**
	 * Title field in *BlogPost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Date field in *BlogPost*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date: prismic.DateField;

	/**
	 * Hover Image field in *BlogPost*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.hover_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	hover_image: prismic.ImageField<never>;

	/**
	 * Slice Zone field in *BlogPost*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
	 * Meta Title field in *BlogPost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: blogpost.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *BlogPost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: blogpost.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *BlogPost*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<BlogpostDocumentData>,
	'blogpost',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| ContentIndexSlice
	| ExperienceSlice
	| ProductListSlice
	| BiographySlice
	| HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

type ProjectDocumentDataSlicesSlice = RichTextSlice | ImageBlockSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
	/**
	 * Title field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Date field in *Project*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date: prismic.DateField;

	/**
	 * Hover Image field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.hover_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	hover_image: prismic.ImageField<never>;

	/**
	 * Slice Zone field in *Project*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
	 * Meta Title field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: project.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: project.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<ProjectDocumentData>,
	'project',
	Lang
>;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
	/**
	 * Link field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Label field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Name field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Nav Item field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

	/**
	 * CTA Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	cta_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * CTA Label field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_label
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	cta_label: prismic.KeyTextField;

	/**
	 * Github Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.github_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Linkedin Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.linkedin_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	linkedin_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Instagram Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.instagram_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	instagram_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never> /**
	 * Meta Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_title
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = BlogpostDocument | PageDocument | ProjectDocument | SettingsDocument;

/**
 * Primary content in *Biography → Default → Primary*
 */
export interface BiographySliceDefaultPrimary {
	/**
	 * Heading field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Description field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Button Label field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button Link field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Avatar field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.avatar
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Biography Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BiographySliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Biography*
 */
type BiographySliceVariation = BiographySliceDefault;

/**
 * Biography Shared Slice
 *
 * - **API ID**: `biography`
 * - **Description**: Biography
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySlice = prismic.SharedSlice<'biography', BiographySliceVariation>;

/**
 * Primary content in *ContentIndex → Default → Primary*
 */
export interface ContentIndexSliceDefaultPrimary {
	/**
	 * Heading field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Content Type field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.content_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	content_type: prismic.SelectField<'Blog' | 'Project'>;

	/**
	 * Description field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * View More Text field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.view_more_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	view_more_text: prismic.KeyTextField;

	/**
	 * Fallback Item Image field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.fallback_item_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	fallback_item_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContentIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ContentIndexSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ContentIndex*
 */
type ContentIndexSliceVariation = ContentIndexSliceDefault;

/**
 * ContentIndex Shared Slice
 *
 * - **API ID**: `content_index`
 * - **Description**: ContentIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSlice = prismic.SharedSlice<'content_index', ContentIndexSliceVariation>;

/**
 * Item in *Experience → Default → Primary → Item*
 */
export interface ExperienceSliceDefaultPrimaryItemItem {
	/**
	 * Title field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.item[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Time Period field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.item[].time_period
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	time_period: prismic.KeyTextField;

	/**
	 * Institution field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.item[].institution
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	institution: prismic.KeyTextField;

	/**
	 * Description field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.item[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Primary content in *Experience → Default → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
	/**
	 * Heading field in *Experience → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Item field in *Experience → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.item[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	item: prismic.GroupField<Simplify<ExperienceSliceDefaultPrimaryItemItem>>;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ExperienceSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<'experience', ExperienceSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * FirstName field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.firstname
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	firstname: prismic.KeyTextField;

	/**
	 * LastName field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.lastname
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	lastname: prismic.KeyTextField;

	/**
	 * Tagline field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.tagline
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	tagline: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *ImageBlock → Default → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
	/**
	 * Image field in *ImageBlock → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_block.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageBlockSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation = ImageBlockSliceDefault;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<'image_block', ImageBlockSliceVariation>;

/**
 * Item in *ProductList → Default → Primary → Item*
 */
export interface ProductListSliceDefaultPrimaryItemItem {
	/**
	 * Product Name field in *ProductList → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: product_list.default.primary.item[].product_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	product_name: prismic.KeyTextField;

	/**
	 * Product Color field in *ProductList → Default → Primary → Item*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: product_list.default.primary.item[].product_color
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	product_color: prismic.ColorField;
}

/**
 * Primary content in *ProductList → Default → Primary*
 */
export interface ProductListSliceDefaultPrimary {
	/**
	 * Heading field in *ProductList → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: product_list.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Item field in *ProductList → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: product_list.default.primary.item[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	item: prismic.GroupField<Simplify<ProductListSliceDefaultPrimaryItemItem>>;
}

/**
 * Default variation for ProductList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductListSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ProductListSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ProductList*
 */
type ProductListSliceVariation = ProductListSliceDefault;

/**
 * ProductList Shared Slice
 *
 * - **API ID**: `product_list`
 * - **Description**: ProductList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductListSlice = prismic.SharedSlice<'product_list', ProductListSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			BlogpostDocument,
			BlogpostDocumentData,
			BlogpostDocumentDataSlicesSlice,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			ProjectDocument,
			ProjectDocumentData,
			ProjectDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavItemItem,
			AllDocumentTypes,
			BiographySlice,
			BiographySliceDefaultPrimary,
			BiographySliceVariation,
			BiographySliceDefault,
			ContentIndexSlice,
			ContentIndexSliceDefaultPrimary,
			ContentIndexSliceVariation,
			ContentIndexSliceDefault,
			ExperienceSlice,
			ExperienceSliceDefaultPrimaryItemItem,
			ExperienceSliceDefaultPrimary,
			ExperienceSliceVariation,
			ExperienceSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			ImageBlockSlice,
			ImageBlockSliceDefaultPrimary,
			ImageBlockSliceVariation,
			ImageBlockSliceDefault,
			ProductListSlice,
			ProductListSliceDefaultPrimaryItemItem,
			ProductListSliceDefaultPrimary,
			ProductListSliceVariation,
			ProductListSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault
		};
	}
}
