"use client";

import logoRound from "@/assets/images/sibuk-logo-main-round.png";
import logo from "@/assets/images/sibuk-logo-transparent.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#facebook" },
  { icon: Twitter, label: "Twitter/X", href: "https://x.com/MananjayDa2415" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/mananright1/",
  },
  {
    icon: Youtube,
    label: "LinkedIn",
    href: "https://www.youtube.com/@MananjayDaimary",
  },
];

const footerLinks = {
  column1: [
    { label: "ABOUT", href: "/about-us" },
    { label: "PRODUCTS", href: "/products" },
    { label: "OUR VISION AND MISSION", href: "/vision-and-mission" },
    { label: "CONTACT US", href: "/contact-us" },
  ],
  column2: [
    { label: "CAREERS", href: "/careers" },
    { label: "PARTNER WITH US", href: "/contact" },
    { label: "VISIT OUR RESTAURANT", href: "/contact" },
  ],
};

const legalLinks = [
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Website Accessibility Statement", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-light font-roboto relative overflow-hidden py-16 px-4 md:px-8 lg:px-16">
      {/* Decorative Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {/* Left Section - Logo & Social */}
          <div className="space-y-6">
            <div>
              <div className="relative w-60 h-20">
                <Image
                  src={logo}
                  alt="Sibuk"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Instagram className="w-5 h-5 text-orange-darker" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Facebook className="w-5 h-5 text-orange-darker" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Twitter className="w-5 h-5 text-orange-darker" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-orange-darker"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>

            {/* Copyright & Legal Links */}
            <div className="space-y-2 pt-4">
              <p className="text-white text-sm">
                ©2025 SIBUK FOODS & BEVERAGES PVT. LTD.
              </p>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 1 - Navigation Links */}
          <div className="space-y-8">
            {footerLinks.column1.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white font-semibold text-sm md:text-base hover:underline uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="space-y-8">
            {footerLinks.column2.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white font-semibold text-sm md:text-base hover:underline uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Logo Circle */}
          <div className="hidden md:flex justify-center lg:justify-end items-start">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <Image
                src={logoRound}
                alt="Costa Vida Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
