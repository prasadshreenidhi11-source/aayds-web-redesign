import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { site } from '../../data/site'

// Handles submission for every form on the site.
//  - If VITE_FORM_ENDPOINT is set, the form is POSTed there as JSON.
//  - Otherwise it opens a pre-filled email to the practice so no enquiry is
//    lost on a static host. Either way the visitor lands on /thank-you.
export function useFormSubmit({ formName, to = site.emailAdmin }) {
  const [status, setStatus] = useState('idle') // idle | sending | error
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const fd = new FormData(form)
    // Honeypot: bots fill hidden fields, humans never see it.
    if (fd.get('_company')) return navigate('/thank-you')
    const data = {}
    for (const [k, v] of fd.entries()) {
      if (k.startsWith('_') || v instanceof File) continue
      data[k] = data[k] ? `${data[k]}, ${v}` : v
    }
    data._form = formName
    data._page = window.location.href

    setStatus('sending')
    if (site.formEndpoint) {
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        navigate('/thank-you')
        return
      } catch {
        setStatus('error')
        return
      }
    }
    const lines = Object.entries(data)
      .filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${v}`)
    const subject = encodeURIComponent(`${formName} - website enquiry`)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setStatus('idle')
    navigate('/thank-you')
  }

  return { onSubmit, status }
}
