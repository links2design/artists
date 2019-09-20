import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { TextField as FormikMuiTextField } from 'formik-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import MuiTextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	shortInput: {
		padding: '0 34px 0 16px',
		height: '46px',
		borderColor: '#DFE2EB',
		fontSize: '14px',
		'&:hover': {
			borderColor: '#04a1dc',
		}
	},
	shortInputLabel: {
		transform: 'translate(14px, 17px) scale(1)',
		fontSize: '14px',
		fontWeight: '500'
	},
}))

const TextInput = ({
	field,
	inputProps,
	label,
	name,
	onChange,
	placeholder = '',
	short,
	type = 'text',
	variant = 'outlined',
	...props
}) => {
	const classes = useStyles()

	return field
		? <Field
				component={ FormikMuiTextField }
				name={ name }
				label={ label }
				type={ type }
				placeholder={ placeholder }
				onChange={ onChange }
				variant={ variant }
				InputProps={{
					...inputProps,
					classes: {
						input: short && !props.multiline ? classes.shortInput : null,
						multiline: short && props.multiline ? classes.shortInput : null,
					}
				}}
				InputLabelProps={{
					classes: {
						root: short ? classes.shortInputLabel : null,
					}
				}}
				{ ...props }
			/>
		: <MuiTextField
				{ ...props }
				name={ name }
				label={ label }
				type={ type }
				placeholder={ placeholder }
				onChange={ onChange }
				variant={ variant }
				InputProps={{
					...inputProps,
					classes: {
						input: short && !props.multiline ? classes.shortInput : null,
						multiline: short && props.multiline ? classes.shortInput : null,
					}
				}}
				InputLabelProps={{
					classes: {
						root: short ? classes.shortInputLabel : null,
					}
				}}
			/>
}

TextInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	short: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
}

export default TextInput