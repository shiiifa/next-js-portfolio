"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  Column,
  Row,
  Text,
  Heading,
  Badge,
  Icon,
} from "@once-ui-system/core";

interface Accomplishment {
  id: string;
  title: string;
  description: string;
  type: "role" | "award" | "conference" | "education" | "achievement";
  date: string;
  icon?: string;
}

interface AccomplishmentsSlideshowProps {
  accomplishments: Accomplishment[];
  autoPlay?: boolean;
  interval?: number;
}

const getTypeIcon = (type: Accomplishment["type"]) => {
  switch (type) {
    case "role":
      return "briefcase";
    case "award":
      return "trophy";
    case "conference":
      return "presentation";
    case "education":
      return "graduation-cap";
    case "achievement":
      return "star";
    default:
      return "star";
  }
};

const getTypeColor = (type: Accomplishment["type"]) => {
  switch (type) {
    case "role":
      return "brand-strong";
    case "award":
      return "warning-strong";
    case "conference":
      return "success-strong";
    case "education":
      return "info-strong";
    case "achievement":
      return "brand-medium";
    default:
      return "neutral-strong";
  }
};

export function AccomplishmentsSlideshow({
  accomplishments,
  autoPlay = true,
  interval = 4000,
}: AccomplishmentsSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || accomplishments.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accomplishments.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, accomplishments.length]);

  if (accomplishments.length === 0) return null;

  const currentAccomplishment = accomplishments[currentIndex];

  return (
    <Column fillWidth gap="m" paddingX="l">
      <Row fillWidth horizontal="center" paddingBottom="s">
        <Heading as="h2" variant="heading-strong-m" wrap="balance">
          Recent Accomplishments
        </Heading>
      </Row>
      
      <Column
        fillWidth
        background="neutral-alpha-weak"
        border="neutral-alpha-medium"
        radius="l"
        padding="l"
        gap="m"
        horizontal="center"
        align="center"
        style={{ minHeight: "120px" }}
      >
        <Row gap="m" vertical="center" horizontal="center">
          <Icon
            name={getTypeIcon(currentAccomplishment.type)}
            size="m"
            onBackground={getTypeColor(currentAccomplishment.type)}
          />
          <Badge
            background={`${getTypeColor(currentAccomplishment.type)}-alpha-weak`}
            onBackground={getTypeColor(currentAccomplishment.type)}
            textVariant="label-default-s"
            paddingX="s"
            paddingY="2"
          >
            {currentAccomplishment.type.charAt(0).toUpperCase() + currentAccomplishment.type.slice(1)}
          </Badge>
        </Row>
        
        <Column gap="s" horizontal="center" align="center" maxWidth="s">
          <Heading as="h3" variant="heading-strong-s" wrap="balance" textAlign="center">
            {currentAccomplishment.title}
          </Heading>
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            wrap="balance"
            textAlign="center"
          >
            {currentAccomplishment.description}
          </Text>
          <Text
            variant="label-default-xs"
            onBackground="neutral-medium"
            textAlign="center"
          >
            {currentAccomplishment.date}
          </Text>
        </Column>
      </Column>

      {accomplishments.length > 1 && (
        <Row gap="s" horizontal="center">
          {accomplishments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: index === currentIndex ? "var(--color-brand-strong)" : "var(--color-neutral-alpha-medium)",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              aria-label={`Go to accomplishment ${index + 1}`}
            />
          ))}
        </Row>
      )}
    </Column>
  );
}
