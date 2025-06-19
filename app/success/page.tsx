import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-card p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-primary">Thank You!</h1>
        <p className="text-muted-foreground mb-6">
          Your message has been received. I appreciate you reaching out and will get back to you as soon as possible.
        </p>
        <Link href="/" className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 