"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, about, blog, research, projects, beyondTheLab, contact } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { ResearchDropdown } from "./ResearchDropdown";
import { BlogDropdown } from "./BlogDropdown";
import { ProjectsDropdown } from "./ProjectsDropdown";
import { MobileHeader } from "./MobileHeader";
import styles from "./Header.module.scss";


export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <MobileHeader />
      </div>

      {/* Desktop Header */}
      <div className="desktop-header">
        <Row
          as="header"
          position="fixed"
          top="0"
          zIndex={10}
          fillWidth
          padding="12"
          horizontal="center"
          background="page"
          border="neutral-alpha-weak"
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
        <Row gap="8" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/research"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ResearchDropdown />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ResearchDropdown />
                  </Row>
                </>
              )}
              {routes["/projects"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ProjectsDropdown />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ProjectsDropdown />
                  </Row>
                </>
              )}
              {routes["/beyond-the-lab"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/beyond-the-lab"
                      label={beyondTheLab.label}
                      selected={pathname.startsWith("/beyond-the-lab")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/beyond-the-lab"
                      selected={pathname.startsWith("/beyond-the-lab")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <BlogDropdown />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <BlogDropdown />
                  </Row>
                </>
              )}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/contact"
                      label={contact.label}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/contact"
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                </>
              )}
        </Row>
      </Row>
      </div>
    </>
  );
};
