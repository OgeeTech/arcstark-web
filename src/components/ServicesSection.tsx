// import {
//   Globe,
//   Smartphone,
//   Database,
//   Cloud,
//   Palette,
//   Zap,
// } from "lucide-react";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Globe,
//       title: "Web Development",
//       description:
//         "Custom websites and web applications built with modern frameworks and responsive design.",
//       features: ["React & Next.js", "E-commerce Solutions", "CMS Development"],
//       color: "primary",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Apps",
//       description:
//         "Native and cross-platform mobile applications for iOS and Android devices.",
//       features: ["React Native", "Flutter", "Native Development"],
//       color: "accent",
//     },
//     {
//       icon: Database,
//       title: "Backend Systems",
//       description:
//         "Scalable server architectures, APIs, and database solutions for your applications.",
//       features: ["Node.js & Python", "Database Design", "API Development"],
//       color: "orange",
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Solutions",
//       description:
//         "Cloud infrastructure setup, deployment, and optimization for maximum performance.",
//       features: ["AWS & Azure", "DevOps", "Container Solutions"],
//       color: "purple",
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Design",
//       description:
//         "Beautiful, intuitive interfaces that provide exceptional user experiences.",
//       features: ["User Research", "Prototyping", "Design Systems"],
//       color: "primary",
//     },
//     {
//       icon: Zap,
//       title: "Performance Optimization",
//       description:
//         "Speed up your applications and improve user satisfaction with expert optimization.",
//       features: ["Code Optimization", "Caching Strategies", "Performance Monitoring"],
//       color: "accent",
//     },
//   ];

//   const getColorClasses = (color: string) => {
//     switch (color) {
//       case "primary":
//         return "text-primary bg-primary/10";
//       case "accent":
//         return "text-accent bg-accent/10";
//       case "orange":
//         return "text-orange-500 bg-orange-500/10";
//       case "purple":
//         return "text-purple-500 bg-purple-500/10";
//       default:
//         return "text-primary bg-primary/10";
//     }
//   };

//   return (
//     <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white lg:scroll-mt-20">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="text-primary">Services</span>
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             We offer comprehensive tech solutions to help your business thrive in the digital world.
//           </p>
//         </div>

//         <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14 lg:p-16 border border-muted/30">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {services.map((service, index) => (
//               <div key={index} className="group transition-all duration-500 hover:-translate-y-1">
//                 <div className="mb-4">
//                   <div
//                     className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getColorClasses(
//                       service.color
//                     )}`}
//                   >
//                     <service.icon className="w-7 h-7" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-muted-foreground mt-2 mb-4 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <ul className="space-y-2 text-sm text-muted-foreground">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center">
//                       <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks and responsive design.",
      features: ["React & Next.js", "E-commerce Solutions", "CMS Development"],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Flutter", "Native Development"],
      color: "accent",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description:
        "Scalable server architectures, APIs, and database solutions for your applications.",
      features: ["Node.js & Python", "Database Design", "API Development"],
      color: "orange",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup, deployment, and optimization for maximum performance.",
      features: ["AWS & Azure", "DevOps", "Container Solutions"],
      color: "purple",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that provide exceptional user experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "primary",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your applications and improve user satisfaction with expert optimization.",
      features: ["Code Optimization", "Caching Strategies", "Performance Monitoring"],
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary bg-primary/10";
      case "accent":
        return "text-accent bg-accent/10";
      case "orange":
        return "text-orange-500 bg-orange-500/10";
      case "purple":
        return "text-purple-500 bg-purple-500/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  return (
    <section id="services" className="w-full bg-[#0f172a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            We offer comprehensive tech solutions to help your business thrive in the digital world.
          </p>
        </div>

        <div className="bg-card w-full rounded-3xl p-10 md:p-14 lg:p-16 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getColorClasses(
                      service.color
                    )}`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 mt-2 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
