import { Inter, Mitr, Nunito, Roboto_Mono } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: 'swap',
  adjustFontFallback: false,
});

export const mitr = Mitr({
  subsets: ['latin'],
  weight: ["400"],
  display: 'swap',
  adjustFontFallback: false,
});