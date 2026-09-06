import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi website ${business.name}: bagaimana data pengunjung ditangani saat Anda menggunakan website dan menghubungi kami.`,
  path: "/kebijakan-privasi",
});

export default function KebijakanPrivasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Kebijakan Privasi" }]} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
        Kebijakan Privasi
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Terakhir diperbarui: September 2026
      </p>

      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-foreground">
            Ringkasannya
          </h2>
          <p className="mt-2">
            Website ini adalah referensi tipe aki dan halaman informasi layanan dari{" "}
            {business.name}. Kami tidak meminta Anda membuat akun, tidak
            menjalankan keranjang belanja, dan tidak menerima pembayaran
            melalui website ini. Komunikasi terjadi langsung melalui WhatsApp,
            telepon, atau kunjungan langsung ke bengkel kami.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-foreground">
            Data yang Kami Terima
          </h2>
          <p className="mt-2">
            Saat Anda menghubungi kami melalui WhatsApp atau telepon, data yang
            sampai kepada kami adalah data kontak yang Anda kirimkan sendiri
            (nama dan nomor WhatsApp/telepon) beserta isi percakapan. Data ini
            kami gunakan hanya untuk menjawab pertanyaan Anda dan keperluan
            komunikasi layanan.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-foreground">
            Cookies dan Analitik
          </h2>
          <p className="mt-2">
            Website ini dapat menggunakan cookie teknis yang diperlukan agar
            halaman berfungsi dengan baik. Jika di kemudian hari kami memasang
            alat analitik, kebijakan ini akan diperbarui dan Anda akan dapat
            melihat penjelasannya di halaman ini.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-foreground">
            Pihak Ketiga
          </h2>
          <p className="mt-2">
            Halaman ini menampilkan peta dari Google Maps. Saat peta dimuat,
            Google dapat menerima data seperti alamat IP Anda sesuai kebijakan
            privasi Google. Tautan WhatsApp juga membuka aplikasi WhatsApp,
            yang penggunaannya tunduk pada kebijakan privasi WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-foreground">
            Keamanan dan Retensi
          </h2>
          <p className="mt-2">
            Percakapan WhatsApp disimpan di perangkat komunikasi kami selama
            masih diperlukan untuk melayani Anda, termasuk keperluan garansi
            layanan yang pernah Anda gunakan.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold tracking-tight text-foreground">
            Kontak
          </h2>
          <p className="mt-2">
            Ada pertanyaan tentang kebijakan ini? Hubungi kami di{" "}
            {business.phoneDisplay} atau kunjungi {business.address}.
          </p>
        </section>
      </div>
    </div>
  );
}
