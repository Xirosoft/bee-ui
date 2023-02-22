import { Inter } from "@next/font/google";
import 'nextra-theme-docs/style.css'
import '../../source/beeui.all.scss'
// import '../styles/beeui.all.css'
import '../styles/docs.scss'

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}