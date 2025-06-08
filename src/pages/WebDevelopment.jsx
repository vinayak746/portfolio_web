import React from "react";
import Footer from "../sections/Footer";

const Navbar = () => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#222",
      color: "#fff",
    }}
  >
    <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>UIMS Services</div>
    <ul
      style={{
        display: "flex",
        gap: "2rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <li>
        <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </a>
      </li>
    </ul>
  </nav>
);

const Section = ({ title, children }) => (
  <div
    style={{
      background: "#181818",
      borderRadius: "10px",
      padding: "2rem",
      margin: "1.5rem 0",
      color: "#fff",
      boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
    }}
  >
    <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>
      {title}
    </h2>
    <div style={{ marginTop: "1rem", color: "#ccc" }}>{children}</div>
  </div>
);

const WebDevelopment = () => {
  return (
    <div
      style={{
        fontFamily: "Segoe UI, Arial, sans-serif",
        background: "#111",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "2rem",
        }}
      >
        <h1
          style={{ textAlign: "center", color: "#fff", marginBottom: "1rem" }}
        >
          Web Development Services
        </h1>
        <p style={{ textAlign: "center", color: "#aaa", marginBottom: "2rem" }}>
          In our UIMS (University Information Management System) web development
          section, you can choose from the following services. Picking the right
          one ensures your project is tailored to your needs, whether you want a
          stunning user interface, robust backend, or a complete solution.
        </p>
        <Section title="Frontend Development">
          <b>Frontend Development</b> focuses on everything users see and
          interact with. We craft visually appealing, intuitive, and responsive
          interfaces using modern technologies like React. Our team ensures your
          UIMS is accessible on all devices, loads fast, and provides a seamless
          experience for students, faculty, and administrators.
          <br />
          <br />
          <b>How does this help you?</b> A great frontend boosts engagement,
          reduces confusion, and makes your system stand out. It’s the face of
          your university’s digital presence.
          <br />
          <br />
          <b>Why choose us?</b> We combine creativity with usability, ensuring
          your UIMS looks professional and is easy to use for everyone.
        </Section>
        <Section title="Backend Development">
          <b>Backend Development</b> powers your UIMS behind the scenes. We
          build secure, scalable, and high-performance server-side solutions,
          manage databases, and create APIs to connect all parts of your system.
          Our backend ensures your data is safe, your system is reliable, and
          everything runs smoothly.
          <br />
          <br />
          <b>How does this help you?</b> A strong backend means your UIMS can
          handle growth, keep information secure, and integrate with other tools
          or platforms.
          <br />
          <br />
          <b>Why choose us?</b> We prioritize security, efficiency, and
          future-proofing, so your UIMS is ready for anything.
        </Section>
        <Section title="Full Stack Development">
          <b>Full Stack Development</b> gives you the best of both worlds: a
          beautiful frontend and a powerful backend, working together
          seamlessly. We handle the entire process, from design to deployment,
          ensuring every part of your UIMS is integrated and optimized.
          <br />
          <br />
          <b>How does this help you?</b> You get a complete, end-to-end solution
          with one team handling everything, reducing miscommunication and
          speeding up delivery.
          <br />
          <br />
          <b>Why choose us?</b> Our full stack experts deliver cohesive,
          reliable systems tailored to your university’s unique needs.
        </Section>
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Select the service that best fits your UIMS project needs. With us,
          you get expertise, dedication, and results you can trust.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
