import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Aftgonosia - Career Development Initiative - Obed Allotey Babington",
    description: "Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents through self-discovery and career development workshops.",
    path: "/beyond-the-lab/aftgonosia-service-learning",
    baseURL,
  });
}

export default function AftgonosiaServiceLearning() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/aftgonosia-service-learning"
        title="Aftgonosia - Career Development Initiative"
        description="Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents"
        image={`/api/og/generate?title=${encodeURIComponent("Aftgonosia - Career Development Initiative")}`}
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
          Community Service Project • 2024
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
            src="/images/beyond-the-lab/aftgonosia.jpg"
            alt="Aftgonosia - Career Development Initiative"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          As part of a service–learning initiative, my team and I designed and implemented a project aimed at addressing the career-related anxieties and identity challenges faced by Ghanaian adolescents. Grounded in Erik Erikson's theory of psychosocial development, we recognized adolescence as a pivotal stage where identity formation intersects with career decision-making, often creating stress and uncertainty.
        </Text>

        <Text variant="body-default-l">
          This challenge is heightened by socioeconomic disparities: students from lower-income backgrounds frequently lack access to the resources and mentorship that foster informed career exploration. To bridge this gap, we created a two-phased intervention model: first, guiding students in self-discovery through personality assessments and reflective exercises; second, supporting them in career development, aligning their strengths and values with possible career trajectories.
        </Text>

        {/* Project Approach */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Approach</Heading>
            <Text variant="body-default-m">
              <strong>Two-Phased Intervention Model:</strong> Created a structured approach combining self-discovery and career development phases to address identity formation and career decision-making challenges.
            </Text>
            <Text variant="body-default-m">
              <strong>School Partnerships:</strong> Partnered with two junior high schools to facilitate interactive workshops and provide direct support to students.
            </Text>
            <Text variant="body-default-m">
              <strong>Personality Assessment Integration:</strong> Incorporated self-assessment tools based on the OCEAN framework to help students understand their strengths and preferences.
            </Text>
            <Text variant="body-default-m">
              <strong>Reflective Learning:</strong> Designed reflective exercises to help students connect their personal values and aspirations with potential career paths.
            </Text>
          </Column>
        </Card>

        {/* Workshop Implementation */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Workshop Implementation</Heading>
            <Text variant="body-default-m">
              The interactive workshops included comprehensive components:
            </Text>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Self-assessment tools based on the OCEAN framework for personality evaluation
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Group discussions to explore career interests and aspirations collaboratively
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                One-on-one guidance sessions for personalized career exploration support
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Team presentations where students declared their findings and aspirations
              </li>
            </ul>
          </Column>
        </Card>

        {/* Key Achievements */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              As part of a service–learning initiative, my team and I designed and implemented a project aimed at addressing the career-related anxieties and identity challenges faced by Ghanaian adolescents. Grounded in Erik Erikson's theory of psychosocial development, we recognized adolescence as a pivotal stage where identity formation intersects with career decision-making, often creating stress and uncertainty.
            </Text>
            <Text variant="body-default-m">
              This challenge is heightened by socioeconomic disparities: students from lower-income backgrounds frequently lack access to the resources and mentorship that foster informed career exploration. To bridge this gap, we created a two-phased intervention model: first, guiding students in self-discovery through personality assessments and reflective exercises; second, supporting them in career development, aligning their strengths and values with possible career trajectories.
            </Text>
            <Text variant="body-default-m">
              We partnered with two junior high schools, where we facilitated interactive workshops that included self-assessment tools (based on the OCEAN framework), group discussions, and one-on-one guidance sessions. Students declared their findings in team presentations, fostering confidence in articulating personal strengths and aspirations.
            </Text>
            <Text variant="body-default-m">
              My role combined facilitation and project design, drawing on my interest in human behavior to connect psychological insight with social impact. Collaborating with my peers, I also contributed to stakeholder management—coordinating with school administrators, adapting workshop materials to context, and collecting post-program feedback.
            </Text>
            <Text variant="body-default-m">
              Through this experience, I strengthened my skills in active listening, facilitation, and stakeholder engagement, while deepening my appreciation of how targeted interventions can empower young people to make more informed, fulfilling decisions about their futures.
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
