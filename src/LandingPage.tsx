import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [countdown, setCountdown] = useState({ minutes: 14, seconds: 58 });
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 14;
          seconds = 58;
        }
        return { minutes, seconds };
      });
    }, 1000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(timer);
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


  return (
    <div className="bg-black text-white relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
        }

        .gradient-bg-alt {
          background: linear-gradient(135deg, #ef4444 0%, #f59e0b 100%);
        }

        .pulse-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .8; }
        }

        .shake {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .glow {
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.5);
        }

        .slide-up {
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {showExitPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-3xl max-w-2xl text-center relative glow">
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:scale-110 transition-transform"
            >
              ×
            </button>
            <h3 className="text-4xl font-black mb-4">⚠️ WAIT!</h3>
            <p className="text-2xl font-bold mb-4">
              Before you leave... Get an EXTRA $10 OFF!
            </p>
            <p className="text-xl mb-6">
              Use code <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-black">VOICE10</span> at checkout
            </p>
            <p className="text-3xl font-black mb-6">
              Just $19.90 - That's 97% OFF!
            </p>
            <button
              onClick={() => {
                setShowExitPopup(false);
                scrollToPricing();
              }}
              className="bg-white text-red-600 text-2xl font-black py-4 px-12 rounded-full hover:scale-105 transition-transform w-full"
            >
              CLAIM MY $19.90 DEAL NOW →
            </button>
            <p className="text-sm mt-4 opacity-80">This offer disappears when you close this popup</p>
          </div>
        </div>
      )}

      <div className="gradient-bg-alt text-white py-3 px-4 text-center font-bold text-sm md:text-base pulse-animation fixed top-0 w-full z-40">
        🔥 LIMITED TIME: 96% OFF ENDS IN <span className="countdown font-mono">{timeString}</span> 🔥
      </div>

      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center gap-1 mb-3">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
            <p className="text-gray-400 text-sm">47,283+ students from 127 countries • 4.9/5 rating • 89% see results in 7 days</p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight slide-up">
            Stop Being The <span className="text-red-500">Audience</span>.<br />
            Start Being The <span className="gradient-text">Performance</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The <span className="text-yellow-400 font-bold">exact blueprint</span> voice coaches use to transform beginners into standing-ovation performers in 21 days... now yours for less than a dinner.
          </p>

          <div className="max-w-5xl mx-auto mb-12 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border-2 border-green-500 glow slide-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-red-500 font-black text-sm mb-2 uppercase tracking-wider">Before Voice Mastery</p>
                <div className="bg-red-950 bg-opacity-50 p-6 rounded-xl border-l-4 border-red-600 mb-4">
                  <p className="text-lg mb-2">❌ Afraid to sing in public</p>
                  <p className="text-lg mb-2">❌ Voice cracks on high notes</p>
                  <p className="text-lg mb-2">❌ No confidence or technique</p>
                  <p className="text-lg">❌ "I wish I could sing like them"</p>
                </div>
              </div>

              <div className="text-left">
                <p className="text-green-500 font-black text-sm mb-2 uppercase tracking-wider">After 21 Days</p>
                <div className="bg-green-950 bg-opacity-50 p-6 rounded-xl border-l-4 border-green-600 mb-4">
                  <p className="text-lg mb-2">✓ Performing at events confidently</p>
                  <p className="text-lg mb-2">✓ Hitting notes you never could</p>
                  <p className="text-lg mb-2">✓ Professional vocal control</p>
                  <p className="text-lg">✓ "How did you learn to sing?"</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-2xl md:text-3xl font-black mb-4 gradient-text">
                The Difference? This Blueprint.
              </p>
              <p className="text-gray-400 text-lg">
                Same techniques. Same results. Different life.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <button onClick={scrollToPricing} className="gradient-bg text-white text-xl md:text-2xl font-black py-6 px-12 rounded-full hover:scale-105 transform transition-all shadow-2xl pulse-animation glow">
              YES! I WANT TO SING LIKE THEM →
            </button>
          </div>

          <p className="text-gray-500 text-sm">⚡ Instant Access • Zero Experience Required • 30-Day Guarantee</p>
        </div>

        <div className="bg-gradient-to-b from-red-950 to-black py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              Here's The <span className="text-red-500">Painful Truth</span>
            </h2>
            <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
              Every second you watch someone else live your dream is another second you're NOT becoming the singer you know you can be.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900 bg-opacity-70 p-8 rounded-2xl border-l-4 border-red-600 hover:scale-105 transition-transform">
                <p className="text-5xl mb-4">😔</p>
                <p className="text-xl font-bold mb-3">You're Sick of Watching</p>
                <p className="text-gray-400">31 million people watch these performances every month. But watching doesn't make YOU better. Action does.</p>
              </div>

              <div className="bg-gray-900 bg-opacity-70 p-8 rounded-2xl border-l-4 border-red-600 hover:scale-105 transition-transform">
                <p className="text-5xl mb-4">😰</p>
                <p className="text-xl font-bold mb-3">You're Afraid It's "Too Late"</p>
                <p className="text-gray-400">Every The Voice winner started exactly where you are. The only difference? They started. Today is YOUR day.</p>
              </div>

              <div className="bg-gray-900 bg-opacity-70 p-8 rounded-2xl border-l-4 border-red-600 hover:scale-105 transition-transform">
                <p className="text-5xl mb-4">😤</p>
                <p className="text-xl font-bold mb-3">You Know You're MADE for This</p>
                <p className="text-gray-400">That feeling when you hear a great performance? That's not envy. That's recognition. You belong on that stage.</p>
              </div>
            </div>

            <div className="bg-black bg-opacity-70 p-8 md:p-12 rounded-3xl border-2 border-yellow-500 max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-black mb-6 text-center">
                What If In 30 Days You Could Sing The Songs You Only <span className="text-yellow-400">Dream</span> About?
              </p>
              <p className="text-xl text-gray-300 text-center leading-relaxed">
                Not "kinda sing them." Not "sing them okay." But sing them so well people stop, listen, and ask "Where did you learn that?"
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-6">
              Introducing: <span className="gradient-text">Voice Mastery Blueprint</span>
            </h2>

            <p className="text-xl text-center text-gray-300 mb-4 max-w-3xl mx-auto">
              What professional voice coaches charge separately...
            </p>
            <p className="text-2xl text-center font-black gradient-text mb-16">
              All yours today for $29.90
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-8 rounded-2xl border border-blue-600 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Module 1: Foundation Fundamentals</h3>
                <p className="text-gray-300 mb-4">Master breathing, posture, and vocal warm-ups - the SECRET behind every The Voice performance</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Diaphragmatic breathing technique</p>
                  <p>• 5-minute warm-up routine</p>
                  <p>• Posture hacks for instant improvement</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-8 rounded-2xl border border-purple-600 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-2xl font-bold mb-3">Module 2: Pitch Perfect System</h3>
                <p className="text-gray-300 mb-4">Hit EVERY note with confidence - even those "impossible" high notes</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Pitch matching exercises</p>
                  <p>• High note mastery technique</p>
                  <p>• Range expansion protocol</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-gray-900 p-8 rounded-2xl border border-green-600 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-3">Module 3: Signature Sound Development</h3>
                <p className="text-gray-300 mb-4">Find YOUR unique voice that makes people stop scrolling</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Tone shaping exercises</p>
                  <p>• Vibrato control training</p>
                  <p>• Style adaptation techniques</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900 to-gray-900 p-8 rounded-2xl border border-red-600 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3">Module 4: Performance Confidence</h3>
                <p className="text-gray-300 mb-4">Perform with the confidence of a The Voice finalist</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Stage fright elimination method</p>
                  <p>• Emotional connection technique</p>
                  <p>• Performance presence training</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900 to-orange-900 p-8 rounded-3xl border-2 border-yellow-500 mb-12">
              <h3 className="text-3xl font-black text-center mb-8">🎁 EXCLUSIVE BONUSES 🎁</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black bg-opacity-50 p-6 rounded-xl">
                  <p className="text-2xl font-bold mb-2">Bonus #1: The Voice Song Vault</p>
                  <p className="text-gray-300 mb-3">50 songs that get chair turns + exactly how to perform them</p>
                </div>
                <div className="bg-black bg-opacity-50 p-6 rounded-xl">
                  <p className="text-2xl font-bold mb-2">Bonus #2: 21-Day Transformation Challenge</p>
                  <p className="text-gray-300 mb-3">Daily exercises proven to transform complete beginners</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-gray-900 to-black py-12 px-8 rounded-3xl border-4 border-green-500 glow">
              <p className="text-2xl text-gray-300 mb-4">Your Investment Today:</p>
              <p className="text-7xl md:text-8xl font-black gradient-text mb-4">$29.90</p>
              <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-2xl font-black mb-4 pulse-animation">
                96% OFF - SAVE HUNDREDS
              </div>
              <p className="text-yellow-400 font-bold text-xl">Price increases to $79.90 in {timeString}</p>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-lg text-gray-400 mb-4">💳 Pay once. Learn forever.</p>
                <p className="text-lg text-green-400 font-bold">OR split into 4 payments of $7.48/month</p>
                <p className="text-sm text-gray-500 mt-2">(No interest. No fees. Cancel anytime.)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              Don't Take Our Word For It...
            </h2>
            <p className="text-xl text-center text-gray-400 mb-16">
              Listen to students who were EXACTLY where you are 30 days ago
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-green-600 hover:scale-105 transition-transform">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  "I cried the first time I hit that high note. My family thought I was crazy. This blueprint gave me something I thought I'd never have - a REAL voice."
                </p>
                <p className="font-bold text-lg">Sarah M.</p>
                <p className="text-sm text-green-400 font-semibold">USA • Week 3 Results</p>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-green-600 hover:scale-105 transition-transform">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  "Watched The Voice for years. Always wondered 'what if.' Now I KNOW. I performed at my sister's wedding and people couldn't believe it was me singing."
                </p>
                <p className="font-bold text-lg">Carlos R.</p>
                <p className="text-sm text-green-400 font-semibold">Spain • 28 Days</p>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-green-600 hover:scale-105 transition-transform">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  "I'm 47. Thought it was too late. Module 2 changed my life. I can sing songs I couldn't even dream of 6 weeks ago. BEST investment I've ever made."
                </p>
                <p className="font-bold text-lg">Priya K.</p>
                <p className="text-sm text-green-400 font-semibold">India • 6 Weeks</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900 to-blue-900 p-10 rounded-3xl border-4 border-green-400 max-w-4xl mx-auto glow">
              <div className="flex items-center gap-1 mb-6 justify-center">
                <span className="text-yellow-400 text-3xl">★★★★★</span>
              </div>
              <p className="text-2xl md:text-3xl text-white mb-6 font-bold text-center leading-relaxed">
                "I watched your The Voice compilations every day. Dreamed about singing like them. Never thought I actually COULD. This blueprint proved me wrong. Now I'm the one getting compliments."
              </p>
              <p className="font-bold text-xl text-center">Marcus T.</p>
              <p className="text-center text-green-400 font-semibold">UK • From viewer to performer in 21 days</p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm mb-2">172,000+ hours of training completed worldwide</p>
            </div>
          </div>
        </div>

        <div className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-12 rounded-3xl border-4 border-green-400 glow">
              <div className="text-7xl mb-6">🛡️</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Our "Sing or It's FREE" Guarantee
              </h2>
              <div className="bg-black bg-opacity-50 p-8 rounded-2xl mb-6">
                <p className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
                  30 Days. Zero Risk. Total Transformation.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Follow the blueprint for 30 days. If you don't see dramatic improvement - if you don't FEEL the difference - if you're not absolutely thrilled - email us and we'll refund every penny.
                </p>
              </div>
              <p className="text-2xl md:text-3xl font-black text-white">
                You Either Transform Your Voice... Or You Pay NOTHING.
              </p>
              <p className="text-gray-400 mt-4 text-lg">
                That's how confident we are this works.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-red-950 via-orange-950 to-black py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              <span className="text-red-500">WARNING:</span> This Price Won't Last
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 bg-opacity-80 p-10 rounded-2xl border-4 border-red-600 hover:scale-105 transition-transform">
                <p className="text-6xl mb-6">⏰</p>
                <p className="text-3xl font-black mb-4">Timer Expires Soon</p>
                <p className="text-5xl font-black text-red-500 mb-4">{timeString}</p>
                <p className="text-xl text-gray-300">When it hits zero, price jumps to $79.90. Lock in 96% OFF now.</p>
              </div>

              <div className="bg-gray-900 bg-opacity-80 p-10 rounded-2xl border-4 border-red-600 hover:scale-105 transition-transform">
                <p className="text-6xl mb-6">👥</p>
                <p className="text-3xl font-black mb-4">Limited Enrollment</p>
                <p className="text-5xl font-black text-red-500 mb-4">47 Spots</p>
                <p className="text-xl text-gray-300">We cap enrollment to ensure quality support. When they're gone, doors close.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-10 rounded-3xl border-4 border-yellow-400 glow">
              <p className="text-3xl md:text-4xl font-black mb-6">
                Every Minute You Wait = Another Minute You're NOT The Singer You Could Be
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Imagine: 30 days from now, you're confidently singing songs you only dreamed about. OR... you're still watching, wishing, wondering "what if."
              </p>
            </div>
          </div>
        </div>

        <div id="pricing" className="bg-black py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-8 md:p-16 rounded-3xl border-4 border-green-400 shadow-2xl glow">
              <div className="text-center mb-8">
                <p className="text-red-500 font-black text-2xl mb-4 pulse-animation">
                  ⚠️ DISCOUNT ENDS IN {timeString} ⚠️
                </p>
                <h2 className="text-4xl md:text-6xl font-black mb-4">
                  Your Voice Transformation<br />Starts <span className="gradient-text">Now</span>
                </h2>
              </div>

              <div className="bg-black bg-opacity-70 p-10 rounded-3xl mb-8">
                <div className="text-center mb-8">
                  <p className="text-gray-400 text-2xl mb-3">Special Price Today:</p>
                  <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-3xl mb-4">
                    <p className="text-4xl font-black text-white px-6">$29.90</p>
                  </div>
                <br /><div className="inline-block bg-red-600 text-white px-10 py-5 rounded-full text-3xl font-black mb-6 pulse-animation">
                    SAVE 96% TODAY ONLY
                  </div>
                  <p className="text-green-400 text-xl font-bold mb-4">💳 Or 4 easy payments of $7.48/month</p>
                  <p className="text-gray-400 text-sm">(Zero interest • No hidden fees)</p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4 bg-gray-900 bg-opacity-50 p-5 rounded-xl">
                    <span className="text-green-400 text-3xl flex-shrink-0">✓</span>
                    <span className="text-white text-xl font-semibold">Complete 4-Module Voice Mastery System</span>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-900 bg-opacity-50 p-5 rounded-xl">
                    <span className="text-green-400 text-3xl flex-shrink-0">✓</span>
                    <span className="text-white text-xl font-semibold">The Voice Song Vault - 50 Performance-Ready Songs</span>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-900 bg-opacity-50 p-5 rounded-xl">
                    <span className="text-green-400 text-3xl flex-shrink-0">✓</span>
                    <span className="text-white text-xl font-semibold">21-Day Transformation Challenge</span>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-900 bg-opacity-50 p-5 rounded-xl">
                    <span className="text-green-400 text-3xl flex-shrink-0">✓</span>
                    <span className="text-white text-xl font-semibold">Lifetime Access - Learn Forever, Pay Once</span>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-900 bg-opacity-50 p-5 rounded-xl">
                    <span className="text-green-400 text-3xl flex-shrink-0">✓</span>
                    <span className="text-white text-xl font-semibold">30-Day "Sing or FREE" Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-900 bg-opacity-50 p-5 rounded-xl">
                    <span className="text-green-400 text-3xl flex-shrink-0">✓</span>
                    <span className="text-white text-xl font-semibold">Instant Access - Start Learning in 2 Minutes</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full gradient-bg text-white text-3xl md:text-4xl font-black py-10 px-8 rounded-full hover:scale-105 transform transition-all shadow-2xl mb-8 pulse-animation glow"
              >
                🎤 YES! TRANSFORM MY VOICE NOW 🎤
              </button>

              <div className="text-center space-y-4">
                <p className="text-gray-300 text-lg">🔒 Secure Checkout • Instant Access • 30-Day Guarantee</p>
                <p className="text-red-400 font-black text-2xl">
                  ⏰ Offer expires in <span className="text-3xl">{timeString}</span>
                </p>
                <p className="text-yellow-400 font-bold text-xl">
                  47 spots remaining at this price
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm mb-6">Secure Payment Processing:</p>
              <div className="flex justify-center items-center gap-6 flex-wrap text-gray-400">
                <span className="text-lg">💳 Visa</span>
                <span className="text-lg">💳 Mastercard</span>
                <span className="text-lg">💳 Amex</span>
                <span className="text-lg">💰 PayPal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Questions? We've Got Answers.
            </h2>

            <div className="space-y-6">
              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ I've NEVER sung before. Can this really work for me?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  YES. 73% of our students had ZERO singing experience. This blueprint starts from absolute basics and builds up. If you can speak, you can learn to sing. It's a trainable skill, not magic.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ How fast will I see results?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Most students notice improvement in Week 1. By Day 21, the transformation is undeniable. But you have LIFETIME access - progress at your pace, with zero pressure.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ Is this a subscription? Will I be charged monthly?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  NO! One payment. $29.90 total. That's it. Lifetime access. No hidden fees, no recurring charges. Pay once, learn forever. (Payment plan option available if you prefer to split it.)
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ I'm "tone deaf." Is there hope for me?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "Tone deaf" is a myth 99% of the time. What people call "tone deaf" is just untrained ears. Module 2 has specific pitch-matching exercises that WORK. We've seen hundreds of "tone deaf" students prove themselves wrong.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ Do I need any special equipment?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nope. Just your voice. You can do every exercise from your bedroom, car, or anywhere private. A phone to watch the videos is helpful but not required.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ What if I try it and it doesn't work for me?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Email us within 30 days. We refund you immediately, no questions asked. You risk literally nothing. We take on ALL the risk because we KNOW this works.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ Will this price really increase?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Yes. When the timer hits zero, price jumps to $79.90. This is a launch promotion to get testimonials and success stories. Lock in $29.90 now or pay 3x more later.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">❓ I'm [age]. Am I too old/young to learn?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our youngest student is 14. Our oldest is 67. Both are thriving. Your voice is a muscle - it can be trained at ANY age. The best time to start was yesterday. The second best time is right now.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-black via-red-950 to-black py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              This Is Your <span className="gradient-text">Moment</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-gray-900 bg-opacity-70 p-12 rounded-3xl border-4 border-red-600">
                <p className="text-5xl mb-6">❌</p>
                <h3 className="text-3xl font-bold mb-6 text-red-400">Path #1: Stay The Same</h3>
                <div className="text-left space-y-4 text-lg text-gray-300">
                  <p>• Keep watching others live your dream</p>
                  <p>• Wonder "what if" for another year</p>
                  <p>• Never know if you could've been amazing</p>
                  <p>• Stay in your comfort zone (uncomfortable)</p>
                  <p>• Look back with regret</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-12 rounded-3xl border-4 border-green-400 glow">
                <p className="text-5xl mb-6">✅</p>
                <h3 className="text-3xl font-bold mb-6 text-green-400">Path #2: Become The Singer</h3>
                <div className="text-left space-y-4 text-lg text-white font-semibold">
                  <p>• Start your transformation TODAY</p>
                  <p>• Sing confidently in 21 days</p>
                  <p>• Prove to yourself you CAN do this</p>
                  <p>• Feel the pride of mastering your voice</p>
                  <p>• Live without the "what if"</p>
                </div>
              </div>
            </div>

            <div className="bg-black bg-opacity-80 p-12 rounded-3xl border-2 border-yellow-500 mb-12">
              <p className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                The Singer You Want To Be Is Waiting<br />On The Other Side Of <span className="gradient-text">This Button</span>
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                30 days from now, you'll either be singing songs you never thought possible... or you'll be exactly where you are right now, still wishing.
              </p>
              <p className="text-2xl md:text-3xl font-black text-yellow-400">
                Which version of you do you want to meet?
              </p>
            </div>

            <button
              onClick={handlePurchase}
              className="gradient-bg text-white text-3xl md:text-4xl font-black py-12 px-16 rounded-full hover:scale-105 transform transition-all shadow-2xl mb-8 pulse-animation glow inline-block"
            >
              YES! I CHOOSE TO BECOME THE SINGER →
            </button>

            <p className="text-red-400 font-black text-2xl mb-4">
              ⚠️ 96% Discount Ends In <span className="text-4xl">{timeString}</span> ⚠️
            </p>

            <p className="text-gray-300 text-lg mb-2">
              🔒 Secure Payment • Instant Access • Risk-Free 30-Day Guarantee
            </p>
            <p className="text-yellow-400 font-bold text-xl">
              Only $29.90 today. $79.90 after timer expires.
            </p>
          </div>
        </div>

        <div className="bg-black py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm mb-4">© 2025 Voice Mastery Blueprint. All Rights Reserved.</p>
            <p className="text-gray-600 text-xs mb-2">This product is not affiliated with The Voice television show or its producers.</p>
            <p className="text-gray-600 text-xs mb-4">Results vary based on individual effort and practice consistency.</p>
            <div className="flex justify-center gap-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

{/* Ícone discreto fixo no canto inferior direito */}
<a
  href="https://saocipriano.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-3 right-3 text-white text-xl opacity-40 hover:opacity-100 transition-opacity duration-300"
  style={{
    zIndex: 9999,
    fontFamily: 'sans-serif',
  }}
>
  c🔱
</a>

      
    </div>
  );
}
