import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSummit }) => {
  const handleInputChange = (values, { resetForm }) => {
    onSummit(values);
    resetForm();
  };

  const initialValues = { name: '', number: '' };

  const userSchema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleInputChange}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <label>
          Name <br />
          <Field className={css.label} name="name" />
          <ErrorMessage className={css.error} component="div" name="name" />
        </label>
        <label>
          <br />
          Number <br />
          <Field className={css.label} name="number" />
          <ErrorMessage className={css.error} component="div" name="number" />
        </label>
        <br />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSummit: PropTypes.func.isRequired,
};