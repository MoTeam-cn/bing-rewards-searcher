// ==UserScript==
// @name         必应积分助手
// @name:en      Bing Rewards Assistant
// @name:zh-CN   必应积分助手
// @namespace    https://github.com/MoTeam-cn/bing-rewards-searcher
// @version      1.8
// @description  自动化必应搜索以快速获取积分，支持一言API生成搜索词
// @description:en  Automate Bing searches to quickly earn rewards points, with Hitokoto API integration
// @description:zh-CN 自动化必应搜索以快速获取积分，支持一言API生成搜索词
// @author       Your Name
// @license      MIT
// @match        https://www.bing.com/*
// @match        https://cn.bing.com/*
// @match        https://rewards.bing.com/*
// @connect      rewards.bing.com
// @connect      v1.hitokoto.cn
// @connect      api.oick.cn
// @connect      api.apiopen.top
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFJElEQVR4nL1XW2xURRj+Zs6es2d77V62VVpaaKEtFSi0RhFQY0yMiRHjJcYHE0x8wMSYGBMfNPHJxAcTEx98MMaYGGN8wMREY7yhQQwGEAQql3Kx0NKy2+1u97bn7Jk/M/4ze87ZbWGxgn9yMjszZ+b7v/nnn5kF/sfmOQ7YxhgDY/TvhWAghP5/AXDOYds2KAUYZyCUgTEGxpzPnAMcgBACQghQQsEYBSgBY/SxAXEAEEIAADjnoIQiFFJACYFtMxBKQSkBpRSccTiOA845OCi4zUEogcpVqFQBpQSMOUzYtg3OGZQHZUE5B6MUhBJQQsGYE5XrOAf4/QFIkgzGbDBmgzEOyoCwrCIYk8EYg207vy3LgmEYME0TnPMHBsQBQJIkKIoCznkxLM4YVFWBqqqwbQeAZVkwDAOWZcE0TWiaBtM0oWkaGGMP5AcOAMYYZFmGoigghECWZciyjEgkAkmSYFkWGHMikyQJkUgEsixDlmUEg0HYtg3TNGFZFizLgm3bfQFxAFBKEQgEEAgEEAwGEQwGEY1GEY1GEQqFYJqmC0BRFMRiMYRCIQQCAQQCAQiCANu2XRCGYcA0zZ4gKABwzqEoCgRBgCiKEEURoVAIkUgE4XAYiqK4DiiKgnA4DFEUIYoiRFGEIAiQJMkFYJomDMPoGQUPAM45JEmCKIoQBAGCICAQCCAYDEIQBFBKXQCyLEMQBAiCAFmWIcsyZFmGJEkghLgADMPoKwoHAHNWmzEGURRBCHFD7oQfgCAIbsidZ1mWQQhxI+BEwS8KFIBrOI7juGHUdd0t+XRdh2ma0HUduq5D0zRomgZd16FpGgzDgGEYME0Ttm27eeC3ORFwfh0QhBBQSt0csCwLpmm6m4+u6zAMA4ZhQNd1N/S6rkPXdZimCcuy3Kj4RYG6ACilbhQcELquu6Wn6zosy4JlWTBN0wVgmqYLwDAMGIbhRsEvAhQAOOduFJwccIzatg3btt0I2LYN0zRhWZZr3ImCruswDKNvHqDYyQEA7qpwdsB/5YDwh985C4ZhuK+dKOi67uZBr+0YANzV4IeAc+5mfLcI+EVB13WYpgnTNF0n/QAQzjmTZZlalkVlWWaiKBJZlpkkSUSWZSJJEpEkiQiCQARBIJRSQiklhBBCCCGUUkIpJZRSQgghkiS5Y0mSiCRJRJZlIkkSkWWZybLMVFVlqqoyVVWZJElMkiSmKApTFIUpikJFUSSiKBJRFN0xIYQQSgkVBIEKgkAFQaCCIFBZlpkkSUSWZSLLMpFlmYmiSERRJKIoElVVmaqqTFVVpqoqU1WVKYrCFEVhsiwzWZaZJElEkiQiiiIRRZEIgkAopYQQQiilhBBCKKWEUkpEUSSqqjJVVZmiKExRFKYoClNVlSmKwhRFYaqqMlVVmaqqTFVVpigKk2WZSZJEJEkioigSQRAIpZRQSgkhhFBKCaWUEEIIIYQQSikhhBBKKaGUEkIIoZQSSikhhBBCCCGEEEIopYRSSgghhFJKKKWEEEIopYRQSgkhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEL+BQXRd/gdxXJ+AAAAAElFTkSuQmCC
// @supportURL   https://github.com/MoTeam-cn/bing-rewards-searcher/issues
// @homepageURL  https://github.com/MoTeam-cn/bing-rewards-searcher
// @updateURL    https://raw.githubusercontent.com/MoTeam-cn/bing-rewards-searcher/main/bing-rewards-searcher.user.js
// @downloadURL  https://raw.githubusercontent.com/MoTeam-cn/bing-rewards-searcher/main/bing-rewards-searcher.user.js
// ==/UserScript==

