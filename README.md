QA Automation Project - E2E + API Testing (Cypress)

--------------------------------------------
PROJECT DESCRIPTION
--------------------------------------------
This project contains automated End-to-End (E2E) and API tests using Cypress.

The main goal is to validate functional web workflows and REST API services.

--------------------------------------------
TECHNOLOGIES USED
--------------------------------------------
- Cypress
- Node.js
- JavaScript
- REST APIs
- Git / GitHub

--------------------------------------------
TEST CASES IMPLEMENTED
--------------------------------------------

✔ E2E Testing:
- Login into SauceDemo
- Add products to the cart
- View shopping cart
- Complete checkout form
- Finish purchase and validate confirmation message

✔ API Testing:
- Create user (Signup)
- Retrieve user (Login)
- Update user data
- Delete user
- HTTP response validation

--------------------------------------------
PROJECT STRUCTURE
--------------------------------------------
cypress/
 ├── e2e/
 │    ├── compra.cy.js
 │    ├── api_petstore.cy.js
 ├── fixtures/
 ├── support/

cypress.config.js
package.json

--------------------------------------------
INSTALLATION
--------------------------------------------

1. Clone the repository:
   git clone <REPOSITORY_URL>

2. Navigate to the project folder:
   cd qa-automation-e2e-api

3. Install dependencies:
   npm install

--------------------------------------------
RUN TESTS
--------------------------------------------

Open Cypress Test Runner:
   npx cypress open

Run tests in headless mode:
   npx cypress run

--------------------------------------------
AUTHOR
--------------------------------------------
Diego Arevalo.
