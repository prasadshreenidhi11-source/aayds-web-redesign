// Form primitives shared by the contact, referral and careers forms.
// Styled to match the site's pill/card language; every control is labelled.

const inputCls =
  'w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 font-body text-sm text-ink placeholder:text-ink/35 shadow-sm outline-none transition-all duration-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10'

export function Field({ label, name, type = 'text', required, placeholder, hint, autoComplete, inputMode, pattern, className = '' }) {
  const id = `f-${name}`
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block font-body text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        className={inputCls}
      />
      {hint && <p className="mt-1.5 font-body text-xs text-ink/50">{hint}</p>}
    </div>
  )
}

export function TextArea({ label, name, required, placeholder, rows = 5, className = '' }) {
  const id = `f-${name}`
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block font-body text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </label>
      <textarea id={id} name={name} rows={rows} required={required} placeholder={placeholder} className={`${inputCls} resize-y`} />
    </div>
  )
}

export function Select({ label, name, options, required, className = '', placeholder = 'Select…' }) {
  const id = `f-${name}`
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block font-body text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </label>
      <select id={id} name={name} required={required} defaultValue="" className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23003089%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:16px] bg-[position:right_1rem_center] bg-no-repeat pr-10`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

// Radio or checkbox group rendered as selectable pills.
export function ChoiceGroup({ legend, name, options, type = 'radio', required, className = '', hint }) {
  return (
    <fieldset className={className}>
      <legend className="mb-2 block font-body text-sm font-semibold text-ink">
        {legend}
        {required && <span className="text-brand-primary"> *</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) => {
          const id = `f-${name}-${i}`
          return (
            <label
              key={o}
              htmlFor={id}
              className="group relative cursor-pointer select-none rounded-full border border-black/10 bg-white px-4 py-2.5 font-body text-sm text-ink/80 shadow-sm transition-all duration-200 has-[:checked]:border-transparent has-[:checked]:bg-gradient-to-br has-[:checked]:from-brand-deep has-[:checked]:via-brand-primary has-[:checked]:to-brand-deep has-[:checked]:text-white has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-primary/20 hover:border-brand-primary/40"
            >
              <input id={id} type={type} name={name} value={o} required={required && type === 'radio' && i === 0 ? true : undefined} className="sr-only" />
              {o}
            </label>
          )
        })}
      </div>
      {hint && <p className="mt-1.5 font-body text-xs text-ink/50">{hint}</p>}
    </fieldset>
  )
}

export function FormSection({ title, text, children }) {
  return (
    <div className="border-t border-black/5 pt-8 first:border-t-0 first:pt-0">
      {title && <h2 className="font-display text-xl font-bold text-ink">{title}</h2>}
      {text && <p className="mt-1 font-body text-sm text-ink/60">{text}</p>}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">{children}</div>
    </div>
  )
}
