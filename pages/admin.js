import { useEffect, useState } from 'react';

export default function Admin() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetch('/api/admin/visits')
      .then(res => res.json())
      .then(data => setVisits(data));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>访客记录后台</h1>
      <table border="1" cellPadding="8" style={{ marginTop: '1rem', width: '100%' }}>
        <thead>
          <tr>
            <th>时间</th>
            <th>浏览器</th>
            <th>语言</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((v, i) => (
            <tr key={i}>
              <td>{v.timestamp}</td>
              <td>{v.userAgent}</td>
              <td>{v.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
