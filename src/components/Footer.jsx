import React from 'react';
import { deepMemo } from '@hooks';

const Footer = () => (
    <footer>
        <p>Copyright © {new Date().getFullYear()} American Plan. All rights</p>
    </footer>
);

export default deepMemo(Footer);
