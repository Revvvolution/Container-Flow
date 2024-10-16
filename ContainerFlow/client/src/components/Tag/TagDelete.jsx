import React from "react";
import { deleteTag } from "../../services/TagService.jsx";

export const TagDelete = (tag) => {
        if (window.confirm(`Would you like to delete this Tag?\nName: ${tag.name}`)) {
            deleteTag(tag.id).then(() => {
                window.alert("Successfully deleted tag.");
                window.location.reload();
        });
        } else return;
};