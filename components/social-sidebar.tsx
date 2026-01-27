"use client"

import { Mail, Instagram, Twitter, Linkedin, Github } from "lucide-react"

export function SocialSidebar() {
    const socialLinks = [
        { icon: <Mail size={20} />, href: "mailto:codecyclon@gmail.com", label: "Email" },
        { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
        { icon: <Github size={20} />, href: "#", label: "GitHub" },
    ]

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 hidden md:flex">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-12 h-12 rounded-full bg-card/10 border border-border backdrop-blur-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg group relative"
                >
                    {link.icon}

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {link.label}
                    </span>
                </a>
            ))}
        </div>
    )
}
