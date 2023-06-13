let icecream = {
    vanilla: {
        name: "Vanilla",
        coneImage: "https://i.pinimg.com/originals/3b/b9/77/3bb977b0c5f14aa77326193d3f17f944.gif",
        description: "Blend ice cream, milk, and vanilla extract together in a blender until smooth; pour into glasses and serve.",
        shakeAvi: "https://cdn.dribbble.com/users/1831037/screenshots/5876569/_animation_hand_rig_v03_dribbble.gif",
        recipe: "Vanilla me Bad"
    },
    chocolate: {
        name: "Chocolate",
        coneImage: "https://media3.giphy.com/media/YobvCme9SjUaSpAmcA/giphy.gif?cid=6c09b952n580jnl3duoym7erimjw1ryzlph30rq6ze2me4bh&ep=v1_stickers_related&rid=giphy.gif&ct=s",
        description: "Blend ice cream, milk, and Chocolate Syrup together in a blender until smooth; pour into glasses and serve.",
        shakeAvi: "https://media.tenor.com/ZH3zQzDQNowAAAAC/milkshake-chocolate.gif",
        recipe: "Choco_Latte "
    },
    strawberry: {
        name: "Strawberry",
        coneImage: "https://i.pinimg.com/originals/ac/fe/10/acfe1072df8295c62d4ceb8ac158d334.gif",
        description: "Blend ice cream, milk, and Strawberry Syrup together in a blender until smooth; pour into glasses and serve.",
        shakeAvi: "https://media4.giphy.com/media/JQGpShbCpneim19L9Q/giphy.gif?cid=6c09b952wz9rvvx3frphb0hxepchmdirt26p6mq2ik78vw6y&ep=v1_stickers_related&rid=giphy.gif&ct=s",
        recipe: "No Berry Like tha Straw"
    }
}
​
// Target all of the changeable ele
let title = document.querySelector('.flavor')
// change innerHTML
let icecreamPic = document.querySelector('.iceC')
// change SRC
let description = document.querySelector('.textbox')
// change innerHTML
​
let recipe = document.querySelector('.smContainer')
// add Recipe txt
let shaker = document.querySelector('.description')
// add image
​
​
​
​
const changeFlavors = (flavor) =>{
    // Determine what flavor
    if(flavor === "vanilla"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "lemonchiffon"
        addText(title,icecream.vanilla.name)
        addImage(icecreamPic,icecream.vanilla.coneImage)
        addText(description,icecream.vanilla.description)
        uploadImage(recipe,icecream.vanilla.shakeAvi)
        addText(shaker,icecream.vanilla.recipe)
        // ------------------------------
    }else if(flavor === "chocolate"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "burlywood"
        addText(title,icecream.chocolate.name)
        addImage(icecreamPic,icecream.chocolate.coneImage)
        addText(description,icecream.chocolate.description)
        uploadImage(recipe,icecream.chocolate.shakeAvi)
        addText(shaker,icecream.chocolate.recipe)
    }else if(flavor === "strawberry"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "pink"
        addText(title,icecream.strawberry.name)
        addImage(icecreamPic,icecream.strawberry.coneImage)
        addText(description,icecream.strawberry.description)
        uploadImage(recipe,icecream.strawberry.shakeAvi)
        addText(shaker,icecream.strawberry.recipe)
​
    }else{
        addText(title,"NeaPolitan")
    }
}
​
​
const addText =(target, text)=>{
    target.innerHTML = text
}
​
const addImage =(target, url)=>{
    target.setAttribute('src',url)
}
const uploadImage = (target,flav)=>{
let newImage = document.createElement('img')
newImage.setAttribute('src',flav)
newImage.setAttribute('class','lowerImage')
target.append(newImage)
}


  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

