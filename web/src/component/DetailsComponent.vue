<template>
    <div id="app">
        
        <img :src="datas.img_url" style="display: inline-block;height: 300px;">
        <div class="back"><router-link to="./"><span class="glyphicon glyphicon-menu-left"></span></router-link></div>
        <div class="details clearfix">
            <h3>{{datas.food_name}}</h3>
            <p>月销量{{datas.sales}}  好评率100%</p>
            <span>￥{{datas.price}}</span>
        </div>
        <div class="white"></div>
        <div class="jieshao clearfix">
            <h4>商品介绍</h4>
            <p>{{datas.description}}</p>
        </div>
        <div class="white"></div>
        <div class="pingjia clearfix">
            <h4>商品评价</h4>
            <button class="btn btn-info">全部评价200</button>
            <button class="btn btn-success">推荐199</button>
            <button class="btn btn-warning">吐槽1</button>
        </div>
    </div>
</template>

<script>
    import http from '../utils/httpClient.js'
    export default {
        data(){
            return {
                datas: {}
            }
        },
        mounted: function (){
            var self = this;
            http.post({url: 'foodsSelect', params: {id:self.$route.query.id}}).then(res => {
                // console.log(res.data.data[0]);
                self.datas=res.data.data[0];
            });
        }
    }
</script>


<style>
    #app{
        position:relative;
    }
    img {
        display: inline-block;
        /*height: 300px;*/
    }
    .back{
        width:40px;
        height:40px;
        position:absolute;
        top:15px;
        left:10px;
        background:#ddd;
        text-align:center;
        opacity:0.3;
    }
    .back span{
        line-height:40px;
        color:#fff;
        font-size:30px;

    }
    .details{
        width:100%;
        height:110px;
        padding-top:20px;
        padding-left:15px;
        padding-bottom:15px;
        border-bottom:1px solid #ccc;
    }
    .details h3{
        font-size:20px;
        font-weight:bold;
        margin-bottom:10px;
    }
    .details p{
        font-size:14px;
        margin-bottom:10px;
    }
    .details span{
        font-size:18px;
        color:#f60;
        font-weight:bold;
    }
    
    .jieshao{
        padding-top:15px;
        padding-left:10px;
        border-top:1px solid #ccc;
        width:100%;
        border-bottom:1px solid #ccc;
        padding-bottom:15px;
    }
    .jieshao h4{
        font-size:16px;
    }
    .jieshao p{
        font-size:14px;
        color:#80868C;
        margin-top:8px;
        padding-left:5px;
    }
    .pingjia{
        padding-top:15px;
        border-top:1px solid #ccc;
        padding-left:15px;
    }
    .pingjia h4{
        font-size:18px;
        margin-bottom:10px;
    }
</style>