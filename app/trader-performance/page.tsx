"use client"; // 告訴 Next.js 這是客戶端組件

import React, { useState, useEffect } from 'react';

interface Trader {
  id: number;
  name: string;
  winRate: number;
  profit: number;
}

const TraderPerformancePage: React.FC = () => {
  const [traders, setTraders] = useState<Trader[]>([]);

  useEffect(() => {
    // 模擬數據
    const mockData: Trader[] = [
      { id: 1, name: 'Trader A', winRate: 75, profit: 1500 },
      { id: 2, name: 'Trader B', winRate: 65, profit: 1200 },
      { id: 3, name: 'Trader C', winRate: 85, profit: 1800 },
    ];
    setTraders(mockData);
  }, []);

  return (
    <div>
      <h1>帶單員績效排行榜</h1>
      <table>
        <thead>
          <tr>
            <th>名次</th>
            <th>名稱</th>
            <th>勝率 (%)</th>
            <th>收益 (USD)</th>
          </tr>
        </thead>
        <tbody>
          {traders.map((trader, index) => (
            <tr key={trader.id}>
              <td>{index + 1}</td>
              <td>{trader.name}</td>
              <td>{trader.winRate}</td>
              <td>{trader.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraderPerformancePage;
