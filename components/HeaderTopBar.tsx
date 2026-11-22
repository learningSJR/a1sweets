import { Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react'

// Replace placeholders with verified A1 Sweets contact details before publishing.
const email = 'info@a1sweets.com'
const phoneDisplay = 'Contact us'
const phoneHref = '' // Add a verified telephone number, e.g. +1XXXXXXXXXX

export default function HeaderTopBar() {
  return (
    <div className="w-full border-b border-white/20 bg-[#202027]/75 text-white backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto flex h-[52px] items-center justify-between gap-3 px-5 py-2">
        <div className="flex min-w-0 items-center gap-4 text-xs sm:text-[13px] lg:gap-7">
          <a
            href={`mailto:${email}`}
            className="flex shrink-0 items-center gap-2 transition hover:text-yellow"
            aria-label={`Email ${email}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Email: {email}</span>
          </a>
          {phoneHref ? (
            <a
              href={`tel:${phoneHref}`}
              className="flex items-center gap-2 transition hover:text-yellow"
            >
              <Phone size={15} aria-hidden="true" />
              <span className="hidden md:inline">
                Telephone: {phoneDisplay}
              </span>
            </a>
          ) : (
            <span className="hidden items-center gap-2 md:flex text-white/80">
              <Phone size={15} aria-hidden="true" />
              <span>{phoneDisplay}</span>
            </span>
          )}
        </div>
        <div className="flex h-full shrink-0 items-center gap-5">
          <div className="hidden items-center gap-4 lg:flex">
            {/* Set real profile URLs before publishing; icons are not fake links. */}
            <Facebook size={16} aria-label="Facebook" />
            <Instagram size={16} aria-label="Instagram" />
            <Youtube size={17} aria-label="YouTube" />
          </div>
          <a
            href="#contact"
            className="flex h-full items-center bg-red px-6 py-2 text-[10px] font-bold uppercase tracking-[.14em] transition-colors hover:bg-[#bd1720] sm:px-7 sm:text-xs"
          >
            Catering Enquiry
          </a>
        </div>
      </div>
    </div>
  )
}
