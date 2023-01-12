import React, {ForwardedRef, useState} from 'react';
import {IPropsSelect} from "app-interfaces";

// const SelectCustom = React.forwardRef( (props?: any, ref?: ForwardedRef<any>) => {
const SelectCustom = ({defaultValue, options, value, onChange, ...props}: IPropsSelect) => {

  return (
    <select {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      { !!defaultValue &&
        <option disabled value="">{defaultValue}</option> }
      { !!options?.length &&
        options.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      }
    </select>
  );
}

export default SelectCustom;
