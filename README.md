# Gains Learning Challenge Coding test

A learning page that renders one item at a time from a JSON Array, and a progress page with a tabular structure.

## Features

A clean, minimalist app with the following features:

### Learning Page

- Render one item at a time from a JSON Array
  - Data from the JSON Array contains `content_type` of `question` or `lesson`. (Done)
- Show a `time_limit` in seconds, the user is allowed to spend on each item: (Done)
  - If the `time_limit` is exceeded and the `content_type` is `lesson`, then scroll to the next item in the Array. (Done)
  - If the `time_limit` is exceeded and the `content_type` is `question`, then mark the question as failed. (Incomplete)

* Expose a next button to the user irrespective of the `content_type`: (Done)
  - Move to the next item in the Array when clicked (they cannot go back afterwards) (Done)
  * If the button is pressed before the `time_limit`, note how long the user took to go through the item (Incomplete)

### Progress Page

- Expose a tabular structure with the following columns: (Done)
  - title
  - time taken
  - pass/fail
- Render a row in the progress page with the appropriate title, time taken, and the pass/failure scenario everytime the user is done going theough an item in the JSON Array (either a question or a lesson). (Incomplete)
- The progress page is to be rendered in a tab different from the tab where the quiz is happening (Done)
- The two tabs need to talk to each other by listening for a [Storage Event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event) (Incomplete)

## Tech Stack used

- React with TypeScript

## Folder structure

📦src
┣ 📂components
┃ ┣ 📜Button.tsx
┃ ┣ 📜ProgressTable.tsx
┃ ┗ 📜YoutubeFrame.tsx
┣ 📂helpers
┃ ┣ 📂customHooks
┃ ┃ ┗ 📜useLocalStorage.tsx
┃ ┣ 📜data.tsx
┃ ┗ 📜helper.tsx
┣ 📂interfaces
┃ ┗ 📜interface.tsx
┣ 📂pages
┃ ┣ 📜LearningPage.tsx
┃ ┗ 📜ProgressPage.tsx
┣ 📂styles
┃ ┗ 📂components
┃ ┃ ┣ 📜Button.css
┃ ┃ ┣ 📜ProgressTable.css
┃ ┃ ┗ 📜Youtube.css
┣ 📂widgets
┃ ┗ 📜RenderLearning.tsx
┣ 📜App.css
┣ 📜App.test.tsx
┣ 📜App.tsx
┣ 📜index.css
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┣ 📜reportWebVitals.ts
┗ 📜setupTests.ts

- `Components` directory houses all the reusable components used in the app.
- `Helpers` directory houses all the helper functions and custom hooks used in the app.
  - `CustomeHooks` directory houses the `useLocalStorage` hook, which helps us interact with the localstorage logic outside of our components.
- `Interfaces` directory houses all the interface used as props to components in the app.
- `Pages` directory houses the two different screens (pages), required to be rendered in the app.
- `Styles` directory houses the stylesheets for the componnets/pages.
- `Widgets` directory houses little functions that returns a JSX Element that can were used in the `Pages` screen.

## Project setup

### Installation - Clone the repository

```
git clone https://github.com/Anyitechs/learning-challenge.git
```

### Install dependencies

```
yarn install
```

### Run the App locally in development mode

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Todos

- All the requirements marked in-complete are yet to be completed.
