import { About, Blog, Contact, Home, Newsletter, Person, Social, Work, Research } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Obed",
  lastName: "Allotey Babington",
  name: `Obed Allotey Babington`,
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "obed.babington@ashesi.edu.gh",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/obed-babington",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:obed.babington@ashesi.edu.gh",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Shaping digital and embedded systems for intelligence at the edge</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Obed, a research assistant at Ashesi University, blending ideas from hardware, software, and artificial intelligence to build future-ready systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        At my core, I'm marked by an intellectual curiosity, ambition, and a love for social connection.<br /><br />
        My current research interests lie in the development of embedded machine learning solutions for deploying AI models on edge devices. This includes the design and implementation of hardware acceleration strategies for neural network inference using FPGAs.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Competencies",
    skills: [
      {
        title: "Hardware",
        description: (
          <>ARM Cortex-M (STM32), FPGA (Xilinx Artix-7, ZYNQ-7000), Arduino, ESP32, Oscilloscopes, Signal Generators</>
        ),
      },
      {
        title: "Programming",
        description: (
          <>Embedded C, VHDL, Python, Java, MATLAB, C++, Assembly</>
        ),
      },
      {
        title: "Tools",
        description: (
          <>Vivado, Vitis IDE, ModelSim, Logisim Evolution, Git/GitHub, Linux/UNIX, VS Code, Microsoft Office Suite, Notion</>
        ),
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Work – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const research: Research = {
  path: "/research",
  label: "Research",
  title: `Research – ${person.name}`,
  description: `Research experiences and work by ${person.name}`,
};


const projects: Contact = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Engineering and Computer Science projects by ${person.name}`,
};

const beyondTheLab: Contact = {
  path: "/beyond-the-lab",
  label: "Beyond The Lab",
  title: `Beyond The Lab – ${person.name}`,
  description: `Leadership, public speaking, community service, writing, and more by ${person.name}`,
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, research, projects, beyondTheLab, contact };