import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Row, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "32-Bit Single-Cycle MIPS Processor Components in VHDL",
    description: "Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit.",
    path: "/projects/32-bit-mips-processor",
    baseURL,
  });
}

export default function MIPSProcessor() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/32-bit-mips-processor"
        title="32-Bit Single-Cycle MIPS Processor Components in VHDL"
        description="Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit."
        image={`/api/og/generate?title=${encodeURIComponent("32-Bit Single-Cycle MIPS Processor Components in VHDL")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <SmartLink href="/projects">
          <Text variant="label-strong-m" marginBottom="l">← Back to Projects</Text>
        </SmartLink>
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          32-Bit Single-Cycle MIPS Processor Components in VHDL
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          Mar 2024 - May 2024
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          RTL Design & Verification, Hardware Simulation (ModelSim)
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="32-Bit MIPS Processor Architecture" 
          src="/images/projects/mips.png" 
        />
      </Column>

      {/* Project Description */}
      <Column maxWidth="s" paddingX="l" gap="l" marginBottom="xl">
        <Text variant="body-default-l">
          Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit, each verified with dedicated testbenches and simulation waveforms. Implemented a subset of MIPS instructions (arithmetic, logical, branching, memory access, and jump operations) while ensuring correct datapath and control signal coordination.
        </Text>
      </Column>
    </Column>
  );
}
