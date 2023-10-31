# GitHub User List

---

### Installation

```bash
git clone git@github.com:physicsSorcererKing/github-user-list.git
cd github-user-list
yarn # if you don't have yarn, install it with `npm i -g yarn`
```

### Usage

#### At first, you need to put your GitHub Token in the `.env` file at the root of the project:

```bash
# .env
VITE_GITHUB_API_URL=https://api.github.com/graphql
VITE_GITHUB_TOKEN=your_github_token
```

And then you can run the following commands to start the project:

- for development

```bash
yarn dev # will start a dev server and run relay watcher concurrently
```

- build production

```bash
yarn build
```

### Explanation

Following the MVVM architecture, I've refined the description you provided:

Adhering to the principles of the MVVM architecture, I've organized pure UI components within the components directory, while distinct page layouts are placed in the pages directory. For each individual page, I've predominantly delegated the business logic to the corresponding context, serving as the ViewModel (such as src/pages/Home/HomeContextProvider.tsx). Components within this context can directly access data, enabling them to focus on fulfilling their roles as views. Concurrently, I've associated Relay queries with the Model layer (via RelayEnvironmentProvider), which facilitates the retrieval of data from GitHub. This division ensures a clear separation between data management and business logic.

### Other Features

- TypeScript 5
- React 18
- React Router 6
- Relay 16
- ESLint
  - automatically remove unused imports
  - sorted imports
  - with Prettier
- tsconfig
  - strict mode
  - alias paths '@'
- Husky & Lint-staged
  - pre-commit hook to execute ESLint & Prettier
