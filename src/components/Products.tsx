
const Products: React.FC = () => {
  const products = [
    {
      category: "Figuras",
      items: [
        { name: "Personajes", price: "Desde $15", image: "🎭" },
        { name: "Animales", price: "Desde $12", image: "🐾" },
        { name: "Objetos", price: "Desde $10", image: "📦" }
      ]
    },
    {
      category: "Vasos",
      items: [
        { name: "Vasos Personalizados", price: "Desde $8", image: "☕" },
        { name: "Tazas Corporativas", price: "Desde $6", image: "🏢" },
        { name: "Vasos Térmicos", price: "Desde $12", image: "🌡️" }
      ]
    },
    {
      category: "Llaveros",
      items: [
        { name: "Llaveros Personalizados", price: "Desde $3", image: "🔑" },
        { name: "Llaveros Corporativos", price: "Desde $2", image: "🏷️" },
        { name: "Llaveros Especiales", price: "Desde $5", image: "✨" }
      ]
    }
  ];

  return (
    <section id="productos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos impresos en 3D con la más alta calidad
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
                {product.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {product.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="bg-white rounded-2xl p-8 text-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                      <div className="text-6xl mb-4">{item.image}</div>
                      <h4 className="text-xl font-display font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-primary-600 font-semibold text-lg mb-4">
                        {item.price}
                      </p>
                      <a href="#contacto" className="btn-primary">
                        Cotizar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Orders Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Pedidos Personalizados
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                ¿No encuentras lo que buscas? ¡No hay problema! Creamos cualquier diseño que tengas en mente. 
                Desde prototipos hasta piezas únicas, hacemos realidad tus ideas más creativas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contacto" className="btn-primary">
                  Solicitar Diseño Personalizado
                </a>
                <a href="https://www.instagram.com/art3ddeco/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Ver en Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
