import { Column, Heading, Meta, Schema, Card, Text, Row, Line } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "News & Achievements",
    description: "Latest news, achievements, and milestones in my academic and professional journey",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("News & Achievements")}`,
    path: "/blog/news",
  });
}

export default function News() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="News & Achievements"
        description="Latest news, achievements, and milestones in my academic and professional journey"
        path="/blog/news"
        image={`/api/og/generate?title=${encodeURIComponent("News & Achievements")}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        News & Achievements
      </Heading>
      <Column fillWidth flex={1} gap="40">
        {/* Featured News */}
        <Column fillWidth gap="24">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
            Latest News
          </Heading>
          <Card
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            padding="24"
            fillWidth
            radius="l"
            href="/work/building-once-ui-a-customizable-design-system"
          >
            <Column gap="16">
              <Row gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="brand-strong" weight="default">
                  NEWS
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  August 2025
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-l">
                Latest News & Achievements
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Exciting updates on my academic journey, research achievements, and professional milestones including Stanford PhD admission, technical excellence award, and research publications.
              </Text>
              <Text variant="label-default-s" onBackground="brand-medium">
                Read full news →
              </Text>
            </Column>
          </Card>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>

        {/* All News Items */}
        <Column fillWidth gap="24">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
            All News
          </Heading>
          
          {/* Stanford PhD Admission */}
          <Card
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            padding="20"
            fillWidth
            radius="l"
          >
            <Column gap="12">
              <Row gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="success-strong" weight="default">
                  ADMISSION
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  April 2025
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                🎓 Stanford University PhD Admission
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                Thrilled to share that I've been accepted to Stanford University's Computer Science PhD program with full funding! This is a dream come true and represents the next major step in my academic journey.
              </Text>
            </Column>
          </Card>

          {/* Technical Excellence Award */}
          <Card
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            padding="20"
            fillWidth
            radius="l"
          >
            <Column gap="12">
              <Row gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="brand-strong" weight="default">
                  AWARD
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  May 2025
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                🏆 Technical Excellence Award
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                Honored to receive the Computer Engineering Technical Excellence Award for my work on FPGA neural network acceleration research. This recognition validates the impact of my research.
              </Text>
            </Column>
          </Card>

          {/* Conference Presentation */}
          <Card
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            padding="20"
            fillWidth
            radius="l"
          >
            <Column gap="12">
              <Row gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="warning-strong" weight="default">
                  PRESENTATION
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  June 2025
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                🎤 IEEE Conference Presentation
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                Presented my research findings at the IEEE Embedded Systems Conference on hardware acceleration strategies. The presentation covered my work on FPGA-based neural network inference.
              </Text>
            </Column>
          </Card>

          {/* Research Publication */}
          <Card
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            padding="20"
            fillWidth
            radius="l"
          >
            <Column gap="12">
              <Row gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="info-strong" weight="default">
                  PUBLICATION
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  March 2025
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                📚 IEEE Transactions Publication
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                Our paper on FPGA-based neural network acceleration has been published in IEEE Transactions. This publication represents a significant milestone in my research career.
              </Text>
            </Column>
          </Card>

          {/* New Research Position */}
          <Card
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            padding="20"
            fillWidth
            radius="l"
          >
            <Column gap="12">
              <Row gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="success-strong" weight="default">
                  ROLE
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  August 2025
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                🔬 New Research Position
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                Excited to announce my new role as Research Assistant at Smart Technologies Lab, focusing on embedded machine learning solutions. This position allows me to continue pushing the boundaries of AI deployment.
              </Text>
            </Column>
          </Card>

          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
