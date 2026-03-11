import AppShell from "@/components/AppShell";
import ContactMethods from "@/components/contact/ContactMethods";

export const metadata = {
  title: "Contact | Colin Kwon",
  description: "Contact Colin Kwon for professional, school, and collaboration inquiries.",
};

const textShadow = "0 1px 3px rgba(0,0,0,0.8)";
const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

const CONTACT_METHODS = [
  {
    label: "Professional",
    value: "colinkwon914@gmail.com",
    type: "email",
  },
  {
    label: "School",
    value: "colink5@uci.edu",
    type: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/colin-kwon-22a190324",
    href: "https://www.linkedin.com/in/colin-kwon-22a190324/",
    type: "link",
  },
  {
    label: "GitHub",
    value: "github.com/Cobby914",
    href: "https://github.com/Cobby914",
    type: "link",
  },
];

const RESUMES = [
  {
    label: "Software Engineering Resume",
    href: "/resumes/Colin_s_SWE_Resume.pdf",
    previewTitle: "SWE Resume Preview",
  },
  {
    label: "AI Resume",
    href: "/resumes/Colin_s_AI_Resume.pdf",
    previewTitle: "AI Resume Preview",
  },
];

export default function ContactPage() {
  return (
    <AppShell
      backgroundImage="/images/contact-background.png"
      backgroundSize="cover"
      backgroundPosition="center"
      showNoiseOverlay={false}
    >
      <section className="relative flex min-h-screen items-center px-6 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/15 bg-black/45 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
          <h1
            className="text-3xl font-bold text-white sm:text-4xl"
            style={{ textShadow }}
          >
            Contact Me
          </h1>
          <p
            className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg"
            style={{ textShadow: textShadowSoft }}
          >
            Click an email to copy it, or open LinkedIn/GitHub directly.
          </p>

          <ContactMethods methods={CONTACT_METHODS} />

          <div className="mt-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl" style={{ textShadow }}>
              Resumes
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {RESUMES.map((resume) => (
                <div key={resume.href} className="relative group">
                  <a
                    href={resume.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border-2 border-white px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/10 hover:shadow-2xl"
                    download
                  >
                    {resume.label}
                  </a>

                  {/* Desktop hover preview */}
                  <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-50 mb-3 hidden w-[320px] -translate-x-1/2 translate-y-2 scale-95 rounded-xl border border-white/20 bg-black/90 p-2 opacity-0 shadow-2xl transition-all duration-250 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 md:block">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                      {resume.previewTitle}
                    </p>
                    <div className="h-[420px] overflow-hidden rounded-md border border-white/15 bg-white">
                      <iframe
                        src={`${resume.href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={resume.previewTitle}
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}