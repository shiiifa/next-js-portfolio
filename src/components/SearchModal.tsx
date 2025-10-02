"use client";

import { useState, useEffect, useRef } from "react";
import { Column, Row, Text, Input, Button, Card, Heading, Icon } from "@once-ui-system/core";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  section: string;
  href: string;
  category?: string;
  date?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchData: SearchItem[] = [
  // Research - Major
  {
    id: "fpga-neural-networks",
    title: "Accelerating Embedded Neural Network Inference on FPGA Softcore Processors",
    description: "Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution.",
    section: "Research",
    href: "/research/major/fpga-neural-networks",
    category: "Major Research",
    date: "Sep 2024 - May 2025"
  },
  {
    id: "fpga-acceleration-comparison",
    title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
    description: "Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning.",
    section: "Research",
    href: "/research/major/fpga-acceleration-comparison",
    category: "Major Research",
    date: "Sep 2024 - May 2025"
  },
  {
    id: "agentic-ai-energy-management",
    title: "Agentic AI for Energy Management – Research Consulting with Schneider Electric",
    description: "Collaborated with Schneider Electric's Data Science team through AMRE program to develop and evaluate an agentic AI co-pilot for sustainable energy operations.",
    section: "Research",
    href: "/research/major/agentic-ai-energy-management",
    category: "Major Research",
    date: "May 2025 - Jul 2025"
  },
  {
    id: "wearable-technology-study",
    title: "Wearable Technology Study",
    description: "Research on wearable technology applications and user experience design.",
    section: "Research",
    href: "/research/major/wearable-technology-study",
    category: "Major Research",
    date: "2024"
  },
  // Research - Non-Major
  {
    id: "solar-panel-soiling",
    title: "Estimating the Impact of Soiling on Solar Panels",
    description: "Collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.",
    section: "Research",
    href: "/research/non-major/solar-panel-soiling",
    category: "Non-Major Research",
    date: "Jan 2023 - May 2023"
  },
  {
    id: "depression-mathematical-model",
    title: "Developing a Novel Mathematical Model for Depression",
    description: "Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery.",
    section: "Research",
    href: "/research/non-major/depression-mathematical-model",
    category: "Non-Major Research",
    date: "Nov 2023 - Dec 2023"
  },
  {
    id: "hydrogel-irrigation-study",
    title: "A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types",
    description: "Investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.",
    section: "Research",
    href: "/research/non-major/hydrogel-irrigation-study",
    category: "Non-Major Research",
    date: "Nov 2023 - Dec 2023"
  },
  {
    id: "prey-predator-mathematical-model",
    title: "Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships",
    description: "Collaborated on a project exploring stage-structured predator–prey systems using mathematical modeling techniques.",
    section: "Research",
    href: "/research/non-major/prey-predator-mathematical-model",
    category: "Non-Major Research",
    date: "Nov 2022 - Dec 2022"
  },
  {
    id: "betterhiring-ai-hiring-management",
    title: "BetterHiring: Automating Your Hiring Management",
    description: "Designed and evaluated an AI-driven hiring management solution for Ashesi University's Computer Science and Information Systems (CSIS) department.",
    section: "Research",
    href: "/research/non-major/betterhiring-ai-hiring-management",
    category: "Non-Major Research",
    date: "2024"
  },
  // Beyond The Lab
  {
    id: "tedx-ashesi-speaker",
    title: "TEDx Ashesi University Speaker",
    description: "Delivered a TEDx talk on quantum physics and the role of wandering in the realm of the unknown, exploring the importance of self-expression in society.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/tedx-ashesi-speaker",
    category: "Public Speaking",
    date: "2022"
  },
  {
    id: "arm-engage-leadership",
    title: "Research & Innovation Lead, Arm(E³)NGAGE Ashesi Student Club",
    description: "Led club engineering projects and fostered a research culture, producing five diverse research articles and conducting Arduino C coding workshops.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/arm-engage-leadership",
    category: "Leadership",
    date: "2023 - 2024"
  },
  {
    id: "army-students-club-curator",
    title: "Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)",
    description: "Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/army-students-club-curator",
    category: "Creative Management",
    date: "2023"
  },
  {
    id: "ashesi-research-club-president",
    title: "President, Ashesi Research Club",
    description: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/ashesi-research-club-president",
    category: "Leadership",
    date: "2023 - 2024"
  },
  {
    id: "aftgonosia-service-learning",
    title: "Aftgonosia - Career Development Initiative",
    description: "Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/aftgonosia-service-learning",
    category: "Community Service",
    date: "2024"
  },
  {
    id: "msmiles-stem-curriculum",
    title: "MSmiles - STEM Curriculum Design",
    description: "Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children as a STEM Curriculum Design Associate.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/msmiles-stem-curriculum",
    category: "Education & Mentorship",
    date: "2022"
  },
  {
    id: "assistive-technology-makerspace",
    title: "Assistive Technology Makerspace Fellowship",
    description: "As a Fellow at the Assistive Technology Makerspace, contributed to advancing accessible, low-cost assistive technologies for persons with disabilities in Ghana.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/assistive-technology-makerspace",
    category: "Fellowship",
    date: "Aug - Sep 2019"
  },
  {
    id: "flir-c5-video-manual",
    title: "A Video Manual of the Flir C5 Camera",
    description: "Co-curated a comprehensive video manual demonstrating how the Flir C5 thermal imaging camera works, including theoretical background and practical features.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/flir-c5-video-manual",
    category: "Videography",
    date: "Mar 2024"
  },
  {
    id: "pan-africanism-skit",
    title: "Starring in a Skit on Pan-Africanism",
    description: "Acted as Dr. Kwame Nkrumah, Ghana's first prime minister and president, in a skit exploring the evolution of Pan-Africanism and his role in political unification.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/pan-africanism-skit",
    category: "Performance",
    date: "May 2025"
  },
  {
    id: "7ma-show-podcast",
    title: "7MA Show Podcast Appearances",
    description: "Co-hosted a season of the 7MA Show podcast exploring career preparedness and growth through the lens of Ashesi University.",
    section: "Beyond The Lab",
    href: "/beyond-the-lab/7ma-show-podcast",
    category: "Podcast",
    date: "March 2023"
  },
  // Projects - Engineering
  {
    id: "16-bit-cpu",
    title: "16-Bit CPU Design",
    description: "Designed and implemented a 16-bit CPU using VHDL, featuring a complete instruction set and control unit.",
    section: "Projects",
    href: "/projects/engineering-projects/16-bit-cpu",
    category: "Engineering",
    date: "2023"
  },
  {
    id: "32-bit-mips-processor",
    title: "32-Bit MIPS Processor",
    description: "Implemented a 32-bit MIPS processor with pipelining and hazard detection using VHDL.",
    section: "Projects",
    href: "/projects/engineering-projects/32-bit-mips-processor",
    category: "Engineering",
    date: "2023"
  },
  {
    id: "4dof-robotic-arm",
    title: "4-DOF Robotic Arm",
    description: "Designed and built a 4-degree-of-freedom robotic arm with Arduino control and servo motors.",
    section: "Projects",
    href: "/projects/engineering-projects/4dof-robotic-arm",
    category: "Engineering",
    date: "2022"
  },
  {
    id: "automated-robotic-vehicle",
    title: "Automated Robotic Vehicle",
    description: "Developed an autonomous robotic vehicle with obstacle detection and path planning capabilities.",
    section: "Projects",
    href: "/projects/engineering-projects/automated-robotic-vehicle",
    category: "Engineering",
    date: "2022"
  },
  {
    id: "calculus-data-collection",
    title: "Calculus Data Collection System",
    description: "Created a data collection system for calculus education using sensors and data visualization.",
    section: "Projects",
    href: "/projects/engineering-projects/calculus-data-collection",
    category: "Engineering",
    date: "2022"
  },
  {
    id: "electronic-piano",
    title: "Electronic Piano",
    description: "Built an electronic piano using Arduino and capacitive touch sensors for musical note generation.",
    section: "Projects",
    href: "/projects/engineering-projects/electronic-piano",
    category: "Engineering",
    date: "2021"
  },
  {
    id: "heartbeat-monitoring",
    title: "Heartbeat Monitoring System",
    description: "Developed a real-time heartbeat monitoring system using pulse sensors and Arduino.",
    section: "Projects",
    href: "/projects/engineering-projects/heartbeat-monitoring",
    category: "Engineering",
    date: "2021"
  },
  {
    id: "morse-code-decoder",
    title: "Morse Code Decoder",
    description: "Created a neural network-based Morse code decoder for embedded systems using FPGA and ARM Cortex-M.",
    section: "Projects",
    href: "/projects/engineering-projects/morse-code-decoder",
    category: "Engineering",
    date: "2024"
  },
  {
    id: "tennis-scoreboard",
    title: "Tennis Scoreboard",
    description: "Designed and built an electronic tennis scoreboard with LED display and score tracking.",
    section: "Projects",
    href: "/projects/engineering-projects/tennis-scoreboard",
    category: "Engineering",
    date: "2021"
  },
  {
    id: "traffic-flow-analysis",
    title: "Traffic Flow Analysis",
    description: "Developed a computer vision system for traffic flow analysis using image processing techniques.",
    section: "Projects",
    href: "/projects/engineering-projects/traffic-flow-analysis",
    category: "Engineering",
    date: "2022"
  },
  // Projects - CS
  {
    id: "python-pathfinder",
    title: "Python Pathfinder Algorithm",
    description: "Implemented various pathfinding algorithms including A* and Dijkstra's algorithm in Python.",
    section: "Projects",
    href: "/projects/cs-projects/python-pathfinder",
    category: "Computer Science",
    date: "2023"
  },
  {
    id: "gender-recognition-audio-signals",
    title: "Gender Recognition from Audio Signals",
    description: "Developed a machine learning model to classify gender from audio signals using signal processing techniques.",
    section: "Projects",
    href: "/projects/cs-projects/gender-recognition-audio-signals",
    category: "Computer Science",
    date: "2023"
  },
  {
    id: "automatic-speech-recognition-asante-twi",
    title: "Automatic Speech Recognition for Asante Twi",
    description: "Built an ASR system for the Asante Twi language using deep learning and speech processing.",
    section: "Projects",
    href: "/projects/cs-projects/automatic-speech-recognition-asante-twi",
    category: "Computer Science",
    date: "2023"
  },
  // News
  {
    id: "technical-excellence-award",
    title: "Technical Excellence Award in Computer Engineering",
    description: "Honored to receive the prestigious Technical Excellence Award in Computer Engineering for my capstone project on 'Hardware Accelerated Machine Learning with a Softcore Processor'.",
    section: "News",
    href: "/blog/news/technical-excellence-award",
    category: "Award",
    date: "May 2025"
  }
];

