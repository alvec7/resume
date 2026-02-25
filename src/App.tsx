import { useState, useEffect, useRef, type ReactNode } from 'react';
import {
  Mail, Phone, Send, MapPin, Briefcase, GraduationCap,
  Award, TrendingUp, Users, Globe, ChevronDown,
  ExternalLink, Anchor, Zap, BarChart3, Target,
  Menu, X, Star, ArrowRight, Sparkles
} from 'lucide-react';

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Geometric decorative shapes ─── */
function DecoShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-coral-500/5 blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-coral-400/3 blur-3xl" />
    </div>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: 'Опыт', href: '#experience' },
    { label: 'Достижения', href: '#achievements' },
    { label: 'Навыки', href: '#skills' },
    { label: 'Образование', href: '#education' },
    { label: 'Контакт', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-xl text-white tracking-tight">
          A<span className="text-coral-500">V</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-coral-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-coral-500 hover:bg-coral-600 text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-coral-500/25">
            Написать
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/80 hover:text-white">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-coral-400 transition-colors font-medium border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 block text-center px-5 py-3 bg-coral-500 text-white font-semibold rounded-full">
            Написать
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy-950 noise-bg overflow-hidden">
      <DecoShapes />
      {/* Geometric grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-500/10 border border-coral-500/20 rounded-full mb-6">
                <Anchor size={14} className="text-coral-400" />
                <span className="text-coral-400 text-sm font-medium">Travel-Tech · Marketing · Growth</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Александр<br />
                <span className="gradient-text">Вечерский</span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
              <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
                Директор по маркетингу · CMO · CCO
              </p>
              <p className="mt-4 text-lg text-white/40 max-w-lg leading-relaxed">
                18+ лет в маркетинге, PR и продуктовом менеджменте. Строю стартапы, создаю бренды, масштабирую бизнесы и вывожу их на новые рынки.
              </p>
            </div>

            <div className="animate-fade-in-up delay-400 opacity-0 flex flex-wrap gap-4" style={{ animationFillMode: 'forwards' }}>
              <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-coral-500/25 hover:-translate-y-0.5">
                Связаться со мной
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-semibold rounded-full transition-all hover:-translate-y-0.5">
                Смотреть опыт
                <ChevronDown size={18} />
              </a>
            </div>

            <div className="animate-fade-in-up delay-600 opacity-0 flex flex-wrap items-center gap-6 pt-4" style={{ animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} />
                <span>Санкт-Петербург</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Globe size={14} />
                <span>EN C1 · DE B2</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Briefcase size={14} />
                <span>Готов к релокации в Москву</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative animate-scale-in delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
              {/* Abstract decorative card */}
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-coral-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 flex items-center justify-center mb-4 animate-pulse-glow">
                    <Sparkles size={28} className="text-white" />
                  </div>
                  <div className="text-white/30 text-xs font-mono uppercase tracking-widest">Featured</div>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="text-white font-display font-bold text-lg">ImSkipper</div>
                  <div className="text-white/50 text-sm">Лучший Travel-Tech стартап 2025</div>
                  <div className="text-coral-400 text-xs font-mono">MITT Travel Start</div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-coral-400 fill-coral-400" />)}
                  </div>
                </div>

                {/* Decorative lines */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
              </div>

              {/* Floating accent shapes */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-lg bg-coral-500/20 border border-coral-500/30 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Key Numbers ─── */
function KeyNumbers() {
  const stats = [
    { value: '18+', label: 'лет опыта', icon: <Briefcase size={20} /> },
    { value: 'x8', label: 'рост GMV (ImSkipper)', icon: <TrendingUp size={20} /> },
    { value: '5000+', label: 'публикаций в СМИ (Selectel)', icon: <BarChart3 size={20} /> },
    { value: '50%+', label: 'рост выручки г/г 7 лет подряд', icon: <Target size={20} /> },
    { value: '650+', label: 'партнёров на платформе', icon: <Users size={20} /> },
    { value: '9.8', label: 'NPS · 5★ Trustpilot', icon: <Star size={20} /> },
  ];

  return (
    <section className="relative bg-navy-900 py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="group text-center p-6 rounded-2xl bg-navy-950/50 border border-white/5 hover:border-coral-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-coral-500/5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-coral-500/10 text-coral-400 mb-3 group-hover:bg-coral-500/20 transition-colors">
                  {s.icon}
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/40 text-xs leading-tight">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
interface Job {
  period: string;
  duration: string;
  company: string;
  location: string;
  url?: string;
  role: string;
  description: string;
  results: string[];
  accent: string;
}

function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const jobs: Job[] = [
    {
      period: 'Дек 2023 — настоящее время',
      duration: '2 года 3 месяца',
      company: 'ImSkipper',
      location: 'Черногория',
      url: 'https://imskipper.net',
      role: 'Директор по маркетингу и продажам / Сооснователь',
      accent: 'from-coral-500 to-coral-600',
      description: 'Онлайн-маркетплейс чартерных яхт и яхтенных туров. Отвечаю за всю коммерческую часть — от развития бизнеса и привлечения партнёров до лидгена и закрытия заявок. Бизнес-стратегия, финмоделирование (P&L, юнит-экономика), UX/UI продукта.',
      results: [
        'x8 рост ключевой бизнес-метрики Gross Merchandise Volume',
        '650+ партнёров, 10 000 бортов в чартере, 3 000+ туров в 30+ странах',
        '2 стратегических пилота с национальными топ-брендами (под NDA)',
        'x5 рост трафика, PPC-метрики на уровне лучших отраслевых бенчмарков',
        'CRM: 20% повторных продаж через автоматизированные воронки',
        'AI-агент для автоматизации продаж: +21% Lead→SQL, -17% CPSQLead',
        'Лучший travel-tech проект на MITT Travel Start 2025',
        'NPS 9.8 · 100% отзывов 5★ на Trustpilot',
      ],
    },
    {
      period: 'Июн 2022 — Фев 2024',
      duration: '1 год 9 месяцев',
      company: 'Газпром ИД',
      location: 'Москва',
      role: 'Директор по рекламе и PR',
      accent: 'from-blue-500 to-blue-600',
      description: 'Руководил продвижением корпоративного супераппа ГИД с аудиторией ~500 000 сотрудников. Разработал и реализовал омниканальную маркетинговую стратегию.',
      results: [
        'Проникновение приложения по Группе превысило 70%',
        'Кратный рост MAU, частоты и времени сессий',
        '50+ видео-эксплейнеров и онбординг-материалов',
        'Геймифицированные промо-кампании и механики вовлечения',
        'PR-интеграции на Факел, МГФ и выставке «Россия» на ВДНХ',
        'Признание на уровне правления Газпрома',
      ],
    },
    {
      period: 'Дек 2021 — Июн 2022',
      duration: '7 месяцев',
      company: 'YClients → Altegio',
      location: 'Москва',
      url: 'https://www.yclients.com',
      role: 'PR-директор',
      accent: 'from-violet-500 to-violet-600',
      description: 'Ребрендинг и миграция иностранных клиентов на международную платформу Altegio.',
      results: [
        'Новый бренд, айдентика и бренд-фреймворк за 4 месяца',
        'Система кризисных коммуникаций для преодоления сопротивления миграции',
        'Миграция завершена без финансовых и репутационных потерь',
        'Altegio сейчас успешно масштабируется в LATAM',
      ],
    },
    {
      period: 'Сен 2014 — Ноя 2021',
      duration: '7 лет 3 месяца',
      company: 'Selectel',
      location: 'Санкт-Петербург',
      url: 'https://selectel.ru',
      role: 'PR-директор / Product Marketing Lead',
      accent: 'from-emerald-500 to-emerald-600',
      description: 'Создал бренд №1 на рынке облачной инфраструктуры России. Провёл компанию через трансформацию рынка — защитил долю в условиях экспансии гиперскейлеров.',
      results: [
        '>50% роста выручки г/г на протяжении 7 лет подряд',
        '5 000+ публикаций в СМИ (Forbes, РБК, Ведомости) · PR Value >$10M',
        'Топ-позиции в рейтингах IDC, IKS, CNews',
        'GTM-стратегия ML-платформы и международный выход в Узбекистан',
        'Создание категории IaaS как core-функции в IT',
        'Сохранение доли рынка при экспансии Yandex.Cloud, SberCloud, MTS',
      ],
    },
    {
      period: 'Ноя 2012 — Июн 2014',
      duration: '1 год 8 месяцев',
      company: 'Пятый канал (ТРК Петербург)',
      location: 'Санкт-Петербург',
      role: 'Руководитель пресс-службы',
      accent: 'from-amber-500 to-amber-600',
      description: 'Коммуникационная политика федеральной телекомпании.',
      results: [
        'Рост присутствия бренда в медиаполе',
        'Успешный имиджевый проект «75-летие Пятого канала»',
        'Опережающий рост рекламных доходов 2 года подряд',
        'ТЭФИ за ток-шоу «Открытая студия»',
      ],
    },
    {
      period: 'Мар 2012 — Окт 2012',
      duration: '8 месяцев',
      company: 'Yota Lab → Okko',
      location: 'Санкт-Петербург',
      role: 'Руководитель направления PR',
      accent: 'from-pink-500 to-pink-600',
      description: 'Ребрендинг Yota Play → Okko. Маркетинговые и корпоративные коммуникации.',
      results: [
        'Разработка бренд-платформы Okko',
        'Рост ньюслеттера с 1 400 до 15 000+ подписчиков',
        'Спецпроекты с Афишей, Time Out, Maxim, Esquire',
      ],
    },
    {
      period: 'Июн 2009 — Мар 2012',
      duration: '2 года 10 месяцев',
      company: 'Tele2 Россия + Tele2 Eesti',
      location: 'Москва / Эстония',
      role: 'PR-менеджер СЗФО / Консультант',
      accent: 'from-sky-500 to-sky-600',
      description: 'Управление коммуникациями в СЗФО. Проектная работа по перезагрузке стратегии Tele2 Eesti.',
      results: [
        'Запуск в 5 регионах ЦФО и СЗФО с превышением плановых KPI',
        'Brand awareness СПб x1.5, Quality Perception x2.5 за 2 года',
        'Рост публикаций x2.5, позитивных — x4 за 2010–2012',
        'Ретейнер агентства в Эстонии снижен на 20%',
      ],
    },
  ];

  return (
    <section id="experience" className="relative bg-navy-950 py-24 noise-bg">
      <DecoShapes />
      <div className="relative max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16">
            <span className="text-coral-400 font-mono text-sm uppercase tracking-widest">Карьера</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Опыт работы</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-0.5 timeline-line opacity-30" />

          <div className="space-y-6">
            {jobs.map((job, i) => {
              const open = expandedIdx === i;
              return (
                <AnimatedSection key={i} delay={i * 80}>
                  <div
                    className={`relative md:pl-16 group cursor-pointer`}
                    onClick={() => setExpandedIdx(open ? null : i)}
                  >
                    {/* Timeline dot */}
                    <div className={`hidden md:flex absolute left-0 top-6 w-[54px] h-[54px] items-center justify-center`}>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${job.accent} ring-4 ring-navy-950 transition-all ${open ? 'scale-125' : 'group-hover:scale-110'}`} />
                    </div>

                    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'bg-navy-800/60 border-white/10 shadow-xl shadow-black/20' : 'bg-navy-900/40 border-white/5 hover:border-white/10 hover:bg-navy-800/30'}`}>
                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="font-display text-xl font-bold text-white">{job.company}</h3>
                              {job.url && (
                                <a href={job.url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-white/30 hover:text-coral-400 transition-colors">
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                            <div className="text-coral-400 font-medium text-sm mb-1">{job.role}</div>
                            <div className="flex flex-wrap items-center gap-3 text-white/30 text-xs">
                              <span>{job.period}</span>
                              <span>·</span>
                              <span>{job.duration}</span>
                              <span>·</span>
                              <span className="flex items-center gap-1"><MapPin size={10} /> {job.location}</span>
                            </div>
                          </div>
                          <div className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                            <ChevronDown size={20} className="text-white/30" />
                          </div>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                          <p className="text-white/50 text-sm leading-relaxed mb-5">{job.description}</p>
                          <div className="space-y-2.5">
                            {job.results.map((r, ri) => (
                              <div key={ri} className="flex items-start gap-3">
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${job.accent} shrink-0`} />
                                <span className="text-white/70 text-sm leading-relaxed">{r}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Achievements Highlight ─── */
function Achievements() {
  const items = [
    {
      icon: <Anchor size={28} />,
      title: 'ImSkipper',
      subtitle: 'Лучший Travel-Tech стартап 2025',
      desc: 'Создал маркетплейс яхтенных туров с нуля. x8 GMV, 650+ партнёров, 10 000 бортов, AI-автоматизация продаж.',
      tag: 'MITT Travel Start 2025',
    },
    {
      icon: <Zap size={28} />,
      title: 'Selectel',
      subtitle: 'Бренд №1 облачной инфраструктуры',
      desc: '7 лет роста >50% г/г. 5 000+ публикаций. Защита доли рынка от гиперскейлеров. PR Value >$10M.',
      tag: 'IDC · CNews · Премия Рунета',
    },
    {
      icon: <Award size={28} />,
      title: 'Газпром ИД',
      subtitle: 'Суперапп для 500 000 сотрудников',
      desc: 'Омниканальная стратегия: 70% проникновение по Группе, кратный рост MAU. Признание правления.',
      tag: 'Корпоративное признание',
    },
    {
      icon: <Globe size={28} />,
      title: 'YClients → Altegio',
      subtitle: 'Международный ребрендинг за 4 месяца',
      desc: 'Миграция клиентов без потерь. Кризисные коммуникации. Бренд масштабируется в LATAM.',
      tag: 'Crisis Communications',
    },
  ];

  return (
    <section id="achievements" className="relative bg-navy-900 py-24 noise-bg overflow-hidden">
      <DecoShapes />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <span className="text-coral-400 font-mono text-sm uppercase tracking-widest">Ключевые проекты</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Достижения</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full mt-4 mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="group h-full rounded-2xl bg-navy-950/60 border border-white/5 hover:border-coral-500/20 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-coral-500/5">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral-500/20 to-teal-500/10 flex items-center justify-center text-coral-400 shrink-0 group-hover:from-coral-500/30 group-hover:to-teal-500/20 transition-all">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-white mb-0.5">{item.title}</h3>
                    <div className="text-coral-400 text-sm font-medium mb-3">{item.subtitle}</div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-white/40 text-xs font-medium">
                      <Award size={10} />
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─── */
function Skills() {
  const skillGroups = [
    {
      title: 'Стратегия и управление',
      skills: ['Маркетинговая стратегия', 'Brand Development', 'Brand Management', 'Стратегический маркетинг', 'Управление командой', 'Лидерство', 'Командообразование', 'Управление бюджетом', 'Бюджетирование'],
    },
    {
      title: 'Digital и аналитика',
      skills: ['Digital Marketing', 'Веб-аналитика', 'Сквозная аналитика', 'Анализ данных', 'Маркетинговые метрики', 'Продуктовые метрики', 'Аналитика продаж', 'CRM-маркетинг'],
    },
    {
      title: 'PR и коммуникации',
      skills: ['Corporate Communications', 'PR', 'Marketing Communication', 'Social Media Marketing', 'Event Management', 'Партнерский маркетинг'],
    },
    {
      title: 'Продукт и продажи',
      skills: ['Product Marketing', 'Лидогенерация', 'Управление продажами', 'Маркетинговый анализ', 'Маркетинговые исследования', 'Планирование кампаний'],
    },
  ];

  const langs = [
    { lang: 'Русский', level: 'Родной', pct: 100 },
    { lang: 'Английский', level: 'C1', pct: 85 },
    { lang: 'Немецкий', level: 'B2', pct: 65 },
  ];

  return (
    <section id="skills" className="relative bg-navy-950 py-24 noise-bg">
      <DecoShapes />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16">
            <span className="text-coral-400 font-mono text-sm uppercase tracking-widest">Компетенции</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Навыки</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={gi} delay={gi * 100}>
              <div className="rounded-2xl bg-navy-900/50 border border-white/5 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-5">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s, si) => (
                    <span
                      key={si}
                      className="px-3 py-1.5 text-sm bg-navy-800/80 text-white/60 rounded-lg border border-white/5 hover:border-coral-500/30 hover:text-coral-400 transition-all cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="rounded-2xl bg-navy-900/50 border border-white/5 p-6">
            <h3 className="font-display text-lg font-bold text-white mb-6">Языки</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {langs.map((l, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 text-sm font-medium">{l.lang}</span>
                    <span className="text-white/40 text-xs">{l.level}</span>
                  </div>
                  <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-coral-500 to-teal-500 transition-all duration-1000"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Education ─── */
function Education() {
  const edu = [
    { year: '2026', title: 'MBA Intensive', place: 'City Business School', note: 'Маркетинг-менеджмент' },
    { year: '2023', title: 'Python для анализа данных', place: 'Нетология', note: 'Дата-аналитика' },
    { year: '2021', title: 'Управление продуктом на основе аналитики', place: 'Go Practice', note: 'Продуктовый менеджмент' },
    { year: '2020', title: 'Growth Hacking · Креатив в Digital · Продукт-менеджмент', place: 'Selectel / M-A-C-S / Product University', note: '' },
    { year: '2019', title: 'Цифровой маркетинг', place: 'СПбПУ Петра Великого', note: 'Высшее образование' },
  ];

  return (
    <section id="education" className="relative bg-navy-900 py-24 noise-bg">
      <DecoShapes />
      <div className="relative max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <span className="text-coral-400 font-mono text-sm uppercase tracking-widest">Обучение</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Образование</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full mt-4 mx-auto" />
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {edu.map((e, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="group flex items-start gap-6 rounded-2xl bg-navy-950/40 border border-white/5 hover:border-white/10 p-6 transition-all">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-500/10 to-teal-500/10 flex items-center justify-center group-hover:from-coral-500/20 group-hover:to-teal-500/20 transition-all">
                  <GraduationCap size={24} className="text-coral-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-mono text-coral-400 text-sm font-semibold">{e.year}</span>
                    {e.note && <span className="px-2 py-0.5 bg-white/5 rounded text-white/30 text-xs">{e.note}</span>}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">{e.title}</h3>
                  <p className="text-white/40 text-sm">{e.place}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-navy-950 py-24 noise-bg">
      <DecoShapes />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <span className="text-coral-400 font-mono text-sm uppercase tracking-widest">Связаться</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Давайте поговорим</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full mt-4 mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <AnimatedSection delay={100}>
            <div className="space-y-8">
              <p className="text-white/50 text-lg leading-relaxed">
                Открыт для предложений по позициям CMO, CCO, руководителя маркетинга. Полная занятость, готов к удалённой работе, гибриду или работе на месте.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Mail size={18} />, label: 'al.vechersky@gmail.com', href: 'mailto:al.vechersky@gmail.com', note: 'предпочтительно' },
                  { icon: <Phone size={18} />, label: '+7 (996) 778-16-77', href: 'tel:+79967781677', note: '' },
                  { icon: <Send size={18} />, label: '@a_a_vc', href: 'https://t.me/a_a_vc', note: 'Telegram' },
                  { icon: <MapPin size={18} />, label: 'Санкт-Петербург, м. Звёздная', href: '', note: 'готов к переезду в Москву' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-navy-800 border border-white/5 flex items-center justify-center text-coral-400 group-hover:bg-coral-500/10 group-hover:border-coral-500/20 transition-all shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-coral-400 transition-colors font-medium text-sm">
                          {c.label}
                        </a>
                      ) : (
                        <span className="text-white/80 font-medium text-sm">{c.label}</span>
                      )}
                      {c.note && <span className="block text-white/30 text-xs">{c.note}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* References */}
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-white/60 font-semibold text-sm mb-4 uppercase tracking-wider">Рекомендации</h3>
                <div className="flex flex-wrap gap-2">
                  {['M. Chernyshev (inDrive)', 'S. Andriyashkin (Vinden)', 'A. Tugov (Selectel)', 'I. Bronin (YClients)', 'P. Scheglov (VK)', 'Y. Avilova (Газпром)'].map((r, i) => (
                    <span key={i} className="px-3 py-1.5 bg-navy-800/60 border border-white/5 rounded-lg text-white/40 text-xs">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-navy-900/60 border border-white/5 p-8 space-y-5">
              <div>
                <label className="block text-white/50 text-sm mb-2 font-medium">Имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-coral-500/50 focus:ring-1 focus:ring-coral-500/20 transition-all text-sm"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-white/50 text-sm mb-2 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-coral-500/50 focus:ring-1 focus:ring-coral-500/20 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white/50 text-sm mb-2 font-medium">Сообщение</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-coral-500/50 focus:ring-1 focus:ring-coral-500/20 transition-all text-sm resize-none"
                  placeholder="Расскажите о вашем предложении..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-coral-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <span className="text-white">✓ Отправлено!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Отправить сообщение
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-white text-lg">
          A<span className="text-coral-500">V</span>
        </div>
        <div className="text-white/30 text-sm text-center">
          © {new Date().getFullYear()} Александр Вечерский · CMO · Travel-Tech
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:al.vechersky@gmail.com" className="text-white/30 hover:text-coral-400 transition-colors"><Mail size={16} /></a>
          <a href="https://t.me/a_a_vc" target="_blank" rel="noreferrer" className="text-white/30 hover:text-coral-400 transition-colors"><Send size={16} /></a>
          <a href="tel:+79967781677" className="text-white/30 hover:text-coral-400 transition-colors"><Phone size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export function App() {
  return (
    <div className="font-sans bg-navy-950 text-white min-h-screen">
      <Nav />
      <Hero />
      <KeyNumbers />
      <Experience />
      <Achievements />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
