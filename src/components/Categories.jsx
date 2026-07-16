import {
  BadgePercent,
  BriefcaseBusiness,
  Footprints,
  Glasses,
  Handbag,
  Shirt,
  Sparkles,
  Venus,
} from 'lucide-react'

const categories = [
  { name: 'Blusas', icon: Shirt },
  { name: 'Vestidos', icon: Venus },
  { name: 'Pantalones', icon: Sparkles },
  { name: 'Conjuntos', icon: Glasses },
  { name: 'Bolsos', icon: Handbag },
  { name: 'Accesorios', icon: BriefcaseBusiness },
  { name: 'Calzado', icon: Footprints },
  { name: 'Promociones', icon: BadgePercent },
]

function Categories() {
  return (
    <section className="section-block categories-block" id="categorias" aria-labelledby="categories-title">
      <div className="section-heading">
        <p className="section-kicker">Boutique</p>
        <h2 id="categories-title">Explora por estilo</h2>
      </div>

      <div className="category-grid">
        {categories.map(({ name, icon: Icon }) => (
          <a className="category-card" href="#contacto" key={name}>
            <Icon size={21} aria-hidden="true" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories
