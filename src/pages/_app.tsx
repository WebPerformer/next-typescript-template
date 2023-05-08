import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// components
import RootLayout from '@/components/Layout'

// context
import { StateContext } from '@/context/StateContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </StateContext>
  )
}
