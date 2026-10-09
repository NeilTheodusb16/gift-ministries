import React from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

// ─── Error Fallback UI ──────────────────────────────────────────────────────
function ErrorFallback({ error, resetError }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-800 to-churchBlue-600 flex flex-col items-center justify-center px-4 text-white relative overflow-hidden">

      {/* Background dot grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d9c58f_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-churchBlue-500/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-gold-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <p className="text-gold-400 text-xs uppercase tracking-[0.2em] font-semibold">
            Something went wrong
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
            An unexpected<br />
            <span className="gold-gradient-text">error occurred</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed max-w-sm mx-auto">
            We're sorry — something broke on this page. You can try refreshing, go back home, or contact us if the problem persists.
          </p>
        </div>

        {/* Error detail (collapsed, dev-friendly) */}
        {error?.message && (
          <details className="text-left bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-400 cursor-pointer group">
            <summary className="font-mono text-gold-400/80 group-open:mb-3 select-none">
              Error details
            </summary>
            <pre className="whitespace-pre-wrap break-words font-mono leading-relaxed">
              {error.message}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={resetError}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </a>
        </div>

        {/* Footer contact nudge */}
        <p className="text-slate-400 text-sm flex items-center justify-center gap-1.5">
          <Mail className="w-4 h-4 text-gold-400/70" />
          Need help?{' '}
          <a href="/contact" className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}

// ─── Error Boundary Class ────────────────────────────────────────────────────
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console — swap for Sentry / LogRocket when ready
    console.error('[ErrorBoundary] Uncaught error:', error, info.componentStack);
  }

  resetError() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }
    return this.props.children;
  }
}
