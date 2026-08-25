import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppourtunity to see a lot, within a time frame.</p>

      <DestinationData
        className='first-des'
        heading="Taal Volcano, Batangas"

        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, non.Eius veritatis incidunt assumenda explicabo quia hic modi cumque
        error expedita. Moditemporibustempora voluptatumconsequuntur
        omnis ducimus quia autem asequidistinctio! Quaeratmolestias ex
        consequatur distinctio auteminquisquam facilis corporisveniam nam
        eum eos adipisci liquid
        eaque maioresne cessitati busrepre henderit dolorum placeat quasi,delenitiquos voluptates."

        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className='first-des-reverse'
        heading="Mt. Daguldul, Batangas"

        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, non.Eius veritatis incidunt assumenda explicabo quia hic modi cumque
        error expedita. Moditemporibustempora voluptatumconsequuntur
        omnis ducimus quia autem asequidistinctio! Quaeratmolestias ex
        consequatur distinctio auteminquisquam facilis corporisveniam nam
        eum eos adipisci liquid
        eaque maioresne cessitati busrepre henderit dolorum placeat quasi,delenitiquos voluptates."

        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
