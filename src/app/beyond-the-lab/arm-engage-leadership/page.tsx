import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, beyondTheLab } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "ARM E(3)NGAGE Leadership - Beyond The Lab",
    description: "Research & Innovation Lead at Arm(E³)NGAGE Ashesi Student Club (2023-2024)",
    path: "/beyond-the-lab/arm-engage-leadership",
    baseURL,
  });
}

export default function ArmEngageLeadership() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/arm-engage-leadership"
        title="ARM E(3)NGAGE Leadership - Beyond The Lab"
        description="Research & Innovation Lead at Arm(E³)NGAGE Ashesi Student Club (2023-2024)"
        image={`/api/og/generate?title=${encodeURIComponent("ARM E(3)NGAGE Leadership")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

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

      {/* Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }} marginBottom="s">
          Leadership
        </Text>
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Research & Innovation Lead
        </Heading>
        <Text variant="body-default-l" align="center" style={{ fontWeight: "600" }}>
          Arm(E³)NGAGE Ashesi Student Club
        </Text>
        <Text variant="body-default-m" align="center" onBackground="neutral-weak" marginTop="s">
          2023 - 2024
        </Text>
      </Column>

      {/* Image Placeholder */}
      <Column paddingX="l" marginBottom="xl" align="center">
        <Card padding="l" radius="m" shadow="s" style={{ width: "100%", maxWidth: "600px" }}>
          <div style={{ 
            height: "300px", 
            backgroundColor: "#f5f5f5", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            borderRadius: "8px"
          }}>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
              Image Coming Soon
            </Text>
          </div>
        </Card>
      </Column>

      {/* Description */}
      <Column paddingX="l" marginBottom="xl">
        <Heading variant="heading-strong-l" marginBottom="m">
          About the Role
        </Heading>
        <Text variant="body-default-l" marginBottom="l">
          The Arm(E³)NGAGE Ashesi Student Club, a collaboration between ARM and Ashesi University, is responsible for educating Ashesi students on the world of IoT, Embedded systems, and their uses on ARM technology. In doing so, it hopes to foster innovation, entrepreneurship, and research using ARM products.
        </Text>
      </Column>

      {/* Key Achievements */}
      <Column paddingX="l" marginBottom="xl">
        <Heading variant="heading-strong-l" marginBottom="m">
          Key Achievements
        </Heading>
        
        <Card padding="l" radius="m" shadow="s" marginBottom="m">
          <Column gap="m">
            <Heading variant="heading-strong-m">Engineering Project Leadership</Heading>
            <Text variant="body-default-m">
              Led club engineering projects, notably an automated parking system. Responsibilities included conducting Arduino C coding workshops, introducing participants to GitHub for collaborative project development, and fostering algorithmic problem-solving skills. Additionally, I authored project documentation and problem design outlines.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="s">
          <Column gap="m">
            <Heading variant="heading-strong-m">Research Culture Development</Heading>
            <Text variant="body-default-m">
              Crafted a vibrant network of student researchers in engineering and computer science, leading to the production of five diverse research articles, and pioneering a research culture within the ARM E(3)NGAGE student club.
            </Text>
          </Column>
        </Card>
      </Column>

      {/* Impact */}
      <Column paddingX="l" marginBottom="xl">
        <Heading variant="heading-strong-l" marginBottom="m">
          Impact & Outcomes
        </Heading>
        <Text variant="body-default-l" marginBottom="m">
          Through my leadership role, I successfully:
        </Text>
        <Column gap="s" paddingLeft="l">
          <Text variant="body-default-m">• Conducted hands-on Arduino C coding workshops for club members</Text>
          <Text variant="body-default-m">• Introduced collaborative development practices using GitHub</Text>
          <Text variant="body-default-m">• Led the development of an automated parking system project</Text>
          <Text variant="body-default-m">• Authored comprehensive project documentation and design outlines</Text>
          <Text variant="body-default-m">• Built a network of student researchers across engineering and computer science</Text>
          <Text variant="body-default-m">• Facilitated the production of five diverse research articles</Text>
          <Text variant="body-default-m">• Established a sustainable research culture within the student club</Text>
        </Column>
      </Column>

      {/* Back Navigation */}
      <Column paddingX="l" marginBottom="xl" align="center">
        <Card 
          as="a" 
          href="/beyond-the-lab" 
          padding="m" 
          radius="m" 
          shadow="s"
          style={{ 
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            maxWidth: "200px"
          }}
        >
          <Text variant="body-default-m" align="center">
            ← Back to Beyond The Lab
          </Text>
        </Card>
      </Column>
    </Column>
  );
}
