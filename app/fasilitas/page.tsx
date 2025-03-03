import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Home, GraduationCap, Users, Utensils, Dumbbell } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FasilitasPage() {
  const facilities = [
    {
      title: "Masjid",
      description: "Pusat ibadah dan kegiatan keagamaan dengan kapasitas 1000 jamaah",
      image: "/masjid.jpg",
      icon: <BookOpen className="h-12 w-12 text-primary" />
    },
    {
      title: "Asrama",
      description: "Tempat tinggal santri yang nyaman dan kondusif untuk belajar",
      image: "/asrama.jpg",
      icon: <Home className="h-12 w-12 text-primary" />
    },
    {
      title: "Ruang Kelas",
      description: "Ruang belajar modern dilengkapi dengan fasilitas multimedia",
      image: "/beranda.jpg",
      icon: <GraduationCap className="h-12 w-12 text-primary" />
    },
    {
      title: "Perpustakaan",
      description: "Koleksi lengkap buku-buku referensi dan literatur",
      image: "/perpus.jpg",
      icon: <BookOpen className="h-12 w-12 text-primary" />
    },
    {
      title: "Laboratorium",
      description: "Fasilitas praktikum untuk pembelajaran sains dan teknologi",
      image: "/lab.jpg",
      icon: <Users className="h-12 w-12 text-primary" />
    },
    {
      title: "Kantin",
      description: "Penyedia makanan sehat dan bergizi untuk santri",
      image: "/kantin.jpeg",
      icon: <Utensils className="h-12 w-12 text-primary" />
    },
    {
      title: "Lapangan Olahraga",
      description: "Sarana olahraga dan kegiatan ekstrakurikuler",
      image: "/lapangan.jpg",
      icon: <Dumbbell className="h-12 w-12 text-primary" />
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
              Fasilitas Kami
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Sarana dan prasarana modern untuk mendukung kegiatan belajar mengajar
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-muted py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Fasilitas Pendukung Lainnya
              </h2>
              <p className="mt-4 text-muted-foreground">
                Selain fasilitas utama di atas, kami juga menyediakan berbagai fasilitas pendukung untuk
                kenyamanan dan kebutuhan santri:
              </p>
              <ul className="mt-8 space-y-4 text-left">
                <li className="flex items-start gap-2">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Unit Kesehatan Santri dengan tenaga medis profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Koperasi santri yang menyediakan kebutuhan sehari-hari</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Area wifi untuk mendukung pembelajaran digital</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Ruang multimedia dan studio seni</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Taman belajar outdoor yang asri</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}