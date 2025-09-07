import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: `Non-Major Research – ${person.name}`,
    description: `Non-major research experiences by ${person.name} - academic coursework and extra-curricular activities`,
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

      {/* Non-Major Research Projects Grid */}
      <Column paddingX="l">
        <Row gap="l" wrap>
          {/* Placeholder for future non-major research projects */}
          <Card
            as="a"
            href="#coming-soon"
            padding="0"
            radius="m"
            shadow="m"
            style={{ flex: "1", minWidth: "300px" }}
          >
            <div style={{ position: "relative", width: "100%", height: "150px" }}>
              <Image
                src="/images/projects/project-01/cover-01.jpg"
                alt="Coming Soon"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <Column padding="l" gap="s">
              <Heading variant="heading-strong-s">More Projects Coming Soon</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Additional non-major research projects will be added here as they are completed.
              </Text>
            </Column>
          </Card>
        </Row>
      </Column>
    </Column>
  );
}