import * as React from 'react'
import Link from 'next/link'

const Header = ({ pathname }) => (
  <header>
    <title>あ茶会</title>
        <meta name="description" content="#あ茶会" />
        <link rel="icon" href="/favicon.ico" />
    {/* <Link href="/">
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>{' '}
    <Link href="/about">
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link> */}
  </header>
)

export default Header
