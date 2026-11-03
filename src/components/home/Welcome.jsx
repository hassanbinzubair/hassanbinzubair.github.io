import { Typing } from "./Typing";

const Welcome = ({ mypic }) => {
  return (
    <div className="header">
      <div className="headerlhs">
        <h1>Hello I'm Hassan bin Zubair</h1>
        <p>
          I'm a Professional <Typing />
        </p>
      </div>
      <div className="headerrhs">
        <img src={mypic} alt="My Image" />
      </div>
    </div>
  );
};

export default Welcome;
