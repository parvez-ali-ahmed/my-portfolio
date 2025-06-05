import { educationInfo, certificationsInfo } from "@/data/educationData";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Education Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                {/* Left: Degree, Institution, Date, GPA */}
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {educationInfo.degree}
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {educationInfo.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated {educationInfo.graduationDate} • GPA: {educationInfo.gpa}
                  </p>
                </div>
                {/* Right: Logo Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {educationInfo.logoText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Relevant Coursework:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {educationInfo.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-500"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Certifications
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {certificationsInfo.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
                  >
                    {/* Logo Badge */}
                    <div className={`w-16 h-16 ${cert.logoBgClass} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{cert.logoText}</span>
                    </div>
                    {/* Title / Subtitle */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;