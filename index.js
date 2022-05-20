

//   const text1 = "I was like :joy: and she was like :happy: and we ware like :shades:"
//    const text = document.getElementById('input').value;
  


  function myFunction() {
    var text = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = text;
  
    const emojiMap = {
        smiley: "&#x1F60A",
        sad: "&#x1F625",
        happy: "&#x1f600",
     
      }
      const regExpression = /::([^:]*)::/g
     
      const emojiIt = (re, text) => {
        while (result = re.exec(text)) {
          text = text.replace(result[0], emojiMap[result[1]])
        }
        return text
      }
      
    //   document.getElementById('test').innerHTML = emojiIt(regExpression, text)
      document.getElementById('myText').innerHTML = emojiIt(regExpression, text)
      
    
  


  }


  