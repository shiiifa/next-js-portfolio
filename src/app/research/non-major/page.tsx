import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Non-Major Research",
    description: "Non-major research experiences - academic coursework and extra-curricular activities",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Non-Major Research")}`,
    path: "/research/non-major",
  });
}

export default function NonMajorResearch() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major"
        title={`Non-Major Research – ${person.name}`}
        description="Non-major research experiences - academic coursework and extra-curricular activities"
        image={`/api/og/generate?title=${encodeURIComponent("Non-Major Research")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Non-Major Research Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Non-Major Research
        </Heading>
        <Text variant="body-default-l" align="center">
          A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
        </Text>
      </Column>

      {/* Empty State */}
      <Column paddingX="l" align="center">
        <Text variant="body-default-m" onBackground="neutral-weak">
          Content coming soon...
        </Text>
      </Column>
    </Column>
  );
}
