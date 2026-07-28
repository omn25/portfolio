import { lifeItems } from "../data/siteData";
import ScrapbookCarousel from "./ScrapbookCarousel";

export default function LifeSection({ activeId, onActiveChange }) {
  return (
    <section id="life" className="carousel-section page-section section-anchor">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">02 / the everyday</p>
          <h2>life rn.</h2>
        </div>
        <p className="section-intro">
          Communities, people, school, movement, and the things I keep making
          time for.
        </p>
      </div>
      <ScrapbookCarousel
        label="Life right now"
        items={lifeItems}
        kind="life"
        activeId={activeId}
        onActiveChange={onActiveChange}
      />
    </section>
  );
}
