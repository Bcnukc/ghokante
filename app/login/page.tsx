// app/login/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Ghokante - The Digital Atheneum",
  description:
    "Access the Ghokante Digital Scholarly Archive. Sign in to explore research, journals, and academic archives.",
};

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* ======================== */}
      {/* Left: Editorial Branding */}
      {/* ======================== */}
      <section className="hidden md:flex md:w-1/2 relative bg-primary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQUmoz8OaWE-cwnFKNKlCA4x0uejqYxcHZIlK-dDEO3MNfCrTnkQ6yqRrwP0t3Lz3evjtNRnKdD0b6mNxhBeAc3jd_qQ7WADUl7ZQcuTGhwAMwkZIo3IE11nNLqWk4QoUItgClF4dawd5a_APAYxissS7JL1beI0bIackBsw0Z4SOLeYhj0wVc6t5K9vPygItZi6zhm_4LQ1Aun_aAmpj_yZhRjEvwjDyU5sK8cPToiwx_C0W14aWlb7vdK-AON2i-64LAepL3gSTI"
            alt="Modern University Library"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 z-10" />

        {/* Content */}
        <div className="relative z-20 p-16 flex flex-col justify-between h-full w-full max-w-2xl">
          <div>
            <Link href="/">
              <span className="font-headline italic font-bold text-3xl text-white tracking-tight">
                Ghokante
              </span>
            </Link>

            <div className="mt-20">
              <h1 className="font-headline text-white text-5xl font-extrabold leading-tight tracking-tight">
                The Digital <br />
                <span className="font-body italic font-light text-primary-fixed">
                  Atheneum.
                </span>
              </h1>
              <p className="mt-8 font-body text-white/80 text-xl leading-relaxed max-w-md">
                Dedicated to the preservation and dissemination of human
                knowledge. Our mission is to bridge the gap between archival
                history and modern research excellence.
              </p>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-primary-fixed/50" />
            <span className="text-xs uppercase tracking-widest text-primary-fixed/70 font-semibold">
              Scholarly Excellence since 2024
            </span>
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* Right: Login Form        */}
      {/* ======================== */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-surface overflow-y-auto">
        <div className="w-full max-w-md space-y-12">
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-8">
            <Link href="/">
              <span className="font-headline italic font-bold text-2xl text-primary">
                Ghokante
              </span>
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">
              Welcome Back
            </h2>
            <p className="font-body text-on-surface-variant text-lg">
              Enter your academic credentials to access the archive.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 ml-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@institution.edu"
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant text-on-surface font-label"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2 ml-1">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-bold text-primary hover:text-primary-container transition-colors tracking-wide"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant text-on-surface font-label"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-5 text-primary focus:ring-primary-container border-outline-variant rounded-md bg-surface-container-low cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm font-medium text-on-surface-variant cursor-pointer"
              >
                Keep me signed in for 30 days
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-surface-variant/50" />
            <span className="flex-shrink mx-4 text-xs font-semibold uppercase tracking-widest text-outline-variant">
              Or sign in with
            </span>
            <div className="flex-grow border-t border-surface-variant/50" />
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 py-3 px-4 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
              <GoogleIcon />
              <span className="text-sm font-semibold text-on-surface">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center space-x-3 py-3 px-4 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
              <FacebookIcon />
              <span className="text-sm font-semibold text-on-surface">
                Facebook
              </span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center pt-4">
            <p className="text-sm text-on-surface-variant font-medium">
              Don&apos;t have an account?
              <Link
                href="/signup"
                className="ml-1 text-primary font-bold hover:underline transition-all"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
