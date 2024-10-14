'use client';

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
    const mockData: Trader[] = [
      { id: 1, name: 'Trader A', winRate: 75, profit: 1500 },
      { id: 2, name: 'Trader B', winRate: 65, profit: 1200 },
      { id: 3, name: 'Trader C', winRate: 85, profit: 1800 },
    ];
    setTraders(mockData);
  }, []);

  return (
    <section className="bg-[#0B1120] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col px-4 py-6">
          <div className="overflow-x-auto pb-4">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden border border-gray-700 rounded-lg">
                <table className="table-auto min-w-full rounded-xl">
                  <thead className="bg-gradient-to-r from-gray-800 to-indigo-500 text-indigo-200">
                    <tr>
                      <th className="p-5 text-left whitespace-nowrap text-sm font-semibold">
                        名次
                      </th>
                      <th className="p-5 text-left whitespace-nowrap text-sm font-semibold">
                        名稱
                      </th>
                      <th className="p-5 text-center whitespace-nowrap text-sm font-semibold">
                        勝率 (%)
                      </th>
                      <th className="p-5 text-center whitespace-nowrap text-sm font-semibold">
                        收益 (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {traders.map((trader, index) => (
                      <tr
                        key={trader.id}
                        className="bg-gray-800 hover:bg-indigo-500 transition-all duration-500"
                      >
                        <td className="p-5 whitespace-nowrap text-sm text-gray-300">
                          {index + 1}
                        </td>
                        <td className="p-5 whitespace-nowrap text-sm text-gray-300">
                          {trader.name}
                        </td>
                        <td className="p-5 text-center whitespace-nowrap text-sm text-gray-300">
                          {trader.winRate}%
                        </td>
                        <td className="p-5 text-center whitespace-nowrap text-sm text-gray-300">
                          ${trader.profit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraderPerformancePage;

