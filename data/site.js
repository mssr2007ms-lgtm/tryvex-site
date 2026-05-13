// Central data layer — при переносе на Next.js заменяется на API-вызовы

const TRYVEX = {
  brand: {
    name: 'TRYVEX',
    tagline: 'Профессиональный торговый терминал нового поколения',
    description: 'Скальпинг, алготрейдинг, соцсеть трейдеров и обучение — всё в одном приложении',
    version: '1.0',
    downloadUrl: '#download',
    appUrl: '/app',
  },

  nav: [
    { label: 'Торговля',    href: '#trading' },
    { label: 'Алго',        href: '#algo' },
    { label: 'Обучение',    href: '#education' },
    { label: 'Соцсеть',     href: '/app/social' },
    { label: 'Скринеры',    href: '#screeners' },
    { label: 'Тарифы',      href: '#pricing' },
  ],

  features: [
    {
      id: 'scalping',
      icon: '⚡',
      title: 'Скальпинг',
      description: 'Молниеносное исполнение ордеров, стакан заявок, горячие клавиши и кастомные сетки.',
    },
    {
      id: 'algo',
      icon: '🤖',
      title: 'Алготрейдинг',
      description: 'Пишите и запускайте торговых роботов прямо в терминале без стороннего ПО.',
    },
    {
      id: 'screeners',
      icon: '📡',
      title: 'Скринеры',
      description: 'Фильтруйте рынок по сотням параметров в реальном времени.',
    },
    {
      id: 'social',
      icon: '👥',
      title: 'Соцсеть трейдеров',
      description: 'Делитесь сделками, идеями и стратегиями. Веб-версия синхронизирована с приложением.',
    },
    {
      id: 'education',
      icon: '🎓',
      title: 'Обучение',
      description: 'Курсы от практикующих трейдеров. Доступ открывается автоматически после оплаты.',
    },
    {
      id: 'strategies',
      icon: '📊',
      title: 'Стандартные стратегии',
      description: 'Готовые стратегии для новичков и профессионалов с настройкой под любой рынок.',
    },
  ],

  pricing: [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      currency: '₽',
      period: 'мес',
      description: 'Базовый доступ к терминалу',
      features: ['Торговля спот', 'Базовые индикаторы', 'Лента соцсети'],
      cta: 'Начать бесплатно',
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 1990,
      currency: '₽',
      period: 'мес',
      description: 'Полный арсенал трейдера',
      features: ['Всё из Free', 'Скальпинг-модуль', 'Скринеры', 'Алготрейдинг', 'Приоритетная поддержка'],
      cta: 'Попробовать 7 дней бесплатно',
      highlighted: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 4990,
      currency: '₽',
      period: 'мес',
      description: 'Максимум возможностей',
      features: ['Всё из Pro', 'Эксклюзивные курсы', 'Пульс-сигналы', 'API доступ', 'Персональный менеджер'],
      cta: 'Связаться с нами',
      highlighted: false,
    },
  ],
};

export default TRYVEX;
