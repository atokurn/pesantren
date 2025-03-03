"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { submitToGoogleSheets } from "@/lib/google-sheets"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "lucide-react"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const formSchema = z.object({
  namaLengkap: z.string().min(3, { message: "Nama lengkap harus diisi" }),
  tempatLahir: z.string().min(2, { message: "Tempat lahir harus diisi" }),
  tanggalLahir: z.date({ required_error: "Tanggal lahir harus diisi" }),
  jenisKelamin: z.enum(["L", "P"], { required_error: "Jenis kelamin harus dipilih" }),
  alamat: z.string().min(10, { message: "Alamat harus diisi minimal 10 karakter" }),
  telepon: z.string().min(10, { message: "Nomor telepon harus valid" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  namaAyah: z.string().min(3, { message: "Nama ayah harus diisi" }),
  namaIbu: z.string().min(3, { message: "Nama ibu harus diisi" }),
  teleponOrtu: z.string().min(10, { message: "Nomor telepon orang tua harus valid" }),
  asalSekolah: z.string().min(3, { message: "Asal sekolah harus diisi" }),
  program: z.string({ required_error: "Program harus dipilih" }),
  setuju: z.boolean().refine((val) => val === true, { message: "Anda harus menyetujui syarat dan ketentuan" })
})

export default function PendaftaranPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      setuju: false,
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitMessage(null)
    console.log(values)
    
    try {
      // Submit form data to Google Sheets
      const result = await submitToGoogleSheets(values)
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message })
        form.reset()
      } else {
        setSubmitMessage({ type: 'error', text: result.message })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage({ 
        type: 'error', 
        text: 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formulir Pendaftaran</h1>
            <p className="mt-4 text-muted-foreground">
              Silakan lengkapi formulir pendaftaran di bawah ini dengan data yang benar
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Pendaftaran</CardTitle>
              <CardDescription>
                Mohon isi semua field yang ditandai dengan tanda bintang (*)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Data Pribadi</h3>
                    <FormField
                      control={form.control}
                      name="namaLengkap"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Lengkap *</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan nama lengkap" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="tempatLahir"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tempat Lahir *</FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan tempat lahir" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tanggalLahir"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tanggal Lahir *</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={"w-full pl-3 text-left font-normal"}
                                  >
                                    {field.value ? (
                                      format(field.value, "dd MMMM yyyy")
                                    ) : (
                                      <span>Pilih tanggal</span>
                                    )}
                                    <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="jenisKelamin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jenis Kelamin *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-4"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="L" />
                                </FormControl>
                                <FormLabel className="font-normal">Laki-laki</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="P" />
                                </FormControl>
                                <FormLabel className="font-normal">Perempuan</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="alamat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alamat Lengkap *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Masukkan alamat lengkap"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="telepon"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nomor Telepon *</FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan nomor telepon" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan alamat email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Data Orang Tua</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="namaAyah"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Ayah *</FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan nama ayah" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="namaIbu"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Ibu *</FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan nama ibu" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="teleponOrtu"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor Telepon Orang Tua *</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan nomor telepon orang tua" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Data Pendidikan</h3>
                    <FormField
                      control={form.control}
                      name="asalSekolah"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asal Sekolah *</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan nama sekolah asal" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program yang Dipilih *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih program pendidikan" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="pesantren_putra">Pesantren Putra</SelectItem>
                              <SelectItem value="pesantren_putri">Pesantren Putri</SelectItem>
                              <SelectItem value="mi">Madrasah Ibtidaiyah</SelectItem>
                              <SelectItem value="mts">Madrasah Tsanawiyah</SelectItem>
                              <SelectItem value="ma">Madrasah Aliyah</SelectItem>
                              <SelectItem value="tahfidz">Program Tahfidz</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="setuju"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Saya menyatakan bahwa data yang diisi adalah benar dan setuju dengan syarat dan
                            ketentuan yang berlaku *
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {submitMessage && (
                    <div className={`p-4 mb-4 rounded-md ${
                      submitMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 
                      'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitMessage.text}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}