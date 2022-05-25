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