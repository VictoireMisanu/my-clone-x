 const DB = [
    {
      userId: 1,
      username: 'ChrisM',
      name: 'Christian Mwanya',
      bio: 'Tech enthusiast, coffee lover, and software engineer. Always exploring new ideas and trends in tech.',
      profilePicture: '/images/chrisM.jpg',
      followersCount: 1200,
      followingCount: 800,
      tweets: [
        {
          tweetId: 1,
          content: `Excited to be working on a new React project! Loving the flexibility it provides for building UI components. #React #JavaScript #WebDevelopment`,
          createdAt: '20 Oct',
          image: '/images/cameleon.jpg',
          likes: 150,
          retweets: 30,
          comments: 10,
          numberShare: 5,
        },
        {
          tweetId: 2,
          content: 'Just finished reading a great book on cloud computing. The future is all about scalability and efficiency. #CloudComputing #TechTrends',
          createdAt: '19 Mars',
          image: '/images/cloud.jpg',
          likes: 80,
          retweets: 20,
          comments: 5,
          numberShare: 2,
        },
        {
          tweetId: 3,
          content: `Coffee is the coder's fuel! Starting my day with a double shot and a fresh perspective. What’s your go-to morning routine? #CoffeeLovers #MorningRoutine`,
          createdAt: '20 Dec 2023',
          image: '/images/codeCoffee.jpg',
          likes: 200,
          retweets: 50,
          comments: 15,
          numberShare: 10,
        },
        {
          tweetId: 4,
          content: 'Exploring the latest trends in AI. It’s fascinating how quickly things are evolving in this space. #ArtificialIntelligence #MachineLearning',
          createdAt: '2024-09-23T18:10:00Z',
          image: '/images/AI.jpg',
          likes: 110,
          retweets: 40,
          comments: 12,
          numberShare: 8,
        },
      ],
      },
      {
        userId: 2,
        username: 'VMuvumbi',
        name: 'Victoire Muvumbi',
        bio:  'Tech enthusiast and coffee lover. Tweets about tech, travel, and life.',
        profilePicture: '/images/me.jpeg',
        followersCount: 250,
        followingCount: 180,
        tweets: [
          {
            tweetId: 1,
            content: `Anyone else excited about the new React features? :hammer_and_wrench: I've been experimenting with the latest updates, and I must say, the improvements in state management are a game-changer! Can’t wait to implement them in my current projects. #ReactJS #TechTalk #WebDev`,
            createdAt: '7h',
            likes: 25,
            retweets: 10,
            comments: 5,
            image: '/images/lion.jpg',
            numberShare: 0,
          },
          {
            tweetId: 2,
            content:`Just launched my new project! Excited to share it with everyone. :rocket: It's been a long journey, but I'm finally here. I couldn't have done it without the amazing support from my friends and family. Stay tuned for more updates as I keep improving! #Launch #NewBeginnings #TechLife'`,
            createdAt: '29 sep',
            image: '/images/guepard.jpg',
            likes: 30,
            retweets: 5,
            comments: 2,
            numberShare: 0,
          },
          {
            tweetId: 3,
            content: 'Just finished a great book on JavaScript! Highly recommend. :books: #BookLover',
            createdAt: '2024-09-28T10:00:00Z',
            image: '/images/JSBook.jpg',
            likes: 18,
            retweets: 3,
            comments: 1,
            numberShare: 0,
          },
        ],
    //   },
    //   {
    //     userId: 3,
    //     username: 'jane_smith',
    //     name: 'Jane Smith',
    //     bio: 'Digital marketing specialist. Love to travel and take photos.',
    //     profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    //     followersCount: 300,
    //     followingCount: 150,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content: `Just returned from a beautiful trip to Italy! :it: The food, the culture, and the landscapes were absolutely breathtaking. Every corner felt like a scene from a movie. Can’t wait to go through all my photos and share them with you! Stay tuned! #TravelDiaries #ItalyTrip #Wanderlust`,
    //         createdAt: '2024-09-29T18:45:00Z',
    //         likes: 45,
    //         retweets: 15,
    //         comments: 7,
    //         numberShare: 0,
    //       },
    //       {
    //         tweetId: 2,
    //         content: 'Exploring new digital marketing trends for 2024! #Marketing',
    //         createdAt: '2024-09-27T14:30:00Z',
    //         likes: 28,
    //         retweets: 4,
    //         comments: 3,
    //       },
    //     ],
    //   },
    //   {
    //     userId: 4,
    //     username: 'mark_twain',
    //     name: 'Mark Twain',
    //     bio: 'Writer and storyteller. Sharing thoughts on literature and life.',
    //     profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
    //     followersCount: 200,
    //     followingCount: 100,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content:`"A good book is a friend that never betrays. :books: Reading has been my escape, my teacher, and my inspiration. I just finished another classic, and I can’t recommend it enough. Who else loves getting lost in a good story? #BookLove #ReadingCommunity #Wisdom`,
    //         createdAt: '2024-09-25T10:15:00Z',
    //         likes: 20,
    //         retweets: 5,
    //         comments: 3,
    //       },
    //       {
    //         tweetId: 2,
    //         content: 'Writing is easy. All you have to do is cross out the wrong words. #Writing',
    //         createdAt: '2024-09-23T12:00:00Z',
    //         likes: 15,
    //         retweets: 2,
    //         comments: 1,
    //       },
    //       {
    //         tweetId: 3,
    //         content: 'Let us be thankful for the fools. But for them, the rest of us could not succeed. #Wisdom',
    //         createdAt: '2024-09-21T09:00:00Z',
    //         likes: 10,
    //         retweets: 1,
    //         comments: 0,
    //       },
    //     ],
    //   },
    //   {
    //     userId: 5,
    //     username: 'sara_lee',
    //     name: 'Sara Lee',
    //     bio: 'Food blogger and recipe creator. Sharing my culinary adventures!',
    //     profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
    //     followersCount: 450,
    //     followingCount: 300,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content: 'Tried a new recipe today! Check out my blog for the details. :knife_fork_plate: #Foodie',
    //         createdAt: '2024-09-28T13:00:00Z',
    //         likes: 60,
    //         retweets: 20,
    //         comments: 10,
    //       },
    //       {
    //         tweetId: 2,
    //         content: `Tried a new recipe today! :knife_fork_plate: It’s a mix of traditional flavors with a modern twist, perfect for any food lover. Head to my blog for the full details and let me know what you think if you give it a try! #Foodie #RecipeShare #CookingAdventures`,
    //         createdAt: '2024-09-26T14:00:00Z',
    //         likes: 50,
    //         retweets: 15,
    //         comments: 8,
    //       },
    //       {
    //         tweetId: 3,
    //         content: 'Can’t wait to share my favorite fall recipes! :maple_leaf: #FallCooking',
    //         createdAt: '2024-09-24T16:30:00Z',
    //         likes: 40,
    //         retweets: 12,
    //         comments: 4,
    //       },
    //     ],
    //   },
    //   {
    //     userId: 6,
    //     username: 'alice_wonder',
    //     name: 'Alice Wonderland',
    //     bio: 'Dreamer and artist. Exploring creativity in everyday life.',
    //     profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
    //     followersCount: 500,
    //     followingCount: 400,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content: 'Creating art is like dreaming with colors. :art: #ArtLife',
    //         createdAt: '2024-09-26T14:30:00Z',
    //         likes: 35,
    //         retweets: 8,
    //         comments: 4,
    //       },
    //       {
    //         tweetId: 2,
    //         content: 'Art is not freedom from discipline, but disciplined freedom. #ArtQuotes',
    //         createdAt: '2024-09-24T11:15:00Z',
    //         likes: 20,
    //         retweets: 5,
    //         comments: 2,
    //       },
    //       {
    //         tweetId: 3,
    //         content: 'Just finished a new painting! Can’t wait to show it off! #ArtCommunity',
    //         createdAt: '2024-09-22T13:30:00Z',
    //         likes: 30,
    //         retweets: 6,
    //         comments: 3,
    //       },
    //     ],
    //   },
    //   {
    //     userId: 7,
    //     username: 'charlie_brown',
    //     name: 'Charlie Brown',
    //     bio: 'Aspiring musician. Love to share my journey in music.',
    //     profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
    //     followersCount: 100,
    //     followingCount: 75,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content: 'Just finished writing a new song! Can’t wait to share it! :notes: #MusicLife',
    //         createdAt: '2024-09-24T16:00:00Z',
    //         likes: 18,
    //         retweets: 4,
    //         comments: 1,
    //       },
    //       {
    //         tweetId: 2,
    //         content: 'Music is the shorthand of emotion. :musical_note: #MusicQuote',
    //         createdAt: '2024-09-22T09:00:00Z',
    //         likes: 12,
    //         retweets: 3,
    //         comments: 0,
    //       },
    //     ],
    //   },
    //   {
    //     userId: 8,
    //     username: 'david_brown',
    //     name: 'David Brown',
    //     bio: 'Gadget lover and tech reviewer. Sharing insights on the latest tech.',
    //     profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg',
    //     followersCount: 275,
    //     followingCount: 125,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content: 'Just got my hands on the latest smartphone! Review coming soon. :iphone: #TechReview',
    //         createdAt: '2024-09-23T11:00:00Z',
    //         likes: 30,
    //         retweets: 10,
    //         comments: 5,
    //         numberShare: 0,
    //         image : ''
    //       },
    //       {
    //         tweetId: 2,
    //         content: 'Can’t believe how fast technology is evolving! #FutureTech',
    //         createdAt: '2024-09-21T14:30:00Z',
    //         likes: 20,
    //         retweets: 8,
    //         comments: 2,
    //         numberShare: 0
    //       },
    //     ],
    //   },
    //   {
    //     userId: 9,
    //     username: 'emma_stone',
    //     name: 'Emma Stone',
    //     bio: 'Nature lover and photographer. Capturing the beauty of the world.',
    //     profilePicture: 'https://randomuser.me/api/portraits/women/6.jpg',
    //     followersCount: 600,
    //     followingCount: 300,
    //     tweets: [
    //       {
    //         tweetId: 1,
    //         content: `The beauty of nature never ceases to amaze me! :evergreen_tree: Whether it's the tall trees, flowing rivers, or the chirping birds, there's always something peaceful and grounding about being outside. Here's one of my favorite shots from my latest hike. #NaturePhotography #OutdoorLife`,
    //         createdAt: '2024-09-22T09:45:00Z',
    //         likes: 80,
    //         retweets: 25,
    //         comments: 12,
    //         image: '/image_twitter/image-3.png'
    //       },
    //       {
    //         tweetId: 2,
    //         content: 'Nature is the art of God. :blossom: #NatureLover',
    //         createdAt: '2024-09-20T14:00:00Z',
    //         likes: 50,
    //         retweets: 10,
    //         comments: 5,
    //       },
    //       {
    //         tweetId: 3,
    //         content: `Nature is the art of God. :blossom: Every time I look through my lens, I’m reminded of how much beauty there is in the little things. #NatureLover #Photography #Inspiration`,
    //         createdAt: '2024-09-18T10:30:00Z',
    //         likes: 40,
    //         retweets: 15,
    //         comments: 8,
    //       },
    //     ],
     },
     ];

     export default DB