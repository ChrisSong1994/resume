import { memo } from 'react';
import _ from 'lodash';

import Header from './components/header';
import Block from './components/block';
import Experience from './components/experience';
import Technical from './components/technical';
import Projects from './components/projects';
import Summary from './components/summary';
import Introduce from './components/introduce';
import Opensource from './components/opensource';
import data from './data';
import style from './index.less';

const Layout = memo(() => {
  return (
    <article className={style['resume']}>
      <div className={style['top']}> </div>
      <section className={style['content']}>
        <Header name={_.get(data, 'name')} motto={_.get(data, 'motto')} />
        <Block title="个人简介">
          <Introduce {..._.get(data, 'introduce')} />
        </Block>
        <Block title="工作经历">
          <Experience data={_.get(data, 'experiences')} />
        </Block>
        <Block title="技术特长">
          <Technical data={_.get(data, 'technical')} />
        </Block>
        <Block title="项目经验">
          <Projects data={_.get(data, 'projects')} />
        </Block>
        <Block title="开源项目">
          <Opensource data={_.get(data, 'opensource')} />
        </Block>
        <Block title="自我总结">
          <Summary text={_.get(data, 'summary')} />
        </Block>
      </section>
      <div className={style['bottom']}> </div>
    </article>
  );
});

export default Layout;
