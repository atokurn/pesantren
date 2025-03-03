import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Home, MapPin, Phone, Mail, Clock, Users, Calendar, Award } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialSection from "@/components/testimonial-section"
import StatsSection from "@/components/stats-section"
import NewsSection from "@/components/news-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <div className="relative h-[600px] w-full">
            <Image
              src="/beranda.jpg?height=600&width=1200"
              alt="Pondok Pesantren"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Yayasan Pendidikan Islam
            </h1>
            <p className="mt-4 max-w-[700px] text-lg sm:text-xl">
              Mendidik generasi berakhlak mulia, berilmu, dan berwawasan global
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Tentang Kami
              </Button>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tentang Yayasan Kami</h2>
              <p className="mt-4 text-muted-foreground">
                Yayasan kami didirikan pada tahun 1985 dengan visi menjadi pusat pendidikan Islam yang unggul dan
                berwawasan global.
              </p>
              <p className="mt-4">
                Kami mengelola berbagai lembaga pendidikan mulai dari tingkat dasar hingga menengah atas, dengan
                kurikulum yang mengintegrasikan pendidikan agama Islam dan pendidikan umum sesuai standar nasional.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Pendidikan Berkualitas</h3>
                    <p className="text-sm text-muted-foreground">Kurikulum terintegrasi dengan standar nasional</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Pengajar Profesional</h3>
                    <p className="text-sm text-muted-foreground">Tenaga pendidik berpengalaman dan berkualifikasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Fasilitas Lengkap</h3>
                    <p className="text-sm text-muted-foreground">
                      Asrama, perpustakaan, laboratorium, dan sarana olahraga
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Komunitas Islami</h3>
                    <p className="text-sm text-muted-foreground">Lingkungan yang mendukung pembentukan akhlak mulia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/beranda.jpg?height=600&width=600" alt="Kegiatan Santri" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-muted w-full py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Program Pendidikan</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Kami menawarkan berbagai program pendidikan yang komprehensif untuk mengembangkan potensi akademik dan
                spiritual santri.
              </p>
            </div>
            <Tabs defaultValue="pesantren" className="mt-12">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3">
                <TabsTrigger value="pesantren">Pondok Pesantren</TabsTrigger>
                <TabsTrigger value="sekolah">Sekolah Formal</TabsTrigger>
                <TabsTrigger value="tahfidz">Program Tahfidz</TabsTrigger>
              </TabsList>
              <TabsContent value="pesantren" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pesantren Putra</CardTitle>
                      <CardDescription>Program pendidikan pesantren khusus santri putra</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Kajian Kitab Kuning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Tahsin dan Tahfidz Al-Qur'an</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Pengembangan Bahasa Arab & Inggris</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pesantren Putri</CardTitle>
                      <CardDescription>Program pendidikan pesantren khusus santri putri</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Kajian Kitab Kuning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Tahsin dan Tahfidz Al-Qur'an</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Keterampilan Keputrian</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Program Intensif</CardTitle>
                      <CardDescription>Program khusus dengan fokus pendalaman ilmu agama</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Pendalaman Fiqih</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Bahasa Arab Intensif</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Pengkaderan Da'i</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="sekolah" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Madrasah Ibtidaiyah</CardTitle>
                      <CardDescription>Setara dengan Sekolah Dasar (SD)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Kurikulum Nasional</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Penguatan Pendidikan Agama</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Pengembangan Karakter</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Madrasah Tsanawiyah</CardTitle>
                      <CardDescription>Setara dengan Sekolah Menengah Pertama (SMP)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Kurikulum Nasional</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Pendalaman Ilmu Agama</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Ekstrakurikuler Beragam</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Madrasah Aliyah</CardTitle>
                      <CardDescription>Setara dengan Sekolah Menengah Atas (SMA)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Jurusan IPA & IPS</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Persiapan Perguruan Tinggi</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Pengembangan Minat & Bakat</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="tahfidz" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tahfidz Reguler</CardTitle>
                      <CardDescription>Program menghafal Al-Qur'an reguler</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Target 5 Juz per Tahun</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Bimbingan Hafalan Intensif</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Ujian Hafalan Berkala</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Tahfidz Intensif</CardTitle>
                      <CardDescription>Program menghafal Al-Qur'an intensif</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Target 15 Juz per Tahun</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Bimbingan Hafalan Khusus</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Sanad Hafalan</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Tahfidz & Bahasa</CardTitle>
                      <CardDescription>Program menghafal Al-Qur'an dengan penguatan bahasa</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>Target 10 Juz per Tahun</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Penguatan Bahasa Arab</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Pemahaman Tafsir</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Selengkapnya</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fasilitas Kami</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Kami menyediakan fasilitas lengkap untuk mendukung proses belajar mengajar dan kehidupan santri.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/masjid.jpg?height=400&width=600"
                alt="Masjid"
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">Masjid</h3>
                <p className="text-sm">Pusat ibadah dan kegiatan keagamaan</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/asrama.jpg?height=400&width=600"
                alt="Asrama"
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">Asrama</h3>
                <p className="text-sm">Tempat tinggal santri yang nyaman</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/perpus.jpg?height=400&width=600"
                alt="Perpustakaan"
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">Perpustakaan</h3>
                <p className="text-sm">Koleksi buku lengkap untuk referensi</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/lab.jpg?height=400&width=600"
                alt="Laboratorium"
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">Laboratorium</h3>
                <p className="text-sm">Fasilitas praktikum sains modern</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/lapangan.jpg?height=400&width=600"
                alt="Lapangan Olahraga"
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">Lapangan Olahraga</h3>
                <p className="text-sm">Sarana olahraga dan kegiatan outdoor</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/kantin.jpeg?height=400&width=600"
                alt="Kantin"
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">Kantin</h3>
                <p className="text-sm">Penyedia makanan sehat dan bergizi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />



        {/* News & Events */}
        <NewsSection />

        {/* CTA Section */}
        <section className="bg-primary w-full py-24 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bergabunglah dengan Kami
                </h2>
                <p className="max-w-[600px]">
                  Daftarkan putra-putri Anda untuk mendapatkan pendidikan berkualitas yang mengintegrasikan ilmu agama
                  dan ilmu umum.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Pendaftaran Online
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    Hubungi Kami
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-6">
                  <Calendar className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-bold">Jadwal Pendaftaran</h3>
                  <p className="mt-2 text-primary-foreground/80">
                    Pendaftaran dibuka sepanjang tahun dengan kuota terbatas
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-6">
                  <Award className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-bold">Beasiswa</h3>
                  <p className="mt-2 text-primary-foreground/80">
                    Tersedia beasiswa untuk santri berprestasi dan kurang mampu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hubungi Kami</h2>
              <p className="mt-4 text-muted-foreground">
                Jika Anda memiliki pertanyaan atau ingin informasi lebih lanjut, silakan hubungi kami melalui kontak di
                bawah ini.
              </p>
              <div className="mt-8 grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-muted-foreground">Sukopuro Wetan, Sukonatar, Kec. Srono, Kabupaten Banyuwangi, Jawa Timur 68471</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-muted-foreground">+62 123 4567 890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@darulquran.ac.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Jam Operasional</h3>
                    <p className="text-muted-foreground">Senin - Jumat: 08.00 - 16.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Kirim Pesan</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Isi formulir di bawah ini untuk mengirim pesan kepada kami
              </p>
              <form className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Masukkan alamat email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subjek
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Masukkan subjek pesan"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tulis pesan Anda di sini"
                  />
                </div>
                <Button className="w-full">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

