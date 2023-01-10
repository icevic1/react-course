import React, {ReactNode, useState} from 'react';
import classes from './SaveButon.module.css'
import {IPropsButton} from "app-interfaces";

export default ({children, ...props}: IPropsButton): any => (
  <button {...props} className={classes.saveButton}>
    {children}
  </button>
)

/*type TPropsButton = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  // All other props
  [x:string]: any;
}*/

// const SaveButton = ({children, ...props}: { children: string; onClick: (e: any) => void;}) => {
// const SaveButton = (props: LinkType) => {
/*const SaveButton = ({children, ...props}: IPropsButton) => {
  console.log("SaveButton props: ", props);
  return (
    <button {...props} className={classes.saveButton}>
      {/!*{props.children}*!/}
      {children}
    </button>
  );
}
export default SaveButton;*/