import { careerItems } from "../data/siteData";
import ScrapbookCarousel from "./ScrapbookCarousel";

export default function CareerSection({ activeId, onActiveChange }) {
  return (
    <section
      id="career"
      className="carousel-section career-section page-section section-anchor"
    >
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">03 / the passion</p>
          <h2>career rn.</h2>
        </div>
        <aside className="career-direction">
          <span className="paperclip" aria-hidden="true" />
          <p>I’m passionate about building the backend systems behind financial products and infrastructure, from payments and financial workflows to data, risk, and decision-making systems.</p>
        </aside>
      </div>
      <ScrapbookCarousel
        label="Career right now"
        items={careerItems}
        kind="career"
        activeId={activeId}
        onActiveChange={onActiveChange}
      />
    </section>
  );
}
