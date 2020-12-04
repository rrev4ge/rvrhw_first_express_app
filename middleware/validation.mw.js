const yup = require('yup');

module.exports.messageValidation = async (req, res, next) => {
  const {body} = req;
  const validationSchema = yup.object({
    email: yup.string().email(),
    message: yup.string().max(512).required(),
    // date: yup.date().max(Date()).required(),
  });
  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};
