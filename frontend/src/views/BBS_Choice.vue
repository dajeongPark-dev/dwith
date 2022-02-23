<template>
  <div id="board">
    <div class="tabs" ref="tabbar">
      <div
        class="tabitem"
        :class="index === activetab ? 'active' : ''"
        v-for="(tab, index) in items"
        @click="switchtab(index)"
        :key="index"
        ref="tab"
      >
        {{ tab }}
      </div>
      <div
        class="slider"
        :style="'transform:translateX(' + activetab * tabwidth + 'px)'"
      ></div>
    </div>

    <div
      ref="tcon"
      class="tabcontainer"
      v-on="
        pointer
          ? {
              pointerdown: ($event) => start($event),
              pointermove: ($event) => move($event),
              pointerup: ($event) => end($event),
            }
          : {
              touchstart: ($event) => start($event),
              touchmove: ($event) => move($event),
              touchend: ($event) => end($event),
            }
      "
    >
      <transition :name="transition" v-for="(tab, index) in items" :key="index">
        <div class="tabpane" v-if="index === activetab">
          <div class="tabpane-mytag">
            <b-button pill variant="light" class="myTag-button">
              일반형
            </b-button>
            <b-button pill variant="light" class="myTag-button">
              UI.UX 디자인
            </b-button>
            <b-button pill variant="light" class="myTag-button">
              브랜딩 디자인
            </b-button>
            <b-button pill variant="light" class="myTag-button"> + </b-button>
            <!-- 세부 분야 넣기 -->
          </div>
          <div class="tabpane-post">
            <choiceCard></choiceCard>
            <choiceCard></choiceCard>
            <choiceCard></choiceCard>
            <choiceCard></choiceCard>
            <choiceCard></choiceCard>
            <choiceCard></choiceCard>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import choiceCard from "@/components/board/post/ChoicePost.vue";

export default {
  name: "board",
  components: { choiceCard },
  data() {
    return {
      transition: "slide-next",
      activetab: 0,
      tabwidth: 135,
      items: [
        "전체",
        "전공 이야기",
        "취준 이야기",
        "실무 이야기",
        "이직 이야기",
        "자유 이야기",
      ],
      cards: [
        { title: "post1", content: "contents1" },
        { title: "post4", content: "contents2" },
        { title: "post3", content: "contents4" },
      ],
      touch: { sx: null, sy: null, st: null, ex: null, ey: null, et: null },
    };
  },
  mounted() {
    this.$refs.tabbar.style.setProperty("--tabwidth", this.tabwidth + "px");
  },
  computed: {
    pointer() {
      if (window.PointerEvent) return true;
      else return false;
    },
  },
  methods: {
    switchtab(n) {
      let scroll, scond;
      if (this.activetab > n) {
        this.transition = "slide-prev";
        scroll = n - 1;
        if (scond)
          this.$refs.tab[scroll].scrollIntoView({ behavior: "smooth" });
      } else if (this.activetab < n) {
        this.transition = "slide-next";
        scroll = n + 1;
      }
      scond = scroll >= 0 && scroll < this.items.length;
      if (scond) this.$refs.tab[scroll].scrollIntoView({ behavior: "smooth" });

      // eslint-disable-next-line no-unused-vars
      Vue.nextTick((_) => {
        this.activetab = n;
      });
    },
    start(e) {
      this.settouchpos(e, "start");
    },
    move(e) {
      this.settouchpos(e, "move");
    },
    end(e) {
      this.settouchpos(e, "end");
      let dx = this.touch.sx - this.touch.ex,
        dy = this.touch.sy - this.touch.ey,
        dt = this.touch.et - this.touch.st,
        dir = Math.sign(dx),
        ntab = this.activetab + dir,
        vmove = Math.abs(dx) / Math.abs(dy) < Math.sqrt(4);
      ntab = ntab >= 0 && ntab < this.items.length ? ntab : null;
      if (Math.abs(dx) > 10 && ntab !== null && !vmove && dt < 300)
        this.switchtab(ntab);
    },
    settouchpos(e, event) {
      let ev = e.changedTouches ? e.changedTouches[0] : e;
      if (event === "start") {
        this.touch.sx = ev.clientX;
        this.touch.sy = ev.clientY;
        this.touch.st = Date.now();
      } else {
        this.touch.ex = ev.clientX;
        this.touch.ey = ev.clientY;
        this.touch.et = Date.now();
      }
    },
  },
};
</script>

<style scoped>
.slide-next-leave-active,
.slide-next-enter-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: 0.5s;
}
.slide-next-enter,
.slide-next-leave,
.slide-prev-leave-to {
  transform: translate(100%, 0);
}

.slide-next-leave-to,
.slide-prev-enter,
.slide-prev-leave {
  transform: translate(-100%, 0);
}

.tabs {
  display: flex;
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #333333;
  height: 46px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 7px 0 rgba(0, 0, 0, 0.12);
  overflow-x: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
.tabs::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}
.tabitem {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--tabwidth);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
}
.tabitem.active {
  font-weight: 500;
  color: #3b00ff;
}
.slider {
  position: absolute;
  bottom: 0px;
  height: 3px;
  width: var(--tabwidth);
  background: #3b00ff;
  transition: 0.5s ease;
}

.tabcontainer {
  height: auto;
  position: relative;
  min-height: 100%;
  width: 100%;
  touch-action: pan-y;
}

.tabpane {
  position: relative;
  width: 100%;
  height: auto;
}

.tabpane-mytag {
  position: relative;
  margin: 17px 15px 30px 19px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
}

.myTag-button {
  position: relative;
  margin: 3px;
  display: flex;
}

.tabpane-post {
  position: relative;
  width: 100%;
  font-size: 32px;
  display: flex;
  flex-wrap: wrap;
}

#board {
  margin: 0 auto;
  text-align: center;
}

body {
  font-family: "Roboto", Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  margin: 0;
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
