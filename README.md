# google-shop

Monorepo architecture for storing shopping data to database and expose them to the user.

![](server/assets/dmb.gif)

### Features implemented

- Server side that provides router for serving the proper data from database.
- Paginated table of provided csv file {page size selection included} / \*\*\* due to wrong .csv file format there was a challenging implementation.

\*\* the csv file's records decreased to 3k, for performance purposes and saved for use at /server/assets

### Project architecture

- Monorepo
- ExpressJS for http requests
- MongoDB & mongoose for data storing and manipulation
- ReactJS for front end SPA
- Redux state management
- Redux thunk for async functionalities
- React router for navigation / lazy loaded(there is 1 route but is settled lazy for future purposes)

### Potential improvements

- GraphQL
- Jest unit tests
- Cypress e2e tests

### Missed features

\*\* due to the strict time schedule i had, there was a lack of time to complete all suggested(as required) features

- Filtering
- Details product page

## Instructions

### Install deps

```javascript
// from root
yarn OR sudo yarn(for macOS users)
```

### .env file values

```javascript
// client => you can see also example.env file for proper keys
REACT_APP_APP_NAME = 'Google-Shop';
REACT_APP_SERVER_DOMAIN = 'http://localhost:3000';

// server => you can see also example.env file for proper keys
PORT = 3000;
CSV_DATA = 'google-shopping-feed-5305.csv';
```

### Run the app

```javascript
// from root
yarn server-start OR sudo yarn server-start(for macOS users) // starting the server ** web dev server url: http://localhost:3000/
yarn client-start OR sudo yarn client-start(for macOS users) // starting the client ** web dev server url: http://localhost:3100/
```
