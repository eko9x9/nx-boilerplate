import React from 'react';
import styles from './button.module.scss';

/* eslint-disable-next-line */
export type ButtonProps = React.PropsWithChildren<{}>;

export function Button(props: ButtonProps) {
  return <button className="bg-blue-400">{props.children}</button>;
}

export default Button;
