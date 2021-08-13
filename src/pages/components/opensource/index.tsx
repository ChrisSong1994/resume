import Item from './item';
import style from './index.less';

export type project = {
  name: string;
  desc: string;
  repo: string;
};

interface IProjectsProps {
  data: project[];
}

const Projects = (props: IProjectsProps) => {
  const { data } = props;
  return (
    <div className={style['projects']}>
      {data.map((item, i) => {
        return <Item key={i} {...item} />;
      })}
    </div>
  );
};

export default Projects;
