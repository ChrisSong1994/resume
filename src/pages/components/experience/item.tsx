import { experience } from './index';

import style from './index.less';

const Item = (props: experience) => {
  const { start, end, company, post } = props;
  return (
    <div className={style['experience-item']}>
      <div className={style['experience-item-priod']}>
        {start} - {end}
      </div>
      <div className={style['experience-item-company']}> {company}</div>
      <div className={style['experience-item-post']}>{post}</div>
    </div>
  );
};

export default Item;
