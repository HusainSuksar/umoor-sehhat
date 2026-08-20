import { cookies } from 'next/headers';
import { HeartPulse, LogOut } from 'lucide-react';
import { logout } from '@/app/actions/portal';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Await cookies() in Next.js 15+
  const cookieStore = await cookies();
  const role = cookieStore.get('portal_role')?.value;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Portal Header */}
      <header className="bg-emerald-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-800 p-1.5 rounded-lg">
              <HeartPulse className="w-5 h-5 text-emerald-300" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Umoor Sehhat <span className="text-emerald-400 font-medium">| Secure Portal</span>
            </span>
          </div>

          {role && (
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900 px-3 py-1 rounded-full border border-emerald-700">
                {role} mode
              </span>
              <form action={logout}>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 text-sm font-semibold text-emerald-200 hover:text-white transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}