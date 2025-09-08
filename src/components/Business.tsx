import React from 'react';

const Business: React.FC = () => {
  const businessServices = [
    {
      title: "Productos Promocionales",
      description: "Llaveros, vasos y figuras con tu logo para eventos corporativos y promociones.",
      icon: "🎯",
      benefits: ["Alto impacto visual", "Costo-beneficio excelente", "Personalización completa"]
    },
    {
      title: "Regalos Corporativos",
      description: "Productos únicos para clientes, empleados y socios de negocio.",
      icon: "🎁",
      benefits: ["Diseño exclusivo", "Calidad premium", "Embalaje personalizado"]
    },
    {
      title: "Prototipos y Maquetas",
      description: "Desarrollo de prototipos para presentaciones y validación de conceptos.",
      icon: "🔧",
      benefits: ["Rápido desarrollo", "Precisión técnica", "Múltiples iteraciones"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta",
      description: "Analizamos tus necesidades y objetivos del proyecto"
    },
    {
      step: "02", 
      title: "Diseño",
      description: "Creamos el diseño personalizado según tus especificaciones"
    },
    {
      step: "03",
      title: "Producción",
      description: "Fabricamos tus productos con la más alta calidad"
    },
    {
      step: "04",
      title: "Entrega",
      description: "Entregamos tu pedido en tiempo y forma acordados"
    }
  ];

  return (
    <section id="empresas" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Soluciones <span className="text-gradient">Empresariales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impulsa tu marca con productos promocionales únicos y de alta calidad
          </p>
        </div>

        {/* Business Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {businessServices.map((service, index) => (
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
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Nuestro Proceso de Trabajo
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-display font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              ¿Listo para impulsar tu marca?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a crear productos promocionales únicos que destaquen tu marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="btn-primary">
                Solicitar Consulta
              </a>
              <a href="https://www.instagram.com/art3ddeco/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Ver Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
