"use client";

import { Column, Heading, Text, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, contact, iconLibrary } from "@/resources";

export default function Contact() {
  return (
    <Column maxWidth="m" paddingTop="24">
      
      {/* Contact Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Contact
        </Heading>
        <Text variant="body-default-l" align="center">
          I'm best reached via email and WhatsApp. Chime in with a message and let's connect.
        </Text>
      </Column>

      {/* Contact Details */}
      <Column gap="xl" paddingX="l">
        <Row gap="xl" horizontal="center" vertical="center" wrap>
          {/* WhatsApp */}
          <Column gap="s" align="center">
            <SmartLink href="https://wa.me/233264741689">
              <div 
                style={{ 
                  cursor: "pointer",
                  padding: "16px",
                  background: "var(--neutral-alpha-weak)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "var(--brand-alpha-weak)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {iconLibrary.whatsapp({ size: 32, color: "#25D366" })}
              </div>
            </SmartLink>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak">WhatsApp</Text>
          </Column>

          {/* Phone */}
          <Column gap="s" align="center">
            <SmartLink href="tel:+233540304620">
              <div 
                style={{ 
                  cursor: "pointer",
                  padding: "16px",
                  background: "var(--neutral-alpha-weak)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "var(--brand-alpha-weak)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {iconLibrary.phone({ size: 32 })}
              </div>
            </SmartLink>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak">Phone</Text>
          </Column>

          {/* Work Email */}
          <Column gap="s" align="center">
            <SmartLink href="mailto:obed.babington@ashesi.edu.gh">
              <div 
                style={{ 
                  cursor: "pointer",
                  padding: "16px",
                  background: "var(--neutral-alpha-weak)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "var(--brand-alpha-weak)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {iconLibrary.email({ size: 32 })}
              </div>
            </SmartLink>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak">Work Email</Text>
          </Column>

          {/* Personal Email */}
          <Column gap="s" align="center">
            <SmartLink href="mailto:obedalloteyb@gmail.com">
              <div 
                style={{ 
                  cursor: "pointer",
                  padding: "16px",
                  background: "var(--neutral-alpha-weak)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "var(--brand-alpha-weak)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {iconLibrary.gmail({ size: 32, color: "#EA4335" })}
              </div>
            </SmartLink>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak">Gmail</Text>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
