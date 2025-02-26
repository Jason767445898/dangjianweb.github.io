document.addEventListener('DOMContentLoaded', function() {
    // 添加汉堡菜单按钮
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.innerHTML = '☰';
    document.body.appendChild(menuButton);

    // 添加遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // 获取侧边栏
    const sidebar = document.querySelector('.sidebar');

    // 切换菜单
    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // 点击遮罩层关闭菜单
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // 处理子菜单
    const submenuTriggers = document.querySelectorAll('.menu > li > a');
    submenuTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    e.preventDefault();
                    submenu.style.display = 
                        submenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
}); 