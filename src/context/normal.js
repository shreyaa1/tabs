import React from "react";


const Name = ({ data }) => {
    return <p>hello {data.name}</p>
}


const Card = ({ data }) => {
    return <Name data={data} />
}

const Block = ({ data }) => {
    return <Card data={data} />
}

export const Page = () => {
    const data = {
        color: '#333',
        name: 'context API'
    }
    return <Block data={data} />
}

