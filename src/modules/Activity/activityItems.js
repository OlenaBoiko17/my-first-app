import { nanoid } from "nanoid";

import img from '../../Images/img/img5.jpg';
import img2 from '../../Images/img/img6.jpg';
import img3 from '../../Images/img/img7.jpg';


const items = [
    {
        id: nanoid(),
        img: img,
        caption: 'Sed sem vulputate habitant quis eu, vitae quis porttitor augue.',
        text: 'Elementum, sed viverra volutpat nam lacus egestas. Scelerisque quisque egestas maecenas fermentum semper auctor massa tincidunt. Tristique pulvinar commodo fermentum neque. Elementum tortor.'
    },

    {
        id: nanoid(),
        img: img2,
        caption: 'Magna rhoncus facilisi aliquam odio tempus. Non felis cras.',
        text: 'Tempus libero commodo velit ut aliquam. Sagittis, tristique porttitor platea eu imperdiet interdum cras. Hac blandit sed integer nibh diam in lacus ac. Congue nibh id rhoncus tincidunt imperdiet.'
    },

    {
        id: nanoid(),
        img: img3,
        caption: 'Id adipiscing aliquet erat mattis. Cursus metus malesuada congue.',
        text: 'Dis non mauris placerat in dictum ullamcorper adipiscing morbi dignissim. Commodo dolor ornare nibh sed pretium tellus. Urna, imperdiet id ac venenatis erat mattis risus, molestie. Felis porta.'
    },

]

export default items;