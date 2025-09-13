import { Column, Heading, Meta, Schema, Text, Card, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Major Research",
    description: "Major research work - core research interests with significant faculty engagement",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Major Research")}`,
    path: "/research/major",
  });
}

export default function MajorResearch() {
  const projects = [
    {
      id: "fpga-neural-networks",
      title: "Accelerating Embedded Neural Network Inference on FPGA Softcore Processors",
      date: "Sep 2024 - May 2025",
      technologies: "Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, C/C++, VHDL",
      summary: "Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution, earning the Technical Excellence Award in Computer Engineering.",
    },
    {
      id: "fpga-acceleration-comparison",
      title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
      date: "Sep 2024 - May 2025",
      technologies: "STM32 (Cortex-M), Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, STM32CubeIDE, C/C++, VHDL",
      summary: "Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning. Benchmarked four distinct hardware configurations to isolate the impact of communication overhead on inference latency.",
    },
    {
      id: "agentic-ai-energy-management",
      title: "Agentic AI for Energy Management – Research Consulting with Schneider Electric",
      date: "May 2025 - Jul 2025",
      technologies: "LlamaIndex, Model Context Protocol (MCP), FastAPI, Streamlit, Python, RESTful APIs, Azure OpenAI (GPT-4.1, GPT-4o), Google Gemini, Anthropic Claude, Groq LLMs",
      summary: "Collaborated with Schneider Electric's Data Science team through AMRE program to develop and evaluate an agentic AI co-pilot for sustainable energy operations. Demonstrated that single-agent systems outperform multi-agent setups for top-tier LLMs.",
      link: {
        url: "https://inside.wooster.edu/amre/",
        text: "Learn more about the AMRE Consulting Program"
      }
    },
    {
      id: "wearable-technology-study",
      title: "Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal",
      date: "Jan 2024 - Apr 2024",
      technologies: "Research Design, Literature Review, Needs Assessment (Interviews & Thematic analysis), Wearable Technology Concept Development",
      summary: "As Research Intern at Ashesi University's CaRINE Programme, developed NOTE-IT concept for wearable voice-based journaling to address information overload and improve productivity through seamless thought capture.",
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/major"
        title={`Major Research – ${person.name}`}
        description="Major research work - core research interests with significant faculty engagement"
        image={`/api/og/generate?title=${encodeURIComponent("Major Research")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Major Research Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Major Research
        </Heading>
        <Text variant="body-default-l" align="center" marginBottom="l">
          Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
        </Text>
        <Text variant="body-default-m" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
          "For one person who is blessed with the power of invention, many will always be found who have the capacity of applying principles."
        </Text>
        <Text variant="body-default-s" align="center" onBackground="neutral-weak" marginTop="s">
          — Charles Babbage, Father of the Computer
        </Text>
      </Column>

      {/* Major Research Projects */}
      <Column paddingX="l" gap="xl">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const imagePath = `/images/research/major/${project.id}.png`;
          
          return (
            <Card
              key={index}
              as="a"
              href={`/research/major/${project.id}`}
              padding="0"
              radius="m"
              shadow="m"
              style={{ 
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
            >
              <Row gap="0" vertical="stretch" s={{ direction: "column" }}>
                {isEven && (
                  <div style={{
                    width: "200px",
                    height: "200px",
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <Image
                      src={imagePath}
                      alt={project.title}
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </div>
                )}
                <Column padding="l" gap="m" flex={1}>
                  <Heading variant="heading-strong-l">{project.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Date:</strong> {project.date}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Tools & Technologies:</strong> {project.technologies}
                  </Text>
                  {project.link && (
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      <strong>Link:</strong> <SmartLink href={project.link.url} target="_blank" rel="noopener noreferrer">{project.link.text}</SmartLink>
                    </Text>
                  )}
                  <Text variant="body-default-m" marginTop="m">
                    {project.summary}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" marginTop="m" style={{ fontStyle: "italic" }}>
                    Click to read more →
                  </Text>
                </Column>
                {!isEven && (
                  <div style={{
                    width: "200px",
                    height: "200px",
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <Image
                      src={imagePath}
                      alt={project.title}
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </div>
                )}
              </Row>
            </Card>
          );
        })}
      </Column>
    </Column>
  );
}
