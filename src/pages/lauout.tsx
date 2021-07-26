import { memo } from 'react';
import _ from 'lodash';

import Header from './components/header';
import Block from './components/block';
import Apply from './components/apply';
import Experience from './components/experience';
import Technical from './components/technical';
import Projects from './components/projects';
import Summary from './components/summary';
import data from './data';
import style from './index.less';

const Layout = memo(() => {
  return (
    <article className={style['resume']}>
      <div className={style['top']}> </div>
      <section className={style['content']}>
        <Header {..._.get(data, 'introduce')} />
        <Block title="求职意向">
          <Apply {..._.get(data, 'apply')} />
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
        <Block title="自我总结">
          <Summary text={_.get(data, 'summary')} />
        </Block>
      </section>
    </article>
  );
});

export default Layout;
