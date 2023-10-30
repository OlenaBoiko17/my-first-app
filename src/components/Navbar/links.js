import { nanoid } from "nanoid";

import Location from '../../Images/icon.svg';
import Phone from '../../Images/icon.svg';
import Mail from '../../Images/icon.svg';


const links = [
    {
        id: nanoid(),
        way: "https://goo.gl/maps/vYvxeMxNvstTwFof8",
        svg: `${Location}#icon-location`,
        contact: "Лиговский пр. 133 Е"
    },

    {
        id: nanoid(),
        way: "tel:+79111234567",
        svg: `${Phone}#icon-phone`,
        contact: "+7 (911) 123-45-67"
    },

    {
        id: nanoid(),
        way: "mailto:lavita_school@gmail.com" ,
        svg: `${Mail}#icon-mail`,
        contact: " lavita_school@gmail.com"
    }
]

export default links;

