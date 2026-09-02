import { redirect } from "next/navigation";
import AdminLoginForm from "../../_components/AdminLoginForm";
import { getAdminUser } from "../../_lib/adminAuth";

export const metadata = {
  title: "Вход в админ-панель — Mebel 95",
};

export default async function AdminLoginPage() {
  const user = await getAdminUser();
  if (user) redirect("/admin");

  return <AdminLoginForm />;
}
