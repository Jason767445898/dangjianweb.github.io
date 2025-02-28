// 处理地点标签点击事件
document.querySelectorAll('.location-label').forEach(label => {
    label.addEventListener('click', async function() {
        const locationId = this.dataset.location;
        const locationName = this.textContent.trim();
        
        try {
            // 更新模态框标题
            document.getElementById('locationModalLabel').textContent = locationName;
            
            // 显示模态框
            const modal = new bootstrap.Modal(document.getElementById('locationModal'));
            modal.show();
            
            // 获取数据
            const data = await fetchLocationData(locationId);
            
            // 解析描述信息
            const sections = parseDescription(data.description);
            
            // 更新模态框内容
            document.getElementById('location-traffic').textContent = sections.traffic || '暂无数据';
            document.getElementById('location-population').textContent = sections.population || '暂无数据';
            document.getElementById('location-party').textContent = sections.party || '暂无数据';
            document.getElementById('location-data').textContent = data.data;
            
        } catch (error) {
            console.error('获取数据失败:', error);
            // 显示错误信息
            document.getElementById('location-traffic').textContent = '数据加载失败';
            document.getElementById('location-population').textContent = '数据加载失败';
            document.getElementById('location-party').textContent = '数据加载失败';
            document.getElementById('location-data').textContent = '暂无数据';
        }
    });
});

// 获取地点数据
async function fetchLocationData(id) {
    try {
        const response = await fetch('js/locations.json');
        const allData = await response.json();
        
        if (allData[id]) {
            return allData[id];
        } else {
            throw new Error('未找到数据');
        }
    } catch (error) {
        console.error('获取数据失败:', error);
        throw error;
    }
}

// 解析描述信息
function parseDescription(description) {
    const sections = {
        traffic: '',
        population: '',
        party: ''
    };
    
    const parts = description.split('【');
    parts.forEach(part => {
        if (part.startsWith('区位交通】')) {
            sections.traffic = part.replace('区位交通】', '').trim();
        } else if (part.startsWith('区划人口】')) {
            sections.population = part.replace('区划人口】', '').trim();
        } else if (part.startsWith('党组织情况】')) {
            sections.party = part.replace('党组织情况】', '').trim();
        }
    });
    
    return sections;
} 