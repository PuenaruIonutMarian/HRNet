[![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) ![React-Redux version](https://img.shields.io/badge/React--Redux-7651A1?style=for-the-badge&logo=redux&logoColor=white) ![Redux Persist](https://img.shields.io/badge/Redux--Persist-000000?style=for-the-badge&logo=redux&logoColor=white) [![Typescript version](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) ![Sass version](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) [![CSS version](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/#specs) [![Vite version](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/) ![MIT License](https://img.shields.io/badge/License-MIT-yellowgreen?style=for-the-badge) ![JSDoc](https://img.shields.io/badge/JSDoc-FFB13C?style=for-the-badge&logo=jsdoc&logoColor=000000) ![Read the Docs](https://img.shields.io/readthedocs/pip?style=for-the-badge)


# HRnet Application 

A React application for managing employee records, featuring state persistence with Redux, and routing with React Router. This project includes a custom `EmployeeTable` library for displaying employee data in a sortable, filterable, and paginated table.

# Deployment
The project is hosted at the following address: 
- https://hrnetpuenaruionut.netlify.app/

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Library Integration](#library-integration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and manage employee records.
- View employee data in a sortable and filterable table.
- Persistent state using Redux and Redux-Persist.
- Responsive design with SCSS.
- Simple routing with React Router.

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
  npm start
  ```

## Usage

### Creating Employees
* Navigate to the Create Employee page to add new employee records.

### Viewing Employees
* Go to the Current Employees page to view and manage the list of employees.

### Deleting Employees
* On the Current Employees page, you can delete the list of employees, which will be replaced with mock data.

## Library Integration
The `EmployeeTable` library is used for displaying employee data. It supports sorting, filtering, and pagination.

### Usage 

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

## API Reference

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
## `testerData`
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

## License 

This project is licensed under the MIT License - see the LICENSE file for details.

