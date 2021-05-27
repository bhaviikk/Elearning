import React from 'react'
import Base from './Base'

export default function Videos() {
    return (
        <Base title="videos" description="learn and enjoy">
            <h1>Group theory</h1>
            <div style={{marginTop:"2%",marginBottom:"5%"}}>
            <span>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/7ifHq5J58cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <span style={{marginLeft:"2%"}}>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/cpYaUnqKXWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <span style={{marginLeft:"2%"}}>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/eMyCqiphF18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            </div>

            <h1>Computer Networks</h1>
            <div style={{marginTop:"2%",marginBottom:"5%"}}>
            <span>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/JFF2vJaN0Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <span style={{marginLeft:"2%"}}>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/4D55Cmj2t-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <span style={{marginLeft:"2%"}}>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/GfaHdjApnhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            </div>
            
        </Base>
    )
}
