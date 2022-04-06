# sami-dropdown



<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Tag Card With Number -->
<sami-card-tag text="1"></sami-card-tag>
```



## Properties

| Property | Attribute | Description | Type                     | Default     |
| -------- | --------- | ----------- | ------------------------ | ----------- |
| `border` | `border`  |             | `boolean`                | `false`     |
| `data`   | `data`    |             | `IListGroup[] \| string` | `undefined` |
| `right`  | `right`   |             | `string`                 | `""`        |
| `text`   | `text`    |             | `string`                 | `""`        |
| `width`  | `width`   |             | `string`                 | `""`        |


## Dependencies

### Used by

 - [sami-header](../../../organims/headers/header)

### Depends on

- [sami-hyperlink](../../../atoms/hyperlinks/hyperlink)
- [sami-list-group](../../lists/list-group)

### Graph
```mermaid
graph TD;
  sami-dropdown --> sami-hyperlink
  sami-dropdown --> sami-list-group
  sami-list-group --> sami-hyperlink
  sami-header --> sami-dropdown
  style sami-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
