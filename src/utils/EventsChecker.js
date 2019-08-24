import { SCROLL_TRIGGER_PERC } from '../constants/Settings';

export const hasReachThreshold = (doc, hasNext) => 
    ((window.innerHeight + doc.target.documentElement.scrollTop)
        / doc.target.documentElement.offsetHeight) 
        > (SCROLL_TRIGGER_PERC / 100) && hasNext;