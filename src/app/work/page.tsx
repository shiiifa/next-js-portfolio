import { Column, Heading, Meta, Schema, Text, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      
      {/* Engineering Projects Section */}
      <Column marginBottom="xl" paddingX="l">
        <Heading marginBottom="m" variant="heading-strong-l">
          Engineering Projects
        </Heading>
        <Text marginBottom="m" variant="body-default-l">
          If it's stressful, but fun; keeps you up all night, but extremely rewarding, then it's probably an engineering project. I'm excited to share projects I've worked on with practical applications in embedded systems, signals processing, and much more!
        </Text>
        <Text variant="body-default-m">
          <SmartLink href="#engineering-projects">Explore my engineering projects here!</SmartLink>
        </Text>
      </Column>

      {/* Computer Science Projects Section */}
      <Column marginBottom="xl" paddingX="l">
        <Heading marginBottom="m" variant="heading-strong-l">
          Computer Science Projects
        </Heading>
        <Text marginBottom="m" variant="body-default-l">
          I've always been pulled towards logical, and algorithmic type thinking. Low-level programming in C++, C, and recently, VHDL, coupled with scientific programming in Python or MATLAB, have been my avenues for exercising this interest.
        </Text>
        <Text variant="body-default-m">
          <SmartLink href="#computer-science-projects">Explore my computer science projects here!</SmartLink>
        </Text>
      </Column>

      <Projects />
    </Column>
  );
}
