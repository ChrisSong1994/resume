import style from './index.less';

interface IIntriduce {
  name: string;
  age: number | string;
  phone: number | string;
  email: string;
  school: string;
  english_level: string;
  work_period: number;
  github: string;
}

const Header = (props: IIntriduce) => {
  const {
    name,
    age,
    phone,
    email,
    school,
    english_level,
    work_period,
    github,
  } = props;

  return (
    <div>
      <h2> {name} </h2>
      <div className={style['info']}>
        <div className={style['info-item']}>{age} </div>
        <div className={style['info-item']}>{school} </div>
        <div className={`${style['info-item']}`}>{english_level} </div>
        <div className={style['info-item']}>{email} </div>
        <div className={`${style['info-item']} ${style['info-border-none']}`}>
          {github}{' '}
        </div>
      </div>
    </div>
  );
};

export default Header;
