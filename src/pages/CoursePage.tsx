import { useState, useEffect, useRef } from "react";

// ============================================================
// TYPES
// ============================================================
interface Exercise {
  name: string;
  duration: string;
  description: string;
  tip: string;
}
interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  content: string;
  keyTakeaways: string[];
  exercises: Exercise[];
  proTip: string;
}
interface Module {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  promise: string;
  color: string;
  lessons: Lesson[];
}

// ============================================================
// COURSE DATA
// ============================================================
const MODULES: Module[] = [
  {
    id: "m1",
    emoji: "🏛️",
    title: "Foundation & Breathing Mastery",
    subtitle: "Build the physical base that makes everything else possible",
    promise: "By the end of this module, you'll feel your voice become instantly more powerful just from how you breathe.",
    color: "#10b981",
    lessons: [
      {
        id: "m1l1",
        title: "The Architecture of a Powerful Voice",
        subtitle: "Why your body IS your instrument",
        duration: "12 min",
        content: `<p>Before you ever think about pitch or tone, you need to understand something that most people never learn: <strong>your body is not just connected to your instrument — your body IS your instrument.</strong></p>

<p>A violin player picks up their instrument and puts it down. A singer carries theirs everywhere, every day, for their entire life. That means every choice you make — how you sleep, how you stand, how you breathe — either strengthens or weakens your voice.</p>

<h3>The Resonance Chamber</h3>
<p>Sound is vibration moving through space. When your vocal cords vibrate, that tiny sound must travel through your body and get amplified before it ever reaches your audience. The spaces inside your body — your chest, your throat, your sinuses, your skull — are your resonance chambers. The more open and relaxed these spaces are, the richer, fuller, and more powerful your voice becomes.</p>

<p>Think about this: when a great singer walks onto a stage and simply says "Hello" — before singing a single note — the room responds. That's because their resonance chambers are so well-developed that even their speaking voice carries presence and weight. That's what we're building.</p>

<h3>The Three Physical Pillars</h3>
<p><strong>1. Posture</strong> — determines how much space your resonance chambers have and how freely air can move.</p>
<p><strong>2. Breath</strong> — is the fuel for your vocal cords. No breath support = no power, no control, no range.</p>
<p><strong>3. Relaxation</strong> — tension is the enemy of every great voice. Tight throat = strangled sound.</p>

<p>In this module, we're going to build all three from the ground up. Don't rush. The singers who skip foundation work are the ones whose voices plateau and never grow. The singers who master it are the ones who seem to effortlessly improve year after year.</p>

<h3>A Note on Patience</h3>
<p>Your vocal cords are two tiny folds of tissue. They are incredibly sensitive, adaptive, and trainable — but they respond to consistency, not intensity. Fifteen minutes every day beats three hours once a week, every single time. We'll remind you of this throughout the course, because it's that important.</p>`,
        keyTakeaways: [
          "Your body IS your instrument — every physical habit matters",
          "Resonance chambers (chest, throat, sinuses) amplify your voice",
          "Posture, breath, and relaxation are the three pillars",
          "Consistency beats intensity — 15 min/day is the goal"
        ],
        exercises: [
          {
            name: "Body Scan & Release",
            duration: "3 minutes",
            description: "Stand or sit comfortably. Starting from the top of your head, slowly scan down your body. At each area, consciously tense the muscles for 3 seconds, then release completely. Neck → shoulders → chest → arms → belly → legs.",
            tip: "Most singers carry chronic tension in their jaw, neck, and shoulders without realizing it. This scan reveals where you're holding."
          },
          {
            name: "The Resonance Hum",
            duration: "2 minutes",
            description: "Close your mouth gently and hum at a comfortable pitch. Place one hand on your chest, one on your face. Feel the vibration. Now slowly slide your pitch up and down — notice how the vibration shifts from chest to head. This is you learning to feel your resonance chambers.",
            tip: "You're not trying to sound good yet. You're just making friends with how your voice feels from the inside."
          }
        ],
        proTip: "Record yourself with your phone before this module and after Module 1 is complete. The transformation will shock you — and that recording becomes your most powerful motivation to keep going."
      },
      {
        id: "m1l2",
        title: "The Posture Code",
        subtitle: "One alignment shift that instantly improves your voice",
        duration: "14 min",
        content: `<p>There's a reason voice teachers have been obsessing over posture for centuries. It's not about looking professional — it's pure physics. The position of your body directly determines how much air you can take in, how freely that air can move, and how much space your sound has to resonate and amplify.</p>

<h3>The String Puppet Technique</h3>
<p>Imagine a single golden string attached to the crown of your head. This string gently lifts you upward — not stiffly, not militarily, but with an elegant, floating quality. Your spine lengthens. Your chest opens. Your chin levels (neither up nor down). Your shoulders drop naturally.</p>

<p>This single image, held consistently in your mind while you sing, can transform your voice quality immediately. Try it right now. Feel the difference in how open your throat feels?</p>

<h3>The Deadly Posture Mistakes</h3>
<p><strong>Head forward position:</strong> For every inch your head moves forward of your shoulders, it adds approximately 10 lbs of effective weight on your spine and compresses your throat. Most people have their head 2-3 inches forward — that's like wearing a 30-lb collar while trying to sing.</p>

<p><strong>Collapsed chest:</strong> Rounds the shoulders forward, compresses the lungs, and closes off the resonance space in your chest. You physically cannot access your full breath capacity in this position.</p>

<p><strong>Locked knees:</strong> Surprisingly, locking your knees creates tension that travels all the way up through your hips, lower back, and into your core — disrupting your breath support at the source.</p>

<h3>The Performance-Ready Stance</h3>
<p>Feet hip-width apart. Weight slightly forward on the balls of your feet. Knees soft (never locked). Pelvis neutral. Core gently engaged (not sucked in, not pushed out). Chest open and lifted. Shoulders relaxed and back. String pulling the crown of your head upward. Eyes forward, gaze relaxed.</p>

<p>This is the body that makes singing easy. Practice this stance every single day, whether you're singing or not, and watch how it begins to feel natural — and watch how your voice responds.</p>`,
        keyTakeaways: [
          "Physics drives posture — it determines airflow and resonance space",
          "The golden string visualization lifts and aligns effortlessly",
          "Head-forward posture is one of the biggest hidden voice killers",
          "Soft knees, open chest, relaxed shoulders = the performance stance"
        ],
        exercises: [
          {
            name: "The Wall Alignment Test",
            duration: "3 minutes",
            description: "Stand with your back against a wall. Your heels, calves, glutes, upper back, and back of head should all touch the wall. If your head doesn't reach — you have head-forward posture. Hold this position for 60 seconds, memorize the feeling, then walk away maintaining it.",
            tip: "Do this test every morning. It's also a brilliant exercise before any performance — 60 seconds against the wall resets your entire alignment."
          },
          {
            name: "Posture + Hum Combo",
            duration: "3 minutes",
            description: "Take your performance stance (from the lesson). Begin humming comfortably. Now deliberately collapse your posture — round your shoulders, drop your chest, jut your chin forward — and notice what happens to the sound. Then return to perfect alignment. The difference you hear is the power of posture.",
            tip: "This exercise makes the abstract physical. Once you hear the difference with your own voice, you'll never forget why posture matters."
          },
          {
            name: "The 20-Minute Posture Challenge",
            duration: "All day",
            description: "Set a timer for every 20 minutes throughout your day. When it goes off, do the golden string visualization and reset your alignment. Do this for one full day. By evening, you'll notice your posture defaulting to the correct position naturally.",
            tip: "Singers who do this for 7 days straight report that their speaking voice — not just singing — becomes noticeably more resonant and powerful."
          }
        ],
        proTip: "Sing one of your favorite songs right now, then do all three posture exercises, then sing it again immediately. The immediate improvement always startles people. It's the single fastest win in this entire course."
      },
      {
        id: "m1l3",
        title: "Diaphragmatic Breathing: Your Voice's Engine",
        subtitle: "The secret behind every powerful, effortless vocal performance",
        duration: "18 min",
        content: `<p>If posture is the architecture of your voice, breath is the electricity that powers it. Every note you sing, every phrase you shape, every high note you reach — all of it runs on breath. Master this and you have the foundation of everything.</p>

<h3>What's Actually Happening When You Breathe</h3>
<p>Your diaphragm is a large, dome-shaped muscle that sits below your lungs. When you inhale, it contracts and moves downward — creating a vacuum that pulls air into your lungs. When you exhale, it relaxes and moves back up, pushing air out. This is breathing at its most efficient.</p>

<p>The problem: most adults — especially singers who are nervous — breathe from their chest instead of their diaphragm. Chest breathing is shallow, tense, and uses roughly 30% of your lung capacity. Diaphragmatic breathing is deep, relaxed, and uses close to 100% of your lung capacity. For singing, this difference is enormous.</p>

<h3>How to Find Your Diaphragm</h3>
<p>Lie flat on your back. Place one hand on your chest and one on your belly. Now breathe normally. Most people notice their chest rising and falling. This is what we're fixing.</p>

<p>Now breathe in through your nose as if you're smelling a flower — slow, deep, and relaxed. Your belly should push outward against your hand. Your chest should stay relatively still. That outward belly movement is your diaphragm working correctly.</p>

<p>It feels strange at first if you've never done it consciously. That's normal. You're re-learning something your body already knew how to do when you were a baby (babies are natural diaphragmatic breathers — watch one sleep sometime).</p>

<h3>Breath Support vs. Breath Pressure</h3>
<p>This is a nuance that separates intermediate singers from advanced ones. Breath support means maintaining a steady, consistent flow of air with a gently engaged core. Breath pressure means pushing too hard, which actually tightens your vocal cords and makes everything worse.</p>

<p>Think of it like a garden hose. Breath support is a steady, pressurized flow. Breath pressure is someone kinking the hose — more force, but worse result. Your goal is always the former.</p>

<h3>The Appoggio Technique</h3>
<p>Used by classical and pop masters alike, appoggio (Italian: "to lean") is the practice of allowing your rib cage to expand outward as you breathe in, and then resisting the collapse of those ribs as you sing. This creates a reservoir of controlled breath that makes long phrases, high notes, and powerful climaxes effortless. We'll practice this throughout the module.</p>`,
        keyTakeaways: [
          "Diaphragmatic breathing uses nearly 100% of lung capacity vs. 30% for chest breathing",
          "Your belly expanding OUT is correct — chest staying still is correct",
          "Breath support = steady flow; breath pressure = kinking the hose",
          "The appoggio technique (resisting rib collapse) creates effortless power"
        ],
        exercises: [
          {
            name: "The Belly Breath Reset",
            duration: "5 minutes",
            description: "Lie on your back. Hand on belly, hand on chest. Breathe in for 4 counts through nose (belly rises). Hold 2 counts. Breathe out for 8 counts through mouth (belly falls). Repeat 10 times. Then stand up and try to replicate the same feeling. Do this every morning before practice.",
            tip: "The lying-down position makes diaphragmatic breathing almost automatic because your chest muscles can't take over. Use this to reset your breathing anytime."
          },
          {
            name: "The Hissing Drill (Farinelli Exercise)",
            duration: "5 minutes",
            description: "Take a deep belly breath. Exhale slowly making a steady 'sssss' sound. Try to sustain it for 15 seconds, then 20, then 25. The goal is perfectly even pressure — the hiss shouldn't get louder or softer. This teaches your diaphragm to maintain controlled, consistent air pressure.",
            tip: "This single exercise, done daily, is responsible for more vocal improvement than almost anything else. Opera singers practice this for 30+ seconds at a time."
          },
          {
            name: "Staccato Breath Bursts",
            duration: "3 minutes",
            description: "Say 'Ha! Ha! Ha! Ha! Ha!' sharply, like you're laughing. Each 'Ha' should come from a belly punch — feel your abs engage. This trains the fast, precise breath control needed for runs, riffs, and high notes.",
            tip: "Place your hand on your belly. If it's punching out with each 'Ha', you're doing it right. If only your chest is moving, you're not accessing your diaphragm yet."
          },
          {
            name: "The Appoggio Hold",
            duration: "5 minutes",
            description: "Breathe in and let your ribs expand outward (don't just push your belly out — think wide, like opening a barrel). Now sing one note on 'Ahh' and actively resist your ribs collapsing inward for as long as possible. This resistance IS breath support. Repeat on 5 different pitches.",
            tip: "This feels like a gentle internal wrestling match. That's correct. The engagement you feel in your sides and back IS your support system activating."
          }
        ],
        proTip: "The fastest way to know if you've found diaphragmatic breathing: after doing it correctly for 5 minutes, most people feel a gentle warmth or mild fatigue in their sides and lower back. Those muscles have probably never worked this way before. That's exactly the right feeling."
      },
      {
        id: "m1l4",
        title: "The Ultimate 7-Minute Warm-Up Sequence",
        subtitle: "Your daily ritual that unlocks your full voice every single time",
        duration: "16 min",
        content: `<p>Your voice is not a machine you turn on and run immediately at full power. It's more like a fine sports car that performs infinitely better after a proper warm-up. Professional singers warm up before every single performance, every single recording session, even before long practice sessions. Now you will too.</p>

<h3>Why Warm-Ups Are Non-Negotiable</h3>
<p>Cold vocal cords are stiff, slightly swollen from sleep or disuse, and prone to strain. Forcing high notes or powerful singing on cold cords is the #1 cause of vocal fatigue, nodules (the dreaded "nodes"), and the frustrating inconsistency where your voice sounds great one day and terrible the next. A proper warm-up eliminates all of this.</p>

<p>The sequence below takes exactly 7 minutes and should precede any singing — practice, karaoke, performance, recording, everything. After 21 days, you'll notice that without this warm-up, your voice feels foreign and unpredictable. With it, you'll feel in complete command from your very first note.</p>

<h3>The Science Behind the Sequence</h3>
<p>We begin with the body (not the voice) because tension anywhere in the body flows directly into the voice. Then we do semi-occluded vocal tract exercises (lip trills, tongue trills) — these create back pressure that gently massages the vocal cords from the inside, increasing blood flow without strain. Finally, we bring in pitch and range, starting in the comfortable middle and gently expanding outward.</p>`,
        keyTakeaways: [
          "Cold cords = stiff, prone to strain and inconsistency",
          "Body → breath → semi-occluded → pitch is the correct sequence",
          "Semi-occluded exercises (lip trills) massage cords from inside without strain",
          "7 minutes daily eliminates most vocal inconsistency permanently"
        ],
        exercises: [
          {
            name: "Step 1: Body Release (90 seconds)",
            duration: "90 seconds",
            description: "Slow neck rolls (5 each direction) → shoulder rolls (5 each direction) → gentle jaw circles (5 each direction) → open your mouth as wide as possible, hold 3 seconds, release. Shake out your hands. Take 3 deep belly breaths.",
            tip: "Pay special attention to your jaw. Most singers have chronic jaw tension they don't even notice. The jaw release directly opens your resonance space."
          },
          {
            name: "Step 2: Lip Trills — Motorboating (90 seconds)",
            duration: "90 seconds",
            description: "Loosely close your lips and blow air through them to create a motorboat 'brrr' sound. First, sustain on one comfortable pitch for 10 seconds. Then slide your pitch upward like a siren (brrr going up). Then downward (brrr going down). Repeat. Go only as high and low as feels completely easy.",
            tip: "If your lips won't trill, place your index fingers on your cheeks beside your mouth and gently push inward. This reduces the tension that prevents the trill."
          },
          {
            name: "Step 3: Tongue Trills (60 seconds)",
            duration: "60 seconds",
            description: "Roll your 'r' (like a Spanish 'rrrr') and sustain it on a comfortable pitch, then slide up and down. Alternate between lip trills and tongue trills. If you can't roll your 'r', use a 'ng' sound (like the end of 'sing') instead.",
            tip: "Tongue trills work different muscles than lip trills. Together they warm up the entire vocal instrument without any strain."
          },
          {
            name: "Step 4: The Siren (60 seconds)",
            duration: "60 seconds",
            description: "On a gentle 'ng' sound (like 'singing'), slide from the very bottom of your comfortable range to the top and back down — like an ambulance siren. Don't push the extremes. Keep it floaty and effortless. Repeat 5 times.",
            tip: "The siren is brilliant because it transitions through every part of your range without letting you linger anywhere too long. It smooths out the 'breaks' between registers."
          },
          {
            name: "Step 5: Scale Warm-Up (60 seconds)",
            duration: "60 seconds",
            description: "Sing a 5-note scale ('1-2-3-4-5-4-3-2-1') on the vowel 'Ah', 'Oh', or 'Ee'. Start in a very comfortable key. Sing it 3 times, moving up a half-step each time. Stop before you feel any strain.",
            tip: "This is not the time to push your range. If you feel any squeeze or push to reach a note, you've gone too high. Back off half a step and stay there."
          },
          {
            name: "Step 6: Octave Leaps (30 seconds)",
            duration: "30 seconds",
            description: "Sing 'one' on a comfortable low note, then jump an octave up to a high note on the same vowel. The goal is to make this feel smooth — no effort, no reaching. Repeat 3 times on different vowels.",
            tip: "This final step prepares your voice for the jumps and transitions you'll encounter in actual songs. By now your cords should feel completely loose and warm."
          }
        ],
        proTip: "Film yourself doing this warm-up sequence on Day 1 and Day 21. The transformation in your vocal ease, range, and sound quality will be visible even on a phone recording. Share it with someone you trust — their reaction will be priceless."
      }
    ]
  },
  {
    id: "m2",
    emoji: "🎯",
    title: "Pitch Perfect System",
    subtitle: "Eliminate pitch issues and hit every note — including the high ones",
    promise: "By the end of this module, you will be hitting notes you've never been able to reach before, consistently and confidently.",
    color: "#3b82f6",
    lessons: [
      {
        id: "m2l1",
        title: "The Truth About Pitch (and 'Tone Deafness')",
        subtitle: "Why almost everyone can learn to sing in tune",
        duration: "15 min",
        content: `<p>Let's address the thing that holds more potential singers back than anything else: the belief that they are 'tone deaf.' If you've ever said this about yourself, this lesson will change everything for you.</p>

<h3>True Tone Deafness Is Extremely Rare</h3>
<p>Clinical tone deafness — called amusia — affects less than 2% of the population. It's a neurological condition where the brain cannot distinguish between different pitches, even in speaking voices. If you can tell the difference between a man's voice and a woman's voice, if you know when someone sounds sad versus happy from their vocal tone, you are not clinically tone deaf. Period.</p>

<p>What the other 98% of people who call themselves "tone deaf" actually have is untrained pitch perception and untrained pitch production. These are separate skills — and both are completely learnable.</p>

<h3>The Two Parts of Singing in Tune</h3>
<p><strong>Pitch perception</strong> is your ability to hear notes accurately and tell the difference between them. This is your "ear." It's trained by listening carefully and analytically.</p>

<p><strong>Pitch production</strong> is your ability to physically create the note you intend to sing — getting your vocal cords to vibrate at exactly the right frequency. This is trained through feedback (using a tuner app or recording yourself) and deliberate repetition.</p>

<p>Most people who sing "out of tune" have perfectly good ears — they can hear that they're off. They just haven't trained the connection between what they hear and what their voice produces. This is called the "ear-voice bridge," and it's exactly what Module 2 builds.</p>

<h3>How Pitch Is Produced Physiologically</h3>
<p>Your pitch is determined by how quickly your vocal cords vibrate. Higher notes = faster vibration. Your brain controls this through tiny muscles that stretch and thicken the vocal cords. When these muscles are untrained, they overshoot or undershoot the target note. Through training, they develop precision — like a guitarist who can intuitively press the exact right fret.</p>

<p>The good news: these muscles respond remarkably quickly to training. Many students notice measurable pitch improvement within just 3-5 days of consistent practice. The ear-voice bridge builds fast once you start deliberately working on it.</p>`,
        keyTakeaways: [
          "True tone deafness affects <2% of people — you almost certainly don't have it",
          "Pitch perception (hearing) and pitch production (singing) are separate trainable skills",
          "The 'ear-voice bridge' is the connection between them — and it's what we're building",
          "Pitch muscles respond to training remarkably quickly — results often come in days"
        ],
        exercises: [
          {
            name: "The Ear-Voice Bridge Test",
            duration: "5 minutes",
            description: "Download a free tuner app (GuitarTuna, Vocal Pitch Monitor, or similar). Speak your name. Notice the pitch — it will show on the app. Now sing your name on that same pitch. Can you match it? Try going slightly higher, then slightly lower. This simple exercise begins building the ear-voice bridge immediately.",
            tip: "Don't be discouraged if you're off at first. The fact that you can see you're off means your perception is working. The production will follow with practice."
          },
          {
            name: "Match the Pitch Drill",
            duration: "10 minutes",
            description: "Use a piano app (free: Simply Piano, Piano - Play any song). Play a single note. Sing it on 'Ah'. Check your tuner. Were you sharp (too high) or flat (too low)? Adjust and try again. Do this with 10 different notes across your comfortable range. 5 days of this builds more ear-voice connection than years of unfocused singing.",
            tip: "The key is the feedback loop: sing → check tuner → adjust → sing again. This is how your brain learns precision."
          }
        ],
        proTip: "After the ear-voice bridge test, record yourself singing 'Happy Birthday' with your phone. Don't listen to it yet. Do 5 days of the Match the Pitch Drill. Then record 'Happy Birthday' again and compare the two recordings. The improvement is almost always stunning and immediate."
      },
      {
        id: "m2l2",
        title: "The Mix Voice: Your Gateway to Every High Note",
        subtitle: "The technique that changes everything about your upper register",
        duration: "20 min",
        content: `<p>This lesson is the one students most often describe as a turning point. If you've been frustrated by voice cracks, breaks, or an inability to access higher notes, what you're about to learn will feel like discovering a superpower you already had but didn't know how to use.</p>

<h3>The Voice Register System</h3>
<p>Your voice doesn't operate in one mode. It has distinct registers — different configurations of how your vocal cords come together — that produce different qualities of sound.</p>

<p><strong>Chest voice</strong> (modal voice) is the thick, full register you use for normal speaking and most singing in your comfortable range. Your cords come together fully along their length, producing a rich, warm sound.</p>

<p><strong>Head voice</strong> (falsetto) is the lighter register where only the edges of your cords vibrate. It produces a lighter, often breathier sound — what people use for very high notes when they "flip" to falsetto.</p>

<p><strong>Mix voice</strong> is the blend — a configuration where your cords come together with enough body to have power, but thin enough at the edges to access higher pitches without strain. This is where virtually every professional singer lives for most of their range.</p>

<h3>Why Your Voice 'Breaks'</h3>
<p>The break — that embarrassing crack when your voice suddenly flips — happens when you try to carry full chest voice up too high, past the point where your cords can sustain that thick configuration. Your cords suddenly flip to falsetto to escape the strain. It's jarring and uncontrolled.</p>

<p>The solution isn't to push chest voice higher (this causes strain and can damage your voice). The solution is to learn to thin your chest voice before reaching that point — gradually transitioning into mix voice, making the bridge smooth and invisible. This is called "blending the passaggio" (Italian: the passage, or bridge).</p>

<h3>Finding Mix Voice</h3>
<p>The fastest way to find mix voice: say "Witch!" in an exaggerated, whiney character voice. Notice how it's light but not airy, high but not falsetto? That's your mix. Now slide from that whiney "witch" sound into a more neutral, singing-quality version of the same note. That's the target quality.</p>

<p>Another approach: sing a note in chest voice. Now sing the same note in falsetto. Now try to blend the two — take the power from chest and the lightness from falsetto. Most people find it on the first try once they understand what they're looking for.</p>`,
        keyTakeaways: [
          "Chest, head (falsetto), and mix voice are distinct physical configurations of your cords",
          "Mix voice has power (from chest) AND access to higher notes (from head) — the best of both",
          "Voice breaks happen from carrying thick chest voice too high — the solution is mix, not pushing",
          "The 'whiney witch' sound is the fastest shortcut to finding your mix voice"
        ],
        exercises: [
          {
            name: "The Witch Discovery",
            duration: "3 minutes",
            description: "Say 'Witch!' in the most exaggerated, whiney, Halloween-witch voice you can. Sustain the 'i' vowel. Now gradually make it less whiney, more 'singing.' You just found mix voice. Now sing a simple 5-note scale staying in that quality.",
            tip: "Don't be embarrassed by the exaggerated character voice. This is used in professional vocal studios worldwide because it bypasses the instinct to push chest voice and lets you feel mix voice directly."
          },
          {
            name: "The Nay-Nay-Nay Scale",
            duration: "5 minutes",
            description: "Sing 'Nay-Nay-Nay' up and down a 5-note scale (1-2-3-4-5-4-3-2-1). The 'Nay' sound keeps your voice forward and bright, naturally encouraging mix. As you go higher, let the sound lighten without letting it go breathless. Transpose up a half step each time until you reach the top of your comfortable range, then back down.",
            tip: "If you feel a squeeze or push as you go higher, you've crossed into pressing. Back off. The goal is to feel like the higher notes actually get easier because you're using less cord mass."
          },
          {
            name: "The Slide (Portamento Training)",
            duration: "5 minutes",
            description: "Sing a comfortable low note on 'Ah'. Now slide continuously up to a note that's a full octave higher — no breaks, no jumps, a smooth, continuous glide. The goal is to make this transition invisible. If you feel or hear a break, that's the exact spot where your registers are switching — your training target.",
            tip: "Record this slide and listen back. The break is usually very audible on recording even when you can barely feel it while doing it. This gives you precise information about exactly where to focus."
          },
          {
            name: "High Note Landing Practice",
            duration: "5 minutes",
            description: "Think of a note that feels just outside your comfortable range. Instead of trying to push up to it from below, try this: imagine the note is at eye level and you're simply reaching out to touch it — not climbing to it. Vocalize 'Wee!' landing directly on that high note. Many people find this access-from-above approach eliminates the strain entirely.",
            tip: "The physics here: approaching a high note from 'inside' mix voice (by thinking of it as accessible, not as up) keeps the cords in the right configuration. Fear and 'reaching' triggers chest-voice locking."
          }
        ],
        proTip: "Film yourself singing your highest comfortable note. Watch your face, jaw, and neck. You will almost certainly see visible tension — raised eyebrows, squinting, neck strain. These visual cues tell you you're pushing. Work on making your face stay completely relaxed on that high note. When the face relaxes, the voice almost always relaxes too — and the note becomes 10x easier."
      },
      {
        id: "m2l3",
        title: "Range Expansion Protocol",
        subtitle: "The systematic method to add 1-2 octaves in 21 days",
        duration: "17 min",
        content: `<p>Your range is not fixed. This is the single most important thing to understand about vocal range. With the right training, done consistently, your usable singing range will expand — not by forcing notes that don't exist, but by bringing previously inaccessible notes under control, making them reliable, resonant, and powerful.</p>

<h3>How Range Expansion Actually Works</h3>
<p>You almost certainly already have more physical range than you think. If you've ever screamed in joy or terror, you've accessed notes your "singing voice" hasn't found yet. The vocal cords can produce those pitches — they just haven't been trained to do it with control, resonance, and reliability.</p>

<p>Range expansion works by gradually extending into your existing physical range with proper technique, then building strength and coordination in those newly accessed areas until they feel as comfortable and controlled as your original range. It's not magic — it's targeted training.</p>

<h3>The Protocol</h3>
<p>Every other day (not every day — range training needs recovery time), you'll practice in two directions: extending your top range and extending your bottom range. The key rules:</p>

<p><strong>Rule 1:</strong> Never push. If a note requires effort or squeeze, it's not ready yet. Work just below the resistance point.</p>
<p><strong>Rule 2:</strong> Mix voice for top, chest voice for bottom, always supported by the diaphragm.</p>
<p><strong>Rule 3:</strong> Hydration is mandatory — dehydrated cords are stiff cords that cannot expand.</p>
<p><strong>Rule 4:</strong> One semitone at a time. Never try to jump to a target note. Work to it gradually.</p>

<h3>The 21-Day Range Map</h3>
<p>Week 1: Identify and establish your current solid range (the notes you can hit confidently, every time). Week 2: Begin extending the top and bottom edges by 2-3 semitones using the exercises below. Week 3: Work on making those newly added notes sound as full and controlled as your original range. By Day 21, most students report a full additional octave of accessible, usable range.</p>`,
        keyTakeaways: [
          "Your physical range is larger than your 'singing range' — training bridges the gap",
          "Range expansion = gradually accessing existing physical range with proper technique",
          "Train range every OTHER day — these muscles need 24h recovery",
          "Never push against resistance — work just below the tension point, always"
        ],
        exercises: [
          {
            name: "Range Mapping Exercise",
            duration: "5 minutes",
            description: "With your tuner app, find the lowest note you can sing with resonance (not just a croak). Note it. Find the highest note you can sing with any control at all. Note it. The space between is your current physical range. The space between the lowest comfortable note and highest comfortable note is your current singing range. You're about to expand both.",
            tip: "Most untrained singers are surprised to find their physical range is already 2-2.5 octaves. The training is about making that physical range musical and usable."
          },
          {
            name: "The Top Extension Drill",
            duration: "5 minutes",
            description: "Find the highest note in your current comfortable range. Sing it on 'Wee' in mix voice. It should feel relatively easy. Now go up one semitone. Sing it on 'Wee.' Does it feel like you can barely manage it, or like there's truly nothing there? If there's something there — work it. Sing 10 gentle repetitions on that note. Tomorrow or the next day, see if it feels more solid.",
            tip: "Progress happens between sessions, not during them. The training stimulus from today activates the adaptive response tonight. Many students wake up the next day able to sing a note that was impossible yesterday."
          },
          {
            name: "The Descending Power Builder",
            duration: "5 minutes",
            description: "Sing a 5-note scale starting on a comfortable mid-range note, going downward. As you descend, focus on keeping the notes full and resonant — don't let them thin out or get wobbly. This builds chest voice strength in the lower range, extending your bottom just as the top extension drill extends your upper range.",
            tip: "Low notes are often neglected because high notes get more attention. But a strong bottom gives your voice foundation and warmth that makes the entire range sound better."
          }
        ],
        proTip: "Drink 3 liters of water every day during range training week. Vocal cords expand in range dramatically when fully hydrated and barely at all when even slightly dehydrated. This is not optional — it's the number one environmental factor in range expansion."
      },
      {
        id: "m2l4",
        title: "Pitch Problem-Solver: Flat, Sharp, and Inconsistent",
        subtitle: "Diagnose and permanently fix your specific pitch issues",
        duration: "14 min",
        content: `<p>Pitch problems are not random. They always have a specific cause, and once you identify the cause, the fix is usually fast and straightforward. This lesson is a diagnostic guide and targeted treatment plan.</p>

<h3>Singing Flat (Below the Pitch)</h3>
<p>Flat singing is the most common pitch issue, and it has three main causes:</p>
<p><strong>1. Insufficient breath support:</strong> Without proper diaphragmatic support, your cords sag slightly below the target pitch. Fix: consciously engage your breath support on every note.</p>
<p><strong>2. Dropping the phrase:</strong> Most phrases have a natural arc, and singers unconsciously relax (and drop in pitch) as the phrase progresses. Fix: think of every phrase as ending higher than it started — this counteracts the natural tendency to sag.</p>
<p><strong>3. Cold or dehydrated cords:</strong> Stiff cords undershoot. Fix: proper warm-up and hydration.</p>

<h3>Singing Sharp (Above the Pitch)</h3>
<p>Sharp singing is less common but often a sign of improvement (it can mean you're overcorrecting after working on flatness). Main causes:</p>
<p><strong>1. Over-pressuring your breath:</strong> Too much air pressure pushes pitch sharp. Relax the push.</p>
<p><strong>2. Tension in throat or jaw:</strong> Physical constriction physically raises pitch. Release the jaw and throat.</p>
<p><strong>3. Trying too hard to "hit" the note:</strong> The effort itself causes overshoot. Paradoxically, the solution is often to aim slightly flat and let the note rise naturally with breath support.</p>

<h3>Inconsistent Pitch (Sometimes Right, Sometimes Not)</h3>
<p>This is almost always a warm-up or consistency issue. If you can hit the note perfectly on some attempts and miss on others, the mechanism is there — it just isn't reliable yet. Fix: targeted repetition on that specific note until the muscle memory is permanent. Usually 50-100 successful repetitions is enough.</p>`,
        keyTakeaways: [
          "Flat singing: usually breath support, phrase sagging, or cold cords",
          "Sharp singing: usually over-pressure, jaw/throat tension, or over-efforting",
          "Inconsistent pitch: the mechanism is there, it needs 50-100 repetitions to lock in",
          "Use a tuner app to get objective feedback — your ears can deceive you when you're nervous"
        ],
        exercises: [
          {
            name: "The Flat-Fixer",
            duration: "5 minutes",
            description: "Choose a note you tend to sing flat. Engage your breath support fully (belly engaged, appoggio active). Now think of the note as being slightly above where you're aiming — imagine it's a few inches above your head instead of inside your mouth. Sing it. For most flat singers, this mental adjustment immediately corrects the pitch.",
            tip: "The internal image of 'aiming high' physically engages more cord tension — the exact physiological adjustment needed to sing up to the correct pitch."
          },
          {
            name: "The Target Lock (50-Rep Drill)",
            duration: "10 minutes",
            description: "Identify a note or phrase that's inconsistently in pitch. Using your tuner app, sing it until you hit it perfectly in tune. Mark that feeling — what did it feel like physically? Now repeat that note or phrase 50 times, checking the tuner each time. By rep 50, your body will know how to find that note without thinking.",
            tip: "This is tedious. Do it anyway. Motor learning requires repetition. 50 successful repetitions creates a neural pathway that lasts for life."
          }
        ],
        proTip: "Record yourself singing an entire song, then go back through and circle (mentally) every moment you go flat or sharp. You'll probably find a pattern — most singers have one or two specific pitch issues that show up repeatedly. Focus your practice there specifically rather than practicing the whole song over and over."
      }
    ]
  },
  {
    id: "m3",
    emoji: "💎",
    title: "Your Signature Sound",
    subtitle: "Find and develop the unique voice that moves people and can't be forgotten",
    promise: "By the end of this module, you will have a distinct vocal identity — a sound that is recognizably, unmistakably yours.",
    color: "#8b5cf6",
    lessons: [
      {
        id: "m3l1",
        title: "Tone Shaping: Crafting Your Vocal Color",
        subtitle: "The art and science of resonance placement",
        duration: "16 min",
        content: `<p>Every great singer is immediately recognizable from the first note. You know it's Adele before the first word. You know it's Ed Sheeran, Beyoncé, Frank Sinatra, Amy Winehouse — there's an immediate fingerprint in the sound. That fingerprint is tone. And while your genetic anatomy provides the raw materials, tone is overwhelmingly shaped by learned technique.</p>

<h3>Understanding Formants and Resonance</h3>
<p>Your voice creates not just one frequency (pitch) but a complex spectrum of frequencies. The way your vocal tract — the tube of space from your cords to your lips — shapes and emphasizes certain frequencies over others is called formant shaping. This is how vowels are created. It's also how vocal tone color is created.</p>

<p>By consciously adjusting the shape of your throat, mouth, and lips, you can dramatically alter your tone without changing pitch at all. This is the art of tone shaping, and it's how singers deliberately craft "the sound."</p>

<h3>The Three Primary Resonance Colors</h3>
<p><strong>Bright/Forward (mask resonance):</strong> Sound focused in the front of your face, in the sinuses. Cutting, brilliant, present. Think of the clarity in an opera singer's voice that can be heard over an orchestra. Achieved by raising the soft palate slightly and focusing the sound forward.</p>

<p><strong>Dark/Warm (throat/chest resonance):</strong> Sound deeper in the throat and chest. Rich, warm, enveloping. Think Barry White, Johnny Cash, Adele's low register. Achieved by lowering the larynx slightly and creating a longer resonance tube.</p>

<p><strong>Mixed tone:</strong> The strategic blend of bright and dark. Most signature sounds live here — an individual's balance point between these two poles that becomes their characteristic sound.</p>

<h3>Finding Your Natural Tone Center</h3>
<p>Rather than adopting someone else's tone, the goal is to find and optimize YOUR natural tone — then learn to bend it for different styles and songs. This requires you to strip away tension, habit, and imitation and simply listen to what your voice does when it's completely free.</p>`,
        keyTakeaways: [
          "Tone (vocal color) is shaped by resonance — where sound is emphasized in your vocal tract",
          "Bright tone (mask) = forward, cutting, clear. Dark tone (chest/throat) = warm, rich, deep",
          "Your signature sound is YOUR natural tone, optimized — not an imitation of someone else",
          "Vowel shaping and larynx position are the primary tools for tone sculpting"
        ],
        exercises: [
          {
            name: "Bright vs. Dark Contrast Drill",
            duration: "5 minutes",
            description: "Sing a comfortable note on 'Ee.' Notice how bright and forward it is. Now sing the same note on 'Oo.' Notice how it darkens. Now sing 'Ah' and find a middle point. Slowly sweep from 'Ee' to 'Oo' while sustaining the note — you're manually scanning your entire resonance spectrum. Find where it sounds most beautiful to you. That's likely near your natural tone center.",
            tip: "Have someone you trust listen from across the room while you do this. Ask them which point in the sweep sounds best. Often others hear our natural resonance more clearly than we do ourselves."
          },
          {
            name: "The Megaphone Trick",
            duration: "3 minutes",
            description: "Cup both hands in front of your mouth like a megaphone, but facing BACKWARD toward your face. Now sing. The sound bouncing back to your ears is roughly what your audience hears. This tiny feedback trick lets you objectively evaluate your own tone without the distortion of bone conduction.",
            tip: "Most singers are shocked the first time they do this. The voice they've been 'hearing' for years (mostly through their skull) is very different from what everyone else hears."
          },
          {
            name: "The Tone Journal",
            duration: "Ongoing",
            description: "Over the next week, listen to 3-5 of your favorite singers with fresh ears. For each one, write down: (1) Where does their tone sit on the bright-to-dark spectrum? (2) What quality stands out most — warmth, clarity, richness, edge, smoothness? (3) What specific vowel shape or placement do you think they're using? This builds your tonal vocabulary and taste.",
            tip: "You cannot develop a signature sound without first developing an opinion about sound. The tone journal builds your ear for tone quality as a distinct, separate skill from pitch."
          }
        ],
        proTip: "Record yourself saying a single sentence — 'I've always wanted to sing' — in the most natural, comfortable voice you have. Listen to it on headphones. The tone you hear in that recording, stripped of performance nerves and effort, is closer to your natural voice than almost anything you produce while consciously 'singing.' That's the tone to develop."
      },
      {
        id: "m3l2",
        title: "Vibrato Mastery",
        subtitle: "Add the emotional layer that creates genuine goosebumps",
        duration: "15 min",
        content: `<p>Vibrato is the gentle, beautiful oscillation — a subtle and regular variation in pitch — that you hear in virtually every professional singer's sustained notes. It's what makes a held note feel alive instead of static. It's what creates the emotional shimmer that makes a performance transcendent rather than just technically correct.</p>

<h3>What Vibrato Actually Is</h3>
<p>Vibrato is not a stylistic affectation you add to notes — it's a natural result of a properly supported, relaxed voice. When your breath support is active, your throat is open, and your jaw is released, vibrato emerges naturally. This is why beginners often have straight tone (no vibrato) — tension prevents the natural oscillation from occurring.</p>

<p>The rate of vibrato (how fast it oscillates) should be between 5-7 pulses per second. Slower than 5 sounds "wobbly" or "old." Faster than 7 sounds nervous or strained. The width (how far the pitch oscillates) should be narrow — roughly a semitone or less. Wider than that sounds out of control.</p>

<h3>Vibrato vs. Tremolo vs. Wobble</h3>
<p><strong>True vibrato:</strong> Consistent, relaxed oscillation of both pitch and volume. Beautiful.</p>
<p><strong>Tremolo:</strong> Only volume oscillation, no pitch change. Common in untrained singers who try to force vibrato with breath pulses.</p>
<p><strong>Wobble:</strong> Slow, wide pitch variation — often from excessive chest voice tension or age-related muscle weakness. Correctable with proper support training.</p>

<h3>Developing Natural Vibrato</h3>
<p>The fastest path to natural vibrato: eliminate tension, maximize breath support, and practice sustaining notes without trying to control what your voice does. Many singers find vibrato emerges spontaneously the first time they truly release all throat tension while fully supported. Others need the specific exercises below to develop it consciously before it becomes automatic.</p>`,
        keyTakeaways: [
          "Vibrato is a natural result of a supported, relaxed voice — not an add-on technique",
          "5-7 pulses per second = ideal rate; narrow width (semitone or less) = ideal depth",
          "Tension prevents vibrato from emerging — release is the primary training focus",
          "Wobble and tremolo are different problems with different solutions"
        ],
        exercises: [
          {
            name: "The Release and Allow",
            duration: "5 minutes",
            description: "Sing a comfortable note with full breath support. Now consciously release your jaw completely — let it hang. Release your throat. Think of the note as floating, not being held. Often, vibrato will simply appear the moment the tension releases. If it doesn't on the first try, repeat 10 times, each time focusing on releasing more completely.",
            tip: "If vibrato doesn't emerge naturally within 5-10 attempts at this exercise, use the manual training methods below. Some voices need the muscles built consciously before vibrato can emerge naturally."
          },
          {
            name: "The Pulsing Breath Method",
            duration: "5 minutes",
            description: "Sustain a note. Now gently pulse your belly (like a soft 'ha-ha-ha-ha' without consonants) at a rate of about 6 pulses per second while keeping the pitch steady. This creates a temporary, controlled tremolo. Now gradually reduce the intensity of the pulses until they're very subtle, and let your voice take over the oscillation naturally.",
            tip: "This trains the rate and rhythm of vibrato consciously. Over time (usually 2-3 weeks of practice), the external pulse becomes an internal habit and genuine vibrato emerges."
          },
          {
            name: "Vibrato Application",
            duration: "5 minutes",
            description: "Choose a song with several sustained notes. Sing it straight (no vibrato). Then sing it again, applying vibrato to every sustained note of 2 beats or longer. Notice how the emotional impact of the same notes changes dramatically with vibrato. Practice controlling when you add vibrato and when you sing straight — the contrast is powerful.",
            tip: "The most sophisticated use of vibrato is selective — you don't apply it everywhere. A straight note followed by a vibrato note creates instant emotional contrast. This is what separates artists from technicians."
          }
        ],
        proTip: "Listen to a recording of yourself singing a sustained note before and after this lesson's exercises. The moment vibrato first appears in your recordings — even a brief flutter — is genuinely one of the most exciting moments in a singer's development. When you hear it, you'll understand exactly what we mean."
      },
      {
        id: "m3l3",
        title: "Style DNA: Adapt to Any Genre",
        subtitle: "The vocal versatility that makes you a complete singer",
        duration: "18 min",
        content: `<p>The singers who have true longevity — who remain relevant and interesting over decades — are the ones with stylistic range. They can move between emotional worlds, serve different songs, and surprise their audience. This lesson teaches you how to deliberately enter and exit different vocal styles while maintaining the core of your signature sound.</p>

<h3>Genre Is Emotional Information</h3>
<p>Every genre has specific emotional contracts with its listener. Country music is raw, honest, direct vulnerability. R&B is physical, sensual, emotionally complex warmth. Rock is energy, rebellion, cathartic release. Classical musical theater is heightened, clear-voiced storytelling with presentational clarity. Pop is inclusive, relatable, rhythmically forward intimacy.</p>

<p>Understanding a genre's emotional contract tells you exactly how to adjust your voice. The technical differences (tone placement, vibrato use, rhythmic approach) all flow from the emotional intention.</p>

<h3>The Technical Elements That Define Each Style</h3>
<p><strong>Pop:</strong> Forward tone, bright placement, rhythmically exact, speech-inflected phrasing, minimal vibrato on short notes, selective use of runs for emotional emphasis. Think Taylor Swift's directness, Harry Styles' warmth, Billie Eilish's intimate whisper-to-power contrast.</p>

<p><strong>R&B/Soul:</strong> Warm, chest-heavy tone with mix voice highlights. Liberal runs and melisma (multiple notes per syllable). Rhythmically fluid — notes arrive slightly behind or ahead of the beat for feel. Heavy emotional investment in every phrase. Think Beyoncé, Sam Smith, John Legend.</p>

<p><strong>Rock:</strong> Power-forward mix voice or purposeful grit/distortion. Rhythmically driving, the voice locks with the beat. Chest resonance dominant. Attitude and energy over prettiness. Think Freddie Mercury's operatic power, Chris Cornell's anguish, Florence Welch's force.</p>

<p><strong>Country:</strong> Warm, middle-placement tone. Twang (nasal forward placement with a slight brightening) is the signature stylistic element. Very direct vowel sounds. Storytelling phrasing — words matter more than runs. Think Chris Stapleton, Kacey Musgraves.</p>`,
        keyTakeaways: [
          "Every genre has an emotional contract — understanding it tells you all the technical adjustments",
          "Stylistic range is what gives singers longevity and artistic depth",
          "Your signature sound is the constant; style is what you put on top of it",
          "Twang, runs, tone placement, and rhythmic approach are the primary style variables"
        ],
        exercises: [
          {
            name: "The Genre Shift Exercise",
            duration: "10 minutes",
            description: "Choose a simple, familiar melody (like 'Happy Birthday' or a nursery rhyme you know cold). Now sing it in 4 different genres, back to back: (1) Pop — bright, speech-like, rhythmically exact. (2) R&B — add warmth, slight rhythmic swing, a small run at the end. (3) Country — add twang, make it storytelling-direct. (4) Musical Theater — project, heighten the drama, make every word count. Notice how the same melody becomes completely different music.",
            tip: "This exercise is more revealing than it sounds. By using a melody you know without thinking about it, you can focus entirely on the stylistic variables. Most students discover they have a natural affinity for one or two specific styles."
          },
          {
            name: "Style Imitation Study",
            duration: "10 minutes",
            description: "Choose one song by a singer whose style you love. Listen to it 3 times with complete analytical attention: (1) Where do they place their resonance? (2) How much vibrato, and when? (3) What's their relationship to the rhythm — are they slightly ahead, on the beat, or laid back? (4) What vowel sounds do they emphasize? Now sing along, attempting to replicate these specific technical choices (not imitate the sound — understand the choices).",
            tip: "This is NOT asking you to become a copycat. It's asking you to understand a master's technical choices so you can add them to your own toolkit. Every singer is a synthesis of their influences."
          }
        ],
        proTip: "The goal is never to sound exactly like someone else. The goal is to be able to CHOOSE how you sound in any style. Once you can enter and exit four different styles deliberately, your own signature sound — the thread that runs through all of them — will become crystal clear to you."
      },
      {
        id: "m3l4",
        title: "Dynamics: The Art of Light and Shade",
        subtitle: "Transform a technically correct performance into an unforgettable one",
        duration: "13 min",
        content: `<p>Dynamics are the single most overlooked element by developing singers — and the most immediately transformative skill you can add to an already technically solid performance. A song sung at the same volume and intensity from beginning to end is exhausting to listen to, no matter how beautiful the voice. The magic is in the contrast.</p>

<h3>Why Dynamics Are Emotional Architecture</h3>
<p>Dynamics create the narrative shape of a song. They tell the listener when to lean in, when to brace for impact, when to exhale. A whispered verse creates intimacy — the listener leans forward. A powerful chorus is the emotional payoff — the listener is swept up. A sudden drop to soft after a climax is the moment that makes people cry.</p>

<p>The most effective dynamic move in vocal performance is not the loud climax — it's the contrast just before it. Singers who understand this know that the biggest notes land hardest after the softest moments. This is dynamic architecture, and it's what separates a moving performance from a merely impressive one.</p>

<h3>The Dynamic Toolkit</h3>
<p><strong>Pianissimo (very soft):</strong> Intimate, vulnerable, draws the listener close. Requires precise breath control to maintain pitch while reducing volume.</p>
<p><strong>Piano (soft):</strong> Gentle, emotional. Works beautifully for verses that set up a bigger chorus.</p>
<p><strong>Mezzo-forte (moderate):</strong> The conversational singing level. Most of any song lives here.</p>
<p><strong>Forte (loud):</strong> Power, conviction, release. The chorus, the bridge climax.</p>
<p><strong>Fortissimo (very loud):</strong> The moment. Use it sparingly — one or two moments per song maximum, or it loses meaning.</p>`,
        keyTakeaways: [
          "Dynamics create emotional architecture — they tell the story beneath the words",
          "The contrast BEFORE a big moment creates more impact than the big moment alone",
          "Pianissimo (very soft) requires MORE technical skill than forte, not less",
          "The most powerful dynamic move: sudden soft after a climax — that's the moment that creates tears"
        ],
        exercises: [
          {
            name: "The Whisper Challenge",
            duration: "5 minutes",
            description: "Choose a phrase from a song you know. Sing it at normal volume. Now sing it as softly as you possibly can while maintaining exact pitch accuracy. This is much harder than it sounds. Pitch tends to go flat when volume drops. Use your tuner app. Practice until you can sing at 20% volume with 100% pitch accuracy.",
            tip: "The ability to sing softly in tune is one of the most impressive vocal skills you can have — and most singers never work on it. Audiences lose their minds for a perfectly controlled pianissimo moment."
          },
          {
            name: "The Dynamic Map",
            duration: "10 minutes",
            description: "Take a song you're working on. Write out the lyrics. Above each section, write a dynamic level: pp, p, mp, mf, f, ff. Then sing through it following your map exactly. Does it feel like a story? Does it have a shape? Adjust the map until the song feels emotionally true. Then practice singing from the map.",
            tip: "This exercise teaches you to think about a song as a piece of architecture, not just a melody. Songs that have been dynamically mapped and intentionally shaped are almost always more moving than technically superior but dynamically flat performances."
          }
        ],
        proTip: "Listen to any famous live ballad performance that moves you deeply. Find the softest moment in the song. Notice how that quiet moment makes the next powerful moment hit harder. That contrast — not the loud note alone — is the technique. Now find it in your own song. Create that quiet moment deliberately."
      }
    ]
  },
  {
    id: "m4",
    emoji: "🔥",
    title: "Performance & Stage Presence",
    subtitle: "Command any room, own every stage, and leave audiences breathless",
    promise: "By the end of this module, you will walk into any performance situation with the confidence of someone who has done it a thousand times.",
    color: "#ef4444",
    lessons: [
      {
        id: "m4l1",
        title: "Stage Fright Elimination: Turn Fear into Fuel",
        subtitle: "The 3-minute pre-performance reset used by professionals",
        duration: "17 min",
        content: `<p>Stage fright affects 77% of performers at some point in their career. It has prevented more beautiful voices from being heard than any lack of talent ever could. This lesson doesn't teach you to eliminate the physiological response — it teaches you to transform what that response does to your performance.</p>

<h3>The Reframe That Changes Everything</h3>
<p>Stage fright — the racing heart, the heightened alertness, the surge of energy — is physiologically identical to excitement. Your body produces the same adrenaline, the same cortisol, the same physical response to both emotions. The difference is entirely in how your brain labels the experience.</p>

<p>Harvard psychology research (by Alison Wood Brooks) found that people who were told to say "I am excited!" before a performance dramatically outperformed those told to "calm down" — even though their physiological arousal was identical. The reframe from "anxiety" to "excitement" changes how the brain uses that arousal, turning it from a performance hindrance into a performance enhancer.</p>

<p>Before your next performance, instead of trying to calm down, try saying out loud: "I am excited. I get to sing. This feeling means I'm ready." Notice what happens to the energy in your body.</p>

<h3>Why Preparation Is the Real Antidote</h3>
<p>The deepest source of stage fright is not knowing that you're capable of delivering. It's a gap between what you've done in preparation and what you're about to attempt in performance. The solution is to close that gap with preparation so thorough that performing feels like the easiest version of what you've already done.</p>

<p>Professional rule: if you can do something 9 times out of 10 in practice, you're about 5/10 ready to perform it. If you can do it 10 times out of 10 in practice, you're 9/10 ready to perform it. Performance needs a margin. The goal is to overtrain relative to the performance requirements, so the stage feels easier than practice, not harder.</p>

<h3>The 3-Minute Pre-Performance Reset</h3>
<p>Use this sequence backstage, in a bathroom, in your car — anywhere, 2-10 minutes before you perform:</p>
<p><strong>Minute 1:</strong> Physical. Take 5 deep belly breaths. Do gentle neck rolls. Open your jaw wide 10 times. Shake your hands out completely. Stamp your feet gently.</p>
<p><strong>Minute 2:</strong> Vocal. Hum gently through 5 pitch slides (low to high). Sing your first line softly to yourself. Check your resonance is active.</p>
<p><strong>Minute 3:</strong> Mental. Say your mantra. Remind yourself why you love this song and who you're singing it for. Take one final deep breath and release it completely. Walk out.</p>`,
        keyTakeaways: [
          "Stage fright and excitement are physiologically identical — the difference is your label",
          "The reframe: 'I am excited' outperforms 'calm down' in performance research",
          "Preparation is the real antidote — overtrain so the stage feels easier than practice",
          "The 3-minute reset: physical → vocal → mental, in that order, every time"
        ],
        exercises: [
          {
            name: "The Anxiety-Excitement Reframe",
            duration: "5 minutes",
            description: "Think of an upcoming performance or a past moment of stage fright. Feel into the physical sensations — racing heart, heightened awareness, energy in the body. Now say out loud, multiple times: 'I am excited. I get to perform. This is my body getting ready to be excellent.' Notice how the same physical sensation begins to feel different when labeled differently.",
            tip: "This isn't positive-thinking magic. It's neuroscience. The label your brain assigns to arousal determines how it channels that energy. Practice the reframe now so it's automatic before your next performance."
          },
          {
            name: "The Deliberate Overpreparation Method",
            duration: "Ongoing",
            description: "For any upcoming performance, identify the hardest moment — the highest note, the most emotionally vulnerable section, the tricky rhythm. Practice ONLY that moment until you can do it perfectly 10 times in a row. Then practice it in the context of the full song. Then practice the full song from the top 5 times. Then sing the hardest moment again cold, from nothing. This is overpreparation.",
            tip: "When that moment arrives in the actual performance, your body will do it automatically. The amygdala (the brain's fear center) cannot override a motor memory that's been practiced to the level of automaticity."
          },
          {
            name: "Your Personal Mantra",
            duration: "10 minutes",
            description: "Write your personal performance mantra — 1-3 sentences that capture why you sing, what you're giving to your audience, and what you believe about your own voice. It should be true, specific to you, and emotionally activating when you say it. Practice saying it with conviction. Use it in the minute-3 of your pre-performance reset.",
            tip: "Good mantras are specific, not generic. 'I have a beautiful voice' is weak. 'When I sing, I connect people to emotions they can't find words for, and that's why I do this' is powerful."
          }
        ],
        proTip: "The single most effective thing you can do for stage fright is to perform more. Every low-stakes performance — open mics, singing for friends, online videos, karaoke — builds the data that says 'I've done this before and I was fine.' Your nervous system needs this data more than it needs any technique. Schedule your first low-stakes performance this week."
      },
      {
        id: "m4l2",
        title: "Emotional Connection: Why Some Voices Give Chills",
        subtitle: "The technique behind the performances you can't stop rewatching",
        duration: "16 min",
        content: `<p>There are vocally flawless singers who leave audiences cold. There are technically imperfect singers who make rooms fall completely silent and bring people to tears. The difference is emotional authenticity — the felt sense that the singer is not performing the song, but living it, right now, in front of you.</p>

<h3>The Problem with 'Performing'</h3>
<p>The word "performance" contains a trap. When we "perform," we put on — we present a version of something to an audience. This creates a separation: the singer is doing something, the audience is watching something. That separation is felt, even subconsciously, and it creates emotional distance.</p>

<p>The greatest singers close this distance. They're not performing — they're experiencing. The song is happening to them in real time, and the audience is experiencing it with them, not watching it happen. This is the difference between a singer and a storyteller.</p>

<h3>The Actor's Approach to Song</h3>
<p>Every great vocal coach borrows from acting technique, because great singing and great acting solve the same problem: how to be genuinely present in an imaginary situation. The key tools:</p>

<p><strong>Given circumstances:</strong> Who is this song about? What situation are the characters in? Make these specific, not generic. "Someone who lost love" is weak. "A 34-year-old who just found out their partner of 10 years is leaving — and they're in the kitchen, and it's raining" is something you can live in.</p>

<p><strong>Objective:</strong> What does the singer (as character) want? Not just emotionally — specifically. "I want them to understand the depth of what they're throwing away." Every line, every phrase, serves this want.</p>

<p><strong>The person you're singing to:</strong> Identify one specific, real person in your life who this song is for or about. Sing it to that actual person in your imagination. This makes abstract emotional material immediately specific and real.</p>

<h3>The Paradox of Technical Freedom</h3>
<p>Here's the key insight: emotional connection becomes possible only when technique is automatic. As long as you're thinking about breath support, vowel placement, mix voice, and pitch, you cannot be in the song. This is why all the technical work in Modules 1-3 matters so deeply — it's building the foundation that lets you forget technique and simply be present.</p>`,
        keyTakeaways: [
          "Performing 'at' the audience creates distance; experiencing the song 'with' them creates connection",
          "Make your song's circumstances specific, not generic — specificity creates real emotion",
          "Identify one real person to sing to — it transforms abstract emotion into genuine feeling",
          "Emotional freedom only becomes available when technique is automatic — this is why we built the foundation first"
        ],
        exercises: [
          {
            name: "The Monologue-to-Melody",
            duration: "10 minutes",
            description: "Take a song you're working on. Speak the lyrics — not sing them — as if you're saying them to a real person in a real situation. Use all the inflection, emphasis, and emotion of natural speech. Let yourself feel genuinely. Then, immediately after, sing the song — but keep the same emotional specificity you just found in speaking. Notice how the singing completely changes.",
            tip: "This is one of the most-used techniques in professional vocal coaching, used at conservatories and Broadway rehearsal rooms worldwide. It works because speech bypasses the 'I'm performing' self-consciousness that blocks genuine emotion."
          },
          {
            name: "The Person and The Moment",
            duration: "5 minutes",
            description: "For one specific song you're working on, identify: (1) One specific real or vividly imagined person you are singing to. (2) One specific moment in time where this scene is happening — location, weather, time of day, what just happened. Write both down. Then, every time you practice this song, close your eyes for 10 seconds before you start and bring up this person and this moment completely before you sing the first note.",
            tip: "The 10 seconds of pre-visualization is not wasted time. It is the setup that makes everything else work. Professional actors call this 'entering the moment.' It's the difference between performing a song and living it."
          }
        ],
        proTip: "Watch a video of yourself singing — ideally something you thought was a good performance. Now watch it on mute, watching only your eyes and face. Can you see genuine emotion? Or do you see someone concentrating, someone slightly disconnected from what they're saying? This is the most honest evaluation tool available to a singer. The face never lies."
      },
      {
        id: "m4l3",
        title: "Presence: Owning Every Room You Walk Into",
        subtitle: "The physical and psychological tools of commanding performance",
        duration: "15 min",
        content: `<p>Presence is not charisma — though it can produce charisma. Presence is not volume — quiet voices can have tremendous presence. Presence is the quality of being so fully inhabiting your body, your intention, and the moment, that others cannot look away. It is a trained skill.</p>

<h3>Physical Presence</h3>
<p>Your body communicates your internal state to your audience before you sing a single note. Research by Amy Cuddy shows that open, expansive body posture changes not only how others perceive you but your own hormone levels — high-power postures increase testosterone and decrease cortisol within two minutes. Your body position literally changes your biochemistry and your experience of yourself.</p>

<p><strong>The performance body:</strong> feet grounded and hip-width apart, weight slightly forward, spine long, chest open, jaw relaxed, gaze soft and inclusive. This is a body that says "I am here, I am glad to be here, and I have something for you." Your audience reads this in 300 milliseconds before you ever sing.</p>

<h3>Eye Contact and Connection</h3>
<p>Eye contact is the most direct route to audience connection. When you make genuine eye contact with one person in the room and hold it for a full phrase, that person feels like the song is for them. Every other person watching sees that connection happen and feels it vicariously. This is the physics of how one singer can make 10,000 people feel individually seen.</p>

<p>For singers who find direct eye contact uncomfortable: start with the "triangle" — alternate between three friendly faces in different parts of the room, spending one full phrase on each. As your confidence grows, the need for the technique disappears and genuine connection takes over.</p>

<h3>Stillness as Power</h3>
<p>Nervous energy creates constant small movements — shifting weight, unnecessary gestures, looking away. These movements dissipate the energy that should be going into the performance. Counterintuitively, the most powerful performers often move the least. When they do move, it's deliberate and intentional — and therefore 10x more impactful. Practice rooting your feet and eliminating nervous movement. Feel how the contained energy concentrates in your voice.</p>`,
        keyTakeaways: [
          "Presence is trained, not innate — it comes from full inhabitation of body, intention, and moment",
          "Power posture changes your actual hormone levels, affecting both how others see you and how you feel",
          "Eye contact with one person creates vicariously felt connection with the entire room",
          "Stillness concentrates energy into the voice — nervous movement dissipates it"
        ],
        exercises: [
          {
            name: "The 2-Minute Power Pose",
            duration: "2 minutes",
            description: "Before any performance or practice session where you want to build presence, spend 2 minutes in a high-power pose: stand with feet wide, hands on hips, chest open, chin slightly elevated. Or stand with arms raised in a V above your head. Hold it for the full 2 minutes. Research shows measurable hormone changes in this time. Notice how differently you feel when you begin to sing immediately after.",
            tip: "Do this in private — a bathroom stall, your car, a corner backstage. It doesn't have to be visible. The biochemical effect is real regardless of audience."
          },
          {
            name: "The Stillness Practice",
            duration: "10 minutes",
            description: "Set up your phone to film yourself. Sing an entire song with one specific constraint: your feet cannot move. Your hands can rest at your sides or in a comfortable neutral position, but they can't fidget. Watch the recording. Notice how the contained stillness reads on screen — it almost certainly looks more powerful and confident than you expected.",
            tip: "Most singers are shocked by how much they move unconsciously. The recording shows them for the first time what their audience sees. Unnecessary movement is almost always a nervous habit, and awareness is the first step to eliminating it."
          },
          {
            name: "The Triangle Eye Contact Drill",
            duration: "5 minutes",
            description: "Place 3 objects around the room at different points — a photo, a plant, a lamp. These are your three audience members. Sing a song and spend one complete phrase on each 'audience member' before moving to the next. Make genuine eye contact with each, as if it's a person you care about. Rotate through the triangle for the entire song.",
            tip: "When this becomes natural with objects, transition to real people — sing for one trusted friend. Then two. Then small groups. The skill builds in exactly this order."
          }
        ],
        proTip: "The most presence-building practice available to you costs nothing: watch live performance videos of singers you admire and study ONLY their physical presence — their stillness, their eye contact, their body language, when they move and why. Study it the way a film student would study directing. This analytical eye will transform your own performance choices within weeks."
      },
      {
        id: "m4l4",
        title: "The Encore Mindset: Performing Like a Professional",
        subtitle: "Handle mistakes, build consistency, and cultivate the mindset of mastery",
        duration: "14 min",
        content: `<p>This final lesson is about the invisible skill that separates working professional singers from everyone else: the ability to perform consistently under pressure, recover gracefully from mistakes, and approach their craft with the mindset that sustains a lifetime of growth and joy.</p>

<h3>The Professional Recovery</h3>
<p>Every professional singer makes mistakes in performance. The difference is that when they do, the audience never knows. Not because the mistake didn't happen — but because the singer's response was so smooth, so unflinching, so rooted in the experience of the song, that the mistake blended into the performance like an intended choice.</p>

<p>The recovery technique has two rules: Never stop. Never acknowledge. If you crack a note, stumble a lyric, miss a breath — keep going, keep connecting, keep performing. Your audience is not following a score. They're following your energy. If your energy says "that was intentional," they believe it. If your energy says "I made a mistake," they know immediately.</p>

<h3>Building Consistency: The Performance Simulation Method</h3>
<p>The gap between practice performance and real performance has one main source: the variable of observation. When we're watched, our self-monitoring increases, and that split attention degrades performance. The solution is to practice being watched — to deliberately introduce observation into your practice until it becomes a familiar, comfortable variable.</p>

<p>Performance simulation stages: (1) Perform alone, recording yourself. (2) Perform for one trusted person. (3) Perform for a small group of 3-5 friends. (4) Perform for a slightly larger, unfamiliar group (open mic, community event). Each stage builds comfort with observation. By stage 4, a real performance feels like practice.</p>

<h3>The Mastery Mindset</h3>
<p>The singers who grow forever — who remain vital, alive, and improving in their 60s and 70s — share a specific mindset: they approach every performance as both complete in itself and part of an ongoing journey. They don't need any single performance to be perfect. They love the practice, the problem-solving, the perpetual discovery of what their voice can do.</p>

<p>This mindset is available to you right now. Your voice is not a fixed thing that you either have or don't. It's a living, growing, developing instrument that will reward patient, consistent attention for the rest of your life. The journey you've started in this course — this 21-day transformation — is the beginning of something that doesn't end.</p>`,
        keyTakeaways: [
          "Never stop, never acknowledge — the professional recovery rule",
          "Your energy after a mistake tells the audience whether it was a mistake or a choice",
          "Performance simulation (increasing observation gradually) eliminates the practice-to-performance gap",
          "The mastery mindset: every performance is complete AND part of an endless, joyful journey"
        ],
        exercises: [
          {
            name: "The Intentional Mistake",
            duration: "5 minutes",
            description: "Sing a song. At a random moment, deliberately 'stumble' — crack a note, forget a lyric (have the actual lyric ready to come back to), make a clear error. Then recover immediately and seamlessly. Do this 5 times throughout the song. This trains the neural pathway for recovery so that when a real mistake happens, the recovery happens automatically.",
            tip: "This exercise is deeply uncomfortable at first and then immensely liberating. When you've practiced recovering from a mistake 50 times, an actual mistake becomes almost a non-event."
          },
          {
            name: "The Growth Log",
            duration: "Ongoing",
            description: "Starting today, keep a short weekly log. Write three things: (1) One thing I can do now that I couldn't do at the start. (2) One thing I'm still working on. (3) One thing I discovered about my voice this week. Review this log at the end of 21 days and then at the end of 3 months. The documented evidence of growth is one of the most powerful motivators for continued development.",
            tip: "Singers who keep growth logs are objectively more consistent in their practice and report higher satisfaction with their development. The act of documenting growth makes the growth feel real — and real growth motivates more growth."
          }
        ],
        proTip: "Your final assignment: schedule a real performance within 30 days of completing this course. An open mic, a friend's birthday, a family gathering, a recording for social media — it doesn't matter. What matters is the commitment. The course gives you the tools. The performance gives the tools their meaning. You now have a voice that deserves to be heard. Go let it be heard."
      }
    ]
  }
];

