import { project } from './index';

import style from './index.less';

const Project = (props: project) => {
  const { start, end, name, desc, technical, effect, harvest } = props;
  return (
    <div className={style['project-item']}>
      <div className={style['project-item-head']}>
        <span>{name} </span>
        <span>
          {start}-{end}
        </span>
      </div>
      <section className={style['project-item-section']}>
        <div>
          <span>项目介绍：</span> <span>{desc}</span>
        </div>
        <div>
          <span>参与角色：</span> <span> {effect}</span>
        </div>
        <div>
          <span> 技术实现：</span>
          <span>{technical}</span>
        </div>
        <div>
          <span>项目成果：</span>
          <span>
            {harvest.map((item) => {
              return (
                <div key={item.num} className={style['technical-item']}>
                  {item.num}. {item.text}
                </div>
              );
            })}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Project;
