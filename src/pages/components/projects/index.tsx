import Item from './item';
import style from './index.less';

export type project_harvest = {
  num: number;
  text: string;
};

export type project = {
  start: string;
  end: string;
  name: string;
  desc: string;
  technical: string;
  effect: string;
  harvest: project_harvest[];
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
