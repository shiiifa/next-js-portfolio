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
      <Column fillWidth flex={1} gap="40" align="center" style={{ minHeight: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Heading variant="heading-strong-xl" align="center">
          Coming soon!
        </Heading>
      </Column>
    </Column>
  );
}
