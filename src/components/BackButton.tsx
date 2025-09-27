"use client";

import { Row, Text, Icon } from "@once-ui-system/core";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Row 
      marginBottom="l" 
      align="center" 
      gap="s"
      style={{
        position: "absolute",
        top: "24px",
        left: "24px",
        zIndex: 10,
        cursor: "pointer",
        padding: "8px 12px",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      as="a"
      {...({ href } as any)}
    >
      <Icon 
        name="arrowRight" 
        style={{ 
          transform: "rotate(180deg)",
          cursor: "pointer"
        }} 
      />
      <Text 
        variant="body-default-s"
        style={{ 
          textDecoration: "none", 
          color: "var(--neutral-weak)",
          fontWeight: "500",
          cursor: "pointer"
        }}
      >
        {label}
      </Text>
    </Row>
  );
};
