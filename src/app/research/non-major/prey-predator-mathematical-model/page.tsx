import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

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
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/research/non-major" label="Back to Non-Major Research" />
      
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
          <strong>Date:</strong> Nov 2022 - Dec 2022
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Skills:</strong> Applied Mathematics, System Modeling, MATLAB
        </Text>
        <Text variant="body-default-l" align="center">
          As part of my Differential Equations and Numerical Methods course, I collaborated on a project exploring stage-structured predator–prey systems.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="Prey-Predator Mathematical Model"
          src="/images/research/prey-predator-mathematical-model_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Innovative Approach</Heading>
            <Text variant="body-default-m">
              Building on existing research, our team introduced stage structure within both predators and prey to better capture real-world ecological interactions. This approach provided a more realistic representation of ecological dynamics than traditional predator-prey models.
            </Text>
            <Text variant="body-default-m">
              By accounting for different life stages of both predator and prey species, the model offered insights into how maturation rates, mortality, and reproduction affect population dynamics in complex ecosystems.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Mathematical Analysis</Heading>
            <Text variant="body-default-m">
              We analyzed how changes in key parameters influenced system stability and population dynamics, using differential equations and numerical simulations to model growth, harvesting, and oscillatory behaviors.
            </Text>
            <Text variant="body-default-m">
              This comprehensive analysis provided insights into the complex interactions between different life stages of organisms and their influence on overall population stability and ecosystem dynamics.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              This project strengthened my skills in applied mathematics, numerical analysis, and systems modeling, while showing how mathematical frameworks can offer insights into ecological sustainability and population management.
            </Text>
            <Text variant="body-default-m">
              The experience demonstrated the power of mathematical modeling in understanding complex ecological systems and provided a foundation for applying quantitative methods to environmental and conservation challenges.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
