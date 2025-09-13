import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Tennis Scoreboard Digital System Design",
    description: "Designed and implemented a digital lawn tennis scoreboard system using digital logic design and VHDL, with outputs mapped to 7-segment LED displays on an Artix-7 FPGA.",
    path: "/projects/tennis-scoreboard",
    baseURL,
  });
}

export default function TennisScoreboard() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/tennis-scoreboard"
        title="Tennis Scoreboard Digital System Design"
        description="Designed and implemented a digital lawn tennis scoreboard system using digital logic design and VHDL, with outputs mapped to 7-segment LED displays on an Artix-7 FPGA."
        image={`/api/og/generate?title=${encodeURIComponent("Tennis Scoreboard")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Tennis Scoreboard Digital System Design
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> July 2024
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Digital Logic Design, Logism-Evolution, VHDL
        </Text>
      </Column>

            {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Tennis Scoreboard Digital System" 
          src="/images/projects/tennis.jpeg" 
        />
      </Column>

<Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Designed and implemented a digital lawn tennis scoreboard system, progressing from logic-level design in Logisim to structural and behavioral VHDL implementations. The design incorporated score progression (Love–15–30–40), reversal via a decrement button, and a reset function, with outputs mapped to large 7-segment LED displays on an Artix-7 FPGA.
            </Text>
            <Text variant="body-default-m">
              Developed state charts, circuit diagrams, and testbenches to validate correct functionality under all scoring conditions, demonstrating comprehensive understanding of digital logic design principles and FPGA implementation.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Logic Design:</strong> Created comprehensive state charts and circuit diagrams for tennis scoring logic in Logisim-Evolution.
            </Text>
            <Text variant="body-default-m">
              <strong>VHDL Implementation:</strong> Developed both structural and behavioral VHDL descriptions of the scoreboard system.
            </Text>
            <Text variant="body-default-m">
              <strong>Score Progression:</strong> Implemented proper tennis scoring sequence (Love–15–30–40) with state machine logic.
            </Text>
            <Text variant="body-default-m">
              <strong>Control Features:</strong> Added decrement button for score reversal and reset functionality for new games.
            </Text>
            <Text variant="body-default-m">
              <strong>Display Output:</strong> Mapped system outputs to large 7-segment LED displays on Artix-7 FPGA.
            </Text>
            <Text variant="body-default-m">
              <strong>Testing & Validation:</strong> Created comprehensive testbenches to verify functionality under all scoring conditions.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Complete tennis scoring system with proper progression (Love–15–30–40)
            </Text>
            <Text variant="body-default-m">
              • Score reversal functionality via decrement button
            </Text>
            <Text variant="body-default-m">
              • Reset function for new games
            </Text>
            <Text variant="body-default-m">
              • 7-segment LED display output on Artix-7 FPGA
            </Text>
            <Text variant="body-default-m">
              • Comprehensive testing and validation framework
            </Text>
            <Text variant="body-default-m">
              • Both structural and behavioral VHDL implementations
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
