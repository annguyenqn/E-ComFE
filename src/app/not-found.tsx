import { PagePath } from '@/constants';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: PagePath.LOG_IN,
      permanent: true
    }
  };
};
export default function Custom404() {
  return null;
}
