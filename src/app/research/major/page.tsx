import { Column, Heading, Meta, Schema, Text, SmartLink, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, research } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: `Major Research – ${person.name}`,
    description: `Major research work by ${person.name} - core research interests with significant faculty engagement`,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Major Research")}`,
    path: "/research/major",
  });
}

export default function MajorResearch() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/major"
        title={`Major Research – ${person.name}`}
        description="Major research work - core research interests with significant faculty engagement"
        image={`/api/og/generate?title=${encodeURIComponent("Major Research")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Major Research Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Major Research
        </Heading>
        <Text variant="body-default-l" align="center">
          Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
        </Text>
      </Column>

      {/* Major Research Projects Grid */}
      <Column paddingX="l">
        <Row gap="l" wrap>
          {/* Project 1: Accelerating Embedded Neural Network Inference */}
          <Card
            as="a"
            href="#embedded-neural-networks"
            padding="0"
            radius="m"
            shadow="m"
            style={{ flex: "1", minWidth: "300px" }}
          >
            <div style={{ position: "relative", width: "100%", height: "150px" }}>
              <Image
                src="/images/projects/project-01/cover-01.jpg"
                alt="Accelerating Embedded Neural Network Inference"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <Column padding="l" gap="s">
              <Heading variant="heading-strong-s">Accelerating Embedded Neural Network Inference on FPGA Softcore Processors</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Tackling core challenges of embedded machine learning: achieving real-time performance without communication bottlenecks.
              </Text>
            </Column>
          </Card>

          {/* Project 2: On-Chip vs. Off-Chip FPGA Acceleration */}
          <Card
            as="a"
            href="#fpga-acceleration"
            padding="0"
            radius="m"
            shadow="m"
            style={{ flex: "1", minWidth: "300px" }}
          >
            <div style={{ position: "relative", width: "100%", height: "150px" }}>
              <Image
                src="/images/projects/project-01/cover-02.jpg"
                alt="On-Chip vs. Off-Chip FPGA Acceleration"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <Column padding="l" gap="s">
              <Heading variant="heading-strong-s">On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                A broader systems-level question exploring acceleration strategies for embedded neural networks.
              </Text>
            </Column>
          </Card>

          {/* Project 3: Agentic AI for Energy Management */}
          <Card
            as="a"
            href="#agentic-ai-energy"
            padding="0"
            radius="m"
            shadow="m"
            style={{ flex: "1", minWidth: "300px" }}
          >
            <div style={{ position: "relative", width: "100%", height: "150px" }}>
              <Image
                src="/images/projects/project-01/cover-03.jpg"
                alt="Agentic AI for Energy Management"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <Column padding="l" gap="s">
              <Heading variant="heading-strong-s">Agentic AI for Energy Management – Research Consulting with Schneider Electric</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                AMRE 2025 collaboration developing an agentic AI co-pilot for sustainable energy operations.
              </Text>
            </Column>
          </Card>

          {/* Project 4: Wearable Technology and Productivity */}
          <Card
            as="a"
            href="#wearable-technology"
            padding="0"
            radius="m"
            shadow="m"
            style={{ flex: "1", minWidth: "300px" }}
          >
            <div style={{ position: "relative", width: "100%", height: "150px" }}>
              <Image
                src="/images/projects/project-01/cover-04.jpg"
                alt="Wearable Technology and Productivity"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <Column padding="l" gap="s">
              <Heading variant="heading-strong-s">Wearable Technology, Productivity and Information Overload</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                CaRINE Programme research exploring how wearable technology can enhance journaling and productivity.
              </Text>
            </Column>
          </Card>
        </Row>
      </Column>
    </Column>
  );
}
