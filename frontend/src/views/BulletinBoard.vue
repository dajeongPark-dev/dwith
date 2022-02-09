<!--BBS = Bulletin Board System-->

<template>
    <div id="bbs-page">
        <div id="bbs-page-header">
            <div class="header-bbs-name">선택 게시판</div>
            <b-button pill variant="light" class="header-bbs-switch">일반형</b-button>
            <b-button pill variant="light" class="header-search">검</b-button>
            <b-button pill variant="light" class="header-alert">알</b-button>
        </div>
        <div id="bbs-page-posts">
            <bbsChoice></bbsChoice>
        </div>
    </div>
</template>

<script>
import bbsChoice from "@/views/BBS_Choice.vue";
//import bbsGeneral from "@/views/BBS_General.vue";

export default {
    components: { bbsChoice },
    data() {
        return {
            cards: [
                { title: "post1", content: "contents1" },
                { title: "post4", content: "contents2" },
                { title: "post3", content: "contents4" },
            ],
        };
    },
};
</script>

<style scoped>
#bbs-page {
    width: inherit;
    height: 1401px;
}
#bbs-page-header {
    position: relative;
    width: inherit;
    height: 151px;
    background: white 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 4px #0000004d;
    opacity: 1;
}
.header-bbs-name {
    position: absolute;
    top: 21.6%;
    left: 4.8%;
    /* width: 38%; */
    width: fit-content;
    height: 10%;
    text-align: left;
    font: normal normal bold 19px/36px Noto Sans KR;
    letter-spacing: -0.76px;
    color: #000000;
    opacity: 1;
}
.header-bbs-switch {
    position: absolute;
    top: 21.6%;
    left: 146px;
    width: 95px;
    height: 33px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 4px #0000004d;
    border-radius: 17px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #00000099;
    opacity: 1;
}
.header-search {
    position: absolute;
    top: 21.6%;
    left: 250px;
    width: fit-content;
    height: 33px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 4px #0000004d;
    border-radius: 17px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #00000099;
    opacity: 1;
}
.header-alert {
    position: absolute;
    top: 21.6%;
    left: 300px;
    width: fit-content;
    height: 33px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 4px #0000004d;
    border-radius: 17px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #00000099;
    opacity: 1;
}
.body-category {
    top: 3px;
}
#bbs-page-posts {
    position: relative;
    width: inherit;
    height: 1250px;
    background: #00000012 0% 0% no-repeat padding-box;
    opacity: 2;
    border-bottom: 1px black solid;
}
</style>
