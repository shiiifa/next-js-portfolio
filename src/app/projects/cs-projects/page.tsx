import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "CS Projects - Obed Allotey Babington",
    description: "Computer Science and Deep Learning projects by Obed Allotey Babington",
    path: "/projects/cs-projects",
    baseURL,
  });
}

export default function CSProjects() {
  const csProjectsList = [
    {
      id: "automatic-speech-recognition-asante-twi",
      title: "Automatic Speech Recognition System for Asante Twi",
      date: "Nov 2024 - Dec 2024",
      technologies: "Python, TensorFlow/Keras, MFCCs, LSTMs, Sequence-to-Sequence Models, Adam Optimizer, Hugging Face Spaces",
      summary: "Developed an ASR system for Asante Twi, a Ghanaian language with limited digital resources, achieving CER of 0.0714 and WER of 0.20 on curated test samples.",
      description: "For our CS464 Deep Learning final project, my teammate and I developed an Automatic Speech Recognition (ASR) system for Asante Twi, a Ghanaian language with very limited digital resources. Our objective was to build a model capable of converting spoken Twi into accurate text transcriptions, evaluated by Character Error Rate (CER) and Word Error Rate (WER).",
      achievements: [
        "Built a sequence-to-sequence LSTM-based encoder–decoder model from scratch using MFCC features",
        "Achieved strong baseline performance with CER of 0.0714 and WER of 0.20 on curated test samples",
        "Deployed the model on Hugging Face Spaces for public interaction and testing",
        "Demonstrated the feasibility of deep learning for low-resource languages like Asante Twi"
      ],
      link: {
        url: "https://huggingface.co/spaces/sedemkofi/twi-transcription",
        text: "Deployed Model on Hugging Face"
      }
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
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
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/cs-projects"
        title="CS Projects"
        description="Computer Science and Deep Learning projects by Obed Allotey Babington"
        image={`/api/og/generate?title=${encodeURIComponent("CS Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Row marginBottom="l" align="center" gap="s">
        <Text 
          as="a" 
          href="/projects" 
          variant="body-default-s"
          style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
        >
          ← Back to Projects
        </Text>
      </Row>

      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          CS Projects
        </Heading>
        <Text variant="body-default-l" align="center">
          Computer Science and Deep Learning projects exploring AI, machine learning, and natural language processing.
        </Text>
      </Column>

      {/* CS Projects - Grid Layout */}
      <div className="grid-container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem"
      }}>
        {csProjectsList.map((project, index) => (
          <Card
            key={index}
            as="a"
            href={`/projects/cs-projects/${project.id}`}
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
              <Image
                src="/images/projects/speech-recognition.jpg"
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            {/* Content below image */}
            <Column gap="s" padding="l">
              <Heading variant="heading-strong-m">{project.title}</Heading>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>Date:</strong> {project.date}
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>Technologies:</strong> {project.technologies}
              </Text>
              <Text variant="body-default-s" marginTop="s">{project.summary}</Text>
              {project.link && (
                <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="s">
                  <strong>Link:</strong> <Text as="a" href={project.link.url} target="_blank" style={{ color: "var(--brand-medium)", textDecoration: "none" }}>{project.link.text}</Text>
                </Text>
              )}
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
