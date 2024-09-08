let API_URL ='https://script.google.com/macros/s/AKfycbzkH7mbNARE6BiXIg99fCJRvKDHSLhcJCrTicy35rXoaRek16KWCDSDbSeSnkJRnBXF/exec';


let loder = document.getElementById("loder");
loder.style.display = "none";

// let apidata = null;

async function myApi(){    
try{
    let SHEET_ID ='https://script.google.com/macros/s/AKfycbzkH7mbNARE6BiXIg99fCJRvKDHSLhcJCrTicy35rXoaRek16KWCDSDbSeSnkJRnBXF/exec';
    const resopnses = await fetch(SHEET_ID)
    apidata = await resopnses.json();
    // console.log(apidata)
    }catch(err){
        console.log(err)
    }
}





   
  
    let inputButtion = document.getElementById('inputButtion');
    inputButtion.addEventListener("click", function(){  
       
        myApi();  
        let rashiinput = document.getElementById("rashiinput").value;
        let Rashinameheading = document.getElementById('Rashinameheading')  
         let rashipara = document.getElementById('rashipara')  
         let rashitelling = document.getElementById('rashitelling')  
        if(!rashiinput){
            loder.style.display = "none"
            alert("Please Enter a valid Name")
            Rashinameheading.innerHTML = `Welcome श्रीमान, कृपया अपना सही नाम दर्ज करें!` 
            rashipara.innerText = `आखिरकार नया साल 2024 आ गया है। भविष्य में हमारे पास देखने के लिए बहुत कुछ है। नए लक्ष्य निर्धारित करने से लेकर पुराने लक्ष्यों को प्रतिबिंबित करने तक, नया साल हमारे लिए चीजों को वापस पटरी पर लाने का अवसर लेकर आया है। अपने लक्ष्यों को प्राप्त करने में भारत के सर्वश्रेष्ठ ज्योतिषियों द्वारा बनाया गया राशिफल 2024 (rashifal 2024) आपका सही मार्गदर्शन करेगा। हम सबकी जिंदगी में लक्ष्य होते हैं, जिसे हम हासिल करना चाहते हैं। ये लक्ष्य कुछ भी हो सकते हैं, चाहे साल 2024 में अपना व्यवसाय शुरू करना हो या प्यार पाने की इच्छा हो। अपने लक्ष्यों को प्राप्त करने की जितनी तीव्र इच्छा हमारे अंदर होती है, उतनी ही ज्यादा बाधाएं हमारे सामने आती हैं और मन भी उतनी ही व्याकुलता से भरा हुआ होता है। यह स्पष्ट है कि जीवन में सब कुछ हमारी योजना के अनुसार नहीं होता है। कई मायनों में यह बात अच्छी है, तो कई बार यह बात निराशा भरी भी है। ऐसे स्थिति में हमें यह सोचने की जरूरत पड़ती है कि हम क्या गलत कर रहे हैं या हमारे साथ क्या गलत हो रहा है। ऐसा करने में आपकी मदद करने के लिए आपका वार्षिक राशिफल 2024 है। जिससे आप अच्छे से समझ कर अपने आने वाले भविष्य को सरल और सफल बना सकते हैं। इसके अलावा जो निर्णय और लक्ष्य आप निर्धारित करने वाले हैं, उसके लिए आपको प्रेरणा भी मिलेगी| राशिफल आपको जागरूक करने और आपको जीवन में सही राह पर ले जाने के लिए होते हैं। इसी तरह, 2024 राशिफल (rashifal 2024 Hindi) आपके साथ आने वाले सभी अवसरों को साझा करने के बारे में है, जो आपको सही दिशा में आगे बढ़ने में मदद करेंगे। ज्योतिषियों के अनुसार, हम जो चीजें करते हैं, वह हमेशा हमारे लक्ष्यों या जीवन में हमारे रिश्तों को प्रभावित नहीं करती हैं। कभी-कभी, ग्रहों, राशियों आदि की ऊर्जाएं हमारे लिए निर्णय लेती हैं। अगर कोई उन फैसलों से अनजान है, तो वह जीवन में गलत कदम उठाने के लिए मजबूर हो जाते हैं। कई बार हम किसी खास चीज को पूरे दिल से हासिल करने की कोशिश करते हैं लेकिन आखिर में ऐसा करने में असफल हो जाते हैं। यह या तो आपकी कोशिश में कमी का परिणाम हो सकता है या ग्रहों या राशियों का, आप पर प्रभाव हो सकता है| ग्रहों का प्रभाव सभी राशियों के जातकों पर अलग-अलग तरह से दिखाई देता है। किसी पर ग्रहों का प्रभाव अनुकूल होता है, तो किसी पर प्रतिकूल। लेकिन ये ग्रह कभी-भी किसी-भी जातक की राशि में स्थिर नहीं रहते। यह समय समय पर अपनी जगह बदलते रहते हैं।`
        }else{
            Rashinameheading.innerHTML = `Welcome , ${rashiinput} जी आपका राशिफल निचे है !` 
             loder.style.display = "flex" 
        }
         
          
        let fristletter = rashiinput.charAt(0).toLowerCase();
        setTimeout(() => {
            // console.log(apidata)
            if(fristletter === "a" || fristletter === "l" || fristletter === "e" || fristletter === "i" || fristletter === "o"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[2].RASHI} है!`
                rashipara.innerHTML = apidata.data[2].RASHIFAL                
            }else if(fristletter === "k" || fristletter === "gh" || fristletter === "q" || fristletter === "c"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[3].RASHI} है!`
                rashipara.innerHTML = apidata.data[3].RASHIFAL
            }else if(fristletter === "dd" || fristletter === "h"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[4].RASHI} है!`
                rashipara.innerHTML = apidata.data[4].RASHIFAL
            }
            else if(fristletter === "m" || fristletter === "tt"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[5].RASHI} है!`
                rashipara.innerHTML = apidata.data[5].RASHIFAL
            }
            else if(fristletter === "p" || fristletter === "tthh"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[6].RASHI} है!`
                rashipara.innerHTML = apidata.data[6].RASHIFAL
            }
            else if(fristletter === "r" || fristletter === "t"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[7].RASHI} है!`
                rashipara.innerHTML = apidata.data[7].RASHIFAL
            }
            else if(fristletter === "n" || fristletter === "y"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[8].RASHI} है!`
                rashipara.innerHTML = apidata.data[8].RASHIFAL
            }
            else if(fristletter === "bh" || fristletter === "f" || fristletter === "dh"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[9].RASHI} है!`
                rashipara.innerHTML = apidata.data[9].RASHIFAL
            }
            else if(fristletter === "kh" || fristletter === "j"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[10].RASHI} है!`
                rashipara.innerHTML = apidata.data[10].RASHIFAL
            }
            else if(fristletter === "g" || fristletter === "s" || fristletter === "sh" ){
                rashitelling.innerHTML = ` आपकी ${apidata.data[11].RASHI} है!`
                rashipara.innerHTML = apidata.data[11].RASHIFAL
            }else if(fristletter === "d" || fristletter === "ch" || fristletter === "z" || fristletter === "th"){
                rashitelling.innerHTML = ` आपकी ${apidata.data[12].RASHI} है!`
                rashipara.innerHTML = apidata.data[12].RASHIFAL
            }
            console.log(fristletter)
            

        }, 4000);
    })

