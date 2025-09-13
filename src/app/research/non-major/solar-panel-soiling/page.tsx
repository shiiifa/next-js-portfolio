import { Column, Heading, Meta, Schema, Text, Card, Media, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Estimating the Impact of Soiling on Solar Panels",
    description: "Collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Estimating the Impact of Soiling on Solar Panels")}`,
    path: "/research/non-major/solar-panel-soiling",
  });
}

export default function SolarPanelSoiling() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major/solar-panel-soiling"
        title={`Estimating the Impact of Soiling on Solar Panels – ${person.name}`}
        description="Collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels."
        image={`/api/og/generate?title=${encodeURIComponent("Estimating the Impact of Soiling on Solar Panels")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Estimating the Impact of Soiling on Solar Panels
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> Jan 2023 - May 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Skills:</strong> Applied IoT, System Design, Laser Cutting
        </Text>
        <Text variant="body-default-l" align="center">
          At the Ashesi Resourceful Engineering Lab (AREL), I collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="Solar Panel Soiling"
          src="/images/research/solar-panel-soiling_cover.avif"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">My Contributions</Heading>
            <Text variant="body-default-m">
              <strong>System Design:</strong> Created a high-level schematic of the solar monitoring system as a shared visual reference for the research team.
            </Text>
            <Text variant="body-default-m">
              <strong>Hardware Development:</strong> Designed a portable shielding coupon to capture dust accumulation data without interfering with solar panel performance.
            </Text>
            <Text variant="body-default-m">
              <strong>Industry Engagement:</strong> Communicated with external companies to gather product specifications and perform strategic comparisons to align with project requirements.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Approach</Heading>
            <Text variant="body-default-m">
              The project involved developing embedded systems and IoT solutions to monitor and measure the impact of soiling on solar panel performance. We used sensors and data collection systems to gather real-time information about environmental conditions and their effects on energy output.
            </Text>
            <Text variant="body-default-m">
              Through mathematical modeling, we aimed to create predictive models that could help optimize solar panel maintenance schedules and improve overall energy efficiency in solar installations.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              This experience strengthened my skills in embedded systems design, applied IoT, hardware prototyping, and research collaboration. The project provided valuable hands-on experience in developing practical solutions for renewable energy challenges while working effectively in a team environment.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
