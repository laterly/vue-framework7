<template>
  <f7-page>
   <div class="card demo-card-header-pic" v-for="(item,index) in list" :key="index">
        <div :style="'background-image:url('+item.imgUrl+')'" valign="bottom" class="card-header color-white no-border">{{item.pictureAuthor}}</div>
         <div class="card-content">
            <div class="card-content-inner">
            <p class="color-gray">{{item.title}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.date}}</p>
            <p class="">{{item.content}}</p>
            </div>
         </div>
        <div class="card-footer">
        <a href="#" class="link"><i class="icon icon-love"></i></a>
        <a href="/about/" class="link">阅读&nbsp;<i class="icon icon-forward"></i></a>
        </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      list:[],
    }
  },
  created() {
     console.log('this',this);
     this.$get('api/',{act:'all'})
      .then((res) => {
        let data=res.data.data;
        console.log(data);
        for(let item of data){
            this.list.push({
                id:item.id,
                date:item.date,
                imgUrl:item.img_url,
                title:item.title,
                textAuthors:item.text_authors,
                pictureAuthor:item.picture_author,
                title:item.title,
                content:item.content
            });
        }
      })
  },
}
</script>
<style>
.content-block-title+.card, .content-block-title+.content-block, .content-block-title+.list-block, .content-block-title+.timeline {
    margin-top: 10px;
}
.card {
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
    margin: 10px;
    position: relative;
    border-radius: 2px;
    font-size: 14px;
}
.demo-card-header-pic .card-header {
    height: 50vw;
    background-size: cover;
    background-position: center;
    color:#999;
}
.card-header {
    border-radius: 2px 2px 0 0;
    font-size: 17px;
}
.color-white {
    color: #fff;
}
.card-footer, .card-header {
    min-height: 44px;
    position: relative;
    padding: 10px 15px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.card-content {
    position: relative;
}
.card-footer {
    border-radius: 0 0 2px 2px;
    color: #6d6d72;
}
.card-footer, .card-header {
    min-height: 44px;
    position: relative;
    padding: 10px 15px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.card-content-inner {
    padding: 15px;
    position: relative;
}
.color-gray {
    color: #8e8e93;
}
.card-content-inner>p:first-child {
    margin-top: 0;
}
p {
    margin: 1em 0;
}
.card-content-inner>p:last-child {
    margin-bottom: 0;
}
.card-footer a.link, .card-header a.link {
    line-height: 44px;
    height: 44px;
    text-decoration: none;
    position: relative;
    margin-top: -10px;
    margin-bottom: -10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
}

</style>