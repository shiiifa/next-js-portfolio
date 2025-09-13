"use client";

import { useState, useEffect } from "react";
import { Card, Text, Row, Column, Icon, Button } from "@once-ui-system/core";
import { NewsItem } from "@/types";

interface NewsSlideshowProps {
  newsItems: NewsItem[];
}

const typeIcons: Record<string, string> = {
  announcement: "megaphone",
  update: "refresh",
  achievement: "trophy",
  milestone: "flag",
  news: "newspaper",
};

const typeColors: Record<string, "brand-strong" | "success-strong" | "warning-strong" | "info-strong" | "neutral-strong"> = {
  announcement: "brand-strong",
  update: "info-strong",
  achievement: "success-strong",
  milestone: "warning-strong",
  news: "neutral-strong",
};

export function NewsSlideshow({ newsItems }: NewsSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [newsItems.length]);

  if (newsItems.length === 0) return null;

  const currentNewsItem = newsItems[currentIndex];

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
              name={typeIcons[currentNewsItem.type] as any} 
              size="s"
              onBackground={typeColors[currentNewsItem.type]}
            />
            <Text 
              variant="label-default-s" 
              onBackground={typeColors[currentNewsItem.type]}
              weight="default"
            >
              {currentNewsItem.type.toUpperCase()}
            </Text>
          </Row>
          
          <Text 
            variant="heading-strong-s" 
            align="center"
            wrap="balance"
          >
            {currentNewsItem.title}
          </Text>
          
          <Text 
            variant="body-default-s" 
            align="center"
            onBackground="neutral-medium"
            wrap="balance"
          >
            {currentNewsItem.description}
          </Text>
          
          <Text 
            variant="label-default-xs" 
            onBackground="neutral-weak"
            weight="default"
          >
            {currentNewsItem.date}
          </Text>
        </Column>
      </Card>

      {/* Slide indicators */}
      <Row gap="8" vertical="center">
        {newsItems.map((_, index) => (
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
