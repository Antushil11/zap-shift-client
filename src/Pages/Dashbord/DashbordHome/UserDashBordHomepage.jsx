import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { day: "Mon", value: 10000 },
  { day: "Tue", value: 15000 },
  { day: "Wed", value: 9000 },
  { day: "Thu", value: 15210 },
  { day: "Fri", value: 14000 },
  { day: "Sat", value: 21000 },
  { day: "Sun", value: 8000 },
];

const stats = [
  { label: "To Pay", value: "129", icon: "📦" },
  { label: "Ready Pick UP", value: "1,325", icon: "🚚" },
  { label: "In Transit", value: "50", icon: "🔄" },
  { label: "Ready to Deliver", value: "50", icon: "📍" },
  { label: "Delivered", value: "50", icon: "✅" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 text-sm">
        <p className="text-gray-500 font-medium mb-1">
          {label === "Thu" ? "Sun. Jul 13, 2025" : label}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-400 inline-block"></span>
          <span className="font-semibold text-gray-800">
            ${payload[0].value.toLocaleString()}.00
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const StatCard = ({ label, value, icon, index }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={`bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm border border-gray-100 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium tracking-wide mb-0.5">
          {label}
        </p>
        <p className="text-2xl font-bold text-gray-800 leading-none">{value}</p>
      </div>
    </div>
  );
};

const UserDashBordHomepage = () => {
  const [period, setPeriod] = useState("This Week");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </div>

      {/* Chart Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-800">
            Overall Statistics
          </h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                </svg>
                {period}
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-10 w-36 py-1">
                  {["This Week", "Last Week", "This Month"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setPeriod(opt); setDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        period === opt ? "text-lime-600 font-medium" : "text-gray-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a3e635" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#a3e635" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `$${v / 1000}k`}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#a3e635", strokeWidth: 1.5, strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#84cc16"
              strokeWidth={2.5}
              fill="url(#colorValue)"
              dot={false}
              activeDot={{ r: 5, fill: "#84cc16", strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserDashBordHomepage;