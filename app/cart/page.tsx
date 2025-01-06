import Cart from "@/components/cart/cart";
import MainLayout from "@/components/layout/layout";

export default function CartPage(){
    return(
        <>
            <MainLayout>
            <section>
                <Cart />
            </section>
            </MainLayout>
                
        </>
    )
}