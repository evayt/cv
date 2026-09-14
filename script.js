(function () {
  const fallbackData = {
    meta: {
      siteTitle: '作品集与简历',
      description: '个人作品集与简历网站。'
    },
    profile: {
      name: '示例姓名',
      title: '设计师 / 创作者',
      intro: '这里是一段个人简介，后续可替换为真实内容。',
      summaryTags: ['设计', '创意', '协作'],
      quickInfo: [
        { label: '学历', value: '本科' },
        { label: '方向', value: '视觉设计' }
      ],
      metrics: [
        { value: '3+', label: '项目经验' },
        { value: '1+', label: '年经验' },
        { value: '100%', label: '热爱设计' }
      ],
      personal: [
        { label: '姓名', value: '示例姓名' },
        { label: '院校', value: '某大学' },
        { label: '方向', value: '设计' }
      ]
    },
    about: {
      title: '关于我',
      tag: 'Design · Thinking',
      description: '关于我简介说明。'
    },
    portfolio: [],
    education: [],
    experience: [],
    honors: [],
    skills: [],
    contact: {
      phone: '',
      email: '',
      city: ''
    },
    extraModules: [],
    resume: {
      file: '#',
      filename: 'resume.pdf'
    }
  };

  const siteData = window.CV_SITE_DATA || fallbackData;
  const profile = siteData.profile || fallbackData.profile;
  const about = siteData.about || fallbackData.about;
  const portfolioData = Array.isArray(siteData.portfolio) ? siteData.portfolio : fallbackData.portfolio;
  const educationData = Array.isArray(siteData.education) ? siteData.education : fallbackData.education;
  const experienceData = Array.isArray(siteData.experience) ? siteData.experience : fallbackData.experience;
  const honorsData = Array.isArray(siteData.honors) ? siteData.honors : fallbackData.honors;
  const skillsData = Array.isArray(siteData.skills) ? siteData.skills : fallbackData.skills;
  const extraModules = Array.isArray(siteData.extraModules) ? siteData.extraModules : fallbackData.extraModules;
  const contactData = siteData.contact || fallbackData.contact;
  const resumeData = siteData.resume || fallbackData.resume;
  const resumeFileUrl = resumeData.file || '#';
  const portfolioAttachmentFileUrl = (portfolioData[0] && portfolioData[0].href) || resumeFileUrl;
  const portfolioAttachmentFilename = (portfolioData[0] && portfolioData[0].filename) || (portfolioData[0] && portfolioData[0].title) || 'portfolio.pdf';

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const renderSectionHeading = (title, tag) => `
    <div class="section-heading reveal-on-scroll">
      <h2 class="section-title">${escapeHtml(title)}</h2>
      <span class="section-tag">${escapeHtml(tag)}</span>
    </div>
  `;

  const renderTags = (items = []) => items.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');

  const renderHero = () => `
    <section class="hero reveal-on-scroll" id="home">
      <div class="container hero-grid">
        <div class="hero-copy reveal-on-scroll">
          <div class="hero-kicker">
            <span class="chip">Brand · Design · Strategy</span>
            <span class="chip chip-subtle">Available for opportunities</span>
          </div>
          <p class="eyebrow">${escapeHtml(profile.title)}</p>
          <h1>${escapeHtml(profile.name)}</h1>
          <p class="lead">${escapeHtml(profile.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="${escapeHtml(resumeFileUrl)}" target="_blank" rel="noreferrer">打开简历</a>
            <a class="btn" href="${escapeHtml(resumeFileUrl)}" download="${escapeHtml(resumeData.filename || 'resume.pdf')}">下载简历</a>
            <a class="btn" href="#portfolio">查看作品</a>
          </div>
          <ul class="quick-info">
            ${(profile.quickInfo || []).map((item) => `
              <li>
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.value)}</strong>
              </li>
            `).join('')}
          </ul>
          <div class="hero-metrics" aria-label="能力概览">
            ${(profile.metrics || []).map((metric) => `
              <div class="metric-card reveal-on-scroll" data-target="${Number(String(metric.value).replace(/[^0-9.]/g, '')) || 0}" data-suffix="${String(metric.value).includes('+') ? '+' : ''}">
                <strong data-counter="${escapeHtml(metric.value)}">0</strong>
                <span>${escapeHtml(metric.label)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="hero-panel" aria-label="个人信息卡片">
          <div class="profile-photo-wrap">
            <img class="profile-photo" src="./证件照.jpg" alt="个人照片" />
          </div>
          <div class="profile-badge">HYT</div>
          <div class="profile-card">
            <h3>个人信息</h3>
            <ul>
              ${(profile.personal || []).map((item) => `
                <li><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

  const renderAbout = () => `
    <section class="panel reveal-on-scroll" id="about">
      <div class="container">
        ${renderSectionHeading(about.title, about.tag)}
        <div class="card reveal-on-scroll">
          <p>${escapeHtml(about.description)}</p>
          <div class="tags">
            ${renderTags(profile.summaryTags || [])}
          </div>
        </div>

        ${extraModules.length ? `
          <div class="module-grid">
            ${extraModules.map((module) => `
              <div class="skill-box">
                <h3>${escapeHtml(module.title)}</h3>
                <ul>
                  ${(module.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </section>
  `;

  const renderPortfolioItemCard = (item) => `
    <article class="portfolio-card reveal-on-scroll">
      <div class="portfolio-card__meta">
        <span class="card-tag">${escapeHtml(item.category || 'Project')}</span>
        <span class="card-type">${escapeHtml(item.type || 'Case Study')}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description || '')}</p>
      <div class="portfolio-tags">
        ${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
      </div>
      <div class="portfolio-card__footer">
        ${(item.stats || []).map((stat) => `<small>${escapeHtml(stat.label)}：${escapeHtml(stat.value)}</small>`).join('')}
      </div>
    </article>
  `;

  const renderPortfolio = () => {
    const featured = portfolioData[0] || null;
    const secondary = portfolioData.slice(1);

    return `
      <section class="panel reveal-on-scroll" id="portfolio">
        <div class="container">
          ${renderSectionHeading('作品集', 'Portfolio showcase')}

          ${featured ? `
            <article class="portfolio-feature reveal-on-scroll">
              <div class="portfolio-feature__info">
                <h3>${escapeHtml(featured.title)}</h3>
                <p>${escapeHtml(featured.description || '')}</p>
                <div class="portfolio-tags">
                  ${renderTags(featured.tags || [])}
                </div>
                <div class="portfolio-actions">
                  <a class="btn primary" href="${escapeHtml(featured.href || portfolioAttachmentFileUrl)}" target="_blank" rel="noreferrer" download="${escapeHtml(featured.filename || portfolioAttachmentFilename || 'portfolio.pdf')}">${escapeHtml(featured.actionLabel || '打开附件')}</a>
                  <a class="btn" href="#atb-detail">作品详情</a>
                </div>
              </div>
              <div class="portfolio-feature__stats">
                ${(featured.stats || []).map((stat) => `
                  <div class="mini-stat">
                    <span>${escapeHtml(stat.label)}</span>
                    <strong>${escapeHtml(stat.value)}</strong>
                  </div>
                `).join('')}
              </div>
            </article>

            <article class="portfolio-cover reveal-on-scroll" aria-label="作品封面页">
              <div class="cover-content">
                <div class="cover-header">
                </div>
                <div class="cover-body">
                  <div>
                    <h3>${escapeHtml(featured.coverTitle || featured.title)}</h3>
                  </div>
                  <div class="cover-meta">
                    <div>
                      <small>Designer</small>
                      <strong>${escapeHtml(profile.name)}</strong>
                    </div>
                    <div>
                      <small>Focus</small>
                      <strong>Brand / Campaign / Visual</strong>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div class="portfolio-detail reveal-on-scroll" id="atb-detail">
              <div class="detail-card">
                <span class="detail-label">故事前析</span>
                <p>${escapeHtml(featured.story || '')}</p>
              </div>
              <div class="detail-card">
                <span class="detail-label">重点输出</span>
                <ul>
                  ${(featured.deliverables || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="portfolio-showcase reveal-on-scroll">
              ${(featured.showcase || []).map((item, index) => `
                <article class="showcase-card">
                  <span class="showcase-index">0${index + 1}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `).join('')}
            </div>

            <div class="portfolio-preview reveal-on-scroll" aria-label="作品集附件预览">
              <div class="preview-header">
                <div class="preview-header__title">
                  <span class="detail-label">附件预览</span>
                  <h3>${escapeHtml(featured.title)}</h3>
                  <div class="preview-meta">
                    <span>${escapeHtml(featured.filename || portfolioAttachmentFilename || 'portfolio.pdf')}</span>
                  </div>
                </div>
                <div class="preview-actions">
                  <a class="btn primary" href="${escapeHtml(featured.href || portfolioAttachmentFileUrl)}" target="_blank" rel="noreferrer">打开附件</a>
                  <a class="btn" href="${escapeHtml(featured.href || portfolioAttachmentFileUrl)}" download="${escapeHtml(featured.filename || portfolioAttachmentFilename || 'portfolio.pdf')}">下载</a>
                </div>
              </div>
              <div class="pdf-preview-wrapper">
                <object class="pdf-preview-frame" data="${escapeHtml(featured.href || portfolioAttachmentFileUrl)}" type="application/pdf" title="作品集附件预览">
                  <p>浏览器无法直接预览此 PDF，<a href="${escapeHtml(featured.href || portfolioAttachmentFileUrl)}" target="_blank" rel="noreferrer">请在新标签页打开</a>。</p>
                </object>
              </div>
            </div>
          ` : ''}

          <div class="portfolio-grid">
            ${secondary.map((item) => renderPortfolioItemCard(item)).join('')}
          </div>
        </div>
      </section>
    `;
  };

  const renderEducation = () => `
    <section class="panel reveal-on-scroll" id="education">
      <div class="container">
        ${renderSectionHeading('教育经历', '学习背景')}
        <div class="timeline">
          ${(educationData || []).map((item) => `
            <article class="timeline-item reveal-on-scroll">
              <div class="time">${escapeHtml(item.time)}</div>
              <div>
                <h3>${escapeHtml(item.name)}</h3>
                <p class="meta">${escapeHtml(item.meta)}</p>
                <p>${escapeHtml(item.description)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const renderExperience = () => `
    <section class="panel reveal-on-scroll" id="experience">
      <div class="container">
        ${renderSectionHeading('工作经历', '实践积累')}
        <div class="timeline">
          ${(experienceData || []).map((item) => `
            <article class="timeline-item reveal-on-scroll">
              <div class="time">${escapeHtml(item.time)}</div>
              <div>
                <h3>${escapeHtml(item.company)}</h3>
                <p class="meta">${escapeHtml(item.role)}</p>
                <ul class="bullet-list">
                  ${(item.tasks || []).map((task) => `<li>${escapeHtml(task)}</li>`).join('')}
                </ul>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const renderHonors = () => `
    <section class="panel reveal-on-scroll" id="honors">
      <div class="container">
        ${renderSectionHeading('荣誉与奖项', '竞赛与荣誉')}
        <div class="honors-grid">
          ${(honorsData || []).map((item) => `
            <article class="honor-item reveal-on-scroll">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const renderSkills = () => `
    <section class="panel reveal-on-scroll" id="skills">
      <div class="container">
        ${renderSectionHeading('技能与资质', '能力概览')}
        <div class="skills-grid">
          ${(skillsData || []).map((skillGroup) => `
            <div class="skill-box reveal-on-scroll">
              <h3>${escapeHtml(skillGroup.title)}</h3>
              <ul>
                ${(skillGroup.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const renderContact = () => `
    <section class="panel reveal-on-scroll" id="contact">
      <div class="container">
        ${renderSectionHeading('联系方式', 'Get in touch')}
        <div class="contact-grid">
          <form class="contact-form reveal-on-scroll" id="contactForm">
            <h3>留言</h3>
            <label>姓名
              <input type="text" name="name" placeholder="请输入您的姓名" required>
            </label>
            <label>邮箱
              <input type="email" name="email" placeholder="请输入您的邮箱" required>
            </label>
            <label>信息
              <textarea name="message" rows="5" placeholder="请输入您的留言或需求"></textarea>
            </label>
            <div class="form-actions">
              <button class="btn primary" type="submit">发送</button>
              <button class="btn" type="button" data-copy-email>复制邮箱</button>
            </div>
          </form>

          <div class="info-card reveal-on-scroll">
            <h3>直接联系</h3>
            <ul class="contact-list">
              <li><span>手机</span><strong>${escapeHtml(contactData.phone || '')}</strong></li>
              <li><span>邮箱</span><strong>${escapeHtml(contactData.email || '')}</strong></li>
              <li><span>所在地</span><strong>${escapeHtml(contactData.city || '')}</strong></li>
            </ul>
            <div class="social">
              <a href="mailto:${escapeHtml(contactData.email || '')}">Email</a>
              <a href="tel:${escapeHtml((contactData.phone || '').replace(/\s+/g, ''))}">电话</a>
              <a href="${escapeHtml(resumeFileUrl)}" target="_blank" rel="noreferrer">打开简历</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const renderApp = () => {
    const app = document.getElementById('app');
    if (!app) return;

    const sections = [
      renderHero,
      renderAbout,
      renderPortfolio,
      renderEducation,
      renderExperience,
      renderHonors,
      renderSkills,
      renderContact
    ];

    app.innerHTML = sections.map((sectionRenderer) => sectionRenderer()).join('');

    if (!document.getElementById('siteToast')) {
      document.body.insertAdjacentHTML('beforeend', '<div id="siteToast" class="site-toast" aria-live="polite"></div>');
    }
  };

  const showToast = (message) => {
    const toast = document.getElementById('siteToast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
      toast.classList.remove('visible');
    }, 1800);
  };

  const initializeRevealAndMotion = () => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));

    const counterNodes = document.querySelectorAll('[data-counter]');
    counterNodes.forEach((node) => {
      const target = Number(node.getAttribute('data-counter').replace(/[^0-9.]/g, '')) || 0;
      const suffix = node.getAttribute('data-counter').includes('+') ? '+' : '';
      const startValue = 0;
      const duration = 900;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = startValue + (target - startValue) * eased;
        node.textContent = `${Math.round(value)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    });
  };

  const initializeNavigation = () => {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        navToggle.classList.toggle('active');
      });

      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.remove('open');
          navToggle.classList.remove('active');
        });
      });
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');
    const activeMap = new Map();
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href')?.replace('#', '');
      if (targetId) activeMap.set(targetId, link);
    });

    const highlightNav = () => {
      let activeId = 'home';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          activeId = section.id;
        }
      });
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('active', isActive);
      });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
  };

  const initializeContactForm = () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameField = contactForm.querySelector('input[name="name"]');
        const name = nameField && nameField.value.trim() ? nameField.value.trim() : '访客';
        showToast(`感谢 ${name}，我已收到您的留言。`);
        contactForm.reset();
      });
    }

    const copyButton = document.querySelector('[data-copy-email]');
    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        const email = contactData.email || 'example@example.com';
        try {
          await navigator.clipboard.writeText(email);
          const original = copyButton.textContent;
          copyButton.textContent = '已复制';
          showToast('邮箱已复制到剪贴板');
          setTimeout(() => {
            copyButton.textContent = original;
          }, 1200);
        } catch (error) {
          copyButton.textContent = '复制失败';
          showToast('复制失败，请手动复制邮箱');
          setTimeout(() => {
            copyButton.textContent = '复制邮箱';
          }, 1200);
        }
      });
    }
  };

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && siteData.meta && siteData.meta.description) {
    metaDescription.setAttribute('content', siteData.meta.description);
  }

  if (siteData.meta && siteData.meta.siteTitle) {
    document.title = siteData.meta.siteTitle;
  }

  renderApp();
  initializeRevealAndMotion();
  initializeNavigation();
  initializeContactForm();
})();
