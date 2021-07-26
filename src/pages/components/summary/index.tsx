import style from './index.less';

type summary = {
  text: string;
};

const Summary = (props: summary) => {
  const { text } = props;
  return <section className={style['summary']}>{text}</section>;
};

export default Summary;
