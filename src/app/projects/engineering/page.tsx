import { Column, Heading, Meta, Schema, Text, Card, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Engineering Projects",
    description: "Engineering projects showcasing hardware design, embedded systems, and practical engineering solutions.",
    path: "/projects/engineering",
    baseURL,
  });
}

export default function EngineeringProjects() {
  const projects = [
    {
      id: "fpga-neural-networks",
      title: "Accelerating Embedded Neural Network Inference on FPGA Softcore Processors",
      date: "Sep 2024 - May 2025",
      technologies: "Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, C/C++, VHDL",
      summary: "Designed a fully on-chip hardware-software co-design framework using an FPGA-based softcore processor and custom-built VHDL acceleration modules for neural network operations, achieving a 420× speedup over baseline softcore execution."
    },
    {
      id: "fpga-acceleration-comparison",
      title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
      date: "Sep 2024 - May 2025",
      technologies: "STM32 (Cortex-M), Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, STM32CubeIDE, C/C++, VHDL",
      summary: "Constructed and benchmarked four distinct hardware configurations spanning both silicon-based microcontrollers and FPGA softcore processors to provide a rigorous evaluation of on-chip vs off-chip acceleration strategies."
    },
    {
      id: "agentic-ai-energy-management",
      title: "Agentic AI for Energy Management – Research Consulting with Schneider Electric",
      date: "May 2025 - Jul 2025",
      technologies: "LlamaIndex, Model Context Protocol (MCP), FastAPI, Streamlit, Python, RESTful APIs, Azure OpenAI (GPT-4.1, GPT-4o), Google Gemini, Anthropic Claude, Groq LLMs",
      summary: "Developed and evaluated an agentic AI co-pilot for sustainable energy operations, testing multiple agentic architectures and benchmarking their performance on complex sustainability queries."
    },
    {
      id: "wearable-technology-study",
      title: "Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal",
      date: "Jan 2024 - Apr 2024",
      technologies: "Research Design, Literature Review, Needs Assessment (Interviews & Thematic analysis), Wearable Technology Concept Development",
      summary: "Explored how wearable technology can transform journaling into a seamless, productivity-enhancing experience through the NOTE-IT concept, a wearable device enabling instant, voice-based journaling."
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering"
        title={`Engineering Projects – ${person.name}`}
        description="Engineering projects showcasing hardware design, embedded systems, and practical engineering solutions."
        image={`/api/og/generate?title=${encodeURIComponent("Engineering Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Engineering Projects
        </Heading>
        <Text variant="body-default-l" align="center" style={{ fontStyle: "italic", marginBottom: "1rem" }}>
          "Civilization advances by extending the number of important operations which we can perform without thinking about them."
        </Text>
        <Text variant="body-default-s" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
          — Alfred Whitehead, Creator of Process Philosophy
        </Text>
      </Column>

      {/* Project Tiles */}
      <Column paddingX="l" gap="xl">
        {projects.map((project, index) => (
          <Card
            key={index}
            as="a"
            href={`/projects/engineering/${project.id}`}
            padding="l" 
            radius="m" 
            shadow="m"
            style={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none"
            }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-l">{project.title}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Date:</strong> {project.date}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Tools & Technologies:</strong> {project.technologies}
              </Text>
              <Text variant="body-default-m" marginTop="m">{project.summary}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" marginTop="m" style={{ fontStyle: "italic" }}>
                Click to read more →
              </Text>
            </Column>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
