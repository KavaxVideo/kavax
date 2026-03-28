'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Zap, Shield, Rocket, CreditCard, Landmark, Check, X, Copy, CheckCircle2, Users, AlertTriangle, Wallet, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [showVision, setShowVision] = useState(false);
  const [showIbanModal, setShowIbanModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("TR29 0006 4000 0011 2340 6433 40");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, 20, 0], scale: [1, 1.02, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[80%] h-[20%] rounded-full bg-fuchsia-600/10 blur-[150px]" 
        />
      </div>

      {/* Navbar */}
      <header className="relative z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-[30px] h-[30px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg opacity-20 blur-sm" />
              <svg viewBox="0 0 100 100" className="w-6 h-6 relative z-10">
                <path d="M15 10 L35 10 L50 35 L65 10 L85 10 L58 50 L85 90 L65 90 L50 65 L35 90 L15 90 L42 50 Z" fill="white" />
                <path d="M25 15 L32 15 L50 42 L68 15 L75 15 L54 48 L75 85 L68 85 L50 58 L32 85 L25 85 L46 52 Z" fill="black" />
              </svg>
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-white">KAVAX</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sistem</a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Erişim</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">İletişim</a>
          </nav>
          <a href="#pricing" className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
            Sisteme Gir
          </a>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase leading-[1.1]"
            >
              Yalanlarla uyuşmayı <motion.span 
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 4px rgba(168,85,247,0.3))", 
                    "drop-shadow(0 0 8px rgba(168,85,247,0.5))", 
                    "drop-shadow(0 0 4px rgba(168,85,247,0.3))"
                  ],
                  opacity: [0.9, 1, 0.9]
                }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              >
                Bırak
              </motion.span><br/>
              Gerçeklerle <motion.span 
                animate={{ 
                  backgroundPosition: ["0% center", "200% center"],
                  filter: [
                    "drop-shadow(0 0 4px rgba(59,130,246,0.3))", 
                    "drop-shadow(0 0 8px rgba(59,130,246,0.5))", 
                    "drop-shadow(0 0 4px rgba(59,130,246,0.3))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-[length:200%_auto]"
              >
                Yüksel
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 mb-12 font-medium"
            >
              Sana dayatılan illüzyonları yık. Sistemin acımasız gerçekleriyle yüzleşerek finansal ve zihinsel özgürlüğüne giden yolu inşa et. Uyanışa katıl.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#pricing" className="w-full sm:w-auto relative overflow-hidden group inline-flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <span className="relative z-10 flex items-center">
                  Hemen Başla
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              </a>
              <button 
                onClick={() => setShowVision(true)}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:bg-white/10"
              >
                Vizyonu Gör
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features / Manifesto */}
        <section id="about" className="py-24 px-6 bg-black/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Hız ve Odak</h3>
                <p className="text-gray-400 leading-relaxed font-medium">Gereksiz teoriler yok. Sadece seni hedefine en hızlı ulaştıracak saf bilgi ve pratik uygulamalar.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Filtresiz Gerçekler</h3>
                <p className="text-gray-400 leading-relaxed font-medium">Sektörün acımasız gerçekleri. Rekabette öne geçmen için tasarlanmış, sansürsüz ve doğrudan stratejiler.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-fuchsia-500/20 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Elit Topluluk</h3>
                <p className="text-gray-400 leading-relaxed font-medium">Seninle aynı vizyonu paylaşan, başarıya aç insanlardan oluşan özel bir ağa dahil ol.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Sisteme <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Erişim Sağla</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Sana uygun ödeme yöntemini seç ve hemen sisteme dahil ol. <span className="text-purple-400 font-bold">Hafta sonuna özel "Köle Serbestlik Günü" indirimiyle</span> tek seferlik ödeme, ömür boyu sınırsız erişim.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* IBAN Option */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm flex flex-col"
              >
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 border border-purple-500/50 px-3 py-1 text-xs font-bold text-purple-300 uppercase tracking-wider">
                    Avantajlı
                  </span>
                </div>
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                    <Landmark className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Havale / EFT</h3>
                  <p className="text-gray-400 text-sm font-medium">Banka transferi ile daha uygun fiyata erişim sağla.</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest text-purple-400/80 font-bold">Köle Serbestlik Günü (Hafta Sonu)</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black font-display">200</span>
                    <span className="text-xl text-gray-400 font-bold">TL</span>
                    <span className="text-xs text-gray-500 ml-1 font-medium tracking-wide line-through">790 TL</span>
                    <span className="text-xs text-gray-500 ml-1 font-medium tracking-wide">/ tek seferlik</span>
                  </div>
                </div>
                <div className="mb-8 flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="font-medium">Tüm içeriklere anında ve sınırsız erişim</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="font-medium">Kendin gibi vizyonerlerle özel iletişim ağı</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="font-medium">Gelecek tüm güncellemelere ömür boyu ücretsiz erişim</span>
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => setShowIbanModal(true)}
                  className="w-full h-14 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-colors relative overflow-hidden group"
                >
                  <span className="relative z-10">IBAN ile Öde</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </motion.div>

              {/* Credit Card Option */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 rounded-3xl border-gradient bg-black/60 backdrop-blur-sm flex flex-col box-glow"
              >
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                    <CreditCard className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Kredi Kartı</h3>
                  <p className="text-gray-400 text-sm font-medium">Hızlı ve güvenli online ödeme ile anında başla.</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest text-blue-400/80 font-bold">Köle Serbestlik Günü (Hafta Sonu)</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black font-display">250</span>
                    <span className="text-xl text-gray-400 font-bold">TL</span>
                    <span className="text-xs text-gray-500 ml-1 font-medium tracking-wide line-through">990 TL</span>
                    <span className="text-xs text-gray-500 ml-1 font-medium tracking-wide">/ tek seferlik</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="font-medium">Tüm içeriklere anında ve sınırsız erişim</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="font-medium">Kendin gibi vizyonerlerle özel iletişim ağı</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="font-medium">Gelecek tüm güncellemelere ömür boyu ücretsiz erişim</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="font-medium">Taksit imkanı (Bankaya göre değişir)</span>
                  </li>
                </ul>
                <a 
                  href="https://www.shopier.com/kavax/45561981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden group"
                >
                  <span className="relative z-10">Kart ile Öde</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/80 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 100" className="w-[18px] h-[18px] relative z-10">
              <path d="M15 10 L35 10 L50 35 L65 10 L85 10 L58 50 L85 90 L65 90 L50 65 L35 90 L15 90 L42 50 Z" fill="white" />
              <path d="M25 15 L32 15 L50 42 L68 15 L75 15 L54 48 L75 85 L68 85 L50 58 L32 85 L25 85 L46 52 Z" fill="black" />
            </svg>
            <span className="font-display font-bold text-xl tracking-wider text-white">KAVAX</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} Kavax. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Gizlilik Politikası</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Kullanım Şartları</a>
          </div>
        </div>
      </footer>

      {/* IBAN Modal */}
      <AnimatePresence>
        {showIbanModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowIbanModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-lg w-full bg-[#110C1D] border border-purple-500/20 rounded-xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl md:text-2xl font-black italic tracking-wide flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-purple-500 w-6 h-6" />
                ÖDEME_PROTOKOLÜ // AKTİF
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Kurucu erişimi için ödemeyi aşağıdaki IBAN adresine gerçekleştirin. İşlem sonrası erişim anahtarınız tanımlanacaktır.
              </p>
              
              <p className="text-blue-400 text-xs font-bold mb-6 flex items-center gap-2">
                <Users className="w-4 h-4" /> BU ÖZEL FİYATTAN SADECE İLK 100 KİŞİ FAYDALANACAKTIR.
              </p>
              
              <div className="bg-red-500/10 border border-red-500/30 rounded-md p-3 mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-500 w-5 h-5 shrink-0" />
                <span className="text-red-500 text-xs font-bold tracking-wider">KRİTİK: AÇIKLAMAYA SADECE MAİL ADRESİNİZİ YAZIN</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Ödenecek Tutar</p>
                  <p className="text-2xl font-black italic flex items-center gap-2 tracking-tighter">
                    <Wallet className="w-5 h-5 text-gray-400"/> 200 TL
                  </p>
                </div>
                <div>
                  <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Alıcı</p>
                  <p className="text-sm font-bold">MUHAMMET ALI TEKDEMIR</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">IBAN Adresi</p>
                <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-md p-3 group hover:border-purple-500/50 transition-colors">
                  <code className="text-sm md:text-base font-mono text-gray-300 tracking-tight">TR29 0006 4000 0011 2340 6433 40</code>
                  <button 
                    onClick={handleCopy} 
                    className="text-gray-400 hover:text-white transition-colors p-2 -mr-2 rounded-md hover:bg-white/5"
                    title="Kopyala"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-blue-400 text-[10px] font-bold mt-3 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> GÜVENLİ TRANSFER HATTI
                </p>
              </div>

              <div className="flex gap-3 justify-end">
                <button 
                  onClick={() => setShowIbanModal(false)} 
                  className="px-6 py-3 rounded-md text-xs font-bold text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  VAZGEÇ
                </button>
                <button 
                  onClick={() => setShowIbanModal(false)} 
                  className="px-6 py-3 rounded-md text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  TAMAMLANDI
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vision Modal */}
      <AnimatePresence>
        {showVision && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowVision(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full bg-[#0a0514] border border-purple-500/30 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowVision(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                  GELENEKSEL EĞİTİM YATIRIM GETİRİSİ DÜŞÜK BİR KÖLELİK FABRİKASIDIR.
                </h2>
                <div className="mt-8 mb-10 h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                
                <button 
                  onClick={() => setShowVision(false)}
                  className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
                >
                  MESAJI KAPAT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
