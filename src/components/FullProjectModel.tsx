import { Modal, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
} from "@mantine/core";
const FullProjectModel = (props: any) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      className="overflow-auto"
      size={"70%"}
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-2xl">
        <Modal.Header className="!bg-bgcolor border-2 border-primaryColor !rounded-tr-2xl !rounded-tl-2xl !border-b-0 ">
          <Modal.Title
            className="!font-bold !text-3xl !text-white"
            data-autoFocus
          >
            {props.title}
            {props.live && (
              <Badge
                variant="outline"
                color="pink"
                rightSection={
                  <Indicator
                    color="pink"
                    position="middle-end"
                    size={7}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton size={"xl"} className="!text-red-500" />
        </Modal.Header>
        <Modal.Body className="!bg-bgcolor border-2 border-primaryColor !rounded-br-2xl !rounded-bl-2xl !border-t-0">
          <Image
            className=" h-full bg-purple rounded-lg overflow-hidden !shadow-sm !shadow-primaryColor"
            src={props.image}
            height={160}
            width={70}
            alt={props.title}
          />
          <div className="text-textColor">{props.desc}</div>
          <Group className="techonologies text-textColor flex gap-2 m-1 mb-2">
            {props.technologies.map((item: any) => (
              <Badge className="!border-2 !border-primaryColor !rounded ">
                {item}
              </Badge>
            ))}
          </Group>
          <Group className="buttoncontainer flex justify-around">
            <Badge w="45%" className="hover:cursor-pointer" variant={"outline"}>
              <a target={"_blank"} href={props.sourcecode}>
                Source Code
              </a>
            </Badge>
            <Badge className="!bg-primaryColor hover:cursor-pointer" w="45%">
              <a target={"_blank"} href={props.link}>
                View Live Site
              </a>
            </Badge>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModel;
