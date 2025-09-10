"use client";

import { useState } from "react";
import { Column, Row, Text, Heading } from "@once-ui-system/core";
import { about } from "@/resources";
import styles from "./WorkRoadmap.module.scss";

interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  images?: any[];
}

interface WorkRoadmapProps {
  experiences: WorkExperience[];
}

export default function WorkRoadmap({ experiences }: WorkRoadmapProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.roadmapContainer}>
      {/* Roadmap Line */}
      <div className={styles.roadmapLine} />
      
      {/* Experience Points */}
      <div className={styles.experiencesContainer}>
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className={`${styles.experiencePoint} ${hoveredIndex === index ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {/* Timeline Dot */}
            <div className={styles.timelineDot}>
              <div className={styles.innerDot} />
            </div>
            
            {/* Experience Card */}
            <div className={`${styles.experienceCard} ${hoveredIndex === index ? styles.cardHovered : ''}`}>
              <div className={styles.cardContent}>
                <Row fillWidth horizontal="between" vertical="center" marginBottom="s">
                  <Heading variant="heading-strong-m">{experience.company}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {experience.timeframe}
                  </Text>
                </Row>
                
                <Text 
                  variant="body-default-s" 
                  onBackground="brand-weak" 
                  marginBottom="m"
                  className={styles.role}
                >
                  {experience.role}
                </Text>
                
                <Column gap="s" className={styles.achievements}>
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <Text
                      key={`${experience.company}-achievement-${achievementIndex}`}
                      variant="body-default-s"
                      className={styles.achievement}
                    >
                      {achievement}
                    </Text>
                  ))}
                </Column>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
