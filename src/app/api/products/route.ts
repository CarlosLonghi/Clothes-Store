import data from './data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1500)) // fake API response time

  return Response.json(data.products)
}
