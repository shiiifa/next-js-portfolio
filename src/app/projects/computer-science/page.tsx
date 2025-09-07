import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Computer Science Projects",
    description: "Computer Science projects showcasing software development, algorithms, and computational solutions.",
    path: "/projects/computer-science",
    baseURL,
  });
}

export default function ComputerScienceProjects() {
  const projects = [
    {
      title: "Agentic AI Energy Management System",
      type: "AI/ML Application",
      status: "Completed",
      skills: "Python, LLMs, FastAPI, Streamlit, Azure OpenAI"
    },
    {
      title: "Mathematical Modeling Suite",
      type: "Software Development",
      status: "Completed",
      skills: "MATLAB, Python, Mathematical Modeling, Data Analysis"
    },
    {
      title: "Web Development Portfolio",
      type: "Full-Stack Development",
      status: "Completed",
      skills: "Next.js, React, TypeScript, CSS, HTML"
    },
    {
      title: "Data Collection & Analysis Platform",
      type: "Data Science",
      status: "Completed",
      skills: "Arduino, Python, Geogebra, Statistical Analysis"
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/computer-science"
        title={`Computer Science Projects – ${person.name}`}
        description="Computer Science projects showcasing software development, algorithms, and computational solutions."
        image={`/api/og/generate?title=${encodeURIComponent("Computer Science Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Computer Science Projects
        </Heading>
        <Text variant="body-default-l" align="center">
          Software development, algorithms, and computational solutions that demonstrate programming expertise and technical innovation.
        </Text>
      </Column>

      {/* Project Tiles */}
      <Column paddingX="l" gap="xl">
        {projects.map((project, index) => (
          <Card
            key={index}
            padding="l" 
            radius="m" 
            shadow="m"
            style={{ 
              cursor: "default",
              transition: "all 0.3s ease"
            }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-l">{project.title}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Type:</strong> {project.type}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Status:</strong> {project.status}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Skills:</strong> {project.skills}
              </Text>
            </Column>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
