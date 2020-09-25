
/*
* 倒计时函数
* 入参 endTime
* 返回值:包含day hours minute second
* */

const _timeOut = {

    timeOut(emdTime) {
        let object = {};
        const remaining = Date.parse(emdTime)-new Date();
        if(remaining > 1000){
            const day =Math.floor((remaining / 1000 / 3600) / 24);
            const hours =Math.floor((remaining / 1000 / 3600) % 24);
            const minute =Math.floor((remaining / 1000 / 60) % 60);
            const second =Math.floor(remaining / 1000 % 60);
            object = {day: day, hour: hours, minute: minute, second: second}
        }
        return object;
    }
}

// 导出组件
export { _timeOut }

/*
使用方法:

 setInterval(()=>{
    let object=_timeOut.timeOut('2020-12-12')
 },1000)

**/

