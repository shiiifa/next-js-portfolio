import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Non-Major Research",
    description: "Non-major research experiences - academic coursework and extra-curricular activities",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Non-Major Research")}`,
    path: "/research/non-major",
  });
}

export default function NonMajorResearch() {
  const projects = [
    {
      id: "solar-panel-soiling",
      title: "Estimating the Impact of Soiling on Solar Panels",
      date: "Jan 2023 - May 2023",
      location: "Ashesi Resourceful Engineering Lab (AREL)",
      summary: "Collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.",
      image: "20230706_112627.jpg"
    },
    {
      id: "depression-mathematical-model",
      title: "Developing a Novel Mathematical Model for Depression",
      date: "Nov 2023 - Dec 2023",
      location: "Independent Research Project",
      summary: "Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery.",
      image: "Image 25-08-2025 at 7.45 PM.jpeg"
    },
    {
      id: "hydrogel-irrigation-study",
      title: "A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types",
      date: "Nov 2023 - Dec 2023",
      location: "Statistics Final Class Project",
      summary: "Investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.",
      image: "20230331_161915.jpg"
    },
    {
      id: "prey-predator-mathematical-model",
      title: "Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships",
      date: "Nov 2022 - Dec 2022",
      location: "Differential Equations and Numerical Methods Course",
      summary: "Collaborated on a project exploring stage-structured predator–prey systems using mathematical modeling techniques.",
      image: "Image 25-08-2025 at 10.33 PM.jpeg"
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major"
        title={`Non-Major Research – ${person.name}`}
        description="Non-major research experiences - academic coursework and extra-curricular activities"
        image={`/api/og/generate?title=${encodeURIComponent("Non-Major Research")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Non-Major Research Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Non-Major Research
        </Heading>
        <Text variant="body-default-l" align="center">
          A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
        </Text>
      </Column>

      {/* Non-Major Research Projects */}
      <Column paddingX="l" gap="xl">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          // Use specific cover photos for projects that have them
          const getCoverImage = (projectId: string) => {
            switch (projectId) {
              case 'solar-panel-soiling':
                return '/images/research/solar-panel-soiling_cover.avif';
              case 'depression-mathematical-model':
                return '/images/research/depression-mathematical-model_cover.png';
              case 'hydrogel-irrigation-study':
                return '/images/research/hydrogel-irrigation-study_cover.png';
              case 'prey-predator-mathematical-model':
                return '/images/research/prey-predator-mathematical-model_cover.png';
              default:
                return `/images/research/${projectId}_cover.png`;
            }
          };
          const imagePath = getCoverImage(project.id);
          
          return (
            <Card
              key={index}
              as="a"
              href={`/research/non-major/${project.id}`}
              padding="0"
              radius="m"
              shadow="m"
              style={{ 
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
            >
              <Row gap="0" vertical="stretch" s={{ direction: "column" }}>
                {isEven && (
                  <div style={{
                    width: "200px",
                    height: "200px",
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
                <Column padding="l" gap="m" flex={1}>
                  <Heading variant="heading-strong-l">{project.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Date:</strong> {project.date}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Location:</strong> {project.location}
                  </Text>
                  <Text variant="body-default-m" marginTop="m">
                    {project.summary}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" marginTop="m" style={{ fontStyle: "italic" }}>
                    Click to read more →
                  </Text>
                </Column>
                {!isEven && (
                  <div style={{
                    width: "200px",
                    height: "200px",
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
