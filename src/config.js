/**
 * Aurora 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com      QQ 1124590931
 */

export default {
  /**
   * =========================================================
   *                      站点功能【必需】
   * =========================================================
   */

  /**
   * 站点标题
   */
  title: '蝉時雨',
  subtitle: '蝉鸣如雨 花宵道中',

  /**
   * Github Issues 配置
   */
  username: 'ZhuangRenyang', // github 用户名
  repository: 'blog', // 文章仓库地址
  token: ['ghp_ktLxgDKbBcCYkyTYAp', 'GPiE45SSwhAR36wU9a'],
  // token: ['0ad1a0539c5b96fd18fa', 'aaafba9c7d1362a5746c'], // token 从中间任意位置拆开成两部分，避免 github 代码检测失效

  /**
   * Gitalk 配置，文档详见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: 'c1979a0be179f15849bd',
    clientSecret: 'bbca0ebe5d285404e6e5aaf293a7843c84b04ad4',
    repo: 'Comment', // 评论仓库地址
    owner: 'ZhuangRenyang',
    admin: ['ZhuangRenyang'],
    distractionFreeMode: false, // 是否开始无干扰模式【背景遮罩】
    proxy: 'https://bokegitalkcors.herokuapp.com/https://github.com/login/oauth/access_token',
  },

  /**
   * leancloud 配置 【注意切换为国际版】
   */
  leancloud: {
    appId: 'nlChYoWb6I7eeRJiGPug7O1t-MdYXbMMI',
    appKey: 'BfLw43i5z1WvVAwhZznGDasm',
  },

  /**
   * =========================================================
   *                        页面设置
   * =========================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '華枝春滿 天心月圓', // 页面顶部一言
  },

  /**
   * 分类页面
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '桜華月想 暮色蒼然',
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '灯笼流丽，百鬼夜行',
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '詠奏妖華，明鏡止水',
  },

  /**
   * 书单页面
   */
  bookOpts: {
    display: true,
    enableComment: true,
    qoute: '追想風景 彼岸帰航',
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '青青子衿，悠悠我心',
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '蝉鸣如雨，花宵道中',
    avatar: 'https://avatars.githubusercontent.com/u/116170751?v=4',
    graduated: 'China University Of Geosciences(Beijing)',
    college: 'Computer Science and Technology',
    contact: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/email.png',
        link: 'https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=tNnR9Nfc1drH3N3NwZrX29k',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/github.png',
        link: 'https://github.com/ZhuangRenyang',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/music.png',
        link: 'https://music.163.com/#/user/home?id=1651928313',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/telegram.png',
        link: 'https://t.me/chan_shi_yu',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/twitter.png',
        link: 'https://twitter.com/make94584971',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/rsshub.png',
        link: 'https://rsshub.app/github/issue/Zhuangrenyang/blog',
      },
    ],
  },

  /**
   * =========================================================
   *                         主题自定义
   * =========================================================
   */

  /**
   * 加载动画
   */
  loadingImg: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg',

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '支付宝',
      img: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/MoneyBox/zhifubao.jpg',
    },
    {
      name: '微信',
      img: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/MoneyBox/weixin.jpg',
    },
  ],

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: 'うたかたの风と蝉时雨',
      artist: 'Little Planet',
      url: 'https://files.catbox.moe/wo7zjt.mp3',
      cover: 'https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover1.jpg',
    },
    {
      name: '蝴蝶泉边',
      artist: '蝴蝶泉边（吉他版）',
      url: 'https://files.catbox.moe/5sk4sw.mp3',
      cover: 'https://p1.music.126.net/7BaLyY4q3FmFGDqtN6bA-g==/109951167086402329.jpg?param=130y130',
    },
    {
      name: 'summertime（Arrange ver.）',
      artist: 'summertime（Arrange ver.）',
      url: 'https://files.catbox.moe/1prple.mp3',
      cover: 'https://p1.music.126.net/F8n59CLKs2J_YH62RGPR9g==/109951165269752250.jpg?param=300y300',
    },
    {
      name: '国王与乞丐',
      artist: '国王与乞丐',
      url: 'https://files.catbox.moe/no749c.mp3',
      cover: 'https://p1.music.126.net/zTYU5e42uJKIXngd204Juw==/109951164175574439.jpg?param=300y300',
    },
    {
      name: 'secret base ~君がくれたもの~ (10 years after Ver.) ',
      artist: 'ノイタミナ FAN BEST',
      url: 'https://files.catbox.moe/8h48qg.mp3',
      cover: 'https://p2.music.126.net/qMg2-kgxvYwMRvABdQJ91Q==/109951166198069948.jpg?param=300y300',
    },
    {
      name: 'ロクデナシ',
      artist: '療癒嚟聽 (日語篇)',
      url: 'https://files.catbox.moe/dg5po7.mp3',
      cover: 'https://th.bing.com/th/id/R.16a0cf01d4b74b1a098f59d70fd72b4f?rik=jsrtJAiyqmmgPg&pid=ImgRaw&r=0',
    },
    {
      name: '黄昏海岸线',
      artist: '黄昏海岸线',
      url: 'https://files.catbox.moe/nou2eg.mp3',
      cover: 'https://geciku-img.oss-cn-shenzhen.aliyuncs.com/album/image/20220725/1658718223369.jpg?x-oss-process=image/resize,m_fixed,h_180,w_180/format,webp',
    },
    {
      name: '晚点告白',
      artist: '晚点告白',
      url: 'https://files.catbox.moe/uvt7kg.mp3',
      cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002cS2IG1ThjfF_2.jpg?max_age=2592000',
    },
    {
      name: '假面舞会',
      artist: '假面舞会',
      url: 'https://files.catbox.moe/gcgu0d.mp3',
      cover: 'https://gqsou.com/wp-content/uploads/2021/10/2021102506033713.jpg',
    },
    {
      name: '拥过你的风',
      artist: '拥过你的风',
      url: 'https://files.catbox.moe/ebh878.mp3',
      cover: 'https://www.bing.com/images/search?view=detailV2&ccid=eMaUhpuM&id=6E4B83E58BB04057474D4019147BE077E0EEDFA0&thid=OIP.eMaUhpuM4eP2bXT4OWV_WwGQEO&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.78c694869b8ce1e3f66d74f839657f5b%3frik%3doN%252fu4HfgexQZQA%26riu%3dhttp%253a%252f%252fimg.wanjita.com%252fuploads%252f20221022%252f63537617028b3.jpg%26ehk%3dAOfkW%252fbqd0LpYQifqCB2XMSJdEd0vG98IZ6BShc91Yw%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=270&expw=400&q=%e6%8b%a5%e8%bf%87%e4%bd%a0%e7%9a%84%e9%a3%8e&simid=607994733283710666&FORM=IRPRST&ck=D27FBC103525A1CD0BCB265BB41BB150&selectedIndex=3',
    },
  ],

  /**
   * 主题配色，主要用于文章、灵感、关于等卡片配色
   * 推荐一个超棒的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D', // 水がき
  ],
}
