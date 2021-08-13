import { project } from './index';

import style from './index.less';

const Project = (props: project) => {
  const { name, repo, desc } = props;
  return (
    <div className={style['project-item']}>
      <span>
        <a href={repo} target="_blank">
          {name}
        </a>
      </span>
      <span>:{desc}</span>
    </div>
  );
};

export default Project;
