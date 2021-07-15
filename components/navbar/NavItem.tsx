type Props = {
  Icon?: Object;
  name: string;
};

export const NavItem: React.FC<Props> = ({ Icon, name }) => {
  return (
    <div>
      <p>{name ? name : null}</p>
      <div>{Icon}</div>
    </div>
  );
};
