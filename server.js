const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Create a new Express app
const app = express();

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-7b8yj63c.auth0.com",
  audience: "https://dev-7b8yj63c.auth0.com/api/v2/"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-7b8yj63c.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "There are some connections!"
  });
});

// Start the app
app.listen(4201, () => console.log('API listening on 4200'));
