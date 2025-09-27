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
        transition: "all 0.2s ease",
        padding: "8px 12px",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        e.currentTarget.style.transform = "translateX(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.transform = "translateX(0)";
      }}
      as="a"
      href={href}
    >
      <Icon 
        name="arrowRight" 
        style={{ 
          transform: "rotate(180deg)",
          transition: "transform 0.2s ease"
        }} 
      />
      <Text 
        variant="body-default-s"
        style={{ 
          textDecoration: "none", 
          color: "var(--neutral-weak)",
          fontWeight: "500"
        }}
      >
        {label}
      </Text>
    </Row>
  );
};
