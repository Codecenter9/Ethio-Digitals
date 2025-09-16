// app/admin/layout.tsx
import "../../../styles/globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        {/* Wrap the AuthProvider around the content */}
        <AuthProvider>
          <AdminAuthWrapper>{children}</AdminAuthWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
