let bodyImg = document.getElementById('home');
function backgroundImageOver() 
{
    bodyImg.style.backgroundImage="url('C:/Users/rakesh/OneDrive/Desktop/background_img.jpeg')";
}
function backgroundImageOut() 
{
    bodyImg.style.backgroundImage = "url('C:/Users/rakesh/OneDrive/Desktop/background.jpg')";
}

document.addEventListener('DOMContentLoaded', (event) => 
{
    bodyImg.addEventListener('mouseover', backgroundImageOver);
    bodyImg.addEventListener('mouseout', backgroundImageOut);
});
