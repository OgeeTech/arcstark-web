

import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We turn bold ideas into breakthrough digital solutions that push boundaries.",
    },
    {
      icon: Code,
      title: "Expert Development",
      description:
        "Our team crafts clean, scalable code using the latest technologies and best practices.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Agile development processes ensure rapid deployment without compromising quality.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our priority. We collaborate closely to exceed expectations.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white text-black lg:scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card">
            About <span className="text-primary">Arcstark</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We’re a forward-thinking tech company dedicated to building exceptional digital experiences.
            From web applications to mobile solutions, we bring your vision to life with precision and creativity.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Left Column: Vector Image */}
          <div className="md:col-span-2 flex justify-center">
            <img
              src="/img/about.png" // Update this path as needed
              alt="About Arcstark"
              className="w-full max-w-sm md:max-w-full"
            />
          </div>

          {/* Right Column: Features */}
          <div className="md:col-span-3">
            <Card className="shadow-lg bg-background/95 border border-gray-200 rounded-3xl p-8">
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-125" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-primary-600 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* === Statistics Section Start === */}
        <div
          ref={ref}
          className="bg-gray-100 rounded-3xl py-10 px-6 md:px-20 shadow-md mt-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center items-center">
            {[
              { number: 100, suffix: "+", label: "Projects Completed" },
              { number: 50, suffix: "+", label: "Happy Clients" },
              { number: 10, suffix: "+", label: "Team Members" },
              { number: 5, suffix: "+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                {/* Circle with glow effect */}
                <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg">
                  {/* Glowing ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse"></div>

                  <h3 className="relative text-4xl font-bold text-primary z-10">
                    {inView ? <CountUp end={stat.number} duration={2.5} /> : 0}
                    {stat.suffix}
                  </h3>
                </div>

                <h3 className="text-lg font-semibold text-secondary mt-4 text-center">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* === Statistics Section End === */}

      </div>
    </section>
  );
};

export default AboutSection;
