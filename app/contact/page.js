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
  },
  {
    label: "AI Resume",
    href: "/resumes/Colin_s_AI_Resume.pdf",
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
                <a
                  key={resume.href}
                  href={resume.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border-2 border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  download
                >
                  {resume.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}