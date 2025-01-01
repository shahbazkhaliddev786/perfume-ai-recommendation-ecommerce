import MainLayout from "@/components/layout/layout";
import Orders from "@/components/admin/orders.tsx/orders";
import AdminLayout from "@/components/admin/layout";

export default function OrdersPage(){
    return (
        <>
            <MainLayout>
                <AdminLayout>
                    <Orders />
                </AdminLayout>
            </MainLayout>
        </>
    )
}