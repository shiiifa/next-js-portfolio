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

// Map competency titles to appropriate icons
const getCompetencyIcon = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('hardware') || titleLower.includes('fpga') || titleLower.includes('embedded')) {
    return 'code'; // Hardware/FPGA icon
  } else if (titleLower.includes('programming') || titleLower.includes('code')) {
    return 'code'; // Programming icon
  } else if (titleLower.includes('tools') || titleLower.includes('software')) {
    return 'code'; // Tools icon
  }
  return 'code'; // Default fallback
};

export default function CompetenciesCircles({ competencies }: CompetenciesCirclesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.competenciesContainer}>
      <Row gap="xl" horizontal="center" wrap>
        {competencies.map((competency, index) => (
          <div
            key={`${competency.title}-${index}`}
            className={styles.competencyItem}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Circle with Icon */}
            <div className={`${styles.competencyCircle} ${hoveredIndex === index ? styles.hovered : ''}`}>
              {iconLibrary[getCompetencyIcon(competency.title)]({ size: 32, color: "white" })}
            </div>
            
            {/* Hover Tooltip */}
            {hoveredIndex === index && (
              <div className={styles.hoverTooltip}>
                <Heading variant="heading-strong-s" align="center" marginBottom="s">
                  {competency.title}
                </Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  {competency.description || "No description available"}
                </Text>
              </div>
            )}
          </div>
        ))}
      </Row>
    </div>
  );
}