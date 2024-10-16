import { Timeline, Text } from "@mantine/core";
import {
  IconGitPullRequest,
  IconGitCommit,
  IconGitBranch,
  IconMessageDots,
} from "@tabler/icons-react";
const Experience = () => {
  return (
    <div className="px-16 mx-20 my-5 font-mono" id="EXPERIENCE">
      <h1 className="text-4xl font-bold text-white text-center mt-8 mb-3">
        <span className="text-primaryColor ">03.&nbsp;</span>Experience
      </h1>
      <Timeline
        className="pt-5"
        active={1}
        bulletSize={24}
        lineWidth={2}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Timeline.Item
          bullet={<IconGitBranch size={12} />}
          title={
            <text className="text-textColor">FULL MERN STACK DEVELOPER </text>
          }
        >
          <Text c="dimmed" size="sm">
            FreeLancer &nbsp;
            <Text variant="link" component="span" inherit>
              2023
            </Text>{" "}
            to 2024
          </Text>
          <Text size="xs" mt={4}></Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconGitPullRequest size={12} />}
          title={
            <text className="text-textColor">
              BackEnd Technologies and Implementation{" "}
            </text>
          }
        >
          <Text c="dimmed" size="sm">
            Implementation &nbsp;
            <Text variant="link" component="span" inherit>
              2023
            </Text>{" "}
            to 2023
          </Text>
          <Text size="xs" mt={4}></Text>
        </Timeline.Item>

        <Timeline.Item
          title={<text className="text-textColor">Frontend Development</text>}
          bullet={<IconMessageDots size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            Frontend development implementaion
            <Text c="dimmed" size="sm">
              Implementation &nbsp;
              <Text variant="link" component="span" inherit>
                2023
              </Text>{" "}
              to 2023
            </Text>
          </Text>
          <Text size="xs" mt={4}></Text>
        </Timeline.Item>

        <Timeline.Item
          title="Code review"
          bullet={<IconMessageDots size={12} />}
        >
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{" "}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
