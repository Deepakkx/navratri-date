import { useEffect, useRef, useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "917742444105";
const WHATSAPP_MESSAGE = "Ily lets go";

const noMessages = [
  "Are you sure? 🥺",
  "Really sure? 😭",
  "Think again... 👀",
  "But we could do Garba 🥹",
  "I already imagined the outfits 😭",
  "That cannot be your final answer 😌",
  "One more chance? ❤️",
  "Please? Just one Garba night 🥺",
  "You're breaking my heart 💔",
  "Okay... think again 😭",
  "I think you clicked the wrong button 👀",
  "The YES button is right there ❤️",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const finalSectionRef = useRef(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  const handleYes = () => {
    setAccepted(true);

    createConfetti();

    setTimeout(() => {
      openWhatsApp();
    }, 900);
  };

  const handleNo = () => {
    setNoCount((previous) => previous + 1);
  };

  const scrollToQuestion = () => {
    finalSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const currentNoText =
    noMessages[noCount % noMessages.length];

  return (
    <div className="app">

      {/* ==============================
          HERO
      ============================== */}

      <section className="hero">

        <div className="stars"></div>

        <div className="moon"></div>

        <div className="hero-content">

          <div className="eyebrow">
            A little Navratri invitation
          </div>

          <h1>
            Will you be
            <br />
            my Navratri date?
          </h1>

          <p>
            Because Garba is more fun when there is
            someone special to dance through the night with.
          </p>

          <div className="hero-buttons">

            <button
              className="button button-primary"
              onClick={handleYes}
            >
              Yes, obviously ❤️
            </button>

            <button
              className="button button-outline"
              onClick={scrollToQuestion}
            >
              Let me think ✨
            </button>

          </div>

        </div>


        {/* Navratri illustration */}

        <div className="garba-visual">

          <div className="garba-glow"></div>

          <video
            className="garba-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="/navratri-video.mp4"
              type="video/mp4"
            />
          </video>

          <div className="visual-overlay"></div>

        </div>

        <div className="scroll-indicator">
          Scroll ↓
        </div>

      </section>


      {/* ==============================
          INTRO
      ============================== */}

      <section className="intro-section reveal">

        <div className="content-width">

          <span className="section-label">
            Just hear me out
          </span>

          <h2>
            I have a few very good
            <br />
            reasons.
          </h2>

          <p className="section-description">
            Going to Garba with me comes with absolutely
            no guarantees except good music, questionable
            dance moves and hopefully a really good night.
          </p>

        </div>

      </section>


      {/* ==============================
          BENEFITS
      ============================== */}

      <section className="benefits-section reveal">

        <div className="content-width">

          <div className="section-heading">

            <span className="section-label">
              The benefits
            </span>

            <h2>
              Why you should
              <br />
              come with me.
            </h2>

          </div>


          <div className="benefits-grid">

            <BenefitCard
              number="01"
              icon="💃"
              title="Better Garba"
              text="Two people dramatically overestimating their dance skills together."
            />

            <BenefitCard
              number="02"
              icon="🪔"
              title="Festive Energy"
              text="Lights, music, colours, dandiya and all the Navratri chaos."
            />

            <BenefitCard
              number="03"
              icon="☕"
              title="Chai Breaks"
              text="Because even the best dancers need a chai and snack break."
            />

            <BenefitCard
              number="04"
              icon="📸"
              title="Photo Evidence"
              text="At least one ridiculously cute picture. Maybe more."
            />

            <BenefitCard
              number="05"
              icon="🌙"
              title="Late Night Walk"
              text="After Garba, a slow walk and some actual time together."
            />

            <BenefitCard
              number="06"
              icon="❤️"
              title="A Memory"
              text="One Navratri night that we can look back on later."
            />

          </div>

        </div>

      </section>


      {/* ==============================
          PLAN
      ============================== */}

      <section className="plan-section reveal">

        <div className="content-width">

          <span className="section-label light">
            The unofficial plan
          </span>

          <h2>
            One night.
            <br />
            A few rounds.
            <br />
            Lots of memories.
          </h2>

          <p className="section-description light-text">
            No complicated itinerary.
            Just dancing, food, lights, laughter
            and you.
          </p>


          <div className="timeline">

            <TimelineItem
              number="01"
              time="07:30"
              title="Meet"
              text="Get ready and pretend we're both calm."
            />

            <TimelineItem
              number="02"
              time="08:00"
              title="Garba"
              text="Dandiya begins. Coordination optional."
            />

            <TimelineItem
              number="03"
              time="10:30"
              title="Break"
              text="Food, chai and terrible dance analysis."
            />

            <TimelineItem
              number="04"
              time="11:30"
              title="Us"
              text="One last round and a quiet walk."
            />

          </div>

        </div>

      </section>


      {/* ==============================
          CUTE SECTION
      ============================== */}

      <section className="cute-section reveal">

        <div className="cute-card">

          <div className="cute-decoration">
            ✦
          </div>

          <span className="section-label">
            One small request
          </span>

          <h2>
            I don't need
            <br />
            perfect Garba moves.
          </h2>

          <p>
            I just need someone I'd actually
            want to dance with.
          </p>

          <div className="cute-heart">
            ♥
          </div>

        </div>

      </section>


      {/* ==============================
          FINAL QUESTION
      ============================== */}

      <section
        className="final-section reveal"
        ref={finalSectionRef}
      >

        <div className="final-content">

          <span className="section-label">
            Okay, enough convincing
          </span>

          <h2>
            So...
            <br />
            are you coming with me?
          </h2>

          <p>
            Choose carefully.
            I may remember your answer. 👀
          </p>


          <div className="final-buttons">

            <button
              className="button final-yes"
              onClick={handleYes}
            >
              Yes, let's Garba ❤️
            </button>

            <button
              className="button final-no"
              onClick={handleNo}
            >
              {currentNoText}
            </button>

          </div>


          {noCount > 0 && !accepted && (
            <p className="no-response">

              {noCount >= 5
                ? "I feel like we're avoiding the obvious answer here. 👀"
                : "I'll wait... 🥺"}

            </p>
          )}

        </div>

      </section>


      {/* ==============================
          SUCCESS OVERLAY
      ============================== */}

      {accepted && (
        <div className="success-overlay">

          <div className="success-content">

            <div className="success-icon">
              💃🏻🪩
            </div>

            <span>
              IT'S OFFICIAL
            </span>

            <h2>
              It's a date. ❤️
            </h2>

            <p>
              Opening WhatsApp...
            </p>

          </div>

        </div>
      )}


      {/* ==============================
          FOOTER
      ============================== */}

      <footer>
        Made with a little courage · Navratri 2026 ❤️
      </footer>

    </div>
  );
}


/* =====================================
   BENEFIT CARD
===================================== */

function BenefitCard({
  number,
  icon,
  title,
  text,
}) {
  return (
    <article className="benefit-card">

      <div className="benefit-top">

        <span className="benefit-number">
          {number}
        </span>

        <span className="benefit-icon">
          {icon}
        </span>

      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}


/* =====================================
   TIMELINE ITEM
===================================== */

function TimelineItem({
  number,
  time,
  title,
  text,
}) {
  return (
    <article className="timeline-item">

      <span className="timeline-number">
        {number} · {time}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

  const symbols = [
    "♥",
    "✦",
    "✧",
    "•",
    "🪔",
    "✨",
  ];

  for (let i = 0; i < 55; i++) {

    const element =
      document.createElement("span");

    element.className =
      "confetti";

    element.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    element.style.left =
      `${Math.random() * 100}%`;

    element.style.top =
      `${30 + Math.random() * 20}%`;

    element.style.animationDelay =
      `${Math.random() * 0.7}s`;

    element.style.fontSize =
      `${12 + Math.random() * 16}px`;

    document.body.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 2800);
  }
}

export default App;