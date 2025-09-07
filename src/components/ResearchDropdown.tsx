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
      <ToggleButton
        prefixIcon="search"
        href="/research"
        label={research.label}
        selected={pathname.startsWith("/research")}
        style={{ cursor: "pointer" }}
      />
      
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
              <Row
                padding="s"
                radius="s"
                style={{
                  cursor: "pointer",
                }}
                hover={{
                  background: "var(--neutral-alpha-weak)",
                }}
              >
                <Text variant="body-default-s">Major Research</Text>
              </Row>
            </SmartLink>
            <SmartLink href="/research/non-major">
              <Row
                padding="s"
                radius="s"
                style={{
                  cursor: "pointer",
                }}
                hover={{
                  background: "var(--neutral-alpha-weak)",
                }}
              >
                <Text variant="body-default-s">Non-Major Research</Text>
              </Row>
            </SmartLink>
          </Column>
        </div>
      )}
    </div>
  );
};
