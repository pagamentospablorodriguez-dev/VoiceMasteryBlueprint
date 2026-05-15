import { useEffect, useState, useRef } from 'react';

export default function LandingPage() {
  const [countdown, setCountdown] = useState({ minutes: 14, seconds: 58 });
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(47);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 14; seconds = 58; }
        return { minutes, seconds };
      });
    }, 1000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShowExitPopup(true);
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Simulate spots decreasing
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => prev > 31 ? prev - 1 : prev);
    }, 45000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const timeString = `${String(countdown.minutes).padStart(2, '0')}:${String(countdown.seconds).padStart(2, '0')}`;

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchase = () => {
    window.location.href = "https://buy.stripe.com/fZuaEX1MZbvI8N5bUzb7y03";
  };

  const testimonials = [
    {
      name: "Sarah M.",
      location: "USA",
      time: "3 weeks",
      text: "I hit a note that made my husband drop his phone and stare at me. I literally started crying. I've wanted this my entire life.",
      emoji: "🇺🇸"
    },
    {
      name: "Carlos R.",
      location: "Spain",
      time: "21 days",
      text: "Sang at my sister's wedding. People stopped eating. The room went silent. Then everyone stood up. I will never forget that moment.",
      emoji: "🇪🇸"
    },
    {
      name: "Priya K.",
      location: "India",
      time: "6 weeks",
      text: "I'm 47. I thought this was impossible for me. Module 2 alone was worth 100x the price. BEST decision I've ever made.",
      emoji: "🇮🇳"
    },
    {
      name: "Marcus T.",
      location: "UK",
      time: "21 days",
      text: "I watched The Voice compilations every single day for 3 years wishing I could sing like them. Now people send ME videos asking how I do it.",
      emoji: "🇬🇧"
    },
    {
      name: "Yuki S.",
      location: "Japan",
      time: "4 weeks",
      text: "My coworkers thought I was a professional. I had to show them the before video to prove I was a complete beginner just one month ago.",
      emoji: "🇯🇵"
    },
    {
      name: "Luisa M.",
      location: "Mexico",
      time: "2 weeks",
      text: "Week 2 and I'm already hitting notes I've never hit in my life. My family thinks I'm secretly taking lessons. This blueprint IS the lesson.",
      emoji: "🇲🇽"
    },
  ];

  return (
    <div className="bg-[#080808] text-white relative overflow-x-hidden" style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        :root {
          --gold: #F5C842;
          --gold-dim: #c9a420;
          --green: #00E587;
          --green-dim: #00b86c;
          --red: #FF3D3D;
          --blue: #3B7FFF;
          --bg: #080808;
          --card: #111111;
          --border: #1e1e1e;
        }

        .gold { color: var(--gold); }
        .green { color: var(--green); }
        .red { color: var(--red); }

        .gold-gradient {
          background: linear-gradient(135deg, #F5C842 0%, #FFE08A 50%, #C9A420 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #F5C842 0%, #FF9F1C 35%, #FF3D3D 65%, #FF6B6B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .green-gradient {
          background: linear-gradient(135deg, #00E587 0%, #00C4FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-gold {
          background: linear-gradient(135deg, #F5C842 0%, #FFE08A 50%, #C9A420 100%);
          color: #000;
          font-weight: 900;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .btn-gold:hover::after { opacity: 1; }
        .btn-gold:hover { transform: scale(1.03); box-shadow: 0 0 50px rgba(245,200,66,0.5); }

        .btn-green {
          background: linear-gradient(135deg, #00E587 0%, #00C4FF 100%);
          color: #000;
          font-weight: 900;
          transition: all 0.2s;
        }
        .btn-green:hover { transform: scale(1.03); box-shadow: 0 0 50px rgba(0,229,135,0.4); }

        .pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .75; }
        }

        .glow-gold { box-shadow: 0 0 60px rgba(245,200,66,0.3); }
        .glow-green { box-shadow: 0 0 60px rgba(0,229,135,0.25); }
        .glow-red { box-shadow: 0 0 60px rgba(255,61,61,0.3); }

        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          transition: all 0.3s;
        }
        .card:hover {
          border-color: #333;
          transform: translateY(-4px);
        }

        .timer-box {
          background: #000;
          border: 2px solid var(--red);
          border-radius: 12px;
          padding: 8px 20px;
          font-size: 1.6rem;
          font-weight: 900;
          font-variant-numeric: tabular-nums;
          letter-spacing: 2px;
          color: var(--red);
          font-family: 'Courier New', monospace;
        }

        .section-label {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }

        .spotlight {
          background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,200,66,0.12) 0%, transparent 70%);
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #222, transparent);
          margin: 0 auto;
        }

        .progress-bar {
          height: 8px;
          background: #1a1a1a;
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--red), var(--gold));
          border-radius: 4px;
          width: 86%;
          animation: fillBar 2s ease-out;
        }
        @keyframes fillBar {
          from { width: 0; }
          to { width: 86%; }
        }

        .sticky-bar {
          background: rgba(8,8,8,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #1a1a1a;
        }

        .micro-stars { color: #F5C842; letter-spacing: -2px; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-up { animation: slideUp 0.7s ease-out both; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,200,66,0.1);
          border: 1px solid rgba(245,200,66,0.3);
          color: var(--gold);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #1a1a1a;
        }

        .module-card {
          background: linear-gradient(135deg, #0e0e0e, #111);
          border: 1px solid #1e1e1e;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .module-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
        }
        .module-card:nth-child(1)::before { background: linear-gradient(90deg, #3B7FFF, #00E587); }
        .module-card:nth-child(2)::before { background: linear-gradient(90deg, #F5C842, #FF9F1C); }
        .module-card:nth-child(3)::before { background: linear-gradient(90deg, #FF3D3D, #FF6B6B); }
        .module-card:nth-child(4)::before { background: linear-gradient(90deg, #9B59B6, #3B7FFF); }
        .module-card:hover { border-color: #333; transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }

        .testimonial-card {
          background: #0d0d0d;
          border: 1px solid #1e1e1e;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s;
        }
        .testimonial-card:hover {
          border-color: rgba(0,229,135,0.3);
          box-shadow: 0 0 40px rgba(0,229,135,0.08);
        }
      `}</style>

      {/* EXIT POPUP */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full relative" style={{ background: 'linear-gradient(135deg, #1a0a00, #0d0d0d)', border: '2px solid #F5C842', borderRadius: 24, padding: 48 }}>
            <button onClick={() => setShowExitPopup(false)} className="absolute top-4 right-5 text-gray-500 text-2xl hover:text-white transition-colors">×</button>
            <div className="text-center">
              <p className="text-5xl mb-4">🎤</p>
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-3">Wait — One Last Thing</p>
              <h3 className="text-3xl font-black mb-4 leading-tight">Take An Extra $10 Off Before You Go</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">You're this close to something that can change your life. Use this code and get the entire blueprint for just:</p>
              <div className="bg-black rounded-xl p-4 mb-4">
                <p className="text-gray-400 text-sm mb-1">Discount code</p>
                <p className="text-3xl font-black text-white tracking-widest">VOICE10</p>
              </div>
              <p className="text-5xl font-black gold-gradient mb-2">$19.90</p>
              <p className="text-gray-500 text-sm mb-6">97% off. One payment. Lifetime access.</p>
              <button
                onClick={() => { setShowExitPopup(false); scrollToPricing(); }}
                className="btn-gold w-full text-xl font-black py-5 px-8 rounded-2xl"
              >
                Claim My $19.90 Deal →
              </button>
              <p className="text-xs text-gray-600 mt-4">This offer disappears when you close this popup</p>
            </div>
          </div>
        </div>
      )}

      {/* TOP URGENCY BAR */}
      <div className="fixed top-0 w-full z-40 sticky-bar">
        <div className="py-3 px-4 text-center" style={{ background: 'linear-gradient(90deg, #FF3D3D, #FF6B00)' }}>
          <p className="text-sm font-bold text-white">
            🔥 LAUNCH OFFER ENDS IN <span className="font-mono font-black">{timeString}</span> — After that, price doubles forever.
          </p>
        </div>
      </div>

      <div className="pt-14">

        {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
        <div className="spotlight noise relative">
          <div className="max-w-5xl mx-auto px-5 py-20 md:py-32 text-center">
            <div className="slide-up" style={{ animationDelay: '0s' }}>
              <div className="badge mb-6">⭐ 47,000+ students • 127 countries • 4.9/5 stars</div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] slide-up" style={{ animationDelay: '0.1s' }}>
              You've Watched Thousands<br />of Great Voices.<br />
              <span className="hero-gradient">Now It's Your Turn.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.2s' }}>
              The same vocal techniques behind the performances you can't stop rewatching — <span className="text-white font-semibold">now compressed into a 21-day blueprint</span> that works even if you've never sung a single note.
            </p>

            {/* Social proof bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <span className="micro-stars">★★★★★</span>
                <span className="text-gray-400 text-sm">4.9/5 rating</span>
              </div>
              <div className="text-gray-700">|</div>
              <div className="text-gray-400 text-sm">✓ 89% see results in 7 days</div>
              <div className="text-gray-700">|</div>
              <div className="text-gray-400 text-sm">✓ 30-day money-back guarantee</div>
              <div className="text-gray-700">|</div>
              <div className="text-gray-400 text-sm">✓ Instant access</div>
            </div>

            {/* Before/After Visual */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 slide-up" style={{ animationDelay: '0.35s' }}>
              <div className="p-6 rounded-2xl text-left" style={{ background: 'rgba(255,61,61,0.06)', border: '1px solid rgba(255,61,61,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Right now</p>
                <div className="space-y-3 text-gray-400">
                  <p>😔 Watching others get the standing ovations</p>
                  <p>😔 Voice cracks the moment it matters most</p>
                  <p>😔 "Maybe I'm just not a singer"</p>
                  <p>😔 Another year of "I wish I could sing"</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl text-left" style={{ background: 'rgba(0,229,135,0.06)', border: '1px solid rgba(0,229,135,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">In 21 days</p>
                <div className="space-y-3 text-white">
                  <p>✦ Performing songs that used to feel impossible</p>
                  <p>✦ Hitting high notes cleanly, every time</p>
                  <p>✦ "Where did you learn to sing like that?"</p>
                  <p>✦ Being the person others can't stop watching</p>
                </div>
              </div>
            </div>

            <button onClick={scrollToPricing} className="btn-gold text-xl md:text-2xl font-black py-6 px-14 rounded-2xl inline-block pulse mb-4">
              🎤 YES — I Want To Sing Like That →
            </button>
            <br />
            <span className="text-gray-600 text-sm">⚡ Instant access • No experience needed • Risk-free guarantee</span>
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ THE HOOK ═══════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto px-5 py-24 text-center">
          <span className="section-label">The honest truth</span>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            The Singers You Watch Aren't<br />Born That Way. <span className="gold-gradient">They Were Taught.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every jaw-dropping performance you've rewatched — the goosebumps, the chair turns, the standing ovations — those voices were <strong className="text-white">trained</strong>. With techniques. With a system. The same system that's now available for the price of dinner.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { n: "01", t: "It's not talent", d: "Research shows 98% of 'natural singers' trained privately before the world saw them. The myth of 'you either have it or you don't' is exactly that — a myth." },
              { n: "02", t: "It's a trainable skill", d: "Your vocal cords are muscles. Like any muscle, they respond to the right training. The right exercises unlock range, control, and power in weeks — not years." },
              { n: "03", t: "The blueprint exists", d: "Voice coaches charge $200/hour for these exact techniques. We compressed the entire curriculum into a step-by-step system anyone can follow from home." },
            ].map(item => (
              <div key={item.n} className="card p-8">
                <p className="text-5xl font-black gold-gradient mb-3">{item.n}</p>
                <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                <p className="text-gray-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ WHAT YOU GET ═══════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-5 py-24">
          <div className="text-center mb-16">
            <span className="section-label">What's inside</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">The Voice Mastery Blueprint</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">4 precision-engineered modules. Everything you need. Nothing you don't.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "🎯",
                num: "Module 1",
                title: "Foundation & Breathing Mastery",
                desc: "The #1 reason most people never improve: they skip the foundation. This module builds the physical base that makes everything else possible.",
                points: ["Diaphragmatic breathing (the secret behind every powerful voice)", "5-minute warm-up that unlocks your full range", "Posture corrections that instantly improve tone quality"]
              },
              {
                icon: "🎼",
                num: "Module 2",
                title: "Pitch Perfect System",
                desc: "Eliminate pitch issues for good. Hit every note — including the high ones — with precision and confidence.",
                points: ["The 'ear-voice bridge' technique that fixes pitch in days", "High note mastery: access notes you thought were impossible", "Range expansion protocol: 1-2 octaves of new range in 21 days"]
              },
              {
                icon: "💎",
                num: "Module 3",
                title: "Your Signature Sound",
                desc: "Find the voice that's uniquely, unforgettably yours. The one that makes people stop what they're doing.",
                points: ["Tone shaping: craft the timbre that moves people", "Vibrato control: add the emotional layer that creates goosebumps", "Style & genre adaptation for any song you love"]
              },
              {
                icon: "🔥",
                num: "Module 4",
                title: "Performance & Stage Presence",
                desc: "Technique is half the equation. The other half is performing it under pressure — with confidence that commands a room.",
                points: ["Stage fright elimination: the 3-minute pre-performance reset", "Emotional connection technique (why some voices give chills)", "Presence training: own every room you walk into"]
              }
            ].map(m => (
              <div key={m.num} className="module-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{m.num}</p>
                    <h3 className="text-xl font-black">{m.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-5 leading-relaxed">{m.desc}</p>
                <div className="space-y-2">
                  {m.points.map(p => (
                    <div key={p} className="flex items-start gap-3 text-sm">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-300">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bonuses */}
          <div className="rounded-2xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #0d0a00, #0d0d0d)', border: '1px solid rgba(245,200,66,0.2)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2 text-center">Included free — today only</p>
            <h3 className="text-2xl md:text-3xl font-black text-center mb-8">🎁 Your Exclusive Bonuses</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "The Voice Song Vault", val: "$49 value", desc: "50 songs specifically chosen because they showcase vocal transformation — with exact technique notes on how to perform each one." },
                { title: "21-Day Transformation Challenge", val: "$39 value", desc: "Daily video exercises that build momentum from day one. The exact daily sequence our top students follow to see results in 3 weeks." },
              ].map(b => (
                <div key={b.title} className="p-6 rounded-xl" style={{ background: 'rgba(245,200,66,0.05)', border: '1px solid rgba(245,200,66,0.15)' }}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold">{b.title}</h4>
                    <span className="text-xs text-yellow-400 font-bold border border-yellow-400 border-opacity-40 rounded px-2 py-1">{b.val}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ TESTIMONIALS ═══════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-5 py-24">
          <div className="text-center mb-16">
            <span className="section-label">Real results</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">They Were Exactly Where You Are</h2>
            <p className="text-xl text-gray-500 mb-8">Then they did something about it.</p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <span>✓ 47,000+ students</span>
              <span>✓ 127 countries</span>
              <span>✓ 172,000+ training hours logged</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-green-400 font-semibold">{t.location} · Results in {t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero testimonial */}
          <div className="p-8 md:p-12 rounded-3xl text-center glow-green" style={{ background: 'linear-gradient(135deg, #030d0a, #050b14)', border: '1px solid rgba(0,229,135,0.25)' }}>
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, s) => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed max-w-3xl mx-auto">
              "I used to rewatch the same Voice performances over and over, wishing that could be me. Three weeks after this blueprint, someone sent <em>me</em> a video asking how I did that."
            </p>
            <p className="font-black text-lg">Marcus T. 🇬🇧</p>
            <p className="text-green-400 text-sm mt-1">From viewer to performer in 21 days</p>
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ GUARANTEE ═══════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto px-5 py-24 text-center">
          <div className="text-8xl mb-6">🛡️</div>
          <span className="section-label">Zero risk</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Sing In 30 Days<br />Or <span className="gold-gradient">Pay Absolutely Nothing</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Follow the blueprint for 30 days. Do the exercises. If you don't hear a dramatic, undeniable improvement in your voice — email us once and you get every cent back. No questions, no forms, no waiting.
          </p>
          <div className="p-8 rounded-2xl" style={{ background: '#0d0d0d', border: '1px solid #1e1e1e' }}>
            <p className="text-2xl font-black text-white mb-2">We take all the risk. You take all the results.</p>
            <p className="text-gray-500">That's how confident we are this works — because it does.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════ URGENCY ═══════════════════════════════════════ */}
        <div className="py-16" style={{ background: 'linear-gradient(135deg, #0d0500, #080808)' }}>
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-red-400">⚠️ This Price Is Temporary</h2>
            <p className="text-gray-400 mb-8">We launched at a deep discount to collect success stories. Once we have enough, the price goes up — permanently.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl" style={{ background: '#0d0d0d', border: '2px solid rgba(255,61,61,0.3)' }}>
                <p className="text-gray-500 text-sm mb-2">Timer expires in</p>
                <div className="timer-box inline-block mb-3">{timeString}</div>
                <p className="text-gray-400 text-sm">Price jumps to $79.90 when this hits zero.</p>
              </div>
              <div className="p-8 rounded-2xl" style={{ background: '#0d0d0d', border: '2px solid rgba(255,61,61,0.3)' }}>
                <p className="text-gray-500 text-sm mb-2">Spots at launch price</p>
                <p className="text-5xl font-black text-red-400 mb-3">{spotsLeft}</p>
                <div className="progress-bar mb-2"><div className="progress-fill" /></div>
                <p className="text-gray-400 text-sm">Enrollment capped to ensure quality support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ PRICING ═══════════════════════════════════════ */}
        <div id="pricing" className="py-24">
          <div className="max-w-2xl mx-auto px-5">
            <div className="rounded-3xl overflow-hidden glow-gold" style={{ background: 'linear-gradient(135deg, #0d0a00, #080808)', border: '2px solid rgba(245,200,66,0.4)' }}>
              {/* Price header */}
              <div className="p-8 md:p-12 text-center" style={{ borderBottom: '1px solid rgba(245,200,66,0.15)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4 pulse">⚠️ Launch Price — Ends In {timeString}</p>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Voice Mastery Blueprint</h2>
                <div className="flex items-end justify-center gap-4 mb-2">
                  <span className="text-gray-600 text-2xl line-through">$79.90</span>
                  <span className="text-6xl md:text-7xl font-black gold-gradient">$29.90</span>
                </div>
                <span className="inline-block bg-red-600 text-white text-sm font-black px-4 py-1 rounded-full mt-2">SAVE 63% — TODAY ONLY</span>
              </div>

              {/* What you get */}
              <div className="p-8 md:p-12">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Everything included</p>
                <div className="space-y-4 mb-10">
                  {[
                    ["Complete 4-Module Vocal Training System", "($199 value)"],
                    ["Pitch Perfect System — Hit Every Note", "($89 value)"],
                    ["Performance Confidence Training", "($69 value)"],
                    ["BONUS: The Voice Song Vault (50 songs)", "($49 value)"],
                    ["BONUS: 21-Day Transformation Challenge", "($39 value)"],
                    ["Lifetime Access — Pay Once, Learn Forever", "($∞ value)"],
                    ["30-Day Sing-or-Free Money-Back Guarantee", "Priceless"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        <span className="text-white font-medium">{label}</span>
                      </div>
                      <span className="text-gray-600 text-sm flex-shrink-0">{val}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handlePurchase}
                  className="btn-gold w-full text-2xl md:text-3xl font-black py-7 px-8 rounded-2xl block mb-5 pulse"
                >
                  🎤 Start My Transformation — $29.90 →
                </button>

                <div className="text-center space-y-2">
                  <p className="text-gray-500 text-sm">🔒 Secure checkout · Instant access · 30-day guarantee</p>
                  <p className="text-gray-600 text-xs">One payment. No subscription. No hidden fees.</p>
                </div>
              </div>

              {/* Cards */}
              <div className="px-8 md:px-12 pb-8 text-center">
                <p className="text-gray-700 text-xs mb-3">Accepted worldwide</p>
                <div className="flex justify-center gap-4 text-gray-600 text-sm">
                  <span>💳 Visa</span>
                  <span>💳 Mastercard</span>
                  <span>💳 Amex</span>
                  <span>💰 Apple Pay</span>
                  <span>💰 PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ FINAL CTA ═══════════════════════════════════════ */}
        <div className="py-24 text-center" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(245,200,66,0.06) 0%, transparent 70%)' }}>
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-5xl mb-8">🎤</p>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              The Voice You've Always Wanted<br />Is <span className="gold-gradient">One Decision Away</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              30 days from today, you could be the person others watch and wonder about. Or you could still be watching. The only difference is what you decide right now.
            </p>
            <button
              onClick={handlePurchase}
              className="btn-gold text-2xl md:text-3xl font-black py-8 px-16 rounded-2xl inline-block pulse mb-6"
            >
              Yes — I Choose To Become The Singer →
            </button>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
              <span>🔒 Secure payment</span>
              <span>⚡ Instant access</span>
              <span>🛡️ 30-day guarantee</span>
              <span>🌍 Available worldwide</span>
            </div>
            <p className="text-red-400 font-bold mt-8">⏰ {spotsLeft} spots remaining at $29.90 · Timer: {timeString}</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════ FAQ ═══════════════════════════════════════ */}
        <div className="py-20" style={{ borderTop: '1px solid #111' }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Questions</h2>
            <div className="space-y-4">
              {[
                ["I've never sung before. Will this work for me?", "Yes — and you might actually have an advantage. 73% of our students had zero prior experience. The blueprint starts from absolute zero and builds up systematically. If you can speak, you can learn to sing. It's physiology, not magic."],
                ["How fast will I actually see results?", "Most students notice a clear difference in week 1. By day 21, the transformation is obvious to everyone around them. And because you get lifetime access, there's zero pressure — go at whatever pace works for you."],
                ["Is this a subscription? Are there hidden charges?", "No subscription. No recurring charges. No upsells at checkout. $29.90, one time, lifetime access. That's the whole thing."],
                ["I'm 'tone deaf.' Can this still help me?", "Almost certainly yes. True tone-deafness affects less than 2% of people. What most people call 'tone deaf' is simply untrained pitch perception — which Module 2 corrects directly. We've seen hundreds of self-described 'tone deaf' students prove themselves completely wrong."],
                ["Do I need special equipment or a studio?", "Nothing. Just your voice. You can do every exercise from your bedroom. All you need is a phone or laptop to access the videos."],
                ["What if it doesn't work for me?", "Email us once within 30 days. We refund you immediately. No questions, no forms. You take zero risk — all of it is on us."],
                ["Will the price really go up?", "Yes. This is a launch discount to collect success stories. When the timer hits zero, the price increases to $79.90 and stays there. This is the only time you'll see $29.90."],
              ].map(([q, a]) => (
                <div key={q} className="card p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-3">{q}</h3>
                  <p className="text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="py-12 text-center" style={{ borderTop: '1px solid #111' }}>
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-gray-700 text-sm mb-2">© 2025 Voice Mastery Blueprint. All Rights Reserved.</p>
            <p className="text-gray-800 text-xs mb-1">This product is not affiliated with The Voice television show or its producers.</p>
            <p className="text-gray-800 text-xs mb-4">Individual results vary. Consistent practice and effort are required.</p>
            <div className="flex justify-center gap-6 text-gray-700 text-sm">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}
