import React ,{useState} from 'react'
import { Link } from "react-router-dom";

function Home() {

    const [toBuy , setToBuy] = useState(true);
    const commonLinks = [{name : 'Sheep Hair' , Databaseid: 1} ,{name : 'Yarn' , Databaseid: 2}  ];
    const Buy = [{name : 'Wool Services' , Databaseid: 3}  , {name : 'End Product' , Databaseid: 1} ]
    const Sell = [{name : 'Fabric' , Databaseid: 1} ]
  return (
    <>
    <nav>
        <h2 className='darkcolor logo'>Wooleny</h2>
        <div>
            <Link to="/products"><button>Products</button></Link>
            <a href="#"><button>About</button></a>
            <a href="#"><button>About</button></a>
            <a href="#"><button>About</button></a>
        </div>
        <div>
        <a href="#"><button>Register</button></a>
        <a href="#"><button>Login</button></a>
        </div>
    </nav>

    <div className="homeMainContent">
        <div className="leftSideContent">
            <h1>We Connect Wool <br /> Farmars To Complete <br />Wool Supply Chain</h1>
            <div class="group">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" class="input"/>
                <button>Search</button>
            </div>
        </div>
    </div>

    <section className="Quicklinks">

        <div className="toggleBuyOrSell">

        </div>


        <div className='AllQuickLinks'>
        {commonLinks.map((element , index)=>{
            return (
                <Link to={`products/${element.Databaseid}`} className='link'>
                <div id={element.Databaseid} className='Quicklinkdiv'>
                    <h4>{element.name}</h4>
                </div>
                </Link>   
            )
        })}

        {toBuy ? 
        Buy.map((element , index) =>{ 
            return (
                <Link to={`products/${element.Databaseid}`} className='link'>
                <div id={element.Databaseid} className='Quicklinkdiv'>
                    <h4>{element.name}</h4>
                </div>
                </Link>  
            )
        }): 
        Sell.map((element , index) =>{
            return (
                <Link to={`products/${element.Databaseid}`}>
                <div id={element.Databaseid} className='Quicklinkdiv'>
                <h4>{element.name}</h4>
                </div>
                </Link>  
            )
        }) }
        
        </div>
    </section>


    <section className="registerSectioin">
        <h1>Register</h1>
    </section>

    <section className="WoolMarketSection ">
        <h1>Wool Market</h1>
    </section>

    <section className="WhatWeDoSection">
        <h1  >What WOOLENY Does</h1>
    </section>


    <section className='NewsLetterSection smallSection'>
        <h1>News Letter</h1>
        <form action="">
            <input type="email" name="email" id="email" placeholder='Email'/>
            <input type="submit" value="Submit" />
        </form>
    </section>

    <section className='smallSection footer'>

        <div>
        <h1>#WOOLENY</h1>
        <p>Lorem ipsum dolor  sit amet, consectetur adipisicing elit. <br /> Itaque aperiam laboriosam <br /></p>
        </div>
        <hr />
        <div className='SocialMedia'>

        </div>
    </section>



    </>
  )
}

export default Home