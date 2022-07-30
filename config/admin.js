module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '03c1f4b8f053622b4b9c467a6acf4dcc'),
  },
});
