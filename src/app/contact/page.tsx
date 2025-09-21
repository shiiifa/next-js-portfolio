"use client";

import { Column, Heading, Text, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, contact, iconLibrary } from "@/resources";

export default function Contact() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", animation: "fadeIn 1s ease-out" }}>
      
      {/* Contact Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-l" align="center">
          I'm best reached via email and WhatsApp. Chime in with a message and let's connect.
        </Text>
      </Column>

      {/* Contact Details */}
      <Column gap="xl" paddingX="l" align="center">
        <Row gap="xl" horizontal="center" vertical="center" wrap>
          {/* WhatsApp */}
          <SmartLink href="https://wa.me/233264741689">
            <div 
              style={{ 
                cursor: "pointer",
                padding: "24px",
                background: "var(--neutral-alpha-weak)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                e.currentTarget.style.background = "var(--brand-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
              }}
            >
              {iconLibrary.whatsapp({ size: 40, color: "var(--brand-medium)" })}
            </div>
          </SmartLink>

          {/* Phone */}
          <SmartLink href="tel:+233540304620">
            <div 
              style={{ 
                cursor: "pointer",
                padding: "24px",
                background: "var(--neutral-alpha-weak)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                e.currentTarget.style.background = "var(--brand-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
              }}
            >
              {iconLibrary.phone({ size: 40, color: "var(--brand-medium)" })}
            </div>
          </SmartLink>

          {/* Work Email */}
          <SmartLink href="mailto:obed.babington@ashesi.edu.gh">
            <div 
              style={{ 
                cursor: "pointer",
                padding: "24px",
                background: "var(--neutral-alpha-weak)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                e.currentTarget.style.background = "var(--brand-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
              }}
            >
              {iconLibrary.email({ size: 40, color: "var(--brand-medium)" })}
            </div>
          </SmartLink>

          {/* Personal Email */}
          <SmartLink href="mailto:obedalloteyb@gmail.com">
            <div 
              style={{ 
                cursor: "pointer",
                padding: "24px",
                background: "var(--neutral-alpha-weak)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                e.currentTarget.style.background = "var(--brand-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
              }}
            >
              {iconLibrary.gmail({ size: 40, color: "var(--brand-medium)" })}
            </div>
          </SmartLink>
        </Row>
      </Column>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `
      }} />
    </Column>
  );
}
