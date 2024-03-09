# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Project Structure

```
.
├── .husky                    # Configuration for Husky Git hooks
├── public                    # Public assets and HTML template
├── src                       # Source code directory
│   ├── assets                # Images, fonts, and other static assets
│   ├── components            # Reusable UI components
│   ├── hooks                 # Custom React hooks
│   ├── layouts               # Layout components for structuring pages
│   ├── pages                 # Page components corresponding to routes
│   ├── routes                # Route definitions and navigation logic
│   ├── store                 # State management setup (e.g., Redux)
│   ├── types                 # TypeScript type definitions
│   ├── utils                 # Utility functions and helper modules
│   ├── zustand               # Zustand store setup (if applicable)
│   ├── App.css               # Global CSS styles
│   ├── app.tsx               # Main application component
│   ├── env.ts                # Environment variables setup
│   ├── index.css             # Global CSS styles
│   └── main.tsx              # Entry point for rendering the React app
├── .env.example              # Example environment variables file
├── .eslintignore             # Files and directories to be ignored by ESLint
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Files and directories to be ignored by Git
├── .prettierignore           # Files and directories to be ignored by Prettier
├── .prettierrc               # Prettier configuration
├── .stylelintrc              # Stylelint configuration
├── index.html                # HTML entry point for the application
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node.js
└── vite.config.ts            # Vite configuration file
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or features you'd like to add.

#

Feel free to customize this `README.md` template according to your project's specific needs and features. Happy coding!
