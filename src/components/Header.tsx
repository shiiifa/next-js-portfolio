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
          horizontal="center"
          background="page"
          border="neutral-alpha-weak"
        >
          <Row 
            gap="8" 
            vertical="center" 
            textVariant="body-default-s" 
            suppressHydrationWarning
            style={{ maxWidth: "1200px" }}
            fillWidth
            horizontal="center"
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
            
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            
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
        </Row>
      </div>
    </>
  );
};
