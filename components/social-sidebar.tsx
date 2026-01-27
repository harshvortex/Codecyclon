"use client"

import { Mail, Instagram, Twitter, Linkedin, Github } from "lucide-react"

export function SocialSidebar() {
    // TODO: Update Instagram and LinkedIn URLs when accounts are set up
    const socials = [
        {
            icon: <Mail size={20} />,
            href: "mailto:codecyclon@gmail.com",
            label: "Email",
            active: true
        },
        {
            icon: <Instagram size={20} />,
            href: "https://instagram.com/codecyclon",  // Update this
            label: "Instagram",
            active: false
        },
        {
            icon: <Twitter size={20} />,
            href: "https://twitter.com/codecyclon",
            label: "Twitter",
            active: false
        },
        {
            icon: <Linkedin size={20} />,
            href: "https://linkedin.com/company/codecyclon",  // Update when available
            label: "LinkedIn",
            active: false
        },
        {
            icon: <Github size={20} />,
            href: "https://github.com/codecyclon",
            label: "GitHub",
            active: true
        },
    ]

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 hidden md:flex">
            {socials.map((social, idx) => (
                <a
                    key={idx}
                    href={social.active ? social.href : "#"}
                    target={social.active ? "_blank" : undefined}
                    rel={social.active ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-full bg-card/10 border border-border backdrop-blur-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg group relative ${!social.active ? 'opacity-50' : ''}`}
                >
                    {social.icon}

                    <span className="absolute right-full mr-4 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {social.label}
                    </span>
                </a>
            ))}
        </div>
    )
}
