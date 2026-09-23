import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Button from '../components/ui/Button.jsx';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function getReturnUrl() {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.href);
  url.searchParams.set('sent', '1');
  url.hash = 'contact';
  return url.toString();
}

export default function ContactSection({ contact, profile, socialLinks = [] }) {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const accessKey = contact.web3formsAccessKey?.trim();
  const usesWeb3Forms = Boolean(accessKey);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') !== '1') return;

    setStatus('success');
    params.delete('sent');
    const next = `${window.location.pathname}${params.toString() ? `?${params}` : ''}#contact`;
    window.history.replaceState({}, '', next);
  }, []);

  const handleWeb3Submit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', accessKey);
    formData.append('subject', `Portfolio message from ${formData.get('name')}`);
    formData.append('from_name', 'Portfolio Contact');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message. Please email me directly.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error.message === 'Failed to fetch'
          ? 'Network error while sending. Please email me directly, or try again in a moment.'
          : error.message || 'Something went wrong. Please email me directly.'
      );
    }
  };

  const handleFormSubmit = (event) => {
    if (usesWeb3Forms) {
      handleWeb3Submit(event);
      return;
    }

    const form = event.currentTarget;
    const next = form.querySelector('input[name="_next"]');
    const replyTo = form.querySelector('input[name="_replyto"]');
    if (next) next.value = getReturnUrl();
    if (replyTo) replyTo.value = form.email.value;
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="surface-card overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-subtle p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <SectionTitle
                highlight="Contact"
                title="Let's work together"
                description={contact.description}
              />

              <ul className="mt-10 space-y-6">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-start gap-4 rounded-xl transition hover:text-gold"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="label-caps block">Email</span>
                      <span className="mt-1 block break-all font-medium text-cream group-hover:text-gold">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="group flex items-start gap-4 rounded-xl transition hover:text-gold"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="label-caps block">Phone</span>
                      <span className="mt-1 block font-medium text-cream group-hover:text-gold">
                        {profile.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-subtle text-cream-muted">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="label-caps block">Location</span>
                    <span className="mt-1 block font-medium text-cream">{profile.location}</span>
                  </span>
                </li>
              </ul>

              {socialLinks.length > 0 ? (
                <ul className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-subtle px-4 py-2 text-sm font-medium text-cream transition hover:border-gold/30 hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-10">
                <Button href={`mailto:${profile.email}`} variant="primary">
                  Email me directly
                </Button>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="label-caps mb-6">Send a message</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-teal/30 bg-teal-soft px-6 py-10 text-center">
                  <CheckCircle2 className="h-10 w-10 text-teal" />
                  <p className="font-medium text-cream">Message sent successfully!</p>
                  <p className="text-sm text-cream-muted">
                    Thank you — I&apos;ll get back to you at the email you provided.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-sm font-semibold text-gold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  action={
                    usesWeb3Forms
                      ? undefined
                      : `https://formsubmit.co/${encodeURIComponent(profile.email)}`
                  }
                  method={usesWeb3Forms ? undefined : 'POST'}
                  onSubmit={handleFormSubmit}
                  noValidate
                >
                  {usesWeb3Forms ? null : (
                    <>
                      <input type="hidden" name="_subject" value="Portfolio contact message" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_next" value="" />
                      <input type="hidden" name="_replyto" value="" />
                    </>
                  )}

                  <input
                    type="text"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream">
                        Full name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="input-field"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="input-field"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cream">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="input-field"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="input-field resize-none"
                      placeholder="Tell me about your project, timeline, and what you need..."
                    />
                  </div>

                  {status === 'error' ? (
                    <div className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold-soft px-4 py-3 text-sm text-cream">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-on-accent transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-cream-dim">
                    Messages go to {profile.email}.
                    {usesWeb3Forms
                      ? ' Delivered through Web3Forms.'
                      : ' On first use, FormSubmit may email you an activation link — open it once, then submissions will arrive normally.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
