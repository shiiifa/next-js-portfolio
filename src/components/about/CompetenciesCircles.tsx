"use client";

import { useState } from "react";
import { Column, Row, Text, Heading } from "@once-ui-system/core";
import { about, iconLibrary } from "@/resources";
import styles from "./CompetenciesCircles.module.scss";

interface Competency {
  title: string;
  description?: React.ReactNode;
  tags?: Array<{ name: string; icon?: string }>;
}

interface CompetenciesCirclesProps {
  competencies: Competency[];
}

// Map competency titles to appropriate video files
const getCompetencyVideo = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('hardware') || titleLower.includes('fpga') || titleLower.includes('embedded')) {
    return '/videos/1.mp4'; // Hardware video
  } else if (titleLower.includes('programming') || titleLower.includes('code')) {
    return '/videos/2.mp4'; // Programming video
  } else if (titleLower.includes('tools') || titleLower.includes('software')) {
    return '/videos/3.mp4'; // Tools video
  }
  return '/videos/1.mp4'; // Default fallback
};

export default function CompetenciesCircles({ competencies }: CompetenciesCirclesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Add safety check for competencies
  if (!competencies || competencies.length === 0) {
    return null;
  }

  return (
    <div className={styles.competenciesContainer}>
      {competencies.map((competency, index) => {
          if (!competency || !competency.title) {
            return null;
          }
          
          return (
            <div
              key={`${competency.title}-${index}`}
              className={styles.competencyItem}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Circle with Video */}
              <div className={`${styles.competencyCircle} ${hoveredIndex === index ? styles.hovered : ''}`}>
                <video
                  className={styles.competencyVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={getCompetencyVideo(competency.title)} type="video/mp4" />
                </video>
              </div>
              
              {/* Text underneath the circle */}
              <Column align="center" gap="s" marginTop="m">
                <Heading variant="heading-strong-s" align="center">
                  {competency.title}
                </Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  {competency.description || "No description available"}
                </Text>
              </Column>
            </div>
          );
        })}
    </div>
  );
}