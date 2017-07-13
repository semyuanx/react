import ajax from 'superagent';

const host = "http://101.200.129.112:9527/";

const GET_FILE = host +"file/get/";

export function getFile(path,succFun,errFun){
    ajax
        .get(GET_FILE)
        .query({
            path:path
        })
        .end(function(err,res){
            if(err){return errFun(err)}
            succFun(res.body);
        })
}