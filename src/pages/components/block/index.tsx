import React from 'react';

import style from './index.less';

interface IBlock {
  children: React.ReactNode;
  title: string;
}

const Block = (props: IBlock) => {
  const { children, title } = props;
  return (
    <div className={style['block']}>
      <div className={style['block-title']}>{title}</div>
      {children}
    </div>
  );
};

export default Block;
