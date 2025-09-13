import { Column, Heading, Meta, Schema, Card, Text, Row, Line } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        {/* News Section */}
        <Column fillWidth gap="24">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth vertical="center" gap="16">
            <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
              Latest News
            </Heading>
            <Text variant="label-default-s" onBackground="brand-medium">
              <a href="/blog/news" style={{ textDecoration: 'none', color: 'inherit' }}>
                View all news →
              </a>
            </Text>
          </Row>
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

        {/* Blog Posts Section */}
        <Column fillWidth gap="24">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
            Recent Posts
          </Heading>
          <Posts range={[1, 1]} thumbnail />
          <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
          <Mailchimp marginBottom="l" />
          <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
            Earlier posts
          </Heading>
          <Posts range={[4]} columns="2" />
        </Column>
      </Column>
    </Column>
  );
}
