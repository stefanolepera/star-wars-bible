import { SCROLL_TRIGGER_PERC } from '../constants/Settings';

export const shouldLoadMore = (scrollElement, hasNext, isLoading) =>
    hasReachThreshold(scrollElement) && hasNext && !isLoading;

export const hasReachThreshold = scrollElement =>
    (window.innerHeight + scrollElement.target.documentElement.scrollTop)
        / scrollElement.target.documentElement.scrollHeight
        > (SCROLL_TRIGGER_PERC / 100);