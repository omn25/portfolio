"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function LifeCard({ item }) {
  return (
    <article
      className={`scrapbook-widget life-widget life-widget--${item.layout}`}
    >
      <header className="widget-header">
        <div>
          <p className="widget-eyebrow">{item.eyebrow}</p>
          <h3>{item.title}</h3>
        </div>
        {item.logo && (
          <div
            className={`widget-logo${
              item.secondaryLogo ? " widget-logo--paired" : ""
            }`}
          >
            <span className="widget-logo__item">
              <Image
                src={item.logo}
                alt={item.logoAlt}
                fill
                sizes="120px"
                style={{
                  objectFit: item.logoFit || "contain",
                  filter: item.logoFilter,
                }}
              />
            </span>
            {item.secondaryLogo && (
              <span className="widget-logo__item">
                <Image
                  src={item.secondaryLogo}
                  alt={item.secondaryLogoAlt}
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </span>
            )}
          </div>
        )}
      </header>

      <div className="life-collage">
        {item.images.map((image, index) => (
          <figure
            className={`collage-photo collage-photo--${index + 1}`}
            key={image.src}
          >
            {index === 0 && <span className="photo-tape" aria-hidden="true" />}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 720px) 68vw, 420px"
              style={{
                objectFit: image.fit || "cover",
                objectPosition: image.objectPosition || "50% 50%",
              }}
            />
          </figure>
        ))}

        {item.images.length === 0 && item.logo && (
          <div className="logo-poster">
            <span className="poster-tape" aria-hidden="true" />
            <Image
              src={item.cardImage || item.logo}
              alt={item.cardImageAlt || ""}
              fill
              sizes="(max-width: 720px) 60vw, 460px"
              style={{ objectFit: item.cardFit || item.logoFit || "contain" }}
            />
          </div>
        )}
      </div>

      <aside className="widget-note">
        <span aria-hidden="true">✦</span>
        <p>{item.notes}</p>
      </aside>
    </article>
  );
}

