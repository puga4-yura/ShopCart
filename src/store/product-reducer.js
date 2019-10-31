import React from "react";

const REMOVE_ELEMENT = 'REMOVE-ELEMENT';
const TO_WILL_BUY = 'TO_WILL_BUY';
const REMOVE_TO_WILL_BUY = 'REMOVE_TO_WILL_BUY';
let CHANGE_ = "ADD_NEW_PRODUCT";
let ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

//export const removeElementActionCreate = (product) => ({type: REMOVE_ELEMENT, id: product.id});

let initialState = [
    {
        "id": 89859632,
        "title": "Сандалии Skechers 51873 NVY 46 (12) 30 см (192283106071)",
        "price": "1398",
        "old_price": "1398",
        "price_pcs": "53.56",
        "href": "https://rozetka.com.ua/skechers_192283106071/p89859632/",
        "image_main": "https://i1.rozetka.ua/goods/12381168/skechers_192283106071_images_12381168014.jpg",
    },
    {
        "id": 79926086,
        "title": "Босоножки ECCO Shape 35 W 250163(02236) 35 (809704936437)",
        "price": "2199",
        "old_price": "4380",
        "price_pcs": "84.25",
        "href": "http://rozetka.com.ua/ecco_809704936437/p79926086/",
        "image_main": "https://i1.rozetka.ua/goods/11615218/ecco_809704936437_images_11615218953.jpg",
    },
    {
        "id": 82973475,
        "title": "Топсайдеры Timberland Union Whar TB0A1XEU432 44 (10) (191932928125)",
        "price": "1829",
        "old_price": "2880",
        "price_pcs": "70.08",
        "href": "https://rozetka.com.ua/timberland_191932928125/p82973475/",
        "image_main": "https://i2.rozetka.ua/goods/11945654/timberland_191932928125_images_11945654586.jpg",
    },
    {
        "id": 69626042,
        "title": "Кеди Geox B Djrock Girl B921WE/0AW54/C0050 27 (8058279812017)",
        "price": "1299",
        "old_price": "1999",
        "price_pcs": "49.77",
        "href": "https://rozetka.com.ua/ua/geox_8058279812017/p69626042/",
        "image_main": "https://i2.rozetka.ua/goods/10503532/geox_8058279812017_images_10503532034.jpg",
    },
    {
        "id": 73939341,
        "title": "Сандалии Inblu VH-2A 37 Серебристые",
        "price": "439",
        "old_price": "793",
        "price_pcs": "16.82",
        "href": "https://rozetka.com.ua/inblu_vh_2a_serebristie_37/p73939341/",
        "image_main": "https://i1.rozetka.ua/goods/11246535/inblu_vh_2a_serebristie_37_images_11246535420.jpg",
    },
    {
        "id": 34129463,
        "title": "Сандалии Geox U8224D/0BC50/C4422 46 (8058279226807)",
        "price": "1819",
        "old_price": "2799",
        "price_pcs": "69.69",
        "href": "http://rozetka.com.ua/geox_8058279226807/p34129463/",
        "image_main": "https://i2.rozetka.ua/goods/3309778/geox_8058279226807_images_3309778695.jpg",
    },
    {
        "id": 69561698,
        "title": "Кроссовки Adidas Continental 80 W G27722 40.5 25 см Ftwwht/Trupnk/Clpink (4060516437383)",
        "price": "2138",
        "old_price": "3290",
        "price_pcs": "81.92",
        "href": "https://rozetka.com.ua/adidas_4060516437383/p69561698/",
        "image_main": "https://i1.rozetka.ua/goods/12429422/adidas_4060516437383_images_12429422138.jpg",
    },
    {
        "id": 85900482,
        "title": "Кроссовки Puma Flourish Wn s 19233704 37 23 см Молочные (4060979044807)",
        "price": "1673",
        "old_price": "2390",
        "price_pcs": "64.1",
        "href": "https://rozetka.com.ua/puma_4060979044807/p85900482/",
        "image_main": "https://i2.rozetka.ua/goods/12095932/puma_4060979044807_images_12095932698.jpg",
    },
    {
        "id": 87512680,
        "title": "Сандалии VAGABOND Erin 4532-101-01 36 (7320562457368)",
        "price": "2769",
        "old_price": "2769",
        "price_pcs": "106.09",
        "href": "https://rozetka.com.ua/vagabond_7320562457368/p87512680/",
        "comments_amount": 0,
        "sell_status": "available",
        "comments_mark": "0",
        "category_id": 4634553,
        "seller_id": 5,
        "merchant_id": 2,
        "brand": "VAGABOND",
        "brand_id": 5185,
        "group_id": 12238198,
        "pl_bonus_charge_pcs": 0,
        "pl_use_instant_bonus": 0,
        "state": "new",
        "docket": "",
        "promo_price": null,
        "discount": 0,
        "stars": "0%",
        "parent_category_id": 1162030,
        "tag": null,
        "tags_technical": [{
            "is_auction": true,
            "title": "Платите с Mastercard® на Rozetka - получайте бесплатную доставку заказов от 500 ₴",
            "description": "<p>Платите с Mastercard® на Rozetka — получайте бесплатную доставку заказов от 500 ₴</p><p><a href=\"https://rozetka.com.ua/mastercard/\" target=\"_blank\">Подробнее</a>.</p>",
            "url": null,
            "url_title": null,
            "order": 16777215,
            "image_url": "https://i2.rozetka.ua/goods/tags/79/79400.png",
            "width": 100,
            "height": 100
        }],
        "gift": null,
        "is_docket": true,
        "image_main": "https://i2.rozetka.ua/goods/12191611/vagabond_7320562457368_images_12191611419.jpg",
        "images": {
            "main": "https://i2.rozetka.ua/goods/12191611/vagabond_7320562457368_images_12191611419.jpg",
            "hover": "https://i2.rozetka.ua/goods/12191611/vagabond_7320562457368_images_12191611989.jpg",
            "preview": "https://i1.rozetka.ua/goods/12191611/vagabond_7320562457368_images_12191611581.jpg"
        },
        "config": {
            "image": true,
            "title": true,
            "brand": true,
            "description": false,
            "status": true,
            "wishlist_button": true,
            "compare_button": false,
            "buy_button": true,
            "price": true,
            "old_price": true,
            "promo_price": false,
            "visa_price": false,
            "rating": false,
            "tags": true,
            "tags_technical": false,
            "bonus": true,
            "gift": true,
            "size": true
        },
        "root_id": 1162030,
        "groups": {
            "block": {
                "Размер": [{
                    "value": "36",
                    "href": "https://rozetka.com.ua/vagabond_7320562457368/p87512680/",
                    "rank": "99.726",
                    "id": 87512680
                }, {
                    "value": "37",
                    "href": "https://rozetka.com.ua/vagabond_7320562457375/p87512710/",
                    "rank": "98.1267",
                    "id": 87512710
                }, {
                    "value": "38",
                    "href": "https://rozetka.com.ua/vagabond_7320562457382/p87512722/",
                    "rank": "99.0099",
                    "id": 87512722
                }, {
                    "value": "39",
                    "href": "https://rozetka.com.ua/vagabond_7320562457399/p87512734/",
                    "rank": "99.3435",
                    "id": 87512734
                }, {
                    "value": "40",
                    "href": "https://rozetka.com.ua/vagabond_7320562457405/p87512740/",
                    "rank": "98.7921",
                    "id": 87512740
                }, {
                    "value": "41",
                    "href": "https://rozetka.com.ua/vagabond_7320562457412/p87512752/",
                    "rank": "99.0587",
                    "id": 87512752
                }]
            }
        }
    },
    {
        "id": 87511294,
        "title": "Сандалии ECCO Biom Raft 700642(00206) 27 (809704972305)",
        "price": "1869",
        "old_price": "2199",
        "price_pcs": "71.61",
        "href": "https://rozetka.com.ua/ecco_809704972305/p87511294/",
        "image_main": "https://i1.rozetka.ua/goods/12191364/ecco_809704972305_images_12191364591.jpg",
    },
    {
        "id": 69626972,
        "title": "Кроссовки Geox J Waviness Boy J926TB/01454/C0735 33 (8058279774285)",
        "price": "1689",
        "old_price": "2599",
        "price_pcs": "64.71",
        "href": "https://rozetka.com.ua/geox_8058279774285/p69626972/",
    },
    {
        "id": 89160093,
        "title": "Сандалии Tom.M 5216C 30 19.5 см Голубые (2000000314686)",
        "price": "349",
        "old_price": "526",
        "price_pcs": "13.37",
        "href": "https://rozetka.com.ua/tom_m_2000000314686/p89160093/",
        "image_main": "https://i1.rozetka.ua/goods/12377900/tom_m_2000000314686_images_12377900114.jpg",

    },
    {
        "id": 76089264,
        "title": "Сандалии Clarks TriCove Su 2613-9564 (8) 42 Зеленые (5050409635650)",
        "price": "2599",
        "old_price": "4250",
        "price_pcs": "99.58",
        "href": "https://rozetka.com.ua/clarks_5050409635650/p76089264/",
        "image_main": "https://i1.rozetka.ua/goods/11517310/clarks_5050409635650_images_11517310820.jpg",
    },
    {
        "id": 87436270,
        "title": "Сандалии Primigi 3459600 31 Разноцветные (3459600310267)",
        "price": "869",
        "old_price": "1098",
        "price_pcs": "33.3",
        "href": "https://rozetka.com.ua/primigi_3459600310267/p87436270/",
        "image_main": "https://i2.rozetka.ua/goods/12154639/primigi_3459600310267_images_12154639312.jpg",
    },
    {
        "id": 73249875,
        "title": "Кеды ECCO Vibration 206113(01249) 40 (809704825847)",
        "price": "2069",
        "old_price": "4129",
        "price_pcs": "79.27",
        "href": "https://rozetka.com.ua/ecco_809704825847/p73249875/",
        "image_main": "https://i1.rozetka.ua/goods/11199023/ecco_809704825847_images_11199023145.jpg",
    },
    {
        "id": 79926032,
        "title": "Босоножки ECCO Shape 35 W 250153(01281) 39 (809704816005)",
        "price": "3399",
        "old_price": "5000",
        "price_pcs": "130.23",
        "href": "https://rozetka.com.ua/ecco_809704816005/p79926032/",
        "image_main": "https://i2.rozetka.ua/goods/11615215/ecco_809704816005_images_11615215299.jpg",
    },
    {
        "id": 73737057,
        "title": "Сандалии Geox Jr Wader J9230A/01554/C4226 36 (8058279864719)",
        "price": "1689",
        "old_price": "2599",
        "price_pcs": "64.71",
        "href": "https://rozetka.com.ua/geox_8058279864719/p73737057/",
        "image_main": "https://i1.rozetka.ua/goods/11150973/geox_8058279864719_images_11150973291.jpg",
    },
    {
        "id": 73737891,
        "title": "Кеды Geox D Myria D8468B/04322/C7008 36 (8058279826090)",
        "price": "2049",
        "old_price": "3149",
        "price_pcs": "78.51",
        "href": "https://rozetka.com.ua/geox_8058279826090/p73737891/",
        "image_main": "https://i2.rozetka.ua/goods/11151042/geox_8058279826090_images_11151042909.jpg",
    },
    {
        "id": 35596568,
        "title": "Туфли Clarks Calla Rose 2613-3927 (6.5) 40 (5050408409719)",
        "price": "2629",
        "old_price": "4249",
        "price_pcs": "100.73",
        "href": "https://rozetka.com.ua/clarks_5050408409719/p35596568/",
        "image_main": "https://i1.rozetka.ua/goods/3778145/clarks_5050408409719_images_3778145184.jpg",
    },
    {
        "id": 76104606,
        "title": "Кеды ECCO Gillian 285633(51384) 40 (809704871592)",
        "price": "2519",
        "old_price": "5000",
        "price_pcs": "96.51",
        "href": "https://rozetka.com.ua/ecco_809704871592/p76104606/",
        "image_main": "https://i2.rozetka.ua/goods/11419602/ecco_809704871592_images_11419602954.jpg",
    },
    {
        "id": 79948808,
        "title": "Сандалии Clarks Tricove Su 2613-9566 (6.5) 40 (5050409806180)",
        "price": "2619",
        "old_price": "4250",
        "price_pcs": "100.34",
        "href": "https://rozetka.com.ua/clarks_5050409806180/p79948808/",
        "image_main": "https://i1.rozetka.ua/goods/11615286/clarks_5050409806180_images_11615286171.jpg",
    },
    {
        "id": 87435946,
        "title": "Сандалии Primigi 3459811 30 Розовые (3459811300262)",
        "price": "759",
        "old_price": "959",
        "price_pcs": "29.08",
        "href": "https://rozetka.com.ua/primigi_3459811300262/p87435946/",
        "image_main": "https://i1.rozetka.ua/goods/12154634/primigi_3459811300262_images_12154634542.jpg",
    },
    {
        "id": 70437488,
        "title": "Шлепанцы Lacoste L.30 Slide 119 2 Cfa 737CFA0020241 36.5 (T4) 23.5 см (5012123302195)",
        "price": "973",
        "old_price": "1390",
        "price_pcs": "37.28",
        "href": "https://rozetka.com.ua/lacoste_5012123302195/p70437488/",
        "image_main": "https://i2.rozetka.ua/goods/10901284/lacoste_5012123302195_images_10901284119.jpg",

    },
    {
        "id": 83325837,
        "title": "Сабо Mida 23941(213) 39 Рыжие (2000002092384)",
        "price": "1049",
        "old_price": "1599",
        "price_pcs": "40.19",
        "href": "https://rozetka.com.ua/mida_2000002092384/p83325837/",
        "image_main": "https://i2.rozetka.ua/goods/12015482/mida_2000002092384_images_12015482436.jpg",
    },
    {
        "id": 73736943,
        "title": "Сандалии Geox J Borealis Boy J920RC/01554/C1338 28 (8058279853942)",
        "price": "1689",
        "old_price": "2599",
        "price_pcs": "64.71",
        "href": "https://rozetka.com.ua/geox_8058279853942/p73736943/",
        "image_main": "https://i1.rozetka.ua/goods/11198262/geox_8058279853942_images_11198262939.jpg",

    },
    {
        "id": 73247079,
        "title": "Лодочки VAGABOND Minna 4711-401-40 39 (7320562447307)",
        "price": "2789",
        "old_price": "4130",
        "price_pcs": "106.86",
        "href": "https://rozetka.com.ua/vagabond_7320562447307/p73247079/",
        "image_main": "https://i2.rozetka.ua/goods/11246494/vagabond_7320562447307_images_11246494662.jpg",
    },
    {
        "id": 91977254,
        "title": "Кеды Converse All Star 564117C 37 (6.5) 23.5 см Белые (888756822042)",
        "price": "1589",
        "old_price": "2049",
        "price_pcs": "60.88",
        "href": "https://rozetka.com.ua/converse_888756822042/p91977254/",
        "image_main": "https://i2.rozetka.ua/goods/12381260/converse_888756822042_images_12381260486.jpg",

    },
    {
        "id": 69552260,
        "title": "Кеды Adidas Stan Smith BD7444 45.5 28 см Ftwwht/Ftwwht/Legivy (4060509633723)",
        "price": "2138",
        "old_price": "3290",
        "price_pcs": "81.92",
        "href": "https://rozetka.com.ua/adidas_4060509633723/p69552260/",
        "image_main": "https://i1.rozetka.ua/goods/10646198/adidas_4060509633723_images_10646198612.jpg",
    },
    {
        "id": 88229163,
        "title": "Сандалии ECCO Offroad 822114(50263) 40 (809704560250)",
        "price": "3399",
        "old_price": "3999",
        "price_pcs": "130.23",
        "href": "https://rozetka.com.ua/ecco_809704560250/p88229163/",
        "image_main": "https://i1.rozetka.ua/goods/12313784/ecco_809704560250_images_12313784462.jpg",

    },
    {
        "id": 86834610,
        "title": "Вьетнамки Copacabana 82635-23458 37 (7909224896143)",
        "price": "269",
        "old_price": "399",
        "price_pcs": "10.31",
        "href": "https://rozetka.com.ua/copacabana_7909224896143/p86834610/",
        "image_main": "https://i2.rozetka.ua/goods/12193435/copacabana_7909224896143_images_12193435221.jpg",

    },
    {
        "id": 73736391,
        "title": "Сандалии Geox J Sandal Flexyper Bo J929DA/01410/C0735 38 (8058279880658)",
        "price": "1689",
        "old_price": "2599",
        "price_pcs": "64.71",
        "href": "https://rozetka.com.ua/geox_8058279880658/p73736391/",
        "image_main": "https://i2.rozetka.ua/goods/11150940/geox_8058279880658_images_11150940843.jpg",
    },
    {
        "id": 69629618,
        "title": "Кроссовки Geox Jr Vita J92A4A/01422/C4289 34 (8058279847095)",
        "price": "1689",
        "old_price": "2599",
        "price_pcs": "64.71",
        "href": "https://rozetka.com.ua/geox_8058279847095/p69629618/",
        "image_main": "https://i2.rozetka.ua/goods/10503764/geox_8058279847095_images_10503764516.jpg",
    },
    {
        "id": 38171528,
        "title": "Сандалии ECCO Intrinsic 842054(51052) 40 (809704309651)",
        "price": "3149",
        "old_price": "3699",
        "price_pcs": "120.65",
        "href": "https://rozetka.com.ua/ecco_809704309651/p38171528/",
        "image_main": "https://i1.rozetka.ua/goods/4205395/ecco_809704309651_images_4205395680.jpg",
    },
    {
        "id": 83631234,
        "title": "Кроссовки Puma NRGY Neko 19106907 37.5 23.5 см Elderberry (4060978856463)",
        "price": "1953",
        "old_price": "2790",
        "price_pcs": "74.83",
        "href": "https://rozetka.com.ua/puma_4060978856463/p83631234/",
        "image_main": "https://i1.rozetka.ua/goods/11856463/puma_4060978856463_images_11856463122.jpg",
    },
    {
        "id": 83631468,
        "title": "Кроссовки Puma Sirena Trailblazer 36945802 40 25.5 см Fair Aqua/Pale Pink (4060978897718)",
        "price": "1549",
        "old_price": "2490",
        "price_pcs": "59.35",
        "href": "http://rozetka.com.ua/puma_4060978897718/p83631468/",
        "image_main": "https://i1.rozetka.ua/goods/11856480/puma_4060978897718_images_11856480318.jpg",
    },
    {
        "id": 83351565,
        "title": "Кроссовки New Balance 997 CW997HBA 37 (7.5) 24.5 см (192983239581)",
        "price": "1959",
        "old_price": "2799",
        "price_pcs": "75.06",
        "href": "https://rozetka.com.ua/new_balance_192983239581/p83351565/",
        "image_main": "https://i2.rozetka.ua/goods/11850960/new_balance_192983239581_images_11850960930.jpg",
    },
    {
        "id": 85902396,
        "title": "Кроссовки Puma RS-100 ADER ERROR 36719701 42.5 27.5 см Белые с синим (4059506425394)",
        "price": "4333",
        "old_price": "6190",
        "price_pcs": "166.02",
        "href": "https://rozetka.com.ua/puma_4059506425394/p85902396/",
        "image_main": "https://i1.rozetka.ua/goods/12429342/puma_4059506425394_images_12429342512.jpg",
    },
    {
        "id": 87511108,
        "title": "Сандалии ECCO Flora 700202(01118) 35 (809704979885)",
        "price": "1949",
        "old_price": "2299",
        "price_pcs": "74.67",
        "href": "https://rozetka.com.ua/ecco_809704979885/p87511108/",
        "image_main": "https://i1.rozetka.ua/goods/12191360/ecco_809704979885_images_12191360175.jpg",

    },
    {
        "id": 41541776,
        "title": "Кеды La Rose 932бел 37 24.2 см Белые",
        "price": "1395",
        "old_price": "1900",
        "price_pcs": "53.45",
        "href": "https://rozetka.com.ua/la_rose_932bel_37/p41541776/",
        "image_main": "https://i2.rozetka.ua/goods/6848085/la_rose_932bel_37_images_6848085654.jpg",
    },
    {
        "id": 81573621,
        "title": "Сандалии Avis 1-25 02 салат.проб с112 39 Салатовые",
        "price": "635",
        "old_price": "705",
        "price_pcs": "24.33",
        "href": "https://rozetka.com.ua/avis_1_25_02_salat_prob_s112_39/p81573621/",
        "image_main": "https://i2.rozetka.ua/goods/11832128/avis_1_25_02_salat_prob_s112_39_images_11832128607.jpg",
    },
    {
        "id": 69628520,
        "title": "Кеды Geox B Kilwi Boy B92A7A/010BC/C4011 20 (8058279804340)",
        "price": "1429",
        "old_price": "2199",
        "price_pcs": "54.75",
        "href": "https://rozetka.com.ua/geox_8058279804340/p69628520/",
        "image_main": "https://i1.rozetka.ua/goods/10503679/geox_8058279804340_images_10503679112.jpg",
    },
    {
        "id": 87513202,
        "title": "Сандалии VAGABOND Becky 4715-140-46 38 (7320562461990)",
        "price": "2089",
        "old_price": "2479",
        "price_pcs": "80.04",
        "href": "https://rozetka.com.ua/vagabond_7320562461990/p87513202/",
        "image_main": "https://i1.rozetka.ua/goods/12191622/vagabond_7320562461990_images_12191622873.jpg",
    },
    {
        "id": 71354578,
        "title": "Кеды Tommy Hilfiger FW0FW01655.501 38 24.3 см Розовые (8719254902283)",
        "price": "1499",
        "old_price": "2180",
        "price_pcs": "57.43",
        "href": "https://rozetka.com.ua/tommy_hilfiger_8719254902283/p71354578/",
        "image_main": "https://i1.rozetka.ua/goods/10754322/tommy_hilfiger_8719254902283_images_10754322382.jpg",
    },
    {
        "id": 69558164,
        "title": "Кеды Adidas Nizza CM8572 46 28.4 см Tracar/Ftwwht/Crywht (4060509015406)",
        "price": "1683",
        "old_price": "2590",
        "price_pcs": "64.48",
        "href": "https://rozetka.com.ua/adidas_4060509015406/p69558164/",
        "image_main": "https://i1.rozetka.ua/goods/10657444/adidas_4060509015406_images_10657444742.jpg",
    },
    {
        "id": 69552440,
        "title": "Кеди Adidas Stan Smith BD7450 45.5 28 см Conavy/Crywht/Grethr (4059807005783)",
        "price": "2138",
        "old_price": "3290",
        "price_pcs": "81.92",
        "href": "https://rozetka.com.ua/ua/adidas_4059807005783/p69552440/",
        "image_main": "https://i2.rozetka.ua/goods/10646211/adidas_4059807005783_images_10646211170.jpg",
    },
    {
        "id": 72003129,
        "title": "Кеды Nike Wmns Court Royale Prem AJ7731-600 38 (8) 25 см (883153938051)",
        "price": "1479",
        "old_price": "2299",
        "price_pcs": "56.67",
        "href": "https://rozetka.com.ua/nike_883153938051/p72003129/",
        "image_main": "https://i2.rozetka.ua/goods/10884085/nike_883153938051_images_10884085713.jpg",
    },
    {
        "id": 71905113,
        "title": "Кеды Puma Smash Wns v2 L 36520811 38 24 см Ментоловые (4060978765185)",
        "price": "1393",
        "old_price": "1990",
        "price_pcs": "53.37",
        "href": "http://rozetka.com.ua/puma_4060978765185/p71905113/",
        "image_main": "https://i1.rozetka.ua/goods/12061418/puma_4060978765185_images_12061418226.jpg",
    },
    {
        "id": 68524227,
        "title": "Кроссовки Nike Wmns Renew Arena AJ5909-601 37 (7) 24 см (885176692835)",
        "price": "1999",
        "old_price": "2679",
        "price_pcs": "76.59",
        "href": "https://rozetka.com.ua/nike_885176692835/p68524227/",
        "image_main": "https://i2.rozetka.ua/goods/10269537/nike_885176692835_images_10269537045.jpg",
    },
    {
        "id": 68523525,
        "title": "Кроссовки Nike W In-Season Tr 8 AA7773-602 40 (9.5) 26.5 см (886061321922)",
        "price": "1899",
        "old_price": "2879",
        "price_pcs": "72.76",
        "href": "https://rozetka.com.ua/nike_886061321922/p68523525/",
        "image_main": "https://i1.rozetka.ua/goods/10269505/nike_886061321922_images_10269505095.jpg",
    },
    {
        "id": 71417470,
        "title": "Сандалии Bartek T-19187-3/1PA 33 Серо-синие",
        "price": "1399",
        "old_price": "2099",
        "price_pcs": "53.6",
        "href": "https://rozetka.com.ua/bartek_t_19187_3_1pa_33/p71417470/",
        "image_main": "https://i1.rozetka.ua/goods/10755554/bartek_t_19187_3_1pa_33_images_10755554356.jpg",
    },
    {
        "id": 69628274,
        "title": "Балетки Geox D Annytah D927ND/00085/C3001 38 (8058279841482)",
        "price": "2079",
        "old_price": "3199",
        "price_pcs": "79.66",
        "href": "https://rozetka.com.ua/geox_8058279841482/p69628274/",
        "image_main": "https://i1.rozetka.ua/goods/10503659/geox_8058279841482_images_10503659510.jpg",
    },
    {
        "id": 69651200,
        "title": "Кросівки Geox J Adalyn Girl J926BB/0AW54/C4BE8 32 (8058279760608)",
        "price": "1429",
        "old_price": "2199",
        "price_pcs": "54.75",
        "href": "https://rozetka.com.ua/ua/geox_8058279760608/p69651200/",
        "image_main": "https://i2.rozetka.ua/goods/10504174/geox_8058279760608_images_10504174628.jpg",
    },
    {
        "id": 72103881,
        "title": "Кроссовки New Balance 996 WR996YD 37 (7.5) 24.5 см (192662835387)",
        "price": "1699",
        "old_price": "3099",
        "price_pcs": "65.1",
        "href": "https://rozetka.com.ua/new_balance_192662835387/p72103881/",
        "image_main": "https://i2.rozetka.ua/goods/11031833/new_balance_192662835387_images_11031833511.jpg",
    },
    {
        "id": 75293880,
        "title": "Босоножки Caprice Капр-9/9-28309/22-926 208 38 Silver Shin.Su",
        "price": "1599",
        "old_price": "2299",
        "price_pcs": "61.26",
        "href": "https://rozetka.com.ua/caprice_kapr_9_9_28309_22_926_208_silver_shin_su_9_191_38/p75293880/",
        "image_main": "https://i2.rozetka.ua/goods/11307950/caprice_kapr_9_9_28309_22_926_208_silver_shin_su_9_191_38_images_11307950070.jpg",
    },
    {
        "id": 89161767,
        "title": "Сандалии Tom.M 3585C 24 15.5 см Синие (2000000318639)",
        "price": "319",
        "old_price": "478",
        "price_pcs": "12.22",
        "href": "https://rozetka.com.ua/tom_m_2000000318639/p89161767/",
        "image_main": "https://i2.rozetka.ua/goods/12378053/tom_m_2000000318639_images_12378053822.jpg",
    },
    {
        "id": 69556034,
        "title": "Кеды Adidas Superstar C77124 47.5 29.3 см Ftwwht/Cblack/Ftwwht (4055012255999)",
        "price": "2008",
        "old_price": "3090",
        "price_pcs": "76.93",
        "href": "https://rozetka.com.ua/adidas_4055012255999/p69556034/",
        "image_main": "https://i2.rozetka.ua/goods/10656988/adidas_4055012255999_images_10656988904.jpg",
    },
    {
        "id": 87778588,
        "title": "Кроссовки Puma 365 FF 3 CT 104913 03 44 28.5 см Зеленые (4059506454547)",
        "price": "2199",
        "old_price": "0",
        "price_pcs": "84.25",
        "href": "http://rozetka.com.ua/puma_4059506454547/p87778588/",
        "image_main": "https://i1.rozetka.ua/goods/12177432/puma_4059506454547_images_12177432904.jpg",
    },
    {
        "id": 46446336,
        "title": "Кеды ECCO S7 Teen 780172 (01303) 35 (809704498072)",
        "price": "1519",
        "old_price": "2999",
        "price_pcs": "58.2",
        "href": "https://rozetka.com.ua/ecco_809704498072/p46446336/",
        "image_main": "https://i1.rozetka.ua/goods/6155216/ecco_809704498072_images_6155216168.jpg",
    },
    {
        "id": 87435922,
        "title": "Балетки Primigi 3418633 27 Серебристый/Белый (3418633270269)",
        "price": "869",
        "old_price": "1091",
        "price_pcs": "33.3",
        "href": "https://rozetka.com.ua/primigi_3418633270269/p87435922/",
        "image_main": "https://i2.rozetka.ua/goods/12154633/primigi_3418633270269_images_12154633312.jpg",
    },
    {
        "id": 87664312,
        "title": "Кеды Timberland TB0A245ZA45 (4) 36 (192824281656)",
        "price": "949",
        "old_price": "1599",
        "price_pcs": "36.36",
        "href": "https://rozetka.com.ua/timberland_192824281656/p87664312/",
        "image_main": "https://i1.rozetka.ua/goods/12191660/timberland_192824281656_images_12191660931.jpg",
    }
]
let removeElement = (store, el) => {
    return store.filter(function (item) {
        return item.id !== el.id;
    });
};

const productReducer = (store = initialState, action) => {
    const product = action.product;
    switch (action.type) {
        case REMOVE_ELEMENT: {
            store = removeElement(store, product);
        };
        case TO_WILL_BUY: {
            product.inCart = true;
            return Object.values({
                ...store,
                [action.index]: product
            });
        };
        case REMOVE_TO_WILL_BUY: {
            product.inCart = false;
            return Object.values({
                ...store,
                [action.index]: product
            });

        };

        case ADD_NEW_PRODUCT: {

        }

        default :
            return store;
    }
}

//let removeEl = (product) =>  {type: REMOVE_ELEMENT, product};
//let addToCard = () => {type: TO_WILL_BUY, product: data.product, index:data.index}

export default productReducer;