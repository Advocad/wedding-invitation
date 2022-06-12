import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { OurWedding, Guest, Place, Essence, Program, DressCode, Confirmation } from "../../components"
import { IUser, users } from "../../utils/users";

export const User = () => {
  let { Id } = useParams();

  const user = useMemo(() => users.find(item => item.id === Id) as IUser, [Id]);
  
  return (
    <div>
      <OurWedding />
      <Guest  name={user.name} />
      <Place />
      <Essence />
      <Program />
      <DressCode />
      <Confirmation />
    </div>
  )
}