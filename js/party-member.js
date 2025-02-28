function handlePartyMemberLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 这里应该添加实际的登录验证逻辑
    if (username && password) {
        // 存储登录状态
        localStorage.setItem('partyMemberLoggedIn', 'true');
        localStorage.setItem('partyMemberUsername', username);
        
        // 跳转到党员主页
        window.location.href = 'party-member-dashboard.html';
    } else {
        alert('请输入党员编号和密码');
    }
    
    return false;
}

// 检查登录状态（在党员面板页面使用）
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('partyMemberLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
}

// 退出登录
function logout() {
    localStorage.removeItem('partyMemberLoggedIn');
    localStorage.removeItem('partyMemberUsername');
    window.location.href = 'index.html';
}

// 在党员面板页面加载时检查登录状态
if (document.querySelector('.sidebar')) {
    checkLoginStatus();
}

// 加载内容
function loadContent(section) {
    const contentArea = document.querySelector('.content');
    // 根据不同的section加载相应的内容
    switch(section) {
        case 'study':
            // 加载党课学习内容
            break;
        case 'resources':
            // 加载资讯内容
            break;
        // ... 其他内容处理
    }
}

// 切换时间线内容显示/隐藏
function toggleTimelineContent(header) {
    const item = header.parentElement;
    const content = item.querySelector('.timeline-content');
    
    // 关闭其他所有打开的项目
    const allItems = document.querySelectorAll('.timeline-item');
    allItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.toggle-icon').textContent = '+';
        }
    });
    
    // 切换当前项目
    if (item.classList.contains('active')) {
        item.classList.remove('active');
        header.querySelector('.toggle-icon').textContent = '+';
    } else {
        item.classList.add('active');
        header.querySelector('.toggle-icon').textContent = '×';
    }
}

// 页面加载时默认关闭所有内容
document.addEventListener('DOMContentLoaded', function() {
    const timelineContents = document.querySelectorAll('.timeline-content');
    timelineContents.forEach(content => {
        content.style.maxHeight = null;
    });
}); 