var xhr = new XMLHttpRequest()
xhr.open("GET","rockbands.json")

var s1 = document.getElementById("band")
var s2 = document.getElementById("art")

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 & xhr.status >= 200 && xhr.status <300){
        var data = JSON.parse(xhr.responseText)
       for(var elem in data){
        var option = document.createElement("option")
        option.text = elem
        option.value = elem
        s1.add(option,s1.length)
       }
       var val1, val2,link
       s1.onchange  = function(){
        s2.length = 0
         val1 =  s1.selectedOptions[0].value
        var option = document.createElement("option")
        option.text = "Please Select"
        option.selected = true
        option.disabled = true
        s2.add(option,0)
        for(var i =0; i< data[val1].length ; i++){
            var option = document.createElement("option")
            option.text = data[val1][i].name
            option.value = data[val1][i].name
            s2.add(option, s2.length)
        }
        
       }
       s2.onchange = function (){
         val2 = s2.selectedOptions[0].value
        
        
        for(var i=0; i<data[val1].length; i++){
            if(data[val1][i].name == val2){
                link = data[val1][i].value
            }
        }

        var win = open(link,"_blank","width = 600, height = 400")
        


       }
    }
}

xhr.send()

