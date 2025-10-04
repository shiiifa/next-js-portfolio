import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row 
      as="footer" 
      fillWidth 
      padding="8" 
      horizontal="center" 
      s={{ direction: "column" }}
      style={{
        background: "transparent",
        borderTop: "none",
        boxShadow: "none",
        backdropFilter: "none",
      }}
    >
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="center"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
        style={{
          background: "transparent",
        }}
      >
        <Text 
          variant="body-default-s" 
          align="center"
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          © {currentYear} | Obed Allotey Babington
        </Text>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))",
                  }}
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
