import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem/menuItem.jsx";

import style from '../Navigation/style.module.scss';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <div className={style.Nav}>
        <motion.ul className={style.uL} variants={variants}>
            {itemIds.map(i => (
                <MenuItem className={style.li} i={i} key={i} />
            ))}
        </motion.ul>
    </div>
);

const itemIds = [0];

