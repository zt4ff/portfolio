import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required please"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required please"),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message should be more than 5 characters"),
});

const initialValues = {
  name: "",
  email: "",
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
            <h1 className="text-primary text-center">Send me a message 📩</h1>
            <h4>
              Got a question or proposal, or just want to say hello? Go ahead.
            </h4>
            <FormikForm>
              <div className="form-row">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="form-control form-control-lg mt-4"
                  style={{ borderRadius: "0" }}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-danger"
                />
              </div>

              <div className="form-row">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control form-control-lg mt-4"
                  style={{ borderRadius: "0" }}
                />
                <ErrorMessage
                  name="email"
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
                        className="form-control form-control-lg mt-4"
                        placeholder="Hi, I think we need a fullstack developer for our products at XYZ. How soon can you hop on to discuss this?"
                        {...field}
                        style={{
                          resize: "none",
                          borderRadius: "0",
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
                style={{ borderRadius: "0" }}
                className="btn btn-lg mt-4 btn-primary"
              >
                Send Message
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
    <div className="height-100 d-flex justify-content-center align-items-center">
      <div className="row h-100">
        <div className="col-lg-9 h-100 d-flex justify-content-center align-items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
