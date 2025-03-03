import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BeritaPage() {
  const news = [
    {
      title: "Penerimaan Santri Baru Tahun Ajaran 2023/2024",
      date: "15 Januari 2023",
      excerpt: "Yayasan membuka pendaftaran santri baru untuk tahun ajaran 2023/2024. Segera daftarkan putra-putri Anda.",
      image: "/placeholder.svg",
      category: "Pengumuman",
      link: "#"
    },
    {
      title: "Kunjungan Menteri Pendidikan ke Pesantren",
      date: "5 Februari 2023",
      excerpt: "Menteri Pendidikan mengunjungi pesantren kami dan memberikan apresiasi atas program pendidikan yang diterapkan.",
      image: "/placeholder.svg",
      category: "Berita",
      link: "#"
    },
    {
      title: "Santri Raih Juara Olimpiade Matematika Internasional",
      date: "20 Maret 2023",
      excerpt: "Santri kami berhasil meraih medali emas dalam Olimpiade Matematika Internasional di Malaysia.",
      image: "/placeholder.svg",
      category: "Prestasi",
      link: "#"
    },
    {
      title: "Workshop Pengembangan Metode Pembelajaran Modern",
      date: "10 April 2023",
      excerpt: "Para ustadz dan ustadzah mengikuti workshop pengembangan metode pembelajaran berbasis teknologi.",
      image: "/placeholder.svg",
      category: "Kegiatan",
      link: "#"
    },
    {
      title: "Peringatan Hari Santri Nasional 2023",
      date: "22 Oktober 2023",
      excerpt: "Rangkaian kegiatan memperingati Hari Santri Nasional di lingkungan pesantren.",
      image: "/placeholder.svg",
      category: "Kegiatan",
      link: "#"
    },
    {
      title: "Wisuda Tahfidz Angkatan ke-15",
      date: "15 November 2023",
      excerpt: "Prosesi wisuda santri program tahfidz yang telah menyelesaikan hafalan 30 juz.",
      image: "/placeholder.svg",
      category: "Kegiatan",
      link: "#"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Berita & Kegiatan
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Informasi terbaru seputar kegiatan dan prestasi di lingkungan pesantren
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cari berita..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    <SelectItem value="pengumuman">Pengumuman</SelectItem>
                    <SelectItem value="berita">Berita</SelectItem>
                    <SelectItem value="prestasi">Prestasi</SelectItem>
                    <SelectItem value="kegiatan">Kegiatan</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="latest">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Terbaru</SelectItem>
                    <SelectItem value="oldest">Terlama</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <Card key={index} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                      <span className="text-primary font-medium">{item.category}</span>
                    </div>
                    <CardTitle className="line-clamp-2 mt-2">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Link href={item.link} className="w-full">
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                        Baca Selengkapnya
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" disabled>
                Sebelumnya
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline">
                2
              </Button>
              <Button variant="outline">
                3
              </Button>
              <Button variant="outline">
                Selanjutnya
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}