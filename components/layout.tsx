import type { NextPage } from 'next';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

const Layout = ({ title, description, children }: PropsWithChildren<{
    title: string;
    description: string;
  }>) => {
   return ( 
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
        <footer>
            eva denys
        </footer>
    </>
  )
}
 
export default Layout;