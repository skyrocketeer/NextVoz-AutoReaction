const port = chrome.runtime.connect({name: 'voz'})
port.postMessage({greeting: "hello"})
chrome.runtime.onConnect.addListener( port => {
	console.log(port)
})
// document.addEventListener('DOMContentLoaded', () => {
// 	let input = $("[name='c[users]']")[0]
// 	const token = $("[name='_xfToken']").val()

// 	// get member id
// 	if (input.value.length > 5) {
// 		const list = $(".autoCompleteList")[0].childNodes
// 		if (list.length > 0) {
// 			const uid = [].slice
// 			.call(list)
// 			.find(el => el.classList.contains("is-selected"))
// 			.firstChild.firstElementChild.getAttribute("data-user-id")
			
// 			port.postMessage({ username: input.value })

// 			const params = {
// 				uid: uid,
// 				name: input.value,
// 			}

// 			$("form.menu-content").submit( async (e) => {
// 				e.preventDefault()
// 				const result = await packUpDataMemberPost({ member: params, token })
// 				if(!result)
// 					port.postMessage({message: "Thành viên này chưa có bài viết nào"})
// 			})
// 		} 
// 		else port.postMessage({ username: "" })
// 	}
// })

// port.onMessage.addListener((msg, sender, sendResponse) => {
// 	const token = $("[name='_xfToken']").val()
	
// 	if(msg.type === 'member'){
// 		reactionByMemberPost(msg.reactionId, token)
// 	}
// 	else{
// 		//get sliced request uri
// 		const index = msg.url.indexOf("/t")
// 		const sliced = msg.url.slice(index)

// 		packUpDataPagePost(sliced, msg.reactionId, token)
// 	}
// })

// const reactionByMemberPost = (postList) => (reaction_id, token) => {
// 	console.log(postList[1])
// 	const payload = {
// 		_xfToken: token,
// 		_xfWithData: reaction_id,
// 		_xfResponseType: "json"
// 	}
// 	console.log(token)
// 	postList.forEach(post => {
// 		const mutatedUri = `https://next.voz.vn/p/${post.p_id}/react?reaction_id=${reaction_id}`
// 		payload._xfRequestUri = post.uri
// 		ajaxCall(mutatedUri, 'post', 'json', payload)
// 		.done(res => {
// 				const div = document.createElement('div')
// 				div.id = 'modal'
// 				let content =document.createElement('div') 
// 				content.classList.add("modal-content")
// 				let closeNode = document.createElement('span') 
// 				closeNode.id="close"
// 				closeNode.append('x')
// 				let p = document.createElement('p')
// 				p.append('Thành công')
// 				content.appendChild(closeNode)
// 				content.appendChild(p)
// 				div.appendChild(content)
// 				document.body.appendChild(div)
// 			//add style
// 			$('modal-content').css({
//   			'background-color':' #fefefe',
//   			'margin': '15% auto', /* 15% from the top and centered */
//   			'padding': '20px',
//   			'border': '1px solid #888',
// 				'width': '80%',
// 				'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
// 			})
// 			$('#close').css({
// 				'color': '#aaa',
// 				'float': 'right',
// 				'font-size': '28px',
// 				'font-weight': 'bold'
// 			})
// 			$("#modal").css({
// 				'z-index': 1000,
// 				'position': 'fixed',
// 				'left': 0,
// 				'top': 0,
// 				'width': '100%', /* Full width */
// 				'height': '100%', /* Full height */
// 				'overflow': 'auto', /* Enable scroll if needed */
// 				'background-color': 'rgba(0,0,0,0.4)' /* Black w/ opacity */ 
// 			})
// 			closeNode.click(() => {
// 				content.style.display = "none"
// 			})
// 		})
// 		.fail(err => console.log(err))
// 	})
// }

// function packUpDataPagePost(uri, id, token) {
// 	//get list of post_id
// 	let postId_list = []
// 	const bookmark = document.getElementsByClassName('bookmarkLink')

