import { BatteryFull, ChartLine, Flame, Leaf, Settings, Signal, Sun, Wifi } from 'lucide-react'

/*
 * The app's Today screen, rebuilt from TodayView.swift for the landing page: date and streak, the
 * 90-day dial, this phase with the next trophy, the week strip, today's scroll time and the
 * floating tab bar. Drawn at iPhone point size (393 wide) and scaled to fit by the wrapper.
 * Sample state: day 13 of 90, so the phase is "Ride Urges" (days 10–20) and the next trophy is
 * "Two Weeks" tomorrow.
 */

const DAY = 13
const LENGTH = 90
const PHASE_STARTS = [1, 6, 10, 21, 41, 66] // Program.phaseStarts
const CURRENT_PHASE_START = 10

const INK = '#080708'
const ACCENT = '#3772FF'
const NAVY = '#0B1E4D'
const LIGHT = '#7FA8FF'
const PAPER = '#EEEFF3'

const STRIP = [
  { w: 'W', d: 28 },
  { w: 'T', d: 29 },
  { w: 'F', d: 30 },
  { w: 'S', d: 31, today: true },
  { w: 'S', d: 1, ahead: true },
  { w: 'M', d: 2, ahead: true },
  { w: 'T', d: 3, ahead: true },
]

function Hairline() {
  return <div style={{ height: 0.5, background: INK, opacity: 0.3 }} />
}

