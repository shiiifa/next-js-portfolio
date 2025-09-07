import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Non-Major Research 2",
    description: "Additional research projects and coursework including club service, mathematical modeling, and data analysis.",
    path: "/research/non-major-2",
    baseURL,
  });
}

export default function NonMajorResearch2() {
  const projects = [
    {
      title: "Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)",
      type: "Club Service",
      status: "Completed",
      skills: "Creative Management, Article Editing"
    },
    {
      title: "Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships",
      type: "Coursework",
      status: "Completed",
      skills: "Mathematical Modelling (MATLAB)"
    },
    {
      title: "Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra",
      type: "Coursework",
      status: "Completed",
      skills: "Mathematical Modelling (MATLAB)"
    },
    {
      title: "Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations",
      type: "Coursework",
      status: "Completed",
      skills: "Arduino for Data Collection, Geogebra"
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major-2"
        title={`Non-Major Research 2 – ${person.name}`}
        description="Additional research projects and coursework including club service, mathematical modeling, and data analysis."
        image={`/api/og/generate?title=${encodeURIComponent("Non-Major Research 2")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Non-Major Research 2
        </Heading>
        <Text variant="body-default-l" align="center">
          Additional research projects and coursework showcasing diverse academic and extracurricular experiences.
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
                <strong>Relevant Skills:</strong> {project.skills}
              </Text>
            </Column>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
