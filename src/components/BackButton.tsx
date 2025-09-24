"use client";

import { Row, Text, Icon } from "@once-ui-system/core";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Row marginBottom="l" align="center" gap="s">
      <Icon name="arrowRight" style={{ transform: "rotate(180deg)" }} />
      <Text 
        as="a" 
        href={href} 
        variant="body-default-s"
        style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
      >
        {label}
      </Text>
    </Row>
  );
};
