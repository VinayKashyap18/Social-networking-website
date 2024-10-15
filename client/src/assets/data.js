export const user = {
  _id: "64df3c064180b81adfe41d4b",
  firstName: "Vardhan Kashyap",
  lastName: "Manju",
  email: "kashvardhju@gmail.com",
  friends: [
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Marakala",
      lastName: "Manju",
      email: "Manjunadh@gmail.com",
      friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T09:33:32.519Z",
      updatedAt: "2023-08-18T09:49:19.475Z",
      __v: 2,
      profession: "Data Analyst",
      profileUrl:
        "https://i.postimg.cc/QdRZqDqQ/IMG-5108.jpg",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Vinay",
      lastName: "Kashyap",
      email: "Sathivinaykashyap@gmail.com",
      friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
      views: [
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
      ],
      verified: true,
      createdAt: "2023-08-18T09:27:12.064Z",
      updatedAt: "2023-08-21T06:46:26.798Z",
      __v: 8,
      location: "Mumbai, India",
      profession: "Full-Stack Developer",
      profileUrl:
        "https://i.postimg.cc/FH2gFC9F/IMG-7162.jpg"
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Sri",
      lastName: "Vardhan",
      email: "vardhanchowdary@gmail.com",
      friends: ["64df3c064180b81adfe41d4b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T10:04:59.677Z",
      updatedAt: "2023-08-18T10:09:20.006Z",
      __v: 1,
      profession: "Software Developer",
      profileUrl:
        "https://i.postimg.cc/3wzKcpCc/IMG-6838.jpg"
    },
  ],
  views: [
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
  ],
  verified: true,
  createdAt: "2023-08-18T09:38:14.179Z",
  updatedAt: "2023-08-21T06:46:18.258Z",
  profileUrl:
    "https://i.postimg.cc/zfJ1V7DW/IMG-7256.jpg",
  token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
};

export const friends = [
  {
    _id: "64df3aec4180b81adfe41d32",
    firstName: "Praneeth",
    lastName: "Sai",
    email: "Praneethsai@gmail.com",
    profileUrl:
      "https://i.postimg.cc/pXswgCsB/IMG-7060.jpg",
      profession: "Manager"
  },
  {
    _id: "64df39704180b81adfe41d0b",
    firstName: "Sai",
    lastName: "Charan",
    email: "charan@gmail.com",
    location: "Mumbai, India",
    profession: "Recruiter",
    profileUrl:
      "https://i.postimg.cc/mDVjtXzX/IMG-6761.jpg"
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    firstName: "Nanda",
    lastName: "kanth",
    email: "nanda@gmail.com",
    profession: "Data Analyst",
    profileUrl:
      "https://i.postimg.cc/xd3y4xRf/IMG-7051.jpg"
  },
];

export const friends1 = [
  {
    _id: "64df3aec4180b81adfe41d32",
    firstName: "Mani",
    lastName: "Parimi",
    email: "Mani@gmail.com",
    profileUrl:
      "https://i.postimg.cc/cJXzgMzJ/IMG-6843.jpg",
      profession: "Tester"
  },
  {
    _id: "64df39704180b81adfe41d0b",
    firstName: "Kotesh",
    lastName: "Tandyala",
    email: "kotesh@gmail.com",
    location: "Mumbai, India",
    profession: "Chef",
    profileUrl:
      "https://i.postimg.cc/prbV4HJ4/IMG-6783.jpg"
  },
 
];

export const requests = [
  {
    _id: "64df3aec4180b81adfe41d32",
    requestFrom: friends[0],
  },
  {
    _id: "64df39704180b81adfe41d0b",
    requestFrom: friends[1],
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    requestFrom: friends[2],
  },
];

