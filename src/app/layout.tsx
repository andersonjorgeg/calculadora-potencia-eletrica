import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora de Potência Elétrica',
  description: 'Calculadora de Potência Elétrica: Uma ferramenta online para calcular a potência elétrica com base em tensão e corrente. Rápido, fácil e preciso.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptBR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
