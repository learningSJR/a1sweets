'use client'

import Image from 'next/image'
import { ArrowUp, Facebook, Instagram, Youtube } from 'lucide-react'

const footerLinks = [
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'SiteMap', href: '/sitemap.xml' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'YouTube', href: '#', Icon: Youtube },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer id="footer" className="a1-footer">
      {/* ====================================
          MAIN FOOTER
      ==================================== */}
      <div className="a1-footer-main">
        {/* Background overlay */}
        <div className="a1-footer-overlay" aria-hidden="true" />

        {/* Logo and contact details */}
        <div className="a1-footer-content">
          <a
            href="/#home"
            className="a1-footer-logo"
            aria-label="A1 Sweets Home"
          >
            <Image
              src="/images/logo1.png"
              alt="A1 Sweets Logo"
              width={165}
              height={110}
              className="a1-footer-logo-image"
            />
          </a>

          <p className="a1-footer-address">
            3300 McNicoll Ave, Unit 18, Toronto, Ontario
          </p>

          <a href="mailto:info@a1sweets.com" className="a1-footer-contact">
            info@a1sweets.com
          </a>

          <a href="tel:+14162999424" className="a1-footer-contact">
            +1 (416) 299-9424
          </a>

          {/* Social icons */}
          <div className="a1-footer-social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="a1-footer-social-link"
              >
                <Icon size={24} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer navigation */}
        <div className="a1-footer-navigation-wrapper">
          <nav className="a1-footer-navigation" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="a1-footer-nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ====================================
          COPYRIGHT BAR
      ==================================== */}
      <div className="a1-footer-bottom">
        <div className="a1-footer-bottom-content">
          <p className="a1-footer-copyright">
            Copyright © 2023 A1sweets. All Rights Reserved.
          </p>

          <p className="a1-footer-developer">
            Designed and Developed by TAS Technologies
          </p>
        </div>

        {/* Scroll to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="a1-footer-scroll"
          aria-label="Scroll to top"
        >
          <ArrowUp size={30} strokeWidth={2.5} />
        </button>
      </div>
    </footer>
  )
}
