import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Play } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GaleriPage() {
  const photos = [
    {
      src: "/beranda.jpg",
      alt: "Kegiatan Belajar",
      caption: "Suasana belajar di kelas"
    },
    {
      src: "/masjid.jpg",
      alt: "Masjid Pesantren",
      caption: "Kegiatan sholat berjamaah"
    },
    {
      src: "/perpus.jpg",
      alt: "Perpustakaan",
      caption: "Aktivitas di perpustakaan"
    },
    {
      src: "/lab.jpg",
      alt: "Laboratorium",
      caption: "Praktikum di laboratorium"
    },
    {
      src: "/lapangan.jpg",
      alt: "Lapangan Olahraga",
      caption: "Kegiatan olahraga santri"
    },
    {
      src: "/asrama.jpg",
      alt: "Asrama",
      caption: "Asrama santri"
    }
  ]

  const videos = [
    {
      thumbnail: "/beranda.jpg",
      title: "Profil Pesantren",
      duration: "5:30",
      url: "#"
    },
    {
      thumbnail: "/masjid.jpg",
      title: "Kegiatan Tahfidz",
      duration: "3:45",
      url: "#"
    },
    {
      thumbnail: "/perpus.jpg",
      title: "Wisuda Santri",
      duration: "7:20",
      url: "#"
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
              Galeri
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Dokumentasi kegiatan dan kehidupan di pesantren kami
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="photos" className="space-y-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="photos">Foto</TabsTrigger>
                <TabsTrigger value="videos">Video</TabsTrigger>
              </TabsList>

              <TabsContent value="photos">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {photos.map((photo, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              className="object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground">{photo.caption}</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogTitle className="sr-only">{photo.caption}</DialogTitle>
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-center mt-4">{photo.caption}</p>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {videos.map((video, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative aspect-video group cursor-pointer">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-sm rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{video.title}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}