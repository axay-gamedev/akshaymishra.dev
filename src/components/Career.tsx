import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>CyberChef · GCHQ · Remote</h5>
              </div>
              <h3>Aug 2026</h3>
            </div>
            <p>
              Diagnosed an issue in CyberChef's fromDecimal operation where
              Auto delimiter detection could miss data. Submitted a unit-tested
              fix using the existing detectDelim utility to correctly parse
              multi-number input.
              <br /><a href="https://github.com/gchq/CyberChef/pull/2670" target="_blank" rel="noreferrer">View pull request #2670 ↗</a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Team Core Member</h4>
                <h5>St Mary's Academy · Meerut</h5>
              </div>
              <h3>2022–2023</h3>
            </div>
            <p>
              Co-organized the school's COSMA technology festival, helping with
              event logistics and technical setup. Produced promotional and
              event videos and designed presentations and digital assets for
              event sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
