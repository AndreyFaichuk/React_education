
const body = document.querySelector("body")

const ColorToggle = () => {
    const switchTheme = (e) => {
        if(e.target.checked){
            body.className = "dark"
            localStorage.setItem('theme', "dark")
        } else {
            body.className = ""
            localStorage.setItem('theme', "")
        }
    }

    return(
        <>
            <label className="checkbox">
                <input type="checkbox" onChange={switchTheme}/>
                <span>Switch theme</span>
            </label>
        </>
    )
}

export default ColorToggle