import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Pleas provide a valid Email')
        .required('Email is Required'),
      keywords: Yup.string().required('Phrase is Required'),
      interval: Yup.number().required('Interval is Required'),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fail', messages: error.inner });
  }
};
