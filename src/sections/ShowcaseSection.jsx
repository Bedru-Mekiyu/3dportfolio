import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { showcaseProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectChip = ({ label }) => (
  <span className="project-chip">{label}</span>
);

const RentalPortalPreview = ({ alt }) => (
  <div className="rental-preview" role="img" aria-label={alt}>
    <div className="rental-browser-bar">
      <div className="rental-browser-dots" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="rental-browser-address">rentalapp-nine-pearl.vercel.app/login</div>
      <div className="rental-browser-chip" aria-hidden>
        Rental Management System
      </div>
    </div>

    <div className="rental-screen">
      <div className="rental-brand-panel">
        <div className="rental-brand-emblem" aria-hidden>
          <div className="rental-brand-ring">
            <div className="rental-brand-core">
              <span className="rental-brand-mark">EISC</span>
              <span className="rental-brand-submark">Rental portal</span>
            </div>
          </div>
        </div>

        <div className="rental-brand-copy">
          <p className="rental-brand-kicker">Institutional workspace</p>
          <h3>Rental management access</h3>
          <p>
            A clean sign-in experience for admins handling listings, approvals,
            and reservations.
          </p>
        </div>
      </div>

      <div className="rental-form-panel">
        <div className="rental-form-shell">
          <span className="rental-form-pill">
            <span className="rental-form-pill-dot" aria-hidden />
            Secure portal
          </span>

          <div className="rental-form-header">
            <h3>Welcome back</h3>
            <p>Sign in to continue</p>
          </div>

          <div className="rental-form-fields">
            <div className="rental-form-field">
              <span>Email address</span>
              <div className="rental-form-input">admin@example.com</div>
            </div>

            <div className="rental-form-field">
              <span>Password</span>
              <div className="rental-form-input rental-form-input--password">
                <span>........</span>
                <span className="rental-form-eye" aria-hidden />
              </div>
            </div>
          </div>

          <button type="button" className="rental-form-button">
            Sign In
          </button>

          <p className="rental-form-footer">
            First time? Contact your administrator to create an account.
          </p>
        </div>
      </div>
    </div>

    <div className="showcase-media-shine" aria-hidden />
  </div>
);

const CivicVoiceCompactPreview = ({ alt }) => (
  <div className="civic-preview" role="img" aria-label={alt}>
    <div className="civic-topbar">
      <div className="civic-brand">
        <span className="civic-brand-mark" aria-hidden>
          CV
        </span>
        <span>CivicVoice Et</span>
      </div>

      <div className="civic-nav" aria-hidden>
        <span className="civic-nav-pill civic-nav-pill--active">Home</span>
        <span className="civic-nav-pill">Services</span>
        <span className="civic-nav-pill">FAQ</span>
      </div>

      <button type="button" className="civic-signin">
        Sign In
      </button>
    </div>

    <div className="civic-hero">
      <div className="civic-copy">
        <p className="civic-kicker">Civic innovation</p>
        <h3>CivicVoice Et</h3>
        <p>
          Report issues, track status, and stay connected with local
          authorities through one public-facing platform.
        </p>

        <div className="civic-actions" aria-hidden>
          <span className="civic-action civic-action--primary">Explore</span>
          <span className="civic-action">Watch demo</span>
        </div>
      </div>

      <div className="civic-scene" aria-hidden>
        <span className="civic-flag civic-flag--one" />
        <span className="civic-flag civic-flag--two" />
        <span className="civic-flag civic-flag--three" />

        <div className="civic-skyline">
          <span className="civic-building civic-building--1" />
          <span className="civic-building civic-building--2" />
          <span className="civic-building civic-building--3" />
          <span className="civic-building civic-building--4" />
          <span className="civic-building civic-building--5" />
        </div>

        <div className="civic-road" />

        <div className="civic-crowd">
          <span className="civic-person civic-person--1" />
          <span className="civic-person civic-person--2" />
          <span className="civic-person civic-person--3" />
          <span className="civic-person civic-person--4" />
        </div>
      </div>
    </div>

    <div className="showcase-media-shine" aria-hidden />
  </div>
);

const FeaturedProjectMedia = ({ project }) => {
  if (project.visualVariant === "rentalPortal") {
    return <RentalPortalPreview alt={project.alt} />;
  }

  return (
    <>
      <img
        src={project.imgPath}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className="showcase-img object-cover"
      />
      <div className="showcase-media-shine" aria-hidden />
    </>
  );
};

const CompactProjectMedia = ({ project }) => {
  if (project.visualVariant === "civicVoice") {
    return <CivicVoiceCompactPreview alt={project.alt} />;
  }

  return (
    <>
      <img
        src={project.imgPath}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className="showcase-img object-contain"
      />
      <div className="showcase-media-shine" aria-hidden />
    </>
  );
};

const FeaturedProject = ({ project }) => (
  <article className="first-project-wrapper showcase-reveal">
    <div className="showcase-featured-media">
      <div className="image-wrapper">
        <FeaturedProjectMedia project={project} />
      </div>
      <div className="showcase-floating-index" aria-hidden>
        {project.index}
      </div>
    </div>

    <div className="text-content showcase-featured-body">
      <div className="showcase-meta-row">
        <span className="showcase-kicker">{project.category}</span>
        <span className="showcase-index-inline">{project.index}</span>
      </div>
      <h2 className="showcase-title-featured">{project.title}</h2>
      <p className="showcase-headline">{project.headline}</p>

      <div className="showcase-narrative">
        <div className="showcase-narrative-block">
          <p className="showcase-narrative-label">Challenge</p>
          <p className="showcase-narrative-text">{project.context}</p>
        </div>
        <div className="showcase-narrative-block">
          <p className="showcase-narrative-label">What shipped</p>
          <p className="showcase-narrative-text">{project.outcome}</p>
        </div>
      </div>

      <div className="showcase-chips">
        {project.stack.map((tech) => (
          <ProjectChip key={tech} label={tech} />
        ))}
      </div>

      <a href={project.href} className="showcase-cta">
        <span>Discuss a similar build</span>
        <span className="showcase-cta-arrow" aria-hidden>
          →
        </span>
      </a>
    </div>
  </article>
);

const CompactProject = ({ project }) => (
  <article className="project showcase-reveal showcase-compact">
    <div className="showcase-compact-top">
      <div className="image-wrapper">
        <CompactProjectMedia project={project} />
      </div>
      <div className="showcase-compact-meta">
        <span className="showcase-index-compact">{project.index}</span>
        <span className="showcase-kicker-compact">{project.category}</span>
      </div>
    </div>

    <div className="showcase-compact-copy">
      <h2 className="showcase-title-compact">{project.title}</h2>
      <p className="showcase-headline-compact">{project.headline}</p>
      <p className="showcase-lede">{project.context}</p>
      <div className="showcase-chips">
        {project.stack.map((tech) => (
          <ProjectChip key={tech} label={tech} />
        ))}
      </div>
      <a href={project.href} className="showcase-cta showcase-cta--subtle">
        <span>Talk about this project</span>
        <span className="showcase-cta-arrow" aria-hidden>
          →
        </span>
      </a>
    </div>
  </article>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [featured, ...rest] = showcaseProjects;

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.1, ease: "power2.out" }
    );

    gsap.utils.toArray(".showcase-reveal").forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.08 * index,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=11%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-[1400px] mx-auto">
        <TitleHeader
          title="Work that ships — not just slides"
          sub="Case studies & shipped products"
        />

        <div className="showcaselayout mt-14 md:mt-20">
          <FeaturedProject project={featured} />

          <div className="project-list-wrapper overflow-hidden">
            {rest.map((project) => (
              <CompactProject key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
