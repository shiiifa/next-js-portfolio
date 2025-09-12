"use client";

import { useState, useEffect } from "react";
import { Column, Row, Text, Heading, Badge, Icon, Button } from "@once-ui-system/core";
import { NewsItem } from "@/types";

interface NewsSlideshowProps {
  items: NewsItem[];
  maxItems?: number;
}

export function NewsSlideshow({ items, maxItems = 3 }: NewsSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter featured items and limit to maxItems
  const featuredItems = items
    .filter(item => item.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxItems);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying || featuredItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredItems.length]);

  if (featuredItems.length === 0) {
    return null;
  }

  const currentItem = featuredItems[currentIndex];

  const getTypeIcon = (type: NewsItem['type']) => {
    switch (type) {
      case 'award':
        return 'trophy';
      case 'role':
        return 'briefcase';
      case 'conference':
        return 'presentation';
      case 'education':
        return 'academic-cap';
      case 'achievement':
        return 'star';
      default:
        return 'newspaper';
    }
  };

  const getTypeColor = (type: NewsItem['type']) => {
    switch (type) {
      case 'award':
        return 'brand-strong';
      case 'role':
        return 'success-strong';
      case 'conference':
        return 'warning-strong';
      case 'education':
        return 'info-strong';
      case 'achievement':
        return 'brand-strong';
      default:
        return 'neutral-strong';
    }
  };

  const getTypeBackground = (type: NewsItem['type']) => {
    switch (type) {
      case 'award':
        return 'brand-alpha-weak';
      case 'role':
        return 'success-alpha-weak';
      case 'conference':
        return 'warning-alpha-weak';
      case 'education':
        return 'info-alpha-weak';
      case 'achievement':
        return 'brand-alpha-weak';
      default:
        return 'neutral-alpha-weak';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Column 
      fillWidth 
      gap="16" 
      paddingY="24" 
      paddingX="20"
      background="neutral-alpha-weak"
      radius="l"
      border="neutral-alpha-medium"
    >
      {/* Header */}
      <Row fillWidth justify="space-between" align="center">
        <Row gap="12" align="center">
          <Icon name="newspaper" size="s" onBackground="brand-strong" />
          <Heading variant="heading-strong-s">Latest News</Heading>
        </Row>
        
        {featuredItems.length > 1 && (
          <Row gap="8" align="center">
            <Button
              variant="ghost"
              size="xs"
              onClick={() => {
                setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
                setIsAutoPlaying(false);
              }}
            >
              <Icon name="chevron-left" size="xs" />
            </Button>
            <Text variant="label-default-xs" onBackground="neutral-medium">
              {currentIndex + 1} / {featuredItems.length}
            </Text>
            <Button
              variant="ghost"
              size="xs"
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
                setIsAutoPlaying(false);
              }}
            >
              <Icon name="chevron-right" size="xs" />
            </Button>
          </Row>
        )}
      </Row>

      {/* Current News Item */}
      <Column gap="12" fillWidth>
        <Row gap="12" align="center" wrap>
          <Badge
            background={getTypeBackground(currentItem.type)}
            onBackground={getTypeColor(currentItem.type)}
            textVariant="label-default-xs"
            paddingX="8"
            paddingY="4"
          >
            <Row gap="4" align="center">
              <Icon name={getTypeIcon(currentItem.type)} size="xs" />
              {currentItem.type.charAt(0).toUpperCase() + currentItem.type.slice(1)}
            </Row>
          </Badge>
          <Text variant="label-default-xs" onBackground="neutral-medium">
            {formatDate(currentItem.date)}
          </Text>
        </Row>

        <Column gap="8">
          <Heading variant="heading-strong-s" wrap="balance">
            {currentItem.title}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
            {currentItem.description}
          </Text>
        </Column>

        {currentItem.link && (
          <Button
            variant="ghost"
            size="xs"
            href={currentItem.link}
            arrowIcon
          >
            Read more
          </Button>
        )}
      </Column>

      {/* Dots indicator */}
      {featuredItems.length > 1 && (
        <Row gap="4" justify="center">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentIndex ? 'var(--color-brand-strong)' : 'var(--color-neutral-alpha-medium)',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
            />
          ))}
        </Row>
      )}
    </Column>
  );
}
