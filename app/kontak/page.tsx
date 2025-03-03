import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function KontakPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hubungi Kami
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Silakan hubungi kami untuk informasi lebih lanjut
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>
                    Silakan isi formulir di bawah ini untuk mengirim pesan kepada kami
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="nama" className="text-sm font-medium">
                          Nama Lengkap
                        </label>
                        <Input id="nama" placeholder="Masukkan nama lengkap" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Masukkan email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subjek" className="text-sm font-medium">
                        Subjek
                      </label>
                      <Input id="subjek" placeholder="Masukkan subjek pesan" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="pesan" className="text-sm font-medium">
                        Pesan
                      </label>
                      <Textarea
                        id="pesan"
                        placeholder="Tulis pesan Anda di sini"
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button className="w-full">Kirim Pesan</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">Informasi Kontak</h2>
                  <p className="mt-4 text-muted-foreground">
                    Silakan hubungi kami melalui kontak di bawah ini atau kunjungi lokasi kami
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Alamat</h3>
                      <p className="text-muted-foreground">
                        Jl. Pesantren No. 123, Kota Bandung,
                        <br />
                        Jawa Barat 40123
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Telepon</h3>
                      <p className="text-muted-foreground">+62 22 1234567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@pesantren.ac.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Jam Operasional</h3>
                      <p className="text-muted-foreground">
                        Senin - Jumat: 08:00 - 16:00
                        <br />
                        Sabtu: 08:00 - 12:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7171138772659!2d114.2808490608219!3d-8.406228399980089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3fd9e962b396d%3A0x920b528af3183ef4!2sYayasan%20Darul%20Quran%20Sukopuro!5e0!3m2!1sen!2sid!4v1740974385407!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}