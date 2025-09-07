import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

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
    <Column maxWidth="m" paddingTop="24">
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
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Location:</strong> Ashesi Resourceful Engineering Lab (AREL)
        </Text>
        <Text variant="body-default-l" align="center">
          Collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              At the Ashesi Resourceful Engineering Lab (AREL), I collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.
            </Text>
            <Text variant="body-default-m">
              This project focused on understanding how environmental factors like dust, dirt, and other contaminants affect solar panel efficiency, which is crucial for optimizing renewable energy systems in various climates and environments.
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
              This project provided valuable experience in embedded systems development, IoT integration, and mathematical modeling for renewable energy applications. It also offered insights into collaborative research and the practical challenges of implementing sustainable energy solutions.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
