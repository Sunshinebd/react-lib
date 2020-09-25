/**
* 参数：comm
* 类型：resource or error
* 返回：status or data
* */

//全局异常 或成功请求处理
const commExceptionORAccess =  {
    //有状态并且有数据 resource状态和响应 data
    getComm(comm){
        if(comm){
            if(comm.status || (comm.status && comm.data) ){
                return {status:comm.status,data:comm.data}
            }else if(comm.response && comm.response.status){
                //有异常响应并且有状态;error状态和响应data
                return {status:comm.response.status,data:comm.response.data}
            }else {
                // 请求没有响应的时候
                return null
            }
        }else {
            return null
        }
    }


}
export {commExceptionORAccess}