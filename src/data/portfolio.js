const createPoster = (title, subtitle, palette) => {
  const [from, to, accent] = palette;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="42"/></filter></defs><rect width="1200" height="800" fill="#11130f"/><rect width="1200" height="800" fill="url(#g)" opacity=".84"/><circle cx="920" cy="160" r="180" fill="${accent}" opacity=".52" filter="url(#blur)"/><path d="M0 625 C220 490 370 740 605 575 S1000 440 1200 610 V800 H0Z" fill="#0d0e0c" opacity=".78"/><text x="600" y="666" text-anchor="middle" fill="#f2f0e9" font-family="Arial,sans-serif" font-size="34" letter-spacing="5">${title}</text><text x="600" y="714" text-anchor="middle" fill="#d9f95b" font-family="Arial,sans-serif" font-size="15" letter-spacing="3">${subtitle}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const profile = {
  brand: 'MAY / 梅振阳',
  shortName: 'MAY',
  role: '平面设计师 · 视觉设计师 · 梅振阳',
  location: '上海 · 中国',
  email: '479724022@qq.com',
  intro: '我用图形、文字与色彩，把一个想法变成值得被记住的视觉语言。',
  about:
    '拥有 5 年平面与视觉设计经验，工作横跨品牌识别、海报、包装与编辑设计。我喜欢从一个清晰的概念出发，把复杂信息整理成有秩序、有情绪、也能真正落地的视觉作品。',
  stats: [
    { value: '05', label: '年平面视觉经验', detail: '从概念到成品的完整实践' },
    { value: '04', label: '主要工作方向', detail: '品牌、海报、包装与编辑设计' },
    { value: '03', label: '常见合作方式', detail: '独立合作、团队协同与长期顾问' },
    { value: '01', label: '核心工作方法', detail: '让视觉先有观点，再有形式' },
  ],
  links: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: '小红书', href: 'https://www.xiaohongshu.com/' },
  ],
};

export const recognition = ['Brand identity', 'Poster design', 'Packaging', 'Art direction'];

export const cases = [
  {
    id: 'northline',
    title: '动在静安 上海国际潮流文化节',
    type: 'International Trend Culture Festival',
    poster: '/assets/optimized/高校横版.webp',
    fit: 'focus-right',
  },
  {
    id: 'monument',
    title: '志友家韩式炸鸡',
    type: 'Packaging & campaign / 2024',
    poster: '/assets/optimized/case-fried-chicken.webp',
    fit: 'contain',
  },
  {
    id: 'table',
    title: '陆小春日式烤肉饭',
    type: 'Packaging design / 2023',
    poster: '/assets/optimized/case-japanese-bbq.webp',
    fit: 'contain',
  },
  {
    id: 'signal',
    title: '金乌啤酒',
    type: 'Brand identity / 2022',
    poster: '/assets/optimized/case-beer.webp',
    fit: 'contain',
  },
];

export const services = [
  {
    number: '01',
    title: '品牌视觉',
    body: '从定位、标志到完整视觉规范，建立一套有辨识度、能持续使用的品牌语言。',
  },
  {
    number: '02',
    title: '平面与海报',
    body: '用版式、字体和图形组织信息，让活动、观点与内容在第一眼就留下印象。',
  },
  {
    number: '03',
    title: '包装与出版',
    body: '把视觉概念延伸到包装、书册与实体触点，让作品在屏幕之外也保持完整。',
  },
  {
    number: '04',
    title: '艺术指导',
    body: '从视觉方向、素材规划到最终执行，帮助团队把一个想法稳定地变成一组作品。',
  },
];

