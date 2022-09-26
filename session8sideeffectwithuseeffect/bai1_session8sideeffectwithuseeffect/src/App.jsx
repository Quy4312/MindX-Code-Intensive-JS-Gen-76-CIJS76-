import "./App.css";
import {useState,useEffect} from 'react'


function App() {
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: null,
    scrollPos: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);

  function handleScrollDocument() {
    setScrollStatus((prev) => { // to get 'previous' value of state
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }
  function BacktoTop(){
   const timer= setInterval(()=>{
    document.documentElement.scrollTop-=20;
    if(document.documentElement.scrollTop<=0){
      clearInterval(timer)
    }

    },1)
  }
  const style={
    display:scrollStatus.scrollPos<-200&&scrollStatus.scrollDirection==='up'?'block':'none',
  }
  console.log(document.body.getBoundingClientRect().top);
  console.log(scrollStatus.scrollDirection)
  return <div className="App" >
    <button className="backtotop" style={style} onClick={BacktoTop} ><i class="fa-solid fa-caret-up"></i></button>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae rerum aperiam culpa? Illum, explicabo repudiandae enim officiis nihil fuga at obcaecati numquam quam sit atque, laborum asperiores, sint quos.
   
    </div>
  </div>;
}

export default App;
