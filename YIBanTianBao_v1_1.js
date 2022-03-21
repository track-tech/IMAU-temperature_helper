/*
--内蒙古农业大学易班体温填报助手V1.1--
半成品脚本大家凑合用用，欢迎有能力的大佬写个UI打包成独立程序

--------------------------
Designed by Zhang Baichuan（张百川）

*/

/** 
 * @version
 * @v1_1 - 2022年3月20日
 *  1. 新增可以按照个人习惯更改年月日分隔符的常量字符串;
 *  2. 新增自动复查确认功能;
 *  3. 调整 "星期日" 显示 "星期零" 这种反人类的操作
 *  4. 调整步骤计数为自动
 */



/* 用户设置区域 **************** */
// 设置您喜欢的年月日连字符
const Date_Hyphen = "-";




/* 主程序区域 **************** */
// 以下为主程序
auto.waitFor();
// 检测无障碍是否开启
// 解锁设备 *************************************************************
if (!device.isScreenOn()) {
    device.wakeUp();                        // 唤醒设备
    sleep(500);
    swipe(500, 2000, 500, 1000, 210);       // 向上滑动解锁
    sleep(500)
    var password = "000000"     // 这里输入你手机的密码
    for (var i = 0; i < password.length; i++) {
        var p = text(password[i].toString()).findOne().bounds();       //
        click(p.centerX(), p.centerY());                               //
        sleep(100);
    }
}

//device.keepScreenDim(1);

// 打开控制台显示 *******************************************************
console.show(true);             // 显示控制台
console.clear();
//toast("测试");

// 显示系统时间 *********************************************************
curTime = new Date();           // 获取系统时间

var Weekday = new String("日"); // 构造字符串型变量

console.log("当前时间: " 
    + curTime.getFullYear() + Date_Hyphen
    + (curTime.getMonth() + 1) + Date_Hyphen 
    + curTime.getDate() 
    + " (周" + Show_Man_Weekday(curTime.getDay()) + ") " 
    + curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds());

// 开始易班填报 *********************************************************
var Step_Count = 1;

var Launch_Count = 1;
while(!launchApp('易班'))
{
    console.log("第%d次重试中...", Launch_Count++);
    sleep(1600);            // 如果打开失败, 则1.6秒后重试
    if(Launch_Count > 3)
    {
        console.log("\n\n\n");
        console.log("我们很抱歉未能在您的设备中找到\"易班\"应用...");
        sleep(3000);        // 让消息多显示一会
        console.log("\n");
        exit();
        while(1);
    }
}
console.log(Step_Count++ + ". " + "打开易班");


while(!click("跳过"));
while(!click("农大易辅导"));

console.log(Step_Count++ + ". " + '进入农大易辅导');
var sendButton2 = text('每日填报').findOne();
sendButton2.click();
console.log(Step_Count++ + ". " + '进入每日填报');  
var sendButton3 = text('填报').findOne();
sendButton3.click();
console.log(Step_Count++ + ". " + '进入填报表单');
var sendButton_NO = text('否');
sendButton_NO.click();
setText(0, '37.0');	// 选择第一个文本框输入37.0	
var sendButton_NO = text('已完成接种');
sendButton_NO.click();
var sendButton_updata = text('提交');
sendButton_updata.click();
var sendButton_true = text('确认');
sendButton_true.click();
console.log(Step_Count++ + ". " + '确认提交');
console.log(Step_Count++ + ". " + '填报完毕');


for (a = 10; a > 0; a--) {         // 具体返回多少次我也不知道, 反正也不要钱, 来一打
    back();
}

//home();           // 使用直接返回会导致程序没退出, 再次打开程序有几率, 打开了也没反应; 盲猜是打开之后页面不对, 所以咱们上面采用多次点击返回键的功能;
console.log(Step_Count++ + ". " + '返回主页面');

if(Check_TianBao())
{

    console.log(Step_Count++ + ". " + "填报完成");
}

exit();

// 主程序结束 ***********************************************************



/* 自定义函数区域 **************** */


function Check_TianBao()
{
    while(!launchApp('易班'));
    while(!click("跳过"));
    while(!click("农大易辅导"));
    text('每日填报').findOne().click();
    text('填报').findOne().click();
    
    var IsRegister = text("今日已经填报").findOne(30000);   // 通过检索提示文本框检查是否已经填报
    return (IsRegister);
}


function Show_Man_Weekday(__WeekDay){
    switch(__WeekDay){
        case 0: return "日";
        case 1: return "一";
        case 2: return "二";
        case 3: return "三";
        case 4: return "四";
        case 5: return "五";
        case 6: return "六";
    }
}