const sections = ["All", "Research", "Beyond The Lab", "Projects", "News"];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("All");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    let results = searchData;

    // Filter by section
    if (selectedSection !== "All") {
      results = results.filter(item => item.section === selectedSection);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category?.toLowerCase().includes(term)
      );
    }

    setFilteredResults(results);
  }, [searchTerm, selectedSection]);

  const handleResultClick = (href: string) => {
    window.location.href = href;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <Column gap="l" padding="l">
          {/* Header */}
          <Row horizontal="space-between" vertical="center">
            <Heading variant="heading-strong-l">Search Portfolio</Heading>
            <Button
              variant="tertiary"
              size="s"
              onClick={onClose}
              style={{ padding: "8px" }}
            >
              <Icon name="close" size="m" />
            </Button>
          </Row>

          {/* Search Input */}
          <Row gap="s" vertical="center">
            <Icon name="search" size="m" />
            <Input
              ref={inputRef}
              placeholder="Search projects, research, achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ flex: 1 }}
            />
          </Row>

          {/* Section Filter */}
          <Column gap="s">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Filter by section:
            </Text>
            <Row gap="s" wrap>
              {sections.map((section) => (
                <Button
                  key={section}
                  variant={selectedSection === section ? "primary" : "secondary"}
                  size="s"
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </Button>
              ))}
            </Row>
          </Column>

          {/* Results */}
          <Column gap="s" style={{ maxHeight: "400px", overflowY: "auto" }}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
            </Text>
            
            {filteredResults.length === 0 ? (
              <Text variant="body-default-m" align="center" style={{ padding: "2rem 0" }}>
                No results found. Try adjusting your search terms or section filter.
              </Text>
            ) : (
              filteredResults.map((item) => (
                <Card
                  key={item.id}
                  padding="m"
                  radius="s"
                  shadow="s"
                  style={{ 
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: "1px solid transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#10b981";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  onClick={() => handleResultClick(item.href)}
                >
                  <Column gap="xs">
                    <Row horizontal="space-between" vertical="center">
                      <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
                        {item.category}
                      </Text>
                      {item.date && (
                        <Text variant="body-default-xs" onBackground="neutral-weak">
                          {item.date}
                        </Text>
                      )}
                    </Row>
                    <Heading variant="heading-strong-s">{item.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  </Column>
                </Card>
              ))
            )}
          </Column>
        </Column>
      </Card>
    </div>
  );
}
