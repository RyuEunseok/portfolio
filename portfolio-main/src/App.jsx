import React, { useEffect, useRef, useState } from 'react';
import { Shield, Activity, FileSearch, ClipboardCheck, Server, Zap, Mail, Check } from 'lucide-react';
import portrait from './assets/profile.jpg';

// ─── Content ───────────────────────────────────────────────────────────────
const facts = [
  { value: '3년+', label: '정보보안 실무 경력' },
  { value: '40개', label: 'DLP 유지보수 사이트' },
  { value: '3,500대', label: '현재 운영 중인 PC' },
  { value: '6종', label: '운영 중인 보안솔루션' },
];

// 침해사고 대응에서 원인을 좁혀간 실제 순서
const trace = [
  { step: '시스템 부하', note: 'CPU·Load 평시 대비 약 3배' },
  { step: '디스크 점검', note: '이상 없음, 범위 확장' },
  { step: '네트워크 패킷', note: '에이전트–서버 과다 통신' },
  { step: '에이전트 파일', note: 'Hash·Magic Number 불일치' },
  { step: '유입 경로', note: '방화벽 전체 허용 이력 확인' },
  { step: '조치 완료', note: '방화벽 재설정, 정상 파일 교체', done: true },
];

const practices = [
  {
    title: '보안정책 및 엔드포인트 운영',
    desc: '대웅그룹 19개 계열사, PC 약 3,500대의 DLP·EDR·MDM·문서중앙화·데이터 완전삭제·VPN 정책을 관리합니다. 예외 요청은 업무 영향과 보안 위험을 함께 검토해 허용 범위를 정하고, 사용자 교육으로 현업의 정책 준수를 지원합니다.',
  },
  {
    title: '침해사고 탐지와 대응',
    desc: '시스템 부하에서 시작해 디스크, 네트워크 패킷, 에이전트 파일 순으로 분석 범위를 넓혀 원인을 추적합니다. 변조 파일을 찾는 데서 멈추지 않고 유입 경로와 방화벽 설정까지 확인해 재발을 막습니다.',
  },
  {
    title: '로그 기반 위협 분석',
    desc: 'Splunk 연동 환경에서 사용자 행위 로그를 분석하고, Magic Number와 파일 시그니처로 확장자를 위장한 유출 시도를 실제 파일 형식으로 확인합니다.',
  },
  {
    title: '보안솔루션 도입 평가',
    desc: '요구사항 정의부터 POC, 비용 재산정, MDR SLA 협의, 계약까지 그룹 EDR 교체를 진행했습니다. 기능 비교에 그치지 않고 도입 이후의 운영 방식을 함께 봅니다.',
  },
  {
    title: '취약점 점검과 보안 설정',
    desc: 'ISMS 기준으로 Linux와 DBMS의 계정, SSH 접근 통제, 서비스·포트, 파일 권한을 점검하고 조치 가이드와 결과 보고서로 정리합니다.',
  },
  {
    title: '보안 운영 자동화',
    desc: 'Python·Google Apps Script로 예외 권한 만료 안내를, 인사 DB·API 연동으로 계정 동기화를 자동화했습니다. 실행 기록과 이력을 남겨 결과를 추적할 수 있는 구조까지 함께 만듭니다.',
  },
];

