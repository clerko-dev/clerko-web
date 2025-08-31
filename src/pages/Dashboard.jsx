// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import SEO from "@/components/SEO.jsx";
import ProposalForm from "@/components/proposals/ProposalForm.jsx";
import { getMyProposals } from "@/lib/db.js";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  async function load() {
    try { setList(await getMyProposals()); } catch (e) { console.error(e); }
  }
  useEffect(() => { load(); }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SEO title="Dashboard — Clerko" />
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl border bg-white/70 p-5">
          <h2 className="text-lg font-medium mb-4">Create a new proposal</h2>
          <ProposalForm onCreated={(p)=> navigate(`/p/${p.slug}`)} />
        </div>

        <div className="rounded-xl border bg-white/70 p-5">
          <h2 className="text-lg font-medium mb-4">Your proposals</h2>
          <div className="space-y-3">
            {list.map(p => (
              <Link key={p.id} to={`/p/${p.slug}`} className="block rounded-lg border hover:shadow px-4 py-3 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-gray-500">{p.status} • {p.currency} {Number(p.total).toFixed(2)}</div>
                  </div>
                  <div className="text-sm text-indigo-600">Open →</div>
                </div>
              </Link>
            ))}
            {!list.length && <div className="text-sm text-gray-500">No proposals yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
