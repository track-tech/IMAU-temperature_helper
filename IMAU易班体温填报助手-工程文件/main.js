/*
--内蒙古农业大学易班体温填报助手V1.0--
半成品脚本大家凑合用用，欢迎有能力的大佬写个UI打包成独立程序

--------------------------
Designed by Zhang Baichuan（张百川）

*/
//以下为主程序
auto.waitFor();
// 检测无障碍是否开启

console.show(true);
console.clear();
//toast("测试");

curTime = new Date();
console.log("当前时间是" + curTime.getFullYear() + "-" + (curTime.getMonth() + 1) + "-" + curTime.getDate() + "(周" + curTime.getDay() + ") " + curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds());


launchApp('易班');
var sendButton1 = bounds(846,783,1050,993).depth(16).findOne();	//选择农大易辅导
sendButton1.click()
console.log('1.进入农大易辅导');
var sendButton2 = text('每日填报').findOne();
sendButton2.click();
console.log('2.进入每日填报');
var sendButton3 = text('填报').findOne();
sendButton3.click();
console.log('3.进入填报表单');
var sendButton_NO = text('否');
sendButton_NO.click();
setText(0,'36.6');	//选择第一个文本框输入36.6	
var sendButton_NO = text('已完成接种');
sendButton_NO.click();
var sendButton_updata = text('提交');
sendButton_updata.click();
var sendButton_true = text('确认');
sendButton_true.click();
console.log('4.确认提交');
console.log('5.填报完毕');

for(a = 3;a > 0;a--){
    back(); 
}

home();

console.log('6.返回主页面');
exit();