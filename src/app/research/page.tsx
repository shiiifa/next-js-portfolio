import { Column, Heading, Meta, Schema, Text, SmartLink, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, research } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: research.title,
    description: research.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(research.title)}`,
    path: research.path,
  });
}

export default function Research() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={research.path}
        title={research.title}
        description={research.description}
        image={`/api/og/generate?title=${encodeURIComponent(research.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Research Experiences Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Research Experiences
        </Heading>
        <Text variant="body-default-l" align="center">
          We voluntarily articulate our ignorance and deliberately throw it into the world, reaching for a catch. "We" are researchers and that is what we do.
        </Text>
      </Column>

      {/* Major Research Section */}
      <Column marginBottom="xl" paddingX="l">
        <Heading marginBottom="m" variant="heading-strong-l">
          Major Research
        </Heading>
        <Text marginBottom="m" variant="body-default-l">
          Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
        </Text>
        <Text marginBottom="l" variant="body-default-m">
          <SmartLink href="/research/major">Explore my major research work HERE!</SmartLink>
        </Text>
        
        {/* Major Research Tile */}
        <Card
          as="a"
          href="/research/major"
          padding="0"
          radius="m"
          shadow="m"
        >
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src="/images/projects/project-01/cover-01.jpg"
              alt="Major Research"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          <Column padding="l" gap="s">
            <Heading variant="heading-strong-m">Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Core research interests with significant faculty engagement
            </Text>
          </Column>
        </Card>
      </Column>

      {/* Non-Major Research Section */}
      <Column marginBottom="xl" paddingX="l">
        <Heading marginBottom="m" variant="heading-strong-l">
          Non-Major Research
        </Heading>
        <Text marginBottom="m" variant="body-default-l">
          A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
        </Text>
        <Text marginBottom="l" variant="body-default-m">
          <SmartLink href="/research/non-major">Explore my non-major research work HERE!</SmartLink>
        </Text>
        
        {/* Non-Major Research Tile */}
        <Card
          as="a"
          href="/research/non-major"
          padding="0"
          radius="m"
          shadow="m"
        >
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src="/images/projects/project-01/cover-02.jpg"
              alt="Non-Major Research"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          <Column padding="l" gap="s">
            <Heading variant="heading-strong-m">Non-Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Academic coursework and extra-curricular research experiences
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
