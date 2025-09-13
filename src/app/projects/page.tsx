import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Row } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";
import Image from "next/image";

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
      id: "32-bit-mips-processor",
      title: "32-Bit Single-Cycle MIPS Processor Components in VHDL",
      date: "Mar 2024 - May 2024",
      technologies: "RTL Design & Verification, Hardware Simulation (ModelSim)",
      summary: "Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit, each verified with dedicated testbenches and simulation waveforms. Implemented a subset of MIPS instructions (arithmetic, logical, branching, memory access, and jump operations) while ensuring correct datapath and control signal coordination."
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
        <Heading marginBottom="l" variant="heading-strong-xl" align="center" style={{ textTransform: "uppercase" }}>
          Project Catalogue
        </Heading>
        <Text variant="body-default-l" align="center">
          In my first year of undergraduate studies, I switched from electrical to computer engineering. This was attributed to a newfound fascination for the interplay of both hardware and software tools towards engineering innovation. Thus, I have amassed several project experiences in both the engineering, and computer sciences.
        </Text>
      </Column>

      {/* Alfred Whitehead Quote */}
      <Column paddingX="l" gap="xl" marginBottom="xl" align="center">
        <Row gap="l" vertical="center" align="center" maxWidth="l">
          <div
            style={{
              position: "relative",
              animation: "fadeInPop 1.5s ease-out forwards",
              transformOrigin: "center center",
              opacity: 0,
              transform: "scale(0.8)",
            }}
          >
            <Image
              src="/images/whitehead.png"
              alt="Alfred Whitehead"
              width={140}
              height={140}
              style={{ 
                objectFit: "cover",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <Column gap="m" align="center" flex={1}>
            <Text variant="body-default-l" align="center" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
              "Civilization advances by extending the number of important operations which we can perform without thinking about them."
            </Text>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              — Alfred Whitehead, Creator of Process Philosophy
            </Text>
          </Column>
        </Row>
      </Column>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInPop {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
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

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl" align="center">
        <Row gap="l" vertical="center" align="center" maxWidth="l">
          <div
            style={{
              position: "relative",
              animation: "fadeIn 2s ease-out forwards",
              opacity: 0,
              flex: 1
            }}
          >
            <Image
              src="/images/projects/projects1.png"
              alt="Projects Overview 1"
              width={400}
              height={300}
              style={{ 
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              animation: "fadeIn 2s ease-out 0.3s forwards",
              opacity: 0,
              flex: 1
            }}
          >
            <Image
              src="/images/projects/projects2.png"
              alt="Projects Overview 2"
              width={400}
              height={300}
              style={{ 
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
        </Row>
      </Column>

      {/* All Projects */}
      <Column paddingX="l" gap="xl">
        {projectList.map((project, index) => {
          const isEven = index % 2 === 0;
          // Map project images based on project ID
           const imageMap = {
             'morse-code-decoder': '/images/projects/morsecode.jpg',
             'automated-robotic-vehicle': '/images/projects/robot.jpeg',
             'tennis-scoreboard': '/images/projects/tennis.jpeg',
             '16-bit-cpu': '/images/projects/logism.jpeg',
             '32-bit-mips-processor': '/images/projects/mips.png',
             'heartbeat-monitoring': '/images/projects/heartbeat.png',
             'electronic-piano': '/images/projects/piano.jpeg',
             '4dof-robotic-arm': '/images/projects/roboarm.jpeg',
             'curating-student-research-articles': '/images/projects/arm-y.jpg',
             'mathematical-model-depression': '/images/projects/predatorprey.png',
             'traffic-flow-analysis': '/images/projects/trafficflow.png',
             'calculus-data-collection': '/images/projects/calculusdriven.png'
           };
          const imagePath = imageMap[project.id as keyof typeof imageMap] || '/images/projects/logism.jpeg';
          
          return (
            <Card
              key={index}
              as="a"
              href={`/projects/${project.id}`}
              padding="0" 
              radius="m" 
              shadow="m"
              style={{ 
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                overflow: "hidden"
              }}
            >
              <Row gap="0" vertical="stretch">
                {/* Image on left for even cards, right for odd cards */}
                {isEven && (
                  <div style={{ 
                    width: "200px", 
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
                
                {/* Content */}
                <Column gap="m" padding="l" flex={1}>
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
                
                {/* Image on right for odd cards */}
                {!isEven && (
                  <div style={{ 
                    width: "200px", 
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
