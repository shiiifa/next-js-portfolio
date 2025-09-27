"use client";

import { Column, Heading, Text, Row } from "@once-ui-system/core";
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
        marginTop="l" 
        paddingX="l" 
        align="center"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "100%",
          alignItems: "stretch"
        }}>
          {/* Phone */}
          <Row gap="m" align="center" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <div style={{ 
                background: "var(--neutral-alpha-weak)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px"
              }}>
                {iconLibrary.phone({ size: 24, color: "var(--neutral-medium)" })}
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

          {/* WhatsApp */}
          <Row gap="m" align="center" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <div style={{ 
                background: "var(--neutral-alpha-weak)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px"
              }}>
                {iconLibrary.whatsapp({ size: 24, color: "var(--neutral-medium)" })}
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

          {/* Work Email */}
          <Row gap="m" align="center" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <div style={{ 
                background: "var(--neutral-alpha-weak)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px"
              }}>
                {iconLibrary.email({ size: 24, color: "var(--neutral-medium)" })}
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

          {/* Personal Email */}
          <Row gap="m" align="center" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <div style={{ 
                background: "var(--neutral-alpha-weak)", 
                borderRadius: "10px", 
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px"
              }}>
                {iconLibrary.gmail({ size: 24, color: "var(--neutral-medium)" })}
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