export const suggest = [
  {
    _id: "64df3aec4180b81adfe41d32",
    ...friends1[0],
  },
  {
    _id: "64df39704180b81adfe41d0b",
    ...friends1[1],
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    ...friends[2],
  },
];
export const posts = [
  {
    _id: "64e2fe620d7868ecff1a6a86",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Vinay",
      lastName: "Kashyap",
      profileUrl:
        "https://i.postimg.cc/zXnYDQnw/IMG-7251.jpg",
      location: "Rajahmundry, India",
    },
    description: "Memories of an Unforgettable Trip to Pondicherry with My Gang",
    image:
      "https://i.postimg.cc/zfJ1V7DW/IMG-7256.jpg",
    likes: ["64df3c064180b81adfe41d4b"],
    comments: [],
    createdAt: "2023-08-21T06:04:18.297Z",
    updatedAt: "2023-08-21T06:04:18.297Z",
    __v: 0,
  },
  {
    _id: "64e1cdd64baffca670364c8c",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Mahendra",
      lastName: "",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
      location: "Hyderabad, India",
    },
    description:
      "Close your eyes, and let your imagination take you to a world where the stars paint the sky with dreams. 🌟✨ May your night be filled with happiness and your dreams be as colorful as the rainbow. Sleep tight, and let the adventures of your dreams begin! 🌙💤 #SweetDreams #GoodNightLast week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-20T08:24:54.330Z",
    updatedAt: "2023-08-21T03:23:24.809Z",
    __v: 0,
  },
  {
    _id: "64df437e4a4c0d47b536a002",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Sri",
      lastName: "Vardhan",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",likes: ["64df424b4a4c0d47b5369f65"],
    comments: ["64e2d1c977e497bd3a0bf67b"],
    createdAt: "2023-08-18T10:10:06.969Z",
    updatedAt: "2023-08-21T02:54:01.806Z",
    __v: 0,
    profileUrl:
        "https://i.postimg.cc/858qVBjX/IMG-7082.jpg",
      image:
      "https://i.postimg.cc/g0fTqBNg/Whats-App-Image-2023-10-31-at-17-37-57-d2bda5b1.jpg",
  },
  {
    _id: "64df43714a4c0d47b5369fef",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Sai",
      lastName: "Lokesh",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends", likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T10:09:53.009Z",
    updatedAt: "2023-08-21T03:35:18.541Z",
    __v: 0,
  },
  {
    _id: "64df42dc4a4c0d47b5369f8a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Virat",
      lastName: "Kohli",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",likes: ["64df424b4a4c0d47b5369f65"],
    comments: [],
    createdAt: "2023-08-18T10:07:24.023Z",
    updatedAt: "2023-08-18T10:11:00.348Z",
    __v: 0,
    profileUrl:"https://imgs.search.brave.com/nS8kXB4Cjh7IfgiylTofCsis6PdfOKRLQN2VSagSiPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2lt/Zy8yMDIyLzA5LzEw/LzU1MHgzMDkvVmly/YXRfS29obGlfMTY2/MjgyNTg5MzI2NV8x/NjYyODI1ODk1MTA5/XzE2NjI4MjU4OTUx/MDkuanBn",
    image:
      "https://i.postimg.cc/L6KZKk0G/Whats-App-Image-2023-10-31-at-17-38-01-b7843d59.jpg",
  },
  {
    _id: "64df42b04a4c0d47b5369f77",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Shahid",
      lastName: "Sai",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",
     likes: [],
    comments: [],
    createdAt: "2023-08-18T10:06:40.339Z",
    updatedAt: "2023-08-18T10:06:40.339Z",
    __v: 0,
  },
  {
    _id: "64df41114a4c0d47b5369f02",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Ms",
      lastName: "Dhoni",
      profileUrl:
        "https://i.postimg.cc/pXswgCsB/IMG-7060.jpg",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T09:59:45.876Z",
    updatedAt: "2023-08-18T10:01:35.333Z",
    __v: 0,
  },
  {
    _id: "64df3ef86c2bd953c7b43193",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Manju",
      lastName: "Marakala",
      profileUrl:
        "https://i.postimg.cc/QdRZqDqQ/IMG-5108.jpg",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",
     likes: [
      "64df3aec4180b81adfe41d32",
      "64df424b4a4c0d47b5369f65",
      "64df39704180b81adfe41d0b",
    ],
    comments: [
      "64df41304a4c0d47b5369f0d",
      "64df41b14a4c0d47b5369f4d",
      "64df43e04a4c0d47b536a02a",
    ],
    createdAt: "2023-08-18T09:50:48.398Z",
    updatedAt: "2023-08-21T03:36:36.745Z",
    __v: 0,
    image:
      "https://i.postimg.cc/KzC3Ytck/Whats-App-Image-2023-10-31-at-17-37-59-fcb5a7fb.jpg",
  },
  {
    _id: "64df3ed06c2bd953c7b43172",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Hari",
      lastName: "Babu",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
      location: "Mumbai, India",
    },
    description:
    "Last week, I embarked on an unforgettable journey with my gang of friends to the enchanting coastal town of Pondicherry in Tamil Nadu. The trip promised adventure, laughter, and exploration, and it did not disappoint. With my closest buddies by my side, we set out to explore every nook and cranny of this charming destination, creating memories that will last a lifetime Our adventure began with eager hearts and a sense of excitement as we touched down in Pondicherry. The French colonial architecture and the vibrant colors of the town welcomed us with open arms, and we couldn't wait to dive into everything it had to offer.The first day was dedicated to uncovering the cultural gems of Pondicherry. We Our gang trip to Pondicherry was nothing short of magical. We laughed, we explored, we relaxed, and we created unforgettable memories together. The charm of the town, the beauty of its beaches, and the delicious food all combined to make this journey one for the books. Pondicherry, you stole our hearts, and we can't wait for the next adventure with our incredible gang of friends. #PondicherryDiaries #UnforgettableMemories #TravelWithFriends",
      likes: ["64df39704180b81adfe41d0b"],
    comments: ["64e2dc8577e497bd3a0bf843"],
    createdAt: "2023-08-18T09:50:08.431Z",
    updatedAt: "2023-08-21T03:44:36.962Z",
    __v: 0,
    image:
      "https://i.postimg.cc/8CKrqqqb/Whats-App-Image-2023-10-31-at-17-37-59-a0a75b0e.jpg",
  },
];

