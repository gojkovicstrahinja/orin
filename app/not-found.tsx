export const dynamic = "force-dynamic";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080b10] text-[#f9fafb] px-6">
      <div className="text-center">
        <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-[#9ca3af] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-md transition-colors text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
