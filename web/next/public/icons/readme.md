# Readme - Icons

## Adding icons

To add a new icon, simply download the SVG file and drop it in this directory.

## Using icons

To use an icon, first be sure to add the SVG to this directory. Once you've done that, use the `CustomIcon` component, like so:

```jsx
<CustomIcon 
    // DON'T include the file extension
    fileName='some-icon-file-name'
    height={32}
    width={32}
/>
```

## Adding company logos for the Tech stack section

These instructions are specific to adding icons for providers that you would like to include the tech stack section of the home page.
### Finding the logos

Some providers will have premade assets for you to download. You can generally find out with a Google search for something like `<PROVIDER_NAME> logo svg` or something similar. However,
there are some providers that don't do this, more-commonly with smaller start ups. For these providers, you will need to go to their site and find the logo you would like to use (use caution, though*).

Ideally, the icon you find will be an SVG - inspect it, copy the SVG element and paste it into a new `*.svg` file in this directory.

Now, you should be able to use the new provider icon.

> **CAUTION**: There are rules around how and when you can use company logo/brand assets. Each provider has different rules. Simply taking the icon from a provider's site comes with some
risk since they weren't providing it outright. With that said, _since the intent is to credit them for the high quality of their service, basically promoting them_, I don't think anyone
will take issue with this. _Just don't modify ANY company assets aside from scaling purposes (BUT KEEP DIMENSIONS)_. From the providers that do state guidelines, it's clear they never want you to modify the colors (not even to match your site theme - this is a branding issue, so don't violate it!).

### SVGs that won't scale

As was the case with the `logomark-light.svg` icon, the original SVG asset did not scale with its container. This is because it did not have a `viewbox` property set.

To fix this, simply modify the svg like to have the `viewbox` property:
```html
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <!-- SVG content... -->
</svg>
```
* Value was set to `0 0 40 40` to match the dimensions of the SVG
