import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Engineering Projects",
    description: "Engineering projects showcasing hardware design, embedded systems, and practical engineering solutions.",
    path: "/projects/engineering",
    baseURL,
  });
}

export default function EngineeringProjects() {
  const projects = [
    {
      title: "FPGA Neural Network Acceleration",
      type: "Hardware Design",
      status: "Completed",
      skills: "VHDL, Verilog, FPGA, Neural Networks"
    },
    {
      title: "IoT Solar Panel Monitoring System",
      type: "Embedded Systems",
      status: "Completed", 
      skills: "Arduino, Sensors, Data Collection, IoT"
    },
    {
      title: "Traffic Flow Analysis System",
      type: "Mathematical Modeling",
      status: "Completed",
      skills: "MATLAB, Linear Algebra, Data Analysis"
    },
    {
      title: "Wearable Technology Prototype",
      type: "Product Design",
      status: "Completed",
      skills: "Prototyping, User Research, Concept Development"
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering"
        title={`Engineering Projects – ${person.name}`}
        description="Engineering projects showcasing hardware design, embedded systems, and practical engineering solutions."
        image={`/api/og/generate?title=${encodeURIComponent("Engineering Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Engineering Projects
        </Heading>
        <Text variant="body-default-l" align="center">
          Hardware design, embedded systems, and practical engineering solutions that demonstrate technical expertise and problem-solving skills.
        </Text>
      </Column>

      {/* Project Tiles */}
      <Column paddingX="l" gap="xl">
        {projects.map((project, index) => (
          <Card
            key={index}
            padding="l" 
            radius="m" 
            shadow="m"
            style={{ 
              cursor: "default",
              transition: "all 0.3s ease"
            }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-l">{project.title}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Type:</strong> {project.type}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Status:</strong> {project.status}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Skills:</strong> {project.skills}
              </Text>
            </Column>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
