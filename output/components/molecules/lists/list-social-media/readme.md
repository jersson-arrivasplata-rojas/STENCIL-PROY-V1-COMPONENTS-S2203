# sami-list-social-media



<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Tag Card With Number -->
<sami-card-tag text="1"></sami-card-tag>
```



## Properties

| Property        | Attribute        | Description | Type                 | Default     |
| --------------- | ---------------- | ----------- | -------------------- | ----------- |
| `classAppend`   | `class-append`   |             | `string`             | `''`        |
| `data`          | --               |             | `IListSocialMedia[]` | `[]`        |
| `filter`        | `filter`         |             | `string`             | `undefined` |
| `flexDirection` | `flex-direction` |             | `string`             | `undefined` |


## Dependencies

### Used by

 - [sami-card](../../../atoms/cards/card)
 - [sami-header](../../../organims/headers/header)

### Depends on

- [sami-hyperlink-icon](../../../atoms/hyperlinks/hyperlink-icon)

### Graph
```mermaid
graph TD;
  sami-list-social-media --> sami-hyperlink-icon
  sami-card --> sami-list-social-media
  sami-header --> sami-list-social-media
  style sami-list-social-media fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
