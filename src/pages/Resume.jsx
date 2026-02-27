const blue = "#2c5282";
const lightBlue = "#bee3f8";

const sectionTitle = {
  fontSize: "11px",
  fontWeight: "bold",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: blue,
  borderBottom: `1px solid ${lightBlue}`,
  paddingBottom: "4px",
  marginBottom: "12px",
};

const jobHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
};

export default function Resume() {
  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        fontSize: "14px",
        color: "#1a1a1a",
        background: "#f4f4f4",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      {/* Download button above the page card */}
      <div style={{ maxWidth: "780px", margin: "0 auto 16px", display: "flex", justifyContent: "flex-end" }}>
        <a href="CurrentResume.pdf" download>
          <button
            style={{
              background: "#05FFE7",
              color: "#1E1827",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              fontSize: "13px",
              padding: "8px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download PDF
          </button>
        </a>
      </div>

      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          background: "#fff",
          padding: "48px 56px",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div style={{ borderBottom: `2px solid ${blue}`, paddingBottom: "16px", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "bold", letterSpacing: "0.5px", color: "#1a202c" }}>
            Nicholas Jordan Andersen
          </h1>
          <div style={{ fontSize: "14px", color: blue, fontStyle: "italic", marginTop: "4px", marginBottom: "10px" }}>
            Full Stack Software Engineer
          </div>
          <div style={{ fontSize: "12px", color: "#444" }}>
            <a href="https://www.njandersen.com" target="_blank" rel="noopener noreferrer" style={{ color: blue, textDecoration: "none" }}>
              njandersen.com
            </a>
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: "22px", fontSize: "13.5px", lineHeight: "1.65", color: "#333" }}>
          Full stack engineer with 2+ years of professional experience building and shipping production
          applications. Proven track record of leading projects end-to-end — from architecture to
          deployment — with a focus on performance, user experience, and measurable business impact.
        </div>

        {/* Experience */}
        <div style={{ marginBottom: "22px" }}>
          <div style={sectionTitle}>Professional Experience</div>

          <div style={{ marginBottom: "18px" }}>
            <div style={jobHeader}>
              <span style={{ fontWeight: "bold", fontSize: "14.5px" }}>Bit Source</span>
              <span style={{ fontSize: "12px", color: "#666" }}>Pikeville, KY</span>
            </div>
            <div style={jobHeader}>
              <span style={{ fontSize: "13px", color: blue, fontStyle: "italic", margin: "2px 0 6px" }}>
                Software Engineer &amp; Lead Developer
              </span>
              <span style={{ fontSize: "12px", color: "#666", whiteSpace: "nowrap", marginLeft: "12px" }}>
                March 2023 – Present
              </span>
            </div>
            <ul style={{ paddingLeft: "18px" }}>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Optimized CI/CD practices company-wide by implementing GitHub Actions and automated
                deployment pipelines, reducing deployment time by <strong>30%</strong> and production
                incidents by <strong>20%</strong>.
              </li>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Led adoption of Agile methodologies — sprint planning, standups, retrospectives —
                improving on-time project delivery across the team.
              </li>
            </ul>

            {/* Tunezle */}
            <div style={{ fontWeight: "bold", fontSize: "13px", margin: "10px 0 4px", color: "#1a202c" }}>
              Tunezle —{" "}
              <a href="https://tunezle.com" style={{ fontWeight: "normal", color: blue, fontSize: "12px", textDecoration: "none" }}>
                tunezle.com
              </a>
            </div>
            <ul style={{ paddingLeft: "18px" }}>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Designed and built a Wordle-inspired music game with a piano interface, growing to{" "}
                <strong>~1,500 active monthly users</strong> and winning multiple pitch competitions.
              </li>
            </ul>

            {/* Bingocize */}
            <div style={{ fontWeight: "bold", fontSize: "13px", margin: "10px 0 4px", color: "#1a202c" }}>
              Bingocize Web App
            </div>
            <ul style={{ paddingLeft: "18px" }}>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Revitalized a broken web app serving nursing home customers by rewriting the React
                frontend, optimizing the Node.js backend, and adding real-time Go WebSocket functionality.
              </li>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Improvements directly led to a <strong>significant contract win with the state of Ohio</strong>.
              </li>
            </ul>

            {/* Aizver */}
            <div style={{ fontWeight: "bold", fontSize: "13px", margin: "10px 0 4px", color: "#1a202c" }}>
              Aizver — AI Interactive Storyteller
            </div>
            <ul style={{ paddingLeft: "18px" }}>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Built an interactive storytelling app for children using Next.js and Firebase, integrating
                ElevenLabs for AI-generated voice narration and ChatGPT for dynamic story generation.
              </li>
              <li style={{ fontSize: "13px", lineHeight: "1.6", marginBottom: "5px", color: "#333" }}>
                Successfully sold and deployed the app across all Pike County libraries, bringing engaging,
                personalized story experiences to young readers throughout the county.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "22px" }}>
          <div style={sectionTitle}>Education</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontWeight: "bold" }}>Southern New Hampshire University</span>
            <span style={{ fontSize: "12px", color: "#666" }}>Graduated January 2023</span>
          </div>
          <div style={{ fontSize: "13px", color: "#333", marginTop: "2px" }}>
            B.S. Computer Science — Concentration in Software Engineering
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "22px" }}>
          <div style={sectionTitle}>Technical Skills</div>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "5px 12px", fontSize: "13px" }}>
            <span style={{ fontWeight: "bold", color: blue }}>Frontend</span>
            <span style={{ color: "#333" }}>JavaScript, TypeScript, React, Next.js, Tailwind CSS, Figma</span>
            <span style={{ fontWeight: "bold", color: blue }}>Backend</span>
            <span style={{ color: "#333" }}>Go, Node.js / Express, Java / Spring Boot, PostgreSQL, Firebase</span>
            <span style={{ fontWeight: "bold", color: blue }}>DevOps</span>
            <span style={{ color: "#333" }}>GitHub Actions, AWS, Azure DevOps, Docker, CI/CD pipelines</span>
          </div>
        </div>
      </div>
    </div>
  );
}
