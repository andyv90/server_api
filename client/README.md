## Client

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It's designed to issue a GET request to an API server at the root `/` and display the response body.

If successful, the response body is displayed in a green outlined box. Otherwise, the outline is red.

### Prerequisites

This project requires Node.js and Yarn to be installed in your environment.

* https://nodejs.org/en/
* https://yarnpkg.com/lang/en/

### Installation

After checking out the code repository, run the following command to install dependencies:

`yarn install`

### Configuration

The `.env` file contains the configuration settings for the client application.

#### REACT_APP_API_URL

This is the path of the API server url. For example, `http://localhost:5000` (no trailing slash).

### Deployment

Deployment consists of the following steps:

1. Get the code.
2. Install the production dependencies.
3. Configure environment variables.
4. Build the application.
5. Deploy the static assets.

- To get the code, clone the repository.
- To install the dependencies, run the following command: `yarn install`.
- To configure the environment variables, create (or overwrite) the `.env.` file with the appropriate settings.
- To build the application, run the following command: `yarn build`.
- To deploy the static assets, FTP the contents of the `build` directory from step 4 to the appropriate destination.
