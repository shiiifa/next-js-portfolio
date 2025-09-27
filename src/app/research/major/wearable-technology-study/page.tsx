import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal",
    description: "As Research Intern at Ashesi University's CaRINE Programme, developed NOTE-IT concept for wearable voice-based journaling to address information overload and improve productivity.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal")}`,
    path: "/research/major/wearable-technology-study",
  });
}

export default function WearableTechnologyStudy() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/research/major" label="Back to Major Research" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/major/wearable-technology-study"
        title={`Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal – ${person.name}`}
        description="As Research Intern at Ashesi University's CaRINE Programme, developed NOTE-IT concept for wearable voice-based journaling to address information overload and improve productivity."
        image={`/api/og/generate?title=${encodeURIComponent("Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal")}`}
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
          As Research Intern at Ashesi University's CaRINE Programme, developed NOTE-IT concept for wearable voice-based journaling to address information overload and improve productivity through seamless thought capture.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="Wearable Technology Study"
          src="/images/research/wearable-technology-study_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Problem</Heading>
            <Text variant="body-default-m">
              As a Research Intern at Ashesi University's CaRINE Programme, I explored how wearable technology can transform the practice of journaling into a seamless, productivity-enhancing experience.
            </Text>
            <Text variant="body-default-m">
              The project, called NOTE-IT, stemmed from a research gap: while journaling is proven to improve critical thinking and reduce information overload, cultivating the habit is difficult, and existing knowledge management tools often fail to capture the spontaneity of thought.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Methodology</Heading>
            <Text variant="body-default-m">
              Through a literature review, I examined how information overload impairs productivity and how journaling mitigates cognitive strain. I then conducted a needs survey with faculty and students, uncovering strong interest in a wearable solution despite concerns around privacy and usability.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Solution: NOTE-IT Concept</Heading>
            <Text variant="body-default-m">
              The result was NOTE-IT, a concept for a wearable device that enables instant, voice-based journaling. Thoughts are captured verbally, stored securely, and later organized through a companion mobile app.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Future Extensions</Heading>
            <Text variant="body-default-m">
              Future extensions include:
            </Text>
            <Text variant="body-default-m" marginLeft="m">
              • GPT On-The-Go: Integrating LLMs to provide interactive, context-aware support in real time.
            </Text>
            <Text variant="body-default-m" marginLeft="m">
              • Salesforce Incarnate: Embedding CRM functionality into the wearable for on-the-go information capture and team collaboration.
            </Text>
            <Text variant="body-default-m">
              Reflecting back, this project positioned me to think critically about how emerging technologies can bridge human limitations in cognition and productivity.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
