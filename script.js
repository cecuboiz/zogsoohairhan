let cart = {};
let menuItems = [];
let currentLang = 'mn';

const translations = {
    mn: {
        logoText: "ЗОГСОО ХАЙРХАН",
        subText: "Зоогийн газар",
        menuTitle: "🍴 Манай Цэс",
        cartTitle: "🛒 Таны сагс",
        emptyCartText: "Сагс хоосон байна",
        clearCartText: "Сагс хоослох",
        viewCartText: "Сагс харах",
        totalText: "Нийт",
        comingSoonMsg: "Тун удахгүй...",
        addToCart: "Сагслах",
        addedToCart: "✔ Нэмэгдлээ",
        currency: "₮",
        footerPhone: "Утас",
        footerSchedule: "Цагийн хуваарь",
        categories: {
            "1-р хоол": "1-р хоол (Шөл)", "2-р хоол": "2-р хоол (Үндсэн)", "Захиалгат хоол": "Захиалгат хоол",
            "Зууш, Ширхэгийн хоол": "Зууш, Ширхэгийн хоол", "Уух зүйл": "Уух зүйлс", "Салат": "Салатууд",
            "Багц хоол": "Багц хоол"
        },
        items: {
            "Хавиргатай шөл": "Хавиргатай шөл", "Битүү шөл": "Битүү шөл", "Хууцай": "Хууцай", "Махан цуглуулга": "Махан цуглуулга", "Тактуритан": "Тактуритан",
            "5 цул шөл": "5 цул шөл", "Гурилтай шөл": "Гурилтай шөл", "Банштай хар шөл": "Банштай хар шөл", "Банштай цай": "Банштай цай", "Чанадаг гоймон": "Чанадаг гоймон",
            "Ногоотой шөл": "Ногоотой шөл", "Хөц будаатай шөл": "Хөц будаатай шөл",
            "Шарсан мах": "Шарсан мах", "Мантуутай гахайн мах": "Мантуутай гахайн мах", "Соустай тахиан мөч": "Соустай тахиан мөч", "Калбижим": "Калбижим",
            "Өндөгтэй хуурга": "Өндөгтэй хуурга", "Жигнэсэн ногоотой мах": "Жигнэсэн ногоотой мах", "Гуляш": "Гуляш", "Өндөгтэй бифштекс": "Өндөгтэй бифштекс",
            "Шаржигнуур тахиа": "Шаржигнуур тахиа", "Төмсний хучмал": "Төмсний хучмал", "Цуйван": "Цуйван", "Соустай тахиан махан ороомог": "Соустай тахиан махан ороомог",
            "Кимчитэй шөл": "Кимчитэй шөл", "Хавиргатай цуйван": "Хавиргатай цуйван", "Өвчүүтэй цуйван": "Өвчүүтэй цуйван", "Өндөгтэй цуйван": "Өндөгтэй цуйван",
            "Таван цулын хуушуур": "Таван цулын хуушуур", "Будаатай хуурга": "Будаатай хуурга", "Пүнтүүзтэй хуурга": "Пүнтүүзтэй хуурга", "Зраз": "Зраз", "Тефтель": "Тефтель",
            "Пирошки": "Пирошки", "Мантуун бууз": "Мантуун бууз", "Дугуй хуушуур": "Дугуй хуушуур", "Хавчуурга": "Хавчуурга", "Хуушуур": "Хуушуур", "Бууз": "Бууз",
            "Сүүтэй цай": "Сүүтэй цай", "Үзмэний шүүс": "Үзмэний шүүс",
            "Нийслэл салат": "Нийслэл салат", "Өндөгний салат": "Өндөгний салат", "Луувангийн салат": "Луувангийн салат", "Байцааны салат": "Байцааны салат",
            "Хүрэн манжингийн салат": "Хүрэн манжингийн салат", "Цоо байцааны салат": "Цоо байцааны салат",
            "Монгол багц": "Монгол багц", "2 хүний багц": "2 хүний багц", "3-4 хүний багц": "3-4 хүний багц", "5-6 хүний багц": "5-6 хүний багц",
            "7-8 хүний багц": "7-8 хүний багц", "8-9 хүний багц": "8-9 хүний багц", "9-10 хүний багц": "9-10 хүний багц"
        }
    },
    en: {
        logoText: "ZOGSOO KHAIRKHAN",
        subText: "Restaurant",
        menuTitle: "🍴 Our Menu",
        cartTitle: "🛒 Your Cart",
        emptyCartText: "Cart is empty",
        clearCartText: "Clear Cart",
        viewCartText: "View Cart",
        totalText: "Total",
        comingSoonMsg: "Coming soon...",
        addToCart: "Add",
        addedToCart: "✔ Added",
        currency: "MNT",
        footerPhone: "Phone",
        footerSchedule: "Opening Hours",
        categories: {
            "1-р хоол": "Soups", "2-р хоол": "Main Courses", "Захиалгат хоол": "Special Orders",
            "Зууш, Ширхэгийн хоол": "Snacks & Pastries", "Уух зүйл": "Drinks", "Салат": "Salads",
            "Багц хоол": "Set Meals"
        },
        items: {
            "Хавиргатай шөл": "Rib Soup", "Битүү шөл": "Sealed Meat Bowl", "Хууцай": "Huitsai Meat Soup", "Махан цуглуулга": "Meat Assortment", "Тактуритан": "Dakdoritang (Spicy Chicken Stew)",
            "5 цул шөл": "5 Organ Soup", "Гурилтай шөл": "Noodle Soup", "Банштай хар шөл": "Dumpling Dark Soup", "Банштай цай": "Milk Tea with Dumplings", "Чанадаг гоймон": "Boiled Noodles",
            "Ногоотой шөл": "Vegetable Soup", "Хөц будаатай шөл": "Barley Soup",
            "Шарсан мах": "Roasted Meat", "Мантуутай гахайн мах": "Pork with Mantou", "Соустай тахиан мөч": "Saucy Chicken Legs", "Калбижим": "Galbijjim (Braised Short Ribs)",
            "Өндөгтэй хуурга": "Stir-fry with Egg", "Жигнэсэн ногоотой мах": "Steamed Meat with Veggies", "Гуляш": "Goulash", "Өндөгтэй бифштекс": "Beefsteak with Egg",
            "Шаржигнуур тахиа": "Crispy Chicken", "Төмсний хучмал": "Mashed Potato Meat Pie", "Цуйван": "Tsuivan (Fried Noodles)", "Соустай тахиан махан ороомог": "Chicken Roll in Sauce",
            "Кимчитэй шөл": "Kimchi Stew", "Хавиргатай цуйван": "Ribs & Tsuivan", "Өвчүүтэй цуйван": "Brisket Tsuivan", "Өндөгтэй цуйван": "Tsuivan with Egg",
            "Таван цулын хуушуур": "5 Organ Huushuur", "Будаатай хуурга": "Stir-fry with Rice", "Пүнтүүзтэй хуурга": "Stir-fry with Glass Noodles", "Зраз": "Zrazy", "Тефтель": "Meatballs",
            "Пирошки": "Pirozhki", "Мантуун бууз": "Mantou Buuz", "Дугуй хуушуур": "Round Huushuur", "Хавчуурга": "Sandwich/Burger", "Хуушуур": "Huushuur", "Бууз": "Buuz (Dumplings)",
            "Сүүтэй цай": "Milk Tea", "Үзмэний шүүс": "Raisin Juice",
            "Нийслэл салат": "Capital Salad", "Өндөгний салат": "Egg Salad", "Луувангийн салат": "Carrot Salad", "Байцааны салат": "Cabbage Salad",
            "Хүрэн манжингийн салат": "Beetroot Salad", "Цоо байцааны салат": "Spicy Cabbage Salad",
            "Монгол багц": "Mongolian Set", "2 хүний багц": "Set for 2 People", "3-4 хүний багц": "Set for 3-4 People", "5-6 хүний багц": "Set for 5-6 People",
            "7-8 хүний багц": "Set for 7-8 People", "8-9 хүний багц": "Set for 8-9 People", "9-10 хүний багц": "Set for 9-10 People"
        }
    },
    ru: {
        logoText: "ЗОГСОО ХАЙРХАН",
        subText: "Ресторан",
        menuTitle: "🍴 Наше меню",
        cartTitle: "🛒 Ваша корзина",
        emptyCartText: "Корзина пуста",
        clearCartText: "Очистить корзину",
        viewCartText: "Корзина",
        totalText: "Итого",
        comingSoonMsg: "Скоро...",
        addToCart: "В корзину",
        addedToCart: "✔ Добавлено",
        currency: "₮",
        footerPhone: "Телефон",
        footerSchedule: "Режим работы",
        categories: {
            "1-р хоол": "Супы", "2-р хоол": "Вторые блюда", "Захиалгат хоол": "Блюда на заказ",
            "Зууш, Ширхэгийн хоол": "Закуски и выпечка", "Уух зүйл": "Напитки", "Салат": "Салаты",
            "Багц хоол": "Семейные наборы"
        },
        items: {
            "Хавиргатай шөл": "Суп с ребрышками", "Битүү шөл": "Мясо в горшочке", "Хууцай": "Суп Хуйцай", "Махан цуглуулга": "Мясное ассорти", "Тактуритан": "Тактуритан (Острое рагу)",
            "5 цул шөл": "Суп из 5 потрохов", "Гурилтай шөл": "Суп с лапшой", "Банштай хар шөл": "Темный суп с пельменями", "Банштай цай": "Чай с пельменями", "Чанадаг гоймон": "Вареная лапша",
            "Ногоотой шөл": "Овощной суп", "Хөц будаатай шөл": "Перловый суп",
            "Шарсан мах": "Жареное мясо", "Мантуутай гахайн мах": "Свинина с пампушками", "Соустай тахиан мөч": "Куриные ножки в соусе", "Калбижим": "Гальбичжим (тушеные ребра)",
            "Өндөгтэй хуурга": "Жаркое с яйцом", "Жигнэсэн ногоотой мах": "Тушеное мясо с овощами", "Гуляш": "Гуляш", "Өндөгтэй бифштекс": "Бифштекс с яйцом",
            "Шаржигнуур тахиа": "Хрустящая курица", "Төмсний хучмал": "Картофельная запеканка с мясом", "Цуйван": "Цуйван (жареная лапша)", "Соустай тахиан махан ороомог": "Куриный рулет в соусе",
            "Кимчитэй шөл": "Суп Кимчи", "Хавиргатай цуйван": "Цуйван с ребрышками", "Өвчүүтэй цуйван": "Цуйван с грудинкой", "Өндөгтэй цуйван": "Цуйван с яйцом",
            "Таван цулын хуушуур": "Хушур из 5 потрохов", "Будаатай хуурга": "Жаркое с рисом", "Пүнтүүзтэй хуурга": "Жаркое с фунчозой", "Зраз": "Зразы", "Тефтель": "Тефтели",
            "Пирошки": "Пирожки", "Мантуун бууз": "Мантуун бууз", "Дугуй хуушуур": "Круглый Хушур", "Хавчуурга": "Сэндвич/Бургер", "Хуушуур": "Хушур", "Бууз": "Позы (Бууз)",
            "Сүүтэй цай": "Чай с молоком", "Үзмэний шүүс": "Компот из изюма",
            "Нийслэл салат": "Салат Оливье", "Өндөгний салат": "Яичный салат", "Луувангийн салат": "Морковный салат", "Байцааны салат": "Салат из капусьты",
            "Хүрэн манжингийн салат": "Свекольный салат", "Цоо байцааны салат": "Острый капустный салат",
            "Монгол багц": "Монгольский сет", "2 хүний багц": "Набор на 2 человека", "3-4 хүний багц": "Набор на 3-4 человека", "5-6 хүний багц": "Набор на 5-6 человека",
            "7-8 хүний багц": "Набор на 7-8 человека", "8-9 хүний багц": "Набор на 8-9 человека", "9-10 хүний багц": "Набор на 9-10 человека"
        }
    }
};

