import AdminLayout from "@/components/admin/layout";
import MainLayout from "@/components/layout/layout";

export default function DashboardPage(){
    return (
        <>
                <MainLayout>
            <AdminLayout>
                <h2>Dashboard</h2>
            </AdminLayout>
                </MainLayout>
        </>
    )
}