declare module 'app-interfaces' {
  // import * as React from 'react';
  import React, {ReactNode} from "react";

  export interface IPropsButton {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;

    // All other props
    [x: string]: any;
  }

  export interface IPostItem {
    id: number;
    title: string;
    content: any;
    [x: string]: any;
  }

  export interface IPostItemProps {
    idx: number;
    post: { id?: number, title: string, content: any };
    // [x: string]: any;
  }
}
