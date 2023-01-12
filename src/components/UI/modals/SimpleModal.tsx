import React from 'react';
import classes from './SimpleModal.module.css'

const SimpleModal = ({children, visible, toggleState, ...props}: any) => {
  console.log("SimpleModal props: ", props);
  const cssClasses = [classes.simpleModal]
  if (visible) {
    cssClasses.push(classes.active)
  }

  return (
    <div {...props} className={cssClasses.join(' ')} onClick={() => toggleState(false)}>
      <div className={classes.simpleModalContent}  onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
export default SimpleModal;