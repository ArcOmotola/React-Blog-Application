import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import sideImg from '../../images/priscilla-du-preez-G9eNtqRDupM-unsplash.jpg';
import axios from 'axios';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img src={sideImg} alt="" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
                    delectus omnis quos dolorem similique eligendi, distinctio doloribus.
                </p>
            </div>  
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORY</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="Link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link> 
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                    <div className="sidebarTitle">FOLLOW US</div>
                    <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    </div>
            </div>
        </div>
    )
}
