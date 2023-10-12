import '@/styles/globals.css'
import '@/styles/main.scss'
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
