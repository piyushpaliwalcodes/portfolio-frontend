import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";
import { IconHexagonLetterP } from "@tabler/icons-react";
import { Burger } from "@mantine/core";
import NavAnchor from "./NavAnchor";

interface SidebarProps {
  arr: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ arr }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="!z-10  sm:hidden bg-red-600 "
        position={"right"}
        opened={opened}
        onClose={toggle}
        size={"50vw"}
      >
        <Drawer.Overlay
          className="!z-0 "
          style={{ backgroundOpacity: 0.7, blur: 4 }}
        />
        <Drawer.Content bg="#0a192f" className="!z-10 h-100vh   ">
          <Drawer.Header className="" bg="#0a192f"></Drawer.Header>
          <Drawer.Body className="h-full  !z-10 mt-6 " bg="#0a192f">
            <div
              className="text-textColor
            "
            >
              {arr.map((item, index) => (
                <NavAnchor item={item} index={index} flag={true} />
              ))}
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className="!z-50 sm:hidden"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        color="#64FFDA"
      />
    </>
  );
};

export default Sidebar;
