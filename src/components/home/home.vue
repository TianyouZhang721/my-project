<template>
    <div class="home">
    	<div class="search-icon">
	        <i class="icon iconfont icon-sousuo_sousuo"></i>
	    </div>
	    <div class="message-icon">
	        <i class="icon iconfont icon-youjian"></i>
	    </div>
	    <mu-tabs :value="activeTab" @change="handleTabChange">
	        <mu-tab value="tab1" title="发现"/>
	        <mu-tab value="tab2" title="关注"/>
	        <mu-tab value="tab3" title="评测"/>
	        <mu-tab value="tab4" title="鉴定"/>
	    </mu-tabs>
	    <div v-if="activeTab === 'tab1'">
	        <div class="tab-content">
                <div class="home-banner">
                    <mt-swipe>
                        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                        	<!-- <img src="../../assets/img/banner/banner1.jpg" alt=""> -->
                        	<img :src="'../../'+item.img" alt="">							
                        </mt-swipe-item>
                        <mt-swipe-item>2</mt-swipe-item>
                        <mt-swipe-item>3</mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="home-nav">
                    <div class="home-nav-left">
                        <!-- <img src="../../../assets/img/index/home-img_03.png" alt=""> -->
                        <i class="icon iconfont icon-fujinderen"></i>
                        <h3>附近好友</h3>
                    </div>
                    <div class="home-nav-right">
                        <!-- <img src="../../../assets/img/index/home-img_06.png" alt=""> -->
                        <i class="icon iconfont icon-iconfontpaihangbang"></i>
                        <h3>人气排行榜</h3>
                    </div>
                </div>
                <div class="commend-topic">
                    <div class="commend-today">
                        <h5>今日推荐话题</h5>
                        <div class="topic-all">
                            全部话题
                            <i class="icon iconfont icon-youjiantou"></i>
                        </div>
                    </div>
                    <div class="topic-content">
                        <div class="topic-info">
                            <div class="topic-img">
                                <!-- <img src="../../../assets/img/index/home-img_03.png" alt=""> -->
                            </div>
                            <div class="topic-detail">
                                <div class="topic-title">123</div>
                                <div class="topic-describe">123</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="today-commend">
                    <div class="today-titel">今日推荐</div>
                    <div class="commend-content">
                        <div class="commend-info">
                            <div class="info-left-img">
                                <!-- <img src="../../../assets/img/index/home-img_03.png" alt=""> -->
                            </div>
                            <div class="info-right-detail">
                                <div class="info-right-top">
                                    <div class="person-info">
                                        <div class="person-name">123</div>
                                        <div class="starttime">23小时前</div>
                                    </div>
                                    <div class="follow">
                                        <i class="icon iconfont icon-tianjia"></i> 关注
                                    </div>
                                </div>
                                <div class="person-talk">123</div>
                                <div class="topic-name">
                                    #123
                                </div>
                                <div class="upload-pic">
                                    <ul>
                                        <li>
                                            <!-- <img src="../../../assets/img/index/home-img_03.png" alt=""> -->
                                        </li>
                                    </ul>
                                </div>
                                <div class="icons">
                                    <div class="three-icons">
                                        <div class="share">
                                            <i class="icon iconfont icon-fenxiang"></i>
                                        </div>
                                        <div class="message">
                                            <i class="icon iconfont icon-huifu"></i>
                                            <span>123</span>
                                        </div>
                                        <div class="like">
                                            <i class="icon iconfont icon-shoucang"></i>
                                            <span>123</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="comment-reply">
                                    <div class="content">
                                        <span class="author">123:</span>
                                        <span class="comment">123</span>
                                    </div>
                                    <div class="comment-all">
                                        查看全部<span>123</span>条评论
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
	    <div v-if="activeTab === 'tab2'">
	        <h2>Tab Two</h2>
	        <p>
	          这是第二个 tab
	        </p>
	    </div>
	    <div v-if="activeTab === 'tab3'">
	        <h2>Tab Three</h2>
	        <p>
	          这是第三个 tab
	        </p>
	    </div>
	    <div v-if="activeTab === 'tab4'">
	        <h2>Tab Three</h2>
	        <p>
	          这是第三个 tab
	        </p>
	    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
Vue.prototype.$http = Axios
export default {
    data () {
        return {
			activeTab: 'tab1',
			bannerList: []
        }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
	},
	created (){
		Axios.get(`http://127.0.0.1:8080/my-project/static/data/routes/index/getIndexBanner.php`).then(res => {
			console.log(res);
			this.bannerList = res.data;
			console.log(this.bannerList);
		})
	}
}
</script>
<style lang="scss">
	.search-icon {
	    position: fixed;
	    left: .2rem;
	    top: .25rem;
	    /* -webkit-transform: translateY(-50%); */
	    /* transform: translateY(-50%); */
	    z-index: 99999;
	    .iconfont {
	        font-size: .4rem;
	        line-height: .4rem;
	    }
	}
	.message-icon {
	    position: fixed;
	    right: .2rem;
	    top: .25rem;
	    /* -webkit-transform: translateY(-50%); */
	    /* transform: translateY(-50%); */
	    z-index: 99999;
	    .iconfont {
	        font-size: .4rem;
	        line-height: .4rem;
	    }
	}
	.mu-tabs{
		position: fixed;
	    top: 0;
	    height: .88rem;
	    width: 80%;
	    left: 10%;
	    background-color: #fff;
	    .mu-tab-link {
	    	height:.88rem;
	    	width:25%;
	    	color:#333;
			font-size: .3rem;
	    }
	    .mu-tab-active{
	    	color: #333;
	    }
	}
	.tab-content{
		.home-banner {
		    width: 100%;
		    height: 3.46rem;
		    overflow: hidden;
		    .banner-swiper {
		        height: 100%;
		        img {
		            width: 100%;
		            height: 100%;
		        }
		    }
		}

		.home-nav {
		    width: 100%;
		    height: 1.72rem;
		    background-color: #f7f7f7;
		    position: relative;
		    .home-nav-left {
		        position: absolute;
		        left: .2rem;
		        top: 50%;
		        transform: translateY(-50%);
		        height: 1.34rem;
		        width: 3.36rem;
		        img {
		            width: 100%;
		            height: 100%;
		        }
		        .iconfont {
		            font-size: .6rem;
		            position: absolute;
		            left: .4rem;
		            top: 50%;
		            transform: translateY(-50%);
		            color: #fff;
		        }
		        h3 {
		            font-size: .34rem;
		            color: #fff;
		            position: absolute;
		            left: 1.2rem;
		            top: 50%;
		            transform: translateY(-50%);
		            font-weight: 500;
		        }
		    }
		    .home-nav-right {
		        position: absolute;
		        right: .2rem;
		        top: 50%;
		        transform: translateY(-50%);
		        height: 1.34rem;
		        width: 3.36rem;
		        img {
		            width: 100%;
		            height: 100%;
		        }
		        .iconfont {
		            font-size: .6rem;
		            position: absolute;
		            left: .4rem;
		            top: 50%;
		            transform: translateY(-50%);
		            color: #fff;
		        }
		        h3 {
		            font-size: .34rem;
		            color: #fff;
		            position: absolute;
		            left: 1.2rem;
		            top: 50%;
		            font-weight: 500;
		            transform: translateY(-50%);
		        }
		    }
		}

		.commend-topic {
		    background-color: #fff;
		    .commend-today {
		        padding: 0 .2rem;
		        padding-top: .2rem;
		        overflow: hidden;
		        h5 {
		            color: #333;
		            font-size: .26rem;
		            float: left;
		        }
		        .topic-all {
		            float: right;
		            color: #0aabe8;
		            font-size: .26rem;
		            .iconfont {
		                font-size: .26rem;
		                color: #0aabe8
		            }
		        }
		    }
		    .topic-content {
		        .topic-info {
		            height: 1.34rem;
		            border-bottom: 1px solid #f2f2f2;
		            position: relative;
		            .topic-img {
		                position: absolute;
		                left: .2rem;
		                top: 50%;
		                transform: translateY(-50%);
		                width: .8rem;
		                height: .8rem;
		                border-radius: .04rem;
		                img {
		                    width: 100%;
		                    height: 100%;
		                    border-radius: .04rem;
		                }
		            }
		            .topic-detail {
		                position: absolute;
		                left: 1.2rem;
		                top: 45%;
		                transform: translateY(-50%);
		                .topic-title {
		                    color: #000;
		                    font-size: .24rem;
		                    line-height: .5rem;
		                }
		                .topic-describe {
		                    color: #666;
		                    font-size: .22rem;
		                }
		            }
		        }
		    }
		}

		.today-commend {
		    background-color: #fff;
		    margin-top: .2rem;
		    .today-titel {
		        width: 100%;
		        padding: 0 .2rem;
		        padding-top: .2rem;
		        color: #333;
		        font-size: .26rem;
		    }
		    .commend-content {
		        padding-bottom: .2rem;
		        .commend-info {
		            border-bottom: 1px solid #f2f2f2;
		            overflow: hidden;
		            padding-bottom: .3rem;
		            .info-left-img {
		                width: 15%;
		                float: left;
		                img {
		                    width: .8rem;
		                    height: .8rem;
		                    margin-top: .2rem;
		                    margin-left: .2rem;
		                    border-radius: 50%;
		                }
		            }
		            .info-right-detail {
		                width: 85%;
		                float: right;
		                padding-left: .15rem;
		                .info-right-top {
		                    margin-top: .2rem;
		                    overflow: hidden;
		                    .person-info {
		                        float: left;
		                        .person-name {
		                            color: #333;
		                            font-size: .24rem;
		                        }
		                        .starttime {
		                            color: #666;
		                            font-size: .22rem;
		                            line-height: .4rem;
		                        }
		                    }
		                    .follow {
		                        float: right;
		                        margin-right: .2rem;
		                        width: 1.2rem;
		                        height: .5rem;
		                        font-size: .26rem;
		                        color: #33abaa;
		                        background-color: #e4f7fe;
		                        padding-left: .15rem;
		                        .iconfont {
		                            color: #33abaa;
		                            font-size: .3rem;
		                            line-break: .4rem;
		                        }
		                    }
		                }
		                .person-talk {
		                    width: 90%;
		                    padding-top: .1rem;
		                    color: #333;
		                    font-size: .24rem;
		                    display: -webkit-box;
		                    -webkit-box-orient: vertical;
		                    -webkit-line-clamp: 2;
		                    word-wrap: break-word;
		                    overflow: hidden;
		                    line-height: .4rem;
		                }
		                .topic-name {
		                    width: 90%;
		                    padding-top: .05rem;
		                    color: #999;
		                    font-size: .2rem;
		                }
		                .upload-pic {
		                    margin-top: .15rem;
		                    // width: 90%;
		                    ul {
		                        width: 100%;
		                        overflow: hidden;
		                        li {
		                            width: 1.72rem;
		                            height: 1.72rem;
		                            margin-right: .2rem;
		                            margin-bottom: .2rem;
		                            float: left;
		                            img {
		                                width: 100%;
		                                height: 100%;
		                            }
		                        }
		                    }
		                }
		                .icons {
		                    width: 100%;
		                    height: .5rem;
		                    .three-icons {
		                        overflow: hidden;
		                        float: right;
		                        margin-right: .8rem;
		                        display: flex;
		                        align-items: center;
		                        .iconfont {
		                            font-size: .32rem;
		                        }
		                        div {
		                            float: left;
		                            margin-left: .2rem;
		                        }
		                        .share {
		                            .iconfont {
		                                line-height: .5rem;
		                            }
		                        }
		                    }
		                }
		                .comment-reply {
		                    .content {
		                        padding: .05rem 0;
		                        .author {
		                            font-size: .22rem;
		                            color: #9e9e9e;
		                            margin-right: .05rem;
		                        }
		                        .comment {
		                            font-size: .22rem;
		                            color: #1f1f1f;
		                        }
		                    }
		                    .comment-all {
		                        color: #1f1f1f;
		                        padding-top: .1rem;
		                        span {
		                            color: #0e9dbb;
		                        }
		                    }
		                }
		            }
		        }
		    }
		}
	}
</style>