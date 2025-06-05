import {
  NAME,
  DESCRIPTION,
  SOCIAL_LINKS,
  QUICK_LINKS,
  CONTACT_INFO,
} from "@/data/personalData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">{NAME}</h3>
              <p className="text-gray-400 leading-relaxed">{DESCRIPTION}</p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${link.colorHover} transition-colors transform hover:scale-110`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {QUICK_LINKS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Location:</span>{" "}
                  {CONTACT_INFO.location}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} {NAME}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;