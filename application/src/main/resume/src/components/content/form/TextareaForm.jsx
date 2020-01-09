import React from "react";
import s from '../main/desktop/Desktop.module.css'
import TextItem from "./items/TextItem";
import ApiHelper from "../../../api/ApiHelper";
import LinkItem from "./items/LinkItem";

export const TextareaForm = ({input, meta, ...props}) => {

    var text = document.getElementById('text');


    if (!!text) {
        text.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.keyCode === 66) {

                if (text.selectionStart !== undefined) {
                    var startPos = text.selectionStart;
                    var endPos = text.selectionEnd;
                    var selectedText = text.value.substring(startPos, endPos);
                    if (selectedText) {
                        let v = text.value.substring(0, startPos);
                        let uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11)
                            .replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));
                        // v += '<a id=' + uuid + ' href=`#` onclick=' + onClickItem + '>' + selectedText + '</a>';
                        // v += `<a id=${uuid} href='#' onclick='alert('cc')'>${selectedText}</a>`
                        v += `<LinkItem id={${uuid}} selectedText={${selectedText}}/>`
                        v += text.value.substring(endPos);
                        text.value = v;
                        ApiHelper.createHelpers(uuid);
                    }
                }
            }
        });
    }

    let createMarkUp = () => {
        return {__html: input.value}
    };



    if (props.editable) {
        return (
            <div className={s.content}>
                <div>
                    <p1>Введите основной текст</p1>
                </div>
                <textarea id='text' {...input} {...props} className={s.c_textarea}/>
            </div>
        )
    }
    return (
        <div className={s.content}>
            <pre id='text' dangerouslySetInnerHTML={createMarkUp()}>
                {/*{input.value.split(/\n/).map(value => <TextItem textValue={value}/>)}*/}
                {/*{input.value.split(/\n/).length}*/}
            </pre>
        </div>
    )

};