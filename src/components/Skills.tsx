import { skillCategories } from "@/data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          {/* Four columns layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-4">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-blue-600"></div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2 group hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
                      >
                        <IconComponent
                          size={20}
                          className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex-shrink-0"
                        />
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;