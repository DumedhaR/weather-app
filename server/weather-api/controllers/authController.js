const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");
/**
 * Middleware that validate Jwt access token from Auth0
 * Verify token signature, audience and, issuer as in Auth0 settings.
 * Extract payload and, attach it to request (req.auth).
 */
exports.jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

/**
 * Middleware that checks the given token includes the req permissions.
 * Permissions that are created and assigned through the Auth0 dashboard.
 */
// exports.checkUserPermissions = requiredScopes("read:weather");
