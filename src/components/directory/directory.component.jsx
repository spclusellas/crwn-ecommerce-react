import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selector";

import "./directory.styles.scss";

const Directory = () => {
    const sections = useSelector(selectSections);

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>
    );
};

export default Directory;
