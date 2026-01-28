'use client';

import {
  Content1,
  Creator,
  Heading1,
  HeroHeader,
  ListContent,
  Topbar,
} from '../Modules';

const Doc26 = () => {
  return (
    <>
      <Topbar text="Why We're Building Greta: Engineering Growth from Day One" />
      <Creator
        tableOfContent={[
          "Why We're Building Greta: Engineering Growth from Day One",
          "The Genesis of Greta",
          "Beyond Code Generation",
          "Growth Engineering from First Principles",
          "Real-World Impact",
          "Building for Tomorrow's Unicorns",
          "The First Step in a Larger Vision",
        ]}
      >
        <HeroHeader text="Why We're Building Greta: Engineering Growth from Day One" />

        <Heading1>The Genesis of Greta</Heading1>

        <Content1>
          When we set out to build Greta (Growth Engineering Tech Agent), we
          identified a critical gap in the market. There are countless AI code
          generation tools emerging, but they're optimized for general software
          development—not for growth.
        </Content1>

        <Content1>
          As founders ourselves, we understand that building products that can
          scale requires more than just functional code. It requires embedding
          growth mechanisms directly into the architecture from the beginning.
        </Content1>

        <Heading1>Beyond Code Generation</Heading1>

        <Content1>
          The AI engineering space is becoming crowded, but Greta stands apart
          with a singular focus: she's not just an AI engineer, she's a{" "}
          <strong>Growth AI Engineer</strong>. While other tools help you build
          functional applications, Greta helps you build applications designed
          to grow.
        </Content1>

        <Content1>
          This distinction matters because most founders end up bolting on
          growth tools as afterthoughts, creating fragmented experiences and
          data silos. After speaking with over 200 companies, we found this data
          fragmentation to be one of the most persistent challenges in
          optimizing customer journeys.
        </Content1>

        <Heading1>Growth Engineering from First Principles</Heading1>

        <Content1>
          Greta approaches code generation with growth fundamentals built in:
        </Content1>

        <ListContent
          listData={[
            <>
              <strong>User data analysis</strong> capabilities embedded from the
              start
            </>,
            <>
              <strong>Reporting dashboards</strong> that track meaningful growth
              metrics
            </>,
            <>
              <strong>Email campaign infrastructure</strong> integrated into the
              application core
            </>,
            <>
              <strong>Onboarding flows</strong> designed for conversion and
              engagement
            </>,
            <>
              All powered by{" "}
              <strong>Questera's customer engagement platform</strong> with 100+
              components across the full customer lifecycle
            </>,
          ]}
        />

        <Heading1>Real-World Impact</Heading1>

        <Content1>
          When you chat with Greta to build a component or application, you're
          not just creating functional code. You're creating growth-ready
          infrastructure:
        </Content1>

        <ListContent
          listData={{
            "Full-stack UI components":
              "Can be remotely configured through our no-code dashboard",
            "Email campaign triggers":
              "Positioned at strategic points in your user journey",
            "Tracking events": "Capture meaningful user behaviors",
            "Reporting dashboards": "Translate data into actionable insights",
          }}
        />

        <Content1>
          For SaaS founders, this means launching with onboarding, support,
          feedback, and referral systems already in place—all configured
          dynamically through a single dashboard.
        </Content1>

        <Content1>
          For e-commerce entrepreneurs, this means stores with built-in
          promotional offers, loyalty programs, and customer service automation
          from day one.
        </Content1>

        <Heading1>Building for Tomorrow's Unicorns</Heading1>

        <Content1>
          Greta represents our vision for how tomorrow's unicorns should build.
          Rather than accumulating a patchwork of tools during rapid growth,
          founders can start with an integrated foundation that's designed to
          scale.
        </Content1>

        <Content1>
          This isn't just about convenience—it's about competitive advantage. By
          consolidating growth infrastructure from the beginning, founders can
          focus on what matters: their core product and customer experience.
        </Content1>

        <Heading1>The First Step in a Larger Vision</Heading1>

        <Content1>
          Greta is just the beginning. As the first agent in the Questera
          ecosystem, she lays the foundation for even more specialized growth
          capabilities. When combined with other agents like Sega (our
          segmentation agent), founders gain access to increasingly
          sophisticated growth capabilities without the traditional overhead.
        </Content1>

        <Content1>
          For founders who are at day zero and thinking about scaling to
          millions of users, Greta isn't just a tool—she's a growth partner. If
          you can think it, you can make it grow.
        </Content1>
      </Creator>
    </>
  );
};

export default Doc26;
