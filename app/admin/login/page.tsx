"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
      setLoading(false);
    } else {
      toast.success("Login successful");
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <Toaster position="top-center" />
      <div className="max-w-md w-full bg-surface-container-lowest rounded-3xl p-10 shadow-2xl border border-outline-variant/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">admin_panel_settings</span>
          </div>
          <h1 className="font-headline text-3xl font-bold text-primary mb-2">Admin Portal</h1>
          <p className="text-sm text-on-surface-variant font-body">Sign in to manage appointments</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-0 focus:border-b-2 focus:border-primary transition-all text-sm"
              placeholder="admin@brahmasutra.com"
              required 
            />
          </div>
          <div>
            <label className="block text-xs font-bold font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-0 focus:border-b-2 focus:border-primary transition-all text-sm"
              placeholder="••••••••"
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-container text-on-primary py-4 rounded-xl font-bold transition-all disabled:opacity-70 mt-4"
          >
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
