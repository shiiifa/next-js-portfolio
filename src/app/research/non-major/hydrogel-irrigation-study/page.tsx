import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

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
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/research/non-major" label="Back to Non-Major Research" />
      
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
          <strong>Date:</strong> Nov 2023 - Dec 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Skills:</strong> Statistical Analysis, Experimental Design
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Link:</strong> <SmartLink href="https://pdf.ac/N6DBfnygBi" target="_blank" rel="noopener noreferrer">Research Paper</SmartLink>
        </Text>
        <Text variant="body-default-l" align="center">
          For my statistics final class project, I investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="Hydrogel Irrigation Study"
          src="/images/research/hydrogel-irrigation-study_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Experimental Design</Heading>
            <Text variant="body-default-m">
              I conducted experiments across clayey, loamy, and sandy soils, testing how hydrogel shape and soil type affected water retention and release. Using ANOVA, correlation tests, and regression analysis, I evaluated whether different soil–shape combinations influenced irrigation efficiency.
            </Text>
            <Text variant="body-default-m">
              This comprehensive experimental approach allowed for rigorous statistical analysis of the factors affecting hydrogel performance in different agricultural contexts.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Findings</Heading>
            <Text variant="body-default-m">
              The study found statistically significant differences in water release rates across soil types, with weaker associations for hydrogel shape, suggesting more research is needed for standardization.
            </Text>
            <Text variant="body-default-m">
              These findings provide important insights for optimizing hydrogel-based irrigation systems and highlight the need for further research to develop standardized approaches for different soil conditions.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              Beyond technical results, this project deepened my skills in experimental design, statistical inference, and applied data analysis, while reinforcing my passion for applying quantitative methods to real-world sustainability challenges.
            </Text>
            <Text variant="body-default-m">
              This experience demonstrated the power of statistical analysis in addressing environmental and agricultural challenges, providing a foundation for future research in sustainable technologies.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