export const projects = [
  {
    id: '01',
    year: '2021-2026',
    title: '动在静安 上海国际潮流文化节',
    eyebrow: 'Featured case',
    description: '为上海静安的一场国际潮流文化节建立活动视觉，将街舞、音乐与城市现场融合进一套高识别度的主视觉系统。',
    tags: ['活动视觉', '海报设计', '艺术指导'],
    role: ['提炼活动主题并建立视觉概念', '完成主视觉、海报、票券与现场导视', '协同摄影与制作团队完成现场物料交付'],
    outcomes: [
      { value: '01', label: '套活动主视觉系统' },
      { value: '06', label: '类活动传播物料' },
      { value: '01', label: '场线下潮流文化节' },
    ],
    gallery: [
      '/assets/galleries/dynamic-jingan/01.webp',
      '/assets/galleries/dynamic-jingan/02.webp',
      '/assets/galleries/dynamic-jingan/03.webp',
    ],
    image: '/assets/galleries/dynamic-jingan/01.webp',
    imageFit: 'contain',
  },
  {
    id: '02',
    year: '2021-2026',
    title: '志友家韩式炸鸡',
    eyebrow: 'Poster collection',
    description: '围绕韩式炸鸡品牌的包装、优惠券与菜单物料，建立一套轻松、鲜明、具有记忆点的餐饮视觉系统。',
    tags: ['包装设计', '餐饮视觉', '插画系统'],
    role: ['定义系列海报的核心视觉语法', '完成主题海报、导视与社交传播物料', '把同一套图形语言适配到不同尺寸与媒介'],
    outcomes: [
      { value: '12', label: '张系列海报完成设计' },
      { value: '06', label: '种尺寸与媒介适配' },
      { value: '02', label: '场线下展览同步应用' },
    ],
    gallery: [
      '/assets/galleries/fried-chicken/01.webp',
      '/assets/galleries/fried-chicken/02.webp',
      '/assets/galleries/fried-chicken/03.webp',
      '/assets/galleries/fried-chicken/04.webp',
      '/assets/galleries/fried-chicken/05.webp',
      '/assets/galleries/fried-chicken/06.webp',
      '/assets/galleries/fried-chicken/07.webp',
      '/assets/galleries/fried-chicken/08.webp',
    ],
    image: '/assets/optimized/project-fried-chicken.webp',
    imageFit: 'contain',
  },
  {
    id: '03',
    year: '2021-2026',
    title: '陆小春日式烤肉饭',
    eyebrow: 'Packaging direction',
    description: '为日式烤肉饭品牌建立从包装、餐盒到筷套的视觉系统，让产品在外带、陈列与日常用餐场景中保持统一。',
    tags: ['包装设计', '餐饮品牌', '应用延展'],
    role: ['建立产品系列的命名与包装层级', '完成包装正背面、贴纸与陈列卡设计', '跟进打样、纸张和印刷效果的最终确认'],
    outcomes: [
      { value: '07', label: '个产品包装完成落地' },
      { value: '04', label: '类实体物料同步开发' },
      { value: '01', label: '套可延展包装规则' },
    ],
    gallery: [
      '/assets/galleries/japanese-bbq/01.webp',
      '/assets/galleries/japanese-bbq/02.webp',
      '/assets/galleries/japanese-bbq/03.webp',
      '/assets/galleries/japanese-bbq/04.webp',
      '/assets/galleries/japanese-bbq/05.webp',
      '/assets/galleries/japanese-bbq/06.webp',
      '/assets/galleries/japanese-bbq/07.webp',
      '/assets/galleries/japanese-bbq/08.webp',
    ],
    image: '/assets/optimized/project-japanese-bbq.webp',
    imageFit: 'contain',
  },
  {
    id: '04',
    year: '2021-2026',
    title: '金乌啤酒',
    eyebrow: 'Art direction',
    description: '为金乌啤酒完成品牌图形、包装与陈列视觉探索，在复古商业语言与年轻消费场景之间建立鲜明识别度。',
    tags: ['品牌识别', '包装设计', '艺术指导'],
    role: ['提炼活动主题并建立视觉概念', '完成主视觉、海报、票券与现场导视', '协同摄影与制作团队完成现场物料交付'],
    outcomes: [
      { value: '18', label: '项传播与现场物料' },
      { value: '05', label: '个活动空间视觉触点' },
      { value: '03', label: '周完成从概念到落地' },
    ],
    gallery: [
      '/assets/galleries/jinwu-beer/01.webp',
      '/assets/galleries/jinwu-beer/02.webp',
      '/assets/galleries/jinwu-beer/03.webp',
      '/assets/galleries/jinwu-beer/04.webp',
      '/assets/galleries/jinwu-beer/05.webp',
      '/assets/galleries/jinwu-beer/06.webp',
      '/assets/galleries/jinwu-beer/07.webp',
      '/assets/galleries/jinwu-beer/08.webp',
    ],
    image: '/assets/optimized/project-beer.webp',
    imageFit: 'contain',
  },
];

export const timeline = [
  { year: '2021 — 2022', title: '建立视觉基础', type: 'Visual foundation', body: '从平面构成、字体与印刷开始，建立对版式、材质和视觉秩序的长期兴趣。' },
  { year: '2022 — 2023', title: '进入品牌项目', type: 'Brand identity', body: '参与品牌识别、包装与活动项目，开始把单张作品延伸成可以被持续使用的系统。' },
  { year: '2023 — 2024', title: '拓展内容表达', type: 'Editorial & poster', body: '在海报、出版与内容设计中练习观点与形式的平衡，让视觉更准确地服务于信息。' },
  { year: '2024 — now', title: '独立视觉实践', type: 'Independent practice', body: '以独立设计师身份，与重视质感和长期价值的团队合作，完成从概念到制作的完整交付。' },
];
