[![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) ![React-Redux version](https://img.shields.io/badge/React--Redux-7651A1?style=for-the-badge&logo=redux&logoColor=white) ![Redux Persist](https://img.shields.io/badge/Redux--Persist-000000?style=for-the-badge&logo=redux&logoColor=white) [![Typescript version](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) ![Sass version](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) [![CSS version](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/#specs) [![Vite version](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) ![Vitest Badge](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge&logo) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
 ![MIT License](https://img.shields.io/badge/License-MIT-yellowgreen?style=for-the-badge) [![TypeDoc](https://img.shields.io/badge/TypeDoc-Documentation-brightgreen?style=for-the-badge&logo=sass&logoColor=white)](https://myproject.github.io/docs/)


# HRnet Application 

A React application for managing employee records, featuring state persistence with Redux, and routing with React Router. This project includes a custom `EmployeeTable` library for displaying employee data in a sortable, filterable, and paginated table. This project uses Vitest for unitary testing, Playwright for end-to-end testing and TypeDoc for documentation.

## Deployment

You can visit the application at [https://hrnetpuenaruionut.netlify.app/](https://hrnetpuenaruionut.netlify.app/).

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Type Definitions](#type-definitions)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Features

- Create and manage employee records.
- View employee data in a sortable and filterable table.
- Persistent state using Redux and Redux-Persist.
- Responsive design with SCSS.
- Simple routing with React Router.

## Technologies
This project leverages the following technologies:
- `React`: A JavaScript library for building user interfaces.
- `React-Redux`: A predictable state container for JavaScript apps.
- `Redux Persist`: A library to persist and rehydrate a Redux store.
- `TypeScript`: A strongly typed programming language that builds on JavaScript.
- `Sass`: A preprocessor scripting language that is interpreted or compiled into CSS.
- `Vite`: A fast build tool and development server for modern web projects.
- `Vitest`: A blazing-fast unit test framework powered by Vite.
- `Playwright`: A Node.js library for browser automation that allows you to test your web applications end-to-end across different browsers.
- `Node.js`: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- `npm`: A package manager for JavaScript.
- `Visual Studio Code`: A source-code editor made by Microsoft for Windows, Linux, and macOS.
- `TypeDoc`: A documentation generator for TypeScript.

### Prerequisites
Before you begin, ensure you have the following installed:

* `Node.js`: Version v20.17.0.
* `npm`: Version 8.0.0 or higher, which comes with Node.js.
* `Visual Studio Code (recommended)`: A text editor optimized for building and debugging modern web and cloud applications.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

  ```bash
  git clone https://github.com/PuenaruIonutMarian/HRNet.git
  cd hr-application
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run dev
  ```




## Usage

Open the browser to http://localhost:3000/ 

### Creating Employees
* Navigate to the Create Employee page to add new employee records.

### Viewing Employees
* Go to the Current Employees page to view and manage the list of employees.

### Deleting Employees
* On the Current Employees page, you can delete the list of employees, which will be replaced with mock data.

### Library Integration
* The `EmployeeTable` library is used for displaying employee data. It supports sorting, filtering, and pagination.

* To use the `EmployeeTable` library, you can import it from the `@ionutpuenaru/employee_table` package after installing it:

```jsx
npm install @ionutpuenaru/employee_table
```

* You can also check the git repository for the `@ionutpuenaru/employee_table` at [https://github.com/PuenaruIonutMarian/EmployeeTable.git](https://github.com/PuenaruIonutMarian/EmployeeTable.git).

### Implementation 

```jsx
import { EmployeeTable, DataRow } from '@ionutpuenaru/employee_table';

// Example usage in a React component
<EmployeeTable
  data={employees as DataRow[]}
  tableClassName={style.tableClassName}
  headerClassName={style.headerClassName}
  rowClassName={style.rowClassName}
  cellClassName={style.cellClassName}
  tableAppClassName={style.tableAppClassName}
/>

```

### `EmployeeTable` Props:

  - `data` (`DataRow[]`): Array of data rows to be displayed in the table.
  - `tableAppClassName` (`string`): Optional class name for the outer container of the table.
  - `tableClassName` (`string`): Optional class name for the `<table>` element.
  - `headerClassName` (`string`): Optional class name for the table headers.
  - `rowClassName` (`string`): Optional class name for table rows.
  - `cellClassName` (`string`): Optional class name for table cells.


### Testing
This app is using unit Vitest for the components and Playwright for the pages.

#### Unit Tests:
To run the unit tests with Vitest:

```bash
npm run test:unit
```
#### End to End Playwright Tests:
To run Playwright end-to-end tests:

```bash
npm run test:playwright
```

If you want to run the test in a single browser you can use one the following commands:

```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
```

Test Results:
If you encounter issues with tests, ensure that:

* The components are properly rendered with the correct data-testid attributes.
* The mocks and stubs are correctly set up for the test environment.

### Documenting

To use TypeDoc to generate the documentation:
```bash
npm run docs
```


## Type Definitions

### `Employee` Interface
```typescript
export interface Employee {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}
```

### `useEmployeeValidation` Hook
Validates employee data and provides error messages.
```typescript
const { errors, validateForm } = useEmployeeValidation(employee);
```
### `testerData`
```typescript
export declare const testerData: Employee[];
```

## Contributing
Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

## Author

Puenaru Ionut Marian

## License 

This project is licensed under the MIT License.

