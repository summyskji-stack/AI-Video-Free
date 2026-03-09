const imageUpload =
document.getElementById("imageUpload")

const prompt =
document.getElementById("prompt")

const generateBtn =
document.getElementById("generateBtn")

const videoPreview =
document.getElementById("videoPreview")

const downloadBtn =
document.getElementById("downloadBtn")


generateBtn.onclick = function(){

if(!imageUpload.files[0]){

alert("Please upload image first")

return

}

if(prompt.value===""){

alert("Enter motion prompt")

return

}

const file =
imageUpload.files[0]

const url =
URL.createObjectURL(file)

videoPreview.src = url

alert(
"Demo preview generated. Connect AI API for real motion video."
)

}


downloadBtn.onclick = function(){

if(videoPreview.src===""){

alert("No video available")

return

}

const a = document.createElement("a")

a.href = videoPreview.src

a.download = "ai-video.mp4"

a.click()

}
