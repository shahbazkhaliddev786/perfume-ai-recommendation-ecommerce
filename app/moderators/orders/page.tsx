import MainLayout from "@/components/layout/layout";
import Orders from "@/components/admin/orders.tsx/orders";
import ModeratorLayout from "@/components/admin/moderator/layout";

export default function OrdersPage(){
    return (
        <>
            <MainLayout>
                <ModeratorLayout>
                    <Orders />
                </ModeratorLayout>
            </MainLayout>
        </>
    )
}