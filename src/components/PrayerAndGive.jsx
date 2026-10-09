import React, { useState } from 'react';
import {
  Heart,
  Send,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Lock,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function PrayerAndGive() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showGiveModal, setShowGiveModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmitPrayer = async (e) => {
  e.preventDefault();

  if (!request.trim()) return;

  setSending(true);
  setError('');

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/api/prayer-request',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          request,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.detail || 'Failed to submit prayer request'
      );
    }

    setSubmitted(true);

    setName('');
    setContact('');
    setRequest('');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error(error);

    setError(
      error.message || 'Unable to submit prayer request.'
    );

  } finally {
    setSending(false);
  }
};
  return (
    <section id="prayer" className="py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 bg-gold-200/50 px-3 py-1 rounded-full">
            Fellowship & Support
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-800">
            Prayer & Give
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Share your prayer request with us or support the ministry through a secure offering.
          </p>
        </div>

        {/* Prayer & Give Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Prayer Request */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">

            <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-navy-50">
                <Heart className="w-6 h-6 text-churchBlue-500" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-800">
                  Submit Prayer Request
                </h3>

                <p className="text-xs text-slate-500">
                  We pray for every request confidentially.
                </p>
              </div>
            </div>

            {submitted ? (

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 animate-fadeIn">

                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />

                <h4 className="font-bold text-emerald-900 text-lg">
                  Prayer Request Received
                </h4>

                <p className="text-sm text-emerald-700">
                  Thank you for sharing your prayer request with us.
                  Our prayer team and Pastor will stand in faith with you.
                </p>

              </div>

            ) : (

              <form onSubmit={handleSubmitPrayer} className="space-y-4">

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name (Optional)
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={sending}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent text-sm disabled:bg-slate-100"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email or Phone (Optional)
                  </label>

                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Enter email or WhatsApp number"
                    disabled={sending}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent text-sm disabled:bg-slate-100"
                  />
                </div>

                {/* Prayer */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    How can we pray for you?{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    required
                    rows={4}
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="Type your prayer request here..."
                    disabled={sending}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent text-sm disabled:bg-slate-100"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending || !request.trim()}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-navy-800 hover:bg-navy-900 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl shadow transition-all duration-200"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Prayer Request</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Give Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">

            <div className="space-y-6">

              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">

                <div className="p-2.5 rounded-xl bg-gold-200/50">
                  <CreditCard className="w-6 h-6 text-gold-600" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-800">
                    Support the Ministry
                  </h3>

                  <p className="text-xs text-slate-500">
                    Giving & Tithes
                  </p>
                </div>

              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Your generosity helps support local church ministry,
                discipleship, missions, equipping leaders, teaching God's Word,
                and community outreach.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">

                <div className="flex items-center space-x-2 text-navy-900 font-semibold">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Secure Online Giving</span>
                </div>

                <p>
                  Online payments and UPI transfers can be connected directly
                  to Razorpay / Bank transfer during implementation.
                </p>

              </div>

              <button
                onClick={() => setShowGiveModal(true)}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-bold py-3.5 px-6 rounded-xl shadow hover:shadow-lg transition-all duration-200"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Give Securely</span>
              </button>

            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">

              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
                100% Tax Compliant
              </span>

              <span>GIFT Ministries</span>

            </div>

          </div>

        </div>
      </div>

      {/* Give Modal */}
      {showGiveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">

          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200">

            <div className="text-center space-y-2">

              <div className="w-12 h-12 rounded-full bg-gold-200/50 text-gold-600 flex items-center justify-center mx-auto">
                <CreditCard className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy-800">
                Online Giving
              </h3>

              <p className="text-slate-600 text-xs">
                GIFT (Gathering in Faith Together) Ministries
              </p>

            </div>

            <div className="bg-cream-100 p-4 rounded-xl text-xs space-y-2 border border-amber-900/10">

              <p className="font-bold text-navy-900">
                Bank Transfer / UPI Details:
              </p>

              <p>
                <strong>Account Name:</strong>{' '}
                GIFT Ministries / GIFT Baptist Church
              </p>

              <p>
                <strong>Location:</strong>{' '}
                Madhurawada, Visakhapatnam
              </p>

              <p>
                <strong>Razorpay Gateway:</strong>{' '}
                Ready for API key integration.
              </p>

            </div>

            <button
              onClick={() => setShowGiveModal(false)}
              className="w-full bg-navy-800 text-white font-bold py-3 rounded-xl hover:bg-navy-900 text-sm"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
}