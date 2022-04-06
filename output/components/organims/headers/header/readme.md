# sami-header



<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Tag Card With Number -->
<sami-card-tag text="1"></sami-card-tag>
```



## Properties

| Property                   | Attribute                    | Description | Type                           | Default     |
| -------------------------- | ---------------------------- | ----------- | ------------------------------ | ----------- |
| `backgroundColor`          | `background-color`           |             | `string`                       | `undefined` |
| `boxShadow`                | `box-shadow`                 |             | `string`                       | `undefined` |
| `desktop`                  | `desktop`                    |             | `boolean`                      | `undefined` |
| `dropdownBorder`           | `dropdown-border`            |             | `boolean`                      | `false`     |
| `dropdownListGroupData`    | `dropdown-list-group-data`   |             | `IListGroup[] \| string`       | `undefined` |
| `dropdownRight`            | `dropdown-right`             |             | `string`                       | `undefined` |
| `dropdownTitle`            | `dropdown-title`             |             | `string`                       | `undefined` |
| `dropdownWidth`            | `dropdown-width`             |             | `string`                       | `undefined` |
| `flexGrow`                 | `flex-grow`                  |             | `boolean`                      | `undefined` |
| `hyperlinkBackground`      | `hyperlink-background`       |             | `string`                       | `undefined` |
| `hyperlinkBackgroundImage` | `hyperlink-background-image` |             | `string`                       | `undefined` |
| `hyperlinkBorderRadius`    | `hyperlink-border-radius`    |             | `string`                       | `undefined` |
| `hyperlinkHeight`          | `hyperlink-height`           |             | `string`                       | `undefined` |
| `hyperlinkMaxWidth`        | `hyperlink-max-width`        |             | `string`                       | `undefined` |
| `hyperlinkTarget`          | `hyperlink-target`           |             | `string`                       | `undefined` |
| `hyperlinkUrl`             | `hyperlink-url`              |             | `string`                       | `undefined` |
| `hyperlinkWidth`           | `hyperlink-width`            |             | `string`                       | `undefined` |
| `justifyContent`           | `justify-content`            |             | `string`                       | `undefined` |
| `justifyContentMobile`     | `justify-content-mobile`     |             | `string`                       | `undefined` |
| `listGroupData`            | `list-group-data`            |             | `IListGroup[] \| string`       | `undefined` |
| `listSocialMediaData`      | `list-social-media-data`     |             | `IListSocialMedia[] \| string` | `undefined` |


## Dependencies

### Depends on

- [sami-hyperlink-image](../../../atoms/hyperlinks/hyperlink-image)
- [sami-list-group](../../../molecules/lists/list-group)
- [sami-list-social-media](../../../molecules/lists/list-social-media)
- [sami-dropdown](../../../molecules/dropdowns/dropdown)

### Graph
```mermaid
graph TD;
  sami-header --> sami-hyperlink-image
  sami-header --> sami-list-group
  sami-header --> sami-list-social-media
  sami-header --> sami-dropdown
  sami-list-group --> sami-hyperlink
  sami-list-social-media --> sami-hyperlink-icon
  sami-dropdown --> sami-hyperlink
  sami-dropdown --> sami-list-group
  style sami-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
