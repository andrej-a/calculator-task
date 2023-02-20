import { MAX_LENGTH_EXPRESSION } from '@/constants';

const checkIsValueTooLong = display => display.split(' ').at(-1).length >= MAX_LENGTH_EXPRESSION;

export default checkIsValueTooLong;
