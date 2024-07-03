import React, { useState } from "react";
export default function About(props) {
  const [text, setText] = useState("Enable Dark Mode");
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const handleDarkMode = () => {
    if (mystyle.color == "white") {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setText("Enable Dark Mode");
    } else {
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      setText("Disable Dark Mode");
    }
  };
  // const tglmode = (num) => {
  //   if (num == 1) {
  //     return props.toggleMode1;
  //   }
  //   if (num == 2) {
  //     return props.toggleMode2;
  //   }
  //   if (num == 3) {
  //     return props.toggleMode3;
  //   }
  // };
  return (
    <div>
      <div className="container" style={mystyle}>
        <h1>This is About Us heading</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          reprehenderit, eveniet numquam unde laborum vel natus. Aspernatur
          totam cumque laborum voluptatum sapiente accusantium adipisci velit
          recusandae, doloribus ut temporibus ad molestias consectetur natus
          obcaecati, vero quas veniam! Neque repellat commodi laudantium
          accusamus, itaque, quidem placeat et omnis tempore unde corporis
          doloribus! Odit molestias corrupti sunt voluptate. Earum deleniti
          neque fugit, provident natus saepe rem. A dolor veniam repellendus
          nulla aut optio rerum laborum id sunt totam, quis sapiente autem
          suscipit ea odio quos mollitia consectetur repudiandae velit. Dicta
          quisquam rerum repellat, laudantium fuga debitis illum animi libero
          sequi velit sapiente quas quae optio commodi excepturi voluptatem rem
          possimus corrupti soluta. Qui fugiat voluptatibus nostrum illo ipsum
          recusandae voluptatem fuga odit ratione excepturi ut quam illum,
          laboriosam ea quos expedita assumenda eius accusamus totam! Voluptatum
          suscipit rerum nostrum atque recusandae dolor, sapiente cum quasi amet
          laborum tempora, tenetur reiciendis hic labore voluptatem porro ad
          excepturi ex quam ipsa perferendis, eum earum nihil. Dolorum quidem
          repudiandae accusamus placeat rem facilis fugiat veniam impedit
          veritatis ipsa. Voluptatibus cumque optio magni deleniti illum
          recusandae ab nulla labore, voluptas delectus eos dolorum fugit vero
          non saepe consequatur laudantium. Eveniet dolor nulla odio nesciunt
          facilis dolorum fugiat voluptas velit laborum, est perspiciatis amet
          nostrum mollitia minus ullam adipisci quo nam animi, quaerat earum
          eius aliquam! Inventore ab dolor vel repellat provident libero minus
          quos doloribus dignissimos veritatis at nisi beatae tenetur
          consequatur recusandae nihil quaerat iusto ullam, vitae est
          reprehenderit! Consequuntur ipsum consectetur magnam architecto earum?
          Quia cupiditate molestias minus ullam id, hic, nihil sit perspiciatis
          nobis sint distinctio. Ducimus a deleniti nemo sapiente consequatur
          dicta nostrum id facilis placeat iste aliquid, in assumenda omnis
          tenetur quidem aspernatur rem ex harum praesentium ea. Fugiat suscipit
          error consequatur velit maxime perspiciatis vero deleniti aspernatur
          voluptatum, ex animi.
        </p>
      </div>
      <div className={`container my10`}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDarkMode}
        >
          {text}
        </button>
        {/* <div className="modes">
          <div className="mode" onClick={tglmode(1)}>
            1
          </div>
          <div className="mode" onClick={tglmode(2)}>
            2
          </div>
          <div className="mode" onClick={tglmode(3)}>
            3
          </div> 
        </div>
          */}
      </div>
    </div>
  );
}
