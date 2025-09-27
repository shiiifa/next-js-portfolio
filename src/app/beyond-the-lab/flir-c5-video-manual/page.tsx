import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "A Video Manual of the Flir C5 Camera - Obed Allotey Babington",
    description: "Co-curated a comprehensive video manual demonstrating how the Flir C5 thermal imaging camera works, including theoretical background and practical features.",
    path: "/beyond-the-lab/flir-c5-video-manual",
    baseURL,
  });
}

export default function FlirC5VideoManual() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/flir-c5-video-manual"
        title="A Video Manual of the Flir C5 Camera"
        description="Co-curated a comprehensive video manual demonstrating how the Flir C5 thermal imaging camera works, including theoretical background and practical features"
        image={`/api/og/generate?title=${encodeURIComponent("A Video Manual of the Flir C5 Camera")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">A Video Manual of the Flir C5 Camera</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Videography • Mar 2024
        </Text>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          It's fun to use technology – until you have to explain how it works. I had the pleasure of working with a friend to curate a video manual of how Flir C5, a compact thermal imaging camera, works including the theoretical background of thermal imaging and the very cool features of the camera!
        </Text>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              This project involved creating comprehensive educational content about thermal imaging technology, specifically focusing on the Flir C5 camera's capabilities and applications.
            </Text>
            <Text variant="body-default-m">
              The video manual covers both theoretical concepts and practical demonstrations, making complex thermal imaging technology accessible to a broader audience.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features Covered</Heading>
            <Text variant="body-default-m">
              • Theoretical background of thermal imaging technology
            </Text>
            <Text variant="body-default-m">
              • Practical demonstration of Flir C5 camera features
            </Text>
            <Text variant="body-default-m">
              • Real-world applications and use cases
            </Text>
            <Text variant="body-default-m">
              • Step-by-step operation guide
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Skills Developed</Heading>
            <Text variant="body-default-m">
              • Technical video production and editing
            </Text>
            <Text variant="body-default-m">
              • Educational content creation and scripting
            </Text>
            <Text variant="body-default-m">
              • Technical communication and explanation
            </Text>
            <Text variant="body-default-m">
              • Collaboration in multimedia production
            </Text>
          </Column>
        </Card>
      </Column>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `
      }} />
    </Column>
  );
}
