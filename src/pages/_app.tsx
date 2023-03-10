import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import Link from 'next/link'
import { Cart } from '../components/Cart'
import * as Dialog from '@radix-ui/react-dialog'
import { CartCheckout } from '../components/CartCheckout'
import { useRouter } from 'next/router'
import { CartContextProvider } from '../contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <CartContextProvider>
      <Container>
        <Header isRouteSuccess={pathname === '/success'}>
          <Link href={`/`}>
            <Image src={logo} alt="" />
          </Link>
          <Dialog.Root>
            <Dialog.Trigger
              style={{ backgroundColor: 'transparent', border: 0 }}
            >
              <Cart />
            </Dialog.Trigger>
            <CartCheckout />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
