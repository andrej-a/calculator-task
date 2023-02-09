import { DEFAULT_DISPLAY_VALUE } from '@/constants';

const deleteLastItem = display => {
    let copy = display;
    copy = copy.trim();
    return copy.length > 1 ? copy.slice(0, copy.length - 1) : DEFAULT_DISPLAY_VALUE;
};
 export default deleteLastItem;
