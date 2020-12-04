const yup = require('yup');

module.exports.messageValidation = async (req, res, next) => {
  const { body, path } = req;
  const validationSchema = yup.object({
    email:
      path === '/new_post'
        ? yup.string().email().required()
        : yup.string().email(),
    message: yup.string().max(512).required(),
    date: 
      body.date 
        ? yup.date().max(new Date()).required() 
        : yup.date(),
  });
  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};
