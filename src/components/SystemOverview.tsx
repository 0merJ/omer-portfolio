const stages = [
  ['01', 'Camera / image input'],
  ['02', 'YOLOv8 + OpenCV detection'],
  ['03', 'Perception results'],
  ['04', 'Mission / control logic'],
  ['05', 'PX4 / MAVSDK'],
  ['06', 'Drone'],
]

export function SystemOverview() {
  return (
    <div className="system-overview" aria-label="Conceptual drone system flow">
      <div className="system-overview__heading"><span>System overview</span><small>Conceptual architecture</small></div>
      <div className="system-flow">
        {stages.map(([number, label], index) => <div className="system-stage" key={label}><span>{number}</span><strong>{label}</strong>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}
      </div>
      <div className="system-telemetry"><span>↕</span><strong>Telemetry & monitoring</strong><small>Tkinter dashboard connected to the mission system</small></div>
    </div>
  )
}
