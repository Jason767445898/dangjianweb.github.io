// 从 URL 获取新闻标题参数
function getNewsTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('title');
}

// 模拟新闻数据（实际项目中应该从服务器获取）
const newsData = {
    "全市深化作风建设优化营商环境大会召开": {
        title: "全市深化作风建设优化营商环境大会召开",
        date: "2024-03-15",
        source: "阳春河㙟党建网",
        content: `
            <p>3月15日，全市深化作风建设优化营商环境大会在市政府召开。会议深入学习贯彻习近平总书记关于作风建设和优化营商环境的重要论述，全面落实省委省政府决策部署，对全市深化作风建设、优化营商环境工作进行再动员再部署。</p>
            <p>会议强调，要始终坚持以人民为中心的发展思想，把优化营商环境作为推动高质量发展的重要抓手，以作风建设新成效推动营商环境新提升。</p>
        `
    },
    "习近平：健全全面从严治党体系": {
        title: "习近平：健全全面从严治党体系",
        date: "2024-03-14",
        source: "新华社",
        content: `
            <p>习近平总书记强调，要健全全面从严治党体系，坚持和加强党的全面领导，坚持党要管党、全面从严治党。</p>
            <p>要把严的基调、严的措施、严的氛围长期坚持下去，教育引导广大党员、干部特别是领导干部从思想上正本清源、固本培元。</p>
        `
    }
    // 可以添加更多新闻数据
};

// 加载新闻内容
function loadNewsContent() {
    const title = getNewsTitle();
    const news = newsData[title];
    
    if (news) {
        document.querySelector('.news-title').textContent = news.title;
        document.querySelector('.date').textContent = news.date;
        document.querySelector('.source').textContent = news.source;
        document.querySelector('.news-content').innerHTML = news.content;
    } else {
        document.querySelector('.news-content').innerHTML = '<p>新闻内容不存在</p>';
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', loadNewsContent); 