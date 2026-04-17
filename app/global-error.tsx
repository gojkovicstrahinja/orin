"use client";

export const dynamic = "force-dynamic";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-[#080b10] text-[#f9fafb] px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-md transition-colors text-sm"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
