const Header = () => {

    function Camera() {
        const affiche = document.getElementById('videoContainer');
        affiche.style.bottom = "0";
        affiche.style.top = "0";
        affiche.style.height = "100vh";

        const camera = document.getElementById('camera');
        camera.style.display = "block";
        navigator.mediaDevices.getUserMedia({video : true})
        .then(stream => {
        camera.srcObject = stream;
    })
    }
    function closeCamera() {
        let cam = document.getElementById('videoContainer');
        cam.style.bottom = "100%";
        cam.style.height = "0";
        

        const camera = document.getElementById('camera');
        const mediaStream = camera.srcObject;
        const tracks = mediaStream.getTracks();

        tracks.forEach(track => {
            track.stop()
        });
    }

    return (
        <div>
            <div id="videoContainer">
                <span onClick={closeCamera} id="closeCamera">&times;</span>
                <video autoPlay id="camera" height={100} width={100}></video>
            </div>
            <div className="header">
                <div className="others"><span className="fas fa-bars"></span></div>
                <div className="others"><span className="fas fa-search"></span></div>
                <div className="others" onClick={Camera}><span className="fas fa-camera"></span></div>
            </div>
        </div>
    )
}

export default Header;