# User Component

This is a single-page react app created using [Next.js](https://nextjs.org/docs/basic-features/typescript) and [Material UI](https://mui.com/). It reads a list of users from the `users.json` file and creates appropriate user cards based on the user role.

![screenshot](./screenshot1.png)

# Installation

Please run the commands below to install and run the app on `http://localhost:3000/`:

```
npm i
npm run dev
```

You can run the command below to run the unit tests for the `formatDate` and `formatPhoneNumber` functions.

```
npm test
```

Run the command below to run [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) end-to-end testing.

```
npm run e2e
```

# Directory Structure

## components

This is the parent folder that contains all of the reusable components.

- ### Format
  - This folder contains the different formatting functions for date and phone number.

* ### Theme

  - This is the folder for the theme of the application.

* ### Users

  - This is the folder that contains the `.tsx` files for the reusable User component.

## public

This is the parent folder for all of the images and icons for the application. You need this for cypress component tests.

- ### images
  - This contains the group svg and the roles folder.
  - roles
    - This folder is for all of the user role icons.

## src

This folder contains basic tests for the `formatDate` and `formatPhoneNumber` functions. You need to put the jest tests in this folder to resolve type errors with Cypress.
