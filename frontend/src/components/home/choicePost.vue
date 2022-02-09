<template>
    <div class="choicePost">
        <h3 style="font-weight: bold">컴공 복전</h3>
        <div style="height: 90px; margin-top: 15px">
            <div>시각 디자인과 학생인데, 개발을 배우기 위해 컴공으로 복전을 신청하는게 좋을까요?시각 디자인과 학생인데, 개발을 배우기 위해</div>
            <ul class="postTag">
                <li>#UIUX</li>
                <li>#프론트엔드</li>
                <li>#복수전공</li>
            </ul>
        </div>
        <div class="postAnswerBtn">
            <form style="display: inline-block">
                <input type="button" value="신청 해야한다" style="padding: 10px; margin-right: 15px" />
                <input type="button" value="안해도 괜찮다" style="padding: 10px; margin-left: 15px" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "choicePost",
};
</script>
<style scope>
.choicePost {
    width: 80%;
    padding: 20px;
    height: 220px;
    margin: auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: inset 0px -3px 6px #00000029;
    mix-blend-mode: multiply;
    /* border: 1px black solid; */
    border-radius: 10px;
    opacity: 1;
    font: normal normal normal 15px/19px Noto Sans KR;
    letter-spacing: -0.52px;
    color: #000000cc;
    opacity: 1;
}
.postTag {
    list-style-type: none;
    padding: 0px;
}
.postTag > li {
    font-size: 11px;
    float: left;
    display: block;
    margin: 5px 8px 0px 0px;
}
.postAnswerBtn {
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
}
</style>
