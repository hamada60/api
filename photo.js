fetch('https://jsonplaceholder.typicode.com/photos', {}).then(
    res => {
        return res.json()
    }
).then(
    data=>{ 
        const getPhosts = document.querySelector('#allInfo')

        

        data.slice(0,27).forEach(element => {
            const createTag = (ele)=>{
                return document.createElement(ele)
            }

            const createTagDiv = document.createElement('div')
            createTagDiv.setAttribute('class','card col-md-3 mx-3 my-3')
            getPhosts.appendChild(createTagDiv)

            const creImg = createTag('img')
            creImg.setAttribute('class','card-img-top')

            const cerDiv = createTag('div')
            cerDiv.setAttribute('class','card-body')

            const geth5 = createTag('h5')
            cerDiv.setAttribute('class','card-title')

            const getp = createTag('p')
            cerDiv.setAttribute('class','card-text')

            createTagDiv.appendChild(creImg)
            createTagDiv.appendChild(cerDiv)

            cerDiv.appendChild(geth5)
            cerDiv.appendChild(getp)

            const obj = {
                id: element.id,
                img: element.thumbnailUrl,
                title: element.title    
            }

            creImg.src = obj.img
            getp.textContent = obj.title
            geth5.textContent = obj.id

        })


    }
).catch((e) => {
    alert(e)
});