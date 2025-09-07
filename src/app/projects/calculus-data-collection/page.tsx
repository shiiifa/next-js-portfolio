import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations",
    description: "Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling.",
    path: "/projects/calculus-data-collection",
    baseURL,
  });
}

export default function CalculusDataCollection() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/calculus-data-collection"
        title={`Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations – ${person.name}`}
        description="Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling."
        image={`/api/og/generate?title=${encodeURIComponent("Calculus Data Collection")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Tools & Technologies:</strong> Arduino for Data Collection, Geogebra
        </Text>
        <Text variant="body-default-l" align="center">
          Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              This project combined hardware development with mathematical analysis to study and optimize campus locations. Using Arduino-based sensors for data collection and Geogebra for mathematical modeling, I developed a comprehensive system to analyze various factors affecting campus locations and provide data-driven recommendations.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Hardware Development:</strong> Designed and implemented Arduino-based sensors to collect data on various environmental and usage factors across different campus locations.
            </Text>
            <Text variant="body-default-m">
              <strong>Mathematical Modeling:</strong> Applied calculus principles to analyze the collected data and identify patterns, trends, and optimization opportunities.
            </Text>
            <Text variant="body-default-m">
              <strong>Data Visualization:</strong> Used Geogebra to create visual representations of the data and mathematical models, making the analysis more accessible and interpretable.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Outcomes</Heading>
            <Text variant="body-default-m">
              The project provided valuable insights into campus location optimization and demonstrated the power of combining hardware development with mathematical analysis. It showcased how calculus principles can be applied to real-world data collection and analysis problems, providing a foundation for evidence-based decision making in campus planning and management.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
