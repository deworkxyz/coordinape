import React, { useState } from 'react';

import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';

import {
  InputBase,
  TextFieldProps,
  makeStyles,
  InputBaseProps,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    lineHeight: 1.3,
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    color: theme.colors.text,
  },
  inputRootError: {
    backgroundColor: theme.colors.third,
    borderRadius: 8,
    border: `1px solid ${theme.colors.red}`,
    color: theme.colors.red,
  },
  input: {
    backgroundColor: theme.colors.third,
    borderRadius: 8,
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 1.33,
    fontWeight: 300,
    textAlign: 'center',
    padding: theme.spacing(1.75, 1, 1.75),
    border: `1px solid ${theme.colors.third}`,
    '&:focus': {
      border: `1px solid ${theme.colors.lightBlue}`,
    },
  },
  helper: {
    fontSize: 13,
    lineHeight: 1.2,
    marginTop: theme.spacing(1.5),
    color: theme.colors.text + '80',
  },
  error: {
    fontSize: 13,
    lineHeight: 1.2,
    fontWeight: 600,
    marginTop: theme.spacing(1.5),
    color: theme.colors.red,
  },
  multiLineInput: {
    textAlign: 'left',
  },
}));

// ApeTextField
//
// Using the same interface as MaterialUI's TextField to make it compatible
// with the the calendar.
export const ApeTextField = (props: TextFieldProps) => {
  const classes = useStyles();
  const [fallbackId] = useState(uniqueId('text-field-'));

  // Using:
  // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/InputBase/InputBase.js
  const {
    // For InputProps:
    'aria-describedby': ariaDescribedby,
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    error,
    fullWidth,
    id,
    inputProps,
    inputRef,
    margin,
    multiline,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    rows,
    rowsMax,
    type,
    value,
    // TextField props we want:
    // error,
    helperText,
    label,
    className,
    InputProps,
    // TODO: think about implementing:
    // color,
    // classes: textFieldClasses,
    // ...nonInputProps
  } = props;

  const inputClasses = {
    ...InputProps?.classes,
    root: clsx(
      {
        [classes.inputRootError]: !!error,
      },
      InputProps?.classes?.root
    ),
    input: clsx(
      classes.input,
      { [classes.multiLineInput]: multiline },
      InputProps?.classes?.input
    ),
  };

  const mergedInputProps = {
    ...InputProps,
    ['aria-describedby']: ariaDescribedby,
    classes: inputClasses,
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    error,
    fullWidth,
    id: id ?? fallbackId,
    inputProps,
    inputRef,
    margin:
      margin === 'dense' ? 'dense' : ('none' as 'dense' | 'none' | undefined),
    multiline,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    rows,
    rowsMax,
    type,
    value,
  } as InputBaseProps;

  return (
    <div className={clsx(className, classes.root)}>
      {label ? (
        <label htmlFor={id ?? fallbackId} className={classes.label}>
          {label}
        </label>
      ) : undefined}
      <InputBase {...mergedInputProps} />
      <span
        className={clsx({
          [classes.helper]: !error,
          [classes.error]: !!error,
        })}
      >
        {helperText}
      </span>
    </div>
  );
};