class TypeAnim {
    constructor(htmlEL, nameArray, waitBetween){
        this.htmlEl = htmlEL;
        this.displayText = '';
        this.nameArray = nameArray;
        this.arrayIndex = 0;
        this.waitBetween = waitBetween;
        this.typeEffect();
        this.backSpace = false;
    }
    typeEffect() {
        const index = this.arrayIndex % this.nameArray.length;
        const name = this.nameArray[index];

        if(this.backSpace && this.displayText !== this.nameArray[2]) {
            this.displayText = name.substring(0, this.displayText.length - 1);
        } else if (!this.backSpace && this.displayText !== this.nameArray[2]){
            this.displayText = name.substring(0, this.displayText.length + 1);
        }
        document.getElementById('nameInput').innerHTML =`${this.displayText}`;
        

        let speed = 300;
        if(this.backSpace){
            speed = 120;
        }

        if(!this.backSpace && this.displayText === name){
            speed = this.waitBetween;
            this.backSpace = true;
        
        }
            else if(this.backSpace && this.displayText ==='A'){
                speed = 800;
                this.backSpace = false;
                this.arrayIndex++;
                
            }
            if(this.arrayIndex == this.nameArray.length){
                this.document.getElementById('cursor-anim').classList.remove('cursor-anim');
            return
            }
            setTimeout(() => this.typeEffect(), speed);
        }
    }
document.addEventListener('DOMContentLoaded', init);

        function init(){
            const htmlEL = document.getElementById('nameInput');
            const nameArray = ['Aweso', 'Amaz',
            'Andrew'];
            const waitBetween = 500;
            new TypeAnim(htmlEL, nameArray, waitBetween);
        }

        
            var EL = document.getElementById('cursor-anim');
        function addCursor(){
            if(EL.classList.contains('cursor-toggle') !==true){
                EL.classList.add('cursor-toggle');
                EL.classList.remove('cursor-anim')
            }
            else if(EL.classList.contains('cursor-toggle') == true){EL.classList.remove('cursor-toggle');
            EL.classList.add('cursor-anim')
        }
            setTimeout(() => addCursor(), 500)
        }
        addCursor();
    