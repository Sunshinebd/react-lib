import {_subAxios} from "../axios/subAxiox";
import {commExceptionORAccess} from "../accessORfail/commException";

/**
 * 使用方法
 * async
 * await
 * 返回：status and data
 * */
const _test = {
       async test() {
              let url = 'http://192.168.0.114:8000/college/1/1'
              let comm ;
              //返回请求响应体
              comm = await _subAxios.subGet(url,'','');
              console.log(comm)
              if(comm && comm!==undefined){
                     //json对象, 返回响应体中包含 status 和 data
                     const object = commExceptionORAccess.getComm(comm)
                     console.log(object.status)
                     console.log(object.data)
              }else {
                     //服务器异常
                     console.log('服务器异常')
              }
       }
}

export {_test}