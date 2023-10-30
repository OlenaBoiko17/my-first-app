import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "О нас",
        link: "/",
    },

    {
        id: nanoid(),
        text: "Расписание и оплата",
        link: "/payment",
    },

    {
        id: nanoid(),
        text: "Мероприятия",
        link: "/events",
    },

    {
        id: nanoid(),
        text: "Экзамены",
        link: "/exams",
    },

    {
        id: nanoid(),
        text: "Обучение в испании",
        link: "/education",
    },

    {
        id: nanoid(),
        text: "Новости",
        link: "/new",
    },

    {
        id: nanoid(),
        text: "Фотогалерея",
        link: "/photo-gallery",
    },

    {
        id: nanoid(),
        text: "Контакты",
        link: "/contacts",
    },

    {
        id: nanoid(),
        text: "Отзывы",
        link: "/reviews",
    },
]

export default items;