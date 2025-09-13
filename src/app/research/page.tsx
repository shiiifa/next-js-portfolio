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
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInPop {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `
      }} />
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
        <Text variant="body-default-l" align="center" style={{ fontStyle: "italic", fontSize: "1.1em", lineHeight: "1.6" }}>
          "We voluntarily articulate our ignorance and deliberately throw it into the world, reaching for a catch. 'We' are researchers and that is what we do."
        </Text>
      </Column>

      {/* Research Cards - Stacked */}
      <Column gap="l" paddingX="l" marginBottom="xl">
        {/* Major Research Card */}
        <Card
          as="a"
          href="/research/major"
          padding="0"
          radius="m"
          shadow="m"
        >
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/research/majorresearch3.png"
              alt="Major Research"
              fill
              style={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
          </div>
          <Column padding="l" gap="s">
            <Heading variant="heading-strong-m">Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="s">
              Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              Core research interests with significant faculty engagement
            </Text>
          </Column>
        </Card>

        {/* Non-Major Research Card */}
        <Card
          as="a"
          href="/research/non-major"
          padding="0"
          radius="m"
          shadow="m"
        >
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/research/nonmajor1.png"
              alt="Non-Major Research"
              fill
              style={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
          </div>
          <Column padding="l" gap="s">
            <Heading variant="heading-strong-m">Non-Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="s">
              A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              Academic coursework and extra-curricular research experiences
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
