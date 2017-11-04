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
                  <li style="background-color: #ccc;"><router-link to="./">全部商品</router-link></li>
                  <li><router-link to="./ShopcarComponent">我的订单</router-link></li>
                  <li><router-link to="./WeComponent">关于我们</router-link></li>
              </ul>
          </div>
        </div>
        <div class="main clearfix">
          <div class="main-left">
              <ul>
                  <li class="hot">热销榜</li>
                  <li class="combo">套餐类</li>
                  <li class="drink">饮品/酒水</li>
                  <li class="jardiniere">凉菜</li>
                  <li class="seafood">海鲜</li>
                  <li class="soup">汤类</li>
              </ul>
          </div>
          <div class="main-right">
                <ul>
                    <li class="food_hot hot">
                        <h4>热销菜品</h4>  
                        <ul>
                            <li v-for='(value, key) in hot'>
                                <div class="icon">
                                    <img :src="value.img_url" :data-url='value.img_url'>
                                    <!-- <img src="http://localhost:8082/public/imgs/doujiao.jpg"> -->
                                    <p><router-link :to="{path:'DetailsComponent', query:{id:value.id}}" >查看详情</router-link></p>
                                </div>
                                <div class="content">
                                    <h5 :data-name='value.food_name'>{{value.food_name}}</h5>
                                    <p>类型:{{value.attr}}</p>
                                    <p>销量:{{value.sales}}</p>
                                    <span :data-price='value.price'>￥{{value.price}}</span>
                                    <span class="add" @click='add' :data-id='value.id'>
                                        <i class="glyphicon glyphicon-plus"></i>
                                    </span>
                                </div>
                                <div class="tips">
                                    已添加
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- <p>{{datas}}</p> -->
                    <li class="food_hot combo">
                        <h4>套餐类</h4>
                       <ul>
                            <li v-for='(value, key) in combo'>
                                <div class="icon">
                                    <img :src="value.img_url" :data-url='value.img_url'>
                                    <!-- <img src="http://localhost:8082/public/imgs/doujiao.jpg"> -->
                                    <p><router-link :to="{path:'DetailsComponent', query:{id:value.id}}" >查看详情</router-link></p>
                                </div>
                                <div class="content">
                                    <h5 :data-name='value.food_name'>{{value.food_name}}</h5>
                                    <p>类型:{{value.attr}}</p>
                                    <p>销量:{{value.sales}}</p>
                                    <span :data-price='value.price'>￥{{value.price}}</span>
                                    <span class="add" @click='add' :data-id='value.id'>
                                        <i class="glyphicon glyphicon-plus"></i>
                                    </span>
                                </div>
                                <div class="tips">
                                    已添加
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="food_hot drink">
                        <h4>饮品/酒水</h4>
                        <ul>
                            <li v-for='(value, key) in drink'>
                                 <div class="icon">
                                    <img :src="value.img_url" :data-url='value.img_url'>
                                    <!-- <img src="http://localhost:8082/public/imgs/doujiao.jpg"> -->
                                    <p><router-link :to="{path:'DetailsComponent', query:{id:value.id}}" >查看详情</router-link></p>
                                </div>
                                <div class="content">
                                    <h5 :data-name='value.food_name'>{{value.food_name}}</h5>
                                    <p>类型:{{value.attr}}</p>
                                    <p>销量:{{value.sales}}</p>
                                    <span :data-price='value.price'>￥{{value.price}}</span>
                                    <span class="add" @click='add' :data-id='value.id'>
                                        <i class="glyphicon glyphicon-plus"></i>
                                    </span>
                                </div>
                                <div class="tips">
                                    已添加
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="food_hot jardiniere">
                        <h4>凉菜</h4>
                        <ul>
                            <li v-for='(value, key) in jardiniere'>
                                 <div class="icon">
                                    <img :src="value.img_url" :data-url='value.img_url'>
                                    <!-- <img src="http://localhost:8082/public/imgs/doujiao.jpg"> -->
                                    <p><router-link :to="{path:'DetailsComponent', query:{id:value.id}}" >查看详情</router-link></p>
                                </div>
                                <div class="content">
                                    <h5 :data-name='value.food_name'>{{value.food_name}}</h5>
                                    <p>类型:{{value.attr}}</p>
                                    <p>销量:{{value.sales}}</p>
                                    <span :data-price='value.price'>￥{{value.price}}</span>
                                    <span class="add" @click='add' :data-id='value.id'>
                                        <i class="glyphicon glyphicon-plus"></i>
                                    </span>
                                </div>
                                <div class="tips">
                                    已添加
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="food_hot seafood">
                        <h4>海鲜</h4>
                        <ul>
                            <li v-for='(value, key) in seafood'>
                                 <div class="icon">
                                    <img :src="value.img_url" :data-url='value.img_url'>
                                    <!-- <img src="http://localhost:8082/public/imgs/doujiao.jpg"> -->
                                    <p><router-link :to="{path:'DetailsComponent', query:{id:value.id}}" >查看详情</router-link></p>
                                </div>
                                <div class="content">
                                    <h5 :data-name='value.food_name'>{{value.food_name}}</h5>
                                    <p>类型:{{value.attr}}</p>
                                    <p>销量:{{value.sales}}</p>
                                    <span :data-price='value.price'>￥{{value.price}}</span>
                                    <span class="add" @click='add' :data-id='value.id'>
                                        <i class="glyphicon glyphicon-plus"></i>
                                    </span>
                                </div>
                                <div class="tips">
                                    已添加
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="food_hot soup">
                        <h4>汤类</h4>
                        <ul>
                             <li v-for='(value, key) in soup'>
                                 <div class="icon">
                                    <img :src="value.img_url" :data-url='value.img_url'>
                                    <!-- <img src="http://localhost:8082/public/imgs/doujiao.jpg"> -->
                                    <p><router-link :to="{path:'DetailsComponent', query:{id:value.id}}" >查看详情</router-link></p>
                                </div>
                                <div class="content">
                                    <h5 :data-name='value.food_name'>{{value.food_name}}</h5>
                                    <p>类型:{{value.attr}}</p>
                                    <p>销量:{{value.sales}}</p>
                                    <span :data-price='value.price'>￥{{value.price}}</span>
                                    <span class="add" @click='add' :data-id='value.id'>
                                        <i class="glyphicon glyphicon-plus"></i>
                                    </span>
                                </div>
                                <div class="tips">
                                    已添加
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>   
          </div>
        </div>
        <div class="footer">
            <ul>
                <li>
                    <div class="shopcar"><i class="glyphicon glyphicon-shopping-cart"></i></div>
                    <h3>￥{{total}}</h3>
                    <h4>可优惠<span>0</span>元</h4>
                </li>
                <li><router-link to="./ShopcarComponent">去结算</router-link></li>
                
            </ul>
        </div>
    </div>
