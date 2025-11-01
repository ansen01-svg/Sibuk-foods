"use client";

import logo from "@/assets/images/sibuk-logo-main.png";
import logo1 from "@/assets/images/sibuk-logo-transparent.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "ABOUT US", href: "/about-us" },
  { label: "PRODUCTS", href: "/products" },
  { label: "OUR VIEW", href: "/vision-and-mission" },
  { label: "CONTACT US", href: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
              className="h-16 w-auto md:h-24 lg:h-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    className="text-base font-jakarta-sans"
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-2 font-semibold font-roboto text-dark-light hover:bg-white transition-all duration-300 inline-block cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu - Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-white/20 hover:bg-white/30 cursor-pointer"
                aria-label="Toggle menu"
              >
                <Menu style={{ width: "30px", height: "30px" }} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-orange-darker border-none w-full sm:w-[400px] p-0"
            >
              <SheetHeader className="px-8 pt-6 pb-4">
                <Link
                  href="/"
                  className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={logo1}
                    alt="Logo"
                    width={80}
                    height={80}
                    className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
                  />
                </Link>
              </SheetHeader>
              <nav className="flex flex-col px-6 py-8 space-y-1">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="group relative px-6 py-4 text-white font-semibold font-roboto text-lg border-b border-white/30 hover:bg-white/20 hover:rounded-xl transition-all duration-300 hover:translate-x-2 cursor-pointer"
                    >
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