const companies = [
  {
    name: '아이디에스앤트러스트',
    team: '보안운영파트',
    period: '2026.07 – 현재',
    scope: '대웅그룹 19개 계열사, PC 약 3,500대 엔드포인트 보안 운영',
    items: [
      {
        title: '그룹 차세대 EDR 도입 평가 및 계약 실무',
        domain: '대웅그룹 19개 계열사, PC 약 3,500대',
        summary: '평가 기준 수립부터 후보 솔루션 3종 POC, MDR SLA 협의와 계약까지 도입 전 과정을 수행했습니다.',
        tasks: [
          '기존 EDR 교체 필요성 검토 및 그룹 운영 환경에 맞는 도입 평가 기준 수립',
          '구축 형태, 위협 탐지·대응 기능, XDR·EPP 보호 범위, MDR 연계 지원, 라이선스·서비스 비용 기준으로 후보 솔루션 3종 POC 조율·비교 평가',
          '구축 방식 검토 결과를 반영해 클라우드 기반 도입으로 방향 전환 및 비용 구조 재산정',
          'AI 기반 로그 분석, 자동 보고서 생성, 탐지 고도화 기능 검토',
          'MDR 서비스 제공사와 위협 탐지 후 대응·보고 기준 및 SLA 협의, 도입 계약 실무 수행',
        ],
        results: [
          '기능·운영 적합성과 비용을 종합 비교해 최종 도입 솔루션 선정',
          '도입 이후의 대응·보고 기준과 서비스 범위를 계약 실무에 반영',
        ],
        role: '도입 실무 담당: 평가 기준 수립, POC 일정·검증 조율, 비교 평가, MDR 요건 협의 및 계약 실무',
        skills: ['EDR', 'XDR', 'EPP', 'MDR', 'POC 평가', '도입 비용 분석', '벤더 협의'],
      },
      {
        title: '그룹사 엔드포인트 보안 운영 및 DLP 탐지 검증',
        domain: '19개 계열사, PC 약 3,500대, 제약 연구소 폐쇄망 포함',
        summary: '보안솔루션 6종을 운영하며, DLP 오탐의 원인이 된 탐지 로직 결함을 재현으로 찾아냈습니다.',
        tasks: [
          'DLP, EDR, MDM, 문서중앙화, 데이터 완전삭제, VPN 등 보안솔루션 6종 운영·관리',
          '계열사별 보안정책 적용 및 업무 영향·보안 위험을 고려한 예외 요청 검토·처리',
          'DLP 외부 반출 탐지 이벤트를 사용자 화면 녹화 기록과 행위 재현으로 검증',
          '파일 첨부 대화상자 내 파일 이동을 첨부 행위로 오인식하는 탐지 로직 결함 식별',
          '재현 조건과 분석 결과를 근거로 벤더에 개선 요청 및 기술 협의',
          '연구소 폐쇄망 실험 장비 PC의 에이전트 설치·관리, 월 1회 EDR 탐지 패턴 수동 업데이트 및 리소스 점검',
        ],
        results: [
          'DLP 오탐 원인을 식별하고 개선 협의에 필요한 재현 근거 확보',
          '오탐 판정 결과 공유로 사용자의 불필요한 소명 부담 해소',
          '폐쇄망 PC의 탐지 패턴 최신화 및 운영 상태 확인',
        ],
        role: '그룹사 보안 운영 담당: 정책·예외 관리, 사용자 행위 검증, 오탐 분석, 벤더 개선 협의, 폐쇄망 PC 보안 유지관리',
        skills: ['DLP', 'EDR', 'MDM', 'ECM', 'VPN', '행위 분석·재현', '폐쇄망 보안'],
      },
      {
        title: '문서중앙화 서비스 장애 분석 및 운영 관리',
        domain: '대웅그룹 문서중앙화 서비스',
        summary: '출근 시간대 로그인 세션 해제 장애의 부하 지점을 시스템 지표와 로그로 DB 영역까지 좁혔습니다.',
        tasks: [
          '출근 시간대 전사 사용자 로그인 세션 해제 장애에 대해 CPU·Memory·Load Average 점검',
          'iostat 기반 디스크 I/O 분석으로 부하 지점을 WAS가 아닌 DB 영역으로 특정',
          '솔루션 로그 추적을 통한 서비스 부하 및 장애 원인 분석',
          '직책자 보고와 전사 공지로 장애 상황 공유, 벤더 엔지니어와 대응 방안 수립',
          '문서중앙화 활용 방법 및 보안 준수사항에 대한 사용자 교육',
        ],
        results: [
          '시스템 지표와 로그를 근거로 장애 원인 범위를 좁히고 대응 방안 수립',
          '장애 상황과 대응 내용을 유관 담당자·사용자에게 공유',
          '사용자 교육을 통해 현업의 보안정책 준수 지원',
        ],
        role: '문서중앙화 운영 담당: 장애 원인 분석, 장애 커뮤니케이션, 벤더 기술 협의, 사용자 교육',
        skills: ['ECM', '시스템 리소스 분석', 'iostat', '솔루션 로그 분석', '사용자 보안교육'],
      },
      {
        title: '보안 예외 권한 관리 자동화',
        domain: '그룹사 보안 예외 권한 관리 업무',
        summary: '솔루션에 없던 만료 사전 안내를 자동화하고, 중복·미발송 문제를 실행 기록으로 추적해 고쳤습니다.',
        tasks: [
          '보안솔루션의 예외 권한 만료 사전 안내 기능을 보완하는 자동화 체계 설계·구현',
          'Excel 관리 대장을 Google Drive를 통해 Google Sheets로 단방향 동기화하고 주기적으로 갱신',
          '만료 예정 대상자 자동 추출 및 안내 메일 발송, 발송 완료·제외 상태와 이력 관리',
          '실행 기록과 발송 이력을 대조해 중복·미발송 원인 분석',
          '실행 잠금 순서 수정, 발송 이력 별도 저장, 발송 시간대 동기화 제한, 실패 원인·처리 상태 기록 구성',
          '데이터 변경 여부 비교와 일괄 조회 적용, 재구축 매뉴얼 및 복구 도구 구성',
        ],
        results: [
          '수작업으로 하던 만료 예정자 확인·안내 업무 자동화',
          '목록 갱신 후에도 발송 상태가 유지되도록 보완하고 중복·미발송 방지',
          '불필요한 데이터 갱신 최소화 및 재구축·복구 절차 마련',
        ],
        role: '업무 개선 기획, 자동화 설계·구현, 실행 충돌·발송 오류 분석, 운영 안정화와 복구 절차 문서화',
        skills: ['Python', 'Google Apps Script', 'Google Sheets', 'Google Drive', '실행 잠금', '이력·상태 관리'],
      },
    ],
  },
  {
    name: '지란지교소프트',
    team: '구축운영팀 보안엔지니어',
    period: '2023.07 – 2026.07',
    scope: '금융·공공기관 및 기업 DLP 신규 구축 15개, 유지보수 40개 사이트',
    items: [
      {
        title: '공공기관 침해사고 분석 및 대응',
        domain: '공공기관 DLP 운영 환경',
        summary: '시스템 부하에서 출발해 비정상 통신, 악성 파일, 방화벽 전체 허용 이력까지 추적했습니다.',
        tasks: [
          '정기 점검 중 CPU·Load Average의 평시 대비 약 3배 상승을 이상 징후로 최초 인지',
          '디스크 점검 후 네트워크 패킷으로 분석 범위를 넓혀 에이전트·서버 간 과도한 통신 식별',
          '사용자 PC 에이전트 분석 및 File Hash·Magic Number 비교로 정상 파일과 다른 파일 확인',
          '악성코드 다운로드 경로 추적 및 네트워크 담당자와 방화벽 설정 이력 점검',
          '전체 허용 정책 이력을 확인하고 협업하여 방화벽 재설정 및 정상 파일 교체',
          '재발 방지를 위한 접근 정책 및 파일 무결성 점검 기준 강화',
        ],
        results: [
          '이상 부하에서 출발해 비정상 통신, 악성 파일, 유입 경로까지 분석',
          '방화벽 설정 개선과 정상 파일 교체로 시스템 정상화',
          '유사 사고에 대비한 접근 정책 및 파일 무결성 점검 기준 보완',
        ],
        role: '이상 징후 최초 인지, 시스템·통신·파일 분석, 유입 경로 추적 및 유관 담당자 협업 조치',
        skills: ['리소스 분석', '패킷 분석', '에이전트 분석', 'File Hash', 'Magic Number', '방화벽 정책'],
      },
      {
        title: '고객사 DLP 구축 및 유출 통제 정책 운영',
        domain: '금융기관, 공공기관, 제조·서비스 기업 등',
        summary: '신규 구축 15개, 유지보수 40개 사이트에서 고객 환경에 맞는 유출 통제 정책을 설계·운영했습니다.',
        tasks: [
          '고객사 보안 요건을 반영한 DLP 구축·유지보수 및 정책 설계·적용',
          'Linux·Docker 기반 서버 구축·업그레이드 및 서버·에이전트 장애 분석',
          '신용평가사·캐피탈사 대상 저장 매체·파일 첨부·출력물 통제 정책 구성',
          '업무 영향 분석을 바탕으로 예외 정책 및 단계적 적용 기준 수립',
          '반복 장애·정책 이슈 유형별 분류, 대응 절차 정리 및 고객사 기술 협의',
        ],
        results: [
          '고객사의 보안 요건과 업무 환경을 반영한 유출 통제 정책 운영',
          '반복 이슈 대응 절차 표준화로 동일 이슈 처리 시간 단축',
        ],
        role: '고객사 구축·운영 엔지니어: 서버 구축, 정책 설계·적용, 장애 대응, 고객사 보안 담당자 협의',
        skills: ['DLP', 'Linux (CentOS·Rocky)', 'Docker', '유출 통제 정책', '예외 정책 관리', '로그 분석'],
      },
      {
        title: '로그 분석 기반 데이터 유출 시도 탐지',
        domain: '헬스케어 플랫폼 기업, 엔터테인먼트 기업',
        summary: '확장자를 바꿔 DLP 정책을 우회하려던 시도를 파일 단위 검증으로 확인했습니다.',
        tasks: [
          'Splunk 연동 환경의 로그 수집 구조 구성 및 분석 지원',
          '사용자 행위 로그에서 파일 확장자 변조 기반 DLP 정책 우회 시도 탐지',
          'File Hash·파일 시그니처·Magic Number 분석으로 실제 파일 형식과 내용 확인',
          '관련 부서와 분석 결과 공유 및 차단·후속 조치 지원',
        ],
        results: [
          '로그의 이상 행위를 파일 단위로 검증해 정책 우회 시도 확인',
          '분석 근거를 관련 부서에 제공하고 차단·후속 조치로 연결',
        ],
        role: '로그 수집 연동 지원, 사용자 행위 분석, 파일 검증 및 후속 조치 지원',
        skills: ['Splunk', '행위 분석', 'File Hash', '파일 시그니처', 'Magic Number'],
      },
      {
        title: '보안솔루션 간 충돌 분석 및 운영 기준 정립',
        domain: '제조·서비스 기업',
        summary: 'DLP와 DRM의 Hook 충돌, 파일 I/O 처리 순서 문제를 찾아 정책·예외 범위를 조정했습니다.',
        tasks: [
          'DLP·DRM 간 파일 제어 충돌에 따른 프로그램 비정상 종료·접근 오류 분석',
          '파일 접근 로그와 프로세스 흐름 추적으로 Hook 충돌 및 파일 I/O 처리 순서 문제 식별',
          '솔루션별 제어 범위 비교 후 정책 조정·예외 처리 기준 수립',
          '고객사·벤더와 기술 대응 방안 협의',
          '분석 결과와 대응 방법을 동일 유형 충돌에 활용할 수 있도록 문서화',
        ],
        results: [
          '충돌 원인을 근거로 정책·예외 범위를 조정해 업무 중단 최소화',
          '유사 충돌에 대응하기 위한 운영 기준 정립',
        ],
        role: '충돌 원인 분석, 정책·예외 조정 방안 수립 및 고객사·벤더 기술 협의',
        skills: ['DLP', 'DRM', '파일 접근 로그', '프로세스 분석', 'Hook·파일 I/O 분석'],
      },
      {
        title: 'OS·DBMS 취약점 점검 및 보안 설정 관리',
        domain: '고객사 DLP 서버 및 DBMS',
        summary: 'ISMS 기준으로 OS·DBMS를 점검하고, 결과를 설정 개선과 조치 문서로 연결했습니다.',
        tasks: [
          'ISMS 기준에 따른 OS·DBMS 취약점 점검',
          '계정 관리, SSH 접근 통제, 서비스·포트, 파일·디렉터리 권한 등 주요 항목 확인',
          '기준 미준수 항목의 원인 분석 및 시스템 환경에 맞는 보안 설정 개선',
          '취약점 조치 가이드 및 결과 보고서 작성',
        ],
        results: [
          '항목별 취약점과 조치 내용을 정리해 고객사 후속 관리 지원',
          '기술적 점검 결과를 설정 개선과 조치 문서로 연결',
        ],
        role: '기술적 보안 점검, 보안 설정 개선 및 조치 가이드·결과 보고서 작성',
        skills: ['ISMS 점검 기준', 'Linux 보안 설정', 'DBMS 보안 설정', '조치 문서화'],
      },
      {
        title: '구축·운영 자동화 및 계정·권한 연동',
        domain: '고객사 구축 환경 및 사내 기술지원 업무',
        summary: '반복 설정을 스크립트로 표준화하고, 인사 DB와 보안시스템의 계정·권한을 연계했습니다.',
        tasks: [
          '반복 서버 설정 작업의 Shell Script 자동화 및 DLP 구축·업그레이드 절차 표준화',
          'Make 기반 기술지원 기록 정리·요약·등록 워크플로우 설계',
          'MySQL·MariaDB·MS SQL Server 기반 인사 DB 및 API 연동',
          '계정 자동 동기화 구조 설계·운영 및 조직도 기반 권한 관리 정책 수립',
        ],
        results: [
          '반복 설정 작업 표준화로 수행 시간 단축',
          '기술지원 대응 이력을 관리하는 자동화 흐름 구성',
          '인사정보 변경 사항과 보안시스템 계정·권한 관리 연계',
        ],
        role: '자동화 설계·구현, 계정 동기화 구조 설계 및 권한 관리 정책 구성',
        skills: ['Shell Script', 'Make', 'MySQL', 'MariaDB', 'MS SQL Server', 'DB·API 연동'],
      },
    ],
  },
  {
    name: '한신그레이스',
    team: 'E-Business 경영지원팀',
    period: '2021.11 – 2022.12',
    scope: '경영지원 업무와 사내 정보보호·시스템 권한 관리 병행',
    items: [
      {
        title: '사내 정보보호 및 접근권한 관리',
        domain: '3M 산업자재 총판의 제품·거래정보 및 ERP 사용자 권한',
        summary: '경영지원 업무와 함께 DLP 기반 정보 유출 방지와 ERP 접근권한 관리를 맡았습니다.',
        tasks: [
          'DLP 솔루션을 활용한 산업자재 제품 관련 정보의 외부 유출 방지',
          'ERP 내 회계·거래 데이터에 대한 사용자 접근 권한 점검 및 관리',
          '내부 사용자 계정과 데이터 접근 이력 관리, 이상 행위 모니터링',
        ],
        results: [
          'E-Business 경영지원 업무와 정보보호·시스템 권한 관리 업무 병행',
          '제품·거래정보 보호 및 사용자 접근권한 관리 지원',
        ],
        resultsLabel: '업무 수행 범위',
        role: '경영지원 담당자로서 사내 정보보호 및 시스템 접근권한 관리 업무 병행',
        skills: ['DLP 활용', 'ERP 접근권한 관리', '계정·접근 이력 관리'],
      },
    ],
  },
];

