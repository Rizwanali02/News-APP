import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl,publishedAt,author } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://bilder2.n-tv.de/img/incoming/crop24499957/7131322784-cImg_16_9-w1200/sh02004-011-Lotus-Alpha-78Front-Comp12-RBN-FinalArt-Lotus.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{author}</p>
                        <p className="card-text">{"Publish : "+publishedAt}</p>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem