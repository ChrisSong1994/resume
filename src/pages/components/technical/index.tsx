import Item from './item';
import style from './index.less';

export type technical = {
  text: string;
  num: number;
};

interface ITechnicalProps {
  data: technical[];
}

const Technical = (props: ITechnicalProps) => {
  const { data } = props;
  return (
    <div className={style['experience']}>
      {data.map((item, i) => {
        return <Item key={i} {...item} />;
      })}
    </div>
  );
};

export default Technical;
