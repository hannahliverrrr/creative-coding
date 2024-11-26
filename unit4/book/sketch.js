let word = "Turkey"

let wc = 0;
let chapter = 1;

function setup() {

  // We won't need any canvas
  noCanvas();

 
  let content = select("body");
  content.attribute("id","content");
  
  content.child(createElement("h1","The Turkey Book"));
  
  
  // make a sentence
  while( wc < 50000){
    //create chapter headings using variable and string, then generating chapter number
    content.child(createElement("h2", "Chapter " + String(chapter++).repeat(random(1,1)).toUpperCase()));

   //sentence length, paragraph length, punctuation 
    for (let p = 0; p < random(5,20); p++){
      let paragraph = '';
      for (let s = 0; s < random(3,20); s++){
        let internalPunct = [",",",",",",";"," --"];
        let endPunct = [".",".","?","!"];
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = random(9,25);
        wc += sentenceLength + 1;
    
    for (let w = 0; w < sentenceLength; w++){
        sentence += " " + word;
        if (random() < 0.2){
        sentence += random(internalPunct);
        }
    }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p",paragraph));
    }
    
  
    
  }
  
 window.PagedPolyfill.preview();
}
