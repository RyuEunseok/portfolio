# Eunseok Ryu · Portfolio

Security Engineer 포트폴리오 — React + Vite + Tailwind 기반.

---

## 📦 배포 가이드 (터미널 없이, 완전 무료)

이 프로젝트는 **Node.js 설치 없이 웹 브라우저만으로 배포**할 수 있습니다. 총 소요 시간 15~20분.

### 1단계 · GitHub 준비 (5분)

**GitHub 계정이 없다면:**
1. [github.com](https://github.com)에서 `Sign up` 클릭
2. 이메일·비밀번호·사용자명 입력 (사용자명은 URL에 쓰입니다. 예: `eunseok-ryu`)
3. 이메일 인증 완료

**새 저장소(Repository) 생성:**
1. GitHub 우측 상단 `+` 버튼 → `New repository`
2. Repository name: `portfolio` (원하는 이름)
3. **Public** 선택 (무료 배포를 위해 필수)
4. `Create repository` 클릭

### 2단계 · 코드 업로드 (3분)

1. 방금 만든 저장소 페이지에서 **`uploading an existing file`** 링크 클릭
   - (또는 `Add file` → `Upload files`)
2. 이 프로젝트 폴더의 **모든 파일과 폴더**를 드래그 앤 드롭으로 올립니다
   - `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `README.md`, `.gitignore`
   - `src/` 폴더 전체 (`App.jsx`, `main.jsx`, `index.css` 포함)
3. 스크롤 내려서 `Commit changes` 버튼 클릭

> ⚠️ `node_modules`, `dist` 폴더는 올리지 마세요 (없어도 Vercel이 자동으로 만들어줍니다).

### 3단계 · Vercel에 배포 (5분)

1. [vercel.com](https://vercel.com) 접속 → `Sign up`
2. **`Continue with GitHub`** 선택 (GitHub 계정으로 바로 로그인)
3. 권한 승인
4. 대시보드에서 `Add New...` → `Project` 클릭
5. 방금 만든 `portfolio` 저장소 옆의 **`Import`** 버튼 클릭
6. 설정은 그대로 두고(Vercel이 Vite를 자동 감지) **`Deploy`** 클릭
7. 1~2분 기다리면 빌드 완료 🎉

### 4단계 · 주소 확인

배포가 끝나면 Vercel이 주소를 보여줍니다:

```
https://portfolio-xxxxx.vercel.app
```

이 주소로 누구나 접속할 수 있어요. **원하는 서브도메인으로 변경**할 수도 있습니다:

1. 프로젝트 페이지 → `Settings` → `Domains`
2. `portfolio-xxxxx.vercel.app` 옆 편집 아이콘
3. `eunseok-ryu.vercel.app`처럼 원하는 이름으로 변경 (가능하면)

---

## 🔄 코드 수정하는 법 (이메일, 사진 교체 등)

배포 후 수정하고 싶은 게 생기면:

1. GitHub 저장소 페이지로 이동
2. 수정할 파일 클릭 (예: `src/App.jsx`)
3. 우측 상단 연필 아이콘 클릭
4. 내용 수정 후 `Commit changes`
5. Vercel이 **자동으로** 1분 내 재배포합니다 ✨

---

## 🎨 자주 바꾸고 싶을만한 것들

`src/App.jsx` 파일에서:

| 내용 | 검색어 (Ctrl+F로 찾기) |
|---|---|
| 이메일 주소 | `es3411@naver.com` |
| 전화번호 | `010-5647-5477` |
| GitHub · LinkedIn 링크 | `href="#"` |
| 프로필 사진 | `PORTRAIT_SRC` (새 이미지로 교체 시 base64로 변환 필요) |
| 클라이언트 도메인 | `KCB` 검색 |

---

## 🌐 나중에 커스텀 도메인 붙이고 싶다면

예: `ryu-security.com`, `eunseok.dev` 등

1. 가비아(한국), Namecheap(해외), Cloudflare 등에서 도메인 구매 (연 1~2만원)
2. Vercel 프로젝트 → `Settings` → `Domains` → `Add`
3. 도메인 입력하면 DNS 설정 안내 표시
4. 도메인 구매처 관리 페이지에서 안내된 DNS 값을 입력
5. 10분~24시간 내 반영 (보통은 10분 이내)

Vercel이 HTTPS 인증서까지 자동으로 설정해줍니다.

---

## 🛠 기술 스택

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Fraunces, Instrument Sans, Noto Serif KR, JetBrains Mono (Google Fonts)
- **Hosting**: Vercel (자동 CDN, HTTPS, CI/CD)

---

© 2026 Eunseok Ryu