</template>

<script>
    import http from '../utils/httpClient.js'

    export default {
        data(){
            return {
                hot: [],
                combo: [],
                drink: [],
                jardiniere: [],
                seafood: [],
                soup: [],
                total: 0
            }
        },
        methods: {
            add: function($event){
                var self = this;
                if($event.target.tagName.toLowerCase() == 'i'){
                    var tg = $event.target;
                    var id = Number(tg.parentNode.dataset.id);
                    var price = Number(tg.parentNode.parentNode.querySelectorAll('span')[0].dataset.price);
                    var name = tg.parentNode.parentNode.querySelector('h5').dataset.name;
                    var img = tg.parentNode.parentNode.parentNode.querySelector('.icon').querySelector('img').dataset.url;
                    $(tg.parentNode.parentNode.parentNode.querySelector('.tips')).fadeIn().fadeOut();

                    http.post({
                        url: "orderInsert",
                        params: {
                            t_id:1,
                            id: id,
                            img_url: img,
                            food_name: name,
                            price: price
                        }
                    }).then(res => {
                         http.post({
                             url: 'orderFind',
                             params: {
                                 t_id: 1,
                                 status: true
                             }
                         }).then(res => {
                             if(res.data.status == '1'){
                                 for(var i=0;i<res.data.data.length;i++){
                                     self.total += Number(res.data.data[i].price)
                                 }
                             }  
                         });

                    })
                }
                // $('.add').on('click',function(){
                //     // console.log($(this).parent().parent().find('.tips'))
                //     var id = Number($(this).data('id'));
                //     var price = Number($(this).parent().children('span')[0].dataset.price);
                //     var name = $(this).parent().find('h5').data('name');
                //     var img = $(this).parent().parent().find('.icon').find('img').data('url');
                //     $(this).parent().parent().find('.tips').fadeIn();
                //     // $('.tips').fadeIn();
                //     setTimeout(function(){
                //         $(this).parent().parent().find('.tips').fadeOut();
                //     }.bind(this),1000);
                //     http.post({
                //         url: "orderInsert",
                //         params: {
                //             t_id:1,
                //             id: id,
                //             img_url: img,
                //             food_name: name,
                //             price: price
                //         }
                //     }).then(res => {
                //          http.post({
                //              url: 'orderFind',
                //              params: {
                //                  t_id: 1,
                //                  status: true
                //              }
                //          }).then(res => {
                //              if(res.data.status == '1'){
                //                  for(var i=0;i<res.data.data.length;i++){
                //                      self.total += Number(res.data.data[i].price)
                //                  }
                //              }  
                //          });

                //     })
                // })
            }
        },
        mounted: function () {
            var self = this;
            http.post({
                url: "foodsFind"
                // params: {
                //     user_name: this.ruleForm2.username,
                //     password: this.ruleForm2.psw
                // }
            }).then(res => {
                  for(var i=0;i<res.data.data.length;i++){
                    switch(res.data.data[i].type){
                        case 'hot':
                            self.hot.push(res.data.data[i]);
                            break;
                        case 'combo':
                            self.combo.push(res.data.data[i]);
                            break;
                        case 'drink':
                            self.drink.push(res.data.data[i]);
                            break;
                        case 'jardiniere':
                            self.jardiniere.push(res.data.data[i]);
                            break;
                        case 'seafood':
                            self.seafood.push(res.data.data[i]);
                            break;
                        case 'soup':
                            self.soup.push(res.data.data[i]);
                            break;
                        default:
                            self.hot.push(res.data.data[i]);
                    }  
                  }
                  // self.datas = res.data.data;
            });
            http.post({
                url: 'orderFind',
                params: {
                    t_id: 1,
                    status: true
                }
            }).then(res => {
                if(res.data.status == '1'){
                    for(var i=0;i<res.data.data.length;i++){
                        self.total += Number(res.data.data[i].price)
                    }
                }  
            });
            $('.main-left ul').on('click','li',function(){
                var n = "."+this.className;
                $(".main-right ul").find(n)[0].scrollIntoView(true);
            });
        }
    }
    
