import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

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
  return (
    <Column maxWidth="m" paddingTop="24">
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
        {/* Project 1: Accelerating Embedded Neural Network Inference on FPGA Softcore Processors */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Accelerating Embedded Neural Network Inference on FPGA Softcore Processors</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Date:</strong> Sep 2024 - May 2025
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Tools & Technologies:</strong> Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, C/C++, VHDL
            </Text>
            <Text variant="body-default-m" marginTop="m">
              In this project, I tackled one of the core challenges of embedded machine learning: achieving real-time performance without the bottlenecks of external communication overhead.
            </Text>
            <Text variant="body-default-m">
              While embedded systems often rely on off-chip accelerators to speed up inference, the latency introduced by data transfers across system boundaries can be crippling for applications that demand immediacy, such as robotics, wearable health devices, or autonomous sensing platforms.
            </Text>
            <Text variant="body-default-m">
              To address this, I designed a fully on-chip hardware-software co-design framework using an FPGA-based softcore processor (MicroBlaze) and custom-built VHDL acceleration modules for neural network operations. By tightly integrating the accelerator within the FPGA fabric and eliminating external communication overhead, I created a pipeline that allowed inference tasks to remain entirely on-chip.
            </Text>
            <Text variant="body-default-m">
              One of the aspects I am most proud of in this work is the end-to-end custom acceleration pipeline I implemented. Rather than relying on pre-existing IP cores or black-box accelerators, I built VHDL-based modules tailored to neural network primitives, ensuring both flexibility and efficiency. This gave me hands-on experience in hardware description languages while deepening my understanding of how low-level design decisions ripple up to impact system-level performance.
            </Text>
            <Text variant="body-default-m">
              The experimental results were striking: my design achieved a 420× speedup over baseline softcore execution, showcasing how carefully engineered hardware-software co-design can radically transform performance in constrained embedded environments, earning me the Technical Excellence Award in Computer Engineering.
            </Text>
            <Text variant="body-default-m">
              This work reflects my broader interest in pushing the boundaries of embedded AI systems, particularly in contexts where every microsecond matters.
            </Text>
          </Column>
        </Card>

        {/* Project 2: On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Date:</strong> Sep 2024 - May 2025
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Tools & Technologies:</strong> STM32 (Cortex-M), Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, STM32CubeIDE, C/C++, VHDL
            </Text>
            <Text variant="body-default-m" marginTop="m">
              Whereas my earlier work focused on eliminating communication bottlenecks through an on-chip acceleration strategy, this project zoomed out to ask a broader systems-level question: What is the actual trade-off between on-chip and off-chip FPGA acceleration strategies for embedded machine learning?
            </Text>
            <Text variant="body-default-m">
              The motivation was clear. In the embedded systems community, both on-chip and off-chip accelerators are widely discussed, yet direct, systematic comparisons are surprisingly scarce. I wanted to provide a rigorous evaluation that could help both researchers and practitioners make informed design choices, depending on whether their priority was latency, flexibility, or scalability.
            </Text>
            <Text variant="body-default-m">
              To this end, I constructed and benchmarked four distinct hardware configurations spanning both silicon-based microcontrollers and FPGA softcore processors, with accelerators placed either on-chip (directly in FPGA fabric) or off-chip (interfacing through communication buses). By holding the neural network workloads constant and varying only the architectural setup, I was able to isolate the true impact of communication overhead on inference latency.
            </Text>
            <Text variant="body-default-m">
              For me personally, this project underscored the importance of asking the right systems-level questions. Sometimes the most impactful contribution is not just building something faster, but creating a structured comparison that helps others make better design trade-offs. This mindset, of combining deep technical implementation with broad architectural reasoning, is one I hope to carry forward into future research.
            </Text>
          </Column>
        </Card>

        {/* Project 3: Agentic AI for Energy Management – Research Consulting with Schneider Electric */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Agentic AI for Energy Management – Research Consulting with Schneider Electric</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Date:</strong> May 2025 - Jul 2025
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Tools & Technologies:</strong> LlamaIndex, Model Context Protocol (MCP), FastAPI, Streamlit, Python, RESTful APIs, Azure OpenAI (GPT-4.1, GPT-4o), Google Gemini, Anthropic Claude, Groq LLMs
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Link:</strong> <a href="https://inside.wooster.edu/amre/" target="_blank" rel="noopener noreferrer">Learn more about the AMRE Consulting Program</a>
            </Text>
            <Text variant="body-default-m" marginTop="m">
              Through the 2025 Applied Methods & Research Experience (AMRE) program, I collaborated with Schneider Electric's Data Science team, to develop and evaluate an agentic AI co-pilot for sustainable energy operations.
            </Text>
            <Text variant="body-default-m">
              Advised by two faculty members, our core mission was to explore how large language model (LLM)-powered agents could serve as intelligent assistants for corporate energy management. We developed and tested multiple agentic architectures and benchmarked their performance on complex sustainability queries.
            </Text>
            <Text variant="body-default-m">
              Our experiments demonstrated that single-agent systems often outperform multi-agent setups in execution time and accuracy for top-tier LLMs, while multi-agent systems provide scalability and modularity for mid-tier models and evolving toolchains. This nuanced finding underscored the importance of architectural choice in AI system design, a theme that resonates deeply with broader questions in agentic AI research.
            </Text>
            <Text variant="body-default-m">
              This project stretched me across multiple dimensions:
            </Text>
            <Text variant="body-default-m" marginLeft="m">
              • I deepened my skills in LLM systems integration, multi-agent orchestration, and prompt engineering.
            </Text>
            <Text variant="body-default-m" marginLeft="m">
              • I gained hands-on experience with evaluation methodologies for intelligent systems, including both deterministic and LLM-based evaluators.
            </Text>
            <Text variant="body-default-m" marginLeft="m">
              • I learned how to balance technical experimentation with applied business needs, presenting findings directly to Schneider Electric Sustainability Business' data science team and refining solutions based on their feedback.
            </Text>
          </Column>
        </Card>

        {/* Project 4: Wearable Technology, Productivity and Information Overload */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Date:</strong> Jan 2024 - Apr 2024
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              <strong>Skills:</strong> Research Design, Literature Review, Needs Assessment (Interviews & Thematic analysis), Wearable Technology Concept Development
            </Text>
            <Text variant="body-default-m" marginTop="m">
              As a Research Intern at Ashesi University's CaRINE Programme, I explored how wearable technology can transform the practice of journaling into a seamless, productivity-enhancing experience.
            </Text>
            <Text variant="body-default-m">
              The project, called NOTE-IT, stemmed from a research gap: while journaling is proven to improve critical thinking and reduce information overload, cultivating the habit is difficult, and existing knowledge management tools often fail to capture the spontaneity of thought.
            </Text>
            <Text variant="body-default-m">
              Through a literature review, I examined how information overload impairs productivity and how journaling mitigates cognitive strain. I then conducted a needs survey with faculty and students, uncovering strong interest in a wearable solution despite concerns around privacy and usability.
            </Text>
            <Text variant="body-default-m">
              The result was NOTE-IT, a concept for a wearable device that enables instant, voice-based journaling. Thoughts are captured verbally, stored securely, and later organized through a companion mobile app.
            </Text>
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
