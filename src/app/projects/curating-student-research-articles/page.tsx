import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)",
    description: "Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills while supporting academic research dissemination.",
    path: "/projects/curating-student-research-articles",
    baseURL,
  });
}

export default function CuratingStudentResearchArticles() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/curating-student-research-articles"
        title={`Curating a Network of Student-Developed Research Articles (ARM-y Students' Club) – ${person.name}`}
        description="Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills while supporting academic research dissemination."
        image={`/api/og/generate?title=${encodeURIComponent("Curating Student Research Articles")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Tools & Technologies:</strong> Creative Management, Article Editing
        </Text>
        <Text variant="body-default-l" align="center">
          Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills while supporting academic research dissemination.
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="ARM-y Students Club Research Articles" 
          src="/images/projects/arm-y.jpg" 
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              As part of the ARM-y Students' Club, I took on the role of curating and managing a network of student-developed research articles. This project involved developing editorial skills, content management strategies, and supporting the academic research community within the university.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Responsibilities</Heading>
            <Text variant="body-default-m">
              • <strong>Content Curation:</strong> Reviewed and selected high-quality student research articles for publication
            </Text>
            <Text variant="body-default-m">
              • <strong>Editorial Management:</strong> Edited and refined articles to meet publication standards
            </Text>
            <Text variant="body-default-m">
              • <strong>Creative Direction:</strong> Developed content strategies and presentation approaches
            </Text>
            <Text variant="body-default-m">
              • <strong>Community Building:</strong> Fostered collaboration among student researchers
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              This experience strengthened my skills in creative management and article editing while contributing to the academic community. It provided valuable experience in content curation, editorial processes, and supporting research dissemination within the university environment.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
