// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态
    checkLoginStatus();
    
    // 加载用户信息
    loadUserInfo();
});

// 加载用户信息
function loadUserInfo() {
    const username = localStorage.getItem('partyMemberUsername');
    if (username) {
        document.getElementById('memberUsername').textContent = username;
        document.getElementById('profileUsername').textContent = username;
    }
}

// 开始聊天
function startChat() {
    document.getElementById('chatModal').style.display = 'block';
}

// 关闭聊天
function closeChat() {
    document.getElementById('chatModal').style.display = 'none';
}

// 发送消息
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        // 添加用户消息
        addMessage(message, 'user');
        
        // 清空输入框
        input.value = '';
        
        // 模拟AI回复
        setTimeout(() => {
            const responses = [
                "您好，我正在查询相关信息。",
                "好的，我明白了。让我为您解答这个问题。",
                "这个问题请您联系您的党支部书记。",
                "您可以在党课学习板块找到相关资料。"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'system');
        }, 1000);
    }
}

// 添加消息到聊天窗口
function addMessage(text, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('chatModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 更新党费缴纳状态
function updateDuesStatus(status) {
    const statusText = document.querySelector('.status-text');
    statusText.textContent = status;
    statusText.style.color = status === '已缴纳' ? '#4caf50' : '#c12c1f';
}

// 处理头像更改
document.querySelector('.change-avatar-btn').addEventListener('click', function() {
    // 这里可以添加更改头像的逻辑
    alert('头像更改功能正在开发中');
});

// 处理党费缴纳
document.querySelector('.pay-dues-btn').addEventListener('click', function() {
    // 这里可以添加缴纳党费的逻辑
    alert('党费缴纳功能正在开发中');
}); 