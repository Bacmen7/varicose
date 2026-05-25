import type { Metadata } from "next";
import { ChevronRight, MapPin, MessageCircle, Search } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Clinics | Sira Vascular",
  description: "Find a Sira Vascular vein care clinic near you.",
};

type Clinic = {
  area: string;
  name: string;
  address: string;
};

type ClinicRegion = {
  label: string;
  count: string;
  mapUrl: string;
  cities: string[];
  clinics: Clinic[];
};

const regions: ClinicRegion[] = [
  {
    label: "India",
    count: "19 clinics",
    mapUrl: "https://www.google.com/maps?q=India&z=5&output=embed",
    cities: [
      "All Clinics",
      "Hyderabad",
      "Bengaluru",
      "Chennai",
      "Kolkata",
      "Pune",
      "Vijayawada",
      "Ahmedabad",
      "Ludhiana",
      "Vizag",
      "Kochi",
    ],
    clinics: [
      {
        area: "Hyderabad - Banjara Hills",
        name: "Sira Vascular - Banjara Hills",
        address: "Road No. 12, Banjara Hills, Hyderabad 500034",
      },
      {
        area: "Hyderabad - Gachibowli",
        name: "Sira Vascular - Gachibowli",
        address: "Financial District, Gachibowli, Hyderabad 500032",
      },
      {
        area: "Hyderabad - Secunderabad",
        name: "Sira Vascular - Secunderabad",
        address: "MG Road, Secunderabad, Hyderabad 500003",
      },
      {
        area: "Bengaluru - Indiranagar",
        name: "Sira Vascular - Indiranagar",
        address: "100 Feet Road, Indiranagar, Bengaluru 560038",
      },
    ],
  },
  {
    label: "United Kingdom",
    count: "5 clinics",
    mapUrl: "https://www.google.com/maps?q=United+Kingdom&z=6&output=embed",
    cities: ["All Clinics", "London", "Manchester", "Leicester", "York", "Preston"],
    clinics: [
      {
        area: "Leicester",
        name: "UK Vein Care Leicester",
        address: "624 Uppingham Rd, Leicester LE7 9QB",
      },
      {
        area: "Nottingham",
        name: "UK Vein Care Warrington",
        address: "C/O Cheshire Beauty and Wellbeing, Old Alder Ln, Nottingham",
      },
      {
        area: "York",
        name: "UK Vein Care York",
        address: "138 Boroughbridge Rd, York YO26 6AL",
      },
      {
        area: "Preston",
        name: "UK Vein Care Preston",
        address: "228 Garstang Road, Preston PR2 9QB",
      },
      {
        area: "Hertfordshire",
        name: "UK Vein Care Hertfordshire",
        address: "The Coach House, Harpenden AL5 1AJ",
      },
    ],
  },
];

function ClinicCard({ clinic }: { clinic: Clinic }) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinic.name}, ${clinic.address}`,
  )}`;

  return (
    <article className="font-body border-b border-[#d8e7e6] px-5 py-5 last:border-b-0">
      <p className="mb-3 inline-block bg-[#d9edeb] px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-dark">
        {clinic.area}
      </p>
      <h3 className="font-heading text-xl font-medium text-secondary">{clinic.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#657078]">{clinic.address}</p>
      <a
        href={mapLink}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        View clinic <ChevronRight size={16} />
      </a>
    </article>
  );
}

function LocatorPanel({ region }: { region: ClinicRegion }) {
  return (
    <section className="font-body overflow-hidden border border-[#dce8e8] bg-white shadow-[0_1px_5px_rgba(31,59,65,0.04)]">
      <nav className="hidden h-16 items-center gap-7 overflow-hidden border-b border-[#dde7e6] px-5 lg:flex">
        {region.cities.map((city, index) => (
          <span
            key={city}
            className={`shrink-0 text-sm font-semibold ${
              index === 0 ? "text-primary" : "text-[#637278]"
            }`}
          >
            {city}
          </span>
        ))}
      </nav>

      <div className="grid lg:grid-cols-[320px_1fr]">
        <aside className="border-b border-[#dde7e6] bg-white lg:border-b-0 lg:border-r">
          <div className="border-b border-[#dde7e6] px-5 pb-4 pt-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {region.count}
            </p>
            <div className="flex h-12 items-center gap-2 border border-[#dce6e5] bg-[#f9fbfb] px-3 text-[#768286]">
              <Search size={18} />
              <span className="text-sm">Search by city or area...</span>
            </div>
          </div>
          <div className="max-h-[500px] overflow-y-auto">
            {region.clinics.map((clinic) => (
              <ClinicCard key={clinic.name} clinic={clinic} />
            ))}
          </div>
        </aside>

        <div className="relative min-h-[430px] bg-[#d9edf0] sm:min-h-[570px]">
          <iframe
            src={region.mapUrl}
            title={`${region.label} clinics map`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-3 rounded-sm bg-white px-5 py-4 text-sm text-secondary shadow-md">
            <MapPin size={20} className="text-primary" />
            <div>
              <p className="font-semibold">{region.label}</p>
              <p className="text-[#657078]">{region.count}</p>
            </div>
          </div>
          <a
            href="https://wa.me/919833943177"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#1dbf73] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#16aa65]"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ClinicsPage() {
  return (
    <main className="bg-[#fbfcfc]">
      <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-10 sm:px-6 lg:pb-20">
        <div className="mb-9 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Our Clinics
          </p>
          <h1 className="font-heading text-3xl font-normal text-secondary sm:text-4xl lg:text-5xl">
            Find expert vein care near you
          </h1>
        </div>

        <div className="space-y-12">
          {regions.map((region) => (
            <LocatorPanel key={region.label} region={region} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
