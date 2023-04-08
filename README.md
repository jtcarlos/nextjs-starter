# NextJS Starter

NextJS Starter is a boilerplate project that serves as a starting point for all future NextJS projects. Built using NextJS v13.3.0, this starter project includes everything you need to get up and running quickly with a fully functional NextJS application.

NextJS Stater comes with Tailwind CSS and React Context/Reducers to help you quickly get started with your NextJS project and start building amazing applications in no time. You'll also benefit from a well-organized file structure and modular codebase that makes it easy to add new features and scale your application as your needs evolve.

## File and Folder Structure

The main objective of the file and folder structure is to create a scalable and modular codebase. The `core`, `components`, and `context` folders are designed to be edited less frequently allowing the developer to focus more on the `modules` folder

📁 root

- 📁 public
  - 📁 Images
  - 📄 favicon.ico
- 📁 pages
  - 📄 index.js
  - 📄 about.js
- 📁 src
  - 📁 core
    - 📁 services
    - 📄 settings.json
  - 📁 components
    - 📁 elements
    - 📁 layouts
  - 📁 context
    - 📄 AppContext.js
  - 📁 modules
    - 📁 Auth
      - 📁 components
      - 📁 services
      - 📁 utils
      - 📄 index.js
  - 📁 styles
    - 📄 auth.module.scss
    - 📄 main.scss
