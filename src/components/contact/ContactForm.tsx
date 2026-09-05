import {
  ArrowRight,
  LoaderCircle,
  Mail,
  MessageSquare,
  Tag,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
} from 'react'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ContactField = keyof ContactFormData
type ContactErrors = Partial<Record<ContactField, string>>
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const configuredFormspreeEndpoint =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined)?.trim() ?? ''
const formspreeEndpoint =
  configuredFormspreeEndpoint.startsWith('https://formspree.io/f/') &&
  configuredFormspreeEndpoint.length > 'https://formspree.io/f/'.length &&
  !configuredFormspreeEndpoint.includes('YOUR_FORM_ID')
  ? configuredFormspreeEndpoint
  : ''
const contactEmail = 'smujtabahaider6@gmail.com'

const inputClassName =
  'h-[58px] w-full rounded-xl border border-[#c2986d]/25 bg-[#2a2724]/75 pl-12 pr-4 text-[15px] text-[#f5efe7] outline-none transition duration-200 placeholder:text-[#a99f96] hover:border-[#c2986d]/40 focus:border-[#c2986d]/75 focus:bg-[#302c28]/90 focus:ring-2 focus:ring-[#c2986d]/20'

function validateForm(data: ContactFormData): ContactErrors {
  const errors: ContactErrors = {}
  const name = data.name.trim()
  const email = data.email.trim()
  const subject = data.subject.trim()
  const message = data.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Please enter at least 2 characters.'
  else if (name.length > 80) errors.name = 'Please keep your name under 80 characters.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (email.length > 120) errors.email = 'Please keep your email under 120 characters.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!subject) errors.subject = 'Please enter a subject.'
  else if (subject.length < 3) errors.subject = 'Please enter at least 3 characters.'
  else if (subject.length > 120) errors.subject = 'Please keep the subject under 120 characters.'

  if (!message) errors.message = 'Please enter a message.'
  else if (message.length < 10) errors.message = 'Please enter at least 10 characters.'
  else if (message.length > 3000) errors.message = 'Please keep the message under 3000 characters.'

  return errors
}

type TextFieldProps = {
  error?: string
  field: Exclude<ContactField, 'message'>
  Icon: LucideIcon
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  autoComplete?: string
  minLength?: number
  maxLength: number
}

function TextField({
  error,
  field,
  Icon,
  label,
  onChange,
  placeholder,
  value,
  type = 'text',
  autoComplete,
  minLength,
  maxLength,
}: TextFieldProps) {
  const errorId = `${field}-error`

  return (
    <div className="contact-form-row min-w-0">
      <label htmlFor={field} className="mb-2 block text-[14px] font-medium text-[#f5efe7]">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#c2986d]" size={19} strokeWidth={1.7} aria-hidden="true" />
        <input
          id={field}
          name={field}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          required
          className={inputClassName}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
      </div>
      {error && <p id={errorId} className="mt-1.5 text-[12px] text-[#d9a58f]">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const submissionInProgress = useRef(false)

  useEffect(() => {
    if (import.meta.env.DEV && configuredFormspreeEndpoint && !formspreeEndpoint) {
      console.warn(
        'Contact form: VITE_FORMSPREE_ENDPOINT must be an HTTPS Formspree form endpoint.',
      )
    } else if (import.meta.env.DEV && !formspreeEndpoint) {
      console.warn(
        'Contact form: VITE_FORMSPREE_ENDPOINT is not configured. The mail fallback will be used.',
      )
    }
  }, [])

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as ContactField
    setFormData((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'submitting') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  const openEmailFallback = () => {
    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      '',
      'Message:',
      formData.message.trim(),
    ].join('\n')
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject.trim())}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setStatus('idle')
    setStatusMessage('')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submissionInProgress.current || status === 'submitting') return

    const nextErrors = validateForm(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      setStatusMessage('Please correct the highlighted fields.')
      return
    }

    if (companyWebsite.trim()) return

    if (!formspreeEndpoint) {
      openEmailFallback()
      return
    }

    submissionInProgress.current = true
    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      })

      if (!response.ok) throw new Error(`Contact request failed: ${response.status}`)

      setStatus('success')
      setStatusMessage("Message sent successfully. I'll get back to you soon.")
      setFormData(emptyForm)
      setCompanyWebsite('')
    } catch {
      setStatus('error')
      setStatusMessage('Something went wrong. Please try again or email me directly at')
    } finally {
      submissionInProgress.current = false
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        <TextField
          field="name"
          label="Name"
          placeholder="Your name"
          Icon={UserRound}
          value={formData.name}
          onChange={updateField}
          autoComplete="name"
          minLength={2}
          maxLength={80}
          error={errors.name}
        />
        <TextField
          field="email"
          label="Email"
          placeholder="your@email.com"
          Icon={Mail}
          value={formData.email}
          onChange={updateField}
          type="email"
          autoComplete="email"
          maxLength={120}
          error={errors.email}
        />
      </div>

      <div className="mt-5">
        <TextField
          field="subject"
          label="Subject"
          placeholder="What's this about?"
          Icon={Tag}
          value={formData.subject}
          onChange={updateField}
          minLength={3}
          maxLength={120}
          error={errors.subject}
        />
      </div>

      <div className="contact-form-row mt-5">
        <label htmlFor="message" className="mb-2 block text-[14px] font-medium text-[#f5efe7]">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 text-[#c2986d]" size={19} strokeWidth={1.7} aria-hidden="true" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={updateField}
            placeholder="Write your message here..."
            minLength={10}
            maxLength={3000}
            required
            rows={5}
            className="min-h-[128px] w-full resize-y rounded-xl border border-[#c2986d]/25 bg-[#2a2724]/75 py-4 pl-12 pr-4 text-[15px] leading-relaxed text-[#f5efe7] outline-none transition duration-200 placeholder:text-[#a99f96] hover:border-[#c2986d]/40 focus:border-[#c2986d]/75 focus:bg-[#302c28]/90 focus:ring-2 focus:ring-[#c2986d]/20"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
        </div>
        {errors.message && <p id="message-error" className="mt-1.5 text-[12px] text-[#d9a58f]">{errors.message}</p>}
      </div>

      <div className="absolute left-[-10000px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          value={companyWebsite}
          onChange={(event) => setCompanyWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-form-row mt-6 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex h-[62px] w-full items-center justify-center gap-5 rounded-[13px] bg-[#ad835a] px-8 text-[16px] font-semibold text-[#fffaf3] outline-none transition duration-200 hover:-translate-y-px hover:bg-[#bd9167] focus-visible:ring-2 focus-visible:ring-[#c2986d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#14110f] disabled:cursor-wait disabled:opacity-65 sm:w-[285px]"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="animate-spin" size={19} aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="contact-submit-arrow transition-transform duration-200 group-hover:translate-x-1" size={20} aria-hidden="true" />
            </>
          )}
        </button>

        <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#ad835a]/80 xl:flex" aria-hidden="true">
          I&apos;ll Get Back to You Soon
          <span className="h-px w-10 bg-[#ad835a]/55" />
        </div>
      </div>

      <div className="mt-4 min-h-6 text-[13px] leading-relaxed" aria-live="polite">
        {statusMessage && (
          <p className={status === 'success' ? 'text-[#d9c4aa]' : 'text-[#d9a58f]'}>
            {statusMessage}{' '}
            {status === 'error' && (
              <a href="mailto:smujtabahaider6@gmail.com" className="font-semibold text-[#c2986d] underline decoration-[#c2986d]/45 underline-offset-4">
                smujtabahaider6@gmail.com
              </a>
            )}
          </p>
        )}
      </div>
    </form>
  )
}
