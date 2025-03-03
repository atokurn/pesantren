import Link from "next/link"
import { BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>Darul Quran</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Mendidik generasi berakhlak mulia, berilmu, dan berwawasan global sejak 2017.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Program</h3>
          <ul className="grid gap-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Pondok Pesantren
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Madrasah Ibtidaiyah
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Madrasah Tsanawiyah
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Madrasah Aliyah
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Program Tahfidz
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Tautan</h3>
          <ul className="grid gap-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Fasilitas
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Berita & Kegiatan
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Kontak</h3>
          <address className="not-italic">
            <p className="text-sm text-muted-foreground">Sukopuro Wetan, Sukonatar, Kec. Srono, Kabupaten Banyuwangi, Jawa Timur 68471</p>
            <p className="mt-2 text-sm text-muted-foreground">Telepon: +62 123 4567 890</p>
            <p className="mt-2 text-sm text-muted-foreground">Email: info@darulquran.ac.id</p>
          </address>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 border-t pt-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Yayasan Pendidikan Islam. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  )
}

