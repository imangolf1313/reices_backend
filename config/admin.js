module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f32c64891620455abe8bd33c00dc5b3'),
  },
});
