import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Center, PlainCard } from '@tincase/ui';

export default function CardDetail() {
  return (
    <Center style={{ flex: 1 }}>
      <PlainCard></PlainCard>
    </Center>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ko', ['common'])),
    id: params?.id,
  },
});
