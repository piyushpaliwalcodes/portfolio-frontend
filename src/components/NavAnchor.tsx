type NavAnchorProps = {
  item: string;
  index: number;
  flag: boolean;
};

const NavAnchor: React.FC<NavAnchorProps> = ({ item, index, flag }) => {
  return (
    <div className="flex items-center justify-center my-3">
      <a
        className={`flex ${
          flag ? "flex-col" : "flex"
        } justify-center items-center text-textColor hover:text-primaryColor`}
        href={`#${item}`}
      >
        <span className="text-primaryColor ">0{index}. </span>
        {item}
      </a>
    </div>
  );
};

export default NavAnchor;
