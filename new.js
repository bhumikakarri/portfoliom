body {
    background-image: linear-gradient(to right, #B4B3ED, #fff, #b1b1d0);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
  }
  
  @media only screen and (max-width: 1024px) {
    body {
      background-image: linear-gradient(to right, #B4B3ED, #fff, #b1b1d0);
      width: 1024px;
    }
    .header {
      position: fixed;
    }
    .head .Logo {
      margin-left: -50px;
    }
    .head .menu {
      margin-top: 20px;
      margin-left: 120px;
    }
    .head .menu li {
      display: inline-flex;
      padding-right: 20px;
      font-size: 10px;
      font-weight: bold;
      animation: slideTop1 .5s ease forwards;
      animation-delay: calc(.3s * var(--i));
  }
  
  
    .head h2 {
      margin-left: 10px;
    }
    .container .introduction {
      color: black;
      margin-left: -90px;
      background-image: linear-gradient(to right, #B4B3ED, #fff, #b1b1d0);
      -webkit-background-clip: text;
      color: transparent;
    }
    .container .circle {
      height: 260px;
      width: 260px;
      border-radius: 50%;
      margin-top: 210px;
      padding: 3px;
      margin-left: -130px;
    }
    .like p {
      margin-left: -50px;
    }
    .like .ghj {
      margin-left: -300px;
    }
    .like .box {
      margin-right: 500px;
      margin-top: 40px;
      position: relative;
    }
    .like h2 {
      margin-left: -50px;
      margin-top: 70px;
    }
    .like .line {
      color: #6711f1;
      height: 3px;
      width: 110px;
      border-radius: 10px;
      margin-left: -50px;
    }
    .like .filter {
      height: 80px;
      width: 530px;
      background-color: black;
      border: 2px solid black;
      border-radius: 50px;
      margin-top: 60px;
      margin-left: 100px;
    }
    .work .filterable_Cards .front {
      position: relative;
      border-radius: 2rem;
      width: 250px;
      height: 294px;
    }
    .work .card {
      background-color: black;
      border: 2px solid black;
      position: relative;
      border-radius: 2rem;
      width: 250px;
      height: 294px;
    }
    .work .filterable_Cards .card img {
      width: 96%;
      height: 97%;
      border-radius: 2rem;
    }
    .text .my {
      margin-left: -50px;
    }
    .self2 .data {
      margin-right: 150px;
    }
    .self2 .location {
      margin-right: 250px;
      position: relative;
    }
  }
  
  @media only screen and (max-width: 425px) {
    .head .menu {
      margin-top: 24px;
      margin-left: 50px;
      font-size: 5px;
    }
    .home-sci a {
      display: inline-flex;
      padding-right: 5px;
      font-size: 10px;
      font-weight: bold;
      animation: slideTop1 .5s ease forwards;
      animation-delay: calc(.3s * var(--i));
  }
  
    .head .Logo {
      margin-left: -110px;
    }
    .head h2 {
      margin-left: 3px;
    }
    .container .introduction {
      color: black;
      margin-left: 180px;
      margin-top: -150px;
    }
    .container .circle {
      background-color: #6711f1;
      height: 260px;
      width: 260px;
      border-radius: 50%;
      margin-top: 210px;
      padding: 3px;
      margin-left: 150px;
    }
    .like .certificate {
      margin-left: -80px;
      padding-right: 490px;
    }
    .like .text {
      margin-left: 15px;
    }
    .like .btn3 {
      margin-left: -80px;
    }
    .like p {
      margin-left: -80px;
    }
    .like .ghj {
      margin-left: -110px;
    }
    .like .box {
      margin-left: -110px;
      margin-top: 40px;
      position: relative;
    }
    .like h2 {
      margin-left: -80px;
      margin-top: 80px;
    }
    .like .line {
      background-image: linear-gradient(to right, #B4B3ED, #fff, #b1b1d0);
      height: 3px;
      width: 110px;
      border-radius: 10px;
      margin-left: -80px;
    }
    .like .filter {
      height: 80px;
      width: 530px;
      background-color: black;
      border: 2px solid black;
      border-radius: 50px;
      margin-top: 60px;
      margin-left: -90px;
    }
    .work .filterable_Cards .front {
      position: relative;
      border-radius: 2rem;
      width: 250px;
      height: 294px;
    }
    .work .card {
      background-color:black;
      border: 2px solid black;
      position: relative;
      border-radius: 2rem;
      width: 250px;
      height: 294px;
    }
    .work .filterable_Cards .card img {
      width: 96%;
      height: 97%;
      border-radius: 2rem;
    }
    .text .my {
      margin-left: -80px;
    }
    .data .contact {
      height: 350px;
      width: 650px;
      background-color: black;
      border: 1px solid black;
      border-radius: 15px;
      margin-left: 170px;
      margin-top: 30px;
    }
    .self2 .data {
      margin-left: -180px;
    }
    .self2 .location {
      margin-left: 200px;
      position: relative;
    }
  }
  
  header {
    background-image: linear-gradient(to right, #B4B3ED, #fff, #b1b1d0);
    height: 60px;
    width: 100%;
    color: black;
    position: fixed;
    z-index: 1;
  }
  
  .head {
    color: black;
    font-family: "Poppins", sans-serif;
    display: inline-flex;
    margin-left: 100px;
    font-size: 25px;
  }
  
  .Logo {
    margin-left: 20px;
    margin-top: -10px;
    cursor: default;
    opacity: 0;
    animation: slideRight 1s ease forwards;
  }
  
  .head h2 {
    animation: zoomIn 1s ease forwards;
    animation-delay: 0.7s;
  }
  
  .head ul {
    margin-top: 20px;
    margin-left: 370px;
  }
  
  .menu li {
    display: inline-flex;
    padding-right: 50px;
    font-size: 18px;
    font-weight: bold;
    animation: slideTop1 0.5s ease forwards;
    animation-delay: calc(0.3s * var(--i));
  }
  
  .menu li a {
    text-decoration: none;
    color: black;
  }
  
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .btn1 {
    font-size: 10px;
    border: none;
    padding: 2px 2.5px;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
  }
  
  
  .btn1::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    border-radius: 10px;
    background-color: #6711f1;
    transition: 0.5s ease;
  }
  .btn1:hover::before {
    width: 60%;
  }
  
  .btn1::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-image:linear-gradient(to right,#F05269,#C570EA,#3BAFEA);
    transition: 0.4s ease;
    z-index: -1;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
     .circle{
     background-color: #6711f1;
      height: 260px;
      width: 260px;
      border-radius: 50%;
      margin-top: 250px;
      padding: 3px;
     }
     .circle:hover {
      box-shadow: 0 0 5px #6711f1, 0 0 25px #6711f1, 0 0 50px #6711f1, 0 0 100px #6711f1, 0 0 200px #6711f1;
  }
  
     .circle{
      animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
      animation-delay: .5s, 3.1s; 
      opacity: 0;
      }   
      @keyframes zoomIn{
        0%{
          opacity: 0;
          transform: scale(0);
        }
        100%{
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes floatImage{
        0%{
          transform: translateY(0);
        }
        50%{
          transform: translateY(-35px);
        }
        100%{
          transform: translateY(0);
        }
      }
    
     .introduction {
       color:black;
       
     }
     .linear {
      font-size: 20px;
      font-weight: bold;
      justify-content: center;
  }
  
  .multiple-text {
      /* No color needed here, it will be set by the inline HTML */
  }
  
  .colored-text {
      color: #6711f1; 
  }
  
  
    
    .multiple-text{
      background-image:linear-gradient(to right,#F05269,#3BAFEA);   
      background-clip: text;
      color: transparent;
      width: 100%; 
    }
    .btn2{
      height: 50px;
      width: 200px;
      border-radius: 30px;
      background-color: #6711f1;
      color: black;
      border:none;
      margin-top: 20px;
     
    }
    .btn2:hover {
      box-shadow: 0 0 3px #6711f1, 0 0 10px #6711f1, 0 0 20px #6711f1, 0 0 30px #6711f1, 0 0 40px #6711f1;
      transition: 0.4s ease;
  }
  
  .home-sci a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: transparent;
    border: 2px solid #6711f1;
    border-radius: 50%;
    font-size: 18px;
    color: #6711f1;
    text-decoration: none;
    opacity: 1; 
    animation: slideLeft 1s ease forwards;
    animation-delay: calc(.2s * var(--i));
    margin: 0 15px; 
    margin-top: 20px;
  }
  
  .home-sci a:hover {
    background: #6711f1;
    color: #bfb4d1;
    box-shadow: 0 0 15px #681de1;
  }
    .demo{
      color:black;
      font-size: 15px;
    }
    .line{
     background-color: #681de1;
      height: 3px;
      width: 110px;
      border-radius: 10px;
    }
  
    .certificate{
      height: 400px;
      width: 500px;
      background-color: #8657d1;
    }
    .my{
      display: flex;
    }
    .text{
      color:black;
      margin-left: 50px;
      margin-top: 20px;
    }
    .one{
      background: linear-gradient(to right,#3BAFEA,#c92b2b);
      background-clip: text;
      color: transparent;
      font-size: 20px;
    }
    
    .btn3{
      height: 50px;
      width: 200px;
      border-radius: 40px;
      background-color: #6711f1;
      color:black;
      border:none;
     margin-top: 40px;
    }
    .btn3:hover {
      box-shadow: 0 0 3px #6711f1, 0 0 10px #6711f1, 0 0 20px #6711f1, 0 0 30px #6711f1, 0 0 40px #6711f1;
      transition: 0.4s ease;
  }
  .box {
    height: 400px;
    width: 500px;
    background-color: white;
    border: 1px solid white;
    box-shadow: 0 4px 10px rgba(103, 17, 241);
  }
  
    .ghj{
      margin-left: -60px;
    }
    .demo{
      color: black;
      font-size: 15px;
      margin-top: 20px;
    }
    .like{
      margin-left: 180px;
      margin-top: 80px;
    }
    
    .three{
      color: black;
      font-size: 15px;
      margin-top: 20px;
    }
    .persentage{
      color:  black;
      margin-top: 20px;
    }
    .progress{
      height: 5px;
      width: 550px;
      background-color:rgb(103, 17, 241);
    }
    .progress-bar{
      background-image:linear-gradient(to right,#b4a5cc,#C570EA,#eeafb9);
      animation:slideRight 1s ease forwards;
      animation-delay: 5s;
      opacity: 0;
    }
    @keyframes slideRight {
      0%{
        opacity: 0;
        transform: translateX(-100px);
      }
      30%{
        opacity: 1;
        transform: translateX(-30);
      }
      100%{
        opacity: 1;
        transform: translateX(0);
      }
    }
    .skill{
      display: inline-flex;
    }
    .gif img{
      height: 100px;
      width: 100px;
      margin-top: 40px;
      margin-left: 20px;
    }
    .pic img{
      margin-top: 50px;
      height: 100px;
      width: 100px;
      margin-left: 20px;
    }
    .contact{
      height: 350px;
      width: 650px;
      background-color: rgba(253, 249, 249, 0.014);
      border: 1px solid rgba(255, 255, 255, 0.13);
      border-radius: 15px;
      margin-left: 170px;
      margin-top: 30px;
    }
    .sub{
      display: inline-flex;
    }
    .box1{
      height: 40px;
      width: 280px;
      background-color: rgba(255, 255, 255, 0.055);
      border: 1px solid rgba(255, 255, 255, 0.13);
      margin-left: 30px;
      border-radius: 5px;
      color:black;
    }
    .box2{
      height: 40px;
      width: 590px;
      background-color: rgba(255, 255, 255, 0.055);
      border: 1px solid rgba(255, 255, 255, 0.13);
      margin-left: 30px;
      margin-top: 20px;
      border-radius: 5px;
      color:black;
    }
    .box3{
      height: 80px;
      width: 590px;
      background-color: rgba(255, 255, 255, 0.055);
      border: 1px solid rgba(255, 255, 255, 0.13);
      margin-left: 30px;
      margin-top: 20px;
      border-radius: 5px;
      color: black;
    }
    .location{
      margin-top: 30px;
    }
    .box5{
      height: 90px;
      width: 320px;
      background-color: rgba(253, 249, 249, 0.014);
      border: 1px solid rgba(255, 255, 255, 0.13);
      margin-left: -50px;
      border-radius: 10px;
    }
    .icon1{
    height: 60px;
    width: 60px;
    background-color: rgba(255, 255, 255, 0.055);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 15px;
   }
  .work{
    margin-top: 50px;
    margin-right: 40px;
  }
  .card {
    background-color: rgba(255, 255, 255, 0.116);
    border: 2px solid rgba(255, 255, 255, 0.404);
    position: relative;
    border-radius: 2rem;
    margin-left: 40px;
    width: 250px;
    height: 294px;
    margin-bottom: 30px;
  }
  .card img{
    width: 97%;
    height: 97%;
    border-radius: 2rem;
  }
  .front {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    box-shadow: 0 0 10px 2px rgba(50, 50, 50, 2.5);
    backface-visibility: hidden;
    color: rgb(184, 179, 179);
  }
  
  .front {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  
  .front-heading {
    font-size: 28px;
    font-family: "Poppins", sans-serif; 
  }
  .card .SiteName{
    border-radius: 2rem;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(#c670ea88,#f0526a94);
    border: 2px solid rgba(212, 12, 122, 0.678);
    color:black;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    text-align:center;  
    transform:scaleY(0);
    transition:all 0.4s ease-in-out; 
  }
  .card:hover .SiteName{
    transform:scaleX(1);
  }
  .filter{
    height: 80px;
    width: 530px;
    background-color:#ac8ae2;
    border: 2px solid rgba(255, 255, 255, 0.13);
    border-radius: 50px;
    margin-top: 60px;
    margin-left: 230px;
    
  }
  .filter:hover {
    box-shadow: 0 0 5px #6711f1, 0 0 25px #6711f1, 0 0 50px #6711f1, 0 0 100px #6711f1, 0 0 200px #6711f1;
  }
  
  .link{
    display: inline-flex;
    margin-top: 20px;
  }
  
  .active{
    background-image: linear-gradient(to right, #c48585, #74a3da);
  
  }
  .hide {
    display: none;
  }
  .education{
    margin-left: 180px;
    margin-top: 50px;
  }
  .filterable_Cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .self{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .self2{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 70px;
  }
  
  @keyframes slideRight {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
  }
  
  @keyframes slideLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
  }
  
  @keyframes slideTop {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
  }
  