function Dial({ size }: { size: number }) {
  const pad = 24 // room for the little day numbers outside the circle
  const box = size + pad * 2
  const c = box / 2
  const r = size / 2
  const ring = r - 18 - 5 // DayDial: padding 18, line width 10
  const circumference = 2 * Math.PI * ring
  const progress = DAY / LENGTH
  const at = (day: number) => ((day - 1) / LENGTH) * 2 * Math.PI - Math.PI / 2
  return (
    <div style={{ position: 'relative', width: box, height: box, margin: '0 auto' }}>
      <svg width={box} height={box} viewBox={`0 0 ${box} ${box}`} style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <filter id="nms-dial-lift" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor={INK} floodOpacity="0.18" />
            <feDropShadow dx="0" dy="-6" stdDeviation="5" floodColor="#ffffff" floodOpacity="0.9" />
          </filter>
          <linearGradient id="nms-dial-bar" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={NAVY} />
            <stop offset="0.55" stopColor={ACCENT} />
            <stop offset="1" stopColor={LIGHT} />
          </linearGradient>
        </defs>
        {/* a tick where each phase starts, the current phase's darker and longer */}
        {PHASE_STARTS.map(start => {
          const current = start === CURRENT_PHASE_START
          const a = at(start)
          const len = current ? 10 : 6
          return (
            <line
              key={start}
              x1={c + Math.cos(a) * r}
              y1={c + Math.sin(a) * r}
              x2={c + Math.cos(a) * (r - len)}
              y2={c + Math.sin(a) * (r - len)}
              stroke={INK}
              strokeOpacity={current ? 0.9 : 0.5}
              strokeWidth="1"
              strokeLinecap="round"
            />
          )
        })}
        {/* the raised circle */}
        <circle cx={c} cy={c} r={r - 13} fill={PAPER} filter="url(#nms-dial-lift)" />
        <circle cx={c} cy={c} r={r - 13.4} fill="none" stroke={INK} strokeOpacity="0.28" strokeWidth="0.75" />
        {/* the bar: a faint full track and the blue part on top */}
        <circle cx={c} cy={c} r={ring} fill="none" stroke={INK} strokeOpacity="0.06" strokeWidth="10" />
        <circle
          cx={c}
          cy={c}
          r={ring}
          fill="none"
          stroke="url(#nms-dial-bar)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${circumference * progress} ${circumference}`}
          transform={`rotate(-90 ${c} ${c})`}
          style={{ filter: `drop-shadow(0 4px 6px rgba(55, 114, 255, 0.35))` }}
        />
      </svg>
      {/* tiny day numbers next to each tick (none on the top one) */}
      {PHASE_STARTS.filter(s => s > 1).map(start => {
        const a = at(start)
        return (
          <span
            key={start}
            style={{
              position: 'absolute',
              left: c + Math.cos(a) * (r + 14),
              top: c + Math.sin(a) * (r + 14),
              transform: 'translate(-50%, -50%)',
              fontSize: 11,
              color: INK,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {start}
          </span>
        )
      })}
      {/* the day, right in the middle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: size * 0.44,
            fontWeight: 100,
            lineHeight: 1,
            marginBottom: -size * 0.03,
            fontVariantNumeric: 'tabular-nums',
            backgroundImage: `linear-gradient(90deg, ${NAVY}, ${ACCENT}, ${LIGHT})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {DAY}
        </span>
        <span style={{ fontSize: 15, fontWeight: 300, color: INK, opacity: 0.6 }}>of {LENGTH} days</span>
      </div>
    </div>
  )
}

function TodayScreen() {
  const gradientText = {
    backgroundImage: `linear-gradient(90deg, ${NAVY}, ${ACCENT}, ${LIGHT})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  } as const
  return (
    <div
      style={{
        position: 'relative',
        width: 393,
        height: 852,
        background: PAPER,
        color: INK,
        fontFamily: 'Jost, system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* status bar */}
      <div
        style={{
          height: 54,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 32px 0 44px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 17,
          fontWeight: 600,
        }}
      >
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Signal size={17} strokeWidth={2.5} />
          <Wifi size={17} strokeWidth={2.5} />
          <BatteryFull size={24} strokeWidth={1.75} />
        </span>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* header: date, day name, streak */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8 }}>
          <div>
            <div style={{ fontSize: 15, color: ACCENT }}>Oct 31</div>
            <div style={{ fontSize: 32, fontWeight: 300, lineHeight: 1.1 }}>Saturday</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 13, color: ACCENT }}>
            <Flame size={14} strokeWidth={1.75} />
            13 day streak
          </div>
        </div>
        <Hairline />

        <Dial size={262} />

        {/* this phase, and the next trophy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: INK, opacity: 0.6 }}>Week 2</div>
            <div style={{ fontSize: 27, fontWeight: 300, lineHeight: 1.15, ...gradientText }}>Ride Urges</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, color: INK, opacity: 0.6 }}>Tomorrow</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Two Weeks</div>
            </div>
            <div
              style={{
                position: 'relative',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(#FF9AA2, #E5484D)',
                boxShadow: '0 5px 10px rgba(229, 72, 77, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 2,
                  borderRadius: '50%',
                  background: 'linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0) 50%)',
                }}
              />
              <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', border: '1.2px solid rgba(255,255,255,0.55)' }} />
              <Leaf size={14} color="#fff" strokeWidth={1.75} style={{ position: 'relative' }} />
            </div>
          </div>
        </div>
        <Hairline />

        {/* the week */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, height: 88, alignItems: 'center' }}>
          {STRIP.map(day => {
            const selected = day.today
            const text = selected ? '#fff' : day.ahead ? 'rgba(8,7,8,0.28)' : 'rgba(8,7,8,0.85)'
            return (
              <div
                key={day.d}
                style={{
                  width: 46,
                  height: 76,
                  borderRadius: 999,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  color: text,
                  background: selected ? `linear-gradient(135deg, ${LIGHT}, ${ACCENT}, ${NAVY})` : 'transparent',
                  boxShadow: selected ? '0 10px 22px rgba(8,7,8,0.10)' : 'none',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 500, opacity: selected ? 0.75 : 1 }}>{day.w}</span>
                <span style={{ fontSize: 16, fontWeight: selected ? 500 : 400 }}>{day.d}</span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: selected ? '#fff' : 'transparent' }} />
              </div>
            )
          })}
        </div>
        <Hairline />

        {/* scroll time today */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
          <div style={{ fontSize: 15 }}>Scroll time</div>
          <div style={{ position: 'relative', height: 12, borderRadius: 999, background: 'rgba(8,7,8,0.07)' }}>
            <div
              style={{
                position: 'absolute',
                inset: '0 auto 0 0',
                width: '38%',
                borderRadius: 999,
                background: `linear-gradient(90deg, ${NAVY}, ${ACCENT}, ${LIGHT})`,
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 300 }}>23m</span>
              <span style={{ fontSize: 15, fontWeight: 300, opacity: 0.6 }}>/ 1h</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontSize: 22 }}>37m</span>
              <span style={{ fontSize: 15, fontWeight: 300, opacity: 0.6 }}>left</span>
            </span>
          </div>
        </div>
      </div>

      {/* floating glass tab bar */}
      <div
        style={{
          position: 'absolute',
          left: 24,
          right: 24,
          bottom: 30,
          height: 62,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.72)',
          boxShadow: '0 8px 30px rgba(8,7,8,0.12), inset 0 0 0 0.5px rgba(255,255,255,0.9)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 8px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 10,
          fontWeight: 500,
        }}
      >
        {[
          { label: 'Today', Icon: Sun, active: true },
          { label: 'Progress', Icon: ChartLine },
          { label: 'Settings', Icon: Settings },
        ].map(({ label, Icon, active }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: '6px 22px',
              borderRadius: 999,
              color: active ? ACCENT : 'rgba(8,7,8,0.75)',
              background: active ? 'rgba(8,7,8,0.06)' : 'transparent',
            }}
          >
            <Icon size={22} strokeWidth={1.5} />
            {label}
          </div>
        ))}
      </div>

      {/* home indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          width: 134,
          height: 5,
          borderRadius: 999,
          transform: 'translateX(-50%)',
          background: INK,
        }}
      />
    </div>
  )
}

/** An iPhone showing the Today screen. `width` is the outer width of the phone in CSS pixels. */
export function PhoneMock({ width = 300 }: { width?: number }) {
  const bezel = 11
  const scale = (width - bezel * 2) / 393
  const screenH = 852 * scale
  return (
    <div
      aria-label="The No More Scroll app's Today screen: day 13 of 90, phase Ride Urges, 23 minutes of a 1 hour scroll target used"
      role="img"
      style={{
        position: 'relative',
        width,
        height: screenH + bezel * 2,
        borderRadius: 56 * scale + bezel,
        padding: bezel,
        background: 'linear-gradient(145deg, #3a3a3e, #121214 45%, #2a2a2e)',
        boxShadow:
          '0 40px 80px rgba(20, 10, 40, 0.35), 0 12px 24px rgba(20, 10, 40, 0.25), inset 0 0 0 1.5px rgba(255,255,255,0.12)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 393 * scale,
          height: screenH,
          borderRadius: 56 * scale,
          overflow: 'hidden',
          background: PAPER,
        }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: '0 0' }}>
          <TodayScreen />
        </div>
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 11 * scale,
            left: '50%',
            width: 126 * scale,
            height: 37 * scale,
            borderRadius: 999,
            transform: 'translateX(-50%)',
            background: '#000',
          }}
        />
      </div>
    </div>
  )
}
