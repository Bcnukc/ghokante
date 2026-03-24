// components/home/Newsletter.tsx
"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      // TODO: Replace with actual Django API call
      // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe/`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // if (!res.ok) throw new Error('Failed');

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold font-headline text-primary mb-4">
            Never miss an update
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10">
            Get the latest past questions, routine updates, and study resources
            delivered straight to your inbox.
          </p>

          {status === "success" ? (
            <div className="max-w-lg mx-auto bg-green-50 text-green-700 p-4 rounded-xl font-semibold flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              You&apos;re subscribed! Check your inbox.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="flex-grow px-6 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-secondary transition-all outline-none disabled:opacity-50"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="academic-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-sm">
                      progress_activity
                    </span>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-error text-sm mt-4 font-medium">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-[10px] text-outline mt-6 uppercase tracking-widest font-bold">
            Join 15,000+ active scholars
          </p>
        </div>
      </div>
    </section>
  );
}
