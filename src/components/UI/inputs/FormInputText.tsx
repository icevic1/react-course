import React, {ForwardedRef, useState} from 'react';

const FormInputText = React.forwardRef( (props: any, ref?: ForwardedRef<any>) => {
  console.log("FormInputText props: ", props);

  return (
    <input ref={ref} {...props} />
  );
})

export default FormInputText;
