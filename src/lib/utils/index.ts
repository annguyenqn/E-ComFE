export async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}
export const parseStream = async (stream: ReadableStream<any> | null) => {
  const bodyString = await streamToString(stream);
  return JSON.parse(bodyString);
};

export const isServerSide = () => typeof window === 'undefined';
export const isClientSide = () => Boolean(window);

export * from './shadcnUtils';
