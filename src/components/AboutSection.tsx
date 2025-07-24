// import { Card, CardContent } from "@/components/ui/card";
// import { Code, Lightbulb, Rocket, Users } from "lucide-react";

// const AboutSection = () => {
//   const features = [
//     {
//       icon: Lightbulb,
//       title: "Innovation First",
//       description: "We turn bold ideas into breakthrough digital solutions that push boundaries."
//     },
//     {
//       icon: Code,
//       title: "Expert Development",
//       description: "Our team crafts clean, scalable code using the latest technologies and best practices."
//     },
//     {
//       icon: Rocket,
//       title: "Fast Delivery",
//       description: "Agile development processes ensure rapid deployment without compromising quality."
//     },
//     {
//       icon: Users,
//       title: "Client-Focused",
//       description: "Your success is our priority. We collaborate closely to exceed expectations."
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             About <span className="text-primary">Arcstark</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We're a forward-thinking tech company dedicated to building exceptional digital experiences. 
//             From web applications to mobile solutions, we bring your vision to life with precision and creativity.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <Card key={index} className="group hover:shadow-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
//               <CardContent className="p-8 text-center">
//                 <div className="mb-6 relative">
//                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
//                     <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Stats section */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { number: "150+", label: "Projects Completed" },
//             { number: "50+", label: "Happy Clients" },
//             { number: "5+", label: "Years Experience" },
//             { number: "24/7", label: "Support Available" }
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
//               <div className="text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const AboutSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
        <div className="bg-gray-100 rounded-3xl py-10 px-6 md:px-20 shadow-md">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center items-center">
            <div>
              <h3 className="text-4xl font-bold text-primary">100+</h3>
              <p className="text-sm text-gray-700 mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">50+</h3>
              <p className="text-sm text-gray-700 mt-2">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="text-sm text-gray-700 mt-2">Team Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">5+</h3>
              <p className="text-sm text-gray-700 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
        {/* === Statistics Section End === */}
      </div>
    </section>
  );
};

export default AboutSection;
