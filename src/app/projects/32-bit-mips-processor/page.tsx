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
        <Heading variant="heading-strong-l" marginBottom="m">
          Project Overview
        </Heading>
        
        <Text variant="body-default-l" marginBottom="m">
          This project extended the design of a single-cycle CPU by implementing a comprehensive 32-bit MIPS processor in VHDL. The implementation focused on creating modular, well-structured components that could be individually tested and verified before integration into the complete processor system.
        </Text>

        <Heading variant="heading-strong-m" marginTop="l" marginBottom="m">
          Key Components Implemented
        </Heading>
        
        <Column gap="m" marginBottom="l">
          <Card padding="m" radius="s" shadow="s">
            <Column gap="s">
              <Text variant="body-strong-m">Arithmetic Logic Unit (ALU)</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Implemented 32-bit ALU supporting arithmetic operations (add, subtract), logical operations (AND, OR, XOR, NOR), and comparison operations (slt, sltu). Included overflow detection and zero flag generation.
              </Text>
            </Column>
          </Card>

          <Card padding="m" radius="s" shadow="s">
            <Column gap="s">
              <Text variant="body-strong-m">Register File</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Designed 32-register file with dual-port read capability and single-port write capability. Implemented register 0 as hardwired zero register and included proper write enable logic.
              </Text>
            </Column>
          </Card>

          <Card padding="m" radius="s" shadow="s">
            <Column gap="s">
              <Text variant="body-strong-m">Instruction Memory</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Created instruction memory module with 32-bit word addressing. Implemented proper instruction fetching and PC increment logic for sequential execution.
              </Text>
            </Column>
          </Card>

          <Card padding="m" radius="s" shadow="s">
            <Column gap="s">
              <Text variant="body-strong-m">Data Memory</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Implemented data memory with read/write capabilities, supporting both word and byte addressing. Included proper memory access control and data alignment.
              </Text>
            </Column>
          </Card>

          <Card padding="m" radius="s" shadow="s">
            <Column gap="s">
              <Text variant="body-strong-m">Control Unit</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Designed comprehensive control unit generating all necessary control signals based on instruction opcode and function fields. Implemented proper signal timing and hazard detection.
              </Text>
            </Column>
          </Card>
        </Column>

        <Heading variant="heading-strong-m" marginTop="l" marginBottom="m">
          Instruction Set Implementation
        </Heading>
        
        <Text variant="body-default-l" marginBottom="m">
          Successfully implemented a comprehensive subset of MIPS instructions including:
        </Text>

        <Column gap="s" marginBottom="l">
          <Text variant="body-default-m">• <strong>Arithmetic Instructions:</strong> ADD, SUB, ADDI, SLT, SLTI</Text>
          <Text variant="body-default-m">• <strong>Logical Instructions:</strong> AND, OR, XOR, NOR, ANDI, ORI, XORI</Text>
          <Text variant="body-default-m">• <strong>Memory Instructions:</strong> LW, SW, LBU, SB</Text>
          <Text variant="body-default-m">• <strong>Branch Instructions:</strong> BEQ, BNE, BLEZ, BGTZ, BLTZ, BGEZ</Text>
          <Text variant="body-default-m">• <strong>Jump Instructions:</strong> J, JAL, JR, JALR</Text>
        </Column>

        <Heading variant="heading-strong-m" marginTop="l" marginBottom="m">
          Verification & Testing
        </Heading>
        
        <Text variant="body-default-l" marginBottom="m">
          Each component was thoroughly verified using dedicated testbenches and simulation waveforms in ModelSim. The verification process included:
        </Text>

        <Column gap="s" marginBottom="l">
          <Text variant="body-default-m">• Individual component testing with comprehensive test vectors</Text>
          <Text variant="body-default-m">• Integration testing of complete processor system</Text>
          <Text variant="body-default-m">• Timing analysis and signal verification</Text>
          <Text variant="body-default-m">• Functional verification of instruction execution</Text>
          <Text variant="body-default-m">• Performance analysis and optimization</Text>
        </Column>

        <Heading variant="heading-strong-m" marginTop="l" marginBottom="m">
          Technical Challenges
        </Heading>
        
        <Text variant="body-default-l" marginBottom="m">
          Key challenges addressed during implementation included ensuring correct datapath and control signal coordination, managing timing constraints, and implementing proper hazard detection and resolution mechanisms.
        </Text>

        <Text variant="body-default-l" marginBottom="m">
          The project successfully demonstrated proficiency in RTL design, hardware description languages, and digital system verification methodologies, providing a solid foundation for advanced processor design concepts.
        </Text>
      </Column>
    </Column>
  );
}
