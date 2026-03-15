"use client";

const CONTACT_LINKS = [
  {
    href: "mailto:colinkwon914@gmail.com",
    label: "Professional Email",
    value: "colinkwon914@gmail.com",
  },
  {
    href: "mailto:colink5@uci.edu",
    label: "School Email",
    value: "colink5@uci.edu",
  },
  {
    href: "https://www.linkedin.com/in/colin-kwon-22a190324/",
    label: "LinkedIn",
    value: "linkedin.com/in/colin-kwon-22a190324",
    isExternal: true,
  },
  {
    href: "https://github.com/Cobby914",
    label: "GitHub",
    value: "github.com/Cobby914",
    isExternal: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full min-w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Contact
            </p>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {CONTACT_LINKS.map(({ href, label, value, isExternal }) => (
                <a
                key={href}
                href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                className="text-sm text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                  <span className="font-semibold">{label}:</span> {value}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-500">
              © {currentYear} Colin Kwon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
