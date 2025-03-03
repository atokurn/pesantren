"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, Clock, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Program Pendidikan
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Program pendidikan komprehensif untuk mengembangkan potensi akademik dan spiritual
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="pesantren" className="space-y-8">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3">
                <TabsTrigger value="pesantren">Pondok Pesantren</TabsTrigger>
                <TabsTrigger value="sekolah">Sekolah Formal</TabsTrigger>
                <TabsTrigger value="tahfidz">Program Tahfidz</TabsTrigger>
              </TabsList>

              <TabsContent value="pesantren" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pesantren Putra</CardTitle>
                      <CardDescription>Program pendidikan pesantren khusus santri putra</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Pesantren Putra"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Pesantren Putri</CardTitle>
                      <CardDescription>Program pendidikan pesantren khusus santri putri</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Pesantren Putri"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Program Intensif</CardTitle>
                      <CardDescription>Program khusus dengan fokus pendalaman ilmu agama</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Program Intensif"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sekolah" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Madrasah Ibtidaiyah</CardTitle>
                      <CardDescription>Setara dengan Sekolah Dasar (SD)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Madrasah Ibtidaiyah"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Madrasah Tsanawiyah</CardTitle>
                      <CardDescription>Setara dengan Sekolah Menengah Pertama (SMP)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Madrasah Tsanawiyah"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Madrasah Aliyah</CardTitle>
                      <CardDescription>Setara dengan Sekolah Menengah Atas (SMA)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Madrasah Aliyah"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tahfidz" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tahfidz Reguler</CardTitle>
                      <CardDescription>Program menghafal Al-Qur'an reguler</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Tahfidz Reguler"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tahfidz Intensif</CardTitle>
                      <CardDescription>Program menghafal Al-Qur'an intensif</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Tahfidz Intensif"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tahfidz & Bahasa</CardTitle>
                      <CardDescription>Program menghafal Al-Qur'an dengan penguatan bahasa</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src="/beranda.jpg"
                          alt="Tahfidz & Bahasa"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2">
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
                      <Button className="w-full">Daftar Sekarang</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}