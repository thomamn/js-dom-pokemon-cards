
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
const cardListUL = document.querySelector('.cards')



function renderCards(){
  
    for (let i = 0; i < data.length; i++){
      const card=data[i]
      const cardLi=document.createElement('li')
      cardLi.setAttribute('id', card.name)
  
      const title=document.createElement('h2')
      title.setAttribute('class', 'card--title')
      title.innerText=card.name
      cardLi.appendChild(title)
  
      const cardImg=document.createElement('img')
      num=i+1
      const imageSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +num+'.png'
      cardImg.setAttribute('src', imageSrc)
      cardImg.setAttribute('class', 'card--img')
      cardImg.setAttribute('width', '256')
      cardLi.appendChild(cardImg)


      const cardUl=document.createElement('ul')
      cardUl.setAttribute('class', 'card--text')

      for (let i=0; i<6; i++){
        const statLi = document.createElement("li")
        statLi.innerText = card.stats[i].stat.name+': '+card.stats[i].base_stat
        cardUl.appendChild(statLi)
      }
      
      

      cardLi.appendChild(cardUl)
    

      
  
      
  
      
      cardListUL.appendChild(cardLi)
    }
}
console.log(data[0]);

function main(){
    console.log(data.length)
    renderCards()
}

main()
