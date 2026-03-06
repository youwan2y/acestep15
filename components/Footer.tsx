'use client'

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Free Generator', href: '/free' },
    { name: 'Examples', href: '#examples' },
  ],
  YouTube: [
    { name: 'Background Music', href: '/youtube/background-music' },
    { name: 'Shorts Music', href: '/youtube/shorts' },
  ],
  Beginners: [
    { name: 'Complete Guide', href: '/beginners/guide' },
    { name: 'Tutorial', href: '/tutorial/text-to-music' },
  ],
  UseCases: [
    { name: 'Meditation Music', href: '/use-cases/meditation' },
    { name: 'Study & Focus', href: '/use-cases/study-focus' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Support', href: '#faq' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-6 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black mb-4">
              <span className="text-gradient">Ace-Step 1.5</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              The next generation AI music generation model. Create professional-quality music in seconds.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ace-Step 1.5. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for musicians worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
