import React, { useState, useEffect } from "react";
import "braft-editor/dist/index.css";
import BraftEditor, {ImageControlType} from "braft-editor";

const maxFileSize = 10240000; //100 kb

const Default = ({ value = "", form,hi=350 }, props) => {
    const [state, seTstate] = useState(BraftEditor.createEditorState(value));

    const handleChange = (editorState) => {
        seTstate(editorState);

        form(editorState.toHTML())
        // const formData = form.getFieldsValue();
        // formData.description = editorState.toHTML();
        // form.setFieldsValue(formData);
    };

    const controls = [
        "undo",
        "redo",
        "separator",
        "font-size",
        "line-height",
        "letter-spacing",
        "separator",
        "text-color",
        "bold",
        "italic",
        "underline",
        "strike-through",
        "separator",
        "superscript",
        "subscript",
        "remove-styles",
        "emoji",
        "separator",
        "text-indent",
        "text-align",
        "separator",
        "headings",
        "list-ul",
        "list-ol",
        "blockquote",
        "code",
        "separator",
        "separator",
        "hr",
        "separator",
        "media",
        "separator",
        "clear",
    ];

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const customUpload = (props) => {
        const { file, success, error } = props;

        toBase64(file)
            .then((res) => {
                success({ url: res });
            })
            .catch((err) => {
                alert(" File upload failed");


            });
    };
    const imageControlsx = [
        'float-left',
        'float-right',
        'align-left',
        'align-center',
        'align-right',
        // Remove the 'link' control
        'size',
        'remove',
    ];
    const validateFn = (file) => {
        if (file.size > maxFileSize) {
            alert("File Should be less than 1 mb");
            return false;
        }
        return true;
    };

    return (
        <div className="w-full">
            <BraftEditor
                language="en"
                colors={["#FF0000", "#FF4500", "#FF6347", "#FF7F50", "#FF8C00", // Reds and Oranges
                    "#FFD700", "#FFFF00", "#DAA520", "#FFA500", "#FFB6C1", // Yellows and Pinks
                    "#32CD32", "#008000", "#00FF00", "#7CFC00", "#228B22", // Greens
                    "#00CED1", "#1E90FF", "#4169E1", "#0000FF", "#000080", // Blues
                    "#8A2BE2", "#800080", "#9370DB", "#4B0082", // Purples
                    "#A52A2A", "#8B4513", "#D2691E", "#CD853F", // Browns
                    "#708090", "#A9A9A9", "#808080", "#696969", "#000000", // Grays and Blacks
                    "#DCDCDC", "#D3D3D3", "#C0C0C0", "#A9A9A9", "#778899", // Light Grays
                    "#F5F5F5", "#F0F0F0", "#E6E6FA", "#D8BFD8", "#DDA0DD", // Whites and Lavenders
                    "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFE4B5", "#FFEFD5", // Beiges and Creams
                    "#F0E68C", "#BDB76B", "#8B4513", "#D2B48C", "#DEB887", // Tans and Browns
                    "#F08080", "#CD5C5C", "#FFA07A", "#FF8C69", "#E9967A", // Light Reds
                    "#48D1CC", "#20B2AA", "#00FA9A", "#7FFFD4", "#66CDAA", // Aquas and Turquoises
                    "#4682B4", "#5F9EA0", "#87CEEB", "#B0C4DE", "#87CEFA", // Sky Blues
                    "#40E0D0", "#00CED1", "#48D1CC", "#20B2AA", "#7FFFD4", // Teals and Cyan
                    "#6A5ACD", "#483D8B", "#7B68EE", "#8A2BE2", "#9400D3", // Dark Purples
                    "#C71585", "#DB7093", "#FF1493", "#FF69B4", "#FFB6C1"] }
                value={state}
                onChange={handleChange}
                // imageControls={imageControlsx}

                // media={{ uploadFn: customUpload, validateFn: validateFn }}
                className="w-full bg-dark text-white "
                contentStyle={{
                    height: hi,
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,.1)",
                }}
            />
        </div>
    );
};

export default Default;