function CareerCard({ item }) {
  const Card = item.href ? "a" : "article";

  return (
    <Card
      className="scrapbook-widget career-widget"
      {...(item.href
        ? {
            href: item.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": item.linkLabel
              ? `${item.linkLabel}: ${item.title}`
              : `Visit ${item.title}`,
          }
        : {})}
    >
      <div className="career-logo-sheet">
        <span className="career-tape" aria-hidden="true" />
        <div className="career-logo">
          <Image
            src={item.logo}
            alt={item.logoAlt}
            fill
            sizes="(max-width: 720px) 52vw, 260px"
            style={{
              objectFit: "contain",
              filter: item.logoFilter,
            }}
          />
        </div>
        {item.image && (
          <figure className="career-photo">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 720px) 52vw, 300px"
              className="object-cover"
            />
          </figure>
        )}
      </div>

      <div className="career-content">
        <p className="widget-eyebrow">{item.role}</p>
        <h3>
          {item.title}
          {item.href && <FiExternalLink aria-hidden="true" />}
        </h3>
        <dl className="career-meta">
          <div>
            <dt>when</dt>
            <dd>{item.dates}</dd>
          </div>
          <div>
            <dt>where</dt>
            <dd>{item.location}</dd>
          </div>
        </dl>
        <div className="career-note">
          <span className="career-note-label">the short version</span>
          <p>{item.notes}</p>
        </div>
        {item.technologies && (
          <ul className="tech-list" aria-label="Technologies">
            {item.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        {item.href && (
          <span className="career-visit">
            {item.linkLabel || "visit site"}
            <FiExternalLink aria-hidden="true" />
          </span>
        )}
      </div>
    </Card>
  );
}

export default function ScrapbookCarousel({
  label,
  items,
  kind,
  activeId,
  onActiveChange,
}) {
  const viewportRef = useRef(null);
  const slideRefs = useRef(new Map());
  const dragState = useRef({ active: false, startX: 0, startScroll: 0 });
  const scrollFrame = useRef(null);
  const programmaticTarget = useRef(null);
  const programmaticTimer = useRef(null);
  const reportedFromScroll = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );

  const scrollToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, items.length - 1));
    const item = items[safeIndex];
    onActiveChange(item.id);
  };

  useEffect(() => {
    if (reportedFromScroll.current === activeId) {
      reportedFromScroll.current = null;
      return;
    }

    const slide = slideRefs.current.get(activeId);
    const viewport = viewportRef.current;
    if (!slide || !viewport) return;

    programmaticTarget.current = activeId;
    if (programmaticTimer.current) clearTimeout(programmaticTimer.current);
    programmaticTimer.current = setTimeout(() => {
      programmaticTarget.current = null;
    }, 900);

    viewport.scrollTo({
      left:
        slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2,
      behavior: getReducedMotion() ? "auto" : "smooth",
    });
  }, [activeId]);

  useEffect(
    () => () => {
      if (scrollFrame.current) cancelAnimationFrame(scrollFrame.current);
      if (programmaticTimer.current) clearTimeout(programmaticTimer.current);
    },
    [],
  );

  const updateActiveSlide = () => {
    if (scrollFrame.current) cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;

      if (programmaticTarget.current) {
        const targetSlide = slideRefs.current.get(programmaticTarget.current);
        if (targetSlide) {
          const maximumScroll =
            viewport.scrollWidth - viewport.clientWidth;
          const targetScroll = Math.min(
            maximumScroll,
            Math.max(
              0,
              targetSlide.offsetLeft -
                (viewport.clientWidth - targetSlide.offsetWidth) / 2,
            ),
          );
          if (Math.abs(viewport.scrollLeft - targetScroll) < 8) {
            programmaticTarget.current = null;
            if (programmaticTimer.current) {
              clearTimeout(programmaticTimer.current);
            }
          }
        }
        return;
      }

      let closestItem = items[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item) => {
        const slide = slideRefs.current.get(item.id);
        if (!slide) return;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - slideCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      if (closestItem.id !== activeId) {
        reportedFromScroll.current = closestItem.id;
        onActiveChange(closestItem.id);
      }
    });
  };

  const startDrag = (event) => {
    if (event.pointerType !== "mouse") return;
    if (event.target.closest("a, button")) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    dragState.current = {
      active: true,
      startX: event.clientX,
      startScroll: viewport.scrollLeft,
    };
    viewport.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const moveDrag = (event) => {
    if (!dragState.current.active || event.pointerType !== "mouse") return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    event.preventDefault();
    viewport.scrollLeft =
      dragState.current.startScroll -
      (event.clientX - dragState.current.startX);
  };

  const endDrag = (event) => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    if (viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <div className={`carousel carousel--${kind}`}>
      <div className="carousel-toolbar">
        <p aria-live="polite">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          {" / "}
          {String(items.length).padStart(2, "0")} — {items[activeIndex].title}
        </p>
        <div className="carousel-arrows">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label={`Previous ${label} item`}
          >
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === items.length - 1}
            aria-label={`Next ${label} item`}
          >
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={`carousel-viewport${isDragging ? " is-dragging" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex="0"
        onScroll={updateActiveSlide}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollToIndex(activeIndex - 1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollToIndex(activeIndex + 1);
          }
        }}
      >
        <div className="carousel-track">
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={(node) => {
                if (node) slideRefs.current.set(item.id, node);
                else slideRefs.current.delete(item.id);
              }}
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}: ${item.title}`}
              aria-current={item.id === activeId ? "true" : undefined}
            >
              {kind === "life" ? (
                <LifeCard item={item} />
              ) : (
                <CareerCard item={item} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" aria-label={`Choose a ${label} item`}>
        {items.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={item.id === activeId ? "is-active" : ""}
            onClick={() => scrollToIndex(index)}
            aria-label={`Show ${item.title}`}
            aria-current={item.id === activeId ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
