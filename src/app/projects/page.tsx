import { Column, Heading, Meta, Schema, Text, Card, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    path: projects.path,
    baseURL,
  });
}

export default function Projects() {
  const projectList = [
    {
      id: "morse-code-decoder",
      title: "Real-Time Morse Code Decoder as Embedded Neural Network",
      date: "Sep 2024 - Dec 2024",
      technologies: "TensorFlow, STM32F091RC, Xilinx Vivado, Vitis, MicroBlaze softcore processor, Embedded C",
      summary: "Built a neural network–based decoder to translate real-time Morse button-press sequences (A–J + unclassified) into text, deployed on both an STM32F091RC microcontroller and a MicroBlaze/FPGA system. Achieved ~85% accuracy with full inference pipeline implementation in bare-metal C."
    },
    {
      id: "automated-robotic-vehicle",
      title: "Automated Robotic Vehicle",
      date: "Dec 2024",
      technologies: "Embedded C, Arm Cortex-M (STM32)",
      summary: "Designed and implemented a remotely operated robotic vehicle using dual microcontrollers (STM32 M0 and STM32 M7) in register-level bare-metal C using UART-based communication. Integrated RTOS on the M7 for real-time task scheduling, ensuring efficient coordination of motion, speed regulation, and system monitoring."
    },
    {
      id: "tennis-scoreboard",
      title: "Tennis Scoreboard Digital System Design",
      date: "July 2024",
      technologies: "Digital Logic Design, Logism-Evolution, VHDL",
      summary: "Designed and implemented a digital lawn tennis scoreboard system, progressing from logic-level design in Logisim to structural and behavioral VHDL implementations. The design incorporated score progression (Love–15–30–40), reversal via a decrement button, and a reset function, with outputs mapped to large 7-segment LED displays on an Artix-7 FPGA."
    },
    {
      id: "16-bit-cpu",
      title: "16-bit CPU in Logism-Evolution",
      date: "Mar 2024 - May 2024",
      technologies: "Logisim-Evolution, Digital Logic Design, Computer Architecture",
      summary: "Collaborated in the design and implementation of a custom 16-bit CPU using Logisim-Evolution, incorporating key architectural components including an ALU (arithmetic + relational operations), register file, datapath, memory modules, and a micro-architected control unit."
    },
    {
      id: "heartbeat-monitoring",
      title: "Low-Cost Optical Heartbeat Monitoring System",
      date: "Mar 2024 - May 2024",
      technologies: "Analog Signal Processing, Electronic Instrumentation",
      summary: "Co-developed a low-cost heartbeat monitoring device leveraging an infrared LED–phototransistor pair to detect pulse signals through light absorption and reflection. Designed a multi-stage signal conditioning chain with active high-pass and low-pass filters, DC offset removal, and high-gain amplification using LM324N op-amps."
    },
    {
      id: "electronic-piano",
      title: "Basic Electronic Piano",
      date: "Apr 2023 - May 2023",
      technologies: "Electromagnetism, NE555 Timer IC, RC circuits, Breadboarding",
      summary: "Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator. Engineered RC timing circuits to generate square-wave frequencies for specific notes, integrated pushbutton inputs for key selection, and output sound through a 4Ω speaker."
    },
    {
      id: "4dof-robotic-arm",
      title: "Arduino-Controlled 4DOF Robotic Arm",
      date: "Mar 2022 - Jun 2022",
      technologies: "Arduino, C/C++, SolidWorks, Proteus, 3D printing, Laser Cutting, Breadboarding",
      summary: "Collaborated in a team to design and build a 4-DOF robotic arm showcased at Ashesi University's Engineering Exhibition. Programmed the control system in C/C++ on Arduino, enabling independent motion through dual joysticks and a potentiometer-operated claw. Applied the engineering design cycle, from ideation and CAD modeling in SolidWorks to prototyping with 3D printing, laser-cutting, and circuit integration."
    },
    {
      id: "curating-student-research-articles",
      title: "Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)",
      date: "2023",
      technologies: "Creative Management, Article Editing",
      summary: "Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills while supporting academic research dissemination."
    },
    {
      id: "mathematical-model-depression",
      title: "Developing a Novel Mathematical Model for Depression",
      date: "Nov 2023 - Dec 2023",
      technologies: "Mathematical Modelling (MATLAB)",
      summary: "Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery, considering social and community factors."
    },
    {
      id: "traffic-flow-analysis",
      title: "Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra",
      date: "2023",
      technologies: "Mathematical Modelling (MATLAB)",
      summary: "Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements."
    },
    {
      id: "calculus-data-collection",
      title: "Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations",
      date: "2023",
      technologies: "Arduino for Data Collection, Geogebra",
      summary: "Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling."
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`/api/og/generate?title=${encodeURIComponent("Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Work – {person.name}
        </Heading>
        <Heading marginBottom="m" variant="heading-strong-l" align="center">
          Project Catalogue
        </Heading>
        <Text variant="body-default-l" align="center">
          In my first year of undergraduate studies, I switched from electrical to computer engineering. This was attributed to a newfound fascination for the interplay of both hardware and software tools towards engineering innovation. Thus, I have amassed several project experiences in both the engineering, and computer sciences.
        </Text>
      </Column>

      {/* Alfred Whitehead Quote */}
      <Column paddingX="l" gap="xl" marginBottom="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m" align="center">
            <Text variant="body-default-l" align="center" style={{ fontStyle: "italic" }}>
              "Civilization advances by extending the number of important operations which we can perform without thinking about them."
            </Text>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              — Alfred Whitehead, Creator of Process Philosophy
            </Text>
          </Column>
        </Card>
      </Column>

      {/* Beyond The Lab Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Beyond The Lab
        </Heading>
        <Text variant="body-default-l" align="center">
          <strong>The Extras</strong>
        </Text>
        <Text variant="body-default-l" align="center" marginTop="m">
          When I'm not tackling research or engineering projects, you will find me engaged in a plethora of other endeavors. Leadership, public speaking, community service, writing, ...you name it.
        </Text>
        <Text variant="body-default-l" align="center" marginTop="m">
          Here lies a more holistic representation of my world. Take a dive.
        </Text>
      </Column>

      {/* All Projects */}
      <Column paddingX="l" gap="xl">
        {projectList.map((project, index) => (
          <Card
            key={index}
            as="a"
            href={`/projects/${project.id}`}
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
