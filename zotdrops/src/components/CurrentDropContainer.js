//includes location display map, petr sticker image, description text
import PetrImage from "./image_handler.png"
function CurrentDropContainer(){
    return (
        <div>
            <img src={PetrImage} alt="Petr Sticker" />
            <p>This is some text. Let's see if it works.</p>
        </div>
    );
}
export default CurrentDropContainer;