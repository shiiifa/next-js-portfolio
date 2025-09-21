import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "MSmiles - STEM Curriculum Design - Obed Allotey Babington",
    description: "Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children as a STEM Curriculum Design Associate with Smiles non-profit.",
    path: "/beyond-the-lab/msmiles-stem-curriculum",
    baseURL,
  });
}

export default function MSmilesSTEMCurriculum() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/msmiles-stem-curriculum"
        title="MSmiles - STEM Curriculum Design"
        description="Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children"
        image={`/api/og/generate?title=${encodeURIComponent("MSmiles - STEM Curriculum Design")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Row marginBottom="l" align="center" gap="s">
        <Icon name="arrowRight" style={{ transform: "rotate(180deg)" }} />
        <Text 
          as="a" 
          href="/beyond-the-lab" 
          variant="body-default-s"
          style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
        >
          Back to Beyond the Lab
        </Text>
      </Row>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Education & Mentorship • 2022
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" align="center">
        <div style={{ 
          position: "relative", 
          width: "100%", 
          maxWidth: "600px", 
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/beyond-the-lab/msmiles.jpg"
            alt="MSmiles - STEM Curriculum Design"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          As a STEM Curriculum Design Associate with Smiles, a non-profit dedicated to the holistic development of orphans, I contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children. My role involved researching relevant topics, structuring lesson plans, and iteratively testing and refining content to ensure accessibility and long-term retention.
        </Text>

        <Text variant="body-default-l">
          I also facilitated interactive teaching sessions that emphasized curiosity, creativity, and problem-solving. Notably, I designed the STEM curriculum for the Smiles Launch at Christ Faith Foster Home in Accra, Ghana, where I guided students through a hands-on design challenge to introduce them to design thinking.
        </Text>

        {/* Role & Responsibilities */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Role & Responsibilities</Heading>
            <Text variant="body-default-m">
              <strong>Curriculum Development:</strong> Researched relevant STEM topics and structured comprehensive lesson plans tailored for orphaned children's unique learning needs.
            </Text>
            <Text variant="body-default-m">
              <strong>Content Refinement:</strong> Iteratively tested and refined educational content to ensure accessibility and long-term retention for students.
            </Text>
            <Text variant="body-default-m">
              <strong>Interactive Teaching:</strong> Facilitated engaging teaching sessions that emphasized curiosity, creativity, and problem-solving skills.
            </Text>
            <Text variant="body-default-m">
              <strong>Design Thinking Integration:</strong> Introduced design thinking principles through hands-on challenges and practical applications.
            </Text>
          </Column>
        </Card>

        {/* Key Project - Smiles Launch */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Smiles Launch at Christ Faith Foster Home</Heading>
            <Text variant="body-default-m">
              The flagship implementation of our STEM curriculum took place at Christ Faith Foster Home in Accra, Ghana. This comprehensive program included:
            </Text>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Custom-designed STEM curriculum specifically tailored for the foster home environment
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Hands-on design challenges to introduce students to design thinking methodology
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Interactive sessions emphasizing practical problem-solving and creative thinking
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Student-centered learning approaches adapted to individual needs and backgrounds
              </li>
            </ul>
          </Column>
        </Card>

        {/* Key Achievements */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Designed the STEM curriculum for the Smiles Launch at Christ Faith Foster Home in Accra, Ghana
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Guided students through hands-on design challenges to introduce them to design thinking principles
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Facilitated interactive teaching sessions emphasizing curiosity, creativity, and problem-solving
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Strengthened skills in curriculum design, research, and facilitation while deepening commitment to STEM education as a tool for empowerment
              </li>
            </ul>
          </Column>
        </Card>

        {/* Impact & Learning */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Impact & Learning</Heading>
            <Text variant="body-default-m">
              This experience not only strengthened my skills in curriculum design, research, and facilitation, but also deepened my commitment to using STEM education as a tool for empowerment and social change.
            </Text>
            <Text variant="body-default-m">
              Working with orphaned children provided unique insights into the transformative power of education and the importance of creating inclusive, engaging learning environments that inspire curiosity and build confidence in students from diverse backgrounds.
            </Text>
          </Column>
        </Card>
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
    </Column>
  );
}
