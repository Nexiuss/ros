<template>
  <div class="addFood">
    <el-form ref="form" :model="form" label-width="80px" size="small">
      <el-form-item label="菜品名称">
        <el-input v-model="form.food_name"></el-input>
      </el-form-item>
      <el-form-item label="菜品价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="菜品销量">
        <el-input v-model="form.sales"></el-input>
      </el-form-item>
	  <el-form-item label="菜品标签">
	    <el-select v-model="form.type" placeholder="请选择">
	      <el-option label="hot" value="hot"></el-option>
          <el-option label="combo" value="combo"></el-option>
          <el-option label="drink" value="drink"></el-option>
          <el-option label="jardiniere" value="jardiniere"></el-option>
          <el-option label="seafood" value="seafood"></el-option>
          <el-option label="soup" value="soup"></el-option>
	    </el-select>
	  </el-form-item>
 	  <el-form-item label="菜品分类">
	    <el-select v-model="form.attr" placeholder="请选择">
	      <el-option label="蔬菜" value="蔬菜"></el-option>
          <el-option label="海鲜" value="海鲜"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="上传图片">
	  	<el-upload
        :action="baseUrl"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success='success_img'
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="baseImgPath + dialogImageUrl" alt="">
      </el-dialog>
	  </el-form-item>
	  <el-form-item label="菜品介绍">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="onSubmit">立即添加</el-button>
	    <el-button>取消</el-button>
	  </el-form-item>
	</el-form>
  </div>
</template>
<style>
  .addFood{
     width:50%;
     margin:20px 100px;
     height: 100%;
     text-align:left;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 158px;
    height: 158px;
    line-height: 158px;
    text-align: center;
  }
  .avatar {
    width: 158px;
    height: 158px;
    display: block;
  }
</style>
<script>
  import http from '../utils/httpClient.js'
  export default {
    data () {
      return {
        form: {
          food_name:'',
          price:'',
          type:'',
          attr:'',
          sales:'',
          description:'',
          dialogImageUrl: ''
        },
        baseUrl: 'http://localhost:8082/foodsInsert',
        baseImgPath: "http://localhost:8082/public/imgs/",
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit () {
        // var id = this.form.id;
        var food_name= this.form.food_name;
        var price= this.form.price;
        var type= this.form.type;
        var attr= this.form.attr;
        var sales= this.form.sales;
        var description= this.form.description;
        var img_url = this.form.dialogImageUrl; 
        http.post({
          url: 'foodsInsert',
          params: {
            food_name:food_name,
            price:price,
            type:type,
            description:description,
            sales:sales,
            attr:attr,
            img_url: img_url
          }
        }).then(res => {console.log(res)
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      success_img(response, file, fileList) {
        // console.log(file.name)
        this.form.dialogImageUrl = this.baseImgPath + file.name;
        console.log(this.form.dialogImageUrl)
      }
    }
  }
</script>