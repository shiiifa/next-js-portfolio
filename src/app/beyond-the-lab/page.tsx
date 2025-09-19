import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, beyondTheLab } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: beyondTheLab.title,
    description: beyondTheLab.description,
    path: beyondTheLab.path,
    baseURL,
  });
}

export default function BeyondTheLab() {
  const leadershipList = [
    {
      id: "arm-engage-leadership",
      title: "Research & Innovation Lead, Arm(E³)NGAGE Ashesi Student Club",
      date: "2023 - 2024",
      category: "Leadership",
      summary: "Led club engineering projects and fostered a research culture, producing five diverse research articles and conducting Arduino C coding workshops.",
      description: "The Arm(E³)NGAGE Ashesi Student Club, a collaboration between ARM and Ashesi University, is responsible for educating Ashesi students on the world of IoT, Embedded systems, and their uses on ARM technology. In doing so, it hopes to foster innovation, entrepreneurship, and research using ARM products.",
      achievements: [
        "Led club engineering projects, notably an automated parking system. Responsibilities included conducting Arduino C coding workshops, introducing participants to GitHub for collaborative project development, and fostering algorithmic problem-solving skills. Additionally, I authored project documentation and problem design outlines.",
        "Crafted a vibrant network of student researchers in engineering and computer science, leading to the production of five diverse research articles, and pioneering a research culture within the ARM E(3)NGAGE student club."
      ]
    },
    {
      id: "ashesi-research-club-president",
      title: "President, Ashesi Research Club",
      date: "2023 - 2024",
      category: "Leadership",
      summary: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills.",
      description: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills to provide groundbreaking insights for developing innovative, industry-leading solutions for the continent.",
      achievements: [
        "Under the auspices of the provost's office, I co-oversaw the curation of the first-ever campus-wide research festival under the theme, \"Exploring New Horizons\" to celebrate student scholarship and innovation and ignite their passions for research and the opportunities it offers.",
        "Directed the development of workshops, championed research-driven projects, and supported student-led research proposals, resulting in enhanced academic engagement and increased research output on campus."
      ]
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={beyondTheLab.path}
        title={beyondTheLab.title}
        description={beyondTheLab.description}
        image={`/api/og/generate?title=${encodeURIComponent("Beyond The Lab")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Header */}
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

      <style dangerouslySetInnerHTML={{
        __html: `
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

      {/* Leadership Section */}
      <Column paddingX="l" gap="xl">
        <Heading variant="heading-strong-l" align="center" marginBottom="l">
          Leadership
        </Heading>
        
        {leadershipList.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <Card
              key={index}
              as="a"
              href={`/beyond-the-lab/${item.id}`}
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
                    alignSelf: "stretch",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  </div>
                )}
                
                {/* Content */}
                <Column gap="m" padding="l" flex={1}>
                  <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
                    {item.category}
                  </Text>
                  <Heading variant="heading-strong-l">{item.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    <strong>Duration:</strong> {item.date}
                  </Text>
                  <Text variant="body-default-m" marginTop="m">{item.summary}</Text>
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
                    alignSelf: "stretch",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
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