</script>

<style>
/*    ::-webkit-scrollbar{  
        width: 5px;  
        height: 16px;  
        background-color: #F5F5F5;  
    } */
   /* :vertical-scrollbar{  
        width: 5px;  
        height: 16px;  
        background-color: #F5F5F5;  
    } */
    .main-right .food_hot li{
        border-bottom: 1px solid #ddd;
        position:relative;
    }
    .main-right .food_hot li .tips {
        width:70px;
        height:25px;
        border:1px solid #ccc;
        position:absolute;
        top:12px;
        right:10px;
        color:#fff;
        background:#5BC0DE;
        text-align:center;
        line-height:25px;
        display:none;
        border-radius:5px;
    }
    .main-right .food_hot li .icon{
        float:left;
        width:80px;
        height:100px;
        padding-left:15px;
        padding-top:10px;
    }
    .main-right .food_hot li .icon img{
        width:100%;
    }
    .main-right .food_hot li .icon p{
        font-size:12px;
        margin-top:15px;
        border:1px solid #f60;
        border-radius:5px;
    }
    .main-right .food_hot li .content{
        float:left;
        width:200px;
        height:80px;
        padding-top:10px;
        padding-left:15px;
    }
    .main-right .food_hot li .content h5{
        font-size:14px;
        padding:0;
        margin-bottom:5px;
        font-weight:bold;
    }
    .main-right .food_hot li .content p{
        color:#979DA3;
        font-size:12px;
        margin-bottom:3px;
    }
    .main-right .food_hot li .content span{
        font-size:14px;
        color:#f60;
    }
    .main-right .food_hot li .content .add{
        float:right;
        margin-right:20px;
    }
    .main-right .food_hot li .content .add i{
        margin-left:5px;
        margin-right:5px;
        border-radius:50%;
        background:#56c0f0;
        color:#fff;
        font-size:12px;
        padding:3px;
        text-align:center;
    }


    .footer{
        background:#56C0F0;
        height:50px;
    }
    .footer li:nth-child(1){
        float:left;
        width:75%;
        height:50px;
        line-height:50px;
        position:relative;
    }
    .footer li:nth-child(1) div{
        width:60px;
        height:60px;
        border-radius:50%;
        text-align:center;
        background:#58bc58;
        margin-left:15px;
        position:absolute;
        left:0px;
        top:-17px;
        font-size:26px;
        border:5px solid #56c0f0;
    }
    .footer li:nth-child(1) div i{
        color:#fff;
    }
    .footer li:nth-child(1) h3{
        margin-left:100px;
        float:left;
        height:50px;
        line-height:50px;
        font-weight:bold;
        font-size:20px;
        color:#fff;
    }
    .footer li:nth-child(1) h4{
        float:left;
        height:50px;
        line-height:50px;
        font-size:14px;
        color:#fff;
        margin-left:20px;
    }
    .footer li:nth-child(1) h4 span{
        color:#f60;
        margin-left:8px;
        margin-right:8px;
        font-weight:bold;
    }
    .footer li:nth-child(2){
        float:left;
        width:25%;
        height:50px;
        text-align:center;
        line-height:50px;
        background:#58bc58;
        font-weight:bold;
        color:#fff;
    }
    .footer li:nth-child(2) a{
        
        color:#fff;
    }
</style>