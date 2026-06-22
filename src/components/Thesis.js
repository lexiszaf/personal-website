import React from 'react';

function Thesis() {
  return (
    <div style={styles.page}>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.sectionInner}>
          <span className="section-label">University of Florida · Herbert Wertheim College of Engineering</span>
          <h1 style={styles.heroTitle} className="display-heading">
            Research
          </h1>
          <p style={styles.heroSubtitle}>
            Department of Computer &amp; Information Science &amp; Engineering · May 2026
          </p>
          <span className="accent-line" />
        </div>
      </section>

      {/* Thesis title + content */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.thesisTitleBlock}>
            <span className="section-label">Honors Thesis</span>
            <h2 style={styles.thesisTitle} className="display-heading">
              Robo Rabbi: Evaluating Artificial Intelligence's Ability to Answer Theological Questions Within Orthodox Judaism
            </h2>
          </div>

          <div style={styles.twoCol}>
            <div style={styles.mainCol}>
              <div style={styles.contentBlock}>
                <h3 style={styles.blockHeading}>Abstract</h3>
                <p style={styles.bodyText}>
                  Large language models (LLMs) are increasingly being used to answer complex, domain-specific questions — but how well do they perform in areas requiring deep cultural and theological expertise? This study evaluates GPT-4o, Claude 4 Sonnet, and Llama 3.3 70B on 70 questions spanning 9 categories of Orthodox Jewish law and theology, comparing baseline performance against retrieval-augmented generation (RAG).
                </p>
                <p style={styles.bodyText}>
                  To assess real-world perception, 12 participants — both experts and non-experts in Jewish law — completed a blind Qualtrics survey evaluating a subset of 5 questions, rating responses from the three LLMs and a practicing Rabbi on accuracy, clarity, helpfulness, and trustworthiness. GPT-4o with RAG achieved the highest AI rating (M = 3.76), statistically indistinguishable from the Rabbi (M = 3.82). RAG improved all models, though the improvement was not statistically significant overall. Critically, expert evaluators rated AI responses significantly lower than non-experts, suggesting that surface-level fluency masks theological deficiencies only detectable by domain specialists. Human-written responses were correctly identified just 48.3% of the time, highlighting how convincingly AI mimics religious expertise — and why that should give us pause.
                </p>
              </div>

              <div style={styles.contentBlock}>
                <h3 style={styles.blockHeading}>Motivation &amp; Background</h3>
                <p style={styles.bodyText}>
                  AI tools like ChatGPT are now being consulted for religious guidance — a domain where accuracy is not just intellectually important but spiritually consequential. Orthodox Jewish law (Halacha) is one of the most complex religious legal systems in existence, built on layered Talmudic reasoning, responsa literature, and community-specific rulings developed over millennia. A mistake isn't just academically wrong; it can lead people to violate religious law without knowing it.
                </p>
                <p style={styles.bodyText}>
                  Despite this, there has been virtually no rigorous evaluation of how well LLMs handle this domain. My thesis is the first study to systematically benchmark major frontier models on Orthodox Jewish theology, introducing a structured divergence scoring methodology and pairing it with a human perception study to understand not just what AI gets right — but how convincingly it presents what it gets wrong.
                </p>
              </div>

              <div style={styles.contentBlock}>
                <h3 style={styles.blockHeading}>Research Questions</h3>
                <ul style={styles.questionList}>
                  <li style={styles.questionItem}>
                    <strong>RQ1:</strong> How accurately do LLMs respond to questions about Orthodox Jewish law and theology, and do accuracy levels vary across question categories?
                  </li>
                  <li style={styles.questionItem}>
                    <strong>RQ2:</strong> Does retrieval-augmented generation (RAG) meaningfully improve LLM accuracy on Orthodox Jewish theological questions compared to baseline prompting?
                  </li>
                  <li style={styles.questionItem}>
                    <strong>RQ3:</strong> How do LLM responses compare to those of a practicing Rabbi in perceived accuracy and trustworthiness — and does evaluator expertise shape that perception?
                  </li>
                </ul>
              </div>

              <div style={styles.contentBlock}>
                <h3 style={styles.blockHeading}>Methodology</h3>
                <p style={styles.bodyText}>
                  I built a dataset of 70 questions across 9 theological categories: Shabbat, Kashrut, Prayer, Holidays, Family Purity, Business Ethics, Medical Ethics, Mourning, and General Halacha. Each question was answered by GPT-4o, Claude 4 Sonnet, and Llama 3.3 70B — both in a standard prompting baseline condition and with a RAG pipeline pulling from curated Orthodox Jewish legal texts.
                </p>
                <p style={styles.bodyText}>
                  Responses were scored using a structured divergence metric evaluating factual accuracy, completeness, nuance, and sourcing. For the human perception study, 5 representative questions were selected and presented blind to 12 participants (IRB #ET00049258) via Qualtrics. Participants rated all four response sources (three AI models + one Rabbi) on accuracy, clarity, helpfulness, and trustworthiness without knowing which came from AI. Statistical analysis used paired t-tests and ANOVA with Tukey HSD post-hoc comparisons.
                </p>
              </div>

              <div style={styles.contentBlock}>
                <h3 style={styles.blockHeading}>Key Findings &amp; Contributions</h3>
                <div style={styles.findingsGrid}>
                  <div style={styles.findingCard}>
                    <span style={styles.findingMetric}>M = 3.76</span>
                    <span style={styles.findingLabel}>GPT-4o with RAG — highest AI rating</span>
                  </div>
                  <div style={styles.findingCard}>
                    <span style={styles.findingMetric}>M = 3.82</span>
                    <span style={styles.findingLabel}>Rabbi rating — not significantly different from GPT-4o RAG</span>
                  </div>
                  <div style={styles.findingCard}>
                    <span style={styles.findingMetric}>48.3%</span>
                    <span style={styles.findingLabel}>Human-written identification rate — barely above chance</span>
                  </div>
                  <div style={styles.findingCard}>
                    <span style={styles.findingMetric}>p &lt; 0.05</span>
                    <span style={styles.findingLabel}>Experts rated AI significantly lower than non-experts</span>
                  </div>
                </div>
                <p style={styles.bodyText}>
                  RAG improved responses across all three models, but the improvement did not reach statistical significance — suggesting that retrieval alone is not sufficient for this domain and that deeper theological reasoning remains a gap. The expert vs. non-expert divergence is the most striking finding: people with surface familiarity with Jewish practice rated AI responses nearly as highly as a Rabbi's, while those with genuine expertise consistently identified theological inaccuracies, misapplied rulings, and missing nuance. AI is convincingly fluent in a way that is potentially dangerous in high-stakes religious or ethical domains.
                </p>
              </div>
            </div>

            <div style={styles.sideCol}>
              <div style={styles.metaCard}>
                <h4 style={styles.metaHeading}>Thesis Details</h4>
                <div style={styles.metaList}>
                  <MetaRow label="Degree" value="B.S. Computer Science" />
                  <MetaRow label="Distinction" value="Honors in the Major" />
                  <MetaRow label="Institution" value="University of Florida" />
                  <MetaRow label="College" value="Herbert Wertheim College of Engineering" />
                  <MetaRow label="Year" value="May 2026" />
                  <MetaRow label="Chair" value="Dr. Neha Rani" />
                  <MetaRow label="Committee" value="Ashish Aggarwal, Alan Rubenstein, Roy Holler" />
                  <MetaRow label="IRB Protocol" value="#ET00049258" />
                </div>
              </div>

              <div style={styles.metaCard}>
                <h4 style={styles.metaHeading}>Skills &amp; Topics</h4>
                <div style={styles.tagCloud}>
                  {[
                    'LLMs', 'RAG', 'NLP', 'GPT-4o', 'Claude', 'Llama',
                    'Orthodox Judaism', 'Halacha', 'Statistical Analysis',
                    'Survey Design', 'Python', 'Qualtrics'
                  ].map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div style={styles.metaCard}>
                <h4 style={styles.metaHeading}>Models Evaluated</h4>
                <div style={styles.modelList}>
                  {[
                    { name: 'GPT-4o', org: 'OpenAI' },
                    { name: 'Claude 4 Sonnet', org: 'Anthropic' },
                    { name: 'Llama 3.3 70B', org: 'Meta' },
                  ].map(m => (
                    <div key={m.name} style={styles.modelRow}>
                      <span style={styles.modelName}>{m.name}</span>
                      <span style={styles.modelOrg}>{m.org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function MetaRow({ label, value }) {
  return (
    <div style={metaStyles.row}>
      <span style={metaStyles.label}>{label}</span>
      <span style={metaStyles.value}>{value}</span>
    </div>
  );
}

const metaStyles = {
  row: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    paddingBottom: '12px',
    borderBottom: '1px solid #e4e4e7',
  },
  label: {
    fontSize: '0.7rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#a1a1aa',
  },
  value: {
    fontSize: '0.9rem',
    color: '#18181b',
    fontWeight: '400',
  },
};

const styles = {
  page: {
    paddingTop: '60px',
    backgroundColor: '#ffffff',
  },
  hero: {
    padding: '80px 0 60px',
    borderBottom: '1px solid #e4e4e7',
    backgroundColor: '#fafafa',
  },
  sectionInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
  },
  section: {
    padding: '80px 0',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    marginTop: '12px',
    marginBottom: '12px',
  },
  heroSubtitle: {
    fontSize: '1rem',
    color: '#71717a',
    margin: '0 0 20px',
  },
  thesisTitleBlock: {
    marginBottom: '60px',
    paddingBottom: '40px',
    borderBottom: '1px solid #e4e4e7',
  },
  thesisTitle: {
    fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
    marginTop: '8px',
    color: '#18181b',
    lineHeight: '1.25',
    fontStyle: 'italic',
  },
  twoCol: {
    display: 'flex',
    gap: '48px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  mainCol: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  sideCol: {
    width: '260px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contentBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  blockHeading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#18181b',
    paddingBottom: '10px',
    borderBottom: '1px solid #e4e4e7',
  },
  bodyText: {
    fontSize: '0.97rem',
    color: '#52525b',
    lineHeight: '1.8',
  },
  questionList: {
    margin: 0,
    padding: '0 0 0 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  questionItem: {
    fontSize: '0.97rem',
    color: '#52525b',
    lineHeight: '1.7',
  },
  findingsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '16px',
  },
  findingCard: {
    background: '#fafafa',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  findingMetric: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#4f46e5',
  },
  findingLabel: {
    fontSize: '0.78rem',
    color: '#71717a',
    lineHeight: '1.5',
  },
  metaCard: {
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fafafa',
  },
  metaHeading: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.7rem',
    fontWeight: '600',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#a1a1aa',
    marginBottom: '16px',
  },
  metaList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  tagCloud: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  modelList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  modelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    borderBottom: '1px solid #e4e4e7',
  },
  modelName: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#18181b',
  },
  modelOrg: {
    fontSize: '0.78rem',
    color: '#a1a1aa',
  },
};

export default Thesis;
