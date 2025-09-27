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

      {/* Business Card Style Contact Info */}
      <Column 
        marginTop="xl" 
        paddingX="l" 
        align="center"
        style={{
          background: "linear-gradient(135deg, var(--neutral-alpha-weak) 0%, var(--brand-alpha-weak) 100%)",
          borderRadius: "20px",
          padding: "32px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 25px rgba(0, 0, 0, 0.05)",
          border: "1px solid var(--neutral-alpha-medium)",
          backdropFilter: "blur(10px)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "100px",
          height: "100px",
          background: "var(--brand-alpha-weak)",
          borderRadius: "50%",
          opacity: 0.1
        }} />
        <div style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "60px",
          height: "60px",
          background: "var(--brand-medium)",
          borderRadius: "50%",
          opacity: 0.1
        }} />
        
        <Text variant="heading-strong-m" align="center" marginBottom="l" style={{ color: "var(--brand-strong)" }}>
          Contact Information
        </Text>
        
        <Column gap="m" align="center" style={{ position: "relative", zIndex: 1 }}>
          <Row gap="m" align="center" style={{ width: "100%" }}>
            <div style={{ 
              background: "var(--brand-alpha-medium)", 
              borderRadius: "8px", 
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {iconLibrary.phone({ size: 20, color: "var(--brand-strong)" })}
            </div>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                Phone
              </Text>
              <Text variant="body-default-s" style={{ fontFamily: "monospace" }}>
                +233 540 304 620
              </Text>
            </Column>
          </Row>

          <Row gap="m" align="center" style={{ width: "100%" }}>
            <div style={{ 
              background: "var(--brand-alpha-medium)", 
              borderRadius: "8px", 
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {iconLibrary.whatsapp({ size: 20, color: "var(--brand-strong)" })}
            </div>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                WhatsApp
              </Text>
              <Text variant="body-default-s" style={{ fontFamily: "monospace" }}>
                +233 264 741 689
              </Text>
            </Column>
          </Row>

          <Row gap="m" align="center" style={{ width: "100%" }}>
            <div style={{ 
              background: "var(--brand-alpha-medium)", 
              borderRadius: "8px", 
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {iconLibrary.email({ size: 20, color: "var(--brand-strong)" })}
            </div>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                Work Email
              </Text>
              <Text variant="body-default-s" style={{ fontFamily: "monospace", wordBreak: "break-all" }}>
                obed.babington@ashesi.edu.gh
              </Text>
            </Column>
          </Row>

          <Row gap="m" align="center" style={{ width: "100%" }}>
            <div style={{ 
              background: "var(--brand-alpha-medium)", 
              borderRadius: "8px", 
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {iconLibrary.gmail({ size: 20, color: "var(--brand-strong)" })}
            </div>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                Personal Email
              </Text>
              <Text variant="body-default-s" style={{ fontFamily: "monospace", wordBreak: "break-all" }}>
                obedalloteyb@gmail.com
              </Text>
            </Column>
          </Row>
        </Column>
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
