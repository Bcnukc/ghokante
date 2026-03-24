// components/home/HowItWorks.tsx

const steps = [
  {
    number: 1,
    title: "Search",
    description:
      "Enter your subject or semester to find exact matches from our database.",
  },
  {
    number: 2,
    title: "Find Resources",
    description:
      "Choose from notes, old questions, and solutions curated by top students.",
  },
  {
    number: 3,
    title: "Ace Your Exams",
    description:
      "Study smarter with organized content and hit that 4.0 GPA goal effortlessly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-container rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Steps grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center lg:text-left">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-on-primary-container leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connecting dashed line -- desktop only */}
          <div className="hidden lg:block absolute top-[9.5rem] left-[20%] right-[20%] h-0.5 border-t border-dashed border-on-primary-container/30 z-0" />
        </div>
      </div>
    </section>
  );
}
