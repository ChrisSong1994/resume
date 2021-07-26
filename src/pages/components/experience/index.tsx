import Item from './item';
import style from './index.less';

export type experience = {
  start: string;
  end: string;
  company: string;
  post: string;
};

interface IExperienceProps {
  data: experience[];
}

const Experience = (props: IExperienceProps) => {
  const { data } = props;
  return (
    <div className={style['experience']}>
      {data.map((item, i) => {
        return <Item key={i} {...item} />;
      })}
    </div>
  );
};

export default Experience;
