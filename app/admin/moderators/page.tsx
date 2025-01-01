import AdminLayout from "@/components/admin/layout";
import ModeratorList from "@/components/admin/moderator/moderators";
import MainLayout from "@/components/layout/layout";

export default function ModeratorsPage(){
    return (
        <>
            <MainLayout>
                <AdminLayout>
                    <ModeratorList />
                </AdminLayout>
            </MainLayout>
        </>
    )
}