"use client";

import React, { useState } from "react";
import { Column, Row, Text } from "@once-ui-system/core";
import { iconLibrary } from "@/resources";
import styles from "./work-roadmap.module.scss";

interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

interface WorkRoadmapProps {
  experiences: WorkExperience[];
}

export default function WorkRoadmap({ experiences }: WorkRoadmapProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.roadmapContainer}>
      <div className={styles.horizontalTimeline}>
        {/* Connecting Thread Line */}
        <div className={styles.threadLine} />
        
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className={`${styles.timelineItem} ${hoveredIndex === index ? styles.hovered : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Date Above Circle */}
            <div className={styles.dateContainer}>
              <Text variant="body-default-xs" className={styles.dateText}>
                {experience.timeframe}
              </Text>
            </div>

            {/* Circle Node */}
            <div className={styles.circleNode}>
              <div className={styles.circleInner}>
                <div className={styles.circleIcon}>
                  {iconLibrary.rocket({ size: 20 })}
                </div>
              </div>
            </div>

            {/* Work Experience Below Circle */}
            <div className={styles.experienceContainer}>
              <div className={styles.experienceCard}>
                <Text variant="heading-strong-s" className={styles.companyName}>
                  {experience.company}
                </Text>
                <Text variant="body-default-s" className={styles.role}>
                  {experience.role}
                </Text>

                {/* Hover Details */}
                <div className={`${styles.hoverDetails} ${hoveredIndex === index ? styles.visible : ""}`}>
                  <Column gap="s">
                    <Text variant="body-default-xs" className={styles.achievementsTitle}>
                      Key Achievements:
                    </Text>
                    <Column as="ul" gap="xs" className={styles.achievementsList}>
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <Text
                          key={achievementIndex}
                          as="li"
                          variant="body-default-xs"
                          className={styles.achievementItem}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
