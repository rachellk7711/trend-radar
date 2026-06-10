/**
 * firebase-config.js
 * 
 * 트렌드 레이더 웹앱을 위한 Firebase 초기화 설정 파일입니다.
 * 백엔드 서버 없이 프론트엔드에서 바로 Firebase Auth(구글 로그인) 및 Firestore를 
 * 연동할 수 있도록 Firebase Web SDK v10 (ES Module CDN)을 활용해 초기화합니다.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase 설정값 객체
// Vite 환경 변수(import.meta.env)를 통해 .env 파일의 값을 로드합니다.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 서비스 인스턴스 획득
const auth = getAuth(app);
const db = getFirestore(app);

// 구글 로그인 공급자(Google Auth Provider) 생성 및 설정
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account' // 로그인 시 항상 계정 선택 창이 뜨도록 설정
});

// 필요한 모듈 및 인스턴스를 외부에서 사용할 수 있도록 export
export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc
};
