import style from './index.less';

interface IApplyProps {
  city: string;
  salary: string;
  level: string;
  status: string;
}

const Apply = (props: IApplyProps) => {
  const { city, salary, level, status } = props;
  return (
    <div className={style['apply']}>
      <div className={style['apply-item']}>
        <i className="iconfont icon-zhaopingangwei" />
        {level}
      </div>
      <div className={style['apply-item']}>
        <i className="iconfont icon-didian" />
        {city}
      </div>
      <div className={style['apply-item']}>
        <i className="iconfont icon-xinzifanwei" />
        {salary}
      </div>
      <div className={style['apply-item']}>
        <i className="iconfont icon-zhuangtai" />
        {status}
      </div>
    </div>
  );
};

export default Apply;
