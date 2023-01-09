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
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/email.png',
        link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=tNnR9Nfc1drH3N3NwZrX29k',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/github.png',
        link: 'https://github.com/ZhuangRenyang',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/music.png',
        link: 'https://music.163.com/#/user/home?id=1651928313',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/telegram.png',
        link: 'https://t.me/chan_shi_yu',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/twitter.png',
        link: 'https://twitter.com/chanshiyucx',
      },
      // {
      //   icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/rsshub.png',
      //   link: 'https://rsshub.app/github/issue/chanshiyucx/blog',
      // },
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
  loadingImg: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg',

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '支付宝',
      img: 'https://www.bing.com/images/search?view=detailV2&ccid=FYEkUL50&id=72587D09589CC8CA69C177600316A050D3A2D86B&thid=OIP.FYEkUL50WHTCvJjtwe8xNgHaHa&mediaurl=https%3a%2f%2fwww.qqkw.com%2fd%2ffile%2fp%2f2018%2f06-14%2f7c51d122368ed88c77f45e30e21608b1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.15812450be745874c2bc98edc1ef3136%3frik%3da9ii01CgFgNgdw%26pid%3dImgRaw%26r%3d0&exph=640&expw=640&q=%e6%8b%a5%e8%bf%87%e4%bd%a0%e7%9a%84%e9%a3%8e&simid=608026309868262264&FORM=IRPRST&ck=5B4B4680DCFC5CB66C30044EDA392A18&selectedIndex=1',
    },
    {
      name: '微信',
      img: 'data:image/jpeg;base64,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',
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
      cover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover1.jpg',
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
