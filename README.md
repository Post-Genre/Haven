# Haven - React Site

Repository for for react build of Haven's website. Currently in another repository but the havenvenue.com domain will be transferred over to here upon completion.

## Running/Testing the build
`cd` into `Haven/src/`, then run `npm run dev`. To test on mobile, make sure your desktop and phone are on the same wifi network, then run `npm run dev -- --host` instead. Use the "Network" link to view the test build on your phone.

## Git pathways/processes 
`main` branch will remain untouched until the react build is complete - this will stay as the vanilla html version and will keep the domain name until needed. <br><br>
Our new main/master branch will be titled `react-main-branch`. For each component/set of components we do, we will create new branches off of this, and then merge back into 'react-main-branch' upon completion. Branch protection has been enabled for both `main` and `react-main-branch`. Before merging branches, we can have one or both other members review it.

## Naming conventions
Each component will be placed into its own folder inside of the components folder, titled `ComponentName`. Inside each folder will contain a `ComponentName.jsx`, and a `component-name.css` file, and any other files if necessary (js data file, library, etc.). Styling and properties for each component remain local to each individual component.

## Testing components
To view components, add a `<ComponentName />` into the App.jsx main section. Adding to the end of the section should avoid any merge conflicts. 

## Global styling (index.css) 
index.css contains general styling guidelines for the entire website. There are variables for all the colors to be used in the website, and each text type (h1 - h6, p, etc.) have pre-defined scales to use, so no need to redefine the font sizes everytime (we can move to vw if needed but right now doesn't seem completely necessary). Fonts NexaRust and Inter are included as well under `heading-text` and `body-text` respectively.

## Reusable components
There will be `Link` and `Button` components to use throughout the website, to avoid having to restyle these items for every different usage. When creating a list-type component, you can create an item component first (i.e. a `CarouselItem` or an `EventsItem`) and then a parent component that lists out several of that item component.

## Icons 
Any icons to be used will come from the Font Awesome 6 library. To import, use the conventions:

`import { 'IconName' } from "react-icons/fa6";`

Link to icon library: https://fontawesome.com/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
