export default {
    // 유저의 각종 정보를 담고 있는 vuex (local storage에 저장됨)
    // state는 data와 같음
    // this.$store.state.변수명
    state: () => ({
        // 회원가입 입력 정보 임시 저장
        userInfo: {
            userIdx: null,

            userNickname: "",
            userBirth: {
                year: 2022,
                month: 1,
                day: 1,
            },
            userGender: "",
            userJob: "",
            interest: {
                job: "",
                detailJob: [],
            },
        },
    }),

    // getter는 computed와 같음
    // this.$store.state.변수명으로 state에 접근해서 사용
    getters: {},

    // mutations는 methods와 같음
    // 첫번째 인자는 state(변수 저장소),두번째 인자로 payload로 함수에 쓰일 파라미터들을 전달 (payload말고 그냥 변수 써도됨 payload는 여러 변수의 집합 느낌?)
    // this.$store.commit("함수명",{변수 파라미터들})
    mutations: {},

    // actions는 async methods(비동기)와 같다
    // this.$store.dispatch("함수명")
    actions: {},
};
