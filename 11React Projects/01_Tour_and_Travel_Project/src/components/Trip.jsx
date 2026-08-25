import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

{/* ------------- Cards ------------- */}
      <div className="tripcard">
        <TripData 
            image={Trip1}
            
            heading='Trip in Indonesia'
            
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nihil provident. Omnis similique fugiat magni totam doloremque placeat, in amet fuga. Et consequuntur atque laborum eveniet quaerat, architecto quo eligendi!'
        />

        <TripData 
            image={Trip2}

            heading='Trip in Indonesia'

            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nihil provident. Omnis similique fugiat magni totam doloremque placeat, in amet fuga. Et consequuntur atque laborum eveniet quaerat, architecto quo eligendi!'
        />
        
        <TripData 
            image={Trip3}
            
            heading='Trip in France'
            
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nihil provident. Omnis similique fugiat magni totam doloremque placeat, in amet fuga. Et consequuntur atque laborum eveniet quaerat, architecto quo eligendi!'
        />
      </div>
    </div>
  );
}

export default Trip;
