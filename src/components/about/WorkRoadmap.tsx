"use client";

import React, { useState } from "react";
import { Column, Row, Text, Heading } from "@once-ui-system/core";
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
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className={`${styles.timelineItem} ${hoveredIndex === index ? styles.hovered : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline Node */}
            <div className={styles.timelineNode}>
              <div className={styles.nodeInner}>
                <div className={styles.nodeIcon}>
                  {iconLibrary.rocket({ size: 16 })}
                </div>
              </div>
            </div>

            {/* Timeline Content */}
            <div className={styles.timelineContent}>
              <div className={styles.contentCard}>
                <Row fillWidth horizontal="between" vertical="start" marginBottom="s">
                  <Column gap="xs">
                    <Text variant="heading-strong-m" className={styles.companyName}>
                      {experience.company}
                    </Text>
                    <Text variant="body-default-s" onBackground="brand-weak" className={styles.role}>
                      {experience.role}
                    </Text>
                  </Column>
                  <Text variant="body-default-xs" onBackground="neutral-weak" className={styles.timeframe}>
                    {experience.timeframe}
                  </Text>
                </Row>

                {/* Hover Details */}
                <div className={`${styles.hoverDetails} ${hoveredIndex === index ? styles.visible : ""}`}>
                  <Column gap="m">
                    <Text variant="body-default-s" onBackground="neutral-medium" className={styles.achievementsTitle}>
                      Key Achievements:
                    </Text>
                    <Column as="ul" gap="s" className={styles.achievementsList}>
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <Text
                          key={achievementIndex}
                          as="li"
                          variant="body-default-s"
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

            {/* Connecting Line */}
            {index < experiences.length - 1 && (
              <div className={styles.connectingLine} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
