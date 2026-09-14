(function () {
  const resumeFileName = 'Atb 作品集_compressed.pdf';
  const resumeFileUrl = `./${encodeURIComponent(resumeFileName)}`;

  window.CV_SITE_DATA = {
    meta: {
      siteTitle: '贺昱婷 - 作品集与简历',
      description: '贺昱婷的作品集与个人简历，包含作品展示、教育经历、工作实践与简历模块化内容。',
      favicon: null
    },
    profile: {
      name: '贺昱婷',
      title: '视觉设计 · 活动策划 · 教育支持',
      intro: '热爱设计与教育，在视觉创作、行政协同、校园文化活动策划及品牌传播方面具备扎实基础。拥有平面设计、海报制作、活动组织与文档管理经验，能够兼顾创意表达与实际执行效率。',
      summaryTags: ['平面设计', '海报设计', '活动策划', '文案与传播', '团队协作'],
      quickInfo: [
        { label: '学历', value: '硕士在读' },
        { label: '专业', value: '艺术科技与商业' },
        { label: '手机', value: '+86-17535135127' },
        { label: '邮箱', value: 'heyuting2026@163.com' }
      ],
      metrics: [
        { value: '6+', label: '设计软件熟练度' },
        { value: '3+', label: '校园/企业活动执行' },
        { value: '2', label: '竞赛获奖项目' }
      ],
      personal: [
        { label: '姓名', value: '贺昱婷' },
        { label: '院校', value: '岭南大学' },
        { label: '方向', value: '艺术科技与商业' },
        { label: '英语', value: '雅思 6.5' }
      ]
    },
    about: {
      title: '关于我',
      tag: 'Design · Communication · Planning',
      description: '我具备良好的艺术审美与沟通协调能力，能够在视觉设计、文案表达与活动执行之间建立有效桥梁。大学期间参与多项设计竞赛和校园文化活动，积累了对品牌视觉、版式设计、活动策划及团队协作的理解与实践经验，注重细节与成果落地。'
    },
    portfolio: [
      {
        id: 'atb-portfolio',
        title: 'ATB 作品集附件',
        coverTitle: 'ATB Portfolio',
        category: 'Portfolio Attachment',
        description: '整合品牌视觉、活动策划、传播物料与项目叙事的完整作品集，适合用于面试、校招、岗位申请及作品展示。',
        tags: ['品牌视觉', '创意项目', '活动策划', '传播设计'],
        actionLabel: '打开附件',
        href: resumeFileUrl,
        type: 'PDF',
        stats: [
          { label: '格式', value: 'pdf' },
          { label: '内容', value: '综合作品集' },
          { label: '用途', value: '展示/申请' }
        ],
        story: '以“品牌表达 + 执行落地 + 传播叙事”为主线，强调作品如何从创意到实现，再转化为有效沟通和岗位匹配。',
        deliverables: ['项目概念与创意表达', '视觉素材与传播落地', '品牌叙事与展示结构', '作品集整合呈现'],
        detailBlocks: [
          { label: '项目定位', value: '视觉与传播设计' },
          { label: '核心输出', value: '海报 / 物料 / 叙事' },
          { label: '适用场景', value: '求职 / 面试 / 展示' }
        ],
        showcase: [
          { title: '研究与方向', text: '围绕品牌气质、受众理解与传播诉求建立设计方向，确保作品既有创意也具可落地性。' },
          { title: '视觉输出', text: '通过海报、活动物料、内容组织和整体叙事完成完整的品牌视觉语言系统。' },
          { title: '成果表达', text: '用整合式展示结构帮助作品从“单内容”过渡到“系统作品”，更适合求职、汇报和追踪。' }
        ]
      },
      {
        id: 'campus-event',
        title: '校园文化活动视觉系列',
        category: 'Brand & Campaign',
        description: '围绕校园节庆与文化活动设计的海报、展板及活动流程视觉，重点体现品牌识别与参与感。',
        tags: ['海报设计', '节庆视觉', '活动传播'],
        type: 'Case Study',
        stats: [
          { label: '项目', value: '3+ 场' },
          { label: '应用', value: '线上/线下' },
          { label: '方向', value: '活动传播' }
        ],
        featured: false,
        actionLabel: '查看案例',
        href: '#contact'
      },
      {
        id: 'packaging',
        title: '产品包装与文案创新',
        category: 'Packaging Design',
        description: '从包装视觉语言、信息结构到传播文案的系统化表达，强调产品气质和购买转化。',
        tags: ['包装设计', '品牌表达', '版式设计'],
        type: 'Case Study',
        stats: [
          { label: '项目', value: '2+ 例' },
          { label: '能力', value: '视觉提升' },
          { label: '重点', value: '呈现策略' }
        ],
        featured: false,
        actionLabel: '查看案例',
        href: '#contact'
      }
    ],
    education: [
      {
        time: '2024.09 - 至今',
        name: '岭南大学',
        meta: '艺术科技与商业理学硕士',
        description: '在读期间持续加强设计思维、创意商业化能力与跨学科协作能力，拓展视觉表达与文化传播的应用方向。'
      },
      {
        time: '2017.09 - 2021.07',
        name: '山西应用科技学院',
        meta: '视觉传达设计艺术学士',
        description: 'GPA: 3.65；82.31'
      }
    ],
    experience: [
      {
        time: '2021.12 - 2023.07',
        company: '山西盛世创想科技有限公司',
        role: '行政文员',
        tasks: [
          '负责企业制度的制定、优化以及企业文化建设工作。',
          '协助开展员工信息管理与员工福利相关事务。',
          '主导策划并落地执行公司各类活动。',
          '根据部门需求，运用 PS、AI 软件完成海报、企业文化墙等视觉物料设计。'
        ]
      },
      {
        time: '2021.03 - 2021.05',
        company: '大同市国贸汽车销售有限公司',
        role: '实习',
        tasks: [
          '负责客户信息录入系统，并整理车主档案。',
          '负责系统内销售数据核对工作。',
          '负责编制各类业务报表，包括商用车日报、销售清单、本地市场价格报表等。'
        ]
      },
      {
        time: '2019.07 - 2019.08',
        company: '大同早期教育学校',
        role: '美术老师',
        tasks: [
          '独立负责小学低段（1-3 年级）美术教学工作，完成素描、水彩、手工制作、创意绘画的课程备课与实操指导。',
          '有效维护课堂纪律，运用游戏、故事等互动方式激发低龄学生的学习兴趣，提升课堂参与度。',
          '关注学生个体差异，针对不同学习需求与创作能力的孩子开展一对一辅导与鼓励，培养学生的艺术感知力与自信心。',
          '协助策划并筹办“暑期美术成果展”、班级文化墙等校园文化活动，营造浓厚的校园美育氛围。'
        ]
      }
    ],
    honors: [
      { title: '第一届“大同好礼”文化旅游创意设计大赛', text: '旅游产品创意设计类优秀奖（2023.03）' },
      { title: '第三届山西省文化创意设计大赛', text: '品牌及包装创意设计类学生组铜奖（2021.11）' },
      { title: '第十七届山西设计奖学科竞赛', text: '优秀奖（2 个奖项，2020.11）' },
      { title: '中国大学生广告艺术节学院奖', text: '产品包装设计类优秀奖（2020.08）' },
      { title: '第二届全国青年运动会', text: '赛会志愿者服务证书（2019.08）' },
      { title: '2018年度优秀共青团干部', text: '荣誉称号（2019.05）' }
    ],
    skills: [
      {
        title: '设计与多媒体软件',
        items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Premiere Pro', 'Canva']
      },
      {
        title: '办公与数据工具',
        items: ['Word', 'Excel', 'PowerPoint']
      },
      {
        title: '资质证书',
        items: ['普通话水平测试二级甲等', '雅思 6.5 分']
      },
      {
        title: '核心能力',
        items: ['视觉创作', '版式排版设计', '简易视频剪辑', '商务文档制作']
      }
    ],
    contact: {
      phone: '+86-17535135127',
      email: 'heyuting2026@163.com',
      city: '香港'
    },
    extraModules: [
      {
        title: '个人定位',
        items: ['视觉设计师', '活动策划支持', '教育类内容传播', '行政协同与项目执行']
      },
      {
        title: '项目特点',
        items: ['细节敏感', '沟通协作', '信息结构清晰', '输出效率稳定']
      }
    ],
    resume: {
      file: resumeFileUrl,
      filename: resumeFileName
    }
  };
})();
