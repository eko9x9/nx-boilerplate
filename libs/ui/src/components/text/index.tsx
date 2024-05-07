import React from 'react';
import styles from './button.module.scss';

/* eslint-disable-next-line */
export type TextProps = React.PropsWithChildren<{}>;

export function Text(props: TextProps) {
  return (
    <p className='text-white'>{props.children}</p>
  );
}

export default Text;
