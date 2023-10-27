import React, {FC} from 'react';
import s from './heroblock.module.scss';
import cn from "classnames";

interface TagProps {
  value: string;
  classNames?: string;
}

const Tag: FC<TagProps> = ({value, classNames}) => {
  return (
    <div className={cn(s.tag, classNames)}>
      {value}
    </div>
  );
};

export default Tag;