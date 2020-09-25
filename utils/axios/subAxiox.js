import axios from 'axios';

let url = '';
const _subAxios = {

    /**
     * get请求 参数放在parameter体中
     * uri 请求路径
     * data 请求参数json格式  params
     * token
     *
     * 返回值为响应的的状态以及信息
     * */
    async subGet(uri,data,token){
        return await axios({
            url:url+uri,
            method:'get',
            headers:{'Content-Type':'application/json', 'Accept': 'application/json',Authorization:token},
            params:data
        }).then((res)=>{
            // 成功请求的响应信息
            if(res.status && res.data){
                return {status:res.status,data:res.data}
            }else {
                return null;
            }
            //出现异常的响应信息
        }).catch((err)=>{
            if(err.response && err.response.status){
                return {status:err.response.status,data:err.response.data}
            }else {
                return null;
            }
        })
    },

    /**
     * 使用form表单提交请求时可用
     * 返回值为响应的的状态以及信息
     * 参数：
     * formDate 一个formData对象
     */
    subFormData(uri,formData,token) {
        let cong= {headers: {'content-type': 'multipart/form-data',Authorization:token}}
        return axios.post(url+uri,formData,cong)
            .then((res)=>{
                // 成功请求的响应信息
                return res;
                //出现异常的响应信息
            }).catch((err)=>{
            return err;
        })
    },

    /**
     * post请求 参数放在body体中
    * uri 请求路径
    * data 请求参数 json格式
    * token 请求的规格约定
    *
    * 返回值为响应的的状态以及信息
    */
    subPost(uri,data,token) {
        return axios({
            url:uri,
            method:'post',
            headers:{'Content-Type':'application/json', 'Accept': 'application/json',Authorization:token},
            data:JSON.stringify(data)
        }).then((res)=>{
            // 成功请求的响应信息
            return res;
            //出现异常的响应信息
        }).catch((err)=>{
            return err;
        })
    },

    /**
     * put请求
    * uri 请求路径
    * data 请求参数
    * cong 请求的规格约定
    * cong= {headers: {'content-type': 'application/json',Authorization:token}}
    * 返回值为响应的的状态以及信息
    */
    subPut(uri,data,cong) {
        return axios.put(uri,data,cong)
            .then((res)=>{
                // 成功请求的响应信息
                return res;
                //出现异常的响应信息
            }).catch((err)=>{
            return err;
        })
    }


}
export {_subAxios}