const SONG_VAULT = [
  { title: "Hallelujah", artist: "Leonard Cohen / Jeff Buckley", technique: "Build from whisper to full voice — the dynamic arc is the performance", level: "Intermediate", module: "M3" },
  { title: "I Will Always Love You", artist: "Whitney Houston", technique: "Final key change and sustained high note — the defining mix voice moment", level: "Advanced", module: "M2" },
  { title: "Imagine", artist: "John Lennon", technique: "Pure, clear tone and complete sincerity — no technique hiding behind ornamentation", level: "Beginner", module: "M3" },
  { title: "Rolling in the Deep", artist: "Adele", technique: "Controlled raw power and runs on the chorus — chest voice dominance", level: "Intermediate", module: "M2" },
  { title: "At Last", artist: "Etta James", technique: "Rich chest-mix tone with controlled vibrato — the definition of signature sound", level: "Intermediate", module: "M3" },
  { title: "Someone Like You", artist: "Adele", technique: "Emotional connection and dynamic restraint — power through vulnerability", level: "Intermediate", module: "M4" },
  { title: "Shallow", artist: "Lady Gaga / Bradley Cooper", technique: "Full dynamic range and emotional depth — a masterclass in contrast", level: "Advanced", module: "M3" },
  { title: "Fix You", artist: "Coldplay", technique: "Building intensity and emotional arc — the most powerful crescendo in modern pop", level: "Intermediate", module: "M3" },
  { title: "Creep", artist: "Radiohead", technique: "Emotional vulnerability with a controlled explosive chorus", level: "Beginner", module: "M4" },
  { title: "Hurt", artist: "Johnny Cash (cover)", technique: "Vulnerability, restraint, and the power of 'less' — stage presence lesson", level: "Intermediate", module: "M4" },
  { title: "Bohemian Rhapsody", artist: "Queen", technique: "Versatility and character voices — mix voice extreme range showcase", level: "Advanced", module: "M2" },
  { title: "The Sound of Silence", artist: "Simon & Garfunkel / Disturbed", technique: "Dramatic contrast between delicacy and power — pick one arrangement", level: "Intermediate", module: "M3" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", technique: "Dynamic storytelling arc across an entire song — the complete performance journey", level: "Advanced", module: "M3" },
  { title: "Perfect", artist: "Ed Sheeran", technique: "Emotional storytelling with smooth phrasing — speech-to-song technique", level: "Intermediate", module: "M4" },
  { title: "A Thousand Years", artist: "Christina Perri", technique: "Delicate control and ascending emotional intensity — breath support showcase", level: "Intermediate", module: "M1" },
  { title: "Skinny Love", artist: "Bon Iver", technique: "Falsetto control and emotional restraint — head voice mastery", level: "Intermediate", module: "M2" },
  { title: "Stand By Me", artist: "Ben E. King", technique: "Steady, warm tone and smooth phrasing — resonance placement study", level: "Beginner", module: "M3" },
  { title: "Blackbird", artist: "The Beatles", technique: "Intimate clarity with upward melodic reach — mix voice in folk/pop context", level: "Beginner", module: "M1" },
  { title: "Yesterday", artist: "The Beatles", technique: "Emotional depth through simplicity — what you leave out matters as much as what you put in", level: "Beginner", module: "M4" },
  { title: "Hotel California", artist: "Eagles", technique: "Smooth phrasing and mid-range warmth across a long performance arc", level: "Intermediate", module: "M3" },
  { title: "Wish You Were Here", artist: "Pink Floyd", technique: "Intimate emotional investment — the song as letter", level: "Intermediate", module: "M4" },
  { title: "Comfortably Numb", artist: "Pink Floyd", technique: "Soaring mix voice in the solo sections — top register control", level: "Advanced", module: "M2" },
  { title: "Take Me Home, Country Roads", artist: "John Denver", technique: "Warmth, storytelling directness, and country tone placement", level: "Beginner", module: "M3" },
  { title: "Here Comes the Sun", artist: "The Beatles", technique: "Uplifting clarity and gentle forward placement — pure joy in sound", level: "Beginner", module: "M3" },
  { title: "Redemption Song", artist: "Bob Marley", technique: "Message-driven simplicity — when words matter more than technique", level: "Beginner", module: "M4" },
  { title: "Respect", artist: "Aretha Franklin", technique: "Power and attitude — chest voice dominance with rhythmic precision", level: "Advanced", module: "M3" },
  { title: "I Will Survive", artist: "Gloria Gaynor", technique: "Confidence and power arc — the performance builds with the character", level: "Intermediate", module: "M4" },
  { title: "What's Going On", artist: "Marvin Gaye", technique: "Soul and warmth — the most beautifully relaxed top-register placement in pop history", level: "Intermediate", module: "M3" },
  { title: "Superstition", artist: "Stevie Wonder", technique: "Groove and rhythmic control — the voice as rhythm instrument", level: "Intermediate", module: "M3" },
  { title: "Falling Slowly", artist: "Glen Hansard & Markéta Irglová", technique: "Intimate delivery — the performance of two voices as one emotional arc", level: "Beginner", module: "M4" },
  { title: "Zombie", artist: "The Cranberries", technique: "Power and intensity — controlled chest voice with emotional urgency", level: "Intermediate", module: "M1" },
  { title: "Tears in Heaven", artist: "Eric Clapton", technique: "Delicate emotional vulnerability — grief in sound", level: "Intermediate", module: "M4" },
  { title: "Wonderful Tonight", artist: "Eric Clapton", technique: "Warmth and intimacy — the speaking-to-singing technique", level: "Beginner", module: "M3" },
  { title: "Chasing Cars", artist: "Snow Patrol", technique: "Simplicity and sincerity — the power of the unadorned note", level: "Beginner", module: "M4" },
  { title: "Isn't She Lovely", artist: "Stevie Wonder", technique: "Joy and vocal agility — the voice as celebration", level: "Intermediate", module: "M2" },
  { title: "Something", artist: "The Beatles", technique: "Smooth melodic warmth — George Harrison's most melodically perfect vocal", level: "Intermediate", module: "M3" },
  { title: "Yellow", artist: "Coldplay", technique: "Soaring melodic control — how to make a simple melody feel enormous", level: "Intermediate", module: "M2" },
  { title: "The Man in Black", artist: "Johnny Cash", technique: "Attitude, storytelling, and the power of the bass voice", level: "Beginner", module: "M3" },
  { title: "One Love", artist: "Bob Marley", technique: "Warmth and ease — the sound of a voice completely at home", level: "Beginner", module: "M1" },
  { title: "Let It Be", artist: "The Beatles", technique: "Steady, comforting presence — the voice as refuge", level: "Beginner", module: "M4" },
  { title: "Black Dog", artist: "Led Zeppelin", technique: "Rhythm and attitude — the voice matching the intensity of rock guitars", level: "Intermediate", module: "M1" },
  { title: "Wonderwall", artist: "Oasis", technique: "Catchy melody with attitude — speak-singing done with commitment", level: "Beginner", module: "M3" },
  { title: "Let's Get It On", artist: "Marvin Gaye", technique: "Smooth, warm mid-range — relaxed sensuality in tone", level: "Intermediate", module: "M3" },
  { title: "No Scrubs", artist: "TLC", technique: "Rhythm, attitude, and blend — vocal harmony perspective", level: "Intermediate", module: "M3" },
  { title: "Layla", artist: "Eric Clapton", technique: "Passion and intensity — the blues voice expressing raw feeling", level: "Intermediate", module: "M4" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran", technique: "Smooth warmth and consistent mid-range tone — the R&B-pop blend", level: "Intermediate", module: "M3" },
  { title: "Viva la Vida", artist: "Coldplay", technique: "Power and storytelling — the pop anthem vocal approach", level: "Intermediate", module: "M4" },
  { title: "Bohemian Like You", artist: "The Dandy Warhols", technique: "Attitude and swagger — the indie-rock vocal personality", level: "Intermediate", module: "M4" },
  { title: "Here Without You", artist: "3 Doors Down", technique: "Emotional range and rock mix voice — vulnerability in a harder context", level: "Intermediate", module: "M2" },
  { title: "The Scientist", artist: "Coldplay", technique: "Descending emotional arc — how the melody's shape carries the story", level: "Beginner", module: "M4" },
];

// ============================================================
// ICONS
// ============================================================
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconPlay = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconTrophy = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" /><rect x="6" y="18" width="12" height="4" rx="1" />
    <path d="M6 9a6 6 0 0 0 12 0" />
  </svg>
);

// ============================================================
// TIMER COMPONENT
// ============================================================
function ExerciseTimer({ seconds, label }: { seconds: number; label: string }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running && timeLeft > 0) {
      intervalRef.current = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setRunning(false);
      setDone(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, timeLeft]);

  const reset = () => { setTimeLeft(seconds); setRunning(false); setDone(false); };
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const progress = 1 - timeLeft / seconds;

  return (
    <div className="exercise-timer">
      <div className="timer-circle-wrap">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="30" fill="none" stroke="#1e293b" strokeWidth="6" />
          <circle
            cx="36" cy="36" r="30" fill="none"
            stroke={done ? "#10b981" : "#f59e0b"} strokeWidth="6"
            strokeDasharray={`${188.5 * progress} 188.5`}
            strokeLinecap="round"
            transform="rotate(-90 36 36)"
            style={{ transition: "stroke-dasharray 1s linear" }}
          />
        </svg>
        <div className="timer-text">
          {done ? <span style={{ color: "#10b981", fontSize: 13, fontWeight: 700 }}>Done!</span>
            : <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 15 }}>
              {mins}:{secs.toString().padStart(2, "0")}
            </span>}
        </div>
      </div>
      <div className="timer-label">{label}</div>
      <div className="timer-btns">
        {!done && (
          <button className="timer-btn" onClick={() => setRunning(r => !r)}>
            {running ? "Pause" : "Start"}
          </button>
        )}
        <button className="timer-btn timer-btn-reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function CoursePage() {
  const [activeSection, setActiveSection] = useState<"course" | "vault" | "challenge">("course");
  const [activeModuleId, setActiveModuleId] = useState("m1");
  const [activeLessonId, setActiveLessonId] = useState("m1l1");
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [vaultFilter, setVaultFilter] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"lesson" | "exercises">("lesson");
  const contentRef = useRef<HTMLDivElement>(null);

  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const pct = Math.round((completed.size / totalLessons) * 100);
  const activeModule = MODULES.find(m => m.id === activeModuleId)!;
  const activeLesson = activeModule?.lessons.find(l => l.id === activeLessonId)!;

  const flatLessons = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id })));
  const currentIdx = flatLessons.findIndex(l => l.id === activeLessonId);

  const goTo = (lessonId: string, moduleId: string) => {
    setActiveLessonId(lessonId);
    setActiveModuleId(moduleId);
    setActiveTab("lesson");
    setSidebarOpen(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const goNext = () => {
    if (currentIdx < flatLessons.length - 1) {
      const next = flatLessons[currentIdx + 1];
      goTo(next.id, next.moduleId);
    }
  };

  const goPrev = () => {
    if (currentIdx > 0) {
      const prev = flatLessons[currentIdx - 1];
      goTo(prev.id, prev.moduleId);
    }
  };

  const markComplete = () => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(activeLessonId);
      return next;
    });
  };

  const filteredSongs = vaultFilter === "All"
    ? SONG_VAULT
    : SONG_VAULT.filter(s => s.level === vaultFilter);

  const CHALLENGE_DAYS = [
    { week: 1, days: [
      { day: 1, focus: "Posture + Belly Breath Reset", modules: ["M1"], detail: "Wall alignment test × 3. Belly breath reset (10 reps). Hissing drill (5 reps). End with 10 min of slow humming." },
      { day: 2, focus: "Diaphragmatic Breathing Deep Dive", modules: ["M1"], detail: "Hissing drill extended to 20 seconds each rep. Appoggio hold on 5 pitches. Staccato breath bursts × 20." },
      { day: 3, focus: "Full Warm-Up Mastery", modules: ["M1"], detail: "Do the 7-minute warm-up twice back to back. Record yourself. Listen for where your voice sounds most free." },
      { day: 4, focus: "Ear-Voice Bridge", modules: ["M2"], detail: "Pitch matching drill with tuner app for 15 minutes. Match 20 different notes. Record your accuracy rate." },
      { day: 5, focus: "Foundation Consolidation", modules: ["M1"], detail: "Warm-up → sing one favorite song from beginning to end with full posture and breath awareness. Record it." },
      { day: 6, focus: "Mix Voice Discovery", modules: ["M2"], detail: "The Witch exercise × 10. Nay-Nay-Nay scales for 10 minutes. Record your highest comfortable note." },
      { day: 7, focus: "Week 1 Review", modules: ["M1", "M2"], detail: "Re-record the song from Day 5. Compare the two recordings. Journal: what's different? What's improved?" },
    ]},
    { week: 2, days: [
      { day: 8, focus: "High Notes Training", modules: ["M2"], detail: "High Note Landing practice. The Slide portamento drill. Record 3 attempts at your current top note." },
      { day: 9, focus: "Range Mapping + Expansion", modules: ["M2"], detail: "Map your full range with tuner. Top extension drill on your range ceiling. Bottom power builder." },
      { day: 10, focus: "Tone Shaping Introduction", modules: ["M3"], detail: "Bright vs Dark contrast drill × 10. The Megaphone trick — find your natural tone center." },
      { day: 11, focus: "Pitch Problem Solving", modules: ["M2"], detail: "Identify your recurring pitch issue (flat/sharp/inconsistent). Target lock drill on problem notes × 50 reps." },
      { day: 12, focus: "Vibrato Exploration", modules: ["M3"], detail: "Release and Allow exercise × 10. Pulsing breath method. Record a sustained note — can you hear vibrato emerging?" },
      { day: 13, focus: "Style DNA Exploration", modules: ["M3"], detail: "Genre shift exercise with 4 styles. Style imitation study on one song by a singer you love." },
      { day: 14, focus: "Week 2 Review", modules: ["M2", "M3"], detail: "Sing your range-ceiling note. Compare to Day 1. Sing a full song focusing on tone color. Journal your discoveries." },
    ]},
    { week: 3, days: [
      { day: 15, focus: "Dynamics Deep Dive", modules: ["M3"], detail: "Whisper challenge — sing at 20% volume with perfect pitch. Dynamic map one full song. Practice the map." },
      { day: 16, focus: "Stage Fright Elimination", modules: ["M4"], detail: "2-minute power pose. Anxiety-to-excitement reframe drill. Write and practice your personal performance mantra." },
      { day: 17, focus: "Emotional Connection", modules: ["M4"], detail: "Monologue-to-melody with your chosen performance song. The Person and The Moment visualization." },
      { day: 18, focus: "Presence Training", modules: ["M4"], detail: "Stillness practice — film yourself singing with no foot movement. Triangle eye contact drill." },
      { day: 19, focus: "Full Performance Run", modules: ["M4"], detail: "Pre-performance reset. Sing your performance song from start to finish as if on stage. Film it. Watch it back." },
      { day: 20, focus: "Intentional Mistake Recovery", modules: ["M4"], detail: "Deliberate mistake exercise × 5. Sing the song and intentionally stumble 3 times — then recover perfectly." },
      { day: 21, focus: "YOUR GRADUATION PERFORMANCE", modules: ["M1","M2","M3","M4"], detail: "Do your full 7-min warm-up. Pre-performance reset. Record the definitive version of your transformation song. This is your before-and-after. Share it. You've earned it." },
    ]},
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080c14;
          --bg2: #0d1422;
          --bg3: #121929;
          --bg4: #19243a;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --text: #e8edf5;
          --text2: #8fa3c0;
          --text3: #5c7299;
          --green: #10b981;
          --green-dim: rgba(16,185,129,0.12);
          --blue: #3b82f6;
          --blue-dim: rgba(59,130,246,0.12);
          --purple: #8b5cf6;
          --purple-dim: rgba(139,92,246,0.12);
          --red: #ef4444;
          --red-dim: rgba(239,68,68,0.12);
          --amber: #f59e0b;
          --radius: 14px;
          --radius-sm: 8px;
          --sidebar: 280px;
          --header: 68px;
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        body { background: var(--bg); color: var(--text); font-family: var(--font-body); font-size: 15px; line-height: 1.6; }

        .vmb-root { min-height: 100vh; display: flex; flex-direction: column; }

        /* ── HEADER ── */
        .vmb-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: var(--header);
          background: rgba(8,12,20,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; padding: 0 20px; gap: 16px;
        }
        .vmb-header-logo { display: flex; align-items: center; gap: 10px; font-family: Arial; font-weight: 800; font-size: 17px; letter-spacing: -0.3px; }
        .vmb-header-logo-icon { width: 34px; height: 34px; border-radius: 8px; background: linear-gradient(135deg, var(--green), var(--blue)); display: flex; align-items: center; justify-content: center; font-size: 16px; }
        .vmb-header-progress { flex: 1; display: flex; align-items: center; gap: 12px; }
        .vmb-progress-bar-wrap { flex: 1; height: 5px; background: var(--bg4); border-radius: 99px; overflow: hidden; max-width: 300px; }
        .vmb-progress-bar { height: 100%; background: linear-gradient(90deg, var(--green), var(--blue)); border-radius: 99px; transition: width 0.5s ease; }
        .vmb-progress-label { font-size: 12px; color: var(--text2); white-space: nowrap; font-weight: 500; }
        .vmb-nav { display: flex; gap: 4px; }
        .vmb-nav-btn { padding: 7px 14px; border-radius: 99px; border: 1px solid var(--border); background: transparent; color: var(--text2); cursor: pointer; font-family: var(--font-body); font-size: 13px; font-weight: 500; transition: all 0.2s; white-space: nowrap; }
        .vmb-nav-btn.active { background: var(--bg4); border-color: var(--border2); color: var(--text); }
        .vmb-nav-btn:hover:not(.active) { border-color: var(--border2); color: var(--text); }
        .vmb-menu-btn { display: none; background: none; border: none; color: var(--text); cursor: pointer; padding: 4px; }

        /* ── LAYOUT ── */
        .vmb-layout { display: flex; flex: 1; padding-top: var(--header); min-height: calc(100vh - var(--header)); }

        /* ── SIDEBAR ── */
        .vmb-sidebar {
          width: var(--sidebar); flex-shrink: 0;
          position: fixed; top: var(--header); bottom: 0; left: 0;
          background: var(--bg2); border-right: 1px solid var(--border);
          overflow-y: auto; overflow-x: hidden;
          z-index: 80;
          scrollbar-width: thin; scrollbar-color: var(--bg4) transparent;
          transition: transform 0.3s ease;
        }
        .vmb-sidebar::-webkit-scrollbar { width: 4px; }
        .vmb-sidebar::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 99px; }

        .vmb-sidebar-module { border-bottom: 1px solid var(--border); }
        .vmb-sidebar-module-header {
          padding: 14px 16px; cursor: pointer; display: flex; align-items: center; gap: 10px;
          transition: background 0.2s;
        }
        .vmb-sidebar-module-header:hover { background: var(--bg3); }
        .vmb-sidebar-module-emoji { font-size: 16px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 6px; flex-shrink: 0; }
        .vmb-sidebar-module-info { flex: 1; min-width: 0; }
        .vmb-sidebar-module-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: var(--text3); margin-bottom: 1px; }
        .vmb-sidebar-module-title { font-size: 13px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .vmb-sidebar-module-progress { font-size: 11px; color: var(--text3); margin-top: 1px; }

        .vmb-sidebar-lessons { padding: 0 10px 8px; }
        .vmb-sidebar-lesson {
          display: flex; align-items: center; gap: 8px; padding: 9px 10px; border-radius: var(--radius-sm);
          cursor: pointer; transition: all 0.2s; margin-bottom: 2px;
          border: 1px solid transparent;
        }
        .vmb-sidebar-lesson:hover { background: var(--bg3); }
        .vmb-sidebar-lesson.active { background: var(--bg4); border-color: var(--border2); }
        .vmb-sidebar-lesson-dot { width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--border2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; }
        .vmb-sidebar-lesson-dot.done { background: var(--green); border-color: var(--green); color: white; }
        .vmb-sidebar-lesson-title { font-size: 12.5px; color: var(--text2); line-height: 1.4; flex: 1; }
        .vmb-sidebar-lesson.active .vmb-sidebar-lesson-title { color: var(--text); }

        .vmb-sidebar-bonus {
          margin: 12px 10px; padding: 12px; border-radius: var(--radius-sm);
          background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.08));
          border: 1px solid rgba(139,92,246,0.25); cursor: pointer; transition: all 0.2s;
        }
        .vmb-sidebar-bonus:hover { border-color: rgba(139,92,246,0.5); }
        .vmb-sidebar-bonus-title { font-size: 12px; font-weight: 700; color: var(--purple); margin-bottom: 3px; }
        .vmb-sidebar-bonus-sub { font-size: 11px; color: var(--text3); }

        /* ── MAIN CONTENT ── */
        .vmb-main { flex: 1; margin-left: var(--sidebar); min-width: 0; }
        .vmb-content { max-width: 820px; margin: 0 auto; padding: 32px 28px 80px; }
        .vmb-content-full { max-width: 1060px; margin: 0 auto; padding: 32px 28px 80px; }

        /* ── LESSON HEADER ── */
        .vmb-lesson-header { margin-bottom: 28px; }
        .vmb-lesson-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .vmb-module-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 99px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .vmb-lesson-number { font-size: 12px; color: var(--text3); }
        .vmb-lesson-title { font-family: Arial; font-size: clamp(22px, 4vw, 34px); font-weight: 800; color: var(--text); line-height: 1.15; margin-bottom: 8px; letter-spacing: -0.5px; }
        .vmb-lesson-subtitle { font-size: 16px; color: var(--text2); margin-bottom: 16px; }
        .vmb-lesson-meta { display: flex; align-items: center; gap: 16px; }
        .vmb-meta-chip { display: flex; align-items: center; gap: 6px; padding: 5px 12px; background: var(--bg3); border: 1px solid var(--border); border-radius: 99px; font-size: 12px; color: var(--text2); }

        /* ── TABS ── */
        .vmb-tabs { display: flex; gap: 0; border-bottom: 1px solid var(--border); margin-bottom: 24px; }
        .vmb-tab { padding: 10px 20px; border: none; background: none; color: var(--text3); font-family: var(--font-body); font-size: 14px; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.2s; }
        .vmb-tab.active { color: var(--text); border-bottom-color: var(--green); }
        .vmb-tab:hover:not(.active) { color: var(--text2); }

        /* ── LESSON CONTENT ── */
        .vmb-lesson-body { color: var(--text); }
        .vmb-lesson-body h3 { font-family: Arial; font-size: 20px; font-weight: 700; color: var(--text); margin: 28px 0 10px; }
        .vmb-lesson-body h4 { font-size: 15px; font-weight: 600; color: var(--green); margin: 20px 0 8px; }
        .vmb-lesson-body p { margin-bottom: 14px; line-height: 1.75; color: var(--text2); }
        .vmb-lesson-body strong { color: var(--text); font-weight: 600; }

        /* ── KEY TAKEAWAYS ── */
        .vmb-takeaways { background: linear-gradient(135deg, rgba(16,185,129,0.07), rgba(59,130,246,0.05)); border: 1px solid rgba(16,185,129,0.2); border-radius: var(--radius); padding: 20px 24px; margin: 24px 0; }
        .vmb-takeaways-title { font-family: Arial; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--green); margin-bottom: 12px; }
        .vmb-takeaway-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; font-size: 14px; color: var(--text2); }
        .vmb-takeaway-dot { width: 18px; height: 18px; background: var(--green); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; color: white; }

        /* ── PRO TIP ── */
        .vmb-pro-tip { background: linear-gradient(135deg, rgba(245,158,11,0.08), rgba(239,68,68,0.05)); border: 1px solid rgba(245,158,11,0.25); border-radius: var(--radius); padding: 20px 24px; margin: 24px 0; }
        .vmb-pro-tip-label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--amber); margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
        .vmb-pro-tip-text { font-size: 14px; color: var(--text2); line-height: 1.7; }

        /* ── EXERCISES ── */
        .vmb-exercise-card { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; margin-bottom: 16px; }
        .vmb-exercise-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .vmb-exercise-name { font-family: Arial; font-size: 16px; font-weight: 700; color: var(--text); }
        .vmb-exercise-duration { font-size: 12px; color: var(--amber); background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2); padding: 3px 10px; border-radius: 99px; white-space: nowrap; font-weight: 600; flex-shrink: 0; }
        .vmb-exercise-desc { font-size: 14px; color: var(--text2); line-height: 1.7; margin-bottom: 14px; }
        .vmb-exercise-tip { background: var(--bg4); border-radius: var(--radius-sm); padding: 12px 16px; font-size: 13px; color: var(--text3); border-left: 3px solid var(--blue); }
        .vmb-exercise-tip strong { color: var(--blue); font-weight: 600; }

        /* ── TIMER ── */
        .exercise-timer { display: flex; align-items: center; gap: 14px; background: var(--bg4); border-radius: var(--radius-sm); padding: 12px 16px; margin-top: 12px; }
        .timer-circle-wrap { position: relative; width: 72px; height: 72px; flex-shrink: 0; }
        .timer-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: var(--text); }
        .timer-label { flex: 1; font-size: 13px; color: var(--text2); }
        .timer-btns { display: flex; gap: 8px; }
        .timer-btn { padding: 6px 14px; border-radius: 99px; border: 1px solid var(--border2); background: var(--bg); color: var(--text); font-family: var(--font-body); font-size: 12px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
        .timer-btn:hover { background: var(--bg3); }
        .timer-btn-reset { color: var(--text3); }

        /* ── LESSON NAV ── */
        .vmb-lesson-nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border); }
        .vmb-nav-prev, .vmb-nav-next { display: flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: var(--bg3); color: var(--text2); cursor: pointer; font-family: var(--font-body); font-size: 14px; font-weight: 500; transition: all 0.2s; }
        .vmb-nav-prev:hover, .vmb-nav-next:hover { border-color: var(--border2); color: var(--text); background: var(--bg4); }
        .vmb-nav-prev:disabled, .vmb-nav-next:disabled { opacity: 0.3; cursor: not-allowed; }
        .vmb-complete-btn { padding: 12px 28px; border-radius: var(--radius-sm); border: none; background: linear-gradient(135deg, var(--green), #059669); color: white; font-family: Arial; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .vmb-complete-btn.done { background: linear-gradient(135deg, #065f46, #047857); }
        .vmb-complete-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(16,185,129,0.3); }

        /* ── MODULE PROMISE ── */
        .vmb-module-promise { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 20px; margin-bottom: 24px; display: flex; align-items: flex-start; gap: 10px; }
        .vmb-module-promise-icon { font-size: 18px; }
        .vmb-module-promise-text { font-size: 13px; color: var(--text2); line-height: 1.6; }
        .vmb-module-promise-text strong { color: var(--text); }

        /* ── SONG VAULT ── */
        .vmb-vault-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
        .vmb-filter-btn { padding: 6px 16px; border-radius: 99px; border: 1px solid var(--border); background: transparent; color: var(--text2); cursor: pointer; font-family: var(--font-body); font-size: 13px; font-weight: 500; transition: all 0.2s; }
        .vmb-filter-btn.active { background: var(--bg4); border-color: var(--border2); color: var(--text); }
        .vmb-filter-btn:hover:not(.active) { border-color: var(--border2); color: var(--text); }
        .vmb-vault-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
        .vmb-vault-card { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px; transition: all 0.2s; }
        .vmb-vault-card:hover { border-color: var(--border2); background: var(--bg4); transform: translateY(-2px); }
        .vmb-vault-title { font-family: Arial; font-weight: 700; font-size: 15px; color: var(--text); margin-bottom: 3px; }
        .vmb-vault-artist { font-size: 12px; color: var(--text3); margin-bottom: 10px; }
        .vmb-vault-technique { font-size: 13px; color: var(--text2); line-height: 1.5; margin-bottom: 10px; }
        .vmb-vault-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .vmb-vault-tag { padding: 2px 10px; border-radius: 99px; font-size: 11px; font-weight: 600; }
        .tag-beginner { background: rgba(16,185,129,0.12); color: var(--green); border: 1px solid rgba(16,185,129,0.2); }
        .tag-intermediate { background: rgba(59,130,246,0.12); color: var(--blue); border: 1px solid rgba(59,130,246,0.2); }
        .tag-advanced { background: rgba(139,92,246,0.12); color: var(--purple); border: 1px solid rgba(139,92,246,0.2); }
        .vmb-vault-module { background: var(--bg4); color: var(--text3); border: 1px solid var(--border); padding: 2px 10px; border-radius: 99px; font-size: 11px; }

        /* ── CHALLENGE ── */
        .vmb-challenge-week { margin-bottom: 36px; }
        .vmb-week-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .vmb-week-badge { padding: 6px 16px; border-radius: 99px; font-family: Arial; font-size: 13px; font-weight: 700; }
        .week-1 { background: rgba(16,185,129,0.15); color: var(--green); border: 1px solid rgba(16,185,129,0.25); }
        .week-2 { background: rgba(59,130,246,0.15); color: var(--blue); border: 1px solid rgba(59,130,246,0.25); }
        .week-3 { background: rgba(139,92,246,0.15); color: var(--purple); border: 1px solid rgba(139,92,246,0.25); }
        .vmb-week-title { font-family: Arial; font-size: 18px; font-weight: 700; color: var(--text); }
        .vmb-day-card { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 20px; margin-bottom: 10px; display: flex; gap: 16px; }
        .vmb-day-card.special { background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.08)); border-color: rgba(139,92,246,0.3); }
        .vmb-day-num { width: 42px; height: 42px; border-radius: 50%; background: var(--bg4); border: 2px solid var(--border2); display: flex; align-items: center; justify-content: center; font-family: Arial; font-weight: 800; font-size: 16px; color: var(--text2); flex-shrink: 0; }
        .vmb-day-card.special .vmb-day-num { background: linear-gradient(135deg, var(--purple), var(--blue)); border: none; color: white; }
        .vmb-day-info { flex: 1; }
        .vmb-day-focus { font-family: Arial; font-weight: 700; font-size: 15px; color: var(--text); margin-bottom: 6px; }
        .vmb-day-detail { font-size: 13px; color: var(--text2); line-height: 1.6; }
        .vmb-day-modules { display: flex; gap: 4px; margin-top: 8px; flex-wrap: wrap; }
        .vmb-day-module { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 99px; background: var(--bg4); color: var(--text3); border: 1px solid var(--border); }

        /* ── SECTION HEADER ── */
        .vmb-section-header { margin-bottom: 28px; }
        .vmb-section-title { font-family: Arial; font-size: clamp(24px, 4vw, 36px); font-weight: 800; color: var(--text); margin-bottom: 8px; letter-spacing: -0.5px; }
        .vmb-section-sub { font-size: 16px; color: var(--text2); }

        /* ── STATS ROW ── */
        .vmb-stats { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
        .vmb-stat { flex: 1; min-width: 120px; background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 20px; text-align: center; }
        .vmb-stat-num { font-family: Arial; font-size: 28px; font-weight: 800; }
        .vmb-stat-label { font-size: 12px; color: var(--text3); margin-top: 2px; }

        /* ── OVERLAY (mobile sidebar) ── */
        .vmb-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 79; }

        /* ── COMPLETION BADGE ── */
        .vmb-completion { background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.08)); border: 1px solid rgba(16,185,129,0.3); border-radius: var(--radius); padding: 20px 24px; margin-top: 20px; display: flex; align-items: center; gap: 16px; }
        .vmb-completion-icon { font-size: 32px; }
        .vmb-completion-text { }
        .vmb-completion-title { font-family: Arial; font-weight: 700; color: var(--green); margin-bottom: 4px; }
        .vmb-completion-sub { font-size: 13px; color: var(--text2); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .vmb-sidebar { transform: translateX(-100%); }
          .vmb-sidebar.open { transform: translateX(0); }
          .vmb-overlay.open { display: block; }
          .vmb-main { margin-left: 0; }
          .vmb-menu-btn { display: block; }
          .vmb-nav { display: none; }
          .vmb-content, .vmb-content-full { padding: 20px 16px 80px; }
          .vmb-header-progress { display: none; }
          .vmb-lesson-nav { flex-wrap: wrap; }
          .vmb-complete-btn { order: -1; width: 100%; justify-content: center; }
        }

        @media (min-width: 769px) {
          .vmb-nav-btn { display: flex; }
        }
      `}</style>

      <div className="vmb-root">
        {/* HEADER */}
        <header className="vmb-header">
          <button className="vmb-menu-btn" onClick={() => setSidebarOpen(o => !o)}>
            {sidebarOpen ? <IconClose /> : <IconMenu />}
          </button>
          <div className="vmb-header-logo">
            <div className="vmb-header-logo-icon"><img src="https://stripe-camo.global.ssl.fastly.net/a049a47e44536518b7f12ea72c04a62ecc30aecc5e3622b165d92fb34d18ffb1/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785530527a546b4e4853315a74646b70696245566966475a7358327870646d5666547a5a555245787059585a4a526b73794e7a46724e6d5a52636c46714d444e5030307736426f7a356a53/6d65726368616e745f69643d616363745f315344734e43474b566d764a626c456226636c69656e743d5041594d454e545f50414745"/></div>
            <span>Voice Mastery Blueprint</span>
          </div>
          <div className="vmb-header-progress">
            <div className="vmb-progress-bar-wrap">
              <div className="vmb-progress-bar" style={{ width: `${pct}%` }} />
            </div>
            <span className="vmb-progress-label">{completed.size}/{totalLessons} lessons · {pct}%</span>
          </div>
          <nav className="vmb-nav">
            {(["course", "vault", "challenge"] as const).map(s => (
              <button key={s} className={`vmb-nav-btn ${activeSection === s ? "active" : ""}`}
                onClick={() => setActiveSection(s)}>
                {s === "course" ? "📚 Lessons" : s === "vault" ? "🎵 Song Vault" : "🏆 21-Day Challenge"}
              </button>
            ))}
          </nav>
        </header>

        <div className="vmb-layout">
          {/* SIDEBAR OVERLAY */}
          <div className={`vmb-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

          {/* SIDEBAR */}
          <aside className={`vmb-sidebar ${sidebarOpen ? "open" : ""}`}>
            {activeSection === "course" && (
              <>
                {MODULES.map(mod => {
                  const doneLessons = mod.lessons.filter(l => completed.has(l.id)).length;
                  return (
                    <div key={mod.id} className="vmb-sidebar-module">
                      <div className="vmb-sidebar-module-header" onClick={() => { setActiveModuleId(mod.id); setActiveLessonId(mod.lessons[0].id); setActiveTab("lesson"); setSidebarOpen(false); }}>
                        <div className="vmb-sidebar-module-emoji" style={{ background: `${mod.color}22` }}>{mod.emoji}</div>
                        <div className="vmb-sidebar-module-info">
                          <div className="vmb-sidebar-module-label">{mod.id.toUpperCase()}</div>
                          <div className="vmb-sidebar-module-title">{mod.title.split(":").slice(1).join(":").trim() || mod.title}</div>
                          <div className="vmb-sidebar-module-progress">{doneLessons}/{mod.lessons.length} complete</div>
                        </div>
                      </div>
                      {activeModuleId === mod.id && (
                        <div className="vmb-sidebar-lessons">
                          {mod.lessons.map((lesson, i) => (
                            <div key={lesson.id} className={`vmb-sidebar-lesson ${activeLessonId === lesson.id ? "active" : ""}`}
                              onClick={() => goTo(lesson.id, mod.id)}>
                              <div className={`vmb-sidebar-lesson-dot ${completed.has(lesson.id) ? "done" : ""}`}>
                                {completed.has(lesson.id) && <IconCheck />}
                              </div>
                              <div className="vmb-sidebar-lesson-title">{i + 1}. {lesson.title}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="vmb-sidebar-bonus" onClick={() => { setActiveSection("vault"); setSidebarOpen(false); }}>
                  <div className="vmb-sidebar-bonus-title">🎁 Bonus: Song Vault</div>
                  <div className="vmb-sidebar-bonus-sub">50 songs · technique notes</div>
                </div>
                <div className="vmb-sidebar-bonus" style={{ marginTop: 0 }} onClick={() => { setActiveSection("challenge"); setSidebarOpen(false); }}>
                  <div className="vmb-sidebar-bonus-title">🏆 21-Day Challenge</div>
                  <div className="vmb-sidebar-bonus-sub">Your daily transformation plan</div>
                </div>
              </>
            )}
          </aside>

          {/* MAIN */}
          <main className="vmb-main" ref={contentRef}>

            {/* COURSE SECTION */}
            {activeSection === "course" && activeLesson && (
              <div className="vmb-content">
                {/* Module promise */}
                <div className="vmb-module-promise">
                  <span className="vmb-module-promise-icon">{activeModule.emoji}</span>
                  <div className="vmb-module-promise-text"><strong>Module Promise: </strong>{activeModule.promise}</div>
                </div>

                {/* Lesson header */}
                <div className="vmb-lesson-header">
                  <div className="vmb-lesson-breadcrumb">
                    <span className="vmb-module-badge" style={{ background: `${activeModule.color}18`, color: activeModule.color, border: `1px solid ${activeModule.color}30` }}>
                      {activeModule.emoji} {activeModule.title.split(":")[0]}
                    </span>
                    <span className="vmb-lesson-number">Lesson {activeModule.lessons.findIndex(l => l.id === activeLessonId) + 1} of {activeModule.lessons.length}</span>
                  </div>
                  <h1 className="vmb-lesson-title">{activeLesson.title}</h1>
                  <p className="vmb-lesson-subtitle">{activeLesson.subtitle}</p>
                  <div className="vmb-lesson-meta">
                    <span className="vmb-meta-chip">⏱ {activeLesson.duration} read</span>
                    <span className="vmb-meta-chip">🎯 {activeLesson.exercises.length} exercises</span>
                    {completed.has(activeLessonId) && <span className="vmb-meta-chip" style={{ color: "var(--green)", borderColor: "rgba(16,185,129,0.3)" }}>✓ Completed</span>}
                  </div>
                </div>

                {/* Tabs */}
                <div className="vmb-tabs">
                  <button className={`vmb-tab ${activeTab === "lesson" ? "active" : ""}`} onClick={() => setActiveTab("lesson")}>📖 Lesson</button>
                  <button className={`vmb-tab ${activeTab === "exercises" ? "active" : ""}`} onClick={() => setActiveTab("exercises")}>💪 Exercises ({activeLesson.exercises.length})</button>
                </div>

                {/* LESSON CONTENT TAB */}
                {activeTab === "lesson" && (
                  <>
                    <div className="vmb-lesson-body" dangerouslySetInnerHTML={{ __html: activeLesson.content }} />
                    <div className="vmb-takeaways">
                      <div className="vmb-takeaways-title">Key Takeaways</div>
                      {activeLesson.keyTakeaways.map((t, i) => (
                        <div key={i} className="vmb-takeaway-item">
                          <div className="vmb-takeaway-dot"><IconCheck /></div>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                    <div className="vmb-pro-tip">
                      <div className="vmb-pro-tip-label">🔥 Pro Tip</div>
                      <div className="vmb-pro-tip-text">{activeLesson.proTip}</div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                      <button className="vmb-tab" style={{ background: "var(--bg4)", border: "1px solid var(--border2)", borderRadius: 99, padding: "10px 24px", color: "var(--text)", cursor: "pointer" }}
                        onClick={() => setActiveTab("exercises")}>
                        Ready for exercises →
                      </button>
                    </div>
                  </>
                )}

                {/* EXERCISES TAB */}
                {activeTab === "exercises" && (
                  <>
                    {activeLesson.exercises.map((ex, i) => {
                      const durationSeconds = (() => {
                        const match = ex.duration.match(/(\d+)/);
                        if (!match) return 0;
                        const n = parseInt(match[1]);
                        if (ex.duration.includes("min")) return n * 60;
                        if (ex.duration.includes("sec")) return n;
                        return 0;
                      })();
                      return (
                        <div key={i} className="vmb-exercise-card">
                          <div className="vmb-exercise-header">
                            <div className="vmb-exercise-name">Exercise {i + 1}: {ex.name}</div>
                            <span className="vmb-exercise-duration">⏱ {ex.duration}</span>
                          </div>
                          <div className="vmb-exercise-desc">{ex.description}</div>
                          <div className="vmb-exercise-tip"><strong>💡 Coaching note:</strong> {ex.tip}</div>
                          {durationSeconds > 0 && durationSeconds <= 600 && (
                            <ExerciseTimer seconds={durationSeconds} label={`${ex.name} timer`} />
                          )}
                        </div>
                      );
                    })}
                  </>
                )}

                {/* Completion badge if done */}
                {completed.has(activeLessonId) && (
                  <div className="vmb-completion">
                    <div className="vmb-completion-icon">🏅</div>
                    <div className="vmb-completion-text">
                      <div className="vmb-completion-title">Lesson Complete!</div>
                      <div className="vmb-completion-sub">Great work. Keep the momentum — the next lesson is waiting.</div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="vmb-lesson-nav">
                  <button className="vmb-nav-prev" onClick={goPrev} disabled={currentIdx === 0}>
                    <IconChevronLeft /> Previous
                  </button>
                  <button className={`vmb-complete-btn ${completed.has(activeLessonId) ? "done" : ""}`} onClick={markComplete}>
                    {completed.has(activeLessonId) ? <><IconCheck /> Completed</> : <><IconPlay /> Mark Complete</>}
                  </button>
                  <button className="vmb-nav-next" onClick={goNext} disabled={currentIdx === flatLessons.length - 1}>
                    Next <IconChevronRight />
                  </button>
                </div>
              </div>
            )}

            {/* SONG VAULT SECTION */}
            {activeSection === "vault" && (
              <div className="vmb-content-full">
                <div className="vmb-section-header">
                  <h2 className="vmb-section-title">🎵 The Voice Song Vault</h2>
                  <p className="vmb-section-sub">50 songs selected specifically to showcase your new vocal skills — each with exact technique notes from the course.</p>
                </div>
                <div className="vmb-stats">
                  {["Beginner", "Intermediate", "Advanced"].map(l => (
                    <div key={l} className="vmb-stat">
                      <div className="vmb-stat-num" style={{ color: l === "Beginner" ? "var(--green)" : l === "Intermediate" ? "var(--blue)" : "var(--purple)" }}>
                        {SONG_VAULT.filter(s => s.level === l).length}
                      </div>
                      <div className="vmb-stat-label">{l} songs</div>
                    </div>
                  ))}
                  <div className="vmb-stat">
                    <div className="vmb-stat-num" style={{ color: "var(--amber)" }}>50</div>
                    <div className="vmb-stat-label">Total songs</div>
                  </div>
                </div>
                <div className="vmb-vault-filters">
                  {["All", "Beginner", "Intermediate", "Advanced"].map(f => (
                    <button key={f} className={`vmb-filter-btn ${vaultFilter === f ? "active" : ""}`} onClick={() => setVaultFilter(f)}>{f}</button>
                  ))}
                </div>
                <div className="vmb-vault-grid">
                  {filteredSongs.map((song, i) => (
                    <div key={i} className="vmb-vault-card">
                      <div className="vmb-vault-title">{song.title}</div>
                      <div className="vmb-vault-artist">by {song.artist}</div>
                      <div className="vmb-vault-technique">🎯 {song.technique}</div>
                      <div className="vmb-vault-tags">
                        <span className={`vmb-vault-tag tag-${song.level.toLowerCase()}`}>{song.level}</span>
                        <span className="vmb-vault-module">{song.module}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 21-DAY CHALLENGE SECTION */}
            {activeSection === "challenge" && (
              <div className="vmb-content">
                <div className="vmb-section-header">
                  <h2 className="vmb-section-title">🏆 21-Day Transformation Challenge</h2>
                  <p className="vmb-section-sub">Your exact daily plan to go from where you are now to a voice that turns heads — in 21 days.</p>
                </div>

                <div className="vmb-stats">
                  <div className="vmb-stat">
                    <div className="vmb-stat-num" style={{ color: "var(--green)" }}>21</div>
                    <div className="vmb-stat-label">Days</div>
                  </div>
                  <div className="vmb-stat">
                    <div className="vmb-stat-num" style={{ color: "var(--blue)" }}>15</div>
                    <div className="vmb-stat-label">Min/day avg</div>
                  </div>
                  <div className="vmb-stat">
                    <div className="vmb-stat-num" style={{ color: "var(--purple)" }}>4</div>
                    <div className="vmb-stat-label">Modules covered</div>
                  </div>
                  <div className="vmb-stat">
                    <div className="vmb-stat-num" style={{ color: "var(--amber)" }}>∞</div>
                    <div className="vmb-stat-label">Potential</div>
                  </div>
                </div>

                <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "18px 22px", marginBottom: 28 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 8 }}>Before you start Day 1:</div>
                  <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7 }}>
                    Record yourself singing your transformation song — the song you most want to perform beautifully. 
                    Don't worry about how it sounds. This is your "before" — and in 21 days, when you record it again, 
                    the comparison will be the most powerful proof of what you've accomplished. Save this recording somewhere safe.
                  </div>
                </div>

                {CHALLENGE_DAYS.map(({ week, days }) => (
                  <div key={week} className="vmb-challenge-week">
                    <div className="vmb-week-header">
                      <span className={`vmb-week-badge week-${week}`}>Week {week}</span>
                      <span className="vmb-week-title">
                        {week === 1 ? "Foundation — Build the Base" : week === 2 ? "Expansion — Unlock Your Range" : "Performance — Own the Stage"}
                      </span>
                    </div>
                    {days.map(day => (
                      <div key={day.day} className={`vmb-day-card ${day.day === 21 ? "special" : ""}`}>
                        <div className="vmb-day-num">{day.day}</div>
                        <div className="vmb-day-info">
                          <div className="vmb-day-focus">{day.focus}</div>
                          <div className="vmb-day-detail">{day.detail}</div>
                          <div className="vmb-day-modules">
                            {day.modules.map(m => <span key={m} className="vmb-day-module">{m}</span>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                <div style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.08))", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "var(--radius)", padding: "24px", textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🎤</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, marginBottom: 10 }}>After Day 21:</div>
                  <div style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
                    Record your transformation song again. Listen to Day 1 and Day 21 back to back. 
                    That difference — that is what you built. That voice is yours. It always was.
                    <br /><br />
                    <strong style={{ color: "var(--green)" }}>Now go perform it for someone. You've earned it.</strong>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
