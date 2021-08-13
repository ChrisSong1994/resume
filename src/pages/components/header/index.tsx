interface IIntriduce {
  name: string;
  motto: string;
}

const Header = (props: IIntriduce) => {
  const { name, motto } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2
        style={{
          fontSize: 30,
        }}
      >
        {name}
      </h2>
      <p>{motto} </p>
    </div>
  );
};

export default Header;
