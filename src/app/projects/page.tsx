import { Column, Heading, Meta, Schema, Text, Card, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    path: projects.path,
    baseURL,
  });
}

export default function Projects() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`/api/og/generate?title=${encodeURIComponent("Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Work – {person.name}
        </Heading>
      </Column>

      {/* Engineering Projects Section */}
      <Column paddingX="l" gap="xl" marginBottom="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Engineering Projects</Heading>
            <Text variant="body-default-m">
              If it's stressful, but fun; keeps you up all night, but extremely rewarding, then it's probably an engineering project. I'm excited to share projects I've worked on with practical applications in embedded systems, signals processing, and much more!
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" marginTop="m">
              <strong>Explore my engineering projects here!</strong>
            </Text>
            <SmartLink href="/projects/engineering">
              <Text variant="body-default-s" style={{ color: "var(--brand-on-background-strong)", textDecoration: "underline" }}>
                Engineering Projects
              </Text>
            </SmartLink>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Embedded systems, signals processing, and practical engineering solutions
            </Text>
          </Column>
        </Card>
      </Column>

      {/* Computer Science Projects Section */}
      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Computer Science Projects</Heading>
            <Text variant="body-default-m">
              I've always been pulled towards logical, and algorithmic type thinking. Low-level programming in C++, C, and recently, VHDL, coupled with scientific programming in Python or MATLAB, have been my avenues for exercising this interest.
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" marginTop="m">
              <strong>Explore my computer science projects here!</strong>
            </Text>
            <SmartLink href="/projects/computer-science">
              <Text variant="body-default-s" style={{ color: "var(--brand-on-background-strong)", textDecoration: "underline" }}>
                Computer Science Projects
              </Text>
            </SmartLink>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Low-level programming, algorithms, and scientific computing
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
