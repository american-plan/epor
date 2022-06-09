import { useState, useEffect, memo } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import random from 'lodash/random';

export const deepMemo = (factory, dependency) => {
    return memo(factory, (next, prev) => {
        if (isEmpty(dependency)) {
            return isEqual(next, prev);
        }
        return dependency(next, prev);
    });
};

export const on = (obj, ...args) => {
    obj.addEventListener(...args);
};

export const off = (obj, ...args) => {
    obj.removeEventListener(...args);
};

export const useScrollingUp = () => {
    let prevScroll;
    //if it is SSR then check you are now on the client and window object is available
    if (process.browser) {
        prevScroll = window.pageYOffset;
    }
    const [scrollingUp, setScrollingUp] = useState(false);
    const handleScroll = () => {
        const currScroll = window.pageYOffset;
        const isScrolled = prevScroll > currScroll;
        setScrollingUp(isScrolled);
        prevScroll = currScroll;
    };
    useEffect(() => {
        on(window, 'scroll', handleScroll, { passive: true });
        return () => {
            off(window, 'scroll', handleScroll, { passive: true });
        };
    }, []);
    return scrollingUp;
};