const career = [
  {
    period: '2026.07 – 현재',
    org: '아이디에스앤트러스트',
    role: '보안운영파트',
    desc: '대웅그룹 19개 계열사 엔드포인트 보안 운영, 보안정책·예외 관리, EDR 도입 평가',
  },
  {
    period: '2023.07 – 2026.07',
    org: '지란지교소프트',
    role: '구축운영팀 보안엔지니어',
    desc: '금융·공공기관 DLP 구축 15개, 유지보수 40개 사이트, 침해사고 분석과 운영 자동화',
  },
  {
    period: '2023.01 – 2023.06',
    org: 'KH정보교육원',
    role: '정보보안 전문가 양성과정',
    desc: '네트워크·시스템 보안 구축과 운영, 보안 로그와 침해사고 분석',
  },
  {
    period: '2021.11 – 2022.12',
    org: '한신그레이스',
    role: 'E-Business 경영지원팀',
    desc: '경영지원과 함께 DLP 기반 정보 유출 방지, ERP 접근 권한 관리',
  },
];

const skills = [
  { group: '보안솔루션', items: ['DLP', 'DRM', 'EDR', 'MDM', '문서중앙화(ECM)', 'VPN', 'Splunk'] },
  { group: '시스템', items: ['Linux (CentOS, Rocky)', 'Docker', 'VMware', 'Apache', 'Zabbix'] },
  { group: '데이터', items: ['MySQL', 'MariaDB', 'MS SQL Server', 'API 연동'] },
  { group: '자동화', items: ['Shell Script', 'Python', 'Google Apps Script', 'Make'] },
  { group: '보안 관리', items: ['보안정책·예외 관리', '보안솔루션 POC·도입 평가', 'OS·DBMS 취약점 점검', '사용자 보안교육'] },
];

