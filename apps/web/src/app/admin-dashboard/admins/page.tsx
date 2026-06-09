import AdminManager from "./components/AdminManager";

export const metadata = {
  title: 'Manage Admins - CMS',
};

export default function AdminsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2 tracking-tight">Admins</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Manage access to the CMS. You can add new administrators, reset their passwords, or unlock their accounts if they enter the wrong password too many times.
        </p>
      </header>

      <AdminManager />
    </div>
  );
}
