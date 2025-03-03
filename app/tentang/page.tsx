import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TentangPage() {
  const values = [
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Pendidikan Berkualitas",
      description: "Mengintegrasikan kurikulum nasional dengan pendidikan Islam yang komprehensif."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Pembentukan Karakter",
      description: "Membentuk karakter dan akhlak mulia berdasarkan nilai-nilai Islam."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Prestasi Unggul",
      description: "Mendorong santri untuk berprestasi di bidang akademik dan non-akademik."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Kepedulian Sosial",
      description: "Menumbuhkan kepekaan sosial dan semangat berkontribusi pada masyarakat."
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
              Tentang Kami
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Membangun Generasi Qurani yang Berilmu dan Berakhlak Mulia
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image 
                  src="/beranda.jpg" 
                  alt="Sejarah Pesantren"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Sejarah Perjalanan Kami
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Pesantren kami didirikan pada tahun 1985 dengan visi menjadi pusat pendidikan Islam yang unggul dan berwawasan global. Berawal dari sebuah musholla kecil dengan beberapa santri, kini telah berkembang menjadi kompleks pendidikan modern yang melayani ribuan santri.
                  </p>
                  <p>
                    Dalam perjalanannya, pesantren kami terus berinovasi dalam metode pembelajaran dengan tetap mempertahankan nilai-nilai Islam yang fundamental. Kami mengintegrasikan pendidikan agama dengan sains modern, teknologi, dan pengembangan keterampilan.
                  </p>
                  <p>
                    Saat ini, pesantren kami telah meluluskan ribuan alumni yang tersebar di berbagai bidang profesi, baik di dalam maupun luar negeri. Mereka menjadi bukti nyata keberhasilan sistem pendidikan yang kami terapkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Nilai-Nilai Kami
              </h2>
              <p className="mt-4 text-muted-foreground">
                Prinsip-prinsip yang menjadi landasan dalam mendidik dan membentuk karakter santri
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Mission Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visi</h2>
                <p className="text-muted-foreground">
                  Menjadi pusat pendidikan Islam terkemuka yang menghasilkan generasi Qurani, berilmu, dan berwawasan global.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Mengembangkan pendidikan Islam yang modern dan berkualitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Membentuk karakter santri yang berakhlak mulia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Mencetak generasi yang siap menghadapi tantangan global</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Misi</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Menyelenggarakan pendidikan Islam yang mengintegrasikan ilmu agama dan sains modern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Mengembangkan program tahfidz Al-Quran dengan metode yang efektif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Membekali santri dengan keterampilan bahasa Arab dan Inggris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Menerapkan sistem pendidikan yang mendorong kreativitas dan inovasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Membangun kerja sama dengan berbagai institusi pendidikan dalam dan luar negeri</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}