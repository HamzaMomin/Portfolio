import { ArrowUpRight } from "lucide-react";
import { certifications } from "../../../data/certifications";
import NeoSlider from "../../../shared/components/NeoSlider";
import Section from "../../../shared/components/Section";

export default function CertificationsSection() {
  return (
    <Section
      id="certs"
      subtitle="Certifications"
      className="bg-section-certs text-white"
    >
      <NeoSlider label="certifications">
        {certifications.map((cert) => (
          <article key={cert.id} className="neo-card flex h-full flex-col p-5 text-left">
            <div className="flex h-40 items-center justify-center border-2 border-black bg-white">
              <img
                src={cert.image}
                alt=""
                className="max-h-36 max-w-full object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-black">{cert.title}</h3>
            <a
              href={cert.credly}
              target="_blank"
              rel="noreferrer"
              className="neo-pill mt-5 w-fit gap-1 text-sm"
            >
              Credly
              <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </NeoSlider>
    </Section>
  );
}
