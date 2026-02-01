// =============================================
// CONFIGURATION - Edit these to customize
// =============================================

export const CONFIG = {
  // Contact & Basic Info
  CONTACT_URL: 'https://instagram.com/briann.dejesuses', // Change to your IG DM / WhatsApp / Messenger link
  DISPLAY_NAME: 'friend', // Fallback if no name is entered
  EVENT_DATE: 'Feb 14',
  RANDOMIZER_DEFAULT: true,
  THEME: 'mini chat simulator',

  // YES Response Variants (charming, not cringe)
  YES_RESPONSES: [
    "Plot twist: you just agreed to go out with me 😏",
    "Surprise! Your date is... the person who made this site",
    "Funny how that works out — guess we're going together now",
    "Well this is convenient. I happen to be free too 🌹",
    "Great news: I cleared my schedule just for you"
  ],

  // NO Response Variants (charming, not pushy)
  NO_RESPONSES: [
    "Perfect timing then. Mind if I fix that? 💭",
    "Interesting... I might know someone who's interested 👀",
    "Well, that's exactly why I'm here",
    "Good thing you ran into me then 💬",
    "Coincidentally, I was hoping you'd say that"
  ],

  // Shy Page Variants
  SHY_MESSAGES: [
    "Take your time — the offer stands whenever you're ready ✨",
    "No pressure. Just wanted you to know I think you're pretty cool 🌙",
    "Totally get it. But hey, worst case we grab coffee and see what happens?",
    "I promise I'm less scary in person 😊",
    "Being nervous is honestly kind of cute though"
  ],

  // Rotating One-Liners / Compliments (for various places)
  COMPLIMENTS: [
    "You have great taste in websites",
    "Solid choice clicking that link",
    "Your vibe is immaculate honestly",
    "You're the main character energy",
    "Appreciate you being here",
    "You seem like good people",
    "This is a judgment-free zone btw",
    "Your energy > everyone else's",
    "Just saying, you're killing it today",
    "Thanks for humoring me with this",
    "You've got that spark, you know?",
    "I like the way you think"
  ],

  // Alternate Headlines for Main Question
  QUESTION_HEADLINES: [
    "Quick question for you",
    "Be honest with me real quick",
    "Genuinely curious about something",
    "Need your input on this",
    "Help me out with something",
    "Real talk for a second",
    "Between you and me",
    "Can I ask you something?",
    "Got a sec? Need to know",
    "Straight up question"
  ],

  // Share Page PS Lines (randomize)
  PS_LINES: [
    "PS: You can edit this before sending if I'm being too much 😅",
    "PS: Feel free to roast me if this is too cheesy",
    "PS: No takesies backsies once you send it though",
    "PS: I promise I'm cooler in person",
    "PS: Your move now 👀",
    "PS: Low-key nervous but playing it cool",
    "PS: This took courage btw, just saying",
    "PS: Either way, thanks for making it this far"
  ],

  // Vibe Mode Labels & Descriptions
  VIBE_MODES: {
    sweet: { label: '🍯 Sweet', tone: 'gentle and warm' },
    funny: { label: '😄 Playful', tone: 'light and humorous' },
    confident: { label: '✨ Confident', tone: 'direct and assured' },
    shy: { label: '🌸 Soft', tone: 'tentative and sweet' }
  },

  // Date Activity Options
  DATE_ACTIVITIES: [
    { id: 'coffee', label: '☕ Coffee & talk', emoji: '☕' },
    { id: 'dinner', label: '🍜 Dinner spot', emoji: '🍜' },
    { id: 'arcade', label: '🎮 Arcade vibes', emoji: '🎮' },
    { id: 'walk', label: '🌆 City walk', emoji: '🌆' },
    { id: 'surprise', label: '✨ Surprise me (chill)', emoji: '✨' }
  ],

  // Time Options
  TIME_SLOTS: [
    { id: '5pm', label: '5 PM', emoji: '🌅' },
    { id: '7pm', label: '7 PM', emoji: '🌃' },
    { id: 'late', label: 'Late-night coffee', emoji: '🌙' }
  ],

  // Quiz Questions (for compatibility easter egg)
  QUIZ_QUESTIONS: [
    {
      q: "Pick your ideal evening:",
      options: [
        { text: "Cozy movie night in", value: 'chill' },
        { text: "Spontaneous adventure", value: 'wild' },
        { text: "Deep conversations over coffee", value: 'deep' }
      ]
    },
    {
      q: "Your go-to comfort food?",
      options: [
        { text: "Pizza, no debate", value: 'classic' },
        { text: "Sushi or ramen", value: 'refined' },
        { text: "Street tacos", value: 'adventurous' }
      ]
    },
    {
      q: "How do you show affection?",
      options: [
        { text: "Quality time together", value: 'time' },
        { text: "Little surprises & gifts", value: 'gifts' },
        { text: "Words & compliments", value: 'words' }
      ]
    }
  ],

  // Easter Egg Compliments (unlocked after 5 clicks)
  EASTER_EGG_COMPLIMENTS: [
    "Your smile could power a small city",
    "You're the kind of person songs are written about",
    "Main character energy off the charts",
    "You make 'effortless' look easy",
    "Literally glowing right now",
    "The blueprint for what cool looks like",
    "You're someone's favorite person and they're right",
    "That thing you do? Keep doing it",
    "You're criminally underrated",
    "The group chat definitely talks about how great you are"
  ]
};