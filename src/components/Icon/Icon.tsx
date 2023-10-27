import React, { FC } from 'react';
import s from './icon.module.scss';
import Svg from "./Svg";
import classNames from "classnames";

interface IconProps {
  name: string;
  fill?: 'white' | 'primary' | 'grey' | 'black';
  pointer?: boolean;
  className?: string;
}

export const Icon: FC<IconProps> = (
  {
    name,
    fill = 'black',
    pointer = false,
    className,
  }) => {
  return (
    <div className={classNames(s.wrapper, { [s.wrapper_pointer]: pointer }, className)}>
      <Svg name={name} fill={fill} />
    </div>
  );
};