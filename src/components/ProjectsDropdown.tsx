"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { Row, Column, ToggleButton } from "@once-ui-system/core";

import { projects } from "@/resources";

export const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "";

  return (
    <Row
      vertical="center"
      gap="4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ position: "relative" }}
    >
      <ToggleButton
        href="/projects"
        label={projects.label}
        selected={pathname.startsWith("/projects")}
      />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            marginTop: "8px",
            zIndex: 10,
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.2s ease-in-out"
          }}
        >
        <Column
          background="page"
          border="neutral-alpha-weak"
          radius="m"
          shadow="l"
          padding="8"
          gap="4"
        >
          <ToggleButton
            href="/projects/engineering-projects"
            label="Engineering Projects"
            selected={pathname.startsWith("/projects/engineering-projects")}
          />
          <ToggleButton
            href="/projects/cs-projects"
            label="CS Projects"
            selected={pathname.startsWith("/projects/cs-projects")}
          />
        </Column>
        </div>
      )}
    </Row>
  );
};
