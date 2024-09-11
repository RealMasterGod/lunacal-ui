# Demo Link
https://lunacal-ui-git-main-realmastergods-projects.vercel.app/

# Instructions to run locally
1. Clone this repo.
2. Now go this local directory and open terminal. Enter the following commands
   ```bash
   npm install
   npm run dev
   ```
3. App should now be running on http://localhost:5173 or whatever url it is displaying in the console.
4. Please Make sure you have npm and node installed before running. How to install? Read this offical doc
   https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


# Technologies Used
## React + Vite
To make a vite react project simple type the commands below 
```bash
npm create vite@latest app-name -- --template react
```
To run this project, use the command
```bash
   npm install
   npm run dev
```
OR follow the official guide here https://vitejs.dev/guide/

## TailwindCSS
To set up tailwindCSS in react + vite app, run this command in working directory where you created the react vite app
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Now open the tailwind.config.js file and replace the code with the code below
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
In your project there must be an index.css or global.css. Paste these three lines of code at the top of that file
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now, just ren your react app.
Need more info? See here: https://tailwindcss.com/docs/guides/vite
