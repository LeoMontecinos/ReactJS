import { NavbarComponent } from "../../Component/NavbarComponents"
export const HomeContainer = () => {

    const carrito = [];
    return (
        <div>
           <NavbarComponent cart={carrito}/> 
        </div>
    )
}