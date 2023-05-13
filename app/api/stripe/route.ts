import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    
    const res = await fetch(`https://api.stripe.com/v1/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_PRIVATE_KEY!}`,
      }
    });
    const products = await res.json();
    
    return NextResponse.json(products, { status: 200 });
}