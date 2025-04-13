import clientPromise from '@/utils/mongodb';

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(); // you can also specify db name like client.db("credentialsApp")

    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and Email required" }), {
        status: 400,
      });
    }

    const result = await db.collection('users').insertOne({ name, email });

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 201,
    });

  } catch (err) {
    console.error('API Error:', err.message);
    return new Response(JSON.stringify({ error: 'Server Error' }), { status: 500 });
  }
}




