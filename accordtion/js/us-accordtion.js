/**
 * Simple implementation of an accordtion
 */
var UsAccordtion = (function(){

    var _accordtionClass = 'accordtions';

    var _itemClass = 'accordtion-items';

    var _accordtion = null;

    /**
     * Toggles accordtion state
     * @param {*event} e 
     */
    function _toggleCollapse(e) {
        
        e.preventDefault();

        if(e.target.classList.contains('accordtion-trigger')) {

            let panels = _accordtion.querySelectorAll(".accordtion-panel")

            let activePanel = e.target.nextElementSibling;

            if (activePanel.style.maxHeight) {
                activePanel.style.maxHeight = null;
            } else {
                panels.forEach(function(el) {
                    el.style.maxHeight = null;
                    el.parentNode.classList.remove('active')
                });
                activePanel.style.maxHeight = activePanel.scrollHeight + "px";
            } 

            e.target.parentNode.classList.toggle("active");
        }
    };

    var init = function(config=null) {
        if (config !== null) {
            _accordtionClass = config.accordtionClass;
            _itemClass = config.itemClass;
        }
        _accordtion = document.querySelector("." + _accordtionClass)
        _accordtion.addEventListener("click" , _toggleCollapse)
    };

    return {
        init: init
    };
}());
