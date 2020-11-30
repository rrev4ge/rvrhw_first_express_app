const yup = require('yup');

module.exports.messageValidation = async (req, res, next) => {
  const validationSchema = yup.object({
    email: yup.string().yup.email(),
    message: yup.string(),
    date: yup.date(),
  });

  try {
    req.body = await validationSchema.validate(req.body);
  } catch (error) {
    next(error);
  }
};
