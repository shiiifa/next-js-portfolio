import { Column, Heading, Meta, Schema, Card, Text, Row, Line } from "@once-ui-system/core";
import { Mailchimp, BackButton } from "@/components";
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
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out", position: "relative" }}>
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
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />
      
      <Column fillWidth flex={1} gap="40" align="center" style={{ minHeight: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Text variant="body-default-l" align="center">
          Coming soon!
        </Text>
      </Column>
    </Column>
  );
}
