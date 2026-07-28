import Image from "next/image";
import { aboutParagraphs, mePhotos } from "../data/siteData";

export default function MeSection() {
  return (
    <section id="me" className="me-section page-section section-anchor">
      <div className="section-heading">
        <p className="eyebrow">01 / the person</p>
        <h2>me rn.</h2>
      </div>

      <div className="me-scrapbook">
        {mePhotos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`me-photo me-photo--${photo.placement}`}
          >
            <span className="photo-tape" aria-hidden="true" />
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 720px) 44vw, 260px"
              className="object-cover"
            />
            <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}

        <article className="me-copy paper-surface">
          <p className="paper-label">a note from me</p>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <span className="scribble" aria-hidden="true">
            still figuring it out →
          </span>
        </article>
      </div>
    </section>
  );
}
