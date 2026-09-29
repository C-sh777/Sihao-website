const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const languageButton = document.querySelector('.lang-toggle');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  '程思皓 · 计算政治学学习札记': 'Cheng Sihao · Computational Politics',
  '菜单': 'Menu',
  '关于我': 'About',
  '研究兴趣': 'Research Interests',
  '学习与项目': 'Study & Projects',
  '联系我': 'Contact',
  '华中师范大学 · 政治与国际关系学院': 'Central China Normal University · School of Politics and International Studies',
  '用数据理解': 'Understanding',
  '政治与社会': 'Politics & Society',
  '你好，我是程思皓。一名对政治行为、数字社会与计算方法充满好奇的学生。这里是我的学习档案，也是我持续提问的地方。': 'Hi, I’m Cheng Sihao, an undergraduate curious about political behavior, digital society, and computational methods. This is where I document what I learn and the questions I pursue.',
  '认识我': 'About me',
  '看看我的学习记录': 'Explore my work',
  '计算政治学 · 本科二年级': 'Computational Politics · Sophomore',
  '欢迎交流': 'Open to conversation',
  '观察': 'Observe',
  '解释': 'Explain',
  '关于我': 'About me',
  '把好奇心变成': 'Turning curiosity into',
  '可以检验的问题。': 'questions we can investigate.',
  '我正在学习如何把政治学的问题与数据、计算工具结合起来。从阅读经典理论，到练习编程与研究设计，我希望慢慢建立一套严谨又开放的观察方式。': 'I’m learning to connect questions in political science with data and computational tools. From reading foundational theory to practicing programming and research design, I hope to develop a way of inquiry that is both rigorous and open-minded.',
  '给我写信': 'Write to me',
  '学习中': 'Learning',
  '政治 · 数据 · 方法': 'Politics · Data · Methods',
  '研究兴趣': 'Research interests',
  '问题比答案更先开始': 'Questions come before answers',
  '数字政治与公共舆论': 'Digital politics & public opinion',
  '社交媒体如何改变公共讨论？信息如何传播，又如何影响政治态度？': 'How does social media reshape public discussion? How does information spread and influence political attitudes?',
  '数字社会': 'Digital society',
  '计算方法与文本分析': 'Computational methods & text analysis',
  '尝试用文本、网络与统计方法，让政治现象的模式更清晰可见。': 'Using text, network, and statistical methods to make patterns in political life easier to see.',
  '研究方法': 'Methods',
  '政治行为与比较政治': 'Political behavior & comparative politics',
  '关注制度、地方情境与个体行为之间的联系，以及比较视角能带来什么。': 'Exploring how institutions and local contexts shape individual behavior, and what comparison can reveal.',
  '政治行为': 'Political behavior',
  '学习与项目': 'Study & projects',
  '在做的事与学到的事': 'What I’m working on and learning',
  '课程练习 · 2025': 'Course exercise · 2025',
  '从问题出发：一次小型研究设计': 'Starting with a question: a small research design',
  '研究问题、概念界定与初步测量方案': 'Research question, concepts, and an initial measurement plan',
  '数据练习 · 2025': 'Data exercise · 2025',
  '第一次用 Python 整理调查数据': 'My first survey data workflow in Python',
  '数据清理、描述统计与可视化入门': 'Data cleaning, descriptive statistics, and introductory visualization',
  '阅读计划 · 进行中': 'Reading plan · Ongoing',
  '政治传播与数字公共领域': 'Political communication and the digital public sphere',
  '把阅读中的问题整理成主题笔记': 'Turning questions from my reading into topic notes',
  '一起交流': 'Get in touch',
  '一个好问题，': 'A good question',
  '值得多聊一会儿。': 'is worth talking about.',
  '个人学习档案 · 2025—2026': 'Learning portfolio · 2025—2026',
  '回到顶部 ↑': 'Back to top ↑'
};

let isEnglish = false;
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function setLanguage(english) {
  isEnglish = english;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const trimmed = node.nodeValue.trim();
    if (!translations[trimmed]) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const leading = source.match(/^\s*/)?.[0] ?? '';
    const trailing = source.match(/\s*$/)?.[0] ?? '';
    node.nodeValue = english ? `${leading}${translations[trimmed]}${trailing}` : source;
  }

  const title = document.querySelector('title');
  if (title) title.textContent = english ? translations[originalTitle] : originalTitle;
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  languageButton.textContent = english ? '中文' : 'EN';
  languageButton.setAttribute('aria-label', english ? '切换为中文' : 'Switch language');
}

const originalTitle = document.title;
languageButton?.addEventListener('click', () => setLanguage(!isEnglish));

