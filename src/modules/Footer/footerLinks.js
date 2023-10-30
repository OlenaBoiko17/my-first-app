import { nanoid } from "nanoid";

import Vk from '../../Images/icon.svg';
import Youtube from '../../Images/icon.svg';
import Vector from '../../Images/icon.svg';
import Wechat from '../../Images/icon.svg';

const links = [
    {
        id: nanoid(),
        way: '*' ,
        svg: `${Vk}#icon-vk`,
    },

    {
        id: nanoid(),
        way: '*' ,
        svg: `${Youtube}#icon-youtube`,
    },

    {
        id: nanoid(),
        way: '*' ,
        svg: `${Vector}#icon-Vector`,
    },

    {
        id: nanoid(),
        way: '*' ,
        svg: `${Wechat}#icon-bi_wechat`,
    }
]

export default links;