chrome.runtime.onConnect.addListener(port => {
   console.log(port)
   console.assert('sdaf')
   port.onMessage.addListener((msg) => console.log(msg))
   // document.querySelectorAll("button").forEach(el => {
   //    el.addEventListener("click", (e) => {
   //       let params = {
   //          active: true,
   //          currentWindow: true
   //       }

   //       chrome.tabs.query(params, (tabs) => {
   //          let message = {}
   //          const type = e.target.name || e.target.parentNode.name
   //          if(e.target.name || e.target.parentNode.name === 'member'){
   //             message = {
   //                reactionId: e.target.value || e.target.parentNode.value,
   //                type
   //             }
   //          }
   //          else{
   //             message = {
   //                url: tabs[0].url,
   //                reactionId: e.target.value || e.target.parentNode.value,
   //                type: e.target.type
   //             }
   //          }
   //          chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
   //             console.log(response)
   //          })
   //       })
   //    })
   // })


   // document.addEventListener('input', (e) => {
   //    let params = {
   //       active: true,
   //       currentWindow: true
   //    }
      
   //    chrome.tabs.query(params, (tabs) => {
   //       const message = {
   //          url: tabs[0].url,
   //          query: e.target.value
   //       }
         
   //       setTimeout( () => chrome.tabs.sendMessage(tabs[0].id, message), 200)
   //    })
   // })

   // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
   //    const port = chrome.tabs.connect(tabs[0].id)
   //    port.onMessage.addListener( (response) => {
   //       if(response.hasOwnProperty("username")){
   //          $('#member_name').append(response.username !== '' ? "&nbsp;"+response.username.slice(0,-2) : 'Xin hãy chọn một thành viên')
   //       }
   //       else {
   //          $('#no_post').html(`<span>${response.message}</span>`)
   //          $('#no_post').css('display', 'block')
   //          $("reaction-group")[0].css('display', 'none')
   //       }
   //    })
   // })
})