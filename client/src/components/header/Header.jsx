import './header.css';
import headerImage from '../../images/1 n6ZgCIOLBrSiarUv6b8ENw.jpeg';


export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={headerImage} alt="" />
        </div>
    )
}
