import * as authApi from "@/api/authApi";

export default {
    // 로그인, 로그아웃, 회원가입등 인증 관련 vuex (새로고침 시 초기화)

    // state는 data와 같음
    // this.$store.state.변수명
    state: () => ({
        // 회원가입 입력 정보 임시 저장
        registerInfo: {
            email: "",
            password: "",
            username: "",
            birth: {
                year: 2022,
                month: 1,
                day: 1,
            },
            gender: "male",
            job: "직업을 선택해주세요",
            interest: {
                job: "",
                detailJob: [],
            },
        },
        subJobTag: {
            "경영/사무": ["기획,전략,경영", "사무,총무,법무", "인사,노무,교육", "경리,회계,결산", "재무,세무", "사무보조,문서작성"],
            "IT/인터넷": [
                "웹프로그래머",
                "응용프로그래머",
                "시스템프로그래머",
                "DBA,데이터베이스",
                "네트워크,서버,보안",
                "웹기획,PM",
                "웹마케팅",
                "웹디자인",
                "게임",
                "ERP,시스템분석/설계",
                "빅데이터,AI",
            ],
            디자인: ["그래픽디자인,CG", "출판/편집디자인", "제품/산업디자인", "캐릭터,애니메이션", "광고/시각디자인", "의류/패션/잡화디자인", "전시/공간디자인", "디자인기타"],
        },
    }),

    // getter는 computed와 같음
    // this.$store.state.변수명으로 state에 접근해서 사용
    getters: {},

    // mutations는 methods와 같음
    // 첫번째 인자는 state(변수 저장소),두번째 인자로 payload로 함수에 쓰일 파라미터들을 전달 (payload말고 그냥 변수 써도됨 payload는 여러 변수의 집합 느낌?)
    // this.$store.commit("함수명",{변수 파라미터들})
    mutations: {
        // 로그인 성공 후
        responseLogin(state, loginResult) {
            console.log("mutation - responseLogin 실행");
            if (loginResult.isSuccess) {
                alert("로그인 성공");
                console.log("로그인 성공");
                // 로그인한 유저의 정보를 저장후 홈 페이지로 넘어감
                this.$store.state.user.userInfo = loginResult.userInfo;
                location.href = "./main";
            } else {
                alert("로그인 실패");
                console.log("로그인 실패");
            }
        },

        // 로그아웃 성공 후
        responseLogout(state, logoutResponse) {
            console.log("mutation - responseLogout 실행");
            if (logoutResponse.isSuccess) {
                alert("로그아웃 성공");
                console.log("로그아웃 성공");
                // 로컬저장소의 로그아웃한 유저의 정보를 초기화 후 로그인 페이지로 넘어감
                this.$store.state.user.userInfo = {
                    autoLogin: false,
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
                };
                location.href = "./login";
            } else {
                alert("로그아웃 실패");
                console.log("로그아웃 실패");
            }
        },

        // 회원가입 성공 후
        responseRegister(state, registerResult) {
            console.log("mutation - responseRegister 실행");
            // 회원가입 성공 시
            if (registerResult.isSuccess) {
                alert("회원가입 성공");
                console.log("회원가입 성공");
                // 로그인 창으로 넘어감
                location.href = "./login";
            } else {
                alert("회원가입 실패");
                console.log("회원가입 실패");
                location.href = "./register";
            }
        },
    },

    // actions는 async methods(비동기)와 같다
    // this.$store.dispatch("함수명")
    actions: {
        // 서버로 로그인 요청
        requestLogin(context, inputData) {
            console.log("action - requestLogin 실행");
            authApi
                .requestLogin(inputData)
                // 서버 통신 성공 시
                .then((response) => {
                    console.log(response);
                    context.commit("responseLogin", response);
                })
                //에러 발생 시
                .catch((error) => {
                    console.log("에러" + error);
                });
        },

        // 서버로 로그아웃 요청
        requestLogout(context, inputData) {
            console.log("action - requestLogout 실행");
            authApi
                .requestLogout({ userIdx: inputData })
                // 서버 통신 성공 시
                .then((response) => {
                    console.log(response);
                    context.commit("responseLogout", response);
                })
                //에러 발생 시
                .catch((error) => {
                    console.log("에러" + error);
                });
        },

        // 서버로 회원가입 요청
        requestRegister(context, inputData) {
            console.log("action - requestRegister 실행");
            authApi
                .requestRegister(inputData)
                // 서버 통신 성공 시
                .then((response) => {
                    console.log(response);
                    context.commit("responseRegister", response);
                })
                //에러 발생 시
                .catch((error) => {
                    console.log("에러" + error);
                });
        },
    },
};
