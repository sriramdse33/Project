import { Link } from 'react-router-dom';
function Article(params) {
    let li={
        1: {"img": "https://www.practostatic.com/fit/0bf14787288c6b2455eee553dc2257eff9a7ab85", "link": "https://www.practo.com/healthfeed/do-not-self-medicate-with-homoeopathy-24645/post"},
        2: {"img": "https://www.practostatic.com/fit/95ccdd3d43c98fbec9718c15c834837571f57353", "link": "https://www.practo.com/healthfeed/3-effective-exercises-for-knee-pain-on-foam-roller-31685/post"},
        3: {"img": "https://www.practostatic.com/fit/02fe2fbdf71af1a7f02c2c69eb54e5a82ce807f2", "link": "https://www.hindustantimes.com/health-and-fitness/don-t-buy-sunscreens-right-off-the-shelves-here-s-how-to-choose-right/story-7EeWpy57TJTFBSNVeyQ0PK.html"},
        4: {"img": "https://www.practostatic.com/fit/5d823ade1f6c6203fa632a938a00b8684a944125", "link": "https://www.practo.com/healthfeed/7-tips-to-avoid-varicose-veins-in-pregnancy-39552/post"},
        5: {"img": "https://www.practostatic.com/fit/6c9a9d10cd6a126c21c06330bbd6821616add679", "link": "https://www.refinery29.com/en-us/best-bodyweight-exercises-at-home-workout"},
        6: {"img": "https://www.practostatic.com/fit/bfb9854099347de9e3add0603255720d8acd96f1", "link": "https://www.practo.com/healthfeed/health-benefits-of-wheatgrass-37294/post"},
        7: {"img": "https://www.practostatic.com/fit/e9662edbf18a996db60e445933fcddf6b00f72a3", "link": "https://www.thehealthy.com/food/black-tea-benefits/"},
        8: {"img": "https://www.practostatic.com/fit/890334a3f80c3d14e9e6928a29b5b0da37c09829", "link": "https://www.practo.com/healthfeed/speed-strength-training-for-development-of-explosive-muscular-power-36118/post"},
        9: {"img": "https://www.practostatic.com/fit/54e3a216b10076bef1a3e11ceee0068b1cb1baeb", "link": "https://www.practo.com/healthfeed/homeopathic-treatment-of-allergic-rhinitis-39771/post"},
    }

    return (
<div>
    <div className="tc pa5">
        <h5 className="tc card-title fw7">Top health articles</h5>
        <p className="tc card-text">Trending tips from doctors and health experts</p>
    </div>
        <div className="card-deck pa3">
        
            <div className="card">
                <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[1]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[1]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[2]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[2]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[3]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[3]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
            
        </div>
         <div className="card-deck pa3">
         <div className="card">
         <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[4]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[4]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
         </div>
         <div className="card">
         <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[5]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[5]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
         </div>
         <div className="card">
         <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[6]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[6]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
         </div>
         
     </div>
     <div className="card-deck pa3">
            <div className="card">
            <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[7]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[7]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
            <div className="card">
            <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[8]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[8]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
            <div className="card">
            <Link className="dim black" style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: li[9]["link"] }} target="_blank">
                    <img className="card-img-top" src= {li[9]["img"]} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Do Not Self Medicate With Homoeopathy</h5>
                    <p className="card-text">DEAR READERS,
    The epidemic Dengue, Chikungunya is creating fear in our mind. It's very important to understand that SELF MEDICATION can ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
            
        </div>
     </div>

    );
}


export default Article;