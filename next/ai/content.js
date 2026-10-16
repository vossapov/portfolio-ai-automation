/* Copy for the light intro, the branch fork and the AI-automation branch (UA/EN).
   Product truth: no client names, prices, metrics or timelines exist yet — do not add any.
   Per audience: one paragraph (`lead`) about what the company gets, then short `bullets`.
   `figure` holds only the isometric drawing's corner texts — benefits live in the copy. */
window.VI_AI = {
  contacts: {
    telegram: 'https://t.me/vossapov',
    email: 'mailto:vossapov@gmail.com',
    linkedin: 'https://www.linkedin.com/in/valentyn-ihnatov-a103a1153/'
  },
  /* order matters: buttons, sections and pages follow it */
  audiences: ['erp', 'costs', 'nonprofit', 'personal', 'it'],
  /* audiences illustrated by an Anatomy figure (next/ai/figures/<id>/): a plain id is a static
     drawing (embed-static.html); { id, live: true } is an animated one (embed.html + live.js) */
  figures: { erp: { id: 'erp-orders', live: true }, costs: 'costs-routine', nonprofit: { id: 'nonprofit-intake', live: true }, personal: { id: 'personal-assistant', live: true }, it: { id: 'it-nightshift', live: true } },
  art: {
    introMe: '/portfolio-ai-automation/next/assets/ai/intro-me', introAbstract: '/portfolio-ai-automation/next/assets/ai/intro-abstract',
    design: '/portfolio-ai-automation/next/assets/ai/fork-design', ai: '/portfolio-ai-automation/next/assets/ai/fork-ai', contact: '/portfolio-ai-automation/next/assets/ai/contact',
    erp: '/portfolio-ai-automation/next/assets/ai/aud-erp', costs: '/portfolio-ai-automation/next/assets/ai/aud-costs',
    nonprofit: '/portfolio-ai-automation/next/assets/ai/aud-nonprofit', personal: '/portfolio-ai-automation/next/assets/ai/aud-personal'
  },
  ua: {
    name: 'Валентин Ігнатов',
    intro: 'Проєктую інтерфейси для ігор і застосунків. Будую AI-системи, що беруть рутину на себе.',
    introAlt: 'Валентин з собакою, іграшкова 3D-фігурка',
    choose: 'Що вас цікавить?',
    design: { title: 'UI/UX дизайн', line: 'Ігри, застосунки, веб' },
    ai: { title: 'AI-автоматизація', line: 'Для бізнесу, НКО і вас особисто' },
    forWhom: 'Для кого це',
    how: 'Як це працює',
    benefits: 'Що ви отримуєте',
    back: 'Усі напрями',
    others: 'Інші напрями',
    fig: 'Рис 1',
    aud: {
      erp: {
        btn: 'Бізнесу: власна ERP',
        title: 'Власна ERP-система',
        hero: 'Система, що повторює ваш бізнес, а не навпаки.',
        lead: 'Замовлення, залишки, рахунки й клієнти живуть в одній системі, зробленій під ваш процес. Ви бачите стан справ без зведень у таблицях, а команда працює в інтерфейсі, який не потрібно перевчати.',
        bullets: [
          'Одне місце для замовлень, складу, грошей і клієнтів.',
          'Інтерфейс під вашу команду, а не під чужий шаблон.',
          'Модулі додаються в міру потреби, без зайвих розділів.',
          'Перенос даних зі старих сервісів і таблиць плюс навчання команди.'
        ],
        figure: { title: 'Розподіл задач', caption: 'Ізометрична машина: неоформлені задачі з одного джерела оформлюються й розходяться по агентах, кожен виконує свою функцію й відправляє результат.' }
      },
      costs: {
        btn: 'Бізнесу: менше витрат',
        title: 'Менше витрат, більше автоматизації',
        hero: 'Рутину робить машина, люди — свою роботу.',
        lead: 'Я знаходжу повторювану роботу, яка щодня з’їдає час, і віддаю її системі. Дані переходять між сервісами самі, правила перевіряються однаково щоразу, а люди займаються тим, що справді потребує людини.',
        bullets: [
          'Менше ручної роботи: повторювані дії виконуються самі.',
          'Сервіси, таблиці й месенджери обмінюються даними без копіювання вручну.',
          'Менше помилок: та сама перевірка за тими самими правилами.',
          'Видно, що вже зроблено, а що застрягло.'
        ],
        figure: { title: 'Автоматизація рутини', caption: 'Ізометрична машина: повторювані дії виконує механізм, людині лишається рішення.' }
      },
      nonprofit: {
        btn: 'Некомерційним організаціям',
        title: 'Некомерційні організації',
        hero: 'Більше часу на місію, менше — на таблиці.',
        lead: 'Заявки, анкети й звіти обробляє система. Вона звіряє кожну заявку з вашими вимогами, приймає повні, а неповні повертає заявнику з поясненням, що саме потрібно додати.',
        bullets: [
          'Заявки перевіряються автоматично за вашими правилами.',
          'Кожна заявка має статус і причину рішення — нічого не губиться.',
          'Звіти для донорів і партнерів збираються без ручної роботи.',
          'Форми, анкети й таблиці стікаються в одне місце.'
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
        btn: 'IT-компаніям',
        title: 'IT-компаніям',
        hero: 'Інженери вирішують, агенти виконують.',
        lead: 'Агенти розбирають баги, пишуть тести й документацію і проганяють перевірки, поки результат не стане зеленим. Готова робота чекає на рев’ю: у продакшн нічого не йде без рішення вашої команди.',
        bullets: [
          'Рутинні задачі розробки агенти беруть із черги самі.',
          'Кожна зміна проходить тести до того, як її побачить людина.',
          'Рев’ю й рішення про реліз лишаються за вашими інженерами.',
          'Налаштовую під ваш репозиторій, CI і правила команди.'
        ],
        figure: { title: 'Нічна зміна', caption: 'Ізометрична машина: задачі йдуть по колу через відтворення, ремонт і тести, поки не стануть зеленими, і чекають на рев’ю.' }
      }
    },
    contact: { title: 'Розкажіть, що забирає ваш час', cta: 'Обговорити задачу', email: 'Пошта' },
    pageTitle: 'Валентин Ігнатов — UI/UX дизайн і AI-автоматизація',
    lang: 'Мова'
  },
  en: {
    name: 'Valentyn Ihnatov',
    intro: 'I design interfaces for games and apps, and build AI systems that take routine off your hands.',
    introAlt: 'Valentyn with his dog, a 3D toy figure',
    choose: 'What are you here for?',
    design: { title: 'UI/UX design', line: 'Games, apps, web' },
    ai: { title: 'AI automation', line: 'For business, non-profits and you' },
    forWhom: 'Who it’s for',
    how: 'How it works',
    benefits: 'What you get',
    back: 'All directions',
    others: 'Other directions',
    fig: 'Fig 1',
    aud: {
      erp: {
        btn: 'Business: your own ERP',
        title: 'Your own ERP system',
        hero: 'A system shaped to your business, not the other way round.',
        lead: 'Orders, stock, invoices and customers live in one system built around how you already work. You see the state of the business without assembling spreadsheets, and the team works in an interface it does not have to be retaught.',
        bullets: [
          'One place for orders, stock, money and customers.',
          'An interface for your team, not someone else’s template.',
          'Modules are added as you need them, with no idle sections.',
          'Data moved from old tools and spreadsheets, plus team onboarding.'
        ],
        figure: { title: 'Task dispatch', caption: 'Isometric machine: unformed tasks from one source are formed and routed to agents; each does its own job and sends the result on.' }
      },
      costs: {
        btn: 'Business: lower costs',
        title: 'Lower costs, automated processes',
        hero: 'Machines do the routine, people do the work.',
        lead: 'I find the work that repeats every day and eats the hours, and hand it to a system. Data passes between your services on its own, the same rules are applied every time, and people spend their time on what actually needs a person.',
        bullets: [
          'Less manual work: repeated actions run themselves.',
          'Services, sheets and messengers share data without copy-paste.',
          'Fewer mistakes: the same check against the same rules.',
          'You can see what is done and what is stuck.'
        ],
        figure: { title: 'Automating the routine', caption: 'Isometric machine: a mechanism repeats the routine, the person keeps the decision.' }
      },
      nonprofit: {
        btn: 'Non-profits',
        title: 'Non-profit organisations',
        hero: 'More time for the mission, less for spreadsheets.',
        lead: 'Applications, forms and reports are handled by a system. It checks every application against your requirements, accepts complete ones, and returns incomplete ones to the applicant with a note on what is missing.',
        bullets: [
          'Applications are checked automatically against your rules.',
          'Every application keeps its status and the reason for the decision.',
          'Donor and partner reports assemble without manual work.',
          'Forms, surveys and spreadsheets flow into one place.'
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
        btn: 'IT companies',
        title: 'For IT companies',
        hero: 'Engineers decide, agents execute.',
        lead: 'Agents triage bugs, write tests and documentation, and rerun the checks until the result is green. Finished work waits for review: nothing reaches production without your team’s decision.',
        bullets: [
          'Agents pick routine development tasks from the queue themselves.',
          'Every change passes the tests before a person sees it.',
          'Review and release decisions stay with your engineers.',
          'Set up around your repository, CI and team rules.'
        ],
        figure: { title: 'Night shift', caption: 'Isometric machine: tasks loop through reproduction, repair and tests until they turn green, then wait for review.' }
      }
    },
    contact: { title: 'Tell me what’s eating your time', cta: 'Discuss your task', email: 'Email' },
    pageTitle: 'Valentyn Ihnatov — UI/UX design and AI automation',
    lang: 'Language'
  }
};
