function yt_url_to_id(url){
    /* 
    url:
    https://www.youtube.com/watch?v=bor0qLifjz4
    https://youtu.be/bor0qLifjz4
    https://m.youtube.com/watch?v=7YD8lwQRAsw
    */
    if(url){
        try{
            var url_obj=new URL(url);
        }
        catch(err){
            console.log(err);
            return {'status':0,'data':'not a valid url.'}
        }
        if(url_obj.host.includes('youtube.com')){
            var temp=url_obj.search.split('?')[1];
            var splited_data=[];
            temp.split('&').forEach((d)=>{
                var sub_temp=d.split('=');
                if(sub_temp[0]){
                    if(sub_temp[1]){
                        splited_data[sub_temp[0]]=sub_temp[1];
                    }
                    else{
                        splited_data[sub_temp[0]]=false;
                    }
                }
            });

            if(splited_data['v']){
                return {'status':1,'data':splited_data['v']}
            }
            else{
                return {'status':0,'data':'Video Key Missing'}
            }
        }
        else if(url_obj.host.includes('youtu.be')){
            id=url_obj.pathname.split('/')[1];
            if(id){
                return {'status':1,'data':id}
            }
            else{
                return {'status':0,'data':'Video Key Missing'}
            }
        }
        else{
            return {'status':0,'data':'Not A Valid Youtube Url'}
        }
    }
    else{
        return {'status':0,'data':'Url not defined'}
    }
}
// yt_url_to_id


yt_url_to_id('https://www.youtube.com/watch?v=bor0qLifjz4');
