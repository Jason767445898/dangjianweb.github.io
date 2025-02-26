document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const messageInput = document.getElementById('messageInput');

    // 打开聊天窗口
    chatButton.addEventListener('click', function() {
        chatModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    });

    // 关闭聊天窗口
    window.closeChat = function() {
        chatModal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    };

    // 发送消息
    window.sendMessage = function() {
        const message = messageInput.value.trim();
        if (message) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message user';
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            messageInput.value = '';
            
            // 自动滚动到底部
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };

    // 按回车发送消息
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}); 