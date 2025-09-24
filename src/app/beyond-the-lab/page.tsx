import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, beyondTheLab } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: beyondTheLab.title,
    description: beyondTheLab.description,
    path: beyondTheLab.path,
    baseURL,
  });
}

export default function BeyondTheLab() {
  const leadershipList = [
    {
      id: "tedx-ashesi-speaker",
      title: "TEDx Ashesi University Speaker",
      date: "2022",
      category: "Public Speaking",
      summary: "Delivered a TEDx talk on quantum physics and the role of wandering in the realm of the unknown, exploring the importance of self-expression in society.",
      description: "Quantum Physics has always intrigued Obed and the exploration of the world beyond what meets the eye is something he is extremely passionate about. As an Electrical/Electronic Engineering student of Ashesi University, he believes that when the suppression of the willful expression of the self leads to the degradation of society. He loves to use every opportunity he can get to create meaning in people's lives through self-expression.",
      achievements: [
        "Delivered an inspiring TEDx talk that explored the intersection of quantum physics and personal expression, demonstrating the power of curiosity and intellectual wandering.",
        "Addressed a diverse audience about the importance of maintaining authentic self-expression in society and its impact on collective progress.",
        "Contributed to the TEDx Ashesi University community by sharing insights on navigating the unknown and finding meaning through exploration."
      ],
      youtubeVideoId: "l7cPJzOKZcE"
    },
    {
      id: "arm-engage-leadership",
      title: "Research & Innovation Lead, Arm(E³)NGAGE Ashesi Student Club",
      date: "2023 - 2024",
      category: "Leadership",
      summary: "Led club engineering projects and fostered a research culture, producing five diverse research articles and conducting Arduino C coding workshops.",
      description: "The Arm(E³)NGAGE Ashesi Student Club, a collaboration between ARM and Ashesi University, is responsible for educating Ashesi students on the world of IoT, Embedded systems, and their uses on ARM technology. In doing so, it hopes to foster innovation, entrepreneurship, and research using ARM products.",
      achievements: [
        "Led club engineering projects, notably an automated parking system. Responsibilities included conducting Arduino C coding workshops, introducing participants to GitHub for collaborative project development, and fostering algorithmic problem-solving skills. Additionally, I authored project documentation and problem design outlines.",
        "Crafted a vibrant network of student researchers in engineering and computer science, leading to the production of five diverse research articles, and pioneering a research culture within the ARM E(3)NGAGE student club."
      ]
    },
    {
      id: "army-students-club-curator",
      title: "Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)",
      date: "2023",
      category: "Creative Management",
      summary: "Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills while supporting academic research dissemination.",
      description: "As part of the ARM-y Students' Club, I took on the role of curating and managing a network of student-developed research articles. This project involved developing editorial skills, content management strategies, and supporting the academic research community within the university.",
      achievements: [
        "Reviewed and selected high-quality student research articles for publication, ensuring academic rigor and relevance.",
        "Edited and refined articles to meet publication standards, developing strong editorial and content management skills.",
        "Developed content strategies and presentation approaches to enhance research dissemination within the university community.",
        "Fostered collaboration among student researchers, building a supportive academic network."
      ]
    },
    {
      id: "ashesi-research-club-president",
      title: "President, Ashesi Research Club",
      date: "2023 - 2024",
      category: "Leadership",
      summary: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills.",
      description: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills to provide groundbreaking insights for developing innovative, industry-leading solutions for the continent.",
      achievements: [
        "Under the auspices of the provost's office, I co-oversaw the curation of the first-ever campus-wide research festival under the theme, \"Exploring New Horizons\" to celebrate student scholarship and innovation and ignite their passions for research and the opportunities it offers.",
        "Directed the development of workshops, championed research-driven projects, and supported student-led research proposals, resulting in enhanced academic engagement and increased research output on campus."
      ]
    },
    {
      id: "aftgonosia-service-learning",
      title: "Aftgonosia - Career Development Initiative",
      date: "2024",
      category: "Community Service",
      summary: "Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents through self-discovery and career development workshops.",
      description: "As part of a service–learning initiative, my team and I designed and implemented a project aimed at addressing the career-related anxieties and identity challenges faced by Ghanaian adolescents. Grounded in Erik Erikson's theory of psychosocial development, we recognized adolescence as a pivotal stage where identity formation intersects with career decision-making, often creating stress and uncertainty.",
      achievements: [
        "Created a two-phased intervention model: self-discovery through personality assessments and career development alignment",
        "Partnered with two junior high schools to facilitate interactive workshops with self-assessment tools based on the OCEAN framework",
        "Conducted group discussions and one-on-one guidance sessions to support student career exploration",
        "Enabled students to present their findings in team presentations, fostering confidence in articulating personal strengths and aspirations"
      ]
    },
    {
      id: "msmiles-stem-curriculum",
      title: "MSmiles - STEM Curriculum Design",
      date: "2022",
      category: "Education & Mentorship",
      summary: "Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children as a STEM Curriculum Design Associate with Smiles non-profit.",
      description: "As a STEM Curriculum Design Associate with Smiles, a non-profit dedicated to the holistic development of orphans, I contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children. My role involved researching relevant topics, structuring lesson plans, and iteratively testing and refining content to ensure accessibility and long-term retention.",
      achievements: [
        "Designed the STEM curriculum for the Smiles Launch at Christ Faith Foster Home in Accra, Ghana",
        "Guided students through hands-on design challenges to introduce them to design thinking principles",
        "Facilitated interactive teaching sessions emphasizing curiosity, creativity, and problem-solving",
        "Strengthened skills in curriculum design, research, and facilitation while deepening commitment to STEM education as a tool for empowerment"
      ]
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" className="fixed-header-spacing" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={beyondTheLab.path}
        title={beyondTheLab.title}
        description={beyondTheLab.description}
        image={`/api/og/generate?title=${encodeURIComponent("Beyond The Lab")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Header */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-l" align="center" marginTop="m">
          When I am not tackling research or engineering projects, you will find me engaged in a plethora of other endeavors. Leadership, public speaking, community service, writing, you name it.
        </Text>
        <Text variant="body-default-l" align="center" marginTop="m">
          Here lies a more holistic representation of my world. Take a dive.
        </Text>
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
          
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .grid-container {
              padding: 0 1rem !important;
            }
          }
        `
      }} />

      {/* Leadership Section - Grid Layout */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem"
      }}>
        {leadershipList.map((item, index) => (
          <Card
            key={index}
            as="a"
            href={`/beyond-the-lab/${item.id}`}
            padding="0" 
            radius="m" 
            shadow="m"
            style={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* Square Image */}
            <div style={{ 
              position: "relative",
              width: "100%",
              height: "250px",
              backgroundColor: "#f5f5f5"
            }}>
              {item.id === "tedx-ashesi-speaker" && (
                <Image
                  src="/images/beyond-the-lab/tedx-ashesi-cover.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              {item.id === "army-students-club-curator" && (
                <Image
                  src="/images/projects/arm-y.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              {item.id === "aftgonosia-service-learning" && (
                <Image
                  src="/images/beyond-the-lab/aftgonosia.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              {item.id === "msmiles-stem-curriculum" && (
                <Image
                  src="/images/beyond-the-lab/msmiles.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              {!["tedx-ashesi-speaker", "army-students-club-curator", "aftgonosia-service-learning", "msmiles-stem-curriculum"].includes(item.id) && (
                <Image
                  src="/images/beyond-the-lab/default.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            
            {/* Content below image */}
            <Column gap="s" padding="l">
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
                {item.category}
              </Text>
              <Heading variant="heading-strong-m">{item.title}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Duration:</strong> {item.date}
              </Text>
              <Text variant="body-default-s" marginTop="s">{item.summary}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="s" style={{ fontStyle: "italic" }}>
                Click to read more →
              </Text>
            </Column>
          </Card>
        ))}
      </div>
    </Column>
  );
}
