"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-background to-muted text-foreground relative overflow-hidden">
      {/* Soft animated background blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-secondary/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/404.png"
            alt="404 Not Found"
            width={400}
            height={400}
            className="rounded-2xl drop-shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl sm:text-7xl font-extrabold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground mb-8"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
          >
            Go Home
          </Link>

          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted hover:scale-105 transition-all shadow-md"
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
