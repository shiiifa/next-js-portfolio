import { Column, Heading, Meta, Schema, Text, SmartLink, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, research } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: research.title,
    description: research.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(research.title)}`,
    path: research.path,
  });
}

export default function Research() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={research.path}
        title={research.title}
        description={research.description}
        image={`/api/og/generate?title=${encodeURIComponent(research.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Research Experiences Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Research Experiences
        </Heading>
        <Text variant="body-default-l" align="center">
          We voluntarily articulate our ignorance and deliberately throw it into the world, reaching for a catch. "We" are researchers and that is what we do.
        </Text>
      </Column>

      {/* Major Research Section */}
      <Column marginBottom="xl" paddingX="l">
        <Heading marginBottom="m" variant="heading-strong-l">
          My Major Research
        </Heading>
        <Text marginBottom="m" variant="body-default-l">
          Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
        </Text>
        <Text marginBottom="l" variant="body-default-m">
          <SmartLink href="#major-research">Explore my major research work HERE!</SmartLink>
        </Text>
        
        {/* Major Research Projects Grid */}
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

      {/* Non-Major Research Section */}
      <Column marginBottom="xl" paddingX="l">
        <Heading marginBottom="m" variant="heading-strong-l">
          My Non-Major Research
        </Heading>
        <Text marginBottom="m" variant="body-default-l">
          A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
        </Text>
        <Text marginBottom="l" variant="body-default-m">
          <SmartLink href="#non-major-research">Explore my non-major research work HERE!</SmartLink>
        </Text>
        
        {/* Non-Major Research Tile */}
        <Card
          as="a"
          href="#non-major-research"
          padding="0"
          radius="m"
          shadow="m"
        >
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src="/images/projects/project-01/cover-04.jpg"
              alt="Non-Major Research"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          <Column padding="l" gap="s">
            <Heading variant="heading-strong-m">Non-Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Academic coursework and extra-curricular research experiences
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
