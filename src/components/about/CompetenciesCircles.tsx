"use client";

import { Column, Row, Text, Heading } from "@once-ui-system/core";
import { about } from "@/resources";
import styles from "./CompetenciesCircles.module.scss";

interface Competency {
  title: string;
  description?: React.ReactNode;
  tags?: Array<{ name: string; icon: string }>;
}

interface CompetenciesCirclesProps {
  competencies: Competency[];
}

export default function CompetenciesCircles({ competencies }: CompetenciesCirclesProps) {
  return (
    <div className={styles.competenciesContainer}>
      <Row gap="xl" horizontal="center" wrap>
        {competencies.map((competency, index) => (
          <Column key={`${competency.title}-${index}`} gap="m" align="center" className={styles.competencyItem}>
            {/* Circle */}
            <div className={styles.competencyCircle}>
              <Text variant="heading-strong-m" className={styles.circleText}>
                {competency.title.charAt(0)}
              </Text>
            </div>
            
            {/* Text Box */}
            <div className={styles.textBox}>
              <Heading variant="heading-strong-s" align="center" marginBottom="s">
                {competency.title}
              </Heading>
              <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                {competency.description || "No description available"}
              </Text>
            </div>
          </Column>
        ))}
      </Row>
    </div>
  );
}
