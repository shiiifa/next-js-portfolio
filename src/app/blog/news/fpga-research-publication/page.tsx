import { Column, Heading, Meta, Schema, Text, Card, Media, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "FPGA Neural Network Research Published",
    description: "Our research on FPGA-based neural network acceleration has been published in IEEE Transactions, representing a significant milestone in embedded machine learning.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("FPGA Neural Network Research Published")}`,
    path: "/blog/news/fpga-research-publication",
  });
}

export default function FPGAResearchPublication() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/blog/news" label="Back to News & Achievements" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/blog/news/fpga-research-publication"
        title={`FPGA Neural Network Research Published – ${person.name}`}
        description="Our research on FPGA-based neural network acceleration has been published in IEEE Transactions, representing a significant milestone in embedded machine learning."
        image={`/api/og/generate?title=${encodeURIComponent("FPGA Neural Network Research Published")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          FPGA Neural Network Research Published
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> March 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Category:</strong> Publication
        </Text>
        <Text variant="body-default-l" align="center">
          Our research on FPGA-based neural network acceleration has been published in IEEE Transactions, representing a significant milestone in embedded machine learning.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="FPGA Neural Network Research"
          src="/images/research/fpga-acceleration-comparison_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Publication Details</Heading>
            <Text variant="body-default-m">
              Our paper on FPGA-based neural network acceleration has been published in IEEE Transactions, representing a significant milestone in my research career and contributing to the growing body of knowledge in embedded machine learning.
            </Text>
            <Text variant="body-default-m">
              This publication validates the innovative approaches we developed for hardware-software co-design in embedded AI systems.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Impact</Heading>
            <Text variant="body-default-m">
              The research demonstrates significant improvements in neural network inference performance on FPGA platforms, achieving 420× speedup over baseline execution through our custom VHDL acceleration modules and softcore processor integration.
            </Text>
            <Text variant="body-default-m">
              This work opens new possibilities for deploying AI models on resource-constrained embedded systems, enabling more sophisticated applications in IoT, edge computing, and mobile devices.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Contributions</Heading>
            <Text variant="body-default-m">
              • Developed a fully on-chip hardware-software co-design framework using FPGA-based softcore processors
            </Text>
            <Text variant="body-default-m">
              • Created custom VHDL acceleration modules for neural network operations
            </Text>
            <Text variant="body-default-m">
              • Achieved significant performance improvements through optimized memory access patterns
            </Text>
            <Text variant="body-default-m">
              • Demonstrated scalability across different neural network architectures
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Future Directions</Heading>
            <Text variant="body-default-m">
              This publication represents just the beginning of our research journey in embedded machine learning. We are continuing to explore new architectures and optimization techniques to further improve AI deployment on edge devices.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}

