import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Button from '../components/ui/Button.jsx';

const FORMSUBMIT_ENDPOINT = (email) => `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;

export default function ContactSection({ contact }) {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      _subject: `Portfolio message from ${formData.get('name')}`,
      _replyto: formData.get('email'),
      _template: 'table',
    };

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT(contact.email), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send your message. Please try again or email directly.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-subtle p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <SectionTitle
                highlight="Contact"
                title="Let's build something ambitious"
                description={contact.description}
              />

              <ul className="mt-10 space-y-6">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-start gap-4 transition hover:text-gold"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="label-caps block">Email</span>
                      <span className="mt-1 block font-medium text-cream group-hover:text-gold">
                        {contact.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="label-caps block">Phone</span>
                    <span className="mt-1 block font-medium text-cream">{contact.phone}</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-subtle text-cream-muted">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="label-caps block">Location</span>
                    <span className="mt-1 block font-medium text-cream">{contact.location}</span>
                  </span>
                </li>
              </ul>

              <div className="mt-10">
                <Button href={`mailto:${contact.email}`} variant="primary">
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
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

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
                    <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-on-accent transition hover:bg-[#e0b45f] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
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
                    Delivered to {contact.email}. First submission may require a one-time activation link
                    from FormSubmit.
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
