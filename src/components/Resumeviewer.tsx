import { Modal, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
} from "@mantine/core";

const Resumeviewer = (props: any) => {
  const resumeUrl = new URL("/Resume.pdf", window.location.origin).href;

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      className="overflow-auto"
      size="auto"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-2xl">
        <Modal.Header className="!bg-bgcolor border-2 border-primaryColor !rounded-tr-2xl !rounded-tl-2xl !border-b-0 ">
          <Modal.Title
            className="!font-bold !text-3xl !text-white flex items-center gap-4 "
            data-autoFocus
          >
            RESUME
            <a href={resumeUrl} download={Info.name}>
              <Button size={"xs"} color="#64FFDA" variant={"outline"}>
                DOWNLOAD
              </Button>
            </a>
          </Modal.Title>
          <Modal.CloseButton size={"xl"} className="!text-red-500" />
        </Modal.Header>
        <Modal.Body className="!bg-bgcolor border-2 border-primaryColor !rounded-br-2xl !rounded-bl-2xl !border-t-0">
          <Document file={resumeUrl}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default Resumeviewer;
