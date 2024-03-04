
import Hero from "../components/Hero/Hero"
import NewCollections from "../components/NewCollections/NewCollections"
import NewLetter from "../components/NewsLetter/NewLetter"
import Offers from "../components/Offers/Offers"
import Popular from "../components/Popular/Popular"



const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLetter />

    </div>
  )
}

export default Shop