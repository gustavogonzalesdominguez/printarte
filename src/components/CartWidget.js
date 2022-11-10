import logoIcon from "./img/carrito1.png";
const styles = {
    imagenLogo: {
        width: "30px"
    }
}
const CartWidget = () => {
    return  <button> 
        <img src={logoIcon} style={styles.imagenLogo}  alt= "img"/>
    </button>;

};

export default CartWidget;