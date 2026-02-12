const thumb = "/assets/images/community-default.png";
const profile = "/assets/images/icons/user-profile.png";

export const mockCommunity = [
  {
    id: 1,
    title: "역삼 친구 모여라 ❤️",
    content: `이사온지 얼마 안 된 3개월차 자취생입니다!
본가는 광주이고 회사가 선릉입니다~~

맛집이나 취미 생활 함께할 분들 구해요!
같이 볼링치고 치맥할 분 구해요.`,
    author: "프로자취러",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T20:04:00",

    readCount: 12,
    commentCount: 4,
    likeCount: 2,
    bookmarkCount: 2,
    imageSrc: thumb,

    comments: [
      {
        id: 101,
        author: "초보자취생",
        authorProfile: profile,
        content: "저도 같이해요!",
        createdAt: "약 1시간 전",
        likeCount: 3,
        replyCount: 2,
        replies: [
          {
            id: 1001,
            author: "프로자취러",
            authorProfile: profile,
            content: "오 좋아요! 쪽지 드릴게요",
            createdAt: "약 40분 전",
            likeCount: 1,
          },
          {
            id: 1002,
            author: "초보자취생",
            authorProfile: profile,
            content: "넵넵~~",
            createdAt: "약 20분 전",
            likeCount: 1,
          },
        ],
      },

      {
        id: 102,
        author: "자취생2",
        authorProfile: profile,
        content: "좋아요!",
        createdAt: "약 30분 전",
        likeCount: 3,
        replyCount: 2,
        replies: [
          {
            id: 1003,
            author: "프로자취러",
            authorProfile: profile,
            content: "반갑습니다! 집이 근처이신가요??",
            createdAt: "약 10분 전",
            likeCount: 1,
          },
          {
            id: 1004,
            author: "자취생2",
            authorProfile: profile,
            content: "저는 집이 선릉역 근처예요~!",
            createdAt: "약 1분 전",
            likeCount: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "자취하면서 돈 아끼는 방법 있을까요?",
    content: `식비가 너무 많이 나와요 😢
다들 장 어디서 보세요?
할인마트 vs 온라인 어디가 더 나은가요?`,
    author: "절약왕",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T18:10:00",
    readCount: 25,
    commentCount: 3,
    likeCount: 5,
    bookmarkCount: 4,
    imageSrc: thumb,

    comments: [
      {
        id: 201,
        author: "생활고수",
        authorProfile: profile,
        content: "전 무조건 마감세일 노려요",
        createdAt: "약 2시간 전",
        likeCount: 3,
        replyCount: 1,
        replies: [
          {
            id: 2001,
            author: "절약왕",
            authorProfile: profile,
            content: "오 좋은 팁이네요",
            createdAt: "약 1시간 전",
            likeCount: 1,
          },
        ],
      },
      {
        id: 202,
        author: "컬리",
        authorProfile: profile,
        content: "온라인이 은근 싸요",
        createdAt: "약 1시간 전",
        likeCount: 1,
        replies: [],
      },
    ],
  },

  {
    id: 3,
    title: "인천으로 이사하게 됐는데 쉽지 않네요 😂",
    content: `회사 때문에 이동합니다…
부평 쪽 자취 환경 어떤가요?`,
    author: "이사준비",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T16:40:00",
    readCount: 19,
    commentCount: 2,
    likeCount: 3,
    bookmarkCount: 1,
    imageSrc: thumb,

    comments: [
      {
        id: 301,
        author: "부평출퇴근",
        authorProfile: profile,
        content: "부평 교통은 좋아요",
        createdAt: "약 3시간 전",
        likeCount: 2,
        replyCount: 1,
        replies: [
          {
            id: 3001,
            author: "이사준비",
            authorProfile: profile,
            content: "오 다행이네요",
            createdAt: "약 2시간 전",
            likeCount: 1,
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "홈플러스 앞 분식집 추천합니다",
    content: `떡볶이 진짜 맛있어요 👍
혼밥하기도 좋습니다`,
    author: "먹잘알",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T15:20:00",
    readCount: 44,
    commentCount: 4,
    likeCount: 9,
    bookmarkCount: 6,
    imageSrc: thumb,

    comments: [
      {
        id: 401,
        author: "야식러",
        authorProfile: profile,
        content: "위치 어디쯤이에요?",
        createdAt: "약 4시간 전",
        likeCount: 1,
        replyCount: 1,
        replies: [
          {
            id: 4001,
            author: "먹잘알",
            authorProfile: profile,
            content: "정문 바로 앞이에요",
            createdAt: "약 3시간 전",
            likeCount: 1,
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "오늘 아침 도로공사 때문에 지각ㅠㅠ",
    content: `출근길 막힘 심합니다
우회 추천합니다`,
    author: "출근러",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T14:10:00",
    readCount: 31,
    commentCount: 2,
    likeCount: 4,
    bookmarkCount: 0,
    imageSrc: thumb,

    comments: [
      {
        id: 501,
        author: "지각생",
        authorProfile: profile,
        content: "저도 걸렸어요 😭",
        createdAt: "약 5시간 전",
        likeCount: 2,
        replies: [],
      },
    ],
  },

  {
    id: 6,
    title: "우유팩 수거 자원봉사 모집 👍",
    content: `주말 오전 진행합니다
같이 참여하실 분 구해요`,
    author: "지구지켜",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T13:00:00",
    readCount: 27,
    commentCount: 3,
    likeCount: 7,
    bookmarkCount: 3,
    imageSrc: thumb,

    comments: [
      {
        id: 601,
        author: "참여희망",
        authorProfile: profile,
        content: "신청합니다!",
        createdAt: "약 6시간 전",
        likeCount: 3,
        replyCount: 1,
        replies: [
          {
            id: 6001,
            author: "지구지켜",
            authorProfile: profile,
            content: "쪽지 드릴게요",
            createdAt: "약 5시간 전",
            likeCount: 1,
          },
        ],
      },
    ],
  },

  {
    id: 7,
    title: "자취방 냄새 제거 팁 공유",
    content: `베이킹소다 + 환기 조합 추천합니다
진짜 효과 있어요`,
    author: "생활고수",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T12:00:00",
    readCount: 52,
    commentCount: 3,
    likeCount: 12,
    bookmarkCount: 10,
    imageSrc: thumb,

    comments: [
      {
        id: 701,
        author: "초보자취",
        authorProfile: profile,
        content: "한번 해볼게요",
        createdAt: "약 7시간 전",
        likeCount: 2,
        replies: [],
      },
    ],
  },

  {
    id: 8,
    title: "같이 운동하실 분 구해요",
    content: `저녁 러닝 메이트 구합니다
주 3회 목표`,
    author: "러너",
    authorProfile: profile,
    region: "역삼동",
    createdAt: "2025-12-29T11:00:00",
    readCount: 20,
    commentCount: 2,
    likeCount: 5,
    bookmarkCount: 1,
    imageSrc: thumb,

    comments: [
      {
        id: 801,
        author: "헬스러",
        authorProfile: profile,
        content: "시간대 맞으면 같이해요",
        createdAt: "약 8시간 전",
        likeCount: 1,
        replyCount: 1,
        replies: [
          {
            id: 8001,
            author: "러너",
            authorProfile: profile,
            content: "저녁 8시쯤입니다",
            createdAt: "약 7시간 전",
            likeCount: 1,
          },
        ],
      },
    ],
  },
];