// 	// Iteration of Array-like HTML DOM Collection
// 	for (let item of bookmark) {
// 		const p = item.getAttribute('href').slice(3, -9)
// 		postId_list.push(p)
// 	}

// 	reactionByPagePosts(token, postId_list, uri, id)
// }

// function reactionByPagePosts(token,id_list, request_uri, reaction_id) {
// 	const prefix = "_xf"
// 	const formData = new FormData()

// 	formData.append(`${prefix}Token`, token)
// 	formData.append(`${prefix}WithData`, reaction_id)
// 	formData.append(`${prefix}ResponseType`, "json")

// 	const xhr = new XMLHttpRequest()

// 	/* get member post */
// 	id_list.forEach(post => {
// 		const mutatedUri = `https://next.voz.vn/p/${post}/react?reaction_id=${reaction_id}`
// 		formData.append(`${prefix}RequestUri`, request_uri)

// 		const xhr = new XMLHttpRequest()

// 		xhr.onreadystatechange = function () {
// 			if (xhr.readyState == XMLHttpRequest.DONE) {
// 				const data = JSON.parse(xhr.responseText)

// 				const icons = document.getElementsByClassName("actionBar-action--reaction")
// 				for (let icon of icons) {
// 					icon.innerHTML = ""
// 					if (data.reactionId) {
// 						icon.classList.remove("reaction--imageHidden")
// 						icon.classList.add("has-reaction")

// 						if (data.reactionId == 2) {
// 							icon.classList.remove("reaction--1")
// 							icon.classList.add("reaction--2")
// 						} else {
// 							icon.classList.remove("reaction--2")
// 							icon.classList.add("reaction--1")
// 						}
// 					} else {
// 						icon.classList.remove("has-reaction")
// 						icon.classList.add("reaction--imageHidden")
// 						if (!icon.classList.contains("reaction--1")) {
// 							icon.classList.remove("reaction--2")
// 							icon.classList.add("reaction--1")
// 						}
// 					}
// 					icon.insertAdjacentHTML("beforeend", data.html.content)
// 				}
// 			}
// 		}
// 		xhr.open("POST", mutatedUri, true)
// 		xhr.send(formData)
// 	})
// }

// async function packUpDataMemberPost(obj) {
// 	if (obj.hasOwnProperty("member")) {
// 		const payload = {
// 			keywords: "",
// 			"c[users]": obj.member.name.slice(0, -2),
// 			_xfToken: obj.token,
// 			_xfResponseType: "json",
// 		}

// 		ajaxCall("/search/search", "post", "json", payload)
// 		.then(data => {
// 			if (data.status === "ok") {
// 				if (data.redirect) {
// 					getAllMemberPosts(data.redirect)
// 					return false
// 				}
// 				return false
// 			}
// 		})
// 		.catch(err => console.log(err))
// 	}
// }

// async function getAllMemberPosts(url){
// 	ajaxCall(url,"get","text/html,application/xhtml+xml")
// 	.then(data => {
// 		if (data.status === 'ok'){
// 			const postList = $('.p-body-pageContent .block-container .block-body')
// 			if(postList.children().length > 0){
// 				console.log('pack up data')
// 				const re = /^(?:[^\/]*\/){3}/
// 				const post = postList.find('li .contentRow-title>a').each((i,el) => el)
// 				const cleanedList = Array.prototype.map.call( post, a => {
// 					a.uri = $(a).attr('href').match(re)[0]
// 					a.p_id = $(a).attr('href').split(re)[1].slice(5)   
// 				})
// 				reactionByMemberPost(cleanedList)
// 			}
// 		}
// 	})
// 	.catch(err => console.log(err))
// }

// async function ajaxCall(url, method, dataType, payload={}) {
// 	return new Promise((resolve,reject) => {
// 		$.ajax({
// 			url: url,
// 			type: method,
// 			dataType,
// 			data: Object.keys(payload).length > 0 && payload.constructor === Object ? payload : null,
// 		})
// 		.done(res => resolve(res))
// 		.fail(err => reject(err))
// 	})
// }
