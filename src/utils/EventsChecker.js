import { SCROLL_TRIGGER_PERC } from '../constants/Settings';

export const hasReachThreshold = (doc, hasNext, isLoading) =>
    (window.innerHeight + doc.target.documentElement.scrollTop)
        / doc.target.documentElement.offsetHeight
        > (SCROLL_TRIGGER_PERC / 100)
        && hasNext 
        && !isLoading;
