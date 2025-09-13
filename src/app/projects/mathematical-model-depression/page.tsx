import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Developing a Novel Mathematical Model for Depression",
    description: "Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery, considering social and community factors.",
    path: "/projects/mathematical-model-depression",
    baseURL,
  });
}

export default function MathematicalModelDepression() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/mathematical-model-depression"
        title={`Developing a Novel Mathematical Model for Depression – ${person.name}`}
        description="Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery, considering social and community factors."
        image={`/api/og/generate?title=${encodeURIComponent("Mathematical Model for Depression")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Developing a Novel Mathematical Model for Depression
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> Nov 2023 - Dec 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Tools & Technologies:</strong> Mathematical Modelling (MATLAB)
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Link:</strong> <SmartLink href="https://pdf.ac/ZhuvNk6m" target="_blank" rel="noopener noreferrer">Slides from Presentation of Work</SmartLink>
        </Text>
        <Text variant="body-default-l" align="center">
          Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery, considering social and community factors.
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Mathematical Model for Depression" 
          src="/images/projects/predatorprey.png" 
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Novel Approach</Heading>
            <Text variant="body-default-m">
              Unlike many existing models focused on biological markers, my approach considered depression at the population and experiential level, factoring in remission, relapse, treatment effects, and even the influence of individuals in remission on the wider community.
            </Text>
            <Text variant="body-default-m">
              This comprehensive approach provided a more holistic understanding of depression dynamics by incorporating social and community factors alongside individual experiences.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Personal and Academic Motivation</Heading>
            <Text variant="body-default-m">
              This work was both personal and academic: rooted in my interest in mental health and my conviction that mathematical models can illuminate human experiences often left to qualitative study. The model not only produced meaningful insights but also gave me the opportunity to merge applied mathematics with human-centered research, a theme I hope will shape my broader research journey.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              The model used differential equations to represent the transitions between different states of mental health: depression, remission, and recovery. This approach allowed for the analysis of population-level dynamics and the identification of key factors that influence these transitions.
            </Text>
            <Text variant="body-default-m">
              By modeling these transitions mathematically, the project aimed to provide insights into the complex dynamics of mental health at a population level, potentially informing public health strategies and interventions.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
