"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { bulletinItems, socialLinks } from "../data/siteData";
import SpotifyPlayer from "./SpotifyPlayer";

const socialIcons = {
  email: MdEmail,
  linkedin: FaLinkedin,
  x: RiTwitterXFill,
  github: FaGithub,
};

export default function BulletinHero({ onNavigate }) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const replayIntro = () => setAnimationKey((current) => current + 1);
    window.addEventListener("homeClick", replayIntro);
    return () => window.removeEventListener("homeClick", replayIntro);
  }, []);

  return (
    <section id="home" className="hero-section section-anchor">
      <div className="bulletin-wrap">
        <p className="board-overline">a little map of what life looks like right now</p>
        <div className="bulletin-board" aria-label="Explore Om's life right now">
          <div className="board-grain" aria-hidden="true" />

          {bulletinItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.destination}`}
              aria-label={item.label}
              className={`board-item board-item--${item.type} board-item--${
                item.variant || "polaroid"
              }${
                item.mobileHidden ? " board-item--mobile-hidden" : ""
              }`}
              style={{
                "--board-x": item.style.x,
                "--board-y": item.style.y,
                "--board-width": item.style.width,
                "--board-rotation": item.style.rotation,
                "--board-aspect": item.style.aspect || "1.33",
                "--board-z": item.style.z || 2,
              }}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item);
              }}
            >
              {item.tape && <span className="board-tape" aria-hidden="true" />}
              {item.corner && (
                <>
                  <span
                    className="board-corner board-corner--left"
                    aria-hidden="true"
                  />
                  <span
                    className="board-corner board-corner--right"
                    aria-hidden="true"
                  />
                </>
              )}
              {item.pin && (
                <span
                  className={`board-pin board-pin--${item.pin}`}
                  aria-hidden="true"
                />
              )}
              {item.type === "note" ? (
                <span className="board-note-content">{item.noteText}</span>
              ) : item.logos ? (
                <span className="board-image board-logo-pair">
                  {item.logos.map((logo) => (
                    <span className="board-logo-pair__item" key={logo.src}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="120px"
                        style={{ objectFit: "contain" }}
                      />
                    </span>
                  ))}
                </span>
              ) : (
                <span className="board-image">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 720px) 42vw, 18vw"
                    style={{
                      objectFit:
                        item.fit || (item.type === "logo" ? "contain" : "cover"),
                      objectPosition: item.objectPosition || "50% 50%",
                    }}
                  />
                </span>
              )}
            </a>
          ))}

          <article className="intro-paper">
            <span className="intro-tape intro-tape--left" aria-hidden="true" />
            <span className="intro-tape intro-tape--right" aria-hidden="true" />
            <p className="eyebrow">Toronto, Ontario</p>
            <h1 className="hero-title">
              <TypeAnimation
                key={animationKey}
                sequence={[
                  "Hi, I'm Om Nathwani!",
                  700,
                  "CS @ UWaterloo 🦁",
                  700,
                  "BBA @ WLU 🦅",
                  700,
                  "Varsity Athlete XC + T&F 🏃",
                  700,
                  "Hi, I'm Om Nathwani!",
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor
                deletionSpeed={65}
              />
            </h1>
            <p className="hero-copy">
              A student, builder, runner, and person collecting a lot of good
              moments along the way.
            </p>

            <div className="hero-links" aria-label="Contact and social links">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.id];
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                );
              })}
            </div>

            <div className="hero-actions">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="paper-button"
              >
                open resume
                <span aria-hidden="true">↗</span>
              </Link>
              <span className="hero-hint">tap a piece to look closer</span>
            </div>

            <SpotifyPlayer />
          </article>
        </div>
      </div>
    </section>
  );
}
