import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
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
          Projects
        </Heading>
        <Text variant="body-default-l" align="center">
          Engineering and Computer Science projects showcasing technical skills and practical applications.
        </Text>
      </Column>

      {/* Project Categories */}
      <Column paddingX="l" gap="xl">
        <Column gap="m" align="center">
          <Text variant="body-default-m" align="center">
            Select a category to explore specific project types:
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            Use the dropdown in the navigation to access Engineering Projects or Computer Science Projects
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
