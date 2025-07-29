/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-05-20 15:33:00
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/public/file.js
 */
.onmessage = function(e) {
    const file = e.data;
    const size = file.size;  // 读取文件大小
    self.postMessage(size);
    self.close();  // 关闭Worker
};
