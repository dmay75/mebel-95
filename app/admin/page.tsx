import AdminDashboard from "../_components/AdminDashboard";
import { requireAdminUser } from "../_lib/adminAuth";

export const metadata = {
  title: "Админ-панель — Mebel 95",
};

export default async function AdminPage() {
  const user = await requireAdminUser();
  return <AdminDashboard adminEmail={user.email} />;
}
