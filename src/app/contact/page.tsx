import { Column, Heading, Meta, Schema, Text, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, contact, iconLibrary } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contact.path}
        title={contact.title}
        description={contact.description}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
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
              <Row gap="s" vertical="center" padding="m" background="neutral-alpha-weak" radius="m" style={{ cursor: "pointer" }}>
                {iconLibrary.whatsapp({ size: 24, color: "#25D366" })}
                <Text variant="body-default-m">WhatsApp</Text>
              </Row>
            </SmartLink>
          </Column>

          {/* Phone */}
          <Column gap="s" align="center">
            <SmartLink href="tel:+233540304620">
              <Row gap="s" vertical="center" padding="m" background="neutral-alpha-weak" radius="m" style={{ cursor: "pointer" }}>
                {iconLibrary.phone({ size: 24 })}
                <Text variant="body-default-m">Phone</Text>
              </Row>
            </SmartLink>
          </Column>

          {/* Work Email */}
          <Column gap="s" align="center">
            <SmartLink href="mailto:obed.babington@ashesi.edu.gh">
              <Row gap="s" vertical="center" padding="m" background="neutral-alpha-weak" radius="m" style={{ cursor: "pointer" }}>
                {iconLibrary.email({ size: 24 })}
                <Text variant="body-default-m">Work Email</Text>
              </Row>
            </SmartLink>
          </Column>

          {/* Personal Email */}
          <Column gap="s" align="center">
            <SmartLink href="mailto:obedalloteyb@gmail.com">
              <Row gap="s" vertical="center" padding="m" background="neutral-alpha-weak" radius="m" style={{ cursor: "pointer" }}>
                {iconLibrary.gmail({ size: 24, color: "#EA4335" })}
                <Text variant="body-default-m">Gmail</Text>
              </Row>
            </SmartLink>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