const clients = [
  { group: '금융', names: '캐피탈 2곳, 신용정보 1곳' },
  { group: '공공', names: '중앙 공공기관, 관측기관' },
  { group: '기업', names: '헬스케어 플랫폼, 엔터테인먼트, 제조' },
  { group: '그룹사', names: '제약그룹 19개 계열사' },
];

const nav = [
  { href: '#cases', label: '경력기술서' },
  { href: '#practice', label: '전문 영역' },
  { href: '#career', label: '경력' },
  { href: '#contact', label: '연락처' },
];

const icons = [Server, Activity, FileSearch, ClipboardCheck, Shield, Zap];

// 숫자 카운트업 (한 번만, 화면에 보일 때)
function useInView(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return seen;
}

function Count({ value }) {
  const m = value.match(/^([\d,]+)(.*)$/);
  const ref = useRef(null);
  const seen = useInView(ref);
  const target = m ? parseInt(m[1].replace(/,/g, ''), 10) : 0;
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!m || !seen) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setN(target); return; }
    let raf; const t0 = performance.now(); const dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen]);
  if (!m) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{n.toLocaleString('ko-KR')}{m[2]}</span>;
}

function TraceBand() {
  const ref = useRef(null);
  const seen = useInView(ref);
  return (
    <section className="traceband" aria-labelledby="trace-h" ref={ref}>
      <svg className="tb-grid" aria-hidden="true"><defs><pattern id="g" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="rgba(255,255,255,0.07)" /></pattern></defs><rect width="100%" height="100%" fill="url(#g)" /></svg>
      <div className="wrap">
        <h2 id="trace-h">원인을 끝까지 좁혀간 방식</h2>
        <p className="tb-sub">공공기관 침해사고 대응에서 실제로 분석 범위를 넓혀간 순서입니다.</p>
        <ol className={seen ? 'run' : ''}>
          {trace.map((t, i) => (
            <li key={t.step} className={t.done ? 'done' : ''} style={{ '--d': `${0.25 + i * 0.35}s` }}>
              <span className="node" aria-hidden="true">{t.done ? <Check size={16} strokeWidth={3} /> : i + 1}</span>
              <strong>{t.step}</strong>
              <em>{t.note}</em>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const css = `
:root {
  --paper: #ffffff;
  --ice: #f2f7ff;
  --ice2: #e6efff;
  --blue: #1e5eff;
  --sky: #5aa9ff;
  --deep: #0b2a6f;
  --ink: #0e1a33;
  --slate: #5a6a85;
  --rule: #dfe7f3;
}
html { scroll-behavior: smooth; }
body { background: var(--paper); }
.pf { background: var(--paper); color: var(--ink); font-family: 'IBM Plex Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; font-size: 17px; line-height: 1.7; word-break: keep-all; overflow-x: hidden; }
.pf a { color: inherit; }
.pf :focus-visible { outline: 3px solid var(--sky); outline-offset: 3px; border-radius: 4px; }
.wrap { max-width: 1160px; margin: 0 auto; padding: 0 28px; position: relative; }

/* header */
.top { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--rule); }
.top .wrap { display: flex; align-items: center; justify-content: space-between; height: 66px; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 600; text-decoration: none; color: var(--deep) !important; }
.brand i { width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(135deg, var(--blue), var(--sky)); display: grid; place-items: center; color: #fff; }
.brand small { font-weight: 400; color: var(--slate); font-size: 14px; }
.top nav { display: flex; gap: 6px; font-size: 15px; }
.top nav a { text-decoration: none; color: var(--slate); padding: 8px 14px; border-radius: 999px; }
.top nav a:hover { color: var(--blue); background: var(--ice); }
.top .cta { background: var(--blue); color: #fff !important; }
.top .cta:hover { background: var(--deep); color: #fff !important; }

/* hero */
.hero { position: relative; padding: 80px 0 96px; overflow: hidden; }
.hero::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(rgba(30,94,255,0.16) 1.2px, transparent 1.2px); background-size: 26px 26px; mask-image: linear-gradient(110deg, transparent 30%, #000 75%); -webkit-mask-image: linear-gradient(110deg, transparent 30%, #000 75%); }
.blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: .55; pointer-events: none; }
.blob.a { width: 520px; height: 520px; right: -120px; top: -140px; background: radial-gradient(circle, #8fc2ff, transparent 70%); }
.blob.b { width: 420px; height: 420px; right: 260px; bottom: -220px; background: radial-gradient(circle, #b9d4ff, transparent 70%); }
.hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 56px; align-items: center; position: relative; }
.badge { display: inline-flex; align-items: center; gap: 8px; background: var(--ice); color: var(--blue); font-size: 14px; font-weight: 600; padding: 6px 14px 6px 10px; border-radius: 999px; border: 1px solid var(--ice2); }
.badge b { width: 8px; height: 8px; border-radius: 50%; background: var(--blue); box-shadow: 0 0 0 0 rgba(30,94,255,.5); animation: ping 2s infinite; }
@keyframes ping { 0% { box-shadow: 0 0 0 0 rgba(30,94,255,.5);} 80%,100% { box-shadow: 0 0 0 10px rgba(30,94,255,0);} }
.hero h1 { font-size: clamp(2.2rem, 4.8vw, 3.7rem); line-height: 1.22; font-weight: 600; color: var(--ink); margin: 22px 0 0; letter-spacing: -0.025em; }
.hero h1 .grad { background: linear-gradient(100deg, var(--blue) 10%, var(--sky) 90%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero .lead { margin: 24px 0 0; max-width: 34em; color: var(--slate); font-size: 18px; }
.hero .actions { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; font-weight: 600; padding: 13px 22px; border-radius: 10px; font-size: 16px; transition: transform .2s, box-shadow .2s, background .2s; }
.btn.primary { background: linear-gradient(135deg, var(--blue), #3a7bff); color: #fff !important; box-shadow: 0 10px 24px -10px rgba(30,94,255,.7); }
.btn.primary:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -10px rgba(30,94,255,.8); }
.btn.ghost { background: #fff; color: var(--deep) !important; border: 1px solid var(--rule); }
.btn.ghost:hover { border-color: var(--sky); }

/* portrait graphic */
.visual { position: relative; width: 100%; max-width: 420px; justify-self: center; aspect-ratio: 1; }
.visual svg.orbit { position: absolute; inset: -8%; width: 116%; height: 116%; animation: spin 60s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.photo { position: absolute; inset: 13%; border-radius: 50%; padding: 6px; background: linear-gradient(140deg, var(--blue), var(--sky) 60%, #cfe3ff); box-shadow: 0 30px 60px -24px rgba(11,42,111,.55); }
.photo img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: 50% 18%; display: block; background: #fff; border: 5px solid #fff; }
.chip { position: absolute; background: rgba(255,255,255,.95); border: 1px solid var(--ice2); border-radius: 14px; padding: 10px 14px; box-shadow: 0 16px 34px -18px rgba(11,42,111,.45); font-size: 13px; color: var(--slate); line-height: 1.35; animation: float 6s ease-in-out infinite; }
.chip strong { display: block; font-size: 17px; color: var(--deep); }
.chip .ico { display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: 8px; background: var(--ice); color: var(--blue); margin-bottom: 6px; }
.chip.c1 { left: -6%; top: 14%; }
.chip.c2 { right: -8%; top: 44%; animation-delay: -2s; }
.chip.c3 { left: 4%; bottom: 2%; animation-delay: -4s; }
@keyframes float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-10px);} }

/* facts */
.facts { position: relative; margin: -40px auto 0; z-index: 2; }
.facts dl { margin: 0; display: grid; grid-template-columns: repeat(4, 1fr); background: #fff; border: 1px solid var(--rule); border-radius: 18px; box-shadow: 0 24px 48px -30px rgba(11,42,111,.45); overflow: hidden; }
.facts dl div { padding: 26px 28px; border-left: 1px solid var(--rule); }
.facts dl div:first-child { border-left: none; }
.facts dt { font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 600; line-height: 1.1; background: linear-gradient(100deg, var(--deep), var(--blue)); -webkit-background-clip: text; background-clip: text; color: transparent; font-variant-numeric: tabular-nums; }
.facts dd { margin: 8px 0 0; color: var(--slate); font-size: 15px; }

/* trace band */
.traceband { position: relative; margin-top: 96px; padding: 88px 0 96px; background: radial-gradient(120% 140% at 85% 0%, #2f6bff 0%, #123a95 45%, var(--deep) 100%); color: #fff; overflow: hidden; }
.tb-grid { position: absolute; inset: 0; width: 100%; height: 100%; }
.traceband h2 { margin: 0; font-size: clamp(1.7rem, 3.2vw, 2.3rem); font-weight: 600; letter-spacing: -0.01em; }
.tb-sub { color: #bcd2ff; margin: 10px 0 56px; }
.traceband ol { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; position: relative; }
.traceband ol::before { content: ''; position: absolute; left: 20px; right: 20px; top: 20px; height: 2px; background: rgba(255,255,255,.18); }
.traceband ol::after { content: ''; position: absolute; left: 20px; top: 19px; height: 4px; width: 0; border-radius: 4px; background: linear-gradient(90deg, var(--sky), #fff); box-shadow: 0 0 18px 2px rgba(90,169,255,.8); }
.traceband ol.run::after { animation: drawline 2.3s cubic-bezier(.65,0,.35,1) .2s forwards; }
@keyframes drawline { to { width: calc(100% - 40px); } }
.traceband li { position: relative; opacity: .35; transition: opacity .6s var(--d); }
.traceband ol.run li { opacity: 1; }
.node { position: relative; z-index: 1; display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; background: #123a95; border: 2px solid var(--sky); color: #fff; font-weight: 600; font-size: 15px; margin-bottom: 18px; transition: background .5s var(--d), box-shadow .5s var(--d); }
.traceband ol.run .node { background: var(--blue); box-shadow: 0 0 0 6px rgba(90,169,255,.18); }
.traceband li.done .node { background: #fff; color: var(--blue); border-color: #fff; }
.traceband ol.run li.done .node { background: #fff; box-shadow: 0 0 0 8px rgba(255,255,255,.18), 0 0 30px rgba(255,255,255,.6); }
.traceband strong { display: block; font-size: 16px; font-weight: 600; }
.traceband em { font-style: normal; display: block; color: #bcd2ff; font-size: 14px; line-height: 1.5; margin-top: 4px; }

/* sections */
section.block { padding: 104px 0; }
section.tint { background: linear-gradient(180deg, var(--ice) 0%, #fff 100%); }
.head { margin-bottom: 48px; }
.head h2 { font-size: clamp(1.7rem, 3.2vw, 2.3rem); font-weight: 600; margin: 0; letter-spacing: -0.015em; color: var(--ink); }
.head h2::after { content: ''; display: block; width: 44px; height: 4px; border-radius: 4px; margin-top: 14px; background: linear-gradient(90deg, var(--blue), var(--sky)); }
.head p { color: var(--slate); margin: 16px 0 0; max-width: 40em; }

/* about */
.about { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
.about p { margin: 0 0 18px; }
.clients { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 0; }
.clients div { background: #fff; border: 1px solid var(--rule); border-radius: 14px; padding: 18px 20px; }
.clients dt { font-size: 13px; color: var(--blue); font-weight: 600; }
.clients dd { margin: 4px 0 0; font-size: 15.5px; }

/* cases */
.cases { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
.case { background: #fff; border: 1px solid var(--rule); border-radius: 16px; transition: border-color .3s, box-shadow .3s; overflow: hidden; }
.case[open] { border-color: #b9d0ff; box-shadow: 0 20px 40px -28px rgba(30,94,255,.55); }
.case summary { list-style: none; cursor: pointer; display: grid; grid-template-columns: 112px 1fr 36px; gap: 24px; padding: 26px 28px; align-items: start; position: relative; }
.case summary::-webkit-details-marker { display: none; }
.case summary::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(180deg, var(--blue), var(--sky)); opacity: 0; transition: opacity .3s; }
.case[open] summary::before { opacity: 1; }
.case .yr { display: inline-block; justify-self: start; font-size: 13.5px; font-weight: 600; color: var(--blue); background: var(--ice); border-radius: 999px; padding: 3px 12px; font-variant-numeric: tabular-nums; margin-top: 2px; }
.case .title { margin: 0; font-size: 19px; font-weight: 600; color: var(--ink); display: block; }
.case .where { color: var(--slate); font-size: 14.5px; display: block; margin-top: 2px; }
.case .sum { display: block; margin-top: 10px; max-width: 44em; }
.tog { width: 36px; height: 36px; border-radius: 50%; background: var(--ice); position: relative; transition: background .3s; }
.tog::before, .tog::after { content: ''; position: absolute; left: 50%; top: 50%; width: 13px; height: 2px; border-radius: 2px; background: var(--blue); transform: translate(-50%, -50%); transition: transform .3s; }
.tog::after { transform: translate(-50%, -50%) rotate(90deg); }
.case[open] .tog { background: var(--blue); }
.case[open] .tog::before, .case[open] .tog::after { background: #fff; }
.case[open] .tog::after { transform: translate(-50%, -50%) rotate(0); }
.case .more { padding: 4px 28px 28px 164px; }
.case .more p { margin: 0 0 16px; max-width: 44em; color: #2a3854; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; margin: 0; padding: 0; }
.tags li { font-size: 13px; color: var(--blue); background: var(--ice); border: 1px solid var(--ice2); padding: 3px 11px; border-radius: 999px; }

/* companies */
.company + .company { margin-top: 64px; }
.co-head { display: grid; grid-template-columns: auto 1fr auto; gap: 20px; align-items: center; margin-bottom: 18px; }
.co-no { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; font-weight: 600; color: #fff; background: linear-gradient(135deg, var(--deep), var(--blue)); box-shadow: 0 12px 22px -12px rgba(30,94,255,.8); font-variant-numeric: tabular-nums; }
.co-head h3 { margin: 0; font-size: 22px; font-weight: 600; color: var(--ink); }
.co-head h3 span { font-size: 15px; font-weight: 400; color: var(--slate); margin-left: 10px; }
.co-head p { margin: 2px 0 0; color: var(--slate); font-size: 15px; }
.co-period { font-size: 14px; font-weight: 600; color: var(--blue); background: #fff; border: 1px solid var(--ice2); padding: 6px 14px; border-radius: 999px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.more-grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: 32px; margin-bottom: 20px; }
.more h5 { margin: 0 0 10px; font-size: 14px; font-weight: 600; color: var(--deep); }
.tasks { list-style: decimal; margin: 0; padding-left: 22px; color: #2a3854; font-size: 15.5px; }
.tasks li { margin-bottom: 6px; padding-left: 4px; }
.tasks li::marker { color: var(--blue); font-weight: 600; }
.res { background: linear-gradient(160deg, var(--ice), #fff); border: 1px solid var(--ice2); border-radius: 14px; padding: 18px 20px; margin-bottom: 20px; }
.res ul { list-style: none; margin: 0; padding: 0; font-size: 15px; }
.res li { display: grid; grid-template-columns: 22px 1fr; gap: 4px; margin-bottom: 6px; }
.res li svg { color: var(--blue); margin-top: 5px; }
.role { margin: 0; font-size: 15px; color: #2a3854; }

/* practices */
.practice { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin: 0; }
.practice div { background: #fff; border: 1px solid var(--rule); border-radius: 18px; padding: 28px; position: relative; overflow: hidden; transition: transform .3s, box-shadow .3s; }
.practice div:hover { transform: translateY(-4px); box-shadow: 0 24px 44px -30px rgba(30,94,255,.6); }
.practice div::after { content: ''; position: absolute; right: -40px; top: -40px; width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(90,169,255,.18), transparent 70%); }
.practice .ic { width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; color: #fff; background: linear-gradient(135deg, var(--blue), var(--sky)); box-shadow: 0 10px 20px -10px rgba(30,94,255,.8); margin-bottom: 20px; }
.practice dt { font-weight: 600; font-size: 18px; margin-bottom: 8px; }
.practice dd { margin: 0; color: #3b4a66; font-size: 15.5px; }

/* career */
.career-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; }
.career { list-style: none; margin: 0; padding: 0; }
.career li { position: relative; padding: 0 0 34px 40px; }
.career li::before { content: ''; position: absolute; left: 9px; top: 26px; bottom: -4px; width: 2px; background: linear-gradient(180deg, var(--blue), var(--rule)); }
.career li:last-child::before { display: none; }
.career li::after { content: ''; position: absolute; left: 0; top: 4px; width: 20px; height: 20px; border-radius: 50%; background: #fff; border: 3px solid var(--blue); box-sizing: border-box; }
.career li:first-child::after { background: var(--blue); box-shadow: 0 0 0 6px rgba(30,94,255,.15); }
.career .when { color: var(--blue); font-size: 14px; font-weight: 600; font-variant-numeric: tabular-nums; }
.career h3 { margin: 2px 0 0; font-size: 19px; font-weight: 600; }
.career h3 span { font-weight: 400; color: var(--slate); font-size: 15px; margin-left: 8px; }
.career p { margin: 6px 0 0; color: #3b4a66; font-size: 15.5px; }
.skills { display: grid; gap: 22px; align-content: start; }
.skills h3 { font-size: 15px; font-weight: 600; color: var(--deep); margin: 0 0 10px; }
.skills ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.skills li { font-size: 14.5px; background: #fff; border: 1px solid var(--rule); border-radius: 10px; padding: 6px 12px; }
.skills li:hover { border-color: var(--sky); color: var(--blue); }

/* contact */
.contact { position: relative; overflow: hidden; padding: 96px 0; background: linear-gradient(120deg, var(--deep), var(--blue) 70%, #3f86ff); color: #fff; }
.contact svg.rings { position: absolute; right: -160px; top: 50%; transform: translateY(-50%); width: 620px; height: 620px; opacity: .35; }
.contact h2 { margin: 0; font-size: clamp(1.8rem, 3.6vw, 2.6rem); font-weight: 600; letter-spacing: -0.015em; }
.contact p { color: #d3e2ff; margin: 14px 0 36px; max-width: 34em; }
.contact .row { display: flex; flex-wrap: wrap; gap: 14px 28px; align-items: center; }
.btn.white { background: #fff; color: var(--deep) !important; }
.btn.white:hover { transform: translateY(-2px); }
.contact .mail { color: #fff; font-size: 18px; }
footer.foot { padding: 28px 0; font-size: 14px; color: var(--slate); }

@media (max-width: 960px) {
  .top nav a:not(.cta) { display: none; }
  .hero { padding: 48px 0 88px; }
  .hero-grid { grid-template-columns: 1fr; gap: 48px; }
  .visual { max-width: 340px; }
  .facts dl { grid-template-columns: repeat(2, 1fr); }
  .facts dl div:nth-child(3) { border-left: none; }
  .facts dl div:nth-child(n+3) { border-top: 1px solid var(--rule); }
  .traceband ol { grid-template-columns: 1fr; gap: 0; }
  .traceband ol::before, .traceband ol::after { display: none; }
  .traceband li { display: grid; grid-template-columns: 42px 1fr; column-gap: 18px; padding-bottom: 22px; opacity: 1; }
  .traceband li::before { content: ''; position: absolute; left: 20px; top: 46px; bottom: 2px; width: 2px; background: rgba(255,255,255,.25); }
  .traceband li:last-child::before { display: none; }
  .node { grid-row: span 2; margin: 0; }
  .about, .career-grid { grid-template-columns: 1fr; gap: 40px; }
  .practice { grid-template-columns: 1fr; }
  .case summary { grid-template-columns: 1fr 36px; gap: 10px 14px; padding: 22px; }
  .case .yr { grid-column: 1 / -1; }
  .case .more { padding: 0 22px 24px; }
  .more-grid { grid-template-columns: 1fr; gap: 20px; }
  .co-head { grid-template-columns: auto 1fr; }
  .co-period { grid-column: 1 / -1; justify-self: start; }
  .co-head h3 span { display: block; margin: 2px 0 0; }
  section.block { padding: 80px 0; }
}
@media (max-width: 480px) { .chip { display: none; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .traceband ol::after { width: calc(100% - 40px); }
  html { scroll-behavior: auto; }
}
`;

export default function Portfolio() {
  return (
    <div className="pf">
      <style>{css}</style>

      <header className="top">
        <div className="wrap">
          <a href="#top" className="brand"><i><Shield size={16} /></i>류은석<small>정보보안 전문가</small></a>
          <nav aria-label="섹션 이동">
            {nav.slice(0, 3).map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            <a className="cta" href="#contact">연락하기</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <span className="blob a" aria-hidden="true" /><span className="blob b" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div>
              <span className="badge"><b aria-hidden="true" />정보보안 전문가 · 보안 운영 3년+</span>
              <h1>현업에서 꾸준히 작동하는<br /><span className="grad">보안체계를 만듭니다</span></h1>
              <p className="lead">
                보안솔루션을 고객사에 구축하는 엔지니어와 조직 내부에서 운영하는 담당자를 모두 경험했습니다.
                정책이 업무에 주는 영향을 함께 검토하고, 보안 이벤트는 로그와 파일, 네트워크로 직접 확인해 조치와 운영 기준으로 연결합니다.
              </p>
              <div className="actions">
                <a className="btn primary" href="#cases">경력기술서 보기</a>
                <a className="btn ghost" href="mailto:es3411@naver.com"><Mail size={18} />메일 보내기</a>
              </div>
            </div>

            <div className="visual">
              <svg className="orbit" viewBox="0 0 400 400" aria-hidden="true">
                <defs>
                  <linearGradient id="og" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1e5eff" /><stop offset="1" stopColor="#5aa9ff" stopOpacity=".2" /></linearGradient>
                </defs>
                <circle cx="200" cy="200" r="190" fill="none" stroke="url(#og)" strokeWidth="1.5" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="#5aa9ff" strokeOpacity=".35" strokeWidth="1" />
                <circle cx="200" cy="10" r="7" fill="#1e5eff" />
                <circle cx="360" cy="200" r="5" fill="#5aa9ff" />
                <circle cx="87" cy="313" r="6" fill="#1e5eff" fillOpacity=".7" />
              </svg>
              <div className="photo"><img src={portrait} alt="류은석 프로필 사진" /></div>
              <div className="chip c1"><span className="ico"><Server size={15} /></span><strong>19개 계열사</strong>보안정책·예외 관리</div>
              <div className="chip c2"><span className="ico"><Shield size={15} /></span><strong>EDR 도입</strong>평가부터 계약까지</div>
              <div className="chip c3"><span className="ico"><Activity size={15} /></span><strong>침해 분석</strong>유입 경로까지 추적</div>
            </div>
          </div>
        </section>

        <div className="wrap facts">
          <dl>
            {facts.map((f) => (
              <div key={f.label}><dt><Count value={f.value} /></dt><dd>{f.label}</dd></div>
            ))}
          </dl>
        </div>

        <TraceBand />

        <section className="block" aria-labelledby="about-h">
          <div className="wrap about">
            <div>
              <div className="head"><h2 id="about-h">같은 정책도 환경에 따라<br />결과가 달라집니다</h2></div>
              <p>
                3년간 고객사의 DLP를 구축·운영하며 같은 통제라도 고객사의 업무 방식에 따라 전혀 다른 문제가 생기는 것을 봤습니다.
                그래서 정책을 적용할 때는 업무 영향을 먼저 확인하고, 문제가 생기면 증상보다 원인을 찾는 데 시간을 씁니다.
              </p>
              <p>
                지금은 조직 내부의 보안 담당자로서 19개 계열사의 보안솔루션 정책과 예외를 관리하고, 새 솔루션의 도입 평가까지 맡고 있습니다.
                반복되는 일은 자동화하되, 결과를 믿을 수 있도록 기록과 검증을 함께 설계합니다.
              </p>
            </div>
            <dl className="clients" aria-label="함께한 고객">
              {clients.map((c) => (
                <div key={c.group}><dt>{c.group}</dt><dd>{c.names}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="block tint" id="cases" aria-labelledby="cases-h">
          <div className="wrap">
            <div className="head">
              <h2 id="cases-h">경력기술서</h2>
              <p>회사별 주요 프로젝트입니다. 항목을 누르면 수행 내용과 결과, 담당 역할을 볼 수 있습니다.</p>
            </div>
            {companies.map((co, ci) => (
              <div className="company" key={co.name}>
                <div className="co-head">
                  <span className="co-no" aria-hidden="true">{String(ci + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{co.name}<span>{co.team}</span></h3>
                    <p>{co.scope}</p>
                  </div>
                  <span className="co-period">{co.period}</span>
                </div>
                <ul className="cases">
                  {co.items.map((c, i) => (
                    <li key={c.title}>
                      <details className="case" open={ci === 0 && i === 0}>
                        <summary>
                          <span className="yr">{ci + 1}-{i + 1}</span>
                          <span>
                            <span className="title" role="heading" aria-level="4">{c.title}</span>
                            <span className="where">{c.domain}</span>
                            <span className="sum">{c.summary}</span>
                          </span>
                          <span className="tog" aria-hidden="true" />
                        </summary>
                        <div className="more">
                          <div className="more-grid">
                            <div>
                              <h5>주요 수행 내용</h5>
                              <ol className="tasks">{c.tasks.map((t) => <li key={t}>{t}</li>)}</ol>
                            </div>
                            <div className="side">
                              <div className="res">
                                <h5>{c.resultsLabel || '수행 결과'}</h5>
                                <ul>{c.results.map((r) => <li key={r}><Check size={15} strokeWidth={3} aria-hidden="true" />{r}</li>)}</ul>
                              </div>
                              <h5>담당 역할</h5>
                              <p className="role">{c.role}</p>
                            </div>
                          </div>
                          <ul className="tags" aria-label="보유·활용 기술">
                            {c.skills.map((s) => <li key={s}>{s}</li>)}
                          </ul>
                        </div>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="block" id="practice" aria-labelledby="practice-h">
          <div className="wrap">
            <div className="head">
              <h2 id="practice-h">전문 영역</h2>
              <p>보안정책 관리부터 사고 대응, 솔루션 도입, 자동화까지 조직의 정보보안 운영 전반을 다뤄 왔습니다.</p>
            </div>
            <dl className="practice">
              {practices.map((p, i) => {
                const Icon = icons[i];
                return (
                  <div key={p.title}>
                    <span className="ic" aria-hidden="true"><Icon size={22} /></span>
                    <dt>{p.title}</dt><dd>{p.desc}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>

        <section className="block tint" id="career" aria-labelledby="career-h">
          <div className="wrap">
            <div className="head">
              <h2 id="career-h">경력과 기술</h2>
              <p>총 경력 4년 6개월, 정보보안 실무 경력 3년 이상</p>
            </div>
            <div className="career-grid">
              <ol className="career">
                {career.map((c) => (
                  <li key={c.org}>
                    <div className="when">{c.period}</div>
                    <h3>{c.org}<span>{c.role}</span></h3>
                    <p>{c.desc}</p>
                  </li>
                ))}
              </ol>
              <div className="skills">
                {skills.map((s) => (
                  <div key={s.group}>
                    <h3>{s.group}</h3>
                    <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-h">
          <svg className="rings" viewBox="0 0 600 600" aria-hidden="true">
            {[280, 220, 160, 100].map((r) => <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="#fff" strokeWidth="1.2" />)}
            <circle cx="300" cy="20" r="8" fill="#fff" />
          </svg>
          <div className="wrap">
            <h2 id="contact-h">함께 일할 기회를 기다립니다</h2>
            <p>정보보안 담당자, 보안 운영과 관련된 제안이라면 편하게 연락 주세요.</p>
            <div className="row">
              <a className="btn white" href="mailto:es3411@naver.com"><Mail size={18} />메일 보내기</a>
              <a className="mail" href="mailto:es3411@naver.com">es3411@naver.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot"><div className="wrap">© 2026 류은석 · 서울</div></footer>
    </div>
  );
}
