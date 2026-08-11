import React, { useState, useEffect } from 'react';
import { 
  X, Play, RefreshCw, Terminal, Database, Send, Server, CheckCircle2, AlertCircle, Copy, Check, Sparkles,
  ShoppingCart, Calculator, Receipt, Users, DollarSign, Plus, Minus, Trash2, ExternalLink
} from 'lucide-react';
import { ProjectItem } from '../types';

interface SubAppDemoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const SubAppDemoModal: React.FC<SubAppDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Interactive state for API Tester Demo
  const [apiMethod, setApiMethod] = useState<'GET' | 'POST' | 'PUT'>('GET');
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/telemetry/metrics');
  const [apiLoading, setApiLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>({
    status: 200,
    statusText: 'OK',
    latency_ms: 3.4,
    data: {
      activeNodes: 12,
      cpu_load_avg: [0.42, 0.38, 0.35],
      memory_usage_mb: 1420,
      postgres_queries_sec: 480
    }
  });

  // Interactive state for SQL Runner Demo
  const [sqlQuery, setSqlQuery] = useState('SELECT user_id, action, ip_address, created_at FROM audit_logs WHERE action = \'LOGIN\' ORDER BY created_at DESC LIMIT 5;');
  const [sqlLoading, setSqlLoading] = useState(false);
  const [sqlResults, setSqlResults] = useState([
    { user_id: 104, action: 'LOGIN', ip_address: '192.168.1.42', created_at: '2026-08-10 21:44:12' },
    { user_id: 88, action: 'LOGIN', ip_address: '10.0.0.15', created_at: '2026-08-10 21:40:02' },
    { user_id: 201, action: 'LOGIN', ip_address: '172.16.0.8', created_at: '2026-08-10 21:38:19' },
  ]);

  // Interactive state for System Monitor Demo
  const [cpuUsage, setCpuUsage] = useState(38);
  const [ramUsage, setRamUsage] = useState(62);
  const [netSpeed, setNetSpeed] = useState(14.8);

  // Auto tick for system monitor
  useEffect(() => {
    if (project.subAppDemo?.type === 'system-monitor') {
      const interval = setInterval(() => {
        setCpuUsage(Math.floor(25 + Math.random() * 35));
        setRamUsage(Math.floor(55 + Math.random() * 15));
        setNetSpeed(parseFloat((10 + Math.random() * 12).toFixed(1)));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [project]);

  // Interactive state for Log Streamer Demo
  const [logs, setLogs] = useState([
    '[21:47:01] INFO  [nexus_api] Received GET /api/v1/health from 192.168.1.10',
    '[21:47:03] INFO  [db_pool] Executed query in 1.2ms (idle_connections: 8)',
    '[21:47:05] WARN  [rate_limit] Token bucket bucket_42 at 85% capacity',
    '[21:47:08] INFO  [systemd] Reloaded nginx.service successfully',
  ]);

  // Interactive state for POS & Inventory System Demo
  const [posCart, setPosCart] = useState([
    { id: 1, name: 'Barcode Scanner Handheld', price: 45.00, qty: 2, stock: 18 },
    { id: 2, name: 'Thermal Receipt Paper Roll (10x)', price: 15.50, qty: 1, stock: 120 },
    { id: 3, name: 'POS Wireless Touch Display', price: 220.00, qty: 1, stock: 4 }
  ]);
  const [posReceipt, setPosReceipt] = useState<string | null>(null);

  const posSubtotal = posCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const posVatAmount = posSubtotal * 0.15; // 15% VAT
  const posGrandTotal = posSubtotal + posVatAmount;

  const handleQtyChange = (id: number, delta: number) => {
    setPosCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(1, item.qty + delta) };
      }
      return item;
    }));
  };

  const handleAddPosItem = () => {
    const sampleItems = [
      { name: 'USB POS Cash Drawer', price: 85.00, stock: 9 },
      { name: 'Magnetic Card Reader', price: 35.00, stock: 15 },
      { name: 'BT Label Printer 80mm', price: 95.00, stock: 6 }
    ];
    const picked = sampleItems[Math.floor(Math.random() * sampleItems.length)];
    setPosCart(prev => [...prev, { id: Date.now(), ...picked, qty: 1 }]);
  };

  const handleCheckoutPos = () => {
    const invNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
    const receiptStr = `====================================\n        PAVEL POS BILLING SYSTEM    \n====================================\nInvoice #: ${invNo}\nDate: ${new Date().toLocaleString()}\n------------------------------------\n` +
      posCart.map(i => `${i.name.padEnd(26)} x${i.qty}  $${(i.price * i.qty).toFixed(2)}`).join('\n') +
      `\n------------------------------------\nSubtotal:                    $${posSubtotal.toFixed(2)}\nVAT (15% Configured):        $${posVatAmount.toFixed(2)}\n------------------------------------\nTOTAL PAID:                  $${posGrandTotal.toFixed(2)}\nStatus: COMPLETED (Txn #8942-OK)\n====================================`;
    setPosReceipt(receiptStr);
  };

  // Interactive state for Smart Mess & Meal Manager Demo
  const [totalExpenses, setTotalExpenses] = useState(570);
  const [messMembers, setMessMembers] = useState([
    { id: 1, name: 'Pavel Hossain', deposit: 200, meals: 45 },
    { id: 2, name: 'Tanvir Ahmed', deposit: 150, meals: 38 },
    { id: 3, name: 'Rahat Chowdhury', deposit: 250, meals: 52 },
    { id: 4, name: 'Siam Islam', deposit: 120, meals: 30 }
  ]);

  const totalMessMeals = messMembers.reduce((sum, m) => sum + m.meals, 0);
  const dynamicMealRate = totalMessMeals > 0 ? totalExpenses / totalMessMeals : 0;

  const handleUpdateMeals = (id: number, delta: number) => {
    setMessMembers(prev => prev.map(m => m.id === id ? { ...m, meals: Math.max(0, m.meals + delta) } : m));
  };

  const handleUpdateDeposit = (id: number, delta: number) => {
    setMessMembers(prev => prev.map(m => m.id === id ? { ...m, deposit: Math.max(0, m.deposit + delta) } : m));
  };

  const handleAddLog = () => {
    const newLog = `[${new Date().toLocaleTimeString()}] INFO  [system_daemon] Health check verified. Status: 200 OK (${(Math.random() * 5).toFixed(2)}ms)`;
    setLogs(prev => [...prev.slice(-8), newLog]);
  };

  const handleRunApiTest = () => {
    setApiLoading(true);
    setTimeout(() => {
      setApiLoading(false);
      setApiResponse({
        status: 200,
        statusText: 'OK',
        latency_ms: parseFloat((1.5 + Math.random() * 4).toFixed(2)),
        timestamp: new Date().toISOString(),
        request: { method: apiMethod, endpoint: apiEndpoint },
        data: {
          nodes: 8,
          activeSockets: 142,
          serverVersion: '3.8.4-linux-x86_64',
          health: 'OPTIMAL'
        }
      });
    }, 600);
  };

  const handleRunSql = () => {
    setSqlLoading(true);
    setTimeout(() => {
      setSqlLoading(false);
      setSqlResults([
        { user_id: Math.floor(100 + Math.random() * 900), action: 'QUERY_EXEC', ip_address: '192.168.1.1', created_at: new Date().toISOString().replace('T', ' ').substring(0, 19) },
        { user_id: Math.floor(100 + Math.random() * 900), action: 'INDEX_LOOKUP', ip_address: '10.0.0.4', created_at: new Date().toISOString().replace('T', ' ').substring(0, 19) },
        { user_id: Math.floor(100 + Math.random() * 900), action: 'TOKEN_REFRESH', ip_address: '172.16.4.2', created_at: new Date().toISOString().replace('T', ' ').substring(0, 19) },
      ]);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs font-mono text-cyan-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  Interactive Live Sub-App
                </span>
              </h3>
              <p className="text-xs text-slate-400">{project.subAppDemo?.title || 'Interactive Application Prototype'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-App Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Detailed Project Context Ribbon */}
          <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl text-xs space-y-2">
            <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-slate-400 font-mono">Tech Stack:</span>
              {project.techTags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-slate-900 text-cyan-300 rounded border border-slate-800 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* DYNAMIC INTERACTIVE SUB-APP DEMO CONTENT */}

          {/* 1. API TESTER SUB-APP */}
          {project.subAppDemo?.type === 'api-tester' && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5" /> Live REST API Request Runner
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Bearer Auth Header Attached</span>
              </div>

              {/* Endpoint Bar */}
              <div className="flex gap-2">
                <select
                  value={apiMethod}
                  onChange={(e) => setApiMethod(e.target.value as any)}
                  className="bg-slate-900 text-cyan-400 text-xs font-mono font-bold px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-cyan-500"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                </select>

                <input
                  type="text"
                  value={apiEndpoint}
                  onChange={(e) => setApiEndpoint(e.target.value)}
                  className="flex-1 bg-slate-900 text-slate-200 text-xs font-mono px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-cyan-500"
                />

                <button
                  onClick={handleRunApiTest}
                  disabled={apiLoading}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  {apiLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{apiLoading ? 'Sending...' : 'Send Request'}</span>
                </button>
              </div>

              {/* Response Viewer */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Response Headers & Payload</span>
                  <span className="text-emerald-400">{apiResponse.status} {apiResponse.statusText} ({apiResponse.latency_ms}ms)</span>
                </div>

                <pre className="p-4 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 border border-slate-800/80 overflow-x-auto">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* 2. SQL QUERY SUB-APP */}
          {project.subAppDemo?.type === 'sql-query' && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> VaultSQL Live Database Query Console
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">Engine: PostgreSQL 16.2</span>
              </div>

              {/* SQL Input Area */}
              <div className="space-y-2">
                <textarea
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-900 text-slate-200 text-xs font-mono p-3 rounded-lg border border-slate-800 focus:outline-none focus:border-cyan-500"
                />

                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono text-slate-400">Read-Only Query Mode (Sanitized)</span>
                  <button
                    onClick={handleRunSql}
                    disabled={sqlLoading}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    {sqlLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                    <span>Execute SQL Query</span>
                  </button>
                </div>
              </div>

              {/* Query Results Table */}
              <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900">
                <table className="w-full text-left text-xs font-mono text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2.5">user_id</th>
                      <th className="p-2.5">action</th>
                      <th className="p-2.5">ip_address</th>
                      <th className="p-2.5">created_at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sqlResults.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/40">
                        <td className="p-2.5 text-cyan-400">{row.user_id}</td>
                        <td className="p-2.5 text-slate-200">{row.action}</td>
                        <td className="p-2.5 text-slate-400">{row.ip_address}</td>
                        <td className="p-2.5 text-slate-400">{row.created_at}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. SYSTEM MONITOR SUB-APP */}
          {project.subAppDemo?.type === 'system-monitor' && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" /> CloudTrace Live Telemetry Streamer
                </span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" /> Live Stream
                </span>
              </div>

              {/* Live Metric Meters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono text-slate-400 block mb-1">CPU Load</span>
                  <div className="text-2xl font-mono font-bold text-cyan-400 mb-2">{cpuUsage}%</div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full transition-all duration-500" style={{ width: `${cpuUsage}%` }} />
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono text-slate-400 block mb-1">RAM Memory</span>
                  <div className="text-2xl font-mono font-bold text-sky-400 mb-2">{ramUsage}%</div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full transition-all duration-500" style={{ width: `${ramUsage}%` }} />
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono text-slate-400 block mb-1">Net Throughput</span>
                  <div className="text-2xl font-mono font-bold text-emerald-400 mb-2">{netSpeed} MB/s</div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: `${(netSpeed / 25) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. LOG VIEWER SUB-APP */}
          {(project.subAppDemo?.type === 'log-viewer' || project.subAppDemo?.type === 'code-compiler' || project.subAppDemo?.type === 'data-formatter') && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> CyberDash Systems Log Streamer
                </span>
                <button
                  onClick={handleAddLog}
                  className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 text-xs font-mono rounded transition-colors"
                >
                  + Fetch Fresh Log Event
                </button>
              </div>

              <div className="p-4 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 space-y-1.5 max-h-56 overflow-y-auto border border-slate-800">
                {logs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed">
                    <span className="text-emerald-400">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. POS & INVENTORY SUB-APP DEMO */}
          {project.subAppDemo?.type === 'pos-system' && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShoppingCart className="w-3.5 h-3.5" /> POS & Inventory Live Terminal Simulator
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">VAT Calculation: 15% Auto</span>
              </div>

              {/* Cart Table */}
              <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900">
                <table className="w-full text-left text-xs font-mono text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2.5">Item Description</th>
                      <th className="p-2.5">Unit Price</th>
                      <th className="p-2.5">Qty</th>
                      <th className="p-2.5">Stock Alert</th>
                      <th className="p-2.5 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posCart.map(item => (
                      <tr key={item.id} className="border-b border-slate-800/50 hover:bg-slate-800/40">
                        <td className="p-2.5 text-white font-medium">{item.name}</td>
                        <td className="p-2.5 text-slate-300">${item.price.toFixed(2)}</td>
                        <td className="p-2.5">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => handleQtyChange(item.id, -1)}
                              className="w-5 h-5 bg-slate-800 hover:bg-slate-700 rounded text-cyan-400 flex items-center justify-center font-bold"
                            >
                              -
                            </button>
                            <span className="px-1.5 text-white">{item.qty}</span>
                            <button
                              onClick={() => handleQtyChange(item.id, 1)}
                              className="w-5 h-5 bg-slate-800 hover:bg-slate-700 rounded text-cyan-400 flex items-center justify-center font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-2.5">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${item.stock < 10 ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'}`}>
                            {item.stock < 10 ? `LOW STOCK (${item.stock} left)` : `IN STOCK (${item.stock})`}
                          </span>
                        </td>
                        <td className="p-2.5 text-right text-cyan-400 font-bold">${(item.price * item.qty).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* POS Summary Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex gap-4 text-slate-400">
                    <span>Subtotal: <strong className="text-slate-200">${posSubtotal.toFixed(2)}</strong></span>
                    <span>VAT (15%): <strong className="text-amber-400">${posVatAmount.toFixed(2)}</strong></span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    Grand Total: <span className="text-cyan-400">${posGrandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleAddPosItem}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-mono rounded-lg transition-colors flex items-center gap-1"
                  >
                    + Scan Inventory Item
                  </button>
                  <button
                    onClick={handleCheckoutPos}
                    className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Receipt className="w-3.5 h-3.5" /> Complete Sale & Print VAT Invoice
                  </button>
                </div>
              </div>

              {/* Receipt Output if generated */}
              {posReceipt && (
                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Generated Tax Invoice Receipt
                  </span>
                  <pre className="p-4 bg-slate-900 rounded-lg text-xs font-mono text-emerald-300 border border-emerald-500/30 overflow-x-auto">
                    {posReceipt}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* 6. SMART MESS & MEAL MANAGER SUB-APP DEMO */}
          {project.subAppDemo?.type === 'mess-manager' && (
            <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" /> Smart Mess Ledger & Dynamic Meal Rate Calculator
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">Formula: Total Expense / Total Meals</span>
              </div>

              {/* Summary Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Total Mess Expense ($)</label>
                  <input
                    type="number"
                    value={totalExpenses}
                    onChange={(e) => setTotalExpenses(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-slate-950 text-cyan-400 text-sm font-mono font-bold p-2 rounded-lg border border-slate-800 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">Total Mess Meals</span>
                  <div className="text-lg font-mono font-bold text-slate-200 mt-1">{totalMessMeals} Meals</div>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">Dynamic Meal Rate</span>
                  <div className="text-lg font-mono font-bold text-cyan-400 mt-1">${dynamicMealRate.toFixed(2)} / meal</div>
                </div>
              </div>

              {/* Members Ledger Table */}
              <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900">
                <table className="w-full text-left text-xs font-mono text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2.5">Member Name</th>
                      <th className="p-2.5">Deposit ($)</th>
                      <th className="p-2.5">Meals Count</th>
                      <th className="p-2.5">Calculated Cost</th>
                      <th className="p-2.5 text-right">Individual Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messMembers.map(m => {
                      const cost = m.meals * dynamicMealRate;
                      const balance = m.deposit - cost;
                      return (
                        <tr key={m.id} className="border-b border-slate-800/50 hover:bg-slate-800/40">
                          <td className="p-2.5 text-white font-medium">{m.name}</td>
                          <td className="p-2.5">
                            <div className="flex items-center gap-1.5">
                              <span>${m.deposit}</span>
                              <button onClick={() => handleUpdateDeposit(m.id, 10)} className="text-[10px] bg-slate-800 px-1 rounded text-cyan-400 hover:bg-slate-700">+10</button>
                            </div>
                          </td>
                          <td className="p-2.5">
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => handleUpdateMeals(m.id, -1)} className="w-5 h-5 bg-slate-800 rounded text-cyan-400 font-bold flex items-center justify-center">-</button>
                              <span className="text-white">{m.meals}</span>
                              <button onClick={() => handleUpdateMeals(m.id, 1)} className="w-5 h-5 bg-slate-800 rounded text-cyan-400 font-bold flex items-center justify-center">+</button>
                            </div>
                          </td>
                          <td className="p-2.5 text-slate-300">${cost.toFixed(2)}</td>
                          <td className="p-2.5 text-right font-bold">
                            <span className={balance >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                              {balance >= 0 ? `+$${balance.toFixed(2)} (Refund)` : `-$${Math.abs(balance).toFixed(2)} (Due)`}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Action Links Bar */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              >
                GitHub: {project.githubUrl.split('/').pop()}
              </a>

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono font-bold text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/50 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  Visit Live Site ({project.liveUrl.replace('https://', '').replace('http://', '').replace(/\/$/, '')})
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold font-mono text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Close Live Sub-App
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
