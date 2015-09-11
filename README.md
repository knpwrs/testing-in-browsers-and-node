# Multi-Environment Testing Example

This repository is meant to accompany the article [Testing in Browsers and
Node with Mocha, Chai, Sinon, and Testem][1].

## Setting up

Clone this repository and run `npm install` in the root directory.

## Running

Running `npm test` in the root directory will run the tests with [`testem`], get
the results, and exit. Running `npm run test:dev` will leave [`testem`] running
so you can manually connect browsers for continuous testing. Running
`npm run test:node` will run the node tests without [`testem`] and report to
`stdout` with [TAP].

[1]: http://kenpowers.net/blog/testing-in-browsers-and-node/ "Testing in Browsers and Node with Mocha, Chai, Sinon, and Testem."
[`testem`]: https://github.com/airportyh/testem "Test'em 'Scripts!"
[TAP]: https://testanything.org/ "Test Anything Protocol"
