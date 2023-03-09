import { CardStyle, CloseButton } from "./cardStyles";

export default function Card({id,onClose,name,species,gender,image}) {
   return (
      <CardStyle>
         <CloseButton onClick={()=>onClose(id)}>X</CloseButton>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img  src={image} alt="" />
      </CardStyle>
   );
}
