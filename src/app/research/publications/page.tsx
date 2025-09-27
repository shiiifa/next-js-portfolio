import { Column, Heading, Text } from "@once-ui-system/core";
import { BackButton } from "@/components";

export default function Publications() {
  return (
    <Column maxWidth="m" className="fixed-header-spacing" gap="l" style={{ animation: "fadeIn 0.6s ease-out", position: "relative" }}>
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      <Heading as="h1" variant="display-strong-s">Publications</Heading>
      <Text onBackground="neutral-weak">Coming soon!</Text>
    </Column>
  );
}


