"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      m={{ hide: true }}
      className={styles.tocFork}
    >
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          <Column key={sectionIndex} gap="8">
            {/* connector first, then node to look connected */}
            <div className={styles.tocItem} onClick={() => scrollTo(section.title, 80)}>
              <div className={styles.tocConnector} />
              <div className={styles.tocNode} />
              <Text className={styles.hover}>{section.title}</Text>
            </div>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={styles.tocSubItem}
                    onClick={() => scrollTo(item, 80)}
                  >
                    <div className={styles.tocSubConnector} />
                    <div className={styles.tocSubNode} />
                    <Text className={styles.hover}>{item}</Text>
                  </div>
                ))}
              </>
            )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