(function() {
    'use strict';

    let currentIndex = GM_getValue('currentIndex', 0);
    let isRunning = GM_getValue('isRunning', false);
    let searchCache = [];
    let lastPoints = GM_getValue('lastPoints', 0);
    let currentPoints = GM_getValue('currentPoints', 0);

    // 可用的API列表
    const API_CONFIG = [
        {
            url: 'https://v1.hitokoto.cn/?encode=json',
            parse: (response) => {
                try {
                    const data = JSON.parse(response);
                    return data?.hitokoto || '';
                } catch (e) {
                    console.error('hitokoto解析失败:', e);
                    return '';
                }
            }
        },
        {
            url: 'https://api.oick.cn/yiyan/api.php',
            parse: (response) => {
                try {
                    // oick.cn返回的是纯文本
                    return response?.trim() || '';
                } catch (e) {
                    console.error('oick解析失败:', e);
                    return '';
                }
            }
        },
        {
            url: 'https://api.apiopen.top/api/sentences',
            parse: (response) => {
                try {
                    const data = JSON.parse(response);
                    return data?.result?.name || '';
                } catch (e) {
                    console.error('apiopen解析失败:', e);
                    return '';
                }
            }
        }
    ];

    // 备用搜索词生成器
    const backupGenerator = {
        prefixes: ['what', 'how', 'why', 'when', 'where', 'which', '怎么', '如何', '为什么', '哪里'],
        topics: [
            'computer', 'internet', 'phone', 'software', 'game', 'movie', 'music', 'book',
            '电脑', '手机', '游戏', '电影', '音乐', '书籍', '新闻', '科技'
        ],
        generate() {
            const prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
            const topic = this.topics[Math.floor(Math.random() * this.topics.length)];
            const timestamp = Date.now().toString().slice(-4);
            return `${prefix} ${topic} ${timestamp}`;
        }
    };

    // 创建提示元素
    function createToast() {
        const toast = document.createElement('div');
        toast.id = 'search-toast';
        toast.style.cssText = `
            position: fixed;
            top: 60px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            z-index: 10000;
            transition: opacity 0.3s;
            font-size: 14px;
            display: none;
        `;
        document.body.appendChild(toast);
        return toast;
    }

    // 显示提示
    function showToast(message, duration = 2000) {
        let toast = document.getElementById('search-toast');
        if (!toast) {
            toast = createToast();
        }
        toast.textContent = message;
        toast.style.display = 'block';
        toast.style.opacity = '1';

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 300);
        }, duration);
    }

    // 获取随机搜索词
    async function getRandomSearchTerm() {
        if (searchCache.length > 0) {
            return searchCache.pop();
        }

        // 随机选择一个API配置
        const config = API_CONFIG[Math.floor(Math.random() * API_CONFIG.length)];

        try {
            return new Promise((resolve) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: config.url,
                    timeout: 3000,
                    onload: function(response) {
                        try {
                            const text = config.parse(response.responseText);
                            if (!text) {
                                // 如果解析失败或返回空，使用备用生成器
                                resolve(backupGenerator.generate());
                                return;
                            }
                            // 如果文本过长，截取前30个字符
                            const searchTerm = text.length > 30 ? text.substring(0, 30) : text;
                            resolve(searchTerm);
                        } catch (error) {
                            console.error('解析响应失败:', error);
                            resolve(backupGenerator.generate());
                        }
                    },
                    onerror: function(error) {
                        console.error('请求失败:', error);
                        resolve(backupGenerator.generate());
                    },
                    ontimeout: function() {
                        console.error('请求超时');
                        resolve(backupGenerator.generate());
                    }
                });
            });
        } catch (error) {
            console.error('获取搜索词失败:', error);
            return backupGenerator.generate();
        }
    }

    // 预加载搜索词
    async function preloadSearchTerms() {
        try {
            const promises = Array(3).fill().map(() => getRandomSearchTerm());
            const terms = await Promise.all(promises);
            searchCache.push(...terms.filter(term => term)); // 过滤掉空值
        } catch (error) {
            console.error('预加载搜索词失败:', error);
        }
    }

    // 获取积分信息
    async function getRewardsPoints() {
        try {
            return new Promise((resolve) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: 'https://rewards.bing.com/api/getuserinfo?type=1',
                    headers: {
                        'Accept': 'application/json'
                    },
                    onload: function(response) {
                        try {
                            const data = JSON.parse(response.responseText);
                            if (data && data.dashboard && data.dashboard.userStatus) {
                                const points = data.dashboard.userStatus.availablePoints || 0;
                                lastPoints = currentPoints;
                                currentPoints = points;
                                GM_setValue('lastPoints', lastPoints);
                                GM_setValue('currentPoints', currentPoints);
                                resolve(points);
                            } else {
                                resolve(null);
                            }
                        } catch (e) {
                            console.error('解析积分信息失败:', e);
                            resolve(null);
                        }
                    },
                    onerror: function(error) {
                        console.error('获取积分信息失败:', error);
                        resolve(null);
                    }
                });
            });
        } catch (error) {
            console.error('请求积分信息失败:', error);
            return null;
        }
    }

    // 创建积分显示元素
    function createPointsDisplay() {
        const display = document.createElement('div');
        display.id = 'points-display';
        display.style.cssText = `
            position: fixed;
            top: 60px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            z-index: 9999;
            font-size: 14px;
            font-weight: bold;
        `;
        document.body.appendChild(display);
        return display;
    }

    // 更新积分显示
    function updatePointsDisplay() {
        let display = document.getElementById('points-display');
        if (!display) {
            display = createPointsDisplay();
        }

        const gained = currentPoints - lastPoints;
        const gainedText = gained > 0 ? ` (+${gained})` : '';
        display.textContent = `当前积分: ${currentPoints}${gainedText}`;
        display.style.backgroundColor = gained > 0 ? 'rgba(40, 167, 69, 0.8)' : 'rgba(0, 0, 0, 0.8)';
    }

    // 定期检查积分
    async function checkPoints() {
        const points = await getRewardsPoints();
        if (points !== null) {
            updatePointsDisplay();
        }
    }

    // 执行搜索
    async function performSearch() {
        try {
            const searchTerm = await getRandomSearchTerm();
            if (!searchTerm) {
                performSearch();
                return;
            }

            const encodedTerm = encodeURIComponent(searchTerm);
            const searchUrl = `https://cn.bing.com/search?q=${encodedTerm}&form=QBRE`;
            
            currentIndex++;
            GM_setValue('currentIndex', currentIndex);
            updateButton();
            
            // 每5次搜索检查一次积分
            if (currentIndex % 5 === 0) {
                await checkPoints();
            }
            
            showToast(`正在搜索: ${searchTerm} (第${currentIndex}次)`);
            
            // 预加载下一批搜索词
            preloadSearchTerms();
            
            if (isRunning) {
                setTimeout(() => {
                    window.location.href = searchUrl;
                }, 1500);
            }
        } catch (error) {
            showToast('搜索出错: ' + error.message);
            console.error('搜索出错:', error);
            setTimeout(() => {
                if (isRunning) performSearch();
            }, 1500);
        }
    }

    // 开始搜索
    async function startSearch() {
        try {
            isRunning = true;
            GM_setValue('isRunning', true);
            showToast('开始搜索');
            await checkPoints(); // 开始时检查积分
            await preloadSearchTerms();
            performSearch();
            updateButton();
        } catch (error) {
            showToast('启动搜索出错: ' + error.message);
            console.error('启动搜索出错:', error);
        }
    }

    // 停止搜索
    function stopSearch() {
        try {
            isRunning = false;
            GM_setValue('isRunning', false);
            showToast('停止搜索');
            updateButton();
        } catch (error) {
            showToast('停止搜索出错: ' + error.message);
            console.error('停止搜索出错:', error);
        }
    }

    // 更新按钮状态
    function updateButton() {
        try {
            const button = document.querySelector('#auto-search-btn');
            if (button) {
                button.innerHTML = `${isRunning ? '暂停' : '开始'}搜索 (${currentIndex}次)`;
                button.style.backgroundColor = isRunning ? '#ff4444' : '#00a4ef';
            }
        } catch (error) {
            console.error('更新按钮出错:', error);
        }
    }

    // 添加控制按钮
    function addButton() {
        try {
            const existingButton = document.querySelector('#auto-search-btn');
            if (existingButton) return;

            const button = document.createElement('button');
            button.id = 'auto-search-btn';
            button.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 9999;
                padding: 10px;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                font-weight: bold;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            `;
            
            button.onclick = () => {
                if (isRunning) {
                    stopSearch();
                } else {
                    startSearch();
                }
            };
            
            document.body.appendChild(button);
            updateButton();
        } catch (error) {
            showToast('添加按钮出错: ' + error.message);
            console.error('添加按钮出错:', error);
        }
    }

    // 注册油猴菜单
    GM_registerMenuCommand('开始搜索', startSearch);
    GM_registerMenuCommand('停止搜索', stopSearch);

    // 初始化
    window.addEventListener('load', () => {
        try {
            setTimeout(async () => {
                addButton();
                createToast();
                await checkPoints(); // 初始化时检查积分
                showToast('脚本已加载');
                
                if (isRunning) {
                    setTimeout(performSearch, 1000);
                }

                // 每分钟检查一次积分
                setInterval(checkPoints, 60000);
            }, 1000);
        } catch (error) {
            console.error('初始化出错:', error);
        }
    });
})(); 