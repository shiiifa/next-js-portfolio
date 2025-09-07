import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships",
    description: "Collaborated on a project exploring stage-structured predator–prey systems using mathematical modeling techniques.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships")}`,
    path: "/research/non-major/prey-predator-mathematical-model",
  });
}

export default function PreyPredatorMathematicalModel() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major/prey-predator-mathematical-model"
        title={`Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships – ${person.name}`}
        description="Collaborated on a project exploring stage-structured predator–prey systems using mathematical modeling techniques."
        image={`/api/og/generate?title=${encodeURIComponent("Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Location:</strong> Differential Equations and Numerical Methods Course
        </Text>
        <Text variant="body-default-l" align="center">
          Collaborated on a project exploring stage-structured predator–prey systems using mathematical modeling techniques.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              As part of my Differential Equations and Numerical Methods course, I collaborated on a project exploring stage-structured predator–prey systems.
            </Text>
            <Text variant="body-default-m">
              This project involved developing mathematical models that account for different life stages of both predator and prey species, providing a more realistic representation of ecological dynamics than traditional predator-prey models.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Mathematical Modeling</Heading>
            <Text variant="body-default-m">
              The project used differential equations to model the interactions between different life stages of predator and prey populations. This approach allowed for the analysis of how factors like maturation rates, mortality, and reproduction affect population dynamics.
            </Text>
            <Text variant="body-default-m">
              By incorporating stage structure, the model provided insights into how different life stages of organisms interact and influence overall population stability and dynamics.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Ecological Insights</Heading>
            <Text variant="body-default-m">
              This project demonstrated the importance of considering life stage structure in ecological modeling. The mathematical models provided insights into population dynamics that could inform conservation strategies and ecosystem management approaches.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
