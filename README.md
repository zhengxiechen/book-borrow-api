# Book Borrow Api

## About

This API is to be used to assist university students with borrowing or purchasing books from one another. There is a companion app located in [book-borrow-app](https://github.com/zhengxiechen/book-borrow-app).

## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the project into the `dist` folder.

### `yarn lint`

Begins linting using [TSLint](https://palantir.github.io/tslint/). The rules being applied are the [airbnb configuration](https://github.com/progre/tslint-config-airbnb) with some slight modifications.


### `yarn dev`

Runs the api in the development mode. This uses `ts-node`.

Use [http://localhost:3000](http://localhost:3000) to test API in browser or Postman.

You will also see any lint errors in the console.

### `yarn start`

Launches the api uses `nodemon` pulling from the `dist` folder.

Use [http://localhost:3000](http://localhost:3000) to test API in browser or Postman.

### `yarn prod`

Runs `build` and `start` for a production api launch.

## Testing

### Postman
`/tests` folder includes postman test library that can be imported to test the vairous api endpoints.

See [Postman](https://www.getpostman.com/) on running tests.
