import { ArrowRight, ShoppingBag } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <img className="hero-logo" src="/judit-white-logo-full.png" alt="Logo Judit White" />
        <p className="eyebrow">Moda femenina | Ropa y accesorios</p>
        <h1>Judit White</h1>
        <p className="hero-lead">Viste con estilo, seguridad y elegancia.</p>
        <p className="hero-description">
          Encuentra prendas modernas, cómodas y versátiles para crear outfits
          únicos para cada ocasión.
        </p>
        <a className="primary-action" href="#categorias">
          <ShoppingBag size={19} aria-hidden="true" />
          Ver catálogo
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>

      <figure className="brand-portrait" id="coleccion">
        <img src="/judit-white-logo-full.png" alt="Logo Judit White" />
        <figcaption>Nueva colección</figcaption>
      </figure>
    </section>
  )
}

export default Hero
