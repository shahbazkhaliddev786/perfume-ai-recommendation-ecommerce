import AdminLayout from "@/components/admin/layout";
import ProductList from "@/components/admin/products/products";
import MainLayout from "@/components/layout/layout";

export default function AdminProductsPage(){
    return (
        <>
            <MainLayout>
                <AdminLayout>
                    <ProductList />
                </AdminLayout>
            </MainLayout>
        </>
    )
}