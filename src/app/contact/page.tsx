"use client";

import { Column, Heading, Text, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, contact, iconLibrary } from "@/resources";
import { BackButton } from "@/components";

export default function Contact() {
  return (
    <Column maxWidth="m" className="fixed-header-spacing" style={{ minHeight: "calc(100vh - 120px)", justifyContent: "center", alignItems: "center", paddingTop: "60px", animation: "fadeIn 1s ease-out", position: "relative" }}>
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />
      
      {/* Contact Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-l" align="center">
          I am best reached via email and WhatsApp. Chime in with a message and let us connect.
        </Text>
      </Column>


      {/* Contact Information */}
      <Column 
        marginTop="xl" 
        paddingX="l" 
        align="center"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <Text variant="heading-strong-m" align="center" marginBottom="l">
          Contact Information
        </Text>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          width: "100%"
        }}>
          {/* Phone */}
          <SmartLink href="tel:+233540304620">
            <Row gap="m" align="center" style={{ 
              width: "100%", 
              padding: "16px",
              borderRadius: "12px",
              background: "var(--neutral-alpha-weak)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid var(--neutral-alpha-medium)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "var(--brand-alpha-weak)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--neutral-alpha-weak)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                background: "var(--brand-alpha-medium)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "48px"
              }}>
                {iconLibrary.phone({ size: 24, color: "var(--brand-strong)" })}
              </div>
              <Column>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  Phone
                </Text>
                <Text variant="body-default-m">
                  +233 540 304 620
                </Text>
              </Column>
            </Row>
          </SmartLink>

          {/* WhatsApp */}
          <SmartLink href="https://wa.me/233264741689">
            <Row gap="m" align="center" style={{ 
              width: "100%", 
              padding: "16px",
              borderRadius: "12px",
              background: "var(--neutral-alpha-weak)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid var(--neutral-alpha-medium)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "var(--brand-alpha-weak)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--neutral-alpha-weak)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                background: "var(--brand-alpha-medium)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "48px"
              }}>
                {iconLibrary.whatsapp({ size: 24, color: "var(--brand-strong)" })}
              </div>
              <Column>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  WhatsApp
                </Text>
                <Text variant="body-default-m">
                  +233 264 741 689
                </Text>
              </Column>
            </Row>
          </SmartLink>

          {/* Work Email */}
          <SmartLink href="mailto:obed.babington@ashesi.edu.gh">
            <Row gap="m" align="center" style={{ 
              width: "100%", 
              padding: "16px",
              borderRadius: "12px",
              background: "var(--neutral-alpha-weak)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid var(--neutral-alpha-medium)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "var(--brand-alpha-weak)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--neutral-alpha-weak)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                background: "var(--brand-alpha-medium)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "48px"
              }}>
                {iconLibrary.email({ size: 24, color: "var(--brand-strong)" })}
              </div>
              <Column>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  Work Email
                </Text>
                <Text variant="body-default-m" style={{ wordBreak: "break-all" }}>
                  obed.babington@ashesi.edu.gh
                </Text>
              </Column>
            </Row>
          </SmartLink>

          {/* Personal Email */}
          <SmartLink href="mailto:obedalloteyb@gmail.com">
            <Row gap="m" align="center" style={{ 
              width: "100%", 
              padding: "16px",
              borderRadius: "12px",
              background: "var(--neutral-alpha-weak)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid var(--neutral-alpha-medium)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "var(--brand-alpha-weak)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--neutral-alpha-weak)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                background: "var(--brand-alpha-medium)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48px",
                height: "48px"
              }}>
                {iconLibrary.gmail({ size: 24, color: "var(--brand-strong)" })}
              </div>
              <Column>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  Personal Email
                </Text>
                <Text variant="body-default-m" style={{ wordBreak: "break-all" }}>
                  obedalloteyb@gmail.com
                </Text>
              </Column>
            </Row>
          </SmartLink>
        </div>
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
