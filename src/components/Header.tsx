"use client";

import { usePathname } from "next/navigation";

import { Line, Row, ToggleButton } from "@once-ui-system/core";

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
      <div className={styles.mobileHeader}>
        <MobileHeader />
      </div>

      {/* Desktop Header */}
      <div className={styles.desktopHeader}>
        <Row
          as="header"
          className={styles.fixedHeader}
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex={10}
          fillWidth
          padding="12"
          horizontal="between"
          background="page"
          border="neutral-alpha-weak"
        >
          {/* Left side - Home and Theme Toggle */}
          <Row 
            gap="8" 
            vertical="center" 
            textVariant="body-default-s" 
            suppressHydrationWarning
          >
            {routes["/"] && (
              <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
            )}
            
            {display.themeSwitcher && (
              <>
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <ThemeToggle />
              </>
            )}
          </Row>

          {/* Center - Main Navigation */}
          <Row 
            gap="8" 
            vertical="center" 
            textVariant="body-default-s" 
            suppressHydrationWarning
            horizontal="center"
          >
            {routes["/about"] && (
              <ToggleButton
                href="/about"
                label={about.label}
                selected={pathname === "/about"}
              />
            )}
            
            {routes["/research"] && <ResearchDropdown />}
            
            {routes["/projects"] && <ProjectsDropdown />}
            
            {routes["/beyond-the-lab"] && (
              <ToggleButton
                href="/beyond-the-lab"
                label={beyondTheLab.label}
                selected={pathname.startsWith("/beyond-the-lab")}
              />
            )}
            
            {routes["/blog"] && <BlogDropdown />}
            
            {routes["/contact"] && (
              <ToggleButton
                href="/contact"
                label={contact.label}
                selected={pathname.startsWith("/contact")}
              />
            )}
          </Row>

          {/* Right side - Empty for balance */}
          <Row width="120px" />
        </Row>
      </div>
    </>
  );
};
