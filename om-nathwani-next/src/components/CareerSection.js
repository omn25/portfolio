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
          <p className="eyebrow">03 / the work</p>
          <h2>career rn.</h2>
        </div>
        <aside className="career-direction">
          <span className="paperclip" aria-hidden="true" />
          <p>Current career direction / what I want to work on goes here.</p>
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
