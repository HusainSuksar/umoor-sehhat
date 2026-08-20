import { ShieldCheck, UserCog, Stethoscope } from 'lucide-react';
import { demoLogin } from '@/app/actions/portal';

export default function PortalLogin() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 via-slate-50 to-slate-50">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">Portal Access</h1>
          <p className="text-sm text-slate-500 mt-2">Select a demo role to proceed into the secured dashboard.</p>
        </div>

        <div className="space-y-4">
          <form action={demoLogin.bind(null, 'doctor')}>
            <button type="submit" className="w-full flex items-center p-4 border border-slate-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Stethoscope className="w-5 h-5 text-slate-600 group-hover:text-emerald-700" />
              </div>
              <div className="ml-4 text-left">
                <span className="block font-bold text-slate-900 group-hover:text-emerald-900">Doctor Login</span>
                <span className="block text-xs text-slate-500">Submit articles & media</span>
              </div>
            </button>
          </form>

          <form action={demoLogin.bind(null, 'admin')}>
            <button type="submit" className="w-full flex items-center p-4 border border-slate-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <UserCog className="w-5 h-5 text-slate-600 group-hover:text-emerald-700" />
              </div>
              <div className="ml-4 text-left">
                <span className="block font-bold text-slate-900 group-hover:text-emerald-900">Admin Login</span>
                <span className="block text-xs text-slate-500">Review & approve submissions</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}