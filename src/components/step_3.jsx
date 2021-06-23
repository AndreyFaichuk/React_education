import React, {useState, useEffect, useContext} from 'react'
import Context from "../helpers/context"
import Pic1 from "../avatars/boy.png";
import Pic2 from "../avatars/bussiness-man.png";
import Pic3 from "../avatars/girl.png";
import Pic4 from "../avatars/girl1.png";
import Pic5 from "../avatars/girl12.png";
import Pic6 from "../avatars/graphic-designer.png";
import Pic7 from "../avatars/man.png";
import Pic8 from "../avatars/man1.png"



const Step3 = () => {
    const {state, dispatch} = useContext(Context)
    const [imgUrl, setImgUrl] = useState(state.thirdStep.photoURL)


    const handleChange = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader()

        fileReader.onload = () => setImgUrl(fileReader.result)
        fileReader.readAsDataURL(file)
    }

    useEffect(() =>{
        return () => dispatch({type: 'T_STEP', payload: {photoURL: imgUrl}})
    }, [imgUrl])

    const handleChange2 = (e) => {
        setImgUrl(e.target.src)
    }
    return(
        <div className="inputsStep1">
            <img src={imgUrl} alt="avatar" id="avatar"/>
            <div className="imgUpload">
                <label htmlFor="myfile" className="chous">Upload photo</label>
                <input type="file" id="myfile" onChange={handleChange}  className="my" accept=".jpg, .png, .jpeg" name="img"/>
            </div>
            <div className="img-wrapper">
                <img src={Pic1} onClick={handleChange2} alt="pic"/>
                <img src={Pic2} onClick={handleChange2} alt="pic"/>
                <img src={Pic3} onClick={handleChange2} alt="pic"/>
                <img src={Pic4} onClick={handleChange2} alt="pic"/>
                <img src={Pic5} onClick={handleChange2} alt="pic"/>
                <img src={Pic6} onClick={handleChange2} alt="pic"/>
                <img src={Pic7} onClick={handleChange2} alt="pic"/>
                <img src={Pic8} onClick={handleChange2} alt="pic"/>
            </div>
        </div>
    )
}

export default Step3