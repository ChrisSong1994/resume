import React, { memo } from 'react';

import { IResumeData } from './type';
import style from './index.less';

const Layout = memo((porps: IResumeData) => {
  return (
    <article className={style['resume']}>
      <div className={style['top']}> </div>
      <section className={style['content']}>我的简历</section>
    </article>
  );
});

export default Layout;
