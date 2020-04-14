# React.js with TailwindCSS Template

1. To build the project locally, run:

NPM
- npm install
- npm start

Yarn
- yarn install
- yarn start

2. Then open localhost:3000 in a browser and the application should be running.
I used the free Tailwind CSS template by https://www.tailwindtoolbox.com/templates/nordic-store

3. Project Structure:

    - components 
          a) common    : About.js, Footer.js, Hearder.js
          b) dashboard : Main.js, MainPage.js            
    - NotFound.js: renders when the path from router doesn't match anything we expect to
    - Page.js: a "higher order"/parent component for all the other components except NotFound.js Here you can declare the strucutre of any page and create functions that are needed by all. Pass them down to child components using props.
    - Router.js: declare URL paths and associated components
    - img: images used in the application
    - config: i18n.js, options.js: configuration for internationalization. Goes hand in hand with folder /locales where all the translations are described
    - locales: home for all translations. Add here more languages or delete some
    - styles: a) index.css: imported all tailwind dependencies
              b) tailwind.css: generated taiwind css  
    - index.js: entry point of the application
    - tailwind.js: here you can keep/add/delete whatever you want to customise the entire application. Read more here: https://tailwindcss.com/docs/container
    - postcss.config.js: Tailwind is added to the project as a Postcss plugin. This and autoprefixer are added to this config file

You can download or fork this project in order to save time in your development. Happy Coding.

License

This project has to be used only for ethical projects.
Copyright (c) 2020. MIT Licensed.
