<template>
    <div>
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
                    <li><router-link to="./ShopcarComponent">我的订单</router-link></li>
                    <li style="background-color: #ccc;"><router-link to="./WeComponent">关于我们</router-link></li>
                </ul>
            </div>
        </div>
        <div class="miaoshu clearfix">
            

            <h1>柳柳大酒店介绍</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span>柳柳大酒店</span>创立于2005年，总部位于广东省广州市，是一家专注于为政府及企事业单位提供软件应用开发、系统集成服务、政企信息安全和IT咨询规划的创新型高科技公司。致力于通过创新的信息化技术来推动客户信息化的发展与变革，为员工创造新的工作和生活方式，为社会创造价值。目前在湖南省长沙市设有分公司。太普是一家双软企业，也是通过CMMI5软件公司。</p>
        </div>
        <div class="white"></div>
        <div class="time">
            <h1>营业时间:</h1>
            <p>周一~周五:<span>9:00~24:00</span></p>
            <p>周六，周日:<span>9:30~23:00</span></p>
        </div>
        <div class="white"></div>
        <div class="huodong">
            <h1>我们的活动</h1>
            <p>新用户下单即免<span>50</span>元</p>
            <p>每周一前十位均可获面单<span>30</span>元</p>
        </div>
    </div>
</template>


<script>
    export default {
    
    }
</script>

<style>
    .miaoshu{
        width:100%;
        padding-left:20px;
        padding-right:20px;
        padding-bottom:10px;
        padding-top:20px;
    }
    .miaoshu h1{
        font-size:20px;
        color:#4f4f4f;
    }
    .miaoshu p{
        margin-top:20px;
        color:#7b7b7b;
        letter-spacing:2px;
    }
    .miaoshu p span{
        color:#f60;
        font-size:16px;
        margin-right:4px;
        margin-left:4px;
    }
    .time{
        padding-left:20px;
        padding-bottom:10px;
        padding-right:20px;
        margin-top:15px;
    }
    .time h1{
        font-size:20px;
        font-weight:bold;
    }
    .time p{
        margin-top:8px;
    }
    .time p span{
        margin-left:20px;
        color:#f60;
    }
    .huodong{
        padding-left:20px;
        padding-right:20px;
        margin-top:10px;
        padding-bottom:10px;
    }
    .huodong h1{
        font-size:20px;
        margin-bottom:10px;
        font-weight:bold;
    }
    .huodong p{
        font-size:14px;
        margin-top:5px;
    }
    .huodong p span{
        font-size:16px;
        color:#f60;
        margin-left:5px;
        margin-right:5px;
    }
</style>