import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('visitorDB');
    const visits = await db.collection('visits').find({}).sort({ timestamp: -1 }).toArray();
    res.status(200).json(visits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '无法获取访客数据' });
  }
}
