import { technical } from './index';

import style from './index.less';

const Item = (props: technical) => {
  const { text, num } = props;
  return (
    <div className={style['experience-item']}>
      {num}、 {text}
    </div>
  );
};

export default Item;
