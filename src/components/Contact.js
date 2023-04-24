import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required please"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required please"),
  subject: Yup.string().required("Subject is required please"),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message should be more than 5 characters"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { isValid, dirty } = formik;
        return (
          <div className="container">
            <h1>Send me a message</h1>
            <FormikForm>
              <div className="form-row">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="form-control mt-4"
                />
                <ErrorMessage name="name" component="span" className="text-danger" />
              </div>

              <div className="form-row">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control mt-4"
                />
                <ErrorMessage name="email" component="span" className="text-danger" />
              </div>

              <div className="form-row">
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="form-control mt-4"
                />
                <ErrorMessage
                  name="subject"
                  component="span"
                  className="text-danger"
                />
              </div>

              <div className="form-row">
                <Field name="message">
                  {({ field }) => (
                    <div>
                      <textarea
                        rows={5}
                        className="form-control mt-4"
                        placeholder="Message"
                        {...field}
                        style={{
                          resize: "none",
                        }}
                      ></textarea>
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="message"
                  component="span"
                  className="text-danger"
                />
              </div>

              <button
                type="submit"
                className={`btn mt-4 ${
                  !(dirty && isValid) ? "btn-secondary" : "btn-primary"
                }`}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </FormikForm>
          </div>
        );
      }}
    </Formik>
  );
};

const Contact = () => {
  return (
    <div
      className="height-100 d-flex justify-content-center align-items-center"
    >
      <div className="row h-100">
      <div className="col-lg-9 h-100 d-flex justify-content-center align-items-center">
        <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
