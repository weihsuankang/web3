'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface TraderStats {
  tradeVolume: number;
  averageProfit: number;
  maxDrawdown: number;
  winRate: number;
  totalTrades: number;
}

const TraderDetailPage: React.FC = () => {
  const { id } = useParams();
  const [traderStats, setTraderStats] = useState<TraderStats | null>(null);

  useEffect(() => {
    if (id) {
      // 模擬的交易績效數據
      const mockTraderStats: TraderStats = {
        tradeVolume: 50000,
        averageProfit: 200,
        maxDrawdown: 15,
        winRate: 75,
        totalTrades: 120,
      };
      setTraderStats(mockTraderStats);
    }
  }, [id]);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Trader {id} 的交易績效</h1>
          {traderStats && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl text-indigo-300 mb-4">交易量</h2>
                <p className="text-3xl text-white">${traderStats.tradeVolume}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl text-indigo-300 mb-4">平均收益</h2>
                <p className="text-3xl text-white">${traderStats.averageProfit}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl text-indigo-300 mb-4">最大回撤</h2>
                <p className="text-3xl text-white">{traderStats.maxDrawdown}%</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl text-indigo-300 mb-4">勝率</h2>
                <p className="text-3xl text-white">{traderStats.winRate}%</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl text-indigo-300 mb-4">總交易數</h2>
                <p className="text-3xl text-white">{traderStats.totalTrades}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TraderDetailPage;
