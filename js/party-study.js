// 课程数据
const courseData = {
    1: {
        title: "习近平新时代中国特色社会主义思想",
        content: `
            <div class="course-content">
                <h3>课程概述</h3>
                <p>本课程将深入解读习近平新时代中国特色社会主义思想的核心要义和实践要求。</p>
                
                <h3>学习目标</h3>
                <ul>
                    <li>理解习近平新时代中国特色社会主义思想的时代背景</li>
                    <li>掌握核心内容和基本方略</li>
                    <li>领会贯彻落实的实践要求</li>
                </ul>
                
                <h3>课程内容</h3>
                <p>第一章：时代背景与理论渊源</p>
                <p>第二章：核心要义与理论创新</p>
                <p>第三章：基本方略与实践要求</p>
            </div>
        `
    },
    2: {
        title: "党的二十大精神解读",
        content: `
            <div class="course-content">
                <h3>课程概述</h3>
                <p>本课程将系统解读党的二十大报告的主要内容和重要论述。</p>
                
                <h3>学习目标</h3>
                <ul>
                    <li>理解党的二十大的重大意义</li>
                    <li>掌握报告的核心要义</li>
                    <li>把握未来发展方向</li>
                </ul>
                
                <h3>课程内容</h3>
                <p>第一章：大会主题与重大意义</p>
                <p>第二章：报告核心要义解读</p>
                <p>第三章：未来发展战略部署</p>
            </div>
        `
    },
    3: {
        title: "党史学习教育",
        content: `
            <div class="course-content">
                <h3>课程概述</h3>
                <p>本课程将带领学员回顾党的百年奋斗历程，汲取历史经验。</p>
                
                <h3>学习目标</h3>
                <ul>
                    <li>了解党的光辉历程</li>
                    <li>把握历史经验总结</li>
                    <li>传承红色基因</li>
                </ul>
                
                <h3>课程内容</h3>
                <p>第一章：建党时期与大革命时期</p>
                <p>第二章：社会主义革命和建设时期</p>
                <p>第三章：改革开放和新时代</p>
            </div>
        `
    }
};

// 开始学习课程
function startCourse(courseId) {
    const course = courseData[courseId];
    if (course) {
        document.getElementById('courseTitle').textContent = course.title;
        document.getElementById('courseContent').innerHTML = course.content;
        document.getElementById('studyModal').style.display = 'block';
    }
}

// 关闭学习模态框
function closeStudyModal() {
    document.getElementById('studyModal').style.display = 'none';
}

// 完成课程学习
function completeCourse() {
    alert('恭喜您完成本次学习！');
    closeStudyModal();
    // 这里可以添加更新学习进度的逻辑
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('studyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 检查登录状态
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    // 显示用户名
    const username = localStorage.getItem('partyMemberUsername');
    if (username) {
        document.getElementById('memberUsername').textContent = username;
    }
}); 