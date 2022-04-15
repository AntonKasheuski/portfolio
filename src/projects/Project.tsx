import React, {useState} from 'react';
import style from "./Project.module.css";

type PropsType = {
    id: number
    style: { backgroundImage: string }
    title: string
    description: string
}

const Project = (props: PropsType) => {
    const [point, setPoint] = useState(false)
    const [pointImg, setPointImg] = useState(false)

    const onPointerHandler = (value: boolean) => {
        setPoint(value)
    }
    const onPointerImgHandler = (value: boolean) => {
        setPointImg(value)
    }

    return (
        <div className={style.projectBlock}
             onPointerEnter={() => onPointerHandler(true)}
             onPointerLeave={() => onPointerHandler(false)}
        >
            <div
                className={style.projectImg + " " + (pointImg ? style.onPointImgEnter : style.onPointImgLeave)}
                style={props.style}
                onPointerEnter={() => onPointerImgHandler(true)}
                onPointerLeave={() => onPointerImgHandler(false)}
            >
            </div>
            <div className={style.projectText}>
                <h5 className={style.projectHeader + " " + (point ? style.onPoint : "")}>
                    <a>{props.title}</a>
                </h5>
                <div className={style.projectDescription}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;