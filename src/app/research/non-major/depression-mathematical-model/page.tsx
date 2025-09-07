import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Developing a Novel Mathematical Model for Depression",
    description: "Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Developing a Novel Mathematical Model for Depression")}`,
    path: "/research/non-major/depression-mathematical-model",
  });
}

export default function DepressionMathematicalModel() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major/depression-mathematical-model"
        title={`Developing a Novel Mathematical Model for Depression – ${person.name}`}
        description="Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery."
        image={`/api/og/generate?title=${encodeURIComponent("Developing a Novel Mathematical Model for Depression")}`}
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
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Location:</strong> Independent Research Project
        </Text>
        <Text variant="body-default-l" align="center">
          Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              As part of an independent research project, I developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery.
            </Text>
            <Text variant="body-default-m">
              This interdisciplinary project combined mathematical modeling with mental health research to better understand the dynamics of depression at a population level.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Mathematical Approach</Heading>
            <Text variant="body-default-m">
              The model used differential equations to represent the transitions between different states of mental health: depression, remission, and recovery. This approach allowed for the analysis of population-level dynamics and the identification of key factors that influence these transitions.
            </Text>
            <Text variant="body-default-m">
              By modeling these transitions mathematically, the project aimed to provide insights into the complex dynamics of mental health at a population level, potentially informing public health strategies and interventions.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Impact</Heading>
            <Text variant="body-default-m">
              This project demonstrated the power of mathematical modeling in understanding complex social and health phenomena. It provided a quantitative framework for analyzing mental health dynamics and offered potential insights for public health policy and intervention strategies.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
