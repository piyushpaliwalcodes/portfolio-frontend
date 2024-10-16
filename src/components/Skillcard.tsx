import { Badge, Group } from "@mantine/core";
import { Avatar } from "@mantine/core";
const Skillbadge = (props: any) => {
  return (
    <Group className="!flex flex-wrap">
      {props.skills.map((item: any) => {
        return (
          <div
            className="flex flex-wrap flex-row
           !border-[2px]
           p-1
           rounded-md
          !border-primaryColor "
          >
            <Avatar
              size={"25px"}
              className=""
              variant="transparent"
              src={`/Html.png`}
            />
            <div>{item}</div>
          </div>
        );
      })}
    </Group>
  );
};

const Skillcard = (props: any) => {
  return (
    <div
      className="w-[45%] border border-primaryColor p-2 rounded-lg shadow-md shadow-primaryColor "
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <div className="text-center font-bold text-white pb-2">{props.title}</div>
      <div className="flex flex-wrap flex-row !text-textColor ">
        <Skillbadge skills={props.skills} />
      </div>
    </div>
  );
};
export default Skillcard;
