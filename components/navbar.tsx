"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { BookOpen, Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Program", href: "/program" },
    { label: "Fasilitas", href: "/fasilitas" },
    { label: "Berita", href: "/berita" },
    { label: "Galeri", href: "/galeri" },
    { label: "Kontak", href: "/kontak" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl hover:text-primary transition-colors">
          <BookOpen className="h-6 w-6" />
          <span>Darul Quran</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/pendaftaran">
            <Button size="sm" className="px-6">Pendaftaran</Button>
          </Link>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full h-full p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link 
                  href="/" 
                  className="flex items-center gap-3 font-bold text-xl hover:text-primary transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-6 w-6" />
                  <span>Darul Quran</span>
                </Link>
              </div>
              <nav className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center py-3 px-4 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="p-6 border-t bg-muted/50">
                <Link href="/pendaftaran" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Pendaftaran</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

