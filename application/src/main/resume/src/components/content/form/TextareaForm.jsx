import React from "react";

export const TextareaForm = ({input, meta, ...props}) => {

    if (props.editable) {
        return (
            <div>
                <div>
                    <p1>Введите основной текст</p1>
                </div>
                <textarea {...input} {...props} />
            </div>
        )
    }
    return (
        <div>
            <p>{input.value}</p>
        </div>
    )

};