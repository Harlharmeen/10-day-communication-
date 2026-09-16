/* ==================================================
   HERO IMAGE SHUFFLE
================================================== */

const heroImage = document.querySelector(".hero__image");
const shuffleButton = document.querySelector(".hero__shuffle");

const heroImages = [
  "assets/images/hero-01.jpg",
  "assets/images/hero-02.jpg",
  "assets/images/hero-03.jpg",
  "assets/images/hero-04.jpg",
];

let currentImage = 0;

shuffleButton?.addEventListener("click", () => {
  if (!heroImage) return;

  currentImage = (currentImage + 1) % heroImages.length;

  heroImage.style.opacity = "0";

  setTimeout(() => {
    heroImage.src = heroImages[currentImage];
    heroImage.style.opacity = "1";
  }, 180);
});


/* ==================================================
   TRANSFORMATION ACCORDION
================================================== */

const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {
  const trigger = skill.querySelector(".skill__trigger");

  if (!trigger) return;

  trigger.setAttribute("aria-expanded", skill.classList.contains("is-active"));

  trigger.addEventListener("click", () => {
    const isActive = skill.classList.contains("is-active");

    skills.forEach((item) => {
      const itemTrigger = item.querySelector(".skill__trigger");

      item.classList.remove("is-active");

      if (itemTrigger) {
        itemTrigger.setAttribute("aria-expanded", "false");
      }
    });

    if (!isActive) {
      skill.classList.add("is-active");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});


/* ==================================================
   04 — 10-DAY PROGRAMME
================================================== */

const programmeDays = document.querySelectorAll(".programme__day");
const programmePanel = document.querySelector(".programme__panel");

const programmeData = {
  1: {
    number: "01",
    meta: "Foundation",
    title: "Your Communication Baseline",
    description:
      "Before improving how you communicate, you need to understand how you currently communicate. Start by identifying your natural strengths, habits and areas that hold you back.",
    activities: [
      ["Learn", "Understand the foundations of effective communication."],
      ["Practise", "Complete a communication self-assessment."],
      ["Submit", "Record your baseline speaking challenge."]
    ]
  },

  2: {
    number: "02",
    meta: "Clarity",
    title: "Make Your Thoughts Easier to Understand",
    description:
      "Learn how to express your ideas with less confusion, unnecessary words and mental clutter. Focus on saying what you actually mean.",
    activities: [
      ["Learn", "Understand what makes communication clear."],
      ["Practise", "Turn complicated ideas into simple messages."],
      ["Submit", "Record a short clarity challenge."]
    ]
  },

  3: {
    number: "03",
    meta: "Structure",
    title: "Give Your Ideas Direction",
    description:
      "Good communication isn't only about what you say. It's also about the order you say it in. Learn simple structures that make your message easier to follow.",
    activities: [
      ["Learn", "Explore practical message structures."],
      ["Practise", "Organise a scattered idea into a clear message."],
      ["Submit", "Record your structured response."]
    ]
  },

  4: {
    number: "04",
    meta: "Confidence",
    title: "Speak With More Composure",
    description:
      "Confidence doesn't mean never feeling nervous. Learn how to communicate even when you feel pressure, uncertainty or self-doubt.",
    activities: [
      ["Learn", "Understand confidence as a communication skill."],
      ["Practise", "Work through a pressure-based speaking exercise."],
      ["Submit", "Record yourself speaking with intention."]
    ]
  },

  5: {
    number: "05",
    meta: "Storytelling",
    title: "Make Your Ideas Memorable",
    description:
      "Stories help people understand, remember and connect with ideas. Learn how to turn ordinary experiences into meaningful communication.",
    activities: [
      ["Learn", "Understand the elements of a useful story."],
      ["Practise", "Build a short story from your experience."],
      ["Submit", "Record your story."]
    ]
  },

  6: {
    number: "06",
    meta: "Camera Speaking",
    title: "Become More Natural on Camera",
    description:
      "The camera can make ordinary communication feel strangely difficult. Practise speaking naturally, maintaining presence and communicating without overthinking every move.",
    activities: [
      ["Learn", "Understand the fundamentals of camera presence."],
      ["Practise", "Complete a short camera-speaking exercise."],
      ["Submit", "Record and submit your video."]
    ]
  },

  7: {
    number: "07",
    meta: "Presentation",
    title: "Hold Attention When You Speak",
    description:
      "Learn how to organise and deliver an idea when other people are actively listening. Focus on presence, structure and audience awareness.",
    activities: [
      ["Learn", "Explore the fundamentals of effective presenting."],
      ["Practise", "Build and deliver a short presentation."],
      ["Submit", "Record your presentation."]
    ]
  },

  8: {
    number: "08",
    meta: "Conversation & Networking",
    title: "Become a More Intentional Conversationalist",
    description:
      "Communication isn't always a speech. Learn how to listen better, ask better questions and participate more intentionally in everyday conversations.",
    activities: [
      ["Learn", "Explore the building blocks of better conversations."],
      ["Practise", "Apply intentional listening and questioning."],
      ["Submit", "Complete your conversation challenge."]
    ]
  },

  9: {
    number: "09",
    meta: "Difficult Conversations",
    title: "Say Difficult Things Without Losing Yourself",
    description:
      "Some conversations matter precisely because they're uncomfortable. Practise communicating honestly and respectfully when the stakes are higher.",
    activities: [
      ["Learn", "Understand principles for difficult conversations."],
      ["Practise", "Work through a realistic conversation scenario."],
      ["Submit", "Record your response."]
    ]
  },

  10: {
    number: "10",
    meta: "Integration & Final Challenge",
    title: "Put Everything Together",
    description:
      "Bring the skills together in one final communication challenge. Compare where you started with where you are now and identify what to keep practising.",
    activities: [
      ["Learn", "Review the key communication principles."],
      ["Practise", "Complete your final communication challenge."],
      ["Submit", "Record your final assessment."]
    ]
  }
};


function updateProgramme(dayNumber) {
  const data = programmeData[dayNumber];

  if (!data || !programmePanel) return;

  programmePanel.classList.add("is-changing");

  setTimeout(() => {
    const backgroundNumber =
      programmePanel.querySelector(".programme__background-number");

    const dayMeta =
      programmePanel.querySelector(".programme__meta span:first-child");

    const focusMeta =
      programmePanel.querySelector(".programme__meta span:last-child");

    const title =
      programmePanel.querySelector(".programme__content h3");

    const description =
      programmePanel.querySelector(".programme__description");

    const activities =
      programmePanel.querySelectorAll(".programme__activity");

    if (backgroundNumber) {
      backgroundNumber.textContent = data.number;
    }

    if (dayMeta) {
      dayMeta.textContent = `DAY ${data.number}`;
    }

    if (focusMeta) {
      focusMeta.textContent = data.meta;
    }

    if (title) {
      title.textContent = data.title;
    }

    if (description) {
      description.textContent = data.description;
    }

    data.activities.forEach((activity, index) => {
      const item = activities[index];

      if (!item) return;

      const number =
        item.querySelector(".programme__activity-number");

      const activityTitle =
        item.querySelector("strong");

      const activityDescription =
        item.querySelector("p");

      if (number) {
        number.textContent = String(index + 1).padStart(2, "0");
      }

      if (activityTitle) {
        activityTitle.textContent = activity[0];
      }

      if (activityDescription) {
        activityDescription.textContent = activity[1];
      }
    });

    programmePanel.classList.remove("is-changing");
  }, 140);
}


programmeDays.forEach((day, index) => {
  day.addEventListener("click", () => {
    programmeDays.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
      item.setAttribute("tabindex", "-1");
    });

    day.classList.add("is-active");
    day.setAttribute("aria-selected", "true");
    day.setAttribute("tabindex", "0");

    updateProgramme(day.dataset.day);
  });

  /* Keyboard navigation */
  day.addEventListener("keydown", (event) => {
    let targetIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetIndex = (index + 1) % programmeDays.length;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetIndex =
        (index - 1 + programmeDays.length) % programmeDays.length;
    }

    if (event.key === "Home") {
      targetIndex = 0;
    }

    if (event.key === "End") {
      targetIndex = programmeDays.length - 1;
    }

    if (targetIndex !== index || event.key === "Home" || event.key === "End") {
      event.preventDefault();

      const target = programmeDays[targetIndex];

      target.click();
      target.focus();
    }
  });
});


/* ==================================================
   06 — FAQ ACCORDION
================================================== */

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq__trigger");
  const answer = item.querySelector(".faq__answer");

  if (!trigger || !answer) return;

  trigger.addEventListener("click", () => {
    const isActive = item.classList.contains("is-active");

    faqItems.forEach((faqItem) => {
      const faqTrigger =
        faqItem.querySelector(".faq__trigger");

      const faqAnswer =
        faqItem.querySelector(".faq__answer");

      faqItem.classList.remove("is-active");

      faqTrigger?.setAttribute("aria-expanded", "false");

      if (faqAnswer) {
        faqAnswer.hidden = true;
      }
    });

    if (!isActive) {
      item.classList.add("is-active");

      trigger.setAttribute("aria-expanded", "true");

      answer.hidden = false;
    }
  });
});


/* ==================================================
   REDUCED MOTION
================================================== */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if (prefersReducedMotion.matches) {
  document.documentElement.style.scrollBehavior = "auto";
}