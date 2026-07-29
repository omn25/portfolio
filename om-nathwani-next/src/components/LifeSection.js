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
          Communities, initiatives, school, hobbies, and the things that make up my time that I&apos;m grateful for.
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
