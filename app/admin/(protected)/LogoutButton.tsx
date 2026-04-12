"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/admin/login' })}
      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-error/10 hover:text-error transition-colors font-semibold text-sm text-on-surface-variant"
    >
      <span className="material-symbols-outlined pb-1">logout</span>
      Sign Out
    </button>
  );
}
