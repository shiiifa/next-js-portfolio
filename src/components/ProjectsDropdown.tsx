"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Row, ToggleButton, Column, Text, SmartLink } from "@once-ui-system/core";
import { projects } from "@/resources";

export const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "";

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Projects Button */}
      <ToggleButton
        href="/projects"
        label={projects.label}
        selected={pathname.startsWith("/projects")}
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
            <SmartLink href="/projects/engineering-projects">
              <div
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--neutral-alpha-weak)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <Text variant="body-default-s">Engineering Projects</Text>
              </div>
            </SmartLink>
            <SmartLink href="/projects/cs-projects">
              <div
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--neutral-alpha-weak)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <Text variant="body-default-s">CS Projects</Text>
              </div>
            </SmartLink>
          </Column>
        </div>
      )}
    </div>
  );
};
