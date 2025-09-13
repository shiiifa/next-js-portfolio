"use client";

import { useState, useEffect } from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Icon,
  Button,
  Card,
  Badge,
} from "@once-ui-system/core";
import { NewsItem } from "@/types";

interface NewsSlideshowProps {
  items: NewsItem[];
  maxItems?: number;
  autoPlay?: boolean;
  interval?: number;
}

const getTypeIcon = (type: NewsItem['type']): string => {
  switch (type) {
    case 'award':
      return 'trophy';
    case 'role':
      return 'briefcase';
    case 'conference':
      return 'presentation';
    case 'achievement':
      return 'star';
    case 'education':
      return 'academic-cap';
    default:
      return 'newspaper';
  }
};

const getTypeColor = (type: NewsItem['type']) => {
  switch (type) {
    case 'award':
      return 'brand-strong' as const;
    case 'role':
      return 'brand-medium' as const;
    case 'conference':
      return 'brand-weak' as const;
    case 'achievement':
      return 'brand-medium' as const;
    case 'education':
      return 'neutral-strong' as const;
    default:
      return 'neutral-strong' as const;
  }
};

export function NewsSlideshow({ 
  items, 
  maxItems = 3, 
  autoPlay = true, 
  interval = 5000 
}: NewsSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const displayedItems = items.slice(0, maxItems);

  useEffect(() => {
    if (!autoPlay || isHovered || displayedItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayedItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isHovered, displayedItems.length, interval]);

  if (displayedItems.length === 0) return null;

  const currentItem = displayedItems[currentIndex];

  return (
    <Column 
      fillWidth 
      gap="16" 
      paddingX="l"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <Row fillWidth justify="space-between" align="center">
        <Row gap="12" align="center">
          <Icon name="newspaper" size="s" onBackground="brand-strong" />
          <Heading variant="heading-strong-s">Latest News</Heading>
        </Row>
        {displayedItems.length > 1 && (
          <Row gap="8" align="center">
            {displayedItems.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="xs"
                onClick={() => setCurrentIndex(index)}
                background={index === currentIndex ? "brand-alpha-weak" : "transparent"}
                onBackground={index === currentIndex ? "brand-strong" : "neutral-medium"}
                paddingX="8"
                paddingY="4"
              >
                <div 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%',
                    backgroundColor: index === currentIndex ? 'currentColor' : 'transparent',
                    border: index === currentIndex ? 'none' : '1px solid currentColor'
                  }} 
                />
              </Button>
            ))}
          </Row>
        )}
      </Row>

      {/* News Item */}
      <Card
        fillWidth
        padding="16"
        background="neutral-alpha-weak"
        border="neutral-alpha-weak"
        radius="m"
      >
        <Row gap="12" align="start">
          <Icon 
            name={getTypeIcon(currentItem.type)} 
            size="s" 
            onBackground={getTypeColor(currentItem.type)}
          />
          <Column flex={1} gap="8">
            <Row gap="8" align="center" wrap>
              <Badge
                background="neutral-alpha-weak"
                onBackground={getTypeColor(currentItem.type)}
                textVariant="label-default-xs"
                paddingX="8"
                paddingY="2"
              >
                {currentItem.type.charAt(0).toUpperCase() + currentItem.type.slice(1)}
              </Badge>
              <Text variant="label-default-xs" onBackground="neutral-medium">
                {new Date(currentItem.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </Text>
            </Row>
            <Heading variant="heading-strong-xs" wrap="balance">
              {currentItem.title}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
              {currentItem.description}
            </Text>
            {currentItem.link && (
              <Button
                variant="ghost"
                size="xs"
                href={currentItem.link}
                arrowIcon
                marginTop="4"
              >
                Learn more
              </Button>
            )}
          </Column>
        </Row>
      </Card>

      {/* Navigation for multiple items */}
      {displayedItems.length > 1 && (
        <Row fillWidth justify="center" gap="8">
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setCurrentIndex((prev) => 
              prev === 0 ? displayedItems.length - 1 : prev - 1
            )}
            disabled={displayedItems.length <= 1}
          >
            <Icon name="chevron-left" size="xs" />
          </Button>
          <Text variant="label-default-xs" onBackground="neutral-medium">
            {currentIndex + 1} of {displayedItems.length}
          </Text>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setCurrentIndex((prev) => 
              (prev + 1) % displayedItems.length
            )}
            disabled={displayedItems.length <= 1}
          >
            <Icon name="chevron-right" size="xs" />
          </Button>
        </Row>
      )}
    </Column>
  );
}
