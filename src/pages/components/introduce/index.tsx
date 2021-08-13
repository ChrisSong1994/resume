interface IIntriduce {
  name: string;
  age: number | string;
  phone: number | string;
  email: string;
  school: string;
  work_period: number;
  address: string;
  status: string;
}

const Introduce = (props: IIntriduce) => {
  const { name, age, phone, email, school, work_period, address, status } =
    props;

  return (
    <div>
      <p style={{ textIndent: 20 }}>
        {`大家好！我叫 ${name}，今年 ${age} 岁，居住在${address}。
      2016 年我从 ${school} 毕业，现今在前端岗位已经工作 ${work_period} 年之久；
      目前我处于 ${status} 状态，你们可以通过（电话：${phone}、Email：${email}）联系我，
      欢迎来call 📞`}
      </p>
    </div>
  );
};

export default Introduce;
