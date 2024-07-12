export async function POST(request: Request) {
  console.log('server nextjs', Date.now());
  const body = await request.json();
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  console.log('called server nestjs', Date.now());

  const authResponse = await result.json();
  return Response.json({
    message: authResponse?.message || authResponse?.errors,
    status: authResponse?.statusCode || authResponse?.code
  });
}
