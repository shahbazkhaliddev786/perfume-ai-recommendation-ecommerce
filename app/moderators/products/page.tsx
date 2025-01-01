import ModeratorLayout from "@/components/admin/moderator/layout";
import ProductList from "@/components/admin/products/products";
import MainLayout from "@/components/layout/layout";

export default function AdminProductsPage(){
    return (
        <>
            <MainLayout>
                <ModeratorLayout>
                    <ProductList />
                </ModeratorLayout>
            </MainLayout>
        </>
    )
}