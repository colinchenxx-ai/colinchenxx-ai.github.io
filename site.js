(() => {
  'use strict';
  const profile = window.PROFILE;
  if (!profile) return;
  const translations = {
    en: {skip:'Skip to content', welcome:'A PERSONAL SPACE', openingOne:'Learning.', openingTwo:'Building.', openingThree:'Becoming.', openingCaption:'A collection of experiences, ideas, and things along the way.', scroll:'SCROLL TO EXPLORE', profile:'PROFILE', personalProfile:'PERSONAL PROFILE', about:'About', education:'Education', experience:'Experience', projects:'Projects', contact:'Contact', motto:'Learn · Build · Reflect', portfolio:'EXPERIENCE & SELECTED WORK', personalWebsite:'PERSONAL WEBSITE', hello:'HELLO, WELCOME.', greeting:"I'm", explore:'Explore my experience', getInTouch:'Get in touch', thisSpace:'ABOUT THIS SPACE', spaceNote:'A place for learning, work, and exploration.', contactTitle:'Good conversations start somewhere.', backToTop:'Back to top', viewProject:'View project ↗', pageTitle:'Personal website', description:'Education, experience, and selected projects.', navigation:'Page navigation', skills:'Skills and interests', readMore:'Read more', opening:'Welcome'},
    zh: {skip:'跳转到正文', welcome:'欢迎来到我的个人空间', openingOne:'学习。', openingTwo:'创造。', openingThree:'成为。', openingCaption:'记录一路走来的经历、想法与探索。', scroll:'向下滚动，开始探索', profile:'个人主页', personalProfile:'个人简介', about:'关于我', education:'教育背景', experience:'工作经历', projects:'项目作品', contact:'联系我', motto:'学习 · 实践 · 记录', portfolio:'经历与作品', personalWebsite:'个人网站', hello:'你好，欢迎。', greeting:'我是', explore:'了解我的经历', getInTouch:'与我联系', thisSpace:'关于这个空间', spaceNote:'在这里，记录我的学习、工作与探索。', contactTitle:'交流，让想法更进一步。', backToTop:'回到顶部', viewProject:'查看项目 ↗', pageTitle:'个人主页', description:'教育背景、工作经历与项目作品。', navigation:'页面导航', skills:'技能与兴趣', readMore:'向下阅读', opening:'欢迎'}
  };
  const node = (tag, text, className) => {
    const el = document.createElement(tag);
    if (text != null) el.textContent = text;
    if (className) el.className = className;
    return el;
  };
  const webUrl = value => {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; }
    catch { return null; }
  };
  const link = (label, href) => {
    const a = node('a', label); a.href = href;
    if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  const navLinks = [...document.querySelectorAll('nav a')];
  function render(language) {
    const lang = language === 'zh' ? 'zh' : 'en';
    const p = profile[lang];
    const t = translations[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
    document.querySelectorAll('[data-content]').forEach(el => { el.textContent = p[el.dataset.content] || ''; });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
    document.title = (p.name || 'colinchenxx-ai') + ' · ' + t.pageTitle;
    document.querySelector('meta[name="description"]').content = (p.name || 'colinchenxx-ai') + ' — ' + t.description;
    document.querySelector('nav').setAttribute('aria-label', t.navigation);
    document.querySelector('#skills').setAttribute('aria-label', t.skills);
    document.querySelector('#opening').setAttribute('aria-label', t.opening);
    document.querySelector('.hero-note a').setAttribute('aria-label', t.readMore);
    document.querySelector('#skills').replaceChildren(...(p.skills || []).map(skill => node('span', skill)));
    ['education', 'experience'].forEach(key => {
      const container = document.querySelector('#' + key + '-list');
      container.replaceChildren();
      (p[key] || []).forEach(item => {
        const article = node('article', null, 'timeline-item');
        article.append(node('p', item.period, 'period'), node('h3', item.title), node('p', item.subtitle, 'subtitle'), node('p', item.description, 'description'));
        container.append(article);
      });
      document.querySelector('#' + key).hidden = !container.children.length;
    });
    const projects = document.querySelector('#project-list');
    projects.replaceChildren();
    (p.projects || []).forEach((item, i) => {
      const article = node('article', null, 'project');
      article.append(node('div', String(i + 1).padStart(2, '0'), 'project-number'), node('p', item.category, 'eyebrow'), node('h3', item.title), node('p', item.description, 'description'));
      const url = webUrl(item.url);
      if (url) article.append(link(t.viewProject, url));
      projects.append(article);
    });
    document.querySelector('#projects').hidden = !projects.children.length;
    const contacts = document.querySelector('#contact-links');
    contacts.replaceChildren();
    if (typeof profile.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) contacts.append(link(profile.email + ' ↗', 'mailto:' + encodeURIComponent(profile.email)));
    const github = webUrl(profile.github);
    if (github) contacts.append(link('GitHub ↗', github));
    navLinks.forEach(a => { a.hidden = Boolean(document.querySelector(a.hash)?.hidden); });
  }
  let language = 'en';
  try { if (localStorage.getItem('profile-language') === 'zh') language = 'zh'; } catch { /* Storage may be disabled. */ }
  render(language);
  document.querySelector('#year').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    render(button.dataset.lang);
    try { localStorage.setItem('profile-language', button.dataset.lang); } catch { /* Language still works without storage. */ }
  }));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(a => {
        if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      }); });
    }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main > section').forEach(el => observer.observe(el));
  }
  // Native scrolling drives the intro. No wheel/touch interception or scroll lock.
  const opening = document.querySelector('#opening');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  function updateOpening() {
    scheduled = false;
    const distance = Math.max(1, opening.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -opening.getBoundingClientRect().top / distance));
    opening.style.setProperty('--intro-progress', reducedMotion.matches ? 0 : progress);
  }
  function scheduleOpening() { if (!scheduled) { scheduled = true; requestAnimationFrame(updateOpening); } }
  addEventListener('scroll', scheduleOpening, {passive:true});
  addEventListener('resize', scheduleOpening);
  reducedMotion.addEventListener('change', scheduleOpening);
  updateOpening();
})();
