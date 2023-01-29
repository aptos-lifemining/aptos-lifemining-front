import type { AppProps } from 'next/app';
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';

import '../styles/globals.css';
import '../public/font/style.css';
declare global {
  interface Window {
    aptos: any;
  }
}

const wallets = [new PetraWallet()];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={false}>
      <Component {...pageProps} />
    </AptosWalletAdapterProvider>
  );
}
