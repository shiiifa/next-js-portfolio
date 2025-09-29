import { Column, Heading, Meta, Schema, Card, Text, Row, Line, Media, SmartLink } from "@once-ui-system/core";
import { Mailchimp, BackButton } from "@/components";
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
    <Column maxWidth="m" paddingTop="24" style={{ position: "relative" }}>
      {/* Back Button */}
      <BackButton href="/blog" label="Back to Blog" />
      
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
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">I won the Technical Excellence Award in Computer Engineering!</Heading>
            <Media
              aspectRatio="16 / 9"
              radius="m"
              alt="Technical Excellence Award announcement"
              src="/images/research/capstone_award.png"
            />
            <Row gap="m">
              <Media
                aspectRatio="3 / 4"
                radius="m"
                alt="With mom after awards announcement"
                src="/images/research/obed_mom.jpg"
              />
              <Media
                aspectRatio="3 / 4"
                radius="m"
                alt="Profile at Ashesi awards display"
                src="/images/research/obed_profile.jpg"
              />
            </Row>
            <Text variant="body-default-m">
              Every year at Ashesi University, one student who demonstrates exceptional technical skills and contributions within the field of Computer Engineering, evidenced through their final capstone project, is awarded the prestigious Technical Excellence Award in Computer Engineering.
            </Text>
            <Text variant="body-default-m">
              I remember seeing students receive this award annually and never particularly thinking I would do something markedly spectacular in my capstone to be 2025’s recipient. But as fate would have it, about a month after completing a public <SmartLink href="https://www.linkedin.com/posts/obed-babington_day100-100dayschallenge-ashesi-activity-7319614240070250496-0VPJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC0KYZMBSFS8Iay7cDvZn7p4eDGn5yD5oFo" target="_blank" rel="noopener noreferrer">100 days challenge</SmartLink> on my undergraduate thesis, “Hardware Accelerated Machine Learning with a Softcore Processor,” I received an email from the Provost office that my work had been adjudged the best by my department.
            </Text>
            <Text variant="body-default-m">
              While I missed the awards night ceremony to be in the USA for an internship, I am immensely honored to have received this award! You can check out the event coverage <SmartLink href="https://ashesi.edu.gh/celebrating-excellence-student-research-and-innovation/" target="_blank" rel="noopener noreferrer">here</SmartLink>, and watch my thesis defense <SmartLink href="https://youtu.be/J5wRpPMIeQA" target="_blank" rel="noopener noreferrer">here</SmartLink>.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