export const postComments = [
  {
    _id: "64df43e04a4c0d47b536a02a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "User",
      lastName: "One",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "hahahah",
    from: "User One",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [],
    createdAt: "2023-08-18T10:11:44.091Z",
    updatedAt: "2023-08-21T03:37:03.927Z",
    __v: 0,
  },
  {
    _id: "64df41b14a4c0d47b5369f4d",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "MTech",
      lastName: "Solutions",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
      location: "Mumbai, India",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "i would like to have them in my house",
    from: "MTech Solutions",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [],
    createdAt: "2023-08-18T10:02:25.492Z",
    updatedAt: "2023-08-21T03:27:57.602Z",
    __v: 0,
  },
  {
    _id: "64df41304a4c0d47b5369f0d",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Akwasi",
      lastName: "Asante",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "This dogs are too serious!",
    from: "Akwasi Asante",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [
      {
        userId: {
          _id: "64df39704180b81adfe41d0b",
          firstName: "MTech",
          lastName: "Solutions",
          profileUrl:
            "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
          location: "Mumbai, India",
        },
        from: "MTech Solutions",
        replyAt: "Akwasi Asante",
        comment: "Not easy, hahahah",
        created_At: "2023-08-18T10:01:08.771Z",
        updated_At: "2023-08-18T09:56:38.344Z",
        likes: [],
        _id: "64df41644a4c0d47b5369f24",
      },
    ],
    createdAt: "2023-08-18T10:00:16.352Z",
    updatedAt: "2023-08-18T10:01:14.090Z",
    __v: 1,
  },
];
