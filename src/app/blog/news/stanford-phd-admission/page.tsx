import { Column, Heading, Meta, Schema, Text, Card, Media, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Stanford University PhD Admission",
    description: "Thrilled to be accepted to Stanford University's Computer Science PhD program with full funding, focusing on embedded machine learning and hardware acceleration research.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Stanford University PhD Admission")}`,
    path: "/blog/news/stanford-phd-admission",
  });
}

export default function StanfordPhDAdmission() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/blog/news" label="Back to News & Achievements" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/blog/news/stanford-phd-admission"
        title={`Stanford University PhD Admission – ${person.name}`}
        description="Thrilled to be accepted to Stanford University's Computer Science PhD program with full funding, focusing on embedded machine learning and hardware acceleration research."
        image={`/api/og/generate?title=${encodeURIComponent("Stanford University PhD Admission")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Stanford University PhD Admission
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> April 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Category:</strong> Academic
        </Text>
        <Text variant="body-default-l" align="center">
          Thrilled to be accepted to Stanford University's Computer Science PhD program with full funding, focusing on embedded machine learning and hardware acceleration research.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="Stanford University PhD Program"
          src="/images/research/fpga-neural-networks_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Admission Details</Heading>
            <Text variant="body-default-m">
              Thrilled to share that I have been accepted to Stanford University's Computer Science PhD program with full funding! This is a dream come true and represents the next major step in my academic journey.
            </Text>
            <Text variant="body-default-m">
              I will be focusing on embedded machine learning and hardware acceleration research, building upon the foundation I've established through my undergraduate work at Ashesi University.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Focus</Heading>
            <Text variant="body-default-m">
              My PhD research will focus on advancing the field of embedded machine learning, particularly exploring new architectures and optimization techniques for deploying AI models on resource-constrained devices.
            </Text>
            <Text variant="body-default-m">
              I'm particularly excited about the opportunity to work with Stanford's world-class faculty and research facilities to push the boundaries of what's possible in hardware-accelerated AI systems.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Academic Journey</Heading>
            <Text variant="body-default-m">
              This admission represents the culmination of years of hard work, dedication, and passion for computer science and engineering. From my early days at Ashesi University to my capstone project that earned the Technical Excellence Award, every step has prepared me for this next chapter.
            </Text>
            <Text variant="body-default-m">
              I'm grateful for the support of my mentors, professors, and the Ashesi community that has helped shape my academic and research journey.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Future Goals</Heading>
            <Text variant="body-default-m">
              At Stanford, I hope to contribute to groundbreaking research in embedded machine learning while developing the skills and knowledge needed to become a leading researcher in the field.
            </Text>
            <Text variant="body-default-m">
              I'm excited about the potential to make AI more accessible and efficient through innovative hardware-software co-design approaches, ultimately contributing to a more connected and intelligent world.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}

