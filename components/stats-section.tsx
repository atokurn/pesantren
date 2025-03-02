import { Users, BookOpen, Award, School } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      value: "1500+",
      label: "Santri Aktif",
      icon: Users,
      description: "Dari berbagai daerah di Indonesia",
    },
    {
      value: "100+",
      label: "Tenaga Pengajar",
      icon: BookOpen,
      description: "Ustadz dan guru profesional",
    },
    {
      value: "35+",
      label: "Tahun Pengalaman",
      icon: School,
      description: "Mendidik generasi bangsa",
    },
    {
      value: "250+",
      label: "Penghargaan",
      icon: Award,
      description: "Prestasi akademik dan non-akademik",
    },
  ]

  return (
    <section className="bg-muted w-full py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center p-8 bg-background border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-4 text-primary">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-4xl font-bold tracking-tight">{stat.value}</h3>
              <p className="mt-2 font-medium text-lg">{stat.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

