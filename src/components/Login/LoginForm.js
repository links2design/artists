import React from "react";
import { Formik, Form } from "formik";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";

import Button from "../common/Button";
import TextInput from "../common/TextInput";
import CheckboxControl from "../common/Checkbox/Checkbox";
import useStyles from "./styles";

const LoginForm = () => {
  const handleReset = () => {
    console.log("Resetting");
  };

  const handleSubmit = (values, actions) => {
    console.log("submitting", values, actions);
  };

  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        remember_in: "",
        radioGroup: "",
        checkboxGroup: [],
        singleCheckbox: false
      }}
      validationSchema={LoginFormSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      onReset={() => handleReset()}
      render={({
        values,
        errors,
        touched,
        isSubmitting,
        isValidating,
        submitCount,
        dirty,
        isValid,
        initialValues,
        validateOnChange,
        validateOnBlur
      }) => (
        <Form className={classes.formContainer}>
          <Grid container>
            <Grid item xs={12}>
              <Box className={classes.formGroup}>
                <TextInput
                  field
                  fullWidth
                  label="Email"
                  onChange={() => {}}
                  short
                  name="email"
                  autoComplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.formGroup}>
                <TextInput
                  type="password"
                  field
                  fullWidth
                  label="Password"
                  onChange={() => {}}
                  short
                  name="password"
                  autoComplete="off"
                />
              </Box>
            </Grid>

            <Grid item xs={12} className={classes.leftAlign}>
              <Box className={classes.formGroup}>
                <CheckboxControl
                  label="Keep me login checkbox"
                  name="remember_in"
                  value="remember"
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                size="large"
                color="primary"
                onClick={() => {}}
                children="Login"
              />
            </Grid>
          </Grid>
        </Form>
      )}
    />
  );
};
const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  password: Yup.string()
    .min(8)
    .required(),
  remember_in: Yup.string().required("Required")
});

export default LoginForm;
