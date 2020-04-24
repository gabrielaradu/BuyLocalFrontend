# BuyLocal Food web application

This project is part of #TwilioHackathon April 2020

1. Project Structure:
    - components 
          
          - common    : About.js, Footer.js, Hearder.js
          
          - dashboard : Main.js, MainPage.js
          
          - products: components related to products
          
          - vendors: components related to vendors accepting or denying the orders
          
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

2. To build the project locally, run:

NPM
- npm install

Yarn
- yarn install

3. Requirements:
 - Node.js
 - A Twilio account
 
3.1 Twilio Account Settings
 - Account Sid:	Your primary Twilio account identifier - find this in the Console.
 - Auth Token: Used to authenticate - just like the above, you'll find this here.
 - Phone number: A Twilio phone number

After the above requirements have been met:
- Open http://localhost:3000 in a browser and the application should be running.


 5. Local development
 


- Clone this repository and cd into it
git clone https://github.com/gabrielaradu/BuyLocalFrontend.git

- Open the project in your IDE of choice. I use IntelliJ

- Open terminal and run this command to install dependencies:
yarn install

- Next start the application with this command:
yarn start

- Navigate to http://localhost:3000/

That's it for the frontend side of the project.

LICENCE:
MIT

Disclaimer
No warranty expressed or implied. Software is as is.
