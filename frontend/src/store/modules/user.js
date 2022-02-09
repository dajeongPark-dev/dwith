import * as authApi from "@/api/auth";

export default {
    // state는 data와 같음
    // this.$store.state.변수명
    state: () => ({
        // 유저 기본 정보
        userInfo: {
            userIdx: null,
            userNickname: "",
            userBirth: {
                year: 2022,
                month: 1,
                day: 1,
            },
            userGender: "male",
            userJob: "",
            interest: {
                job: "",
                detailJob: [],
            },
        },
        
        // 회원가입 입력 정보 임시 저장
        registerInfo: {
            userEmail: "",
            userPassword: "",
            userNickname: "",
            userBirth: {
                year: 2022,
                month: 1,
                day: 1,
            },
            userGender: "male",
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
    mutations: {
        // 회원가입 성공 후
        responseRegister(state, registerResult) {
            console.log(state);
            console.log(registerResult);

            // 로그인 창으로 넘어감
            location.href = "./login";
        },

        // 로그인 성공 후
        responseLogin(state, loginResult) {
            console.log(state);
            console.log(loginResult);
        },
    },

    // actions는 async methods(비동기)와 같다
    // this.$store.dispatch("함수명")
    actions: {
        // 서버로 회원가입 요청
        requestRegister(context, inputData) {
            console.log("action - requestRegister 실행");
            authApi
                .requestRegister(inputData)
                // 서버 통신 성공 시
                .then((response) => {
                    console.log(response.data);
                    context.commit("responseRegister", response.data.result);
                })
                //에러 발생 시
                .catch((error) => {
                    console.log("에러" + error);
                });
        },

        // 서버로 로그인 요청
        requestLogin(context, inputData) {
            console.log("action - requestLogin 실행");
            authApi
                .requestLogin(inputData)
                // 서버 통신 성공 시
                .then((response) => {
                    console.log(response.data);
                    context.commit("responseLogin", response.data.result);
                })
                //에러 발생 시
                .catch((error) => {
                    console.log("에러" + error);
                });
        },
    },
};
