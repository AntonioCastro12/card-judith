import { ArrowRight, ShoppingBag } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <div className="hero-logo-frame">
          <img className="hero-logo" src="/judit-white-logo-full.png" alt="Logo Judit White" />
        </div>

        <p className="eyebrow">Moda femenina</p>
        <p className="hero-category">Ropa y accesorios</p>
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

      <figure className="brand-portrait" id="coleccion" aria-label="Nueva colección Judit White">
        <img src="/judit-white-logo-full.png" alt="Logo Judit White" />
        <figcaption>
          <span>Nueva colección</span>
          <strong>Looks con presencia</strong>
        </figcaption>
      </figure>
    </section>
  )
}

export default Hero
