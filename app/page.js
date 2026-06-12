import Link from "next/link";

export const metadata = {
  title: "Lamont Addo | Software Engineer & Founder",
  description:
    "Lamont Addo is a software engineer, AWS Solutions Architect, and founder of MonTech, IndiVerse, and CuddleBuddy.",
};

const worlds = [
  {
    title: "IndiVerse",
    video: "/indiverse4resume.mp4",
    href: "https://app.indiverse.me",
  },
  {
    title: "CuddleBuddy",
    video: "/cuddlebuddy2.mp4",
    href: "https://cuddlebuddy.me",
  },
  {
    title: "MonTech",
    video: "/monTech_animated.MP4",
    href: "https://www.montechenterprise.com/",
  },
  {
    title: "Lamont",
    video: "/lamont.MP4",
    href: "https://app.indiverse.me/world/lamont",
  },
];

export default function Home() {
  return (
    <main className="la-main">
      <video className="la-bg-video" autoPlay muted loop playsInline>
        <source src="/black_waters.mp4" type="video/mp4" />
      </video>

      <div className="la-overlay" />

      <section className="la-stage">
        {worlds.map((world, index) => (
          <Link
            href={world.href}
            className="la-orb-link"
            key={world.title}
            aria-label={world.title}
            target={world.href.startsWith("http") ? "_blank" : undefined}
            rel={world.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{ animationDelay: `${index * 180}ms` }}
          >
            <div className="la-globe">
              <video autoPlay muted loop playsInline>
                <source src={world.video} type="video/mp4" />
              </video>
              <div className="la-globe-glass" />
              <div className="la-globe-shine" />
            </div>

            <span className="la-orb-name">{world.title}</span>
          </Link>
        ))}
      </section>

      <div className="la-install-hint">
        <span className="la-install-dot" />
        <span>
          Add this portal to your Home Screen: tap <strong>Menu</strong> →{" "}
          <strong>Share</strong> → <strong>Add to Home Screen</strong>.
        </span>
      </div>

      <style>{`
        .la-main {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #020617;
          font-family: Inter, Arial, sans-serif;
        }

        .la-bg-video {
          position: fixed;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.25) contrast(1.08) brightness(0.82);
          transform: scale(1.01);
        }

        .la-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 20% 30%, rgba(56,189,248,.16), transparent 32%),
            radial-gradient(circle at 82% 28%, rgba(168,85,247,.24), transparent 36%),
            linear-gradient(180deg, rgba(2,6,23,.12), rgba(2,6,23,.42));
          pointer-events: none;
        }

        .la-stage {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(2rem, 5vw, 5rem);
          padding: 3rem 3rem 6rem;
        }

        .la-orb-link {
          display: block;
          width: clamp(150px, 16vw, 235px);
          height: auto;
          border-radius: 50%;
          text-decoration: none;
          animation: riseIn 900ms ease both, floatOrb 6s ease-in-out infinite;
          transition: transform 260ms ease;
        }

        .la-orb-link:nth-child(2) {
          animation-duration: 900ms, 7s;
        }

        .la-orb-link:nth-child(3) {
          animation-duration: 900ms, 6.5s;
        }

        .la-orb-link:nth-child(4) {
          animation-duration: 900ms, 7.4s;
        }

        .la-orb-link:hover {
          transform: translateY(-14px) scale(1.08);
        }

        .la-globe {
          position: relative;
          width: clamp(150px, 16vw, 235px);
          height: clamp(150px, 16vw, 235px);
          overflow: hidden;
          border-radius: 50%;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.35);
          box-shadow:
            inset -18px -20px 45px rgba(0,0,0,.45),
            inset 10px 12px 34px rgba(255,255,255,.12),
            0 0 45px rgba(56,189,248,.32),
            0 28px 80px rgba(0,0,0,.55);
        }

        .la-orb-link:nth-child(2) .la-globe {
          box-shadow:
            inset -18px -20px 45px rgba(0,0,0,.45),
            inset 10px 12px 34px rgba(255,255,255,.12),
            0 0 48px rgba(168,85,247,.36),
            0 28px 80px rgba(0,0,0,.55);
        }

        .la-orb-link:nth-child(3) .la-globe {
          box-shadow:
            inset -18px -20px 45px rgba(0,0,0,.45),
            inset 10px 12px 34px rgba(255,255,255,.12),
            0 0 48px rgba(250,204,21,.28),
            0 28px 80px rgba(0,0,0,.55);
        }

        .la-orb-link:nth-child(4) .la-globe {
          box-shadow:
            inset -18px -20px 45px rgba(0,0,0,.45),
            inset 10px 12px 34px rgba(255,255,255,.12),
            0 0 52px rgba(168,85,247,.46),
            0 28px 80px rgba(0,0,0,.55);
        }

        .la-globe video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.08);
          transition: transform 700ms ease;
        }

        .la-orb-link:hover .la-globe video {
          transform: scale(1.18);
        }

        .la-globe-glass {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,.55), transparent 18%),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,.12), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,.22), transparent 42%, rgba(0,0,0,.2));
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .la-globe-shine {
          position: absolute;
          inset: -35%;
          border-radius: 50%;
          background: linear-gradient(
            115deg,
            transparent 38%,
            rgba(255,255,255,.55),
            transparent 58%
          );
          transform: translateX(-80%) rotate(18deg);
          animation: shine 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .la-orb-name {
          display: block;
          margin-top: 1.35rem;
          text-align: center;
          color: #f8fafc;
          font-size: clamp(1rem, 1.45vw, 1.35rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          text-shadow:
            0 0 22px rgba(56,189,248,.55),
            0 8px 30px rgba(0,0,0,.8);
          opacity: 0;
          transform: translateY(-5px);
          filter: blur(4px);
          animation: namePulse 4.8s ease-in-out infinite;
        }

        .la-orb-link:nth-child(2) .la-orb-name {
          animation-delay: .7s;
        }

        .la-orb-link:nth-child(3) .la-orb-name {
          animation-delay: 1.4s;
        }

        .la-orb-link:nth-child(4) .la-orb-name {
          animation-delay: 2.1s;
        }

        .la-orb-link:hover .la-orb-name {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
          animation: none;
        }

        .la-install-hint {
          position: fixed;
          left: 50%;
          bottom: 1.25rem;
          z-index: 5;
          transform: translateX(-50%);
          width: min(92vw, 720px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .65rem;
          padding: .8rem 1rem;
          border-radius: 999px;
          color: rgba(248,250,252,.86);
          font-size: .86rem;
          line-height: 1.35;
          text-align: center;
          background: rgba(2,6,23,.42);
          border: 1px solid rgba(255,255,255,.14);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 60px rgba(0,0,0,.28);
          animation: hintIn 900ms ease 1.1s both, hintBreathe 5s ease-in-out 2.2s infinite;
        }

        .la-install-hint strong {
          color: #ffffff;
          font-weight: 900;
        }

        .la-install-dot {
          width: 8px;
          height: 8px;
          min-width: 8px;
          border-radius: 50%;
          background: #7dd3fc;
          box-shadow: 0 0 18px rgba(125,211,252,.75);
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(.82);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes floatOrb {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -18px;
          }
        }

        @keyframes namePulse {
          0%, 18%, 100% {
            opacity: 0;
            transform: translateY(-5px);
            filter: blur(4px);
          }

          34%, 70% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes shine {
          0%, 55%, 100% {
            transform: translateX(-85%) rotate(18deg);
          }
          72% {
            transform: translateX(85%) rotate(18deg);
          }
        }

        @keyframes hintIn {
          from {
            opacity: 0;
            transform: translate(-50%, 12px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
            filter: blur(0);
          }
        }

        @keyframes hintBreathe {
          0%, 100% {
            opacity: .78;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 850px) {
          .la-stage {
            min-height: 100svh;
            overflow-x: auto;
            justify-content: flex-start;
            padding: 2rem 2rem 7rem;
            scroll-snap-type: x mandatory;
          }

          .la-orb-link {
            flex: 0 0 185px;
            width: 185px;
            scroll-snap-align: center;
          }

          .la-globe {
            width: 185px;
            height: 185px;
          }

          .la-install-hint {
            bottom: .85rem;
            border-radius: 22px;
            font-size: .78rem;
            padding: .75rem .9rem;
          }
        }
      `}</style>
    </main>
  );
}