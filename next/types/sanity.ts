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
 * Privacy Policy
 *
 *
 */
export interface PrivacyPolicy extends SanityDocument {
  _type: `privacyPolicy`;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Info Collection Description — `array`
   *
   * A description for the kinds of information you collect on your site (e.g., names, addresses, phone numbers, etc.)
   */
  infoCollectionDescription?: Array<
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
   * Info Collection Rationale — `array`
   *
   * An explanation for why the collected information is necessary
   */
  infoCollectionRationale?: Array<
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
   * Info Collection Practices — `array`
   *
   * An explanation for how you collect the information (e.g., cookies, logs, surveys, etc.)
   */
  infoCollectionPractices?: Array<
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
   * Info Collection Usage — `array`
   *
   * An explanation for how you will use the information you collect (and who else may have access to it)
   */
  infoCollectionUsage?: Array<
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
   * Info Collection Usage — `array`
   *
   * An explanation for how you will notify users of information collection policy practices
   */
  infoCollectionChangeNotifications?: Array<
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
   * Info Collection Contact — `array`
   *
   * Information about who to contact if someone has questions about your information collection practices
   */
  infoCollectionContact?: Array<
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
   * Info Collection Safety — `array`
   *
   * How is user data protected?
   */
  infoCollectionSafety?: Array<
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
   * Repo URL — `url`
   *
   *
   */
  repoUrl?: string;

  /**
   * Links — `array`
   *
   *
   */
  link?: Array<SanityKeyedReference<ProjectLink>>;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Version — `string`
   *
   *
   */
  version?: string;
}

/**
 * Project Link
 *
 *
 */
export interface ProjectLink extends SanityDocument {
  _type: `projectLink`;

  /**
   * Title — `reference`
   *
   *
   */
  provider?: SanityReference<ProjectLinkProvider>;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
}

/**
 * Project Link Provider
 *
 *
 */
export interface ProjectLinkProvider extends SanityDocument {
  _type: `projectLinkProvider`;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Icon — `image`
   *
   *
   */
  icon?: {
    _type: `image`;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
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
  | PrivacyPolicy
  | Project
  | ProjectLink
  | ProjectLinkProvider
  | Series;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;
