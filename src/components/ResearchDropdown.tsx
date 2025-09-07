"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Row, ToggleButton, Column, Text, SmartLink } from "@once-ui-system/core";
import { research } from "@/resources";

export const ResearchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "";

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Research Button */}
      <div
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
          background: pathname.startsWith("/research") ? "var(--brand-background-weak)" : "transparent",
          color: pathname.startsWith("/research") ? "var(--brand-on-background-strong)" : "var(--neutral-on-background-strong)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "14px",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
      >
        <span>🔍</span>
        <span>{research.label}</span>
      </div>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            background: "var(--page-background)",
            border: "1px solid var(--neutral-alpha-weak)",
            borderRadius: "8px",
            boxShadow: "var(--shadow-l)",
            zIndex: 1000,
            minWidth: "200px",
            marginTop: "4px",
          }}
        >
          <Column padding="s" gap="xs">
            <SmartLink href="/research/major">
              <div
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--neutral-alpha-weak)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <Text variant="body-default-s">Major Research</Text>
              </div>
            </SmartLink>
            <SmartLink href="/research/non-major">
              <div
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--neutral-alpha-weak)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <Text variant="body-default-s">Non-Major Research</Text>
              </div>
            </SmartLink>
          </Column>
        </div>
      )}
    </div>
  );
};
