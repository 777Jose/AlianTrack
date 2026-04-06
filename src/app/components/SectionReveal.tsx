import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function SectionReveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  )
}
