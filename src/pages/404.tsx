import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { Layout } from '@/components';
import pageNotFound from '../assets/images/404.svg';
import { Button } from '@chakra-ui/react';

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default function Custom404() {
  return (
    <>
      <Head>
        <title>網頁不存在</title>
      </Head>
      <div className="flex h-full flex-col items-center justify-center gap-y-3 pt-2">
        <Image src={pageNotFound} alt="網頁不存在"></Image>
        <Link passHref href="/">
          <Button as="a" colorScheme="primary">
            回首頁
          </Button>
        </Link>
      </div>
    </>
  );
}

Custom404.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
