<template>
    <div id="app">
        <div class="header clearfix">
            <div class="background">
                <img src="../assets/blue.jpg" width="100%" height="100%"/>
            </div>
            <div class="header-top clearfix">
                <h1><img src="../assets/bg.jpg" width="100%" height="100%"/></h1>
                <h2>柳柳大酒店（天河区）</h2>
                <p>进店即优惠（满250减38）</p>
                <p>在线支付有更多惊喜等你哦</p>
            </div>
            <div class="header-input">
                <input type="text" placeholder="搜索店内商品" class="form-control"/>
            </div>
            <div class="header-bottom">
                <ul>
                    <li><router-link to="./">全部商品</router-link></li>
                    <li style="background-color: #ccc;"><router-link to="./ShopcarComponent">我的订单</router-link></li>
                    <li><router-link to="./WeComponent">关于我们</router-link></li>
                </ul>
            </div>
        </div>
        <div class="order clearfix">
            <ul class="clearfix">
                <li v-for='(value, key) in datas' class="now_li" :data-id='value.id'>
                    <div class="order_left">
                        <img :src="value.img_url">
                    </div>
                    <div class="order_content">
                        <h5>{{value.food_name}}</h5>
                        <h4>￥{{value.price}}</h4>
                    </div>
                    <button @click="del">删除</button>
                </li>
            </ul>
        </div>
        <div class="sure">
            <h2>总计:<span>￥{{total}}</span></h2>
            <h3 @click='pay'>确认结算</h3>
        </div>
    </div>
</template>


<script>
    import http from '../utils/httpClient.js'
    export default {
        data(){
            return {
                datas:'',
                total:0
            }
        },
        methods: {
            del: function($event){
                var self =$event.target.parentNode;
                var id = self.dataset.id;
                self.parentNode.removeChild(self);
                http.post({
                    url: 'orderDel',
                    params: {
                        id: id,
                        t_id: 1,
                    }
                }).then(res => {
                    console.log(res)
                })
            },
            pay: function(){
                var self = this;
                http.post({
                    url: 'pay',
                    params: {
                        t_id: 1,
                    }
                }).then(res => {
                    alert('结算成功！！')
                    self.$router.push('/');
                }) 
            }            
        },
        mounted: function(){
            var self = this;
            http.post({
                url: 'orderFind',
                params: {
                    t_id: 1,
                    status: true
                }
            }).then(res => {
                if(res.data.status == '1'){
                    self.datas = res.data.data;
                    for(var i=0;i<res.data.data.length;i++){
                        self.total += Number(res.data.data[i].price)
                    }
                }  
            });
            
        }
    }


</script>

<style>
    .order{
        display:flex;
        overflow-y:auto;
        flex:1;
        width:100%;
    }
    .order ul{
        width:100%;
    }
    .order li{
        width:100%;
        height:70px;
        border-bottom:1px solid #ccc;
        padding-top:10px;
        position:relative;
    }
    .order li .order_left{
        width:80px;
        height:60px;
        float:left;
        margin-left:20px;
    }
    .order li .order_left img{
        width:100%;
    }
    .order li .order_content{
        width:160px;
        height:60px;
        float:left;
        margin-left:40px;
    }
    .order li .order_content h5{
        float:left;
        font-size:18px;
        font-weight:bold;
        height:60px;
        line-height:60px;
    }
    .order li .order_content h4{
        float:left;
        height:60px;
        line-height:60px;
        color:#f60;
        margin-left:25px;
    }
    .order li button{
        float:right;
        position:absolute;
        right:20px;
        bottom:3px;
        padding:3px 7px;
        text-align:center;
        background:#5BC0DE;
        color:#fff;
        border-radius:5px;
    }
    .sure{
        height:50px;
        background:#ccc;
    }
    .sure h2{
        float:left;
        height:50px;
        color:#fff;
        background:#5BC0DE;
        line-height:50px;
        font-size:20px;
        width:75%;
        padding-left:10%;
    }
    .sure h2 span{
        margin-left:30px;
        color:#f60;
        font-size:18px;
        font-weight:bold;
    }
    .sure h3{
        float:right;
        width:25%;
        font-size:20px;
        color:#fff;
        background:#58bc58;
        height:50px;
        line-height:50px;
        text-align:center;
    }
</style>