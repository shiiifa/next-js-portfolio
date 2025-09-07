import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal",
    description: "Explored how wearable technology can transform journaling into a seamless, productivity-enhancing experience through the NOTE-IT concept, a wearable device enabling instant, voice-based journaling.",
    path: "/projects/engineering/wearable-technology-study",
    baseURL,
  });
}

export default function WearableTechnologyStudy() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering/wearable-technology-study"
        title={`Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal – ${person.name}`}
        description="Explored how wearable technology can transform journaling into a seamless, productivity-enhancing experience through the NOTE-IT concept, a wearable device enabling instant, voice-based journaling."
        image={`/api/og/generate?title=${encodeURIComponent("Wearable Technology Study")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> Jan 2024 - Apr 2024
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Skills:</strong> Research Design, Literature Review, Needs Assessment (Interviews & Thematic analysis), Wearable Technology Concept Development
        </Text>
        <Text variant="body-default-l" align="center">
          Explored how wearable technology can transform journaling into a seamless, productivity-enhancing experience through the NOTE-IT concept, a wearable device enabling instant, voice-based journaling.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              As a Research Intern at Ashesi University's CaRINE Programme, I explored how wearable technology can transform the practice of journaling into a seamless, productivity-enhancing experience. The project, called NOTE-IT, stemmed from a research gap: while journaling is proven to improve critical thinking and reduce information overload, cultivating the habit is difficult, and existing knowledge management tools often fail to capture the spontaneity of thought.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Methodology</Heading>
            <Text variant="body-default-m">
              Through a literature review, I examined how information overload impairs productivity and how journaling mitigates cognitive strain. I then conducted a needs survey with faculty and students, uncovering strong interest in a wearable solution despite concerns around privacy and usability.
            </Text>
            <Text variant="body-default-m">
              The result was NOTE-IT, a concept for a wearable device that enables instant, voice-based journaling. Thoughts are captured verbally, stored securely, and later organized through a companion mobile app.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Future Extensions</Heading>
            <Text variant="body-default-m">
              Future extensions include: GPT On-The-Go: Integrating LLMs to provide interactive, context-aware support in real time. Salesforce Incarnate: Embedding CRM functionality into the wearable for on-the-go information capture and team collaboration.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Reflection</Heading>
            <Text variant="body-default-m">
              Reflecting back, this project positioned me to think critically about how emerging technologies can bridge human limitations in cognition and productivity. It demonstrated the importance of user-centered design in technology development and provided valuable experience in research methodology and concept development.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
