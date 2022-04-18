import React, {useState} from 'react';
import style from "./Project.module.scss";

type PropsType = {
    id: number
    style: { backgroundImage: string }
    title: string
    description: string
    link: string
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
            <a
                className={style.projectImg + " " + (pointImg ? style.onPointImgEnter : style.onPointImgLeave)}
                style={props.style}
                onPointerEnter={() => onPointerImgHandler(true)}
                onPointerLeave={() => onPointerImgHandler(false)}
                href={props.link}
            >
            </a>
            <div className={style.projectText}>
                <a className={style.projectHeader + " " + (point ? style.onPoint : "")}
                   href={props.link}
                >{props.title}</a>
                <div className={style.projectDescription}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;