import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types",
    description: "Investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types")}`,
    path: "/research/non-major/hydrogel-irrigation-study",
  });
}

export default function HydrogelIrrigationStudy() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major/hydrogel-irrigation-study"
        title={`A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types – ${person.name}`}
        description="Investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture."
        image={`/api/og/generate?title=${encodeURIComponent("A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Location:</strong> Statistics Final Class Project
        </Text>
        <Text variant="body-default-l" align="center">
          Investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              For my statistics final class project, I investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.
            </Text>
            <Text variant="body-default-m">
              This research focused on understanding how different hydrogel shapes affect water retention and distribution in various soil types, with the goal of optimizing irrigation systems for urban farming applications.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Methodology</Heading>
            <Text variant="body-default-m">
              The study involved testing different hydrogel shapes (spherical, cylindrical, and irregular) in various soil types to determine their effectiveness in water retention and distribution. Statistical analysis was used to evaluate the performance of each hydrogel configuration.
            </Text>
            <Text variant="body-default-m">
              The research aimed to provide data-driven insights for optimizing hydrogel-based irrigation systems, particularly for urban agriculture where water efficiency is crucial.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Sustainability Impact</Heading>
            <Text variant="body-default-m">
              This project contributed to the development of more sustainable irrigation solutions for urban agriculture. By optimizing hydrogel shapes and configurations, the research aimed to reduce water waste and improve crop yields in urban farming environments.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
