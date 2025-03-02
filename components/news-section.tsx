import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function NewsSection() {
  const news = [
    {
      title: "Penerimaan Santri Baru Tahun Ajaran 2023/2024",
      date: "15 Januari 2023",
      excerpt:
        "Yayasan membuka pendaftaran santri baru untuk tahun ajaran 2023/2024. Segera daftarkan putra-putri Anda.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Kunjungan Menteri Pendidikan ke Pesantren",
      date: "5 Februari 2023",
      excerpt:
        "Menteri Pendidikan mengunjungi pesantren kami dan memberikan apresiasi atas program pendidikan yang diterapkan.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Santri Raih Juara Olimpiade Matematika Internasional",
      date: "20 Maret 2023",
      excerpt: "Santri kami berhasil meraih medali emas dalam Olimpiade Matematika Internasional di Malaysia.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  return (
    <section className="bg-background w-full py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Berita & Kegiatan</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Informasi terbaru seputar kegiatan dan prestasi di lingkungan yayasan kami.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
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
        <div className="mt-12 flex justify-center">
          <Link href="/berita">
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">Lihat Semua Berita</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

