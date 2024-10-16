import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModel from "./FullProjectModel";

interface ProjectCardProps {
  image: string;
  title: string;
  live?: boolean;
  technologies: string[];
  desc: string;
}
const ProjectCard = (props: ProjectCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="400">
      <Card
        onClick={open}
        className="my-4 !bg-bgcolor !border-primaryColor mb-2 !shadow-md !shadow-primaryColor hover:scale-105 cursor-pointer transition ease-in-out"
        w="360px"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section className="bg-red">
          <div className="m-2 rounded-lg overflow-hidden">
            <Image
              className=" h-full bg-purple rounded-lg overflow-hidden !shadow-sm !shadow-primaryColor"
              src={props.image}
              height={160}
              width={70}
              alt={props.title}
            />
          </div>
        </Card.Section>

        <Group
          className="text-2xl font-bold text-white"
          justify="space-between"
          m-1
        >
          <Text className="flex items-center gap-2">
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
          </Text>
        </Group>
        <Group>
          {props.technologies.map(
            (tech: string, index: number) =>
              index < 3 && (
                <Badge
                  size="lg"
                  className="m-1"
                  variant="light"
                  color="#64FFDA"
                >
                  {tech}
                </Badge>
              )
          )}
        </Group>
        <Text className="!text-justify" size="sm" c="dimmed" lineClamp={5}>
          {props.desc}
        </Text>

        <Button onClick={open} color="blue" fullWidth mt="md" radius="md">
          View More
        </Button>
      </Card>
      <FullProjectModel
        opened={opened}
        close={close}
        image={props.image}
        title={props.title}
        desc={props.desc}
        live={props.live}
        technologies={props.technologies}
      />
    </div>
  );
};

export default ProjectCard;
