import MainLayout from "@/components/layout/layout";
import ProductsFiltering from "@/components/shop-now/products-filtering";

export default function ShopNowPage(){
    return (
        <>
            <MainLayout>
                <section>
                    <ProductsFiltering />
                </section>
            </MainLayout>
        </>
    )
}