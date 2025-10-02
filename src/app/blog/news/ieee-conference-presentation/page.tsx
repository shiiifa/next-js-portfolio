import { Column, Heading, Meta, Schema, Text, Card, Media, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "IEEE Embedded Systems Conference Presentation",
    description: "Presented research findings at the IEEE Embedded Systems Conference on hardware acceleration strategies for embedded AI systems.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("IEEE Embedded Systems Conference Presentation")}`,
    path: "/blog/news/ieee-conference-presentation",
  });
}

export default function IEEECConferencePresentation() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/blog/news" label="Back to News & Achievements" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/blog/news/ieee-conference-presentation"
        title={`IEEE Embedded Systems Conference Presentation – ${person.name}`}
        description="Presented research findings at the IEEE Embedded Systems Conference on hardware acceleration strategies for embedded AI systems."
        image={`/api/og/generate?title=${encodeURIComponent("IEEE Embedded Systems Conference Presentation")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          IEEE Embedded Systems Conference Presentation
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> June 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Category:</strong> Conference
        </Text>
        <Text variant="body-default-l" align="center">
          Presented research findings at the IEEE Embedded Systems Conference on hardware acceleration strategies for embedded AI systems.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="IEEE Embedded Systems Conference"
          src="/images/research/fpga-acceleration-comparison_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Conference Details</Heading>
            <Text variant="body-default-m">
              Presented my research findings at the IEEE Embedded Systems Conference on hardware acceleration strategies. The presentation covered my work on FPGA-based neural network inference and received positive feedback from the research community.
            </Text>
            <Text variant="body-default-m">
              This was an incredible opportunity to share my research with leading experts in embedded systems and receive valuable feedback on my work.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Presentation Highlights</Heading>
            <Text variant="body-default-m">
              • Demonstrated 420× speedup achieved through FPGA-based neural network acceleration
            </Text>
            <Text variant="body-default-m">
              • Showcased the effectiveness of hardware-software co-design approaches
            </Text>
            <Text variant="body-default-m">
              • Presented comparative analysis of on-chip vs off-chip acceleration strategies
            </Text>
            <Text variant="body-default-m">
              • Discussed practical implications for embedded AI deployment
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Impact</Heading>
            <Text variant="body-default-m">
              The presentation generated significant interest from both academic researchers and industry professionals working on embedded AI systems. Many attendees expressed interest in potential collaborations and further development of the techniques.
            </Text>
            <Text variant="body-default-m">
              The feedback received has been invaluable in shaping the direction of my ongoing research and identifying new areas for exploration.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Networking & Collaboration</Heading>
            <Text variant="body-default-m">
              The conference provided excellent networking opportunities with researchers from top universities and companies working on similar problems. I was able to establish connections that will be valuable for future research collaborations.
            </Text>
            <Text variant="body-default-m">
              These interactions have opened doors for potential research partnerships and have given me insights into industry needs and challenges in embedded AI systems.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}

