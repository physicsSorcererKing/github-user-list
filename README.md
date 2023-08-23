# GitHub User List

---

### Installation

```bash
git clone git@github.com:physicsSorcererKing/github-user-list.git
cd github-user-list
yarn # if you don't have yarn, install it with `npm i -g yarn`
```

### Usage

- development

```bash
yarn dev # will start a dev server and run relay watcher concurrently
```

- production

```bash
yarn build
```

### Explanation

Following the MVVM architecture, I've refined the description you provided:

Adhering to the principles of the MVVM architecture, I've organized pure UI components within the components directory, while distinct page layouts are placed in the pages directory. For each individual page, I've predominantly delegated the business logic to the corresponding context, serving as the ViewModel (such as src/pages/Home/HomeContextProvider.tsx). Components within this context can directly access data, enabling them to focus on fulfilling their roles as views. Concurrently, I've associated Relay queries with the Model layer (via RelayEnvironmentProvider), which facilitates the retrieval of data from GitHub. This division ensures a clear separation between data management and business logic.

### Features

- TypeScript 5
- React 18
- ESLint
  - automatically remove unused imports
  - sorted imports
  - with Prettier
- tsconfig
  - strict mode
  - alias paths '@'
- Husky & Lint-staged
  - pre-commit hook to execute ESLint & Prettier

```

```
