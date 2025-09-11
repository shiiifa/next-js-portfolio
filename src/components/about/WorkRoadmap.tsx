"use client";

import { useState } from "react";
import { Column, Row, Text, Heading } from "@once-ui-system/core";
import { about, iconLibrary } from "@/resources";
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
      {/* Journey Path SVG */}
      <svg className={styles.journeyPath} viewBox="0 0 200 400" preserveAspectRatio="none">
        <path
          d="M 20 50 Q 40 100 20 150 Q 0 200 20 250 Q 40 300 20 350"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
        />
      </svg>
      
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
            {/* Timeline Icon - Only show on first experience */}
            {index === 0 && (
              <div className={styles.timelineIcon}>
                {iconLibrary.briefcase({ size: 24, color: "white" })}
              </div>
            )}
            
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
