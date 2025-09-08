
const Hero: React.FC = () => {
  return (
    <section id="inicio" className="gradient-bg min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Impresiones 3D
              <span className="block text-accent-300">Personalizadas</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transformamos tus ideas en realidad con tecnología de impresión 3D de alta calidad. 
              Figuras, vasos, llaveros y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-accent">
                Solicitar Cotización
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver Servicios
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-blue-200">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Soporte</div>
              </div>
            </div>
          </div>

          {/* 3D Model/Image Placeholder */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Modelo 3D</p>
                  <p className="text-sm text-blue-200">Personalizado</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
