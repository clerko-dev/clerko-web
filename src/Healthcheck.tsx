// src/Healthcheck.tsx
export default function Healthcheck() {
  return (
    <div style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#0b0d16',color:'#e7e9ee'}}>
      <div style={{maxWidth:800,padding:24}}>
        <h1 style={{marginTop:0}}>Clerko — Healthcheck</h1>
        <ul>
          <li>VITE_SUPABASE_URL: {String(Boolean(import.meta.env.VITE_SUPABASE_URL))}</li>
          <li>VITE_SUPABASE_ANON_KEY: {String(Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY))}</li>
          <li>MODE: {String(import.meta.env.MODE)}</li>
          <li>PROD: {String(import.meta.env.PROD)}</li>
        </ul>
        <p>Jeśli któreś <b>false</b> — dołóż ENV w Vercel (Preview i Production), potem redeploy.</p>
      </div>
    </div>
  );
}
