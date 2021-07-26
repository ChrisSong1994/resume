import { project } from './index';

import style from './index.less';

const Project = (props: project) => {
  const {
    start,
    end,
    name,
    description,
    technical_desc,
    content,
    difficultis,
  } = props;
  return (
    <div className={style['project-item']}>
      <div className={style['project-item-head']}>
        <span>{name} </span>
        <span>
          {start}-{end}
        </span>
      </div>
    </div>
  );
};

export default Project;
