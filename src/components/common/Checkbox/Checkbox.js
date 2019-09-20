import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

const CheckboxControl = ({ label, name, value, ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox color="primary" />}
      label={label}
      name={name}
      value={value}
      {...props}
    />
  );
};

CheckboxControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};
export default CheckboxControl;
