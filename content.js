/* 个人资料 / Personal content
 * en = 英文，zh = 中文。两种语言分别填写；首次访问默认英文。
 * [To add] / 【待填写】是占位提示，不是真实经历。
 * 修改引号内文字。新增条目时复制 { ... }，用英文逗号分隔。
 * 不需要的栏目填 []。链接留空时隐藏。换行写 \n。
 */
window.PROFILE = {
  email: "",
  github: "https://github.com/colinchenxx-ai",
  en: {
    name: "Your name",
    headline: "[To add] Your field, your focus, and what you care about.",
    about: "[To add] Introduce yourself here. Share your background, what you are working on, and the ideas or questions that keep you curious.",
    skills: ["Your skill", "Your interest", "Your focus"],
    education: [{period: "Start year — End year", title: "[To add] University name", subtitle: "Degree · Field of study", description: "Add your research interests, relevant coursework, thesis, or academic achievements."}],
    experience: [{period: "Start date — End date / Present", title: "[To add] Company or organization", subtitle: "Role · Team", description: "Describe your responsibilities, contributions, and the results of your work."}],
    projects: [{title: "[To add] Project name", category: "PROJECT TYPE / YEAR", description: "What problem did you explore? Describe your contribution and what you achieved.", url: ""}],
    contactNote: "Find me on GitHub."
  },
  zh: {
    name: "你的姓名",
    headline: "【待填写】一句话介绍你的专业方向、职业或关注的领域。",
    about: "【待填写】在这里写一段自我介绍。从你的专业背景、目前的工作或研究方向开始，再介绍你擅长的事情和希望探索的领域。",
    skills: ["你的技能", "你的兴趣", "关注的领域"],
    education: [{period: "入学年份 — 毕业年份", title: "【待填写】学校名称", subtitle: "学位 · 专业名称", description: "填写研究方向、主要课程、毕业论文或在校成果。"}],
    experience: [{period: "开始年月 — 结束年月 / 至今", title: "【待填写】公司 / 机构名称", subtitle: "职位名称 · 部门", description: "介绍你的工作职责、参与的项目，以及取得的具体成果。"}],
    projects: [{title: "【待填写】项目名称", category: "项目类别 / 年份", description: "介绍项目要解决的问题、你负责的部分和最终成果。", url: ""}],
    contactNote: "欢迎通过 GitHub 与我交流。"
  }
};
