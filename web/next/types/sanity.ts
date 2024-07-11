import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen"

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: `category`;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;
}

/**
 * Creator
 *
 *
 */
export interface Creator extends SanityDocument {
  _type: `creator`;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: `slug`; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: `image`;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Github Username — `string`
   *
   *
   */
  githubUsername?: string;

  /**
   * Github — `url`
   *
   *
   */
  githubUrl?: string;

  /**
   * LinkedIn — `url`
   *
   *
   */
  linkedInUrl?: string;

  /**
   * Profession — `string`
   *
   *
   */
  profession?: string;

  /**
   * Career Start Date — `date`
   *
   *
   */
  careerStartDate?: string;

  /**
   * Open to Work — `boolean`
   *
   *
   */
  openToWork?: boolean;

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<Code>
    | SanityKeyed<{
        _type: `image`;
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;
}

/**
 * Employer
 *
 *
 */
export interface Employer extends SanityDocument {
  _type: `employer`;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Are you currently employed? — `boolean`
   *
   *
   */
  employed?: boolean;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: `image`;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Start date — `date`
   *
   *
   */
  startDate?: string;

  /**
   * End date — `date`
   *
   *
   */
  endDate?: string;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<Code>
    | SanityKeyed<{
        _type: `image`;
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;

  /**
   * Home Page — `url`
   *
   *
   */
  homePage?: string;

  /**
   * Job Titles — `array`
   *
   * The job title(s) you held, or currently hold, at this employer
   */
  jobTitles?: Array<SanityKeyedReference<JobTitle>>;
}

/**
 * Job Title
 *
 *
 */
export interface JobTitle extends SanityDocument {
  _type: `jobTitle`;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Start date — `date`
   *
   *
   */
  startDate?: string;

  /**
   * End date — `date`
   *
   *
   */
  endDate?: string;

  /**
   * Current job title? — `boolean`
   *
   *
   */
  currentJobTitle?: boolean;

  /**
   * Responsibilities — `array`
   *
   *
   */
  responsibilities?: Array<SanityKeyed<string>>;
}

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
  _type: `article`;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: `slug`; current: string };

  /**
   * Publish date — `date`
   *
   *
   */
  publishDate?: string;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Creator>;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: `image`;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Summary — `array`
   *
   *
   */
  summary?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Body — `array`
   *
   *
   */
  body?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<Code>
    | SanityKeyed<{
        _type: `image`;
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Series — `reference`
   *
   *
   */
  series?: SanityReference<Series>;

  /**
   * Series Index — `number`
   *
   *
   */
  seriesIndex?: number;
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: `project`;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: `slug`; current: string };

  /**
   * GitHub Owner — `string`
   *
   *
   */
  githubOwner?: string;

  /**
   * GitHub Repo — `string`
   *
   *
   */
  githubRepo?: string;

  /**
   * Repo URL — `url`
   *
   *
   */
  repoUrl?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: `image`;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Series
 *
 *
 */
export interface Series extends SanityDocument {
  _type: `series`;

  /**
   * Series Title — `string`
   *
   *
   */
  seriesTitle?: string;

  /**
   * Series Description — `array`
   *
   *
   */
  seriesDescription?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<Code>
    | SanityKeyed<{
        _type: `image`;
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;

  /**
   * Articles — `array`
   *
   *
   */
  articles?: Array<SanityKeyedReference<Article>>;
}

export type Documents =
  | Category
  | Creator
  | Employer
  | JobTitle
  | Article
  | Project
  | Series;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;
