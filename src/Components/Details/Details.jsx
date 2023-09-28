import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cart from "../../Pages/Cart";
import DetailsCard from "./DetailsCard";


const Details = () => {
    const [phone, setPhone] = useState();
    const {id} = useParams();
    console.log(phone);
    const phones = useLoaderData();

    useEffect(()=>{
        const findPhone = phones.find(phone => phone.id == id)
        setPhone(findPhone)
    },[id, phones])

    return (
        <div>
            {
                <DetailsCard phone={phone}></DetailsCard>
            }
        </div>
    );
};

export default Details;