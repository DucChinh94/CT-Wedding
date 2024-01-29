(function ($){
    $(document).ready(function(){
        let slider_content = `
        <span>WE’RE GETTING MARRIED</span>
        <h4>Save Our Date</h4>
        <p>25 February 2024</p>
        `
        $('.slider-content--inner').html(slider_content)
    })
})(jQuery)

$("#my_music").on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});