const fullMenuData = [
    // 1-р хоол (Шөл)
    { id: 1, category: "1-р хоол", name: "Хавиргатай шөл", price: 15000, image_url: "images/хавиргатай шөл.webp" },
    { id: 2, category: "1-р хоол", name: "Битүү шөл", price: 14000, image_url: "images/битүү шөл.png" },
    { id: 3, category: "1-р хоол", name: "Хууцай", price: 15000, image_url: "images/хууцай.webp" },
    { id: 5, category: "1-р хоол", name: "Тактуритан", price: 16000, image_url: "images/Тактуритан.webp" },
    { id: 6, category: "1-р хоол", name: "5 цул шөл", price: 14000, image_url: "images/5 цул шөл.webp" },
    { id: 7, category: "1-р хоол", name: "Гурилтай шөл", price: 14000, image_url: "images/Гурилтай шөл.webp" },
    { id: 8, category: "1-р хоол", name: "Банштай хар шөл", price: 14000, image_url: "images/Банштай хар шөл.webp" },
    { id: 9, category: "1-р хоол", name: "Банштай цай", price: 14000, image_url: "images/Банштай цай.webp" },
    { id: 10, category: "1-р хоол", name: "Чанадаг гоймон", price: 6000, image_url: "images/Чанадаг гоймон.webp" },
    { id: 11, category: "1-р хоол", name: "Ногоотой шөл", price: 14000, image_url: "images/Ногоотой шөл.webp" },
    { id: 12, category: "1-р хоол", name: "Хөц будаатай шөл", price: 14000, image_url: "images/Хөц будаатай шөл.webp" },

    // 2-р хоол (Үндсэн)
    { id: 4, category: "2-р хоол", name: "Махан цуглуулга", price: 25000, image_url: "images/махны цуглуулга.jpeg" },
    { id: 13, category: "2-р хоол", name: "Шарсан мах", price: 17000, image_url: "images/Шарсан мах.webp" },
    { id: 14, category: "2-р хоол", name: "Мантуутай гахайн мах", price: 16000, image_url: "images/Мантуутай гахайн мах.webp" },
    { id: 15, category: "2-р хоол", name: "Соустай тахиан мөч", price: 14000, image_url: "images/тахианы мөч.jpeg" },
    { id: 16, category: "2-р хоол", name: "Калбижим", price: 17000, image_url: "images/Калбижим.webp" },
    { id: 17, category: "2-р хоол", name: "Өндөгтэй хуурга", price: 17000, image_url: "images/Өндөгтэй хуурга.webp" },
    { id: 18, category: "2-р хоол", name: "Жигнэсэн ногоотой мах", price: 15000, image_url: "images/Жигнэсэн ногоотой мах.png" },
    { id: 19, category: "2-р хоол", name: "Гуляш", price: 15000, image_url: "images/гульяш.jpeg" },
    { id: 20, category: "2-р хоол", name: "Өндөгтэй бифштекс", price: 15000, image_url: "images/өндөгтэй беб.jpeg" },
    { id: 21, category: "2-р хоол", name: "Шаржигнуур тахиа", price: 14000, image_url: "images/шаржигнуур тахиа.jpeg" },
    { id: 22, category: "2-р хоол", name: "Төмсний хучмал", price: 14000, image_url: "images/Төмсний хучмал.webp" },
    { id: 23, category: "2-р хоол", name: "Цуйван", price: 15000, image_url: "images/цуйван.png" },
    { id: 24, category: "2-р хоол", name: "Соустай тахиан махан ороомог", price: 15000, image_url: "images/Соустай тахиан махан ороомог.webp" },

    // Захиалгат хоол
    { id: 25, category: "Захиалгат хоол", name: "Тактуритан", price: 16000, image_url: "images/Тактуритан.webp" },
    { id: 26, category: "Захиалгат хоол", name: "Кимчитэй шөл", price: 15000, image_url: "images/Кимчитэй шөл.webp" },
    { id: 27, category: "Захиалгат хоол", name: "Хавиргатай цуйван", price: 16000, image_url: "images/Хавиргатай цуйван.webp" },
    { id: 28, category: "Захиалгат хоол", name: "Өвчүүтэй цуйван", price: 17000, image_url: "images/Өвчүүтэй цуйван.webp" },
    { id: 29, category: "Захиалгат хоол", name: "Өндөгтэй цуйван", price: 16000, image_url: "images/Өндөгтэй цуйван.png" },
    { id: 30, category: "Захиалгат хоол", name: "Таван цулын хуушуур", price: 2300, image_url: "images/Таван цулын хуушуур.webp" },
    { id: 31, category: "Захиалгат хоол", name: "Будаатай хуурга", price: 14000, image_url: "images/Будаатай хуурга.webp" },
    { id: 32, category: "Захиалгат хоол", name: "Пүнтүүзтэй хуурга", price: 14000, image_url: "images/Пүнтүүзтэй хуурга.webp" },
    { id: 33, category: "Захиалгат хоол", name: "Зраз", price: 14000, image_url: "images/Зраз.webp" },
    { id: 34, category: "Захиалгат хоол", name: "Тефтель", price: 14000, image_url: "images/Тефтель.webp" },

    // Зууш, Ширхэгийн хоол 
    { id: 35, category: "Зууш, Ширхэгийн хоол", name: "Пирошки", price: 2300, image_url: "images/пирошки.jpeg" },
    { id: 36, category: "Зууш, Ширхэгийн хоол", name: "Мантуун бууз", price: 2300, image_url: "images/Мантуун бууз.png" },
    { id: 37, category: "Зууш, Ширхэгийн хоол", name: "Дугуй хуушуур", price: 2500, image_url: "images/Дугуй хуушуур.webp" },
    { id: 38, category: "Зууш, Ширхэгийн хоол", name: "Хавчуурга", price: 3500, image_url: "images/хавчуурга.jpeg" },
    { id: 39, category: "Зууш, Ширхэгийн хоол", name: "Хуушуур", price: 2300, image_url: "images/хуушуур.jpeg" },
    { id: 40, category: "Зууш, Ширхэгийн хоол", name: "Бууз", price: 2300, image_url: "images/Бууз.webp" },

    // Уух зүйлс
    { id: 41, category: "Уух зүйл", name: "Сүүтэй цай", price: 600, image_url: "images/Сүүтэй цай.webp" },
    { id: 42, category: "Уух зүйл", name: "Үзмэний шүүс", price: 1000, image_url: "images/Үзмэний шүүс.webp" },

    // Салатууд
    { id: 43, category: "Салат", name: "Нийслэл салат", price: 6000, image_url: "images/Нийслэл салат.webp" },
    { id: 44, category: "Салат", name: "Өндөгний салат", price: 6000, image_url: "images/Өндөгний Салат.webp" },
    { id: 45, category: "Салат", name: "Луувангийн салат", price: 6000, image_url: "images/Луувангийн салат 2.png" },
    { id: 46, category: "Салат", name: "Байцааны салат", price: 6000, image_url: "images/Байцааны салат.webp" },
    { id: 47, category: "Салат", name: "Хүрэн манжингийн салат", price: 6000, image_url: "images/Хүрэн манжингийн салат.webp" },
    { id: 48, category: "Салат", name: "Цоо байцааны салат", price: 6000, image_url: "images/Цоо байцааны салат.webp" },

    // Багц хоол
    { id: 49, category: "Багц хоол", name: "Монгол багц", price: 35000, image_url: "images/Монгол багц.png" },
    { id: 50, category: "Багц хоол", name: "2 хүний багц", price: 35000, image_url: "images/bagts hool.jpeg" },
    { id: 51, category: "Багц хоол", name: "3-4 хүний багц", price: 45000, image_url: "images/3-4 хүний багц.png" },
    { id: 52, category: "Багц хоол", name: "5-6 хүний багц", price: 65000, image_url: "images/bagts hool.jpeg" },
    { id: 53, category: "Багц хоол", name: "7-8 хүний багц", price: 75000, image_url: "images/7-8 хүний багц.jpeg" },
    { id: 54, category: "Багц хоол", name: "8-9 хүний багц", price: 100000, image_url: "images/8-9 хүний багц.jpeg" },
    { id: 55, category: "Багц хоол", name: "9-10 хүний багц", price: 120000, image_url: "images/9-10 хүний багц.png" }
];

