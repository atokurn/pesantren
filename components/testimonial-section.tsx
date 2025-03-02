import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Tempat pembelajaran agama islam yg berjenjang dr usia dini hingga dewasa... Dari sekolah tk sampai sma...Mencetak generasi bangsa yg berahlakul karimah... Mencetak tahfiz2 muda yg berdasar keaswajaan... Semoga barokah..",
      author: "Edy Susanto",
      role: "Orang Tua Santri",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Saya sangat bersyukur bisa menimba ilmu di pesantren ini. Para ustadz dan ustadzah sangat kompeten dan sabar dalam membimbing kami.",
      author: "Fatimah Azzahra",
      role: "Alumni Santri",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Kurikulum yang diterapkan sangat komprehensif, mengintegrasikan ilmu agama dan ilmu umum dengan baik. Fasilitas juga sangat mendukung proses belajar.",
      author: "Muhammad Rizki",
      role: "Santri Kelas 12",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimoni</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Apa kata mereka tentang pengalaman belajar di lembaga pendidikan kami.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

