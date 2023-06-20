import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./portfolio.css";

const Portfolio = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/portfolio").then(response => {
            const formattedData = response.data.data.map(item => ({
                id:item._id,
                image: item.image,
                title:item.title,
                github: item.github,
                demo: item.demo
            }));
            setData(formattedData)
        }).catch(error => {
            console.log("error fetching portfolio data:", error);
        })
    }, [])
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo})=> {
            <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt= {title} />
              <h3>{title}</h3>
              <div className=".portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>

        })}
          
          </div>
        </section>
    );
};
export default Portfolio;