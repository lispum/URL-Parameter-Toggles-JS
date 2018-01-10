# URL Parameter Toggles
Simple script enabling checkboxes to become query string toggles, browser and framework agnostic.

- [ ] turned into into an interactive toggle
- [x] toggled

## Usage
Include the script in your html body (preferably at the bottom of the `<body>` tag) and use a `data-urlparam` attribute to denote the query string identifier for the toggle.

```html
<label><input type="checkbox" data-urlparam="toggleview" /> Toggle View</label>
<script src="./urlparametertoggles.js"></script>
```
