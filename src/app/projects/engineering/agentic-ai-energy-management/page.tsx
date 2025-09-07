import { Column, Heading, Meta, Schema, Text, Card, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Agentic AI for Energy Management – Research Consulting with Schneider Electric",
    description: "Developed and evaluated an agentic AI co-pilot for sustainable energy operations, testing multiple agentic architectures and benchmarking their performance on complex sustainability queries.",
    path: "/projects/engineering/agentic-ai-energy-management",
    baseURL,
  });
}

export default function AgenticAIEnergyManagement() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering/agentic-ai-energy-management"
        title={`Agentic AI for Energy Management – Research Consulting with Schneider Electric – ${person.name}`}
        description="Developed and evaluated an agentic AI co-pilot for sustainable energy operations, testing multiple agentic architectures and benchmarking their performance on complex sustainability queries."
        image={`/api/og/generate?title=${encodeURIComponent("Agentic AI Energy Management")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Agentic AI for Energy Management – Research Consulting with Schneider Electric
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> May 2025 - Jul 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Tools & Technologies:</strong> LlamaIndex, Model Context Protocol (MCP), FastAPI, Streamlit, Python, RESTful APIs, Azure OpenAI (GPT-4.1, GPT-4o), Google Gemini, Anthropic Claude, Groq LLMs
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Link:</strong> <SmartLink href="https://inside.wooster.edu/amre/" target="_blank" rel="noopener noreferrer">Learn more about the AMRE Consulting Program</SmartLink>
        </Text>
        <Text variant="body-default-l" align="center">
          Developed and evaluated an agentic AI co-pilot for sustainable energy operations, testing multiple agentic architectures and benchmarking their performance on complex sustainability queries.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Through the 2025 Applied Methods & Research Experience (AMRE) program, I collaborated with Schneider Electric's Data Science team, to develop and evaluate an agentic AI co-pilot for sustainable energy operations. Advised by two faculty members, our core mission was to explore how large language model (LLM)-powered agents could serve as intelligent assistants for corporate energy management.
            </Text>
            <Text variant="body-default-m">
              We developed and tested multiple agentic architectures and benchmarked their performance on complex sustainability queries. Our experiments demonstrated that single-agent systems often outperform multi-agent setups in execution time and accuracy for top-tier LLMs, while multi-agent systems provide scalability and modularity for mid-tier models and evolving toolchains.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Approach</Heading>
            <Text variant="body-default-m">
              This project stretched me across multiple dimensions: I deepened my skills in LLM systems integration, multi-agent orchestration, and prompt engineering. I gained hands-on experience with evaluation methodologies for intelligent systems, including both deterministic and LLM-based evaluators. I learned how to balance technical experimentation with applied business needs, presenting findings directly to Schneider Electric Sustainability Business' data science team and refining solutions based on their feedback.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Findings</Heading>
            <Text variant="body-default-m">
              This nuanced finding underscored the importance of architectural choice in AI system design, a theme that resonates deeply with broader questions in agentic AI research. The project provided valuable insights into how different AI architectures perform in real-world business contexts and demonstrated the potential of agentic AI in corporate sustainability applications.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
