import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person, beyondTheLab } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: beyondTheLab.title,
    description: beyondTheLab.description,
    path: beyondTheLab.path,
    baseURL,
  });
}

export default function BeyondTheLab() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={beyondTheLab.path}
        title={beyondTheLab.title}
        description={beyondTheLab.description}
        image={`/api/og/generate?title=${encodeURIComponent("Beyond The Lab")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Beyond The Lab
        </Heading>
        <Text variant="body-default-l" align="center">
          <strong>The Extras</strong>
        </Text>
        <Text variant="body-default-l" align="center" marginTop="m">
          When I'm not tackling research or engineering projects, you will find me engaged in a plethora of other endeavors. Leadership, public speaking, community service, writing, ...you name it.
        </Text>
        <Text variant="body-default-l" align="center" marginTop="m">
          Here lies a more holistic representation of my world. Take a dive.
        </Text>
      </Column>

      {/* Content Placeholder */}
      <Column paddingX="l" gap="xl" align="center">
        <Heading variant="heading-strong-l" align="center" marginBottom="m">
          Coming Soon
        </Heading>
      </Column>
    </Column>
  );
}
