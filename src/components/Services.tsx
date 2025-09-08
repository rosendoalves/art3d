import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🎨",
      title: "Figuras Personalizadas",
      description: "Creamos figuras únicas según tus especificaciones. Desde personajes hasta objetos decorativos.",
      features: ["Diseño personalizado", "Múltiples materiales", "Colores vibrantes"]
    },
    {
      icon: "☕",
      title: "Vasos Personalizados",
      description: "Vasos con diseños únicos, perfectos para regalos corporativos o personales.",
      features: ["Diseño corporativo", "Resistente al calor", "Lavable"]
    },
    {
      icon: "🔑",
      title: "Llaveros Personalizados",
      description: "Llaveros con tu logo o diseño personalizado. Ideales para promoción empresarial.",
      features: ["Logo personalizado", "Materiales duraderos", "Bajo costo"]
    },
    {
      icon: "🏢",
      title: "Servicios Empresariales",
      description: "Soluciones completas para empresas con branding personalizado y productos promocionales.",
      features: ["Branding corporativo", "Volúmenes grandes", "Entrega rápida"]
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de impresión 3D para satisfacer todas tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para una cotización personalizada y descubre cómo podemos hacer realidad tu idea
            </p>
            <a href="#contacto" className="btn-primary">
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
