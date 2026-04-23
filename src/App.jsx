import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, ArrowDown, Shield, Terminal, Activity, Zap, FileSearch, Layers } from 'lucide-react';

// ─── Portrait (base64-embedded so the artifact is self-contained) ─────────
const PORTRAIT_SRC = "data:image/jpeg;base64,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";

// ─── Reveal-on-scroll wrapper ──────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '', y = 30 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main portfolio ────────────────────────────────────────────────────────
export default function Portfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hoveredCase, setHoveredCase] = useState(null);

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Instrument+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+KR:wght@300;400;500&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);

    const t = setTimeout(() => setLoaded(true), 100);

    return () => {
      if (fontLink.parentNode) document.head.removeChild(fontLink);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  // ─── Content ──────────────────────────────────────────────────────────
  const expertise = [
    {
      icon: Shield,
      title: 'DLP · DRM Operations',
      kr: '엔드포인트 보안 운영',
      desc: '금융·공공기관 대상 엔드포인트 보안 솔루션 구축·운영. 신규 15개 사이트, 유지보수 30개 사이트를 동시 관리하며 저장매체·파일 첨부·출력물 통제 정책을 설계·적용.',
    },
    {
      icon: Activity,
      title: 'Incident Response',
      kr: '침해사고 탐지 · 대응',
      desc: '운영 지표(CPU·Load)의 이상을 기점으로 Docker 컨테이너 로그, 파일 무결성, 외부 통신 경로를 유기적으로 연계 분석. FileHash·디지털 서명 검증으로 변조 파일 식별·차단.',
    },
    {
      icon: FileSearch,
      title: 'SIEM · Log Forensics',
      kr: '로그 기반 위협 분석',
      desc: 'Splunk 기반 로그 수집·분석 환경 운영. Magic Number 분석으로 표면 확장자 변조를 통한 파일 유출 시도를 실제 파일 형식으로 복원·탐지.',
    },
    {
      icon: Terminal,
      title: 'ISMS Compliance',
      kr: '규제 대응 · 취약점 관리',
      desc: 'Linux(CentOS, Rocky) / MariaDB 환경에서 ISMS 기준 정기 점검. 계정·SSH·포트·권한 관리 영역을 현장 운영 특성에 맞춰 조치·문서화.',
    },
    {
      icon: Zap,
      title: 'Security Automation',
      kr: '운영 자동화',
      desc: 'Shell Script로 DLP 구축·업그레이드 서버 설정 표준화. Make + ChatGPT API + OneDrive + Zendesk로 이어지는 기술지원 이력 자동 기록 파이프라인 구축.',
    },
    {
      icon: Layers,
      title: 'Account Federation',
      kr: '계정 · 권한 자동화',
      desc: 'MySQL · MariaDB · MSSQL 기반 인사 DB와 API 연동으로 계정 자동 동기화 구조 설계. 조직도 기반 권한 관리로 변경 사항이 운영 환경에 일관되게 반영.',
    },
  ];

  const cases = [
    {
      num: '01',
      year: '2023 — Present',
      title: '금융권 DLP 구축 · 운영',
      category: 'Finance · Long-running',
      domain: '금융기관 3곳 · 캐피탈 · 신용정보',
      stack: 'DLP · Linux · Docker · MariaDB',
      desc: '개인정보·금융 데이터 보호를 위한 저장매체·파일 첨부·출력물 제어 정책을 설계·적용. 반복 장애와 정책 이슈를 유형별로 분류하고 대응 절차를 표준화해 재발 시 처리 시간을 단축했으며, 업무 영향 사례를 분석해 예외 정책과 단계적 적용 기준을 수립·안착시켰습니다.',
    },
    {
      num: '02',
      year: '2024',
      title: '공공기관 침해사고 대응',
      category: 'Incident Response · Forensics',
      domain: '중앙 공공기관 2곳 · 수사기관 · 관측기관',
      stack: 'Docker · Linux · FileHash · Network Block',
      desc: '서버 CPU와 Load Average가 평시 대비 3배 이상 급증한 이상 징후를 모니터링 지표로 최초 인지. Docker 컨테이너 로그와 에이전트 통신 로그 교차 분석으로 특정 모듈의 비정상 외부 통신을 확인하고, FileHash·디지털 서명 검증으로 변조 파일 1건을 정확히 특정해 네트워크 차단 조치까지 수행했습니다.',
    },
    {
      num: '03',
      year: '2024',
      title: 'SIEM 기반 유출 시도 탐지',
      category: 'Threat Hunting · Log Analysis',
      domain: '헬스케어 플랫폼 · 대형 엔터테인먼트사',
      stack: 'Splunk · File Hash · Magic Number',
      desc: 'SIEM(Splunk) 로그에서 일반적인 파일 반출과 다른 이상 패턴을 포착. 사용자가 파일의 표면 확장자를 변경해 정책을 우회한 행위로 판단하고, 파일 해시·디지털 시그니처·Magic Number 분석으로 실제 파일 형식을 복원해 유출 시도의 실체를 입증했습니다. 단순 탐지 결과를 넘어 실제 위협 여부를 검증하는 관점을 확립한 프로젝트.',
    },
    {
      num: '04',
      year: '2024',
      title: '보안 솔루션 Hook 충돌 분석',
      category: 'System Debugging · Policy Design',
      domain: '대형 제조 기업',
      stack: 'DLP · DRM (파수 · 클라우디움) · Process Trace',
      desc: 'DLP와 DRM 간 파일 접근 제어 충돌로 인한 프로그램 비정상 종료 이슈를 분석. 파일 접근 시점의 로그와 프로세스 동작을 추적해 복수 보안 모듈이 동시 개입하면서 I/O 처리 순서가 꼬이는 구조적 문제를 식별하고, 정책 범위 비교·예외 처리 기준 수립으로 해결. 재발 방지를 위한 운영 기준까지 정립했습니다.',
    },
    {
      num: '05',
      year: '2024',
      title: '기술지원 이력 자동화 파이프라인',
      category: 'Automation · Ops Efficiency',
      domain: 'Internal',
      stack: 'Make · ChatGPT API · OneDrive · Zendesk',
      desc: '수기 작성에 의존하던 기술지원 이력의 누락·품질 편차 문제를 구조적으로 개선. 통화 녹음 저장 → OneDrive 동기화 → ChatGPT 요약 → Zendesk 등록으로 이어지는 자동화 워크플로우를 직접 설계·구축해, 운영 흐름 안에서 이력이 누락 없이 축적되는 체계를 만들었습니다.',
    },
  ];

  const chronology = [
    { period: '2023.07 — Present', role: '보안엔지니어 · 구축운영팀', place: '㈜지란지교소프트' },
    { period: '2023.01 — 2023.06', role: '정보시스템 구축·운영 기반 정보보안 전문가 양성과정', place: 'KH정보교육원' },
    { period: '2021.11 — 2022.12', role: '보안엔지니어 · E-Business 경영지원팀', place: '한신그레이스㈜' },
    { period: '2016.03 — 2024.02', role: '정치외교학 학사 (3.71/4.5)', place: '영남대학교' },
    { period: '2017.02 — 2018.11', role: '병역 · 육군 병장 제대', place: 'Republic of Korea' },
  ];

  const stack = [
    { category: 'Security', items: ['DLP', 'DRM', 'SIEM (Splunk)', 'ISMS', 'Endpoint Protection'] },
    { category: 'Systems', items: ['Linux (CentOS · Rocky)', 'Docker', 'VMware', 'Apache', 'Zabbix'] },
    { category: 'Data', items: ['MariaDB', 'MySQL', 'MSSQL', 'API Integration'] },
    { category: 'Automation', items: ['Shell Script', 'Make', 'ChatGPT API', 'Zendesk'] },
  ];

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: '#0a0a0a',
        color: '#f5f1ea',
        fontFamily: "'Instrument Sans', 'Noto Serif KR', system-ui, sans-serif",
      }}
    >
      <style>{`
        .font-display { font-family: 'Fraunces', 'Noto Serif KR', serif; font-optical-sizing: auto; }
        .font-serif-kr { font-family: 'Noto Serif KR', 'Fraunces', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .italic-serif { font-family: 'Fraunces', serif; font-style: italic; }

        ::selection { background: #c4a574; color: #0a0a0a; }

        .grain {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 40;
          opacity: 0.08; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }

        .aura {
          position: fixed; width: 320px; height: 320px;
          border-radius: 50%; pointer-events: none; z-index: 1;
          background: radial-gradient(circle, rgba(196,165,116,0.12), rgba(196,165,116,0) 70%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .link-underline { position: relative; display: inline-block; }
        .link-underline::after {
          content: ''; position: absolute;
          left: 0; right: 0; bottom: -2px; height: 1px;
          background: currentColor;
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .link-underline:hover::after { transform: scaleX(1); transform-origin: left; }

        .case-row { transition: opacity 0.5s ease; }
        .cases-dim .case-row:not(:hover) { opacity: 0.35; }

        .expertise-card {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s;
        }
        .expertise-card:hover {
          transform: translateY(-4px);
          border-color: rgba(196,165,116,0.5) !important;
        }
        .expertise-card:hover .icon-wrap { color: #c4a574; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Portrait — original, no filter */
        .portrait-frame {
          position: relative;
          overflow: hidden;
          background: #f5f1ea;
        }
        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portrait-frame:hover .portrait-img {
          transform: scale(1.02);
        }
      `}</style>

      <div className="grain" />
      <div
        className="aura hidden md:block"
        style={{ transform: `translate(${mouse.x - 160}px, ${mouse.y - 160}px)` }}
      />

      {/* ─── NAV ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between"
        style={{
          backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
          background: scrollY > 50 ? 'rgba(10,10,10,0.6)' : 'transparent',
          transition: 'background 0.4s, backdrop-filter 0.4s',
        }}
      >
        <div
          className="font-mono text-xs tracking-widest uppercase"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease 0.2s' }}
        >
          <span style={{ color: '#c4a574' }}>●</span> RYU · InfoSec · 2026
        </div>
        <div
          className="flex gap-6 md:gap-8 text-xs md:text-sm font-mono tracking-wider uppercase"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease 0.4s' }}
        >
          <a href="#manifesto" className="link-underline hidden md:inline-block">Manifesto</a>
          <a href="#expertise" className="link-underline">Expertise</a>
          <a href="#cases" className="link-underline">Cases</a>
          <a href="#contact" className="link-underline">Contact</a>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative">
        <div
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8 md:mb-12"
          style={{
            color: '#c4a574',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
          }}
        >
          — Security Engineer · based in Seoul
        </div>

        <h1
          className="font-display leading-[0.92] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 10vw, 10rem)', fontWeight: 300 }}
        >
          <span
            className="block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
            }}
          >
            Eunseok Ryu
          </span>
          <span
            className="block italic-serif"
            style={{
              fontWeight: 400, color: '#c4a574',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.0s',
            }}
          >
            류은석.
          </span>
        </h1>

        <div
          className="mt-12 md:mt-20 max-w-xl text-base md:text-lg leading-relaxed font-serif-kr"
          style={{
            color: 'rgba(245,241,234,0.75)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1.3s',
            fontWeight: 300,
          }}
        >
          데이터 유출 통제와 침해사고 대응을 4년간 수행해 온{' '}
          <span className="italic-serif" style={{ color: '#c4a574' }}>보안 엔지니어</span>입니다.
          탐지 결과에 의존하지 않고{' '}
          <span className="italic-serif" style={{ color: '#c4a574' }}>운영 지표</span>로
          위협을 선제적으로 해석합니다.
        </div>

        <div
          className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3 font-mono text-xs tracking-widest uppercase"
          style={{ opacity: loaded ? 0.6 : 0, transition: 'opacity 1.4s ease 1.6s' }}
        >
          <ArrowDown className="w-3 h-3 animate-bounce" />
          Scroll
        </div>

        <div
          className="absolute bottom-10 right-6 md:right-12 font-mono text-xs tracking-widest uppercase text-right"
          style={{ opacity: loaded ? 0.6 : 0, transition: 'opacity 1.4s ease 1.6s' }}
        >
          <div>4 yrs · experience</div>
          <div style={{ color: '#c4a574' }}>45 sites · secured</div>
        </div>
      </section>

      {/* ─── MANIFESTO ────────────────────────────────────────────── */}
      <section id="manifesto" className="px-6 md:px-12 py-32 md:py-48 relative">
        <Reveal>
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-16" style={{ color: '#c4a574' }}>
            [00] · Manifesto
          </div>
        </Reveal>

        <div className="max-w-6xl">
          <Reveal delay={0.1}>
            <p
              className="font-serif-kr leading-[1.4]"
              style={{ fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)', fontWeight: 300 }}
            >
              보안의 수준은{' '}
              <span className="italic-serif" style={{ color: '#c4a574' }}>운영 안정성</span>과{' '}
              <span className="italic-serif" style={{ color: '#c4a574' }}>대응 속도</span>에서 결정된다.
            </p>
          </Reveal>

          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Portrait column */}
            <Reveal delay={0.2} className="md:col-span-5">
              <div className="portrait-frame" style={{ aspectRatio: '4/5', maxWidth: '380px' }}>
                <img src={PORTRAIT_SRC} alt="Eunseok Ryu · Portrait" className="portrait-img" />
              </div>
              <div className="mt-5 flex items-baseline justify-between font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(245,241,234,0.45)' }}>
                <span>— 류은석 · 1996</span>
                <span style={{ color: '#c4a574' }}>Seoul, 2026</span>
              </div>
            </Reveal>

            {/* Principle column */}
            <Reveal delay={0.35} className="md:col-span-7">
              <div className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(245,241,234,0.4)' }}>
                Principle
              </div>
              <p className="font-serif-kr leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', color: 'rgba(245,241,234,0.8)', fontWeight: 300 }}>
                동일한 정책이라도 환경에 따라 전혀 다른 결과가 만들어집니다.
                보안 엔지니어의 판단과 대응은 곧 서비스의 신뢰로 이어집니다.
                저는 현장에서 문제를 단순히 처리하는 것이 아니라, 원인을
                구조적으로 해결하고 자동화로 연결하며 일합니다.
              </p>

              <div className="mt-12 pt-8 border-t grid grid-cols-2 gap-6" style={{ borderColor: 'rgba(245,241,234,0.12)' }}>
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(245,241,234,0.4)' }}>
                    Focus
                  </div>
                  <div className="font-serif-kr" style={{ color: 'rgba(245,241,234,0.8)', fontWeight: 300 }}>
                    Endpoint Security<br />Incident Response
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(245,241,234,0.4)' }}>
                    Method
                  </div>
                  <div className="font-serif-kr" style={{ color: 'rgba(245,241,234,0.8)', fontWeight: 300 }}>
                    운영 지표 기반<br />선제적 위협 해석
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ────────────────────────────────────────────── */}
      <section id="expertise" className="px-6 md:px-12 py-32 md:py-48 border-t" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <Reveal>
          <div className="flex items-baseline justify-between mb-20">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#c4a574' }}>
                [01] · Expertise
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300 }}>
                Six <span className="italic-serif" style={{ color: '#c4a574' }}>practices.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertise.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="expertise-card border p-8 md:p-10 h-full"
                  style={{ borderColor: 'rgba(245,241,234,0.15)', background: 'rgba(245,241,234,0.02)' }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="icon-wrap" style={{ color: 'rgba(245,241,234,0.5)', transition: 'color 0.4s' }}>
                      <Icon className="w-7 h-7" strokeWidth={1} />
                    </div>
                    <div className="font-mono text-xs tracking-widest" style={{ color: 'rgba(245,241,234,0.3)' }}>
                      /{String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl md:text-[1.7rem] mb-1 leading-tight" style={{ fontWeight: 400 }}>
                    {e.title}
                  </h3>
                  <div className="font-serif-kr text-sm mb-6" style={{ color: '#c4a574', fontWeight: 400 }}>
                    {e.kr}
                  </div>
                  <p className="font-serif-kr text-sm leading-relaxed" style={{ color: 'rgba(245,241,234,0.65)', fontWeight: 300 }}>
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ─── CASES ────────────────────────────────────────────────── */}
      <section id="cases" className="px-6 md:px-12 py-32 md:py-48 border-t" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <Reveal>
          <div className="flex items-baseline justify-between mb-20">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#c4a574' }}>
                [02] · Case Studies
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300 }}>
                Selected <span className="italic-serif" style={{ color: '#c4a574' }}>cases.</span>
              </h2>
            </div>
            <div className="font-mono text-xs tracking-widest uppercase hidden md:block" style={{ color: 'rgba(245,241,234,0.4)' }}>
              {cases.length.toString().padStart(2, '0')} Cases
            </div>
          </div>
        </Reveal>

        <div
          className={`${hoveredCase !== null ? 'cases-dim' : ''}`}
          onMouseLeave={() => setHoveredCase(null)}
        >
          {cases.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.06}>
              <div
                className="case-row group cursor-pointer border-t py-8 md:py-10"
                style={{ borderColor: 'rgba(245,241,234,0.12)' }}
                onMouseEnter={() => setHoveredCase(i)}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                  <div className="font-mono text-xs tracking-widest md:w-16" style={{ color: 'rgba(245,241,234,0.4)' }}>
                    {c.num}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-serif-kr transition-all duration-500"
                      style={{
                        fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)',
                        fontWeight: 400,
                        transform: hoveredCase === i ? 'translateX(16px)' : 'translateX(0)',
                      }}
                    >
                      {c.title}
                    </h3>
                    <div className="font-mono text-xs tracking-widest uppercase mt-2" style={{ color: 'rgba(245,241,234,0.5)' }}>
                      {c.category}
                    </div>
                  </div>
                  <div className="font-mono text-xs tracking-widest" style={{ color: 'rgba(245,241,234,0.4)' }}>
                    {c.year}
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 transition-all duration-500 shrink-0"
                    style={{
                      color: hoveredCase === i ? '#c4a574' : 'rgba(245,241,234,0.3)',
                      transform: hoveredCase === i ? 'translate(4px, -4px)' : 'translate(0,0)',
                    }}
                  />
                </div>
                {hoveredCase === i && (
                  <div
                    className="pl-0 md:pl-24 pt-6 max-w-3xl"
                    style={{ animation: 'fadeIn 0.4s ease' }}
                  >
                    <div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: '#c4a574' }}>
                      Domain · {c.domain}
                    </div>
                    <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(245,241,234,0.45)' }}>
                      Stack · {c.stack}
                    </div>
                    <p className="font-serif-kr text-sm md:text-base leading-relaxed" style={{ color: 'rgba(245,241,234,0.75)', fontWeight: 300 }}>
                      {c.desc}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(245,241,234,0.12)' }} />
        </div>
      </section>

      {/* ─── CLIENT TRUST ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <Reveal>
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-10" style={{ color: '#c4a574' }}>
            Trusted by
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { sector: 'Finance', names: ['캐피탈 2곳', '신용정보 1곳'] },
              { sector: 'Public', names: ['중앙 수사기관', '관측기관'] },
              { sector: 'Enterprise', names: ['헬스케어 플랫폼', '엔터테인먼트사'] },
              { sector: 'Manufacturing', names: ['대형 제조'] },
            ].map((g) => (
              <div key={g.sector}>
                <div className="font-mono text-xs tracking-widest uppercase mb-3 pb-2 border-b" style={{ color: 'rgba(245,241,234,0.5)', borderColor: 'rgba(245,241,234,0.15)' }}>
                  {g.sector}
                </div>
                <ul className="space-y-1.5">
                  {g.names.map((n) => (
                    <li key={n} className="font-serif-kr text-sm md:text-base" style={{ color: 'rgba(245,241,234,0.8)', fontWeight: 300 }}>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── STACK MARQUEE ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-t overflow-hidden" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <div className="marquee-track font-display italic-serif" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', color: 'rgba(245,241,234,0.08)', fontWeight: 300 }}>
          <div className="flex gap-16 px-8 whitespace-nowrap">
            <span>DLP</span><span>·</span>
            <span>SIEM</span><span>·</span>
            <span>ISMS</span><span>·</span>
            <span>Docker</span><span>·</span>
            <span>MariaDB</span><span>·</span>
            <span>Linux</span><span>·</span>
            <span>Splunk</span><span>·</span>
            <span>Incident Response</span><span>·</span>
            <span>Automation</span><span>·</span>
          </div>
          <div className="flex gap-16 px-8 whitespace-nowrap">
            <span>DLP</span><span>·</span>
            <span>SIEM</span><span>·</span>
            <span>ISMS</span><span>·</span>
            <span>Docker</span><span>·</span>
            <span>MariaDB</span><span>·</span>
            <span>Linux</span><span>·</span>
            <span>Splunk</span><span>·</span>
            <span>Incident Response</span><span>·</span>
            <span>Automation</span><span>·</span>
          </div>
        </div>
      </section>

      {/* ─── CHRONOLOGY ───────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-32 md:py-48 border-t" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <Reveal>
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-12" style={{ color: '#c4a574' }}>
            [03] · Chronicle
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-4">
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 300 }}>
              A quiet<br />
              <span className="italic-serif" style={{ color: '#c4a574' }}>chronology.</span>
            </h2>
          </Reveal>

          <div className="md:col-span-8 md:col-start-6">
            {chronology.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="border-t py-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
                  style={{ borderColor: 'rgba(245,241,234,0.12)' }}
                >
                  <div className="font-mono text-xs tracking-widest md:w-52 shrink-0" style={{ color: 'rgba(245,241,234,0.5)' }}>
                    {e.period}
                  </div>
                  <div className="flex-1">
                    <div className="font-serif-kr text-xl md:text-2xl" style={{ fontWeight: 400 }}>
                      {e.role}
                    </div>
                    <div className="font-mono text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(245,241,234,0.4)' }}>
                      {e.place}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t" style={{ borderColor: 'rgba(245,241,234,0.12)' }} />
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-24 pt-12 border-t max-w-3xl md:ml-auto" style={{ borderColor: 'rgba(245,241,234,0.12)' }}>
            <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(245,241,234,0.5)' }}>
              Currently
            </div>
            <p className="font-serif-kr text-base md:text-lg leading-relaxed" style={{ color: 'rgba(245,241,234,0.7)', fontWeight: 300 }}>
              더 높은 보안 요구사항과 빠른 실행이 동시에 필요한 환경에서
              역량을 검증·확장할 기회를 찾고 있습니다. 현장 문제를 구조적으로
              해결하고 자동화로 연결하는 엔드포인트 보안 운영에 기여하고자 합니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── STACK GRID ───────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-32 md:py-48 border-t" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <Reveal>
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-12" style={{ color: '#c4a574' }}>
            [04] · Instruments
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mb-16" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300 }}>
            Working <span className="italic-serif" style={{ color: '#c4a574' }}>stack.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stack.map((s, i) => (
            <Reveal key={s.category} delay={i * 0.08}>
              <div>
                <div className="font-mono text-xs tracking-widest uppercase mb-4 pb-3 border-b" style={{ color: '#c4a574', borderColor: 'rgba(196,165,116,0.3)' }}>
                  {s.category}
                </div>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="font-serif-kr text-sm md:text-base" style={{ color: 'rgba(245,241,234,0.8)', fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="px-6 md:px-12 py-32 md:py-48 border-t" style={{ borderColor: 'rgba(245,241,234,0.1)' }}>
        <Reveal>
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-12" style={{ color: '#c4a574' }}>
            [05] · Correspondence
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display leading-[0.95]" style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', fontWeight: 300 }}>
            Let's build<br />
            <span className="italic-serif" style={{ color: '#c4a574' }}>safer systems.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl font-serif-kr text-base md:text-lg leading-relaxed" style={{ color: 'rgba(245,241,234,0.7)', fontWeight: 300 }}>
            엔드포인트 보안 운영, 침해사고 대응, 자동화 설계에 대한 협업·채용 제안을 환영합니다.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(245,241,234,0.4)' }}>
                Email
              </div>
              <a href="mailto:es3411@naver.com" className="link-underline font-display text-xl md:text-3xl break-all" style={{ fontWeight: 400 }}>
                es3411@naver.com
              </a>
            </div>
            <div>
              <div className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(245,241,234,0.4)' }}>
                Elsewhere
              </div>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="link-underline font-display text-lg md:text-xl flex items-center gap-2" style={{ fontWeight: 400 }}>
                  <Github className="w-5 h-5" /> Github
                </a>
                <a href="#" className="link-underline font-display text-lg md:text-xl flex items-center gap-2" style={{ fontWeight: 400 }}>
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
              <div className="mt-12">
                <div className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(245,241,234,0.4)' }}>
                  Based in
                </div>
                <div className="font-serif-kr text-lg" style={{ fontWeight: 300, color: 'rgba(245,241,234,0.8)' }}>
                  Seoul · 서울
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer
        className="px-6 md:px-12 py-10 border-t flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs tracking-widest uppercase"
        style={{ borderColor: 'rgba(245,241,234,0.1)', color: 'rgba(245,241,234,0.4)' }}
      >
        <div>© 2026 — Eunseok Ryu. Security in quiet motion.</div>
        <div>Designed &amp; coded in Seoul</div>
      </footer>
    </div>
  );
}
