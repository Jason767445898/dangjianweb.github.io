// 新闻项点击处理
document.querySelectorAll('.section li').forEach(item => {
    item.addEventListener('click', function() {
        const newsTitle = this.textContent;
        // 修改为相对路径
        window.location.href = `news-detail.html?title=${encodeURIComponent(newsTitle)}`;
    });
});

// 搜索功能
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // 这里可以添加搜索逻辑
        alert(`搜索关键词: ${searchTerm}`);
    }
} 