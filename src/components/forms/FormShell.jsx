// Card wrapper + submit row shared by all three forms.
export default function FormShell({ onSubmit, status, submitLabel = 'Submit', children, note }) {
  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-brand-deep/5 ring-1 ring-black/5 sm:p-10">
      {/* Honeypot, hidden from people and screen readers */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_company">Company</label>
        <input id="_company" name="_company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {children}
      <div className="flex flex-col gap-4 border-t border-black/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs leading-relaxed text-ink/50">
          {note || 'By submitting this form you agree to our privacy policy. We will only use your details to respond to your enquiry.'}
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep px-7 py-4 font-body text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
      </div>
      {status === 'error' && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 font-body text-sm text-red-700 ring-1 ring-red-100">
          Sorry, something went wrong sending your form. Please call us on <a href="tel:+611300593206" className="font-semibold underline">1300 593 206</a> instead.
        </p>
      )}
    </form>
  )
}
