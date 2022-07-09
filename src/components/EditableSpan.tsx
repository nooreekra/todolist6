import React from "react"
import { ChangeEvent, useState } from "react"

type EditableSpanPropsType = {
    title: string 
    onChange: (newValue: string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    let [editMode, setEditeMode] = useState(false)
    let [title, setTitle] = useState("")

    const activateEditMode = () => {
        setEditeMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditeMode(false)
        props.onChange(title)
    }
    const onChangeTitleHanlder = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)   

    return editMode
        ? <input value={title} onChange={ onChangeTitleHanlder } onBlur={ activateViewMode } autoFocus />
        : <span onDoubleClick={activateEditMode}> {props.title} </span>
}

export default EditableSpan