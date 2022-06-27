;[
    {
        productsTypes: [
            {
                id: 31561,
                title: 'Суші',
                value: 'sushi',
                icon: '/image/icons/icons_category/icon.svg',
                categories: [
                    { category: 'all', categoryName: 'Всі' },
                    { category: 'rolls', categoryName: 'Роли' },
                    { category: 'sushi', categoryName: 'Суші' },
                ],
            },
            {
                id: 32165478,
                title: 'Піца',
                value: 'pizza',
                icon: '/image/icons/icons_category/icon1.svg',
                categories: [
                    { category: 'all', categoryName: 'Всі' },
                    { category: 'meaty', categoryName: "М'ясні" },
                    { category: 'schesee', categoryName: 'Сирні' },
                    { category: 'spicy', categoryName: 'Гострі' },
                ],
            },
            {
                id: 321324,
                title: 'Сети',
                value: 'sets',
                icon: '/image/icons/icons_category/icon3.svg',
                categories: [
                    { category: 'all', categoryName: 'Всі' },
                    { category: 'set1', categoryName: 'Сет 1' },
                    { category: 'set2', categoryName: 'Сет 2' },
                ],
            },
            {
                id: 3214871,
                title: 'Супи',
                value: 'spice',
                icon: '/image/icons/icons_category/icon4.svg',
                categories: [
                    { category: 'all', categoryName: 'Всі' },
                    { category: '21', categoryName: '21' },
                    { category: '21', categoryName: '23' },
                ],
            },
        ],
    },
    {
        sushi: [
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Угорь',
                    'сливочный сыр',
                    'такуан, икра',
                    'Тобико',
                    'кунжут',
                    'соус унаги',
                    'рис',
                    'нори',
                ],
                weight: 590,
                id: 1,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FALASKA.jpg?alt=media&token=d7936a8f-bbb2-4526-81bd-55e8bdc2091d',
                name: 'АЛЯСКА',
                popularity: 1,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Бекон',
                    'сливочный сыр',
                    'огурец',
                    'кунжут',
                    'рис',
                    'нори',
                ],
                weight: 235,
                id: 2,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FBANSAI.jpg?alt=media&token=7ecd13e8-4f1e-4976-81c4-0a6b0407b5b4',
                name: 'Бансай',
                popularity: 3,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Тунец',
                    'сливочный сыр',
                    'лосось слабосоленый',
                    'огурец',
                    'стружка тунца',
                    'рис',
                ],
                weight: 235,
                id: 3,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FBONITO-MAKI.jpg?alt=media&token=3ba27040-3387-474a-924b-cb0982e2d9a6',
                name: 'Бонита Маки',
                popularity: 5,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Креветка',
                    'икра Тобико',
                    'сливочный сыр',
                    'огурец',
                    'рис',
                    'нори',
                ],
                weight: 950,
                id: 4,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FBOSTON.jpg?alt=media&token=de5c488e-222e-4123-b331-fbb18ec2639e',
                name: 'Бостон',
                popularity: 7,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Угорь',
                    'сливочный сыр',
                    'такуан',
                    'икра Тобико',
                    'кунжут',
                    'соус унаги',
                    'рис',
                    'нори',
                ],
                weight: 235,
                id: 5,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FDRAGON-LIGHT.jpg?alt=media&token=d8bf4e6c-c22c-468e-b3b0-72b65bc94226',
                name: 'Дракон Лайт',
                popularity: 9,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'икра Тобико',
                    'имитация краба',
                    'сливочный сыр',
                    'огурец',
                    'рис',
                    'нори',
                ],
                weight: 420,
                id: 6,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FCALIFORNIA.jpg?alt=media&token=ed05ae79-9347-4b77-a231-e17aa3b667ef',
                name: 'Калифорния',
                popularity: 12,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Лосось слабосоленый',
                    'огурец',
                    'сливочный сыр',
                    'икра лососевая',
                    'укроп',
                    'рис',
                    'нори',
                ],
                weight: 235,
                id: 7,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FMOSCOW.jpg?alt=media&token=6151581c-44c6-439a-bd4a-18deb69e932d',
                name: 'Москва',
                popularity: 13,
                price: 29,
            },
            {
                amount: 4,
                category: 'rolls',
                composition: ['Лосось слабосоленый', 'рис', 'нори'],
                weight: 235,
                id: 8,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FSYAKE-MAKI.jpg?alt=media&token=e7ea4a20-9105-463e-9fde-2e58e7578398',
                name: 'Сяке Маки',
                popularity: 10,
                price: 84,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Лосось слабосоленый',
                    'сливочный сыр',
                    'рис',
                    'нори',
                ],
                weight: 423,
                id: 9,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FPHILADELPHIA.jpg?alt=media&token=611f9d61-f896-4ba6-a3a7-704cf57db4c0',
                name: 'Филадельфия',
                popularity: 3,
                price: 26,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Лосось слабосоленый',
                    'сливочный сыр',
                    'зелёный лук',
                    'рис',
                    'нори',
                ],
                weight: 235,
                id: 10,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FPHILADELPHIA-LIGHT.jpg?alt=media&token=f2e7ffc5-87b2-4e15-86ea-1ec625b72f8e',
                name: 'Филадельфия лайт',
                popularity: 6,
                price: 25,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'Лосось слабосоленый',
                    'икра масаго',
                    'огурец',
                    'сливочный сыр',
                    'рис',
                    'нори',
                ],
                weight: 458,
                id: 11,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FPHILADELPHIA-SUITE.jpg?alt=media&token=7065c618-c87c-4fcc-a0ed-482745920988',
                name: 'Филадельфия люкс',
                popularity: 14,
                price: 29,
            },
            {
                amount: 1,
                category: 'rolls',
                composition: [
                    'огурец',
                    'перец болгарский',
                    'капуста пекинская',
                    'рис',
                    'нори',
                ],
                weight: 235,
                id: 12,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Rolls%2FYASAY-MAKI.jpg?alt=media&token=0b0236c9-7ce5-4a60-b904-09f07ab7a696',
                name: 'Ясай маки',
                popularity: 4,
                price: 15,
            },
            {
                amount: 1,
                category: 'sushi',
                composition: ['рис', 'лосось слабосоленый'],
                weight: 235,
                id: 21,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Sushi%2FSUSHI-WITH-SALMON.jpg?alt=media&token=3774a6f4-ea60-42cf-879e-d76ecec57ce6',
                name: 'Суши с лососем ',
                popularity: 22,
                price: 39,
            },
            {
                amount: 1,
                category: 'sushi',
                composition: ['рис', 'угорь', 'нори', 'соус унаги', 'кунжут'],
                weight: 235,
                id: 22,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Sushi%2FSUSHI-WITH-EEL.jpg?alt=media&token=4765a2bf-a3f6-4265-8cdf-2ea0bb419987',
                name: 'Суши с ургём',
                popularity: 23,
                price: 39,
            },
        ],
    },
    {
        sets: [
            {
                amount: 250,
                category: 'set1',
                composition: [
                    'Ролл Акира (20 шт.)',
                    'Ролл Нагаи (10 шт.)',
                    'Ролл Аляска (10 шт.)',
                    'Ролл Калифорния',
                ],
                weight: 687,
                id: 13,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Sets%2FLEGEND.jpg?alt=media&token=9a935ed1-5e63-4cca-9b40-c0dfe9427ebe',
                name: 'Легенда',
                popularity: 5,
                price: 5555,
            },
            {
                amount: 20,
                category: 'set2',
                composition: [
                    'Ролл Лава (10 шт.)',
                    'Ролл Филадельфия лайт (5 шт.)',
                    'Ролл Аляска (5 шт.)',
                ],
                weight: 365,
                id: 14,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Sets%2FHOME-ALONE.jpg?alt=media&token=916bb9b9-e347-4bc3-af86-60669d26f7a0',
                name: 'Один дома',
                popularity: 19,
                price: 399,
            },
        ],
    },
    {
        spice: [
            {
                amount: 1,
                category: '21',
                weight: 325,
                id: 18,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Spice%2FWASABI.jpg?alt=media&token=94096957-e9ad-40ca-bbed-e25d3b81029e',
                name: 'Васаби',
                popularity: 70,
                price: 5,
            },
            {
                amount: 1,
                category: '23',
                weight: 235,
                id: 19,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Spice%2FGINGER.jpg?alt=media&token=f7f111ad-d610-4033-9712-2789736b697c',
                name: 'Имбирь',
                popularity: 784,
                price: 9,
            },
            {
                amount: 1,
                category: '23',
                weight: 314,
                id: 20,
                img: 'https://firebasestorage.googleapis.com/v0/b/react-sushi-shop.appspot.com/o/Spice%2FSOY-SAUCE.jpg?alt=media&token=671223e6-eb7e-4150-b4dd-3707b4c448d4',
                name: 'Соевый соус',
                popularity: 72,
                price: 9,
            },
        ],
    },
    {
        pizza: [
            {
                id: 145623,
                category: 'meaty',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 368,
                img: 'https://assets.zumepizza.com/public/j4lb8iry.jpg',
                img2: 'https://assets.zumepizza.com/public/aq89hll9.jpg',
                name: 'Карбонара',
                composition: [
                    'бекон',
                    'сыры чеддер и пармезан',
                    'моцарелла',
                    'томаты черри',
                    'красный лук',
                    'чеснок',
                    'сливочный соус',
                    'итальянские травы',
                ],
                defaultPrice: 395,
                price: 395,
            },
            {
                id: 245623,
                category: 'meaty',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 924,
                img: 'https://assets.zumepizza.com/public/nfjqscxz.jpg',
                img2: 'https://assets.zumepizza.com/public/aq89hll9.jpg',
                name: 'Ветчина и сыр',
                composition: [
                    'ветчина',
                    'увеличенная порция моцареллы',
                    'сливочный соус',
                ],
                defaultPrice: 295,
                price: 295,
            },
            {
                id: 345623,
                category: 'meaty',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 489,
                img: 'https://assets.zumepizza.com/public/u9uqpymh.jpg',
                img2: 'https://assets.zumepizza.com/public/95n7xd91.jpg',
                name: 'Кисло-сладкий цыпленок',
                composition: [
                    'цыпленок',
                    'томатный соус',
                    'моцарелла',
                    'кисло-сладкий соус',
                ],
                defaultPrice: 295,
                price: 295,
            },
            {
                id: 42653,
                category: 'meaty',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 635,
                img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/895590f5-b88c-4bba-baf9-134f9ee48302.jpg',
                name: 'Цыпленок ранч',
                composition: [
                    'цыпленок',
                    'ветчина',
                    'соус ранч',
                    'моцарелла',
                    'томаты',
                    'чеснок',
                ],
                defaultPrice: 445,
                price: 445,
            },
            {
                id: 1289783,
                category: 'chesee',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 489,
                img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/c2da53ec-00e2-4446-a4e6-74b83ed0b357.jpg',
                name: 'Сырная',
                composition: ['увеличенная порция моцареллы', 'томатный соус'],
                defaultPrice: 245,
                price: 245,
            },
            {
                id: 27896523,
                category: 'chesee',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 264,
                img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/baf084f4-fc94-443c-a646-fdeff9f301a6.jpg',
                name: 'Четыре сыра',
                composition: [
                    'увеличенная порция моцареллы',
                    'смесь сыров чеддер и пармезан',
                    'сыр блю чиз',
                    'сливочный соус',
                ],
                defaultPrice: 445,
                price: 445,
            },
            {
                id: 3456423,
                category: 'chesee',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 789,
                img: 'https://cdn.dodostatic.net/static/Img/Products/ce8362cdf445460685ddad21118db566_584x584.jpeg',
                name: 'Маргарита',
                composition: [
                    'увеличенная порция моцареллы',
                    'томаты',
                    'итальянские травы',
                    'томатный соус',
                ],
                defaultPrice: 445,
                price: 445,
            },
            {
                id: 42653123,
                category: 'chesee',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 489,
                img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/b952eb17-77b8-4a14-b982-42fbf5ceaf0e.jpg',
                name: 'Гавайская',
                composition: ['цыпленок', 'томатный', 'моцарелла', 'ананасы'],
                defaultPrice: 395,
                price: 395,
            },
            {
                id: 1456423,
                category: 'spicy',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 489,
                img: 'https://cdn.dodostatic.net/static/Img/Products/ce8362cdf445460685ddad21118db566_584x584.jpeg',
                name: 'Мексиканская',
                composition: [
                    'томатный соус',
                    'сладкий перец',
                    'красный лук',
                    'моцарелла',
                    'острый перец халапеньо',
                    'томаты',
                    'соус сальса',
                    'острый цыпленок',
                ],
                defaultPrice: 445,
                price: 445,
            },
            {
                id: 245645623,
                category: 'spicy',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 424,
                img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dcc14f3c-0bcd-4e22-9c94-d694750a790b.jpg',
                name: 'Жгучий соус',
                composition: [
                    'острый цыпленок',
                    'томатный соус',
                    'моцарелла',
                    'кисло-сладкий соус',
                ],
                defaultPrice: 295,
                price: 295,
            },
            {
                id: 37455623,
                category: 'spicy',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 658,
                img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/4df905b0-0a43-4e95-a096-8e470918a267.jpg',
                name: 'Пепперони',
                composition: [
                    'пикантная пепперони',
                    'увеличенная порция моцареллы',
                    'томатный соус',
                ],
                defaultPrice: 395,
                price: 395,
            },
            {
                id: 78423,
                category: 'spicy',
                config: {
                    size: [22, 30, 40],
                    sides: ['Філадельфія', 'Хот-дог'],
                },
                weight: 522,
                img: 'https://cdn.dodostatic.net/static/Img/Products/c541efb07523453e877610a28b794907_584x584.jpeg',
                name: 'Аррива!',
                composition: [
                    'соус бургер',
                    'цыпленок',
                    'соус ранч',
                    'чоризо',
                    'сладкий перец',
                    'красный лук',
                    'моцарелла',
                    'томаты',
                    'чеснок',
                ],
                defaultPrice: 395,
                price: 395,
            },
        ],
    },
]
