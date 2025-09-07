import { Column, Heading, Meta, Schema, Text, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, contact } from "@/resources";

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
        {/* Phone Section */}
        <Column gap="m">
          <Heading variant="heading-strong-l">Phone</Heading>
          <Column gap="s">
            <Row gap="s" vertical="center">
              <Text variant="body-default-m" onBackground="neutral-weak">WhatsApp:</Text>
              <SmartLink href="https://wa.me/233264741689" variant="body-default-m">
                +233-26-474-1689
              </SmartLink>
            </Row>
            <Row gap="s" vertical="center">
              <Text variant="body-default-m" onBackground="neutral-weak">Calls:</Text>
              <SmartLink href="tel:+233540304620" variant="body-default-m">
                +233-54-030-4620
              </SmartLink>
            </Row>
          </Column>
        </Column>

        {/* Work Email Section */}
        <Column gap="m">
          <Heading variant="heading-strong-l">Work Email</Heading>
          <SmartLink href="mailto:obed.babington@ashesi.edu.gh" variant="body-default-m">
            obed.babington@ashesi.edu.gh
          </SmartLink>
        </Column>

        {/* Personal Email Section */}
        <Column gap="m">
          <Heading variant="heading-strong-l">Personal Email</Heading>
          <SmartLink href="mailto:obedalloteyb@gmail.com" variant="body-default-m">
            obedalloteyb@gmail.com
          </SmartLink>
        </Column>
      </Column>
    </Column>
  );
}
