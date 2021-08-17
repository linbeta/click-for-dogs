const getRandomDog = async () => {
    const res = await axios.get("https://random.dog/woof.json?ref=apilist.fun");
    return res.data.url;
}

const loadButton = document.querySelector("#load");
const imageBoard = document.querySelector("#dogImages");

const postNewItem = async () => {
    const randomDogSrc = await getRandomDog();
    // console.log(randomDogSrc)
    const splitedUrlArray = randomDogSrc.split(".")
    const dataType = splitedUrlArray[splitedUrlArray.length - 1].toLowerCase();
    if (dataType === "jpg" || dataType === "png" || dataType === "gif" || dataType === "jpeg" || dataType === "jiff") {
        addNewImage(randomDogSrc);
    } else if (dataType === "mp4" || dataType === "webm") {
        addNewVideo(randomDogSrc)
    }
}

function addNewImage(urlSourse) {
    const newImageFrame = document.createElement('DIV');
    newImageFrame.classList.add('imgContainer');
    const newImage = document.createElement('IMG');
    newImage.src = urlSourse;
    newImageFrame.appendChild(newImage);
    imageBoard.appendChild(newImageFrame);
}

function addNewVideo(urlSourse) {
    const newImageFrame = document.createElement('DIV');
    newImageFrame.classList.add('imgContainer');
    const newVideo = document.createElement('VIDEO');
    newVideo.controls = 'true';
    newVideo.height = '300';
    newVideo.width = '250';
    const videoSource = document.createElement('SOURCE');
    videoSource.src = urlSourse;
    newVideo.appendChild(videoSource);
    newImageFrame.appendChild(newVideo);
    imageBoard.appendChild(newImageFrame);
    newVideo.play();
}

loadButton.addEventListener('click', postNewItem);
