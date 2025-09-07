import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Major Research",
    description: "Major research work - core research interests with significant faculty engagement",
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
            padding="l"
            radius="m"
            shadow="m"
            style={{ flex: "1 1 300px", minWidth: "300px" }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-m">Accelerating Embedded Neural Network Inference</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Optimizing neural network performance for resource-constrained embedded systems through hardware-software co-design and quantization techniques.
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>Technologies:</strong> TensorFlow Lite, C++, ARM Cortex-M, Quantization
              </Text>
            </Column>
          </Card>

          {/* Project 2: Computer Vision for Agricultural Monitoring */}
          <Card
            as="a"
            href="#agricultural-monitoring"
            padding="l"
            radius="m"
            shadow="m"
            style={{ flex: "1 1 300px", minWidth: "300px" }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-m">Computer Vision for Agricultural Monitoring</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Developing automated crop monitoring systems using computer vision and machine learning to improve agricultural productivity and sustainability.
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>Technologies:</strong> OpenCV, Python, YOLO, IoT Sensors
              </Text>
            </Column>
          </Card>

          {/* Project 3: Edge Computing for Real-time Data Processing */}
          <Card
            as="a"
            href="#edge-computing"
            padding="l"
            radius="m"
            shadow="m"
            style={{ flex: "1 1 300px", minWidth: "300px" }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-m">Edge Computing for Real-time Data Processing</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Researching distributed computing architectures to enable real-time data processing at the network edge for IoT applications.
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>Technologies:</strong> Docker, Kubernetes, MQTT, Raspberry Pi
              </Text>
            </Column>
          </Card>
        </Row>
      </Column>
    </Column>
  );
}
