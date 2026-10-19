/* Copy for the light intro, the branch fork and the AI-automation branch (UA/EN).
   Product truth: no client names, prices, metrics or timelines exist yet — do not add any.
   Per audience: one paragraph (`lead`) about what the company gets, then short `bullets`.
   `figure.caption` is the drawing's accessible description (svg aria-label); nothing is shown
   around the drawings — benefits live in the copy. */
window.VI_AI = {
  contacts: {
    telegram: 'https://t.me/vossapov',
    email: 'mailto:vossapov@gmail.com',
    linkedin: 'https://www.linkedin.com/in/valentyn-ihnatov-a103a1153/'
  },
  /* order matters: buttons, sections and pages follow it */
  audiences: ['erp', 'nonprofit', 'personal', 'it'],
  /* audiences illustrated by an Anatomy figure (next/ai/figures/<id>/): a plain id is a static
     drawing (embed-static.html); { id, live: true } is an animated one (embed.html + live.js).
     'it.qa' is the QA subsection of the IT page (its copy lives in aud.it.qa). */
  figures: { erp: { id: 'erp-orders', live: true }, nonprofit: { id: 'nonprofit-intake', live: true }, personal: { id: 'personal-assistant', live: true }, it: { id: 'it-assembly', live: true } },
  art: {
    introMe: '/portfolio-ai-automation/next/assets/ai/intro-me', introAbstract: '/portfolio-ai-automation/next/assets/ai/intro-abstract',
    design: '/portfolio-ai-automation/next/assets/ai/fork-design-v2', ai: '/portfolio-ai-automation/next/assets/ai/fork-ai-v2', contact: '/portfolio-ai-automation/next/assets/ai/contact',
    erp: '/portfolio-ai-automation/next/assets/ai/aud-erp',
    nonprofit: '/portfolio-ai-automation/next/assets/ai/aud-nonprofit', personal: '/portfolio-ai-automation/next/assets/ai/aud-personal'
  },
  ua: {
    name: 'Валентин Ігнатов',
    intro: 'Проєктую інтерфейси для ігор і застосунків. Будую AI-системи, що беруть рутину на себе.',
    introAlt: 'Валентин з собакою, іграшкова 3D-фігурка',
    choose: 'Що вас цікавить?',
    design: { kicker: '01 — Дизайн', title: 'UI/UX дизайн', line: 'Ігри, застосунки, веб' },
    ai: { kicker: '02 — Автоматизація', title: 'AI-автоматизація', line: 'Для бізнесу, НКО і вас особисто' },
    forWhom: 'Для кого це',
    how: 'Як це працює',
    benefits: 'Що ви отримуєте',
    back: 'Усі напрями',
    others: 'Інші напрями',
    fig: 'Рис 1',
    aud: {
      erp: {
        btn: 'ШІ-помічники для бізнесу',
        title: 'ШІ-помічники для бізнесу',
        hero: 'Помічник, який *знає ваш\u00a0бізнес.*',
        lead: 'Ми створюємо інтерфейс, через який ви працюєте з ШІ, — а він виконує і щоденні, і унікальні задачі. Помічник знає ваш каталог, ціни, залишки, документи й правила бренду, тож відповідає по суті вашого бізнесу.',
        bullets: [
          'Готує рекламну графіку й публікує дописи за планом.',
          'Дає працівникам актуальну інформацію: ціни, наявність, правила.',
          'Стежить за станами й залишками та попереджає заздалегідь.',
          'Веде облік і перевіряє документи — і береться за будь-яку іншу задачу, яку йому поставите.'
        ],
        figure: { title: 'Розподіл задач', caption: 'Ізометрична машина: неоформлені задачі з одного джерела оформлюються й розходяться по агентах, кожен виконує свою функцію й відправляє результат.' }
      },
      nonprofit: {
        btn: 'Некомерційним організаціям',
        title: 'Некомерційні організації',
        hero: 'AI, який уже *знає вашу організацію.*',
        lead: 'Ми налаштовуємо робоче середовище, де модель знає ваш статут, програми, шаблони, правила, бренд і попередні проєкти. Команда описує задачу — модель підтягує потрібний контекст і минулі рішення, пропонує інструмент і збирає робочий прототип, який ви тестуєте й запускаєте самі.',
        bullets: [
          'Модель працює з вашими документами й правилами, а не із загальними знаннями.',
          'Нові інструменти команда створює сама — кроками, які ми налаштували.',
          'Кожен інструмент спершу перевіряють на ваших прикладах, потім запускають.',
          'Два готові інструменти й новий проєкт можна відкрити й спробувати.'
        ],
        figure: { title: 'Приймання заявок', caption: 'Ізометрична машина: заявки надходять, звіряються з вимогами й розходяться за рішенням.' }
      },
      personal: {
        btn: 'Особисто вам',
        title: 'Особисто для вас',
        hero: 'AI, що знає ваші задачі.',
        lead: 'Пошта, документи, нотатки й плани працюють разом. Асистент розбирає пошту, готує чернетки, нагадує про важливе й тримає все в одному місці — на ваших пристроях і з вашими доступами.',
        bullets: [
          'Пошта й документи розібрані, підписані й знайдені за секунди.',
          'Чернетки листів, планів і відповідей на основі вашого контексту.',
          'Нагадування й задачі в одному місці замість розкиданих нотаток.',
          'Налаштовую під ваші пристрої та звички і лишаюсь на зв’язку.'
        ],
        figure: { title: 'Особистий робот', caption: 'Ізометричний робот на одній рейці по черзі веде облік чеків, шукає несправність у побутовому приладі й поливає квіти.' }
      },
      it: {
        btn: 'Дизайн- і арт-відділам',
        title: 'ШІ-помічник для дизайн- і арт-відділів айті-компаній',
        hero: 'Дизайнери вирішують, *агенти готують.*',
        lead: 'Помічник знає бренд, дизайн-систему, правила й попередні проєкти вашої команди, тож працює з вашим контекстом, а не із загальними порадами. Він збирає референси й дослідження, готує варіанти екранів, станів і компонентів та бере на себе рутину навколо макетів.',
        bullets: [
          'Тримає брендбук, дизайн-систему й правила команди в одному контексті.',
          'Збирає референси, конкурентів і висновки досліджень у робочу теку.',
          'Готує варіанти екранів, станів і компонентів на основі ваших макетів.',
          'Перевіряє консистентність і збирає специфікації для розробки — фінальне рішення лишається за дизайнером.'
        ],
        figure: { title: 'Складальний цех', caption: 'Ізометричний складальний цех: плотер креслить макет, маніпулятор ставить блоки, друкувальна балка наносить текст, а контрольна вежа перевіряє — четверо агентів разом збирають один екран застосунку.' }
      }
    },
    aiTitle: 'Інтерфейс, через який ШІ *працює на вас.*',
    aiLead: 'Проєктую не «чат із моделлю», а робочі екрани: помічник бачить ваші документи, правила й дані, виконує задачу та показує результат, який можна перевірити. Нижче — чотири напрями з кейсами й демо.',
    howTitle: 'Як це працює',
    howLead: 'Один принцип для всіх напрямів: спершу контекст, потім інтерфейс, потім робота.',
    howSteps: [
      { t: 'Контекст', p: 'Підключаємо документи, правила, каталоги й минулі проєкти — те, з чим має працювати модель.' },
      { t: 'Інтерфейс', p: 'Проєктую екран, у якому людина ставить задачу й перевіряє результат без технічних знань.' },
      { t: 'Робота', p: 'Помічник виконує задачу, людина затверджує. Рішення завжди лишається за вами.' }
    ],
    contact: { title: 'Розкажіть, що забирає ваш час', cta: 'Обговорити задачу', email: 'Пошта' },
    pageTitle: 'Валентин Ігнатов — UI/UX дизайн і AI-автоматизація',
    lang: 'Мова'
  },
  en: {
    name: 'Valentyn Ihnatov',
    intro: 'I design interfaces for games and apps, and build AI systems that take routine off your hands.',
    introAlt: 'Valentyn with his dog, a 3D toy figure',
    choose: 'What are you here for?',
    design: { kicker: '01 — Design', title: 'UI/UX design', line: 'Games, apps, web' },
    ai: { kicker: '02 — Automation', title: 'AI automation', line: 'For business, non-profits and you' },
    forWhom: 'Who it’s for',
    how: 'How it works',
    benefits: 'What you get',
    back: 'All directions',
    others: 'Other directions',
    fig: 'Fig 1',
    aud: {
      erp: {
        btn: 'AI assistants for business',
        title: 'AI assistants for business',
        hero: 'An assistant that *knows your\u00a0business.*',
        lead: 'We build the interface through which you work with AI — and it takes on both everyday and one-off tasks. The assistant knows your catalogue, prices, stock, documents and brand rules, so its answers are about your business, not business in general.',
        bullets: [
          'Prepares ad graphics and publishes posts on schedule.',
          'Gives staff up-to-date information: prices, availability, rules.',
          'Watches statuses and stock levels and warns you in advance.',
          'Keeps records and checks documents — and takes on any other task you give it.'
        ],
        figure: { title: 'Task dispatch', caption: 'Isometric machine: unformed tasks from one source are formed and routed to agents; each does its own job and sends the result on.' }
      },
      nonprofit: {
        btn: 'Non-profits',
        title: 'Non-profit organisations',
        hero: 'AI that already *knows your organisation.*',
        lead: 'We set up a working environment where the model knows your statute, programmes, templates, rules, brand and past projects. Your team describes a task — the model pulls in the relevant context and earlier solutions, proposes a tool and builds a working prototype that you test and launch yourselves.',
        bullets: [
          'The model works from your documents and rules, not general knowledge.',
          'Your team builds new tools itself, following steps we set up.',
          'Every tool is tried on your own examples before it goes live.',
          'Two finished tools and a new project are open to try.'
        ],
        figure: { title: 'Application intake', caption: 'Isometric machine: applications arrive, are matched against the requirements and go their way.' }
      },
      personal: {
        btn: 'You personally',
        title: 'For you personally',
        hero: 'AI that knows your tasks.',
        lead: 'Email, documents, notes and plans work together. The assistant sorts your inbox, drafts the replies, reminds you of what matters and keeps everything in one place — on your devices and with your own access.',
        bullets: [
          'Email and documents sorted, labelled and found in seconds.',
          'Drafts of letters, plans and replies from your own context.',
          'Reminders and tasks in one place instead of scattered notes.',
          'Set up around your devices and habits, with support after launch.'
        ],
        figure: { title: 'Personal robot', caption: 'Isometric robot on one rail takes turns: it keeps the receipts in the ledger, finds the fault in a household appliance and waters the plants.' }
      },
      it: {
        btn: 'Design & art teams',
        title: 'AI assistant for design and art departments at IT companies',
        hero: 'Designers decide, *agents prepare.*',
        lead: 'The assistant knows your brand, design system, rules and previous projects, so it works from your context rather than generic advice. It gathers references and research, drafts screens, states and components, and takes the routine around the mock-ups.',
        bullets: [
          'Keeps the brand guide, design system and team rules in one context.',
          'Collects references, competitors and research findings into a working folder.',
          'Drafts screens, states and components based on your own mock-ups.',
          'Checks consistency and assembles specs for development — the final call stays with the designer.'
        ],
        figure: { title: 'Assembly workshop', caption: 'Isometric assembly workshop: a plotter draws the layout, an arm places the blocks, a print bar adds the text and an inspection tower checks it — four agents build one app screen together.' }
      }
    },
    aiTitle: 'An interface where AI *works for you.*',
    aiLead: 'Not a chat with a model, but working screens: the assistant sees your documents, rules and data, does the task and shows a result you can check. Below — four directions with cases and demos.',
    howTitle: 'How it works',
    howLead: 'One principle for every direction: context first, then the interface, then the work.',
    howSteps: [
      { t: 'Context', p: 'We connect the documents, rules, catalogues and past projects the model has to work from.' },
      { t: 'Interface', p: 'I design the screen where a person sets the task and checks the result without technical knowledge.' },
      { t: 'Work', p: 'The assistant does the task and the person approves. The decision always stays with you.' }
    ],
    contact: { title: 'Tell me what’s eating your time', cta: 'Discuss your task', email: 'Email' },
    pageTitle: 'Valentyn Ihnatov — UI/UX design and AI automation',
    lang: 'Language'
  }
};
