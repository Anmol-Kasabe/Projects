import styled from "styled-components"
import ImageCarousel from "../components/ImageCarousel"
import ImageOverlay from "../components/ImageOverlay"
import ProductInfo from "../components/ProductInfo"
import { productImages, productThumbnails } from "../assets/imagedata"
import { useGlobalContext } from "../context/context"
import { data } from "../utils/data"
const Product = () => {
  const { showingOverlay } = useGlobalContext()

  return (
    <ProductWrapper>
      <ImageCarousel
        productImages={productImages}
        productThumbnails={productThumbnails}
      />
      {showingOverlay && (
        <ImageOverlay
          productImages={productImages}
          productThumbnails={productThumbnails}
        />
      )}
      <ProductInfo {...data} />
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media only screen and (min-width: 1000px) {
    margin: 0 auto;
    margin-top: 9rem;
    gap: 11rem;
    display: grid;
    grid-template-columns: 44.5rem 44.5rem;
  }
`

export default Product
