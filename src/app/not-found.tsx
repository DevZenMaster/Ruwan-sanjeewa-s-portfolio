'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Ensure the component name is Capitalized (NotFound, not notFound)
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden px-6 text-white font-sans">
      
      {/* Tactical Background HUD */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(85,101,232,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(85,101,232,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="z-10 text-center">
        {/* Error Code */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#5565e8] to-[#18f2e5] tracking-tighter"
        >
          404
        </motion.h1>

        {/* Message Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4"
        >
          <h2 className="text-xl md:text-2xl font-mono text-[#18f2e5] uppercase tracking-[0.3em]">
            Access_Denied // Path_Invalid
          </h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            The requested resource at this endpoint is unavailable or has been relocated to a secure sector.
          </p>
        </motion.div>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-3 bg-[#5565e8] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 uppercase tracking-widest">Initial_Return</span>
            <div className="absolute inset-0 bg-[#18f2e5]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative Console Log */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 hidden md:block">
        <div className="bg-[#5565e810] backdrop-blur-md border border-[#5565e820] rounded-lg p-4 font-mono text-[10px] text-white/40 flex flex-col gap-1">
          <p>[SYSTEM] ERROR: FETCH_FAILED at route_resolve.sys</p>
          <p>[SYSTEM] TRACE: 0x00404_SEC_VIOLATION</p>
          <p>[SYSTEM] STATUS: Redirect_Ready...</p>
        </div>
      </div>
    </main>
  )
}