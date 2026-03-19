"use client";

export default function TestHackathon() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ color: 'blue', fontSize: '32px' }}>Test Hackathon Page</h1>
      <p>This is a simple test to see if the component renders.</p>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Content Section</h2>
        <p>If you can see this, the component is working.</p>
      </div>
    </div>
  );
}
