import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  content: string;
  exercises: string[];
}

export default function CoursePage() {
  const [currentModuleId, setCurrentModuleId] = useState('module1');
  const [currentLessonId, setCurrentLessonId] = useState('lesson1-1');
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [showBonus, setShowBonus] = useState(false);

  // COURSE DATA - All content embedded here, no database needed
  const modules: Module[] = [
    {
      id: 'module1',
      title: 'Module 1: Foundation Fundamentals',
      description: 'Master breathing, posture, and vocal warm-ups',
      lessons: [
        {
          id: 'lesson1-1',
          title: 'The Singer\'s Posture: Your Hidden Power',
          content: `
            <h3>Why Posture is the #1 Secret to Vocal Power</h3>
            <p>Your posture is the foundation of your voice. When your body is properly aligned, your diaphragm can work efficiently, your vocal cords can vibrate freely, and your sound can project powerfully and clearly.</p>
            
            <h4>The String Puppet Technique</h4>
            <p>Imagine a string attached to the top of your head, gently pulling you upward. Your shoulders should be relaxed and down, your chest open, and your core engaged. This alignment allows maximum breath support and vocal freedom.</p>
            
            <h4>How to Stand, Sit, and Move While Singing</h4>
            <ul>
              <li><strong>Standing:</strong> Feet shoulder-width apart, weight evenly distributed, knees slightly bent (not locked).</li>
              <li><strong>Sitting:</strong> Sit on the edge of your chair, feet flat on the ground, maintaining the same upright posture as standing.</li>
              <li><strong>Moving:</strong> Keep your core engaged and your upper body stable. Movement should come from your hips and legs, not your shoulders or neck.</li>
            </ul>
            
            <h4>The Wall Check Exercise</h4>
            <p>Stand with your back against a wall. Your head, shoulders, and buttocks should all touch the wall. Your heels should be about 6 inches away from the wall. This is your ideal posture. Practice maintaining this alignment throughout your day.</p>
          `,
          exercises: [
            'Wall Check: 5 minutes daily',
            'String Puppet Visualization: Practice while singing',
            'Posture Check: Every hour, reset your alignment'
          ]
        },
        {
          id: 'lesson1-2',
          title: 'Diaphragmatic Breathing: The Engine of Your Voice',
          content: `
            <h3>Understanding the Diaphragm</h3>
            <p>The diaphragm is a large muscle beneath your lungs. When you breathe in, it contracts and moves downward, creating space for your lungs to expand. This is the foundation of powerful, supported singing.</p>
            
            <h4>Why "Belly Breathing" is Crucial</h4>
            <p>When you breathe diaphragmatically, your belly expands outward (not your chest). This allows for deeper, fuller breaths and better breath support for sustained notes.</p>
            
            <h4>Debunking the Myth of "Singing from the Chest"</h4>
            <p>You don't sing FROM your chest. You sing WITH support FROM your diaphragm. The sound is produced by your vocal cords, but the power and control come from your breath support.</p>
            
            <h4>The Hissing Exercise (Farinelli Exercise)</h4>
            <p>Inhale deeply through your nose, filling your belly. Exhale slowly and steadily through your mouth, making a "hiss" sound (like letting air out of a tire). This teaches your diaphragm to maintain consistent pressure and control.</p>
          `,
          exercises: [
            'Hissing Exercise: 10 repetitions, 3 times daily',
            'Belly Breath Check: Place hand on belly, feel it expand',
            'Sustained Hiss: Extend the hiss for 30 seconds'
          ]
        },
        {
          id: 'lesson1-3',
          title: 'The 5-Minute Vocal Warm-up Routine',
          content: `
            <h3>The Essential Sequence: Body, Breath, Lips, Tongue, Voice</h3>
            
            <h4>1. Body Warm-up (1 minute)</h4>
            <ul>
              <li>Neck rolls: 5 forward, 5 backward</li>
              <li>Shoulder rolls: 5 forward, 5 backward</li>
              <li>Gentle torso twists: 10 total</li>
              <li>Arm circles: 5 forward, 5 backward</li>
            </ul>
            
            <h4>2. Breath Warm-up (1 minute)</h4>
            <ul>
              <li>Deep diaphragmatic breaths: 10 repetitions</li>
              <li>Hissing exercise: 10 repetitions</li>
              <li>Sigh on "ah": 5 repetitions</li>
            </ul>
            
            <h4>3. Lip Warm-up (1 minute)</h4>
            <ul>
              <li>Lip trills (motorboat sound): 20 seconds</li>
              <li>Lip trills with pitch changes: 20 seconds</li>
              <li>Lip bubbles: 20 seconds</li>
            </ul>
            
            <h4>4. Tongue Warm-up (1 minute)</h4>
            <ul>
              <li>Tongue trill (rolling R sound): 20 seconds</li>
              <li>Tongue trill with pitch changes: 20 seconds</li>
              <li>Tongue stretches: 20 seconds</li>
            </ul>
            
            <h4>5. Voice Warm-up (1 minute)</h4>
            <ul>
              <li>Siren sound (like an ambulance): 20 seconds</li>
              <li>Ng sound (like "singing"): 20 seconds</li>
              <li>Simple "do-re-mi-fa-sol" scale: 20 seconds</li>
            </ul>
          `,
          exercises: [
            'Complete 5-Minute Routine: Daily, before singing',
            'Individual Exercise Focus: Spend extra time on weak areas',
            'Consistency Check: Do the routine even on rest days'
          ]
        },
        {
          id: 'lesson1-4',
          title: 'Hydration and Vocal Health Hacks',
          content: `
            <h3>The Truth About Water and Vocal Cords</h3>
            <p>Your vocal cords need moisture to vibrate properly. Dehydration causes them to become stiff and prone to injury. Drink at least 8 glasses of water daily, and more on days when you're singing heavily.</p>
            
            <h4>Foods to Avoid Before Singing</h4>
            <ul>
              <li><strong>Dairy:</strong> Creates excess mucus that can coat your vocal cords</li>
              <li><strong>Spicy foods:</strong> Can irritate your throat</li>
              <li><strong>Alcohol:</strong> Dehydrates your vocal cords</li>
              <li><strong>Caffeine:</strong> Also dehydrating (in excess)</li>
              <li><strong>Heavy, greasy foods:</strong> Can make breathing difficult</li>
            </ul>
            
            <h4>The Power of Steam</h4>
            <p>Inhaling steam from a bowl of hot water (or a humidifier) for 5-10 minutes can soothe your vocal cords and improve hydration. Do this especially before important performances or after long singing sessions.</p>
          `,
          exercises: [
            'Hydration Tracking: Drink 8+ glasses daily',
            'Food Journal: Note what you eat before singing',
            'Steam Inhalation: 5-10 minutes daily'
          ]
        }
      ]
    },
    {
      id: 'module2',
      title: 'Module 2: Pitch Perfect System',
      description: 'Hit EVERY note with confidence',
      lessons: [
        {
          id: 'lesson2-1',
          title: 'The Science of Pitch Matching',
          content: `
            <h3>Understanding Relative Pitch</h3>
            <p>Relative pitch is your ability to identify the interval (distance) between two notes. This is a trainable skill that improves with practice. Unlike "perfect pitch" (which is rare), relative pitch can be developed by anyone.</p>
            
            <h4>How to Use Your Ear to Find the Note</h4>
            <p>Listen to the reference note (from a piano, keyboard, or app). Sing the note silently in your head first. Then sing it out loud. Adjust your pitch up or down until it matches the reference. Repeat this process daily.</p>
            
            <h4>The Role of the Inner Ear</h4>
            <p>Your inner ear contains the cochlea, which detects different frequencies. Training your ear to recognize these frequencies is the key to pitch accuracy. This is why listening to music and singing along is so valuable.</p>
          `,
          exercises: [
            'Solfège Scales: Sing "Do-Re-Mi-Fa-Sol-La-Ti-Do" daily',
            'Interval Training: Sing specific intervals with a reference tone',
            'Pitch Matching App: Use a tuner app to check your accuracy'
          ]
        },
        {
          id: 'lesson2-2',
          title: 'Hitting High Notes with Confidence (The Mix Voice)',
          content: `
            <h3>The Concept of "Mix Voice"</h3>
            <p>Mix voice is a blending of your chest voice and head voice. It's the "sweet spot" where you can sing high notes with power and control. Most professional singers use mix voice for the majority of their range.</p>
            
            <h4>Avoiding the "Break" or "Crack"</h4>
            <p>The break occurs when you switch abruptly from chest to head voice. To avoid it, focus on maintaining consistent breath support and relaxation as you move into higher notes. Think of your voice as a smooth continuum, not separate registers.</p>
            
            <h4>The "Nee-Nee-Nee" Scale Exercise</h4>
            <p>Sing "Nee-Nee-Nee" on a simple scale, starting in a comfortable range and gradually moving higher. The "Nee" sound is light and forward-focused, which helps you access your mix voice without strain.</p>
          `,
          exercises: [
            '"Nee-Nee-Nee" Scale: 10 repetitions daily',
            'Vocal Fry Exploration: Find your break and work to smooth it',
            'Mix Voice Songs: Practice songs that require mix voice'
          ]
        },
        {
          id: 'lesson2-3',
          title: 'Range Expansion Protocol',
          content: `
            <h3>Gradual, Systematic Approach to Increasing Range</h3>
            <p>Expanding your range takes time and consistency. Don't try to force high or low notes. Instead, work gradually, day by day, expanding your comfortable range by small increments.</p>
            
            <h4>The Importance of Daily Consistency</h4>
            <p>Singing 15 minutes daily is more effective than singing 2 hours once a week. Your voice is a muscle, and it responds best to consistent, moderate exercise.</p>
            
            <h4>Descending and Ascending Arpeggios</h4>
            <p>Arpeggios (broken chords) are excellent for range expansion. Start in a comfortable range and gradually move higher or lower. Use vowels like "ah," "oh," and "oo" to explore different parts of your range.</p>
          `,
          exercises: [
            'Ascending Arpeggios: Start low, gradually move higher',
            'Descending Arpeggios: Start high, gradually move lower',
            'Vowel Exploration: Practice arpeggios on different vowels'
          ]
        },
        {
          id: 'lesson2-4',
          title: 'Fixing Flat and Sharp Notes',
          content: `
            <h3>Identifying the Cause of Pitch Issues</h3>
            <p>Pitch problems can stem from three sources: breath support, vocal technique, or hearing. Identify which one is causing your issue, and you can fix it quickly.</p>
            
            <h4>Breath Support Issues</h4>
            <p>If you're singing flat, you might not have enough breath support. Focus on engaging your diaphragm and maintaining consistent air pressure throughout the note.</p>
            
            <h4>Vocal Technique Issues</h4>
            <p>If you're singing sharp, you might be tensing your throat or jaw. Relax these areas and focus on a more forward, open sound.</p>
            
            <h4>The "Pitch Bender" Exercise</h4>
            <p>Intentionally sing a note flat, then sharp, then in tune. This helps you understand the physical sensation of each pitch and trains your ear to recognize the difference.</p>
          `,
          exercises: [
            '"Pitch Bender" Exercise: Practice with a keyboard or app',
            'Tuner App Training: Use a tuner to check your accuracy',
            'Breath Support Focus: Practice with emphasis on diaphragm engagement'
          ]
        }
      ]
    },
    {
      id: 'module3',
      title: 'Module 3: Signature Sound Development',
      description: 'Find YOUR unique voice',
      lessons: [
        {
          id: 'lesson3-1',
          title: 'Tone Shaping: Finding Your Unique Color',
          content: `
            <h3>Understanding Vocal Resonance</h3>
            <p>Resonance is the amplification and coloration of your voice. Different parts of your body (mask, chest, head) resonate at different frequencies, creating different tones.</p>
            
            <h4>The Mask Resonance (Bright, Piercing)</h4>
            <p>When you resonate in the "mask" (nasal cavities and sinuses), your voice becomes bright and piercing. This is useful for cutting through a band or orchestra.</p>
            
            <h4>The Chest Resonance (Warm, Full)</h4>
            <p>When you resonate in your chest, your voice becomes warm and full-bodied. This is the most natural, comfortable resonance for most singers.</p>
            
            <h4>The Head Resonance (Light, Ethereal)</h4>
            <p>When you resonate in your head, your voice becomes light and ethereal. This is useful for high notes and delicate passages.</p>
          `,
          exercises: [
            '"Mummy" Sound: Sing with a closed mouth, feeling resonance in your head',
            '"Witch" Sound: Sing with a nasalized tone, feeling resonance in your mask',
            'Balanced Tone: Find the middle ground between these extremes'
          ]
        },
        {
          id: 'lesson3-2',
          title: 'Vibrato Control Training',
          content: `
            <h3>What Vibrato Is and How It's Naturally Produced</h3>
            <p>Vibrato is a slight, regular variation in pitch and volume. It's produced by your diaphragm creating a pulsing air pressure, which causes your vocal cords to vibrate at a slightly varying rate.</p>
            
            <h4>Avoiding Forced or "Wobbly" Vibrato</h4>
            <p>Vibrato should be natural and controlled. If it's too wide or too slow, it sounds "wobbly" and unprofessional. If it's too fast, it sounds nervous. The ideal vibrato has a rate of about 5-8 pulses per second.</p>
            
            <h4>The "Pulsing" Exercise</h4>
            <p>Sing a sustained note and gently pulse your diaphragm (like you're saying "ha-ha-ha-ha" without changing the pitch). This creates a natural vibrato that's controlled and beautiful.</p>
          `,
          exercises: [
            '"Pulsing" Exercise: 10 repetitions daily',
            'Vibrato Control: Practice varying the width and speed',
            'Song Application: Apply vibrato to sustained notes in your songs'
          ]
        },
        {
          id: 'lesson3-3',
          title: 'Style Adaptation Techniques',
          content: `
            <h3>How to Apply Different Vocal Textures to Different Genres</h3>
            
            <h4>Pop Style</h4>
            <p>Pop singing emphasizes clarity, rhythm, and emotional connection. Use a bright, forward tone with minimal vibrato on short notes. Add runs and riffs sparingly for impact.</p>
            
            <h4>Rock Style</h4>
            <p>Rock singing often includes grit, power, and attitude. Use a fuller, more resonant tone. Add vocal distortion (carefully) for intensity. Emphasize the rhythm and attitude of the song.</p>
            
            <h4>R&B/Soul Style</h4>
            <p>R&B emphasizes smooth, soulful phrasing with lots of runs and riffs. Use a warm, relaxed tone. Add vibrato liberally. Focus on emotional expression and vocal control.</p>
            
            <h4>Musical Theater Style</h4>
            <p>Musical theater requires clarity, projection, and emotional storytelling. Use a bright, resonant tone with controlled vibrato. Emphasize diction and emotional connection.</p>
          `,
          exercises: [
            'Style Exploration: Sing a simple phrase in 3 different styles',
            'Genre Study: Listen to singers in different genres and analyze their techniques',
            'Song Adaptation: Take a song from one genre and sing it in another'
          ]
        },
        {
          id: 'lesson3-4',
          title: 'Vocal Dynamics: The Art of Light and Shade',
          content: `
            <h3>Using Volume to Convey Emotion and Build Tension</h3>
            <p>Dynamics (changes in volume) are crucial for emotional storytelling. A song sung at the same volume throughout is boring. Vary your volume to create interest and emotion.</p>
            
            <h4>The Power of the Whisper</h4>
            <p>Sometimes the softest note is the most powerful. A whispered phrase can create intimacy and draw the listener in. Practice singing very softly without losing pitch accuracy.</p>
            
            <h4>Building to a Climax</h4>
            <p>Start soft, gradually increase volume, and reach a powerful climax. This creates tension and release, which is emotionally satisfying to the listener.</p>
          `,
          exercises: [
            '"Crescendo/Decrescendo": Sing a single note from very soft to very loud and back',
            'Dynamic Song Study: Analyze a song for its dynamic changes',
            'Dynamic Practice: Apply dynamic changes to your songs'
          ]
        }
      ]
    },
    {
      id: 'module4',
      title: 'Module 4: Performance Confidence',
      description: 'Perform with confidence',
      lessons: [
        {
          id: 'lesson4-1',
          title: 'Stage Fright Elimination Method',
          content: `
            <h3>Understanding Performance Anxiety as Excitement</h3>
            <p>Stage fright is just excitement in disguise. Your body is preparing for a big moment. Instead of fighting this feeling, embrace it and channel it into your performance.</p>
            
            <h4>The Power of Preparation</h4>
            <p>The best antidote to stage fright is preparation. Know your song inside and out. Practice it until it's second nature. The more prepared you are, the more confident you'll feel.</p>
            
            <h4>The "Pre-Performance Ritual"</h4>
            <p>Develop a ritual that you do before every performance. This might include: deep breathing, a power pose, a mantra, or a specific warm-up. This ritual signals to your brain that it's time to perform, and it calms your nerves.</p>
          `,
          exercises: [
            '"Power Pose": 2 minutes before performing',
            'Deep Breathing: 5 breaths before stepping on stage',
            'Mantra Practice: Develop and practice your personal mantra'
          ]
        },
        {
          id: 'lesson4-2',
          title: 'Emotional Connection Technique',
          content: `
            <h3>Analyzing Lyrics for Emotional Intent</h3>
            <p>Before you sing a song, understand what it's about. What is the story? What is the emotion? Who are you singing to? Answer these questions, and your performance will be infinitely more powerful.</p>
            
            <h4>The Difference Between Singing Words and Conveying a Story</h4>
            <p>Many singers just sing the words. Great singers tell a story. They make the listener feel what they're feeling. This is the difference between a good performance and a great one.</p>
            
            <h4>The "Monologue to Melody" Technique</h4>
            <p>Before singing a song, speak the lyrics as a monologue, with all the emotion and intent you would use if you were acting. Then sing the same lyrics with the same emotion. This bridges the gap between speaking and singing.</p>
          `,
          exercises: [
            '"Monologue to Melody": Practice speaking lyrics before singing',
            'Character Creation: Develop a character for your song',
            'Emotional Analysis: Identify the emotion in each section of your song'
          ]
        },
        {
          id: 'lesson4-3',
          title: 'Performance Presence Training',
          content: `
            <h3>Eye Contact, Body Language, and Mic Technique</h3>
            
            <h4>Eye Contact</h4>
            <p>Make eye contact with your audience. This creates a connection and makes them feel like you're singing directly to them. If you're nervous, pick a few friendly faces to focus on.</p>
            
            <h4>Body Language</h4>
            <p>Your body should be relaxed and natural. Avoid fidgeting or pacing nervously. Use purposeful movements to emphasize the emotion of the song. Stand tall and own the stage.</p>
            
            <h4>Mic Technique</h4>
            <p>Hold the mic about 6 inches from your mouth. Don't grip it too tightly. Move it slightly away for soft passages and closer for powerful ones. This helps control your dynamics.</p>
          `,
          exercises: [
            '"Mirror Performance": Practice in front of a mirror, focusing on body language',
            'Eye Contact Practice: Perform for a friend and maintain eye contact',
            'Mic Technique Drills: Practice holding and moving the mic'
          ]
        },
        {
          id: 'lesson4-4',
          title: 'The Encore Mindset: Handling Mistakes Like a Pro',
          content: `
            <h3>Why Mistakes Are Inevitable and How to Recover Instantly</h3>
            <p>Every professional singer makes mistakes. The difference is that they recover so smoothly that the audience doesn't notice. Here's how to do it.</p>
            
            <h4>The Recovery Technique</h4>
            <p>If you make a mistake, don't stop. Don't apologize. Don't draw attention to it. Just keep singing and move forward. Most of the time, the audience won't even notice.</p>
            
            <h4>The Importance of Audience Focus</h4>
            <p>When you make a mistake, your instinct is to focus on yourself and your error. Instead, refocus on your audience. Remember that you're there to entertain them, not to be perfect.</p>
          `,
          exercises: [
            'Intentional Mistake Recovery: Practice a song and intentionally make a mistake, then recover',
            'Confidence Building: Perform in front of others and practice not letting mistakes derail you',
            'Post-Performance Review: Analyze what went wrong and practice the fix'
          ]
        }
      ]
    }
  ];

  // BONUS: 50 Songs for The Voice Song Vault
  const songVault = [
    { title: '"Hallelujah"', artist: 'Leonard Cohen / Jeff Buckley', technique: 'Build crescendo from whisper to full voice', level: 'Intermediate' },
    { title: '"I Will Always Love You"', artist: 'Whitney Houston', technique: 'Transition into final key change and sustained high note', level: 'Advanced' },
    { title: '"Imagine"', artist: 'John Lennon', technique: 'Pure, clear tone and sincere delivery', level: 'Beginner' },
    { title: '"Rolling in the Deep"', artist: 'Adele', technique: 'Controlled raw power and vocal runs', level: 'Intermediate' },
    { title: '"At Last"', artist: 'Etta James', technique: 'Rich tone and controlled vibrato', level: 'Advanced' },
    { title: '"Let It Be"', artist: 'The Beatles', technique: 'Steady, comforting tone', level: 'Beginner' },
    { title: '"Bohemian Rhapsody"', artist: 'Queen', technique: 'Versatility and character voices', level: 'Advanced' },
    { title: '"Someone Like You"', artist: 'Adele', technique: 'Emotional connection and dynamics', level: 'Intermediate' },
    { title: '"Stand By Me"', artist: 'Ben E. King', technique: 'Steady rhythm and smooth tone', level: 'Beginner' },
    { title: '"The Sound of Silence"', artist: 'Simon & Garfunkel / Disturbed', technique: 'Dramatic contrast and power', level: 'Advanced' },
    { title: '"Perfect"', artist: 'Ed Sheeran', technique: 'Emotional storytelling and control', level: 'Intermediate' },
    { title: '"Thinking Out Loud"', artist: 'Ed Sheeran', technique: 'Smooth phrasing and warmth', level: 'Intermediate' },
    { title: '"Shallow"', artist: 'Lady Gaga / Bradley Cooper', technique: 'Dynamic range and emotional depth', level: 'Advanced' },
    { title: '"A Thousand Years"', artist: 'Christina Perri', technique: 'Delicate control and emotion', level: 'Intermediate' },
    { title: '"Falling Slowly"', artist: 'Glen Hansard & Markéta Irglová', technique: 'Intimate delivery and connection', level: 'Beginner' },
    { title: '"Skinny Love"', artist: 'Bon Iver', technique: 'Falsetto control and emotion', level: 'Intermediate' },
    { title: '"Chasing Cars"', artist: 'Snow Patrol', technique: 'Simplicity and sincerity', level: 'Beginner' },
    { title: '"Fix You"', artist: 'Coldplay', technique: 'Building intensity and emotional arc', level: 'Intermediate' },
    { title: '"Yellow"', artist: 'Coldplay', technique: 'Soaring melody and control', level: 'Intermediate' },
    { title: '"Viva la Vida"', artist: 'Coldplay', technique: 'Power and storytelling', level: 'Intermediate' },
    { title: '"Wonderwall"', artist: 'Oasis', technique: 'Catchy melody and attitude', level: 'Beginner' },
    { title: '"Creep"', artist: 'Radiohead', technique: 'Emotional vulnerability', level: 'Beginner' },
    { title: '"Tears in Heaven"', artist: 'Eric Clapton', technique: 'Delicate fingerpicking and emotion', level: 'Intermediate' },
    { title: '"Layla"', artist: 'Eric Clapton', technique: 'Passion and intensity', level: 'Intermediate' },
    { title: '"Wonderful Tonight"', artist: 'Eric Clapton', technique: 'Warmth and intimacy', level: 'Beginner' },
    { title: '"Hotel California"', artist: 'Eagles', technique: 'Smooth delivery and range', level: 'Intermediate' },
    { title: '"Take Me Home, Country Roads"', artist: 'John Denver', technique: 'Warmth and storytelling', level: 'Beginner' },
    { title: '"Blackbird"', artist: 'The Beatles', technique: 'Fingerpicking and vocal clarity', level: 'Beginner' },
    { title: '"Yesterday"', artist: 'The Beatles', technique: 'Emotional depth and simplicity', level: 'Beginner' },
    { title: '"Something"', artist: 'The Beatles', technique: 'Smooth melody and warmth', level: 'Intermediate' },
    { title: '"Here Comes the Sun"', artist: 'The Beatles', technique: 'Uplifting melody and clarity', level: 'Beginner' },
    { title: '"Stairway to Heaven"', artist: 'Led Zeppelin', technique: 'Dynamic range and storytelling', level: 'Advanced' },
    { title: '"Whole Lotta Love"', artist: 'Led Zeppelin', technique: 'Power and attitude', level: 'Advanced' },
    { title: '"Black Dog"', artist: 'Led Zeppelin', technique: 'Rhythm and attitude', level: 'Intermediate' },
    { title: '"Comfortably Numb"', artist: 'Pink Floyd', technique: 'Soaring solo and emotion', level: 'Advanced' },
    { title: '"Wish You Were Here"', artist: 'Pink Floyd', technique: 'Emotion and simplicity', level: 'Intermediate' },
    { title: '"Bohemian Like You"', artist: 'The Dandy Warhols', technique: 'Attitude and swagger', level: 'Intermediate' },
    { title: '"Zombie"', artist: 'The Cranberries', technique: 'Power and attitude', level: 'Intermediate' },
    { title: '"No Scrubs"', artist: 'TLC', technique: 'Attitude and rhythm', level: 'Intermediate' },
    { title: '"Respect"', artist: 'Aretha Franklin', technique: 'Power and attitude', level: 'Advanced' },
    { title: '"I Will Survive"', artist: 'Gloria Gaynor', technique: 'Power and confidence', level: 'Intermediate' },
    { title: '"Hurt"', artist: 'Johnny Cash', technique: 'Vulnerability and power', level: 'Intermediate' },
    { title: '"The Man in Black"', artist: 'Johnny Cash', technique: 'Attitude and storytelling', level: 'Beginner' },
    { title: '"Redemption Song"', artist: 'Bob Marley', technique: 'Simplicity and message', level: 'Beginner' },
    { title: '"One Love"', artist: 'Bob Marley', technique: 'Warmth and message', level: 'Beginner' },
    { title: '"What\'s Going On"', artist: 'Marvin Gaye', technique: 'Soul and emotion', level: 'Intermediate' },
    { title: '"Let\'s Get It On"', artist: 'Marvin Gaye', technique: 'Smooth and sensual', level: 'Intermediate' },
    { title: '"Superstition"', artist: 'Stevie Wonder', technique: 'Groove and control', level: 'Intermediate' },
    { title: '"Isn\'t She Lovely"', artist: 'Stevie Wonder', technique: 'Joy and vocal agility', level: 'Intermediate' }
  ];

  const getCurrentModule = () => modules.find(m => m.id === currentModuleId);
  const getCurrentLesson = () => getCurrentModule()?.lessons.find(l => l.id === currentLessonId);

  const handleCompleteLesson = () => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(currentLessonId);
    setCompletedLessons(newCompleted);

    const currentModule = getCurrentModule();
    if (currentModule) {
      const allLessonsCompleted = currentModule.lessons.every(l => newCompleted.has(l.id));
      if (allLessonsCompleted) {
        const newModulesCompleted = new Set(completedModules);
        newModulesCompleted.add(currentModuleId);
        setCompletedModules(newModulesCompleted);
      }
    }
  };

  const handleNextLesson = () => {
    const currentModule = getCurrentModule();
    if (!currentModule) return;

    const currentIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex < currentModule.lessons.length - 1) {
      setCurrentLessonId(currentModule.lessons[currentIndex + 1].id);
    } else {
      const currentModuleIndex = modules.findIndex(m => m.id === currentModuleId);
      if (currentModuleIndex < modules.length - 1) {
        setCurrentModuleId(modules[currentModuleIndex + 1].id);
        setCurrentLessonId(modules[currentModuleIndex + 1].lessons[0].id);
      }
    }
  };

  const handlePreviousLesson = () => {
    const currentModule = getCurrentModule();
    if (!currentModule) return;

    const currentIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex > 0) {
      setCurrentLessonId(currentModule.lessons[currentIndex - 1].id);
    } else {
      const currentModuleIndex = modules.findIndex(m => m.id === currentModuleId);
      if (currentModuleIndex > 0) {
        const prevModule = modules[currentModuleIndex - 1];
        setCurrentModuleId(prevModule.id);
        setCurrentLessonId(prevModule.lessons[prevModule.lessons.length - 1].id);
      }
    }
  };

  const currentModule = getCurrentModule();
  const currentLesson = getCurrentLesson();
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .course-content { max-height: 600px; overflow-y: auto; }
        .course-content::-webkit-scrollbar { width: 8px; }
        .course-content::-webkit-scrollbar-track { background: #1f2937; }
        .course-content::-webkit-scrollbar-thumb { background: #10b981; border-radius: 4px; }
      `}</style>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 py-8 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🎤</span>
            </div>
            <div>
              <h1 className="text-3xl font-black">Voice Mastery Blueprint</h1>
              <p className="text-green-200">Your Complete Vocal Transformation Course</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-200">Progress: {completedLessons.size} / {totalLessons} lessons</p>
            <div className="w-48 h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${(completedLessons.size / totalLessons) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Course Modules</h2>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div key={module.id}>
                    <button
                      onClick={() => {
                        setCurrentModuleId(module.id);
                        setCurrentLessonId(module.lessons[0].id);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        currentModuleId === module.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {completedModules.has(module.id) && <CheckCircle className="w-4 h-4" />}
                        <span className="text-sm font-semibold">{module.title.split(':')[1]?.trim() || module.title}</span>
                      </div>
                    </button>

                    {currentModuleId === module.id && (
                      <div className="mt-2 ml-2 space-y-2">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setCurrentLessonId(lesson.id)}
                            className={`w-full text-left p-2 rounded text-xs transition-all ${
                              currentLessonId === lesson.id
                                ? 'bg-green-500 text-white'
                                : completedLessons.has(lesson.id)
                                ? 'bg-green-900 text-green-100'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {completedLessons.has(lesson.id) && <CheckCircle className="w-3 h-3" />}
                              <span>{lesson.title}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Bonus Section */}
                <button
                  onClick={() => setShowBonus(!showBonus)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    showBonus
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎁</span>
                    <span className="text-sm font-semibold">Bonus Content</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!showBonus && currentLesson && currentModule ? (
              <div className="bg-gray-900 rounded-lg p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-green-400">{currentModule.title.split(':')[0]}</span>
                    {completedLessons.has(currentLessonId) && <CheckCircle className="w-5 h-5 text-green-400" />}
                  </div>
                  <h1 className="text-4xl font-black mb-2 gradient-text">{currentLesson.title}</h1>
                </div>

                <div className="course-content mb-8 bg-gray-800 rounded-lg p-6">
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                  />
                </div>

                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Daily Exercises</h3>
                  <ul className="space-y-3">
                    {currentLesson.exercises.map((exercise, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">✓</span>
                        <span className="text-gray-300">{exercise}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={handlePreviousLesson}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>

                  <button
                    onClick={handleCompleteLesson}
                    className={`px-8 py-3 rounded-lg font-bold transition-all ${
                      completedLessons.has(currentLessonId)
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    {completedLessons.has(currentLessonId) ? '✓ Completed' : 'Mark as Complete'}
                  </button>

                  <button
                    onClick={handleNextLesson}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all font-semibold"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : showBonus ? (
              <div className="bg-gray-900 rounded-lg p-8">
                <h1 className="text-4xl font-black mb-8 gradient-text">🎁 Bonus Content</h1>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">The Voice Song Vault (50 Songs)</h2>
                  <p className="text-gray-300 mb-6">A curated collection of songs proven to showcase vocal talent and emotional depth. Each song includes the specific technique required to "turn a chair."</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {songVault.map((song, idx) => (
                      <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-all">
                        <h4 className="font-bold text-lg mb-2">{song.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">by {song.artist}</p>
                        <p className="text-sm text-green-400 mb-2"><strong>Technique:</strong> {song.technique}</p>
                        <p className="text-xs text-gray-500">
                          <span className={`px-2 py-1 rounded ${
                            song.level === 'Beginner' ? 'bg-green-900 text-green-200' :
                            song.level === 'Intermediate' ? 'bg-blue-900 text-blue-200' :
                            'bg-purple-900 text-purple-200'
                          }`}>
                            {song.level}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">21-Day Transformation Challenge</h2>
                  <p className="text-gray-300 mb-6">A structured daily plan to integrate the course material and guarantee rapid results. Follow this challenge to transform your voice in just 21 days.</p>

                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold mb-2">Week 1: Foundation</h4>
                      <p className="text-sm text-gray-300">Days 1-7 focus on posture, breathing, warm-ups, and pitch ear training. By Day 7, you'll have a solid foundation.</p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold mb-2">Week 2: Control & Range</h4>
                      <p className="text-sm text-gray-300">Days 8-14 focus on mix voice, range expansion, tone shaping, and vibrato. By Day 14, you'll be hitting notes you never could before.</p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-bold mb-2">Week 3: Performance & Style</h4>
                      <p className="text-sm text-gray-300">Days 15-21 focus on style adaptation, dynamics, stage confidence, and emotional connection. By Day 21, you'll be ready to perform like a finalist.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Fixed Footer Link - Discreet São Cipriano Homage */}
      <a
        href="https://saocipriano.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 text-white opacity-40 hover:opacity-100 transition-opacity duration-300"
        style={{
          zIndex: 9999,
          fontFamily: 'sans-serif',
        }}
        title="Voice Mastery Blueprint - Powered by Ancient Wisdom"
      >
        c🔱
      </a>
    </div>
  );
}