function loadMenu() {
    // Simply copy all 50 items synchronously, removing the buggy DB fetch
    menuItems = [...fullMenuData];
    applyTranslations();
    renderMenu();
}

function renderMenu() {
    const menuDisplay = document.getElementById('menu-display');
    menuDisplay.innerHTML = '';

    // Group items by category
    const categories = {};
    menuItems.forEach(item => {
        if (!categories[item.category]) categories[item.category] = [];
        categories[item.category].push(item);
    });

    const desiredOrder = [
        "1-р хоол",
        "2-р хоол",
        "Захиалгат хоол",
        "Зууш, Ширхэгийн хоол",
        "Уух зүйл",
        "Салат",
        "Багц хоол"
    ];

    // Render each category block in the specific order
    for (const categoryName of desiredOrder) {
        if (!categories[categoryName]) continue;
        const items = categories[categoryName];

        const catTitle = translations[currentLang].categories[categoryName] || categoryName;

        // Create category wrapper
        const catWrapper = document.createElement('div');
        catWrapper.className = 'category-section';
        catWrapper.innerHTML = `<h3 class="category-title">${catTitle}</h3>`;

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        items.forEach(item => {
            const translatedName = translations[currentLang].items[item.name] || item.name;
            const encodedUrl = item.image_url ? encodeURI(item.image_url) : "";
            const imageHtml = encodedUrl ? `<img src="${encodedUrl}" alt="${translatedName}" loading="lazy">` : `<div class="placeholder-img">Зураг оруулах...</div>`;
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="menu-img">
                    ${imageHtml}
                </div>
                <div class="menu-info">
                    <h4>${translatedName}</h4>
                    <div class="menu-bottom">
                        <span class="price">${item.price.toLocaleString()} ${translations[currentLang].currency}</span>
                        <button class="btn-add" onclick="addToCart(event, ${item.id})">${translations[currentLang].addToCart}</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        catWrapper.appendChild(grid);
        menuDisplay.appendChild(catWrapper);
    }
}

function addToCart(event, id) {
    if (!cart[id]) {
        cart[id] = 1;
    } else {
        cart[id]++;
    }
    updateCartDisplay();

    if (event) {
        const btn = event.target;
        btn.innerHTML = translations[currentLang].addedToCart;
        btn.style.background = "var(--success-color)";
        setTimeout(() => {
            btn.innerHTML = translations[currentLang].addToCart;
            btn.style.background = "";
        }, 1000);
    }
}

function removeFromCart(id) {
    if (cart[id]) {
        cart[id]--;
        if (cart[id] <= 0) {
            delete cart[id];
        }
        updateCartDisplay();
    }
}

function clearCart() {
    cart = {};
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartCount = document.getElementById('cart-count');
    const totalAmount = document.getElementById('total-amount');

    cartItemsList.innerHTML = '';
    let total = 0;
    let count = 0;

    Object.keys(cart).forEach(id => {
        const item = menuItems.find(m => m.id == id);
        if (item) {
            const qty = cart[id];
            total += item.price * qty;
            count += qty;
            const translatedName = translations[currentLang].items[item.name] || item.name;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${translatedName}</div>
                    <div class="cart-item-controls">
                        <button onclick="removeFromCart(${id})">-</button>
                        <span>${qty}</span>
                        <button onclick="addToCart(null, ${id})">+</button>
                    </div>
                </div>
                <div class="cart-item-price">${(item.price * qty).toLocaleString()} ${translations[currentLang].currency}</div>
            `;
            cartItemsList.appendChild(div);
        }
    });

    if (count === 0) {
        cartItemsList.innerHTML = `<div class="empty-cart" id="empty-cart-text">${translations[currentLang].emptyCartText}</div>`;
    } else {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'btn-clear-cart';
        clearBtn.innerText = translations[currentLang].clearCartText;
        clearBtn.onclick = clearCart;
        cartItemsList.appendChild(clearBtn);
    }

    cartCount.innerText = count;
    totalAmount.innerText = total.toLocaleString();
}

function toggleCart() {
    const window = document.getElementById('cart-window');
    window.classList.toggle('active');
}

function toggleContact() {
    const sidebar = document.getElementById('contact-sidebar');
    sidebar.classList.toggle('active');
}

function processOrder() {
    if (Object.keys(cart).length === 0) {
        alert(translations[currentLang].cartEmptyAlert);
        return;
    }
    alert(translations[currentLang].comingSoonMsg);
}

function changeLanguage(lang) {
    currentLang = lang;
    applyTranslations();
    renderMenu();
    updateCartDisplay();
}

function applyTranslations() {
    const t = translations[currentLang];
    document.getElementById('logo-text').innerText = t.logoText;
    document.getElementById('sub-text').innerText = t.subText;
    document.getElementById('menu-title').innerText = t.menuTitle;
    document.getElementById('cart-title').innerText = t.cartTitle;
    document.getElementById('total-text').innerText = t.totalText;
    document.getElementById('coming-soon-msg').innerText = t.comingSoonMsg;
    //document.getElementById('footer-contact').innerText = t.footerContact;
    document.getElementById('footer-phone').innerText = t.footerPhone;
    document.getElementById('footer-schedule').innerText = t.footerSchedule;
}

document.addEventListener('DOMContentLoaded', loadMenu);
