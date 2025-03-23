
import { useSelector } from "react-redux"
import { selectedProduct } from "../redux/Reducers/productSlice"
import { useParams } from "react-router";
import Footer from "./Footer";
import SingleItem from "./SingleItem";
import ProductDisplay from "./ProductDisplay";
import DescriptionBox from "./DescriptionBox";
import NewCollection from './NewCollection'
import { useEffect } from "react";


export default function SingleProduct() {
    const products = useSelector(selectedProduct);
    const {productId} = useParams()
    const productsFind = products.find((product)=> product.id === Number(productId))

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
    <div className="max-w-7xl mx-auto py-30 px-6" >
      <SingleItem productsFind={productsFind} key={productsFind.id}/>
    <ProductDisplay productsFind={productsFind} />
    <DescriptionBox/>
    <NewCollection/>
    
    </div>
    <Footer/>
        </>
    
  )
}