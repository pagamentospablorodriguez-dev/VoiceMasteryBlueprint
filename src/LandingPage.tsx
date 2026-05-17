import { useEffect, useState } from 'react';
import { useLocale } from './i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function LandingPage() {
  const [countdown, setCountdown] = useState({ minutes: 14, seconds: 58 });
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(47);
  const { locale, changeLocale, t, interpolate } = useLocale();

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
    { name: t.t1Name, location: t.t1Location, text: t.t1Text, emoji: "🇺🇸" },
    { name: t.t2Name, location: t.t2Location, text: t.t2Text, emoji: "🇪🇸" },
    { name: t.t3Name, location: t.t3Location, text: t.t3Text, emoji: "🇮🇳" },
    { name: t.t4Name, location: t.t4Location, text: t.t4Text, emoji: "🇬🇧" },
    { name: t.t5Name, location: t.t5Location, text: t.t5Text, emoji: "🇯🇵" },
    { name: t.t6Name, location: t.t6Location, text: t.t6Text, emoji: "🇲🇽" },
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
            <button onClick={() => setShowExitPopup(false)} className="absolute top-4 right-5 text-gray-500 text-2xl hover:text-white transition-colors">&times;</button>
            <div className="text-center">
              <p className="text-5xl mb-4">🎤</p>
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-3">{t.exitLabel}</p>
              <h3 className="text-3xl font-black mb-4 leading-tight">{t.exitH3}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{t.exitP}</p>
              <div className="bg-black rounded-xl p-4 mb-4">
                <p className="text-gray-400 text-sm mb-1">{t.exitCodeLabel}</p>
                <p className="text-3xl font-black text-white tracking-widest">VOICE10</p>
              </div>
              <p className="text-5xl font-black gold-gradient mb-2">{t.exitPrice}</p>
              <p className="text-gray-500 text-sm mb-6">{t.exitSub}</p>
              <button
                onClick={() => { setShowExitPopup(false); scrollToPricing(); }}
                className="btn-gold w-full text-xl font-black py-5 px-8 rounded-2xl"
              >
                {t.exitCta}
              </button>
              <p className="text-xs text-gray-600 mt-4">{t.exitDisclaimer}</p>
            </div>
          </div>
        </div>
      )}

      {/* TOP URGENCY BAR */}
      <div className="fixed top-0 w-full z-40 sticky-bar">
        <div className="py-3 px-4 text-center" style={{ background: 'linear-gradient(90deg, #FF3D3D, #FF6B00)' }}>
          <p className="text-sm font-bold text-white">
            🔥 {interpolate(t.urgencyBar, { timer: timeString })}
          </p>
        </div>
      </div>

      <div className="pt-14">

        {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
        <div className="spotlight noise relative">
          <div className="max-w-5xl mx-auto px-5 py-20 md:py-32 text-center">
            {/* Language Switcher - top right */}
            <div className="absolute top-4 right-5 z-10">
              <LanguageSwitcher locale={locale} onChange={changeLocale} />
            </div>

            <div className="slide-up" style={{ animationDelay: '0s' }}>
              <div className="badge mb-6">⭐ {t.badge}</div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] slide-up" style={{ animationDelay: '0.1s' }}>
              {t.heroH1L1}<br />{t.heroH1L2}<br />
              <span className="hero-gradient">{t.heroH1Highlight}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.2s' }}>
              {t.heroSub} <span className="text-white font-semibold">{t.heroSubHighlight}</span>
            </p>

            {/* Social proof bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <span className="micro-stars">★★★★★</span>
                <span className="text-gray-400 text-sm">{t.rating}</span>
              </div>
              <div className="text-gray-700">|</div>
              <div className="text-gray-400 text-sm">✓ {t.results7days}</div>
              <div className="text-gray-700">|</div>
              <div className="text-gray-400 text-sm">✓ {t.moneyBack}</div>
              <div className="text-gray-700">|</div>
              <div className="text-gray-400 text-sm">✓ {t.instantAccess}</div>
            </div>

            {/* Before/After Visual */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 slide-up" style={{ animationDelay: '0.35s' }}>
              <div className="p-6 rounded-2xl text-left" style={{ background: 'rgba(255,61,61,0.06)', border: '1px solid rgba(255,61,61,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">{t.beforeLabel}</p>
                <div className="space-y-3 text-gray-400">
                  <p>😔 {t.before1}</p>
                  <p>😔 {t.before2}</p>
                  <p>😔 {t.before3}</p>
                  <p>😔 {t.before4}</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl text-left" style={{ background: 'rgba(0,229,135,0.06)', border: '1px solid rgba(0,229,135,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">{t.afterLabel}</p>
                <div className="space-y-3 text-white">
                  <p>✦ {t.after1}</p>
                  <p>✦ {t.after2}</p>
                  <p>✦ {t.after3}</p>
                  <p>✦ {t.after4}</p>
                </div>
              </div>
            </div>

            <button onClick={scrollToPricing} className="btn-gold text-xl md:text-2xl font-black py-6 px-14 rounded-2xl inline-block pulse mb-4">
              🎤 {t.heroCta}
            </button>
            <br />
            <span className="text-gray-600 text-sm">⚡ {t.heroSubCta}</span>
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ THE HOOK ═══════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto px-5 py-24 text-center">
          <span className="section-label">{t.hookLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            {t.hookH2L1}<br /><span className="gold-gradient">{t.hookH2Highlight}</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.hookP} <strong className="text-white">{t.hookPStrong}</strong>. {locale === 'en' ? 'With techniques. With a system. The same system that\'s now available for the price of dinner.' : ''}
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { n: "01", title: t.hook1Title, desc: t.hook1Desc },
              { n: "02", title: t.hook2Title, desc: t.hook2Desc },
              { n: "03", title: t.hook3Title, desc: t.hook3Desc },
            ].map(item => (
              <div key={item.n} className="card p-8">
                <p className="text-5xl font-black gold-gradient mb-3">{item.n}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ WHAT YOU GET ═══════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-5 py-24">
          <div className="text-center mb-16">
            <span className="section-label">{t.insideLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">{t.insideH2}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.insideP}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "🎯",
                num: t.mod1Label,
                title: t.mod1Title,
                desc: t.mod1Desc,
                points: [t.mod1P1, t.mod1P2, t.mod1P3]
              },
              {
                icon: "🎼",
                num: t.mod2Label,
                title: t.mod2Title,
                desc: t.mod2Desc,
                points: [t.mod2P1, t.mod2P2, t.mod2P3]
              },
              {
                icon: "💎",
                num: t.mod3Label,
                title: t.mod3Title,
                desc: t.mod3Desc,
                points: [t.mod3P1, t.mod3P2, t.mod3P3]
              },
              {
                icon: "🔥",
                num: t.mod4Label,
                title: t.mod4Title,
                desc: t.mod4Desc,
                points: [t.mod4P1, t.mod4P2, t.mod4P3]
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
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2 text-center">{t.bonusLabel}</p>
            <h3 className="text-2xl md:text-3xl font-black text-center mb-8">🎁 {t.bonusH3}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: t.bonus1Title, val: t.bonus1Val, desc: t.bonus1Desc },
                { title: t.bonus2Title, val: t.bonus2Val, desc: t.bonus2Desc },
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
            <span className="section-label">{t.resultsLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">{t.resultsH2}</h2>
            <p className="text-xl text-gray-500 mb-8">{t.resultsP}</p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <span>✓ {t.resultsStat1}</span>
              <span>✓ {t.resultsStat2}</span>
              <span>✓ {t.resultsStat3}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((tItem, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{tItem.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tItem.emoji}</span>
                  <div>
                    <p className="font-bold">{tItem.name}</p>
                    <p className="text-xs text-green-400 font-semibold">{tItem.location}</p>
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
              {t.heroTestimonial}
            </p>
            <p className="font-black text-lg">Marcus T. 🇬🇧</p>
            <p className="text-green-400 text-sm mt-1">{t.heroTestimonialFrom}</p>
          </div>
        </div>

        <div className="divider max-w-4xl" />

        {/* ═══════════════════════════════════════ GUARANTEE ═══════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto px-5 py-24 text-center">
          <div className="text-8xl mb-6">🛡️</div>
          <span className="section-label">{t.guaranteeLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            {t.guaranteeH2L1}<br /><span className="gold-gradient">{t.guaranteeH2Highlight}</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.guaranteeP}
          </p>
          <div className="p-8 rounded-2xl" style={{ background: '#0d0d0d', border: '1px solid #1e1e1e' }}>
            <p className="text-2xl font-black text-white mb-2">{t.guaranteeBox1}</p>
            <p className="text-gray-500">{t.guaranteeBox2}</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════ URGENCY ═══════════════════════════════════════ */}
        <div className="py-16" style={{ background: 'linear-gradient(135deg, #0d0500, #080808)' }}>
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-red-400">⚠️ {t.urgencyH2}</h2>
            <p className="text-gray-400 mb-8">{t.urgencyP}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl" style={{ background: '#0d0d0d', border: '2px solid rgba(255,61,61,0.3)' }}>
                <p className="text-gray-500 text-sm mb-2">{t.urgencyTimerLabel}</p>
                <div className="timer-box inline-block mb-3">{timeString}</div>
                <p className="text-gray-400 text-sm">{t.urgencyTimerDesc}</p>
              </div>
              <div className="p-8 rounded-2xl" style={{ background: '#0d0d0d', border: '2px solid rgba(255,61,61,0.3)' }}>
                <p className="text-gray-500 text-sm mb-2">{t.urgencySpotsLabel}</p>
                <p className="text-5xl font-black text-red-400 mb-3">{spotsLeft}</p>
                <div className="progress-bar mb-2"><div className="progress-fill" /></div>
                <p className="text-gray-400 text-sm">{t.urgencySpotsDesc}</p>
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
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4 pulse">⚠️ {interpolate(t.pricingLabel, { timer: timeString })}</p>
                <h2 className="text-3xl md:text-4xl font-black mb-6">{t.pricingH2}</h2>
                <div className="items-end justify-center gap-4 mb-2">
                  <span className="text-gray-600 text-2xl line-through">{t.pricingOld}</span>
                  <br/>
                  <span className="text-6xl md:text-7xl font-black gold-gradient">$29.90</span>
                </div>
                <span className="inline-block bg-red-600 text-white text-sm font-black px-4 py-1 rounded-full mt-2">{t.pricingSave}</span>
              </div>

              {/* What you get */}
              <div className="p-8 md:p-12">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">{t.pricingIncluded}</p>
                <div className="space-y-4 mb-10">
                  {[
                    [t.pricing1, t.pricing1Val],
                    [t.pricing2, t.pricing2Val],
                    [t.pricing3, t.pricing3Val],
                    [t.pricing4, t.pricing4Val],
                    [t.pricing5, t.pricing5Val],
                    [t.pricing6, t.pricing6Val],
                    [t.pricing7, t.pricing7Val],
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
                  🎤 {t.pricingCta}
                </button>

                <div className="text-center space-y-2">
                  <p className="text-gray-500 text-sm">🔒 {t.pricingSecure}</p>
                  <p className="text-gray-600 text-xs">{t.pricingNoSub}</p>
                </div>
              </div>

              {/* Cards */}
              <div className="px-8 md:px-12 pb-8 text-center">
                <p className="text-gray-700 text-xs mb-3">{t.pricingAccepted}</p>
                <div className="flex justify-center gap-4 text-gray-600 text-sm">
                  <span>💳 {t.pricingVisa}</span>
                  <span>💳 {t.pricingMastercard}</span>
                  <span>💳 {t.pricingAmex}</span>
                  <span>💰 {t.pricingApple}</span>
                  <span>💰 {t.pricingPaypal}</span>
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
              {t.finalH2L1}<br /><span className="gold-gradient">{t.finalH2Highlight}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.finalP}
            </p>
            <button
              onClick={handlePurchase}
              className="btn-gold text-2xl md:text-3xl font-black py-8 px-16 rounded-2xl inline-block pulse mb-6"
            >
              {t.finalCta}
            </button>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
              <span>🔒 {t.finalSecure}</span>
              <span>⚡ {t.finalInstant}</span>
              <span>🛡️ {t.finalGuarantee}</span>
              <span>🌍 {t.finalWorldwide}</span>
            </div>
            <p className="text-red-400 font-bold mt-8">⏰ {interpolate(t.finalSpots, { spots: String(spotsLeft), timer: timeString })}</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════ FAQ ═══════════════════════════════════════ */}
        <div className="py-20" style={{ borderTop: '1px solid #111' }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">{t.faqH2}</h2>
            <div className="space-y-4">
              {[
                [t.faq1Q, t.faq1A],
                [t.faq2Q, t.faq2A],
                [t.faq3Q, t.faq3A],
                [t.faq4Q, t.faq4A],
                [t.faq5Q, t.faq5A],
                [t.faq6Q, t.faq6A],
                [t.faq7Q, t.faq7A],
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
            <p className="text-gray-700 text-sm mb-2">{t.footerCopy}</p>
            <p className="text-gray-800 text-xs mb-1">{t.footerDisclaimer1}</p>
            <p className="text-gray-800 text-xs mb-4">{t.footerDisclaimer2}</p>
            <div className="flex justify-center gap-6 text-gray-700 text-sm">
              <a href="#" className="hover:text-gray-400 transition-colors">{t.footerPrivacy}</a>
              <a href="#" className="hover:text-gray-400 transition-colors">{t.footerTerms}</a>
              <a href="#" className="hover:text-gray-400 transition-colors">{t.footerContact}</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
