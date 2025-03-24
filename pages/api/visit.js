import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { timestamp, userAgent, language } = req.body;
    try {
      const client = await clientPromise;
      const db = client.db('visitorDB');
      await db.collection('visits').insertOne({ timestamp, userAgent, language });
      res.status(200).json({ message: '访客信息已记录' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: '数据库错误' });
    }
  } else {
    res.status(405).json({ error: '方法不允许' });
  }
}
