"use client";

import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { useState } from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: "Major Research",
    description: "Major research work - core research interests with significant faculty engagement",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Major Research")}`,
    path: "/research/major",
  });
}

const ExpandableCard = ({ title, date, technologies, summary, fullContent, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      padding="l" 
      radius="m" 
      shadow="m"
      style={{ 
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: isExpanded ? "2px solid var(--brand-alpha-medium)" : "1px solid var(--neutral-alpha-weak)"
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Column gap="m">
        <Heading variant="heading-strong-l">{title}</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          <strong>Date:</strong> {date}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> {technologies}
        </Text>
        {link && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            <strong>Link:</strong> <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
          </Text>
        )}
        
        {!isExpanded ? (
          <Text variant="body-default-m" marginTop="m">
            {summary}
          </Text>
        ) : (
          <Column gap="m" marginTop="m">
            {fullContent.map((paragraph, index) => (
              <Text key={index} variant="body-default-m">
                {paragraph}
              </Text>
            ))}
          </Column>
        )}
        
        <Text variant="body-default-s" onBackground="neutral-weak" marginTop="m" style={{ fontStyle: "italic" }}>
          {isExpanded ? "Click to collapse" : "Click to read more"}
        </Text>
      </Column>
    </Card>
  );
};

export default function MajorResearch() {
  const projects = [
    {
      title: "Accelerating Embedded Neural Network Inference on FPGA Softcore Processors",
      date: "Sep 2024 - May 2025",
      technologies: "Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, C/C++, VHDL",
      summary: "Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution, earning the Technical Excellence Award in Computer Engineering.",
      fullContent: [
        "In this project, I tackled one of the core challenges of embedded machine learning: achieving real-time performance without the bottlenecks of external communication overhead.",
        "While embedded systems often rely on off-chip accelerators to speed up inference, the latency introduced by data transfers across system boundaries can be crippling for applications that demand immediacy, such as robotics, wearable health devices, or autonomous sensing platforms.",
        "To address this, I designed a fully on-chip hardware-software co-design framework using an FPGA-based softcore processor (MicroBlaze) and custom-built VHDL acceleration modules for neural network operations. By tightly integrating the accelerator within the FPGA fabric and eliminating external communication overhead, I created a pipeline that allowed inference tasks to remain entirely on-chip.",
        "One of the aspects I am most proud of in this work is the end-to-end custom acceleration pipeline I implemented. Rather than relying on pre-existing IP cores or black-box accelerators, I built VHDL-based modules tailored to neural network primitives, ensuring both flexibility and efficiency. This gave me hands-on experience in hardware description languages while deepening my understanding of how low-level design decisions ripple up to impact system-level performance.",
        "The experimental results were striking: my design achieved a 420× speedup over baseline softcore execution, showcasing how carefully engineered hardware-software co-design can radically transform performance in constrained embedded environments, earning me the Technical Excellence Award in Computer Engineering.",
        "This work reflects my broader interest in pushing the boundaries of embedded AI systems, particularly in contexts where every microsecond matters."
      ]
    },
    {
      title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
      date: "Sep 2024 - May 2025",
      technologies: "STM32 (Cortex-M), Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, STM32CubeIDE, C/C++, VHDL",
      summary: "Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning. Benchmarked four distinct hardware configurations to isolate the impact of communication overhead on inference latency.",
      fullContent: [
        "Whereas my earlier work focused on eliminating communication bottlenecks through an on-chip acceleration strategy, this project zoomed out to ask a broader systems-level question: What is the actual trade-off between on-chip and off-chip FPGA acceleration strategies for embedded machine learning?",
        "The motivation was clear. In the embedded systems community, both on-chip and off-chip accelerators are widely discussed, yet direct, systematic comparisons are surprisingly scarce. I wanted to provide a rigorous evaluation that could help both researchers and practitioners make informed design choices, depending on whether their priority was latency, flexibility, or scalability.",
        "To this end, I constructed and benchmarked four distinct hardware configurations spanning both silicon-based microcontrollers and FPGA softcore processors, with accelerators placed either on-chip (directly in FPGA fabric) or off-chip (interfacing through communication buses). By holding the neural network workloads constant and varying only the architectural setup, I was able to isolate the true impact of communication overhead on inference latency.",
        "For me personally, this project underscored the importance of asking the right systems-level questions. Sometimes the most impactful contribution is not just building something faster, but creating a structured comparison that helps others make better design trade-offs. This mindset, of combining deep technical implementation with broad architectural reasoning, is one I hope to carry forward into future research."
      ]
    },
    {
      title: "Agentic AI for Energy Management – Research Consulting with Schneider Electric",
      date: "May 2025 - Jul 2025",
      technologies: "LlamaIndex, Model Context Protocol (MCP), FastAPI, Streamlit, Python, RESTful APIs, Azure OpenAI (GPT-4.1, GPT-4o), Google Gemini, Anthropic Claude, Groq LLMs",
      summary: "Collaborated with Schneider Electric's Data Science team through AMRE program to develop and evaluate an agentic AI co-pilot for sustainable energy operations. Demonstrated that single-agent systems outperform multi-agent setups for top-tier LLMs.",
      link: {
        url: "https://inside.wooster.edu/amre/",
        text: "Learn more about the AMRE Consulting Program"
      },
      fullContent: [
        "Through the 2025 Applied Methods & Research Experience (AMRE) program, I collaborated with Schneider Electric's Data Science team, to develop and evaluate an agentic AI co-pilot for sustainable energy operations.",
        "Advised by two faculty members, our core mission was to explore how large language model (LLM)-powered agents could serve as intelligent assistants for corporate energy management. We developed and tested multiple agentic architectures and benchmarked their performance on complex sustainability queries.",
        "Our experiments demonstrated that single-agent systems often outperform multi-agent setups in execution time and accuracy for top-tier LLMs, while multi-agent systems provide scalability and modularity for mid-tier models and evolving toolchains. This nuanced finding underscored the importance of architectural choice in AI system design, a theme that resonates deeply with broader questions in agentic AI research.",
        "This project stretched me across multiple dimensions:",
        "• I deepened my skills in LLM systems integration, multi-agent orchestration, and prompt engineering.",
        "• I gained hands-on experience with evaluation methodologies for intelligent systems, including both deterministic and LLM-based evaluators.",
        "• I learned how to balance technical experimentation with applied business needs, presenting findings directly to Schneider Electric Sustainability Business' data science team and refining solutions based on their feedback."
      ]
    },
    {
      title: "Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal",
      date: "Jan 2024 - Apr 2024",
      technologies: "Research Design, Literature Review, Needs Assessment (Interviews & Thematic analysis), Wearable Technology Concept Development",
      summary: "As Research Intern at Ashesi University's CaRINE Programme, developed NOTE-IT concept for wearable voice-based journaling to address information overload and improve productivity through seamless thought capture.",
      fullContent: [
        "As a Research Intern at Ashesi University's CaRINE Programme, I explored how wearable technology can transform the practice of journaling into a seamless, productivity-enhancing experience.",
        "The project, called NOTE-IT, stemmed from a research gap: while journaling is proven to improve critical thinking and reduce information overload, cultivating the habit is difficult, and existing knowledge management tools often fail to capture the spontaneity of thought.",
        "Through a literature review, I examined how information overload impairs productivity and how journaling mitigates cognitive strain. I then conducted a needs survey with faculty and students, uncovering strong interest in a wearable solution despite concerns around privacy and usability.",
        "The result was NOTE-IT, a concept for a wearable device that enables instant, voice-based journaling. Thoughts are captured verbally, stored securely, and later organized through a companion mobile app.",
        "Future extensions include:",
        "• GPT On-The-Go: Integrating LLMs to provide interactive, context-aware support in real time.",
        "• Salesforce Incarnate: Embedding CRM functionality into the wearable for on-the-go information capture and team collaboration.",
        "Reflecting back, this project positioned me to think critically about how emerging technologies can bridge human limitations in cognition and productivity."
      ]
    }
  ];

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
        {projects.map((project, index) => (
          <ExpandableCard
            key={index}
            title={project.title}
            date={project.date}
            technologies={project.technologies}
            summary={project.summary}
            fullContent={project.fullContent}
            link={project.link}
          />
        ))}
      </Column>
    </Column>
  );
}
