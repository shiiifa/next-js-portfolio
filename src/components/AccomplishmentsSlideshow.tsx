"use client";

import { useState, useEffect } from "react";
import { Card, Text, Row, Column, Icon, Button } from "@once-ui-system/core";
import { Accomplishment } from "@/types";

interface AccomplishmentsSlideshowProps {
  accomplishments: Accomplishment[];
}

const typeIcons: Record<string, string> = {
  award: "trophy",
  role: "briefcase",
  presentation: "presentation",
  admission: "graduation-cap",
  achievement: "star",
};

const typeColors: Record<string, "brand-strong" | "success-strong" | "warning-strong" | "info-strong" | "neutral-strong"> = {
  award: "brand-strong",
  role: "success-strong",
  presentation: "warning-strong",
  admission: "info-strong",
  achievement: "neutral-strong",
};

export function AccomplishmentsSlideshow({ accomplishments }: AccomplishmentsSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % accomplishments.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [accomplishments.length]);

  if (accomplishments.length === 0) return null;

  const currentAccomplishment = accomplishments[currentIndex];

  return (
    <Column fillWidth gap="16" align="center">
      <Card
        background="neutral-alpha-weak"
        border="neutral-alpha-medium"
        padding="20"
        fillWidth
        maxWidth="s"
        radius="l"
      >
        <Column gap="12" align="center">
          <Row gap="8" vertical="center">
            <Icon 
              name={typeIcons[currentAccomplishment.type] as any} 
              size="s"
              onBackground={typeColors[currentAccomplishment.type]}
            />
            <Text 
              variant="label-default-s" 
              onBackground={typeColors[currentAccomplishment.type]}
              weight="default"
            >
              {currentAccomplishment.type.toUpperCase()}
            </Text>
          </Row>
          
          <Text 
            variant="heading-strong-s" 
            align="center"
            wrap="balance"
          >
            {currentAccomplishment.title}
          </Text>
          
          <Text 
            variant="body-default-s" 
            align="center"
            onBackground="neutral-medium"
            wrap="balance"
          >
            {currentAccomplishment.description}
          </Text>
          
          <Text 
            variant="label-default-xs" 
            onBackground="neutral-weak"
            weight="default"
          >
            {currentAccomplishment.date}
          </Text>
        </Column>
      </Card>

      {/* Slide indicators */}
      <Row gap="8" vertical="center">
        {accomplishments.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor: index === currentIndex ? "#3b82f6" : "#e5e7eb",
              transition: "background-color 0.2s ease",
            }}
          />
        ))}
      </Row>
    </Column>
  );
}
