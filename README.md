# 📡 Trend Radar (트렌드 레이더)

GitHub API와 Firebase를 결합하여 실시간 오픈소스 기술 트렌드를 분석하고 북마크할 수 있는 프리미엄 대시보드 웹 애플리케이션입니다.

---

## ✨ 주요 기능

1. **실시간 트렌드 분석 및 생태계 비중 차트**
   * GitHub API를 통해 실시간 생성형 AI, 프론트엔드, 백엔드 등 주요 기술 분야의 트렌드를 추적합니다.
   * `ApexCharts`를 활용해 주요 기술 생태계의 프로젝트 비중을 시각화(Donut Chart)하여 보여줍니다.

2. **💡 AI 친절한 해설 보기 (Gemini AI)**
   * 초보 개발자나 입문자도 직관적으로 이해할 수 있도록, AI(Gemini 2.5)가 레포지토리의 핵심 기능과 쓰임새를 현실의 비유를 들어 설명합니다.
   * ChatGPT 스타일의 **실시간 타이핑 애니메이션(Typewriter Effect)**과 핵심 키워드를 나타내는 **태그 배지**를 제공합니다.
   * API 쿼터 초과 시 자동으로 GitHub 설명을 한글로 번역하여 제공하는 **지능형 폴백(Fallback) 기능**이 내장되어 있습니다.

3. **구글 로그인 & 내 보따리 (스크랩 보관함)**
   * Firebase Auth를 이용한 구글 로그인 기능으로 개별 유저 세션을 관리합니다.
   * 관심 있는 오픈소스를 '내 보따리'에 스크랩하고, 개인 메모를 작성하여 Firestore에 실시간 동기화 및 저장할 수 있습니다.

4. **빅테크 및 셀럽 피드**
   * OpenAI, Meta, DeepMind 등 기술 선도 기업과 유명 개발자(Karpathy 등)의 최신 프로젝트를 모아 볼 수 있습니다.
   * 원하는 GitHub 사용자명을 입력해 나만의 맞춤 관심 개발자 목록을 생성할 수 있습니다.

---

## 🛠️ 기술 스택
* **Front-end:** vanilla HTML5, Vanilla CSS3 (Custom Glassmorphism 테마), Javascript (ES Modules)
* **CSS Framework:** Tabler (Bootstrap 기반 프리미엄 UI 킷)
* **Dev Server & Bundler:** Vite
* **Database & Auth:** Firebase Web SDK v10 (Authentication & Cloud Firestore)
* **AI API:** Google Gemini API (v1beta)

---

## 🚀 시작하기

### 1. 패키지 설치 및 로컬 서버 구동

본 프로젝트는 `pnpm` 또는 `npm`을 사용해 실행할 수 있습니다.

```bash
# 의존성 패키지 설치
npm install  # 또는 pnpm install

# 로컬 개발 서버 실행
npm run dev  # 또는 pnpm dev
```
실행이 완료되면 기본적으로 [http://localhost:5173/](http://localhost:5173/) 주소로 로컬 서버가 시작됩니다.

### 2. 환경 변수 설정 (`.env`)

프로젝트 루트 폴더에 `.env` 파일을 생성하고, Firebase 프로젝트 및 Gemini API 키 정보를 채워 넣습니다.
(템플릿은 `.env.example` 파일을 참고하세요.)

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Gemini AI API Key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

---

## ⚠️ 배포 시 주의사항 (구글 로그인 관련)

커스텀 도메인(예: `git.banax.xyz`)에 서비스를 배포하여 구글 로그인 기능이 정상 작동하도록 하려면 **Firebase 승인된 도메인 등록**이 필수적으로 필요합니다.

1. **[Firebase Console](https://console.firebase.google.com/)** 접속 후 프로젝트 선택
2. **Authentication (인증)** -> **Settings (설정)** -> **Authorized domains (승인된 도메인)** 탭으로 이동
3. `Domain 추가` 버튼을 클릭하고 서비스 중인 도메인(예: **`git.banax.xyz`**)을 등록
