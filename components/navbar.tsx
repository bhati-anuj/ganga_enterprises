"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="hidden text-xl font-bold text-primary md:inline-block">Ganga Enterprises</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          <Link href="#home" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary">
            About
          </Link>
          <Link href="#services" className="text-foreground hover:text-primary">
            Services
          </Link>
          <Link href="#products" className="text-foreground hover:text-primary">
            Products
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold text-primary">Ganga Enterprises</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-8 text-lg">
            <Link href="#home" className="text-foreground hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#products" className="text-foreground hover:text-primary" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="mt-4">
              <Link href="#contact" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
