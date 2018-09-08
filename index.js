const vm = new Vue({
  el: '#app',
  data: {
    connected: false,
    message: '',
    messageType: '',
    messageCSS: '',
    animation: ''
  },
  computed: {
  	iconClass: function () { return [this.message, 'animated', this.animation].join(' ') }
  }
})

// WebSocket onmessage is not firing? falling back to HTTP polling
/*
const ws = new WebSocket(['ws://', config.channel, '.v1.readiness.io/', config.topic].join(''))
ws.onmessage = (ev) => {
	console.log('Got message', ev)
	if (ev.message) 	vm.message 		= ev.message
	if (ev.messageType) vm.messageType 	= ev.messageType
	if (ev.messageCSS)  vm.messageCSS 	= ev.messageCSS
	if (ev.animation)   vm.animation 	= ev.animation
}
ws.onopen = () => {
	vm.connected = true
}
ws.onclose = (ev) => {
	vm.connected = false
	console.log('Disconnected', ev)
	setTimeout(() => {
		location.reload()
	},1000)
}
*/

const url  = ['//', config.channel, '.v1.readiness.io/', config.topic].join('')
const tick = setInterval(() => {
	axios.get(url).then((response) => {
		// console.log('Got response', response)
		let ev = response.data
		vm.connected = true

		if (ev.message) 	vm.message 		= ev.message
		if (ev.messageType) vm.messageType 	= ev.messageType
		if (ev.messageCSS)  vm.messageCSS 	= ev.messageCSS
		if (ev.animation)   vm.animation 	= ev.animation
			
	}).catch((response) => {
		console.error('Got error', response)
		vm.connected = false
	})
}, 1000);