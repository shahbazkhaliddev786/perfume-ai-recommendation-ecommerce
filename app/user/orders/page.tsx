import MainLayout from "@/components/layout/layout";
import Orders from "@/components/admin/orders.tsx/orders";
import UserLayout from "@/components/user/layout";

export default function OrdersPage(){
    return (
        <>
            <MainLayout>
                <UserLayout>
                    <Orders />
                </UserLayout>
            </MainLayout>
        </>
    )
}