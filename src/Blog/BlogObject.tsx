import styled from 'styled-components'

interface BlogObj {
    text: string,
    time: string,
    title: string

}


export default function BlogObject(props: BlogObj){
    const text = props.text
    const time = props.time
    const title = props.title

    return (
        <>
            <h1>{title}</h1>
            <p>{time}</p>
            <text>{text}</text>
        </>
    )
}


