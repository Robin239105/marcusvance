import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? false : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -72px 0px' }}
      transition={{
        duration: reduce ? 0 : 0.78,
        